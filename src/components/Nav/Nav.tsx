import "./Nav.css";

export default function Nav() {
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
          <span>
            Mein<span>Bit</span>
          </span>
        </a>
        <a href="/#start" className="nav-cta nav-cta-mobile">
          Get Started
        </a>
      </div>
    </>
  );
}
