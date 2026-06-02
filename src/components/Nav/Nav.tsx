import { useState, useEffect, useRef } from "react";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <>
      <nav id="nav">
        <a href="/#" className="nav-logo">
          <img src="/logo.png" alt="" className="nav-logo-mark" />
          <span className="nav-logo-text">
            Mein<span>Bit</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="/#why">Features</a>
          <a href="/#card">Card</a>
          <a href="/#crypto">Crypto</a>
          <a href="/#security">Security</a>
        </div>
        <a href="/#start" className="nav-cta">
          Get Started
        </a>
      </nav>

      <div id="nav-mobile">
        <a href="/#" className="mob-logo">
          <img src="/logo.png" alt="" className="nav-logo-mark" />
          <span>Mein<span>Bit</span></span>
        </a>

        <div className="burger-wrap" ref={wrapRef}>
          <button
            className="burger-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`burger-icon ${open ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className={`mob-dropdown ${open ? "visible" : ""}`}>
            <a href="/#why" onClick={() => setOpen(false)}>Features</a>
            <a href="/#card" onClick={() => setOpen(false)}>Card</a>
            <a href="/#crypto" onClick={() => setOpen(false)}>Crypto</a>
            <a href="/#security" onClick={() => setOpen(false)}>Security</a>
            <div className="mob-dropdown-divider" />
            <a href="/#start" className="mob-dropdown-cta" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
