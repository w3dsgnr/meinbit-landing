import { useLayoutEffect, useEffect, useRef } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

/*
  Three real app mockups in the hero, as a centred trio.
  - The centre phone sits in flow and defines the wrap size.
  - Side phones are absolutely centred behind it and slide OUT on scroll.

  Scroll choreography (0 → 1 over SLIDE_RANGE_VH):
  - Side phones slide outwards AND recede — shrink — so they read as falling
    back in depth while the centre hero phone takes focus.
  - Centre phone scales up slightly and lifts, pulling forward.

  The transforms are written straight to the DOM inside the scroll callback
  (no React state / re-render per frame) so the motion tracks scroll 1:1 and
  stays smooth under inertial scrolling.

  Slide distances are derived from the *measured* phone widths and the
  viewport, so the outer phone edges always stay inside the screen — the
  layout can never overflow, at any size.
*/
const SLIDE_RANGE_VH = 0.35; // phones are fully out by this fraction of viewport
const EDGE_MARGIN = 12;      // keep this many px between outer phone edge and screen edge

type Spread = { rest: number; full: number };

export default function Phones() {
  const leftRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const spread = useRef<Spread>({ rest: 60, full: 130 });
  const lastP = useRef(0);

  // Write the scroll-driven transforms directly to each shell.
  const apply = (p: number) => {
    lastP.current = p;
    const { rest, full } = spread.current;
    const slide = rest + (full - rest) * p;
    const sideScale = 1 - 0.12 * p;
    if (leftRef.current)
      leftRef.current.style.transform = `translate(calc(-50% - ${slide}px), -50%) scale(${sideScale})`;
    if (rightRef.current)
      rightRef.current.style.transform = `translate(calc(-50% + ${slide}px), -50%) scale(${sideScale})`;
    if (centerRef.current)
      centerRef.current.style.transform = `translateY(${-10 * p}px) scale(${1 + 0.05 * p})`;
  };

  // Recompute how far the side phones travel, from real rendered widths,
  // then re-apply at the current scroll position.
  const measure = () => {
    const mainW = centerRef.current?.offsetWidth ?? 220;
    const sideW = leftRef.current?.offsetWidth ?? 170;
    const vw = window.innerWidth;
    const maxSpread = vw / 2 - sideW / 2 - EDGE_MARGIN;
    const full = Math.min(mainW / 2 + sideW * 0.28, maxSpread);
    const rest = Math.min(mainW * 0.3, full);
    spread.current = { rest, full };
    apply(lastP.current);
  };

  useScrollProgress(SLIDE_RANGE_VH, apply);

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="phone-wrap">
      <div
        className="phone-shell phone-shell-l"
        ref={leftRef}
        style={{ transform: "translate(calc(-50% - 60px), -50%) scale(1)" }}
      >
        <div className="device">
          <img src="/Card.png" alt="" className="phone-img phone-img-side" />
        </div>
      </div>
      <div
        className="phone-shell phone-shell-c"
        ref={centerRef}
        style={{ transform: "translateY(0px) scale(1)" }}
      >
        <div className="device">
          <img src="/Home.png" alt="" className="phone-img phone-img-main" />
        </div>
      </div>
      <div
        className="phone-shell phone-shell-r"
        ref={rightRef}
        style={{ transform: "translate(calc(-50% + 60px), -50%) scale(1)" }}
      >
        <div className="device">
          <img src="/Crypto%20details.png" alt="" className="phone-img phone-img-side" />
        </div>
      </div>
    </div>
  );
}
