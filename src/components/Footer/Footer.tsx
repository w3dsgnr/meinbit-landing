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
              <p className="footer-copyright">
                © LUNTRA Sp. z o.o. 2026
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

          <div className="footer-divider" />

          <div className="footer-legal">
            <p>
              The meinbit.io platform is operated by LUNTRA Sp. z o.o. If you have any
              questions about the services we provide, please contact us via the in-app chat
              or through our other contact channels.
            </p>
            <p>
              LUNTRA Spółka z ograniczoną odpowiedzialnością is a company incorporated under
              the laws of the Republic of Poland, registered in the National Court Register
              (Krajowy Rejestr Sądowy) under KRS No. 0001143324. NIP (Tax ID): 8982315211.
              REGON: 540382294. Registered office: ul. Romana Dmowskiego 3/9, 50-203 Wrocław,
              Poland. Share capital: PLN 5,000.00 (fully paid up).
            </p>
            <p>
              LUNTRA Sp. z o.o. is entered in the Register of Virtual Currency Activities
              (Rejestr Działalności w Zakresie Walut Wirtualnych) maintained by the Director
              of the Tax Administration Chamber in Katowice (Dyrektor Izby Administracji
              Skarbowej w Katowicach) under registration No. RDWW-1771, with effect from
              18 December 2024. The Company provides virtual currency services in accordance
              with the Polish Act of 1 March 2018 on Counteracting Money Laundering and
              Terrorist Financing.
            </p>
            <p>
              Virtual currencies are not legal tender and are not guaranteed by any public
              authority. The value of crypto-assets may fluctuate significantly, and you may
              lose all of the funds invested. Crypto-asset services are not covered by investor
              compensation or deposit guarantee schemes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
