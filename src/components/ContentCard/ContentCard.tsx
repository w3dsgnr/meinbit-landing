import { useEffect, useRef, useState } from "react";
import {
  whyCards,
  cardFeatures,
  fiatChips,
  currencies,
  cryptoTickers,
  securityCards,
  securityChips,
  startSteps,
  faqItems,
} from "@/lib/data";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import "./ContentCard.css";

const CRYPTO_IDS = cryptoTickers.map((t) => t.coinGeckoId);

export default function ContentCard() {
  return (
    <div className="content-card">
      <div className="glow-line" />

      <WhyBannerSection />
      <Divider />

      <FlowsSection />
      <Divider />

      <FiatSection />
      <Divider />

      <CardSection />
      <Divider />

      <CryptoSection />
      <Divider />

      <SecuritySection />
      <Divider />

      <StartSection />
      <Divider />

      <FaqSection />
    </div>
  );
}

/* ───────────────────────── Sections ───────────────────────── */

function Divider() {
  return <div className="cc-divider" />;
}

function WhyBannerSection() {
  return (
    <section id="why" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">
            Everything you need.<br />Nothing you don't.
          </h2>
          <p className="section-body" style={{ margin: "16px auto 0" }}>
            One app replaces your bank account, crypto exchange, and international transfer service.
            Simpler. Faster. Cheaper.
          </p>
        </div>
        <div className="banner-grid">
          {whyCards.map(({ image, title, body }) => (
            <div key={title} className="banner-card si">
              <img src={image} alt="" className="banner-image" />
              <h3 className="banner-title">{title}</h3>
              <p className="banner-body">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CardSection() {
  return (
    <section id="card" className="cc-section">
      <div className="cc-inner">
        <div className="two-col">
          <div className="si">
            <h2 className="section-title">
              Your wallet in your<br />pocket — <span className="accent">literally.</span>
            </h2>
            <p className="section-body" style={{ marginBottom: 28 }}>
              Issue a virtual Mastercard in minutes or order a plastic card delivered to your door.
              Pay anywhere, freeze anytime, top up from fiat or crypto automatically — no manual exchange needed.
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {cardFeatures.map((feature) => (
                <li key={feature} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <i className="ti ti-check" style={{ color: "var(--accent-2)", fontSize: "1rem", marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: ".9rem", color: "var(--text-muted)" }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="si" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="card-mockup">
              <div className="cm-glaze" aria-hidden="true" />
              <div className="cm-num">
                <span className="cm-num-dots">••</span>
                <span className="cm-num-tail">2547</span>
              </div>
              <div className="cm-name">John Doe</div>
              <img src="/logo.png" alt="" className="cm-logo" />
              <svg className="cm-mc" viewBox="0 0 46 40" aria-hidden="true">
                <circle cx="17" cy="14" r="11" fill="#EB001B" />
                <circle cx="29" cy="14" r="11" fill="#F79E1B" />
                <path
                  d="M23 6.4c1.9 2 3 4.6 3 7.6s-1.1 5.6-3 7.6c-1.9-2-3-4.6-3-7.6s1.1-5.6 3-7.6Z"
                  fill="#FF5F00"
                />
                <text
                  x="23"
                  y="35"
                  textAnchor="middle"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight={700}
                  fontSize="6"
                  fill="#fff"
                  letterSpacing="0.04em"
                >
                  mastercard
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowsSection() {
  return (
    <section id="flows" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 className="section-title">
            Money moves the way<br />you <span className="accent">want it.</span>
          </h2>
          <p className="section-body" style={{ margin: "16px auto 0" }}>
            Convert crypto to fiat, top up from a card, send via SEPA or SWIFT, receive crypto —
            all within the same app, in any direction, at any time.
          </p>
        </div>

        <div className="flow-radial si" role="img" aria-label="MeinBit connects fiat, crypto, cards, SEPA, SWIFT and MeinBit users">
          <svg
            className="flow-svg"
            viewBox="0 0 660 360"
            preserveAspectRatio="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="330" y1="180" x2="80"  y2="100" className="flow-line flow-line-1" />
            <line x1="330" y1="180" x2="580" y2="100" className="flow-line flow-line-2" />
            <line x1="330" y1="180" x2="80"  y2="260" className="flow-line flow-line-3" />
            <line x1="330" y1="180" x2="580" y2="260" className="flow-line flow-line-4" />
            <line x1="330" y1="180" x2="330" y2="50"  className="flow-line flow-line-5" />
            <line x1="330" y1="180" x2="330" y2="310" className="flow-line flow-line-6" />
          </svg>

          <FlowNode pos="tl" image="/Fiat.png">
            Fiat<br />USD / EUR
          </FlowNode>

          <FlowNode pos="tr" image="/Crypto.png">
            Crypto<br />BTC/ETH/SOL
          </FlowNode>

          <FlowNode pos="tc" image="/MeinBit%20Card.png">
            MeinBit Card
          </FlowNode>

          <FlowNode pos="bl" image="/sepa.png">
            SEPA
          </FlowNode>

          <FlowNode pos="br" image="/SWIFT.png">
            SWIFT
          </FlowNode>

          <FlowNode pos="bc" image="/MeinBit%20User.png">
            MeinBit User
          </FlowNode>

          <div className="flow-center">
            <div className="flow-center-badge">
              <img src="/logo.png" alt="MeinBit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  pos,
  image,
  children,
}: {
  pos: "tl" | "tc" | "tr" | "bl" | "bc" | "br";
  image: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flow-node flow-pos-${pos}`}>
      <div className="flow-ico">
        <img src={image} alt="" />
      </div>
      <div className="flow-lbl">{children}</div>
    </div>
  );
}

function FiatSection() {
  return (
    <section id="fiat" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">
            Real banking, built for<br />the <span className="accent">digital age.</span>
          </h2>
          <p className="section-body" style={{ margin: "0 auto 24px" }}>
            Open a multi-currency account in EUR, USD and more. Send money via SEPA and SWIFT worldwide.
            Receive payments to your personal IBAN. Manage up to 10 cards from a single account.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 40 }}>
            {fiatChips.map((chip) => (
              <span key={chip} className="chip-pill" style={{ padding: "6px 14px" }}>
                <i className="ti ti-bolt" />
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="currency-grid" style={{ justifyContent: "center", maxWidth: 700, margin: "0 auto" }}>
          {currencies.map(({ code, name, color }) => (
            <div key={code} className="currency-pill si">
              <div className="cp-dot" style={{ background: color }} />
              {code} — {name}
            </div>
          ))}
          <div
            className="currency-pill si"
            style={{ background: "rgba(15,230,123,.08)", borderColor: "var(--border-accent)", color: "var(--accent)" }}
          >
            <i className="ti ti-plus" style={{ fontSize: ".8rem" }} />
            170+ more
          </div>
        </div>
      </div>
    </section>
  );
}

function CryptoSection() {
  const quotes = useCryptoPrices(CRYPTO_IDS);

  return (
    <section id="crypto" className="cc-section">
      <div className="cc-inner">
        <div className="two-col">
          <div className="si">
            <h2 className="section-title">
              Crypto made<br /><span className="accent">simple. Finally.</span>
            </h2>
            <p className="section-body" style={{ marginBottom: 28 }}>
              Hold, send and receive BTC, ETH, USDC, TRX, SOL, BNB and more. Convert any crypto to fiat or stablecoins
              instantly — high speed, low fees. No separate wallet needed.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{
                background: "rgba(11,34,50,.05)", border: "1px solid var(--border)",
                color: "var(--text-muted)", fontSize: ".75rem", padding: "5px 12px", borderRadius: 100,
              }}>Low fees</span>
              <span style={{
                background: "rgba(11,34,50,.05)", border: "1px solid var(--border)",
                color: "var(--text-muted)", fontSize: ".75rem", padding: "5px 12px", borderRadius: 100,
              }}>No separate wallet</span>
            </div>
          </div>
          <div className="si">
            <div className="crypto-ticker">
              {cryptoTickers.map((t) => {
                const quote = quotes[t.coinGeckoId];
                const price = quote?.price ?? t.fallbackPrice;
                const change = quote?.change ?? t.fallbackChange;
                const positive = quote ? quote.changePositive : !t.fallbackChange.startsWith("-");
                return (
                  <div key={t.sym} className="ticker-row">
                    <div className="ticker-left">
                      <div className="ticker-icon"><img src={t.image} alt="" /></div>
                      <div>
                        <div className="ticker-name">{t.name}</div>
                        <div className="ticker-full">{t.sym}</div>
                      </div>
                    </div>
                    <div className="ticker-right">
                      <div className="ticker-price">{price}</div>
                      <div className={positive ? "ticker-change-pos" : "ticker-change-neg"}>{change}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SecuritySection() {
  return (
    <section id="security" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">
            Security you can<br /><span className="accent">actually feel.</span>
          </h2>
          <p className="section-body" style={{ margin: "0 auto" }}>
            Three layers of protection on every login and transaction — so your account stays yours, no matter what.
          </p>
        </div>
        <div className="banner-grid" style={{ marginBottom: 24 }}>
          {securityCards.map(({ image, title, body }) => (
            <div key={title} className="banner-card si">
              <img src={image} alt="" className="banner-image" />
              <h3 className="banner-title">{title}</h3>
              <p className="banner-body">{body}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }} className="si">
          {securityChips.map(({ icon, text }) => (
            <span key={text} className="chip-pill">
              <i className={`ti ${icon}`} />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StartSection() {
  return (
    <section id="start" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">
            Get started<br />in <span className="accent">minutes.</span>
          </h2>
          <p className="section-body" style={{ margin: "0 auto" }}>
            No branch visits. No paperwork. No waiting.
          </p>
        </div>
        <div className="steps-grid">
          {startSteps.map(({ num, title, body }) => (
            <div key={num} className="step-card si">
              <div className="step-num">{num}</div>
              <div className="step-title">{title}</div>
              <div className="step-body">{body}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }} className="si">
          <a href="#" className="btn-primary" style={{ fontSize: "1.05rem", padding: "17px 40px" }}>
            <i className="ti ti-download" /> Download MeinBit Free
          </a>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="faq" className="cc-section">
      <div className="cc-inner">
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 className="section-title">
              Common <span className="accent">questions</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, i) => (
              <FaqItem
                key={item.q}
                question={item.q}
                answer={item.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  /*
    useStaggerReveal adds the `.visible` class to .si elements via direct DOM
    mutation. If React re-renders this item and overwrites className, that
    class is lost — the item snaps back to opacity: 0. Keep className static
    and toggle the `.open` state imperatively to preserve `.visible`.
  */
  useEffect(() => {
    itemRef.current?.classList.toggle("open", open);
  }, [open]);

  const maxHeight = open ? innerRef.current?.scrollHeight ?? 0 : 0;
  return (
    <div ref={itemRef} className="faq-item si">
      <div className="faq-q" onClick={onToggle}>
        {question}
        <i className="ti ti-plus" />
      </div>
      <div className="faq-a" style={{ maxHeight }}>
        <div ref={innerRef} className="faq-a-inner">{answer}</div>
      </div>
    </div>
  );
}
