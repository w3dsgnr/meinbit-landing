import { useEffect, useRef, useState } from "react";
import {
  whyCards,
  cardFeatures,
  bankCards,
  fiatBlocks,
  currencies,
  cryptoTickers,
  cryptoHighlights,
  securityCards,
  securityChips,
  startSteps,
  faqItems,
} from "@/lib/data";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import Payroll from "@/components/Payroll/Payroll";
import "./ContentCard.css";

const CRYPTO_IDS = cryptoTickers.map((t) => t.coinGeckoId);

export default function ContentCard() {
  return (
    <>
      {/* Top white card ends after the wallet section, leaving a gap where the
          fixed video background shows through behind the Payroll section. */}
      <div className="content-card">
        <TrustSection />
        <WhyBannerSection />
        <FlowsSection />
        <FiatSection />
        <CardSection />
      </div>

      {/* Scroll-animated section — must sit OUTSIDE .content-card so its GSAP
          pin isn't clipped by the card's overflow:hidden + backdrop-filter. */}
      <Payroll />

      {/* Bottom white card resumes at the crypto section. */}
      <div className="content-card">
        <CryptoSection />
        <SecuritySection />
        <SecurityChipsSection />
        <StartSection />
        <FaqSection />
      </div>
    </>
  );
}

/* ───────────────────────── Sections ───────────────────────── */

