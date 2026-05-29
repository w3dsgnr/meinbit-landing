import Phones from "./Phones";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-eyebrow">
        <i className="ti ti-bolt" /> New era of money
      </div>

      <h1 className="hero-title">
        One wallet.<br />
        <span className="hero-line">Every currency.</span><br />
        Total freedom.
      </h1>
      <p className="hero-sub">
        Move money your way — fiat and crypto in a single app. Instant transfers, zero friction, one card for it all.
      </p>

      <div className="hero-actions">
        <a href="#start" className="btn-primary">
          <i className="ti ti-download" /> Download App
        </a>
        <a href="#why" className="btn-ghost">
          Learn more <i className="ti ti-arrow-right" />
        </a>
      </div>

      <Phones />

      <div className="trust-strip">
        <span className="trust-item"><i className="ti ti-shield-check" /> Bank-grade security</span>
        <span className="trust-item"><i className="ti ti-license" /> Regulated & licensed</span>
        <span className="trust-item"><i className="ti ti-star" /> 4.9 App Store</span>
        <span className="trust-item"><i className="ti ti-world" /> 100+ countries</span>
      </div>

    </section>
  );
}
