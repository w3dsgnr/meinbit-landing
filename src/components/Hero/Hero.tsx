import { useRef } from "react";
import Phones from "./Phones";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import "./Hero.css";

export default function Hero() {
  // Hero copy lifts gently as the page scrolls past it, handing focus to the
  // phones — no fade, it stays fully readable. The transform is written
  // straight to the node each frame (no re-render). Honours reduced-motion
  // via the hook (progress pinned at 0).
  const copyRef = useRef<HTMLDivElement>(null);
  useScrollProgress(0.5, (p) => {
    if (copyRef.current) copyRef.current.style.transform = `translateY(${-48 * p}px)`;
  });

  return (
    <section id="hero">
      <div className="hero-copy" ref={copyRef} style={{ transform: "translateY(0px)" }}>
        <h1 className="hero-title">
          One wallet<br />
          <span className="hero-line">Every currency</span><br />
          Total freedom
        </h1>
        <p className="hero-sub">
          Move money your way — fiat and crypto in a single app. Instant transfers, zero friction, one card for it all.
        </p>

        <div className="hero-actions">
          <a href="#why" className="hero-scroll-link">
            <span>Learn more</span>
            <span className="hero-chevron" aria-hidden="true" />
          </a>
        </div>
      </div>

      <Phones />
    </section>
  );
}