function WhyBannerSection() {
  return (
    <section id="why" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">
            Everything you need<br /><span className="accent">Nothing you don't</span>
          </h2>
          <p className="section-body" style={{ margin: "16px auto 0" }}>
            One app replaces your everyday account, crypto exchange, and international transfer service.
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

function TrustSection() {
  return (
    <section id="trust" className="cc-section">
      <div className="cc-inner">
        <div className="trust-band si">
          <h2 className="section-title">
            Money you can trust,<br />
            <span className="accent">anywhere you go</span>
          </h2>
          <p className="section-body" style={{ margin: "16px auto 0" }}>
            From everyday spending to cross-border transfers, MeinBit pairs institution-grade
            security with modern technology — so your money moves further, faster, and
            safer, in every corner of the world.
          </p>

          <div className="trust-stats">
            <div className="stat">
              <div className="stat-value">100<span className="stat-unit">+</span></div>
              <div className="stat-label">Countries available</div>
            </div>
            <div className="stat">
              <div className="stat-value">Institution-grade</div>
              <div className="stat-label">Security &amp; encryption</div>
            </div>
            <div className="stat">
              <div className="stat-value">Licensed</div>
              <div className="stat-label">Regulated &amp; compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardSection() {
  return (
    <section id="card" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">
            Your wallet in your<br />pocket — <span className="accent">literally</span>
          </h2>
          <p className="section-body" style={{ margin: "16px auto 0" }}>
            Issue a virtual Mastercard in minutes or order a plastic card delivered to your door.
            Pay anywhere, freeze anytime, top up from fiat or crypto automatically — no manual exchange needed.
          </p>
        </div>
        <div className="card-stack-col">
          <div className="card-stack si" aria-hidden="true">
            {bankCards.map((card) => (
              <BankCard key={card.variant} variant={card.variant} last4={card.last4} />
            ))}
          </div>
        </div>
        <div className="card-chips si">
          {cardFeatures.map(({ icon, text }) => (
            <span key={text} className="trust-chip">
              <i className={`ti ${icon}`} />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BankCard({ variant, last4 }: { variant: string; last4: string }) {
  return (
    <div className={`bank-card bank-${variant}`}>
      {variant === "brand" && <div className="bc-glaze" aria-hidden="true" />}
      <div className="bc-num">
        <span className="bc-dots"><span /><span /></span>
        {last4}
      </div>
      <span className="bc-info">Show info</span>
      <img src="/card-logo.svg" alt="" className="bc-logo" />
      <img src="/card-mastercard.svg" alt="" className="bc-mc" />
    </div>
  );
}

function FlowsSection() {
  return (
    <section id="flows" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 className="section-title">
            Money moves the way<br />you <span className="accent">want it</span>
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
  const currencyLabel = `Supported currencies: ${currencies.map((c) => c.name).join(", ")} and 170 more.`;

  const renderCurrencies = (copy: string) => (
    <div className="currency-copy" aria-hidden={copy === "b" ? true : undefined}>
      {currencies.map(({ code, name, symbol }) => (
        <span key={`${copy}-${code}`} className="currency-chip">
          <span className="currency-badge">{symbol}</span>
          <span className="currency-name">{name}</span>
        </span>
      ))}
      <span className="currency-chip currency-more">
        <span className="currency-badge"><i className="ti ti-plus" /></span>
        <span className="currency-name">170+ more</span>
      </span>
    </div>
  );

  return (
    <section id="fiat" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 className="section-title">
            Modern money, built for<br />the <span className="accent">digital age</span>
          </h2>
          <p className="section-body" style={{ margin: "0 auto" }}>
            Open a multi-currency account in EUR, USD and more. Send money via SEPA and SWIFT worldwide.
            Receive payments to your personal IBAN. Manage up to 10 cards from a single account.
          </p>
        </div>

        {fiatBlocks.map((block, i) => (
          <div key={block.title} className={`two-col fiat-block${i % 2 === 1 ? " reverse" : ""}`}>
            <div className="si">
              <h3 className="fiat-block-title">{block.title}</h3>
              <ul className="feature-list">
                {block.features.map(({ icon, title, body }) => (
                  <li key={title} className="feature-row">
                    <div className="feature-ico"><i className={`ti ${icon}`} /></div>
                    <div>
                      <h4 className="feature-title">{title}</h4>
                      <p className="feature-body">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="si fiat-mockup">
              {block.mockup ? (
                <div className="fiat-phone">
                  <img src={block.mockup} alt={block.mockupAlt} />
                </div>
              ) : (
                <div className="fiat-mockup-ph" aria-hidden="true">
                  <i className="ti ti-device-mobile" />
                  <span>App mockup #{i + 1}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Currency marquee closes out the section */}
        <div className="currency-marquee si" role="group" aria-label={currencyLabel}>
          <div className="currency-track">
            {renderCurrencies("a")}
            {renderCurrencies("b")}
          </div>
        </div>
      </div>
    </section>
  );
}

function CryptoSection() {
  const quotes = useCryptoPrices(CRYPTO_IDS);
  const tickerLabel = `Supported assets: ${cryptoTickers.map((t) => t.name).join(", ")} and more.`;

  const renderTickers = (copy: "a" | "b") => (
    <div className="crypto-copy" aria-hidden={copy === "b" ? true : undefined}>
      {cryptoTickers.map((t) => {
        const quote = quotes[t.coinGeckoId];
        const price = quote?.price ?? t.fallbackPrice;
        const change = quote?.change ?? t.fallbackChange;
        const positive = quote ? quote.changePositive : !t.fallbackChange.startsWith("-");
        return (
          <span key={`${copy}-${t.sym}`} className="crypto-pill">
            <span className="cp-icon"><img src={t.image} alt="" /></span>
            <span className="cp-sym">{t.sym}</span>
            <span className="cp-price">{price}</span>
            <span className={positive ? "cp-change-pos" : "cp-change-neg"}>{change}</span>
          </span>
        );
      })}
    </div>
  );

  return (
    <section id="crypto" className="cc-section">
      <div className="cc-inner">
        <div className="si" style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">
            Crypto made<br /><span className="accent">simple, finally</span>
          </h2>
          <p className="section-body" style={{ margin: "16px auto 0" }}>
            Hold, send and receive BTC, ETH, USDC, TRX, SOL, BNB and more — and convert any of them
            to fiat or stablecoins instantly, at high speed.
          </p>
        </div>

        <div className="crypto-highlights">
          {cryptoHighlights.map(({ icon, title, body }) => (
            <div key={title} className="crypto-highlight si">
              <div className="ch-ico"><i className={`ti ${icon}`} /></div>
              <h3 className="ch-title">{title}</h3>
              <p className="ch-body">{body}</p>
            </div>
          ))}
        </div>

        <div className="crypto-marquee si" role="group" aria-label={tickerLabel}>
          <div className="crypto-track">
            {renderTickers("a")}
            {renderTickers("b")}
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
            Security you can<br /><span className="accent">actually feel</span>
          </h2>
          <p className="section-body" style={{ margin: "0 auto" }}>
            Three layers of protection on every login and transaction — so your account stays yours, no matter what.
          </p>
        </div>
        <div className="banner-grid">
          {securityCards.map(({ image, title, body }) => (
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

function SecurityChipsSection() {
  return (
    <section id="trust-badges" className="cc-section trust-badges-section">
      <div className="cc-inner">
        <div className="trust-badges-panel si">
          <div className="trust-badges-head">
            <h2 className="section-title trust-badges-title">
              Built on a foundation<br /><span className="accent">of trust</span>
            </h2>
            <p className="section-body trust-badges-sub">
              Held to the same standards as a regulated financial institution — institution-grade
              encryption, independent audits and a licensed operating entity, working quietly
              in the background.
            </p>
          </div>
          <div className="trust-badges-chips">
            {securityChips.map(({ icon, text }) => (
              <span key={text} className="trust-chip">
                <i className={`ti ${icon}`} />
                {text}
              </span>
            ))}
          </div>
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
            Get started<br /><span className="accent">in minutes</span>
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
              <span className="accent">Common questions</span>
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
  const [maxHeight, setMaxHeight] = useState(0);

  /*
    useStaggerReveal adds the `.visible` class to .si elements via direct DOM
    mutation. If React re-renders this item and overwrites className, that
    class is lost — the item snaps back to opacity: 0. Keep className static
    and toggle the `.open` state imperatively to preserve `.visible`.
  */
  useEffect(() => {
    itemRef.current?.classList.toggle("open", open);
  }, [open]);

  /*
    Drive the expand/collapse height from a measured value. Recompute whenever
    the answer wraps differently (window/content resize) while open, so the
    panel never clips its content.
  */
  useEffect(() => {
    if (!open) {
      setMaxHeight(0);
      return;
    }
    const inner = innerRef.current;
    if (!inner) return;
    const sync = () => setMaxHeight(inner.scrollHeight);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [open]);

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
