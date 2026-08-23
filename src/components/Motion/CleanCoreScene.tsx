import {FC, memo, useEffect, useRef} from 'react';
import {
  AdditiveBlending,
  BackSide,
  Color,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  TorusGeometry,
  WebGLRenderer,
} from 'three';

/**
 * WebGL "Clean Core" — a luminous core inside slowly orbiting shells
 * (Tier 2, Designsheet §8).
 *
 * Written against three.js directly rather than react-three-fiber. R3F is the
 * more comfortable API, but for a scene this small its reconciler is pure
 * overhead — and its global JSX augmentation collides with this codebase's
 * dynamic heading tags. Imperative three keeps the dependency surface to the
 * renderer itself.
 *
 * Everything is generated geometry: no GLTF, no textures, no external asset, so
 * the payload is the library alone and the object is resolution-independent.
 *
 * Budget and safety decisions:
 * - `MeshBasicMaterial` with additive blending instead of a physical
 *   transmission material. Real glass would roughly double both shader cost and
 *   bundle for an effect that is nearly indistinguishable at this size, behind
 *   text, at low opacity.
 * - No lights, no shadows, no post-processing — no extra render pass.
 * - DPR capped at 1.5, `low-power` GPU preference, `antialias` on (cheap here,
 *   and thin rings alias badly without it).
 * - The loop stops whenever the tab is hidden or the hero scrolls out of view,
 *   so an unread page costs nothing.
 * - Contains no text and is `aria-hidden` through its wrapper; all copy lives
 *   in the DOM in front of it.
 */
export interface CleanCoreSceneProps {
  /** Called after the first rendered frame so the poster can cross-fade out. */
  onReady: () => void;
}

/** Colors sampled straight from the design tokens (§2). */
const PRIMARY = '#e879f9';
const ACCENT = '#22d3ee';
const VIOLET = '#9d8cf5';
const FROST = '#f5f5f7';

/** Radius, tube, color, opacity, initial rotation and spin speed per shell. */
const SHELLS = [
  {radius: 1.55, tube: 0.006, color: PRIMARY, opacity: 0.6, rotation: [1.15, 0.4, 0.2], speed: 0.34},
  {radius: 1.2, tube: 0.005, color: ACCENT, opacity: 0.55, rotation: [0.5, 1.1, -0.3], speed: -0.24},
  {radius: 0.92, tube: 0.004, color: VIOLET, opacity: 0.5, rotation: [-0.8, 0.2, 0.9], speed: 0.18},
] as const;

const CleanCoreScene: FC<CleanCoreSceneProps> = memo(({onReady}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({antialias: true, alpha: true, powerPreference: 'low-power'});
    } catch {
      // Context creation can still fail after the capability probe; the poster
      // below simply stays visible.
      return;
    }

    renderer.setClearAlpha(0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    const group = new Group();
    scene.add(group);

    // Track every disposable so the GPU memory is released on unmount.
    const disposables: {dispose: () => void}[] = [];

    const shellMeshes = SHELLS.map(shell => {
      const geometry = new TorusGeometry(shell.radius, shell.tube, 3, 220);
      const material = new MeshBasicMaterial({
        color: new Color(shell.color),
        transparent: true,
        opacity: shell.opacity,
        blending: AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new Mesh(geometry, material);
      mesh.rotation.set(shell.rotation[0], shell.rotation[1], shell.rotation[2]);
      group.add(mesh);
      disposables.push(geometry, material);
      return {mesh, speed: shell.speed};
    });

    const coreGeometry = new SphereGeometry(0.55, 32, 32);
    const coreMaterial = new MeshBasicMaterial({
      color: new Color(FROST),
      transparent: true,
      opacity: 0.10,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    group.add(new Mesh(coreGeometry, coreMaterial));
    disposables.push(coreGeometry, coreMaterial);

    const haloGeometry = new SphereGeometry(1.05, 32, 32);
    const haloMaterial = new MeshBasicMaterial({
      color: new Color(PRIMARY),
      transparent: true,
      opacity: 0.05,
      side: BackSide,
      blending: AdditiveBlending,
      depthWrite: false,
    });
    group.add(new Mesh(haloGeometry, haloMaterial));
    disposables.push(haloGeometry, haloMaterial);

    const resize = () => {
      const {clientWidth, clientHeight} = container;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    // Pointer response, normalised to -1..1 and eased towards in the loop.
    const pointer = {x: 0, y: 0};
    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', handlePointerMove, {passive: true});

    let frame = 0;
    let lastTime = performance.now();
    let hasSignalled = false;
    let isVisible = true;

    const renderFrame = (time: number) => {
      frame = requestAnimationFrame(renderFrame);

      // Clamp so returning from a background tab cannot jump the animation.
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      shellMeshes.forEach(({mesh, speed}) => {
        mesh.rotation.z += speed * delta;
        mesh.rotation.y += speed * delta * 0.5;
      });

      // Lean towards the cursor, capped, easing back on its own.
      group.rotation.y += (pointer.x * 0.18 - group.rotation.y) * 0.03;
      group.rotation.x += (-pointer.y * 0.12 - group.rotation.x) * 0.03;

      renderer.render(scene, camera);

      if (!hasSignalled) {
        hasSignalled = true;
        onReadyRef.current();
      }
    };

    const start = () => {
      if (frame) return;
      lastTime = performance.now();
      frame = requestAnimationFrame(renderFrame);
    };

    const stop = () => {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    };

    // Never burn frames for a hidden tab or an off-screen hero.
    const visibilityObserver = new IntersectionObserver(entries => {
      isVisible = entries.some(entry => entry.isIntersecting);
      if (isVisible && !document.hidden) start();
      else stop();
    });
    visibilityObserver.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) stop();
      else if (isVisible) start();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    start();

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pointermove', handlePointerMove);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      disposables.forEach(item => item.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="h-full w-full" ref={containerRef} />;
});

CleanCoreScene.displayName = 'CleanCoreScene';
export default CleanCoreScene;
