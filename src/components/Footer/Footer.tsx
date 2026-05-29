import { Link } from "react-router-dom";
import "./Footer.css";

const productLinks = [
  { href: "/#why",      label: "Features" },
  { href: "/#card",     label: "Virtual Card" },
  { href: "/#crypto",   label: "Crypto" },
  { href: "/#fiat",     label: "Currencies" },
  { href: "/#security", label: "Security" },
  { href: "/#start",    label: "Get Started" },
];

const legalLinks = [
  { to: "/privacy-policy",    label: "Privacy Policy" },
  { to: "/terms-of-service",  label: "Terms of Use" },
  { to: "/cookie-policy",     label: "Cookie Policy" },
  { to: "/aml-kyc",           label: "KYC / AML Policy" },
  { to: "/imprint",           label: "Imprint" },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-glass">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logo.png" alt="" className="footer-logo-mark" />
                <span>Mein<span>Bit</span></span>
              </div>
              <p className="footer-tagline">Download MeinBit today.</p>
              <div className="store-btns">
                <a href="#" className="store-badge" aria-label="Download on the App Store">
                  <img src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="" />
                </a>
                <a href="#" className="store-badge" aria-label="Get it on Google Play">
                  <img src="/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="" />
                </a>
              </div>
              <p className="footer-copyright">
                © 2026 Trust Change Sp. z o.o., Poland · RDWW-1241
              </p>
            </div>

            <div className="footer-links-grid">
              <div>
                <div className="footer-col-title">Product</div>
                <ul className="footer-link-list">
                  {productLinks.map((l) => (
                    <li key={l.label}><a href={l.href}>{l.label}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="footer-col-title">Legal</div>
                <ul className="footer-link-list">
                  {legalLinks.map((l) => (
                    <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
