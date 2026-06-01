import { useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/*
  Subscribes `onProgress` to scroll progress (0 → 1) across the first
  `rangeVh` fraction of viewport height scrolled from the top. Drives the
  hero scroll choreography.

  The callback fires imperatively inside requestAnimationFrame — no React
  state — so consumers write transforms straight to the DOM and the motion
  never triggers a re-render per frame.

  Smoothing (`smoothing`, 0 → 1): a self-driving rAF loop eases the reported
  value toward the live scroll target each frame (exponential lerp). This is
  what restores the "fluid" feel:
    - A CSS transition can't do it without lagging behind a constantly-moving
      target (that was the original jitter).
    - Raw 1:1 tracking feels stepped on iOS, where scroll events during
      momentum arrive sparsely.
  The loop re-reads scrollY every frame and stays alive for a short window
  after the last scroll event, so it keeps animating smoothly through the
  gaps between iOS momentum-scroll events. Pass 0 to track exactly.

  Honours prefers-reduced-motion: when set, progress stays pinned at 0.
*/
export function useScrollProgress(
  rangeVh: number,
  onProgress: (progress: number) => void,
  smoothing = 0.1,
): void {
  const cb = useRef(onProgress);
  cb.current = onProgress;

  useEffect(() => {
    const compute = () => {
      if (prefersReducedMotion()) return 0;
      const range = window.innerHeight * rangeVh || 1;
      return Math.min(1, Math.max(0, window.scrollY / range));
    };

    let rafId = 0;
    let running = false;
    let current = compute();
    let lastScroll = 0;
    cb.current(current);

    const loop = () => {
      const target = compute();
      current =
        smoothing > 0 && smoothing < 1
          ? current + (target - current) * smoothing
          : target;
      if (Math.abs(target - current) < 0.0005) current = target;
      cb.current(current);

      const settled = current === target;
      const idle = performance.now() - lastScroll > 120; // ms since last scroll event
      if (!settled || !idle) {
        rafId = requestAnimationFrame(loop);
      } else {
        running = false;
      }
    };

    const onScroll = () => {
      lastScroll = performance.now();
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [rangeVh, smoothing]);
}
