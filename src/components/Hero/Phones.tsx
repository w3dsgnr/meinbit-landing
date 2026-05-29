import { useEffect, useState } from "react";

/*
  Three real app mockups in the hero.
  - On scroll, side phones slide out from under the centre one.
  - Subtle mouse parallax adds life without distraction.
  CSS transition on .phone-shell makes both feel buttery smooth.
*/
const HIDDEN_X = 175;  // leaves ~17% of the side phone peeking from behind centre
const FINAL_X = 28;    // matches the original resting overlap
const SLIDE_RANGE_VH = 0.35; // phones are fully out by this fraction of viewport

export default function Phones() {
  const [scrollP, setScrollP] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = 0;
    const update = () => {
      const p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * SLIDE_RANGE_VH)));
      setScrollP(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rafId = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMouse({ x, y });
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const slide = HIDDEN_X + (FINAL_X - HIDDEN_X) * scrollP;
  const mx = mouse.x;
  const my = mouse.y;

  return (
    <div className="phone-wrap">
      <div
        className="phone-shell phone-shell-l"
        style={{ transform: `translate(${slide + mx * 7}px, ${my * 4}px) rotate(-3deg)` }}
      >
        <img src="/Card.png" alt="" className="phone-img phone-img-side" />
      </div>
      <div
        className="phone-shell phone-shell-c"
        style={{ transform: `translate(${mx * 3}px, ${my * 2}px)` }}
      >
        <img src="/Home.png" alt="" className="phone-img phone-img-main" />
      </div>
      <div
        className="phone-shell phone-shell-r"
        style={{ transform: `translate(${-slide + mx * 10}px, ${my * 5}px) rotate(3deg)` }}
      >
        <img src="/Crypto%20details.png" alt="" className="phone-img phone-img-side" />
      </div>
    </div>
  );
}
