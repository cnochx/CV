#!/usr/bin/env node
/**
 * Readability test for Designsheet v3.4 "Clean Core"
 * (treasures/designsheet-grellmann-app-v3.4.html, §2 contrast receipts).
 *
 * Computes WCAG 2 contrast ratios (relative luminance) for every
 * text/surface pair the sheet licenses — including alpha-composited
 * glass surfaces and the cyan hover wash — and asserts the AA
 * thresholds: 4.5:1 for text, 3.0:1 for non-text UI (borders, rings).
 *
 * Run:  node treasures/contrast-test.mjs
 * Exit: 0 = all pass · 1 = at least one failure
 */

/* ── v3 tokens (single source: keep in sync with the sheet :root) ── */
const T = {
  'ink-950': '#0a0a0c',
  'ink-900': '#101014',
  'ink-800': '#17171c',
  'ink-700': '#26262e',
  'ink-500': '#80808e',
  'ink-400': '#9d9daa',
  'frost-100': '#f5f5f7',
  'frost-300': '#c9c9d3',
  'primary-300': '#f0abfc',
  'primary-400': '#e879f9',
  'accent-300': '#67e8f9',
  'accent-400': '#22d3ee',
  white: '#ffffff',
};

/* ── WCAG 2 math ── */
const hex = (h) => {
  const s = h.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16));
};
const chan = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const lum = (rgb) =>
  0.2126 * chan(rgb[0]) + 0.7152 * chan(rgb[1]) + 0.0722 * chan(rgb[2]);
const ratio = (fg, bg) => {
  const [l1, l2] = [lum(fg), lum(bg)].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
};
/* Composite translucent layers (top-last) over an opaque base. */
const comp = (base, ...layers) =>
  layers.reduce(
    (acc, [color, a]) => acc.map((c, i) => hex(T[color])[i] * a + c * (1 - a)),
    hex(T[base])
  );

/* ── Derived surfaces ── */
const S = {
  'glass-1 ∘ ink-950': comp('ink-950', ['white', 0.05]),
  'glass-1 ∘ ink-900': comp('ink-900', ['white', 0.05]),
  'glass-2 ∘ ink-900': comp('ink-900', ['white', 0.08]),
  'glass-3 ∘ ink-950': comp('ink-950', ['white', 0.12]),
  'field-well ∘ ink-950': comp('ink-950', ['white', 0.04]),
  'wash-accent ∘ glass-1 ∘ ink-900': comp('ink-900', ['white', 0.05], ['accent-400', 0.14]),
  'border accent-400/55 ∘ ink-900': comp('ink-900', ['accent-400', 0.55]),
  'border white/16 ∘ ink-950': comp('ink-950', ['white', 0.16]),
  'nav 950/62 ∘ ink-900': comp('ink-900', ['ink-950', 0.62]),
  'nav 950/62 ∘ ink-950': comp('ink-950', ['ink-950', 0.62], ['white', 0.05]),
  'wash-accent ∘ nav ∘ ink-900': comp('ink-900', ['ink-950', 0.62], ['accent-400', 0.14]),
  'wash-primary ∘ nav ∘ ink-900': comp('ink-900', ['ink-950', 0.62], ['primary-400', 0.14]),
};
const bg = (name) => S[name] ?? hex(T[name]);

/* ── Licensed pairs: [fg, surface, threshold, use] ── */
const pairs = [
  // §2 receipts — text on solid ink
  ['frost-100', 'ink-950', 4.5, 'Primary text, dark world'],
  ['frost-300', 'ink-950', 4.5, 'Secondary text, code'],
  ['ink-400', 'ink-950', 4.5, 'Muted text'],
  ['ink-500', 'ink-950', 4.5, 'Meta/caption floor'],
  ['frost-100', 'ink-900', 4.5, 'Primary text, alt sections'],
  ['ink-400', 'ink-900', 4.5, 'Muted text, alt sections'],
  ['primary-400', 'ink-950', 4.5, 'Accent text / eyebrows'],
  ['accent-400', 'ink-950', 4.5, 'Links, active labels'],
  ['accent-300', 'ink-950', 4.5, 'Ghost-link hover text'],
  // CTA labels — rest AND hover fills
  ['ink-950', 'primary-400', 4.5, 'Primary CTA label (rest)'],
  ['ink-950', 'primary-300', 4.5, 'Primary CTA label (hover)'],
  ['ink-950', 'accent-400', 4.5, 'Submit label (rest)'],
  ['ink-950', 'accent-300', 4.5, 'Submit label (hover)'],
  // Glass composites
  ['frost-100', 'glass-1 ∘ ink-900', 4.5, 'Text on resting glass card'],
  ['ink-400', 'glass-2 ∘ ink-900', 4.5, 'Muted text on hovered glass'],
  ['frost-100', 'glass-3 ∘ ink-950', 4.5, 'Text on active pill'],
  ['ink-500', 'field-well ∘ ink-950', 4.5, 'Form placeholder'],
  ['accent-300', 'wash-accent ∘ glass-1 ∘ ink-900', 4.5, 'Glass-pill hover label on cyan wash'],
  ['frost-100', 'nav 950/62 ∘ ink-900', 4.5, 'Nav text over content (worst case)'],
  ['accent-300', 'wash-accent ∘ nav ∘ ink-900', 4.5, 'Nav-link hover label on cyan wash'],
  ['primary-400', 'wash-primary ∘ nav ∘ ink-900', 4.5, 'Nav active label on fuchsia wash (rest)'],
  ['primary-300', 'wash-primary ∘ nav ∘ ink-900', 4.5, 'Nav active label on fuchsia wash (hover)'],
  // Non-text UI ≥ 3.0
  ['accent-400', 'ink-950', 3.0, 'Focus ring (UI)'],
  // Nav CTA + mobile CTA pill (step 5): glass over the nav/canvas surface
  ['frost-100', 'nav 950/62 ∘ ink-950', 4.5, 'Nav CTA label at rest'],
  ['ink-950', 'primary-300', 3.0, 'Nav/mobile CTA label on hover fill (UI dup)'],
  ['border accent-400/55 ∘ ink-900', 'ink-900', 3.0, 'Skill-active / pill-hover border (UI)'],
];

/* ── Run ── */
let fail = 0;
const rows = pairs.map(([fg, surface, min, use]) => {
  const r = ratio(bg(fg), bg(surface));
  const ok = r >= min;
  if (!ok) fail++;
  return { pair: `${fg}  on  ${surface}`, ratio: `${r.toFixed(2)}:1`, min: `${min}:1`, result: ok ? 'PASS' : 'FAIL', use };
});

console.log('\nReadability test — Clean Core v3 (WCAG 2 AA)\n');
const w = [Math.max(...rows.map((r) => r.pair.length)), 8, 5, 6];
console.log(['PAIR'.padEnd(w[0]), 'RATIO'.padEnd(w[1]), 'MIN'.padEnd(w[2]), 'RESULT'.padEnd(w[3]), 'LICENSED USE'].join('  '));
for (const r of rows)
  console.log([r.pair.padEnd(w[0]), r.ratio.padEnd(w[1]), r.min.padEnd(w[2]), r.result.padEnd(w[3]), r.use].join('  '));

console.log(`\n${rows.length - fail}/${rows.length} passed${fail ? ` — ${fail} FAILED` : ''}\n`);
process.exit(fail ? 1 : 0);
