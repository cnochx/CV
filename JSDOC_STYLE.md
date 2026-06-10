# JSDoc House Style

A compact JSDoc convention for this TypeScript and React codebase.

## Goals

- Explain meaning, behavior, and intent.
- Avoid repeating type information that TypeScript already provides.
- Keep comments consistent across components, interfaces, helpers, and data modules.
- Optimize for editor tooltips, maintainability, and readable source files.

## General Rules

- Write JSDoc in English.
- Place the JSDoc block directly above the symbol it documents.
- Keep the first sentence short and descriptive.
- Prefer explaining purpose, behavior, edge cases, and invariants.
- Do not describe the obvious.
- Do not restate the exact TypeScript type unless it adds context.
- Use complete sentences for public or shared modules.
- Keep comments concise; most blocks should stay between 3 and 10 lines.

## Section Pattern

Use this structure when it adds value:

1. Summary sentence
2. `Dependencies:` section, only if the symbol coordinates other modules or helpers
3. `Operations:` section, only if runtime behavior needs explanation
4. JSDoc tags such as `@param` and `@returns` for functions and components

Example skeleton:

```ts
/**
 * Renders a reusable accordion card for one skill group.
 *
 * Dependencies:
 * - Uses `useAccordion` for interaction state.
 * - Uses `SkillsSection` to render nested entries.
 *
 * Operations:
 * - Builds stable DOM ids for accessibility.
 * - Toggles expanded content on click and keyboard interaction.
 *
 * @param {MyProps} props - Component props.
 * @returns {JSX.Element} Rendered accordion card.
 */
```

## React Components

Use this format for function components and memoized components:

```ts
/**
 * Renders a short description of what the component displays or does.
 *
 * Dependencies:
 * - Uses `SomeDependency` for a specific reason.
 *
 * Operations:
 * - Describes important rendering or interaction behavior.
 * - Mentions accessibility behavior if relevant.
 *
 * @param {ComponentProps} props - Component props.
 * @param {string} props.title - Visible title text.
 * @param {React.ReactNode} [props.children] - Nested content.
 * @returns {JSX.Element} Rendered component output.
 */
```

### Rules for components

- Focus on what the component renders and what behavior matters.
- Document `children` if the component is a wrapper or layout container.
- Mention accessibility behavior when the component uses ARIA, keyboard handling, or generated ids.
- Use `@param` and `@returns` for exported components.
- For tiny internal components, a shorter single-paragraph JSDoc is enough.

## Props Interfaces

Use a short interface-level description plus property comments:

```ts
/**
 * Props for the `HeaderLayout` component.
 *
 * Defines the visual configuration and nested content for the header wrapper.
 */
export interface HeaderLayoutProps {
  /** Optional additional class names applied to the wrapper element. */
  className?: string;

  /** Theme variant used to resolve semantic styling. */
  variant: ThemeVariant;

  /** Nested content rendered inside the wrapper. */
  children: React.ReactNode;
}
```

### Rules for props

- Start with `Props for the \`ComponentName\` component.`
- Add one short sentence about what the props configure.
- Put one short comment above each property.
- Explain meaning, not type syntax.
- Do not use `@param` inside interfaces.

## Interfaces and Types

Use short top-level descriptions and property comments for data structures.

```ts
/**
 * Describes one skill entry rendered in the skills section.
 */
export interface SkillItem {
  /** Visible display name of the skill. */
  Name: string;

  /** Number of years of practical experience. */
  Years: number;
}
```

### Rules for interfaces and types

- Use one sentence describing the role of the interface or type.
- Add property comments only where the property meaning is not completely obvious.
- For union types, document the union as a whole.
- Do not add `@param` or `@returns` to interfaces or type aliases.

Example for a union type:

```ts
/**
 * Allowed origin labels for skill entries.
 *
 * Keeps origin values consistent across the skills dataset.
 */
export type OriginType = 'private Interest' | 'Senior SAP Developer';
```

## Utility Functions

Use compact JSDoc focused on mapping logic, fallback behavior, and side effects.

```ts
/**
 * Resolves the Tailwind font color class for a semantic color variant.
 *
 * Maps dark variants to bright text, bright variants to dark text,
 * and unsupported values to the default font color.
 *
 * @param {ColorVariant} variant - Semantic color variant to resolve.
 * @returns {string} Tailwind class for the resolved font color.
 */
```

### Rules for utilities

- Explain the mapping or decision logic.
- Call out fallback behavior explicitly.
- Mention side effects if the function has any.
- Keep it short.

## Data and Config Modules

Put the main JSDoc on the exported constant or configuration object.

```ts
/**
 * Structured skill collection data used to render the skills section.
 *
 * Operations:
 * - Groups skills into top-level categories.
 * - Provides identifiers, experience values, and origin labels.
 *
 * @constant {SkillsCollection[]}
 */
const SkillsCollectionData: SkillsCollection[] = [ ... ];
```

### Rules for config modules

- Describe what the dataset/config controls in the UI.
- Add a short content overview for large datasets.
- Do not document every entry unless it is non-obvious.
- Use `@constant` for exported configuration objects and arrays.

## Naming and Tone

- Use consistent wording across the repo.
- Prefer verbs like `Renders`, `Resolves`, `Defines`, `Describes`, `Provides`.
- Prefer nouns like `variant`, `wrapper`, `identifier`, `configuration`, `content`, `behavior`.
- Avoid vague phrases like `handles stuff`, `used for things`, or `some data`.

## Recommended Verb Starters

- `Renders ...` for components
- `Defines ...` for props, interfaces, and types
- `Describes ...` for data models
- `Resolves ...` for helper functions
- `Provides ...` for config objects and shared content

## What to Avoid

- Repeating TypeScript types line by line without adding meaning
- Overly long JSDoc blocks for trivial code
- Commenting every obvious property in a self-explanatory object
- Mixing multiple documentation styles in the same repo
- Writing German JSDoc in one file and English JSDoc in another
- Using `@param` / `@returns` on interfaces or type aliases

## Minimal Templates

### Component

```ts
/**
 * Renders ...
 *
 * Dependencies:
 * - Uses ...
 *
 * Operations:
 * - ...
 *
 * @param {Props} props - Component props.
 * @returns {JSX.Element} Rendered output.
 */
```

### Props

```ts
/**
 * Props for the `ComponentName` component.
 */
type ComponentNameProps = {
  /** ... */
  prop: string;
};
```

### Interface

```ts
/**
 * Describes ...
 */
export interface Example {
  /** ... */
  name: string;
}
```

### Utility

```ts
/**
 * Resolves ...
 *
 * @param {Type} value - ...
 * @returns {string} ...
 */
```

### Config/Data

```ts
/**
 * Provides ...
 *
 * Operations:
 * - ...
 *
 * @constant {SomeType}
 */
const Config: SomeType = { ... };
```

## Practical Standard for This Repo

Use this default decision tree:

- React component: Summary + optional Dependencies + optional Operations + `@param` + `@returns`
- Props type: `Props for ...` + per-property comments
- Interface/type: one summary + per-property comments if useful
- Utility/helper: summary + fallback behavior + `@param` + `@returns`
- Data/config module: summary + optional Operations + optional content overview + `@constant`

## Maintenance Rule

When updating code, update the JSDoc if one of these changes:

- Props changed
- Fallback behavior changed
- Rendered structure changed in a meaningful way
- Accessibility behavior changed
- Dataset purpose or structure changed

If none of these changed, do not rewrite the comment just to rephrase it.
