import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { payrollGroups, payrollTxns } from "@/lib/data";
import "./Payroll.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Visual-viewport micro-resizes (mobile URL bar show/hide) must not refresh
// ScrollTrigger, or the pin jumps. Set once at module load. (plan Note 1)
ScrollTrigger.config({ ignoreMobileResize: true });

// Pin scroll distance as a multiple of viewport height — tuning params.
// Mobile is a starting value (cards fly in from off-screen + collapse + counter
// + full inner list scroll must all fit); finalise in the browser. (plan Note 3)
const DESKTOP_END_VH = 3.2;
const MOBILE_END_VH = 2.8;

const heroTotal = payrollTxns.reduce((sum, t) => sum + t.eur, 0);
const formatEur = (n: number) =>
  "€" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// Two capability cards that flank the phone in the resting composition — same
// design as the "Everything you need / Nothing you don't" .banner-cards, scaled
// down. Copy is section-specific (trimmed to one line for the smaller card), so
// it lives here rather than mutating the shared whyCards in lib/data.
const sideCards = [
  {
    side: "left",
    image: "/save-on-fees.png",
    title: "Save on fees",
    body: "Batch every payout into one transaction and pay network fees just once.",
  },
  {
    side: "right",
    image: "/set-and-forget.png",
    title: "Set it and forget it",
    body: "Schedule recurring payroll and let it run — no manual sends each cycle.",
  },
] as const;

/*
  Payroll scroll choreography (one pinned GSAP timeline, scrubbed):
    1. big "Payroll transactions" heading
    2. heading blurs + fades out while the phone mockup scales in; individual
       transaction cards fade in around the phone's edges
    3. those cards collapse onto the first list row — one payroll =
       a batch of many transfers — while the row's total counts up to their sum
    4. the rest of the list lazy-reveals and the whole interface scrolls inside
       the clipped phone screen to the bottom

  Narrow (<900px) reuses the SAME choreography (shared runChoreography) but
  without the phone pull-back — the floaters fly in from beyond the viewport
  edges so the phone stays full-size. Reduced-motion gets static branches.
  The hero row (July · Jul 1 – Jul 12 · €5,130.89) is the collapse target and
  the counter target; its total equals the sum of the floating transaction cards.
*/
export default function Payroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const floatersRef = useRef<HTMLDivElement>(null);
  const sideCardsRef = useRef<HTMLDivElement>(null);
  const heroRowRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      const pin = pinRef.current;
      const heading = headingRef.current;
      const phone = phoneRef.current;
      const screen = screenRef.current;
      const content = contentRef.current;
      const floatersWrap = floatersRef.current;
      const sideCardsWrap = sideCardsRef.current;
      const heroRow = heroRowRef.current;
      const counter = counterRef.current;
      if (
        !section || !stage || !pin || !heading || !phone || !screen || !content ||
        !floatersWrap || !sideCardsWrap || !heroRow || !counter
      )
        return;

      const floaters = Array.from(floatersWrap.children) as HTMLElement[];
      const sideCardEls = Array.from(sideCardsWrap.children) as HTMLElement[];
      const nonHeroRows = Array.from(
        section.querySelectorAll<HTMLElement>(".pr-row:not(.pr-row-hero)"),
      );

      const mm = gsap.matchMedia();

      /* ── Shared pinned, scrubbed choreography. Wide (≥900, pullback:true)
            ends on the resting composition — phone pulls back and the side cards
            emerge into the side slots. Narrow (<900, pullback:false) reuses the
            SAME beats: the phone stays scale 1 and the floaters fly in from
            beyond the viewport edges (CSS), so the phone never has to shrink.
            pinEl is BOTH the pin target and the coordinate origin for the
            collapse (its rect gives cx/cy) — see plan Note 2. */
      const runChoreography = (
        pinEl: HTMLElement,
        { pullback, endVh, pinType }: { pullback: boolean; endVh: number; pinType?: "transform" | "fixed" },
      ) => {
        // Measured each refresh so the scroll targets survive resize/font load.
        let scrollEnd = 0; // content offset at the very bottom of the list

        // GSAP owns the floater transforms up front (xPercent centres them just
        // like the CSS translate) so measure() can always read back a reliable
        // base x/y when deriving each card's scattered centre.
        gsap.set(floaters, { opacity: 0, xPercent: -50, yPercent: -50, x: 0, y: 0, scale: 1 });

        // Desktop only: side cards start hidden, tucked toward (behind) the
        // phone — they emerge outward to their slots in beat 4. yPercent:-50
        // mirrors the CSS translateY(-50%) so they ride the phone's centre as it
        // scales. On mobile the cards stay static below the phone, revealed by a
        // light fade in the mobile branch — so we don't touch them here.
        if (pullback) {
          gsap.set(sideCardEls, { opacity: 0, yPercent: -50, scale: 0.92, x: (i: number) => (i === 0 ? 60 : -60) });
        }

        // Per-floater pixel delta from its scattered centre to the phone centre,
        // recomputed every refresh so the collapse is a pure transform tween that
        // scrubs cleanly both ways and survives resize (Flip + pin + scrub did not).
        const dx: number[] = [];
        const dy: number[] = [];
        const measure = () => {
          const screenH = screen.clientHeight;

          // Scroll just far enough that the "Show more" button comes to rest
          // 20px above the tab bar — NOT until the whole content (incl. its
          // bottom padding) clears the screen, which overscrolled the list.
          // Computed from layout offsetTop geometry (not getBoundingClientRect)
          // so it's immune to the phone's beat-4 scale and already lives in the
          // content-local coordinate space that `content.y` is applied in.
          const showMore = section.querySelector<HTMLElement>(".pr-showmore");
          const tabbar = section.querySelector<HTMLElement>(".pr-tabbar");
          const tabMenu = section.querySelector<HTMLElement>(".pr-tabbar-menu");
          if (showMore && tabbar && tabMenu) {
            // offsetParents: .pr-tabbar→.pr-screen, .pr-tabbar-menu→.pr-tabbar,
            //                .pr-showmore→.pr-content, .pr-content→.pr-screen.
            const tabMenuTop = tabbar.offsetTop + tabMenu.offsetTop; // screen-local
            const showMoreBottom = content.offsetTop + showMore.offsetTop + showMore.offsetHeight; // screen-local @ y:0
            scrollEnd = Math.min(0, tabMenuTop - 20 - showMoreBottom); // 20px gap above the tab bar
          } else {
            scrollEnd = Math.min(0, -(content.scrollHeight - screenH));
          }

          // cx/cy AND each floater rect are read inside pinEl, so the collapse
          // delta is scroll-invariant: a common scroll/pin offset cancels out.
          // This holds only because the floaters' containing block IS pinEl
          // (.pr-stage on desktop, .pr-pin on mobile) — see plan Note 2.
          const pinRect = pinEl.getBoundingClientRect();
          const cx = pinRect.left + pinRect.width / 2;
          // Collapse target sits a touch BELOW the phone's vertical centre
          // (around the "Payroll details" band) rather than dead centre.
          const cy = pinRect.top + pinRect.height / 2 + screenH * 0.16;
          floaters.forEach((f, i) => {
            const r = f.getBoundingClientRect();
            // Strip any transform already applied so we always derive the
            // floater's base (scattered) centre, whatever the current scrub state.
            const appliedX = parseFloat(String(gsap.getProperty(f, "x")));
            const appliedY = parseFloat(String(gsap.getProperty(f, "y")));
            dx[i] = cx - (r.left + r.width / 2 - appliedX);
            dy[i] = cy - (r.top + r.height / 2 - appliedY);
          });
        };
        measure();

        // Animation start states (written before first paint — no flash).
        gsap.set(phone, { opacity: 0, scale: 0.92, y: 30 });
        gsap.set(nonHeroRows, { opacity: 0, y: 10 });
        gsap.set(heroRow, { opacity: 0 });
        gsap.set(content, { y: 0 });
        counter.textContent = formatEur(0);

        // The hero-row total counts up from €0 to the sum of the floating cards.
        // Driven by its own timeline tween (beat 3.5) — NOT the list scroll — so
        // the count is a clear, readable beat that lands as the cards collapse,
        // exactly as the spec wants ("сумма набегает счётчиком как сумма карточек").
        const counterProxy = { v: 0 };
        const renderCounter = () => {
          counter.textContent = formatEur(counterProxy.v);
        };

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: pinEl,
            start: "top top",
            end: () => "+=" + window.innerHeight * endVh,
            pin: pinEl,
            pinSpacing: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: measure,
            // Mobile uses "transform" pinning (touch-stable); desktop keeps the
            // default. Combined with ScrollTrigger.config(ignoreMobileResize) up
            // top, this prevents URL-bar resize jumps. (plan Note 1)
            ...(pinType ? { pinType } : {}),
          },
        });

        // Exposed for Playwright verification.
        (window as Window & { __payrollST?: ScrollTrigger; __payrollSeek?: (p: number) => void }).__payrollST =
          tl.scrollTrigger;
        (window as Window & { __payrollSeek?: (p: number) => void }).__payrollSeek = (p: number) => {
          const st = tl.scrollTrigger!;
          st.scroll(st.start + p * (st.end - st.start));
        };

        // beat 1 (0.00–0.10): hold the heading — implicit gap.

        // beat 2 (0.10–0.26): heading leaves, the phone enters showing the TOP
        // of the interface (content stays at y:0 — no inner scroll yet), and the
        // transaction cards fade in around the phone.
        tl.to(heading, { opacity: 0, filter: "blur(14px)", y: -40, scale: 0.96, duration: 0.15 }, 0.10);
        tl.to(phone, { opacity: 1, scale: 1, y: 0, duration: 0.15 }, 0.10);
        tl.to(floaters, { opacity: 1, duration: 0.1, stagger: 0.012 }, 0.16);

        // beat 3 (0.26–0.54): the cards collapse into the phone (just below the
        // "Run payroll" card) and fade out — many transfers batched into one run.
        // Pure transform fromTo with function-based ends (re-read on refresh).
        // This beat fully completes BEFORE the list starts scrolling (beat 4);
        // the hero payroll row itself reveals later, during that scroll.
        const collapseStart = 0.26;
        const collapseDur = 0.17;
        const collapseStagger = 0.022;
        const fadeDur = 0.06;
        // End of the last (most-staggered) card's travel — the gate beat 4 waits on.
        const collapseEnd = collapseStart + collapseStagger * (floaters.length - 1) + collapseDur;
        tl.fromTo(
          floaters,
          { x: 0, y: 0, scale: 1 },
          {
            x: (i: number) => dx[i],
            y: (i: number) => dy[i],
            scale: 0.62,
            duration: collapseDur,
            ease: "power2.inOut",
            stagger: collapseStagger,
            immediateRender: false,
          },
          collapseStart,
        );
        // Stagger the fade-out to mirror the movement stagger above, so each card
        // only dissolves once it has actually reached the phone. Placed at
        // (collapseStart + collapseDur − fadeDur) with the same stagger, every
        // card's fade ends exactly as its travel ends — including the late
        // TRX/BNB cards, which previously vanished out near the edges.
        tl.to(
          floaters,
          { opacity: 0, duration: fadeDur, stagger: collapseStagger },
          collapseStart + collapseDur - fadeDur,
        );

        // beat 3.5 (crossfade into the payroll row): as the last cards dissolve,
        // the hero payroll row fades in where they landed and its total counts up
        // from €0 to their sum — the visible "many transactions → one payroll".
        // Starts just before the collapse fully ends so the merge reads as a
        // continuous crossfade rather than a hard cut.
        const countStart = collapseEnd - 0.05;
        const countDur = 0.13;
        tl.to(heroRow, { opacity: 1, duration: 0.1 }, countStart);
        tl.to(
          counterProxy,
          { v: heroTotal, duration: countDur, ease: "power1.out", onUpdate: renderCounter },
          countStart,
        );

        // beat 4 (after the count, ~0.65–1.00): now — and only now, once the cards
        // have collapsed into the row and the total has tallied — the interface
        // scrolls from the top to the bottom inside the clipped screen, the
        // remaining payroll rows lazy-revealing as they rise into view.
        const scrollStart = countStart + countDur + 0.02; // brief hold on the tally
        tl.fromTo(
          content,
          { y: 0 },
          { y: () => scrollEnd, duration: 1 - scrollStart, immediateRender: false },
          scrollStart,
        );
        tl.to(nonHeroRows, { opacity: 1, y: 0, duration: 0.25, stagger: { each: 0.006 } }, scrollStart + 0.01);

        // beat 4 (desktop only): the phone pulls back (scales down) while two
        // capability cards rise out from behind it into the side slots. On mobile
        // (pullback:false) the phone stays scale 1 and the side cards live static
        // below the phone, so neither tween runs — the phone never shrinks.
        if (pullback) {
          tl.to(phone, { scale: 0.86, duration: 1 - scrollStart, ease: "power1.inOut" }, scrollStart);
          tl.to(
            sideCardEls,
            { opacity: 1, x: 0, scale: 1, duration: 0.22, stagger: 0.06, ease: "power2.out" },
            scrollStart + 0.05,
          );
        }
      };

      /* ── Wide (≥900px): full choreography — phone pulls back and the side
            cards emerge into the side slots beside it. Lowered from 1100→900 so
            landscape tablets / small laptops get the flanked composition instead
            of a small phone marooned in empty side-bands. ── */
      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        runChoreography(stage, { pullback: true, endVh: DESKTOP_END_VH });
      });

      /* ── Narrow (<900px): SAME pinned choreography, phone full-size, floaters
            fly in from beyond the viewport edges (CSS). The two capability cards
            stay static, stacked BELOW the phone (they flow after the pin) and
            just fade in as they scroll into view. pinType:"transform" keeps the
            pin steady on touch. ── */
      mm.add("(max-width: 899px) and (prefers-reduced-motion: no-preference)", () => {
        runChoreography(pin, { pullback: false, endVh: MOBILE_END_VH, pinType: "transform" });
        gsap.set(sideCardEls, { opacity: 0, y: 24 });
        gsap.to(sideCardEls, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: { trigger: sideCardsWrap, start: "top 90%" },
        });
      });

      /* ── Reduced motion, wide (≥900px): static side-slot poster. The heading
            is intentionally hidden and the list is intentionally NOT pre-scrolled
            (it rests at y:0, shown from the top) — a deliberate still, not a bug. */
      mm.add("(min-width: 900px) and (prefers-reduced-motion: reduce)", () => {
        counter.textContent = formatEur(heroTotal);
        gsap.set(heading, { opacity: 0 });          // deliberately hidden; kept in DOM for a11y
        gsap.set(phone, { scale: 0.86 });            // final scale → keeps the side-card clearance valid
        // content stays at y:0 on purpose — the list is shown from the top.
        gsap.set([heroRow, ...nonHeroRows, ...sideCardEls], { opacity: 1, clearProps: "transform,filter" });
      });

      /* ── Reduced motion, narrow (<900px): static stacked composition. The
            heading is absolute inside .pr-pin, so a visible one would overlap the
            phone — hide it (matches the wide reduced-motion choice). ── */
      mm.add("(max-width: 899px) and (prefers-reduced-motion: reduce)", () => {
        counter.textContent = formatEur(heroTotal);
        gsap.set(heading, { opacity: 0 });          // deliberately hidden; kept in DOM for a11y
        gsap.set([phone, heroRow, ...nonHeroRows, ...sideCardEls], {
          opacity: 1,
          clearProps: "transform,filter",
        });
      });

      // Nunito changes line metrics — re-measure once it has loaded.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section className="pr" ref={sectionRef} aria-label="Payroll transactions">
      <div className="pr-stage" ref={stageRef}>
        {/* The pinned trio: heading + phone + floaters. `display:contents` on
            desktop (transparent to layout); on mobile it's the real 100svh pin
            box so .pr-sidecards can flow BELOW it after the pin releases. */}
        <div className="pr-pin" ref={pinRef}>
        <div className="pr-heading" ref={headingRef}>
          <h2 className="section-title pr-title">
            Payroll <span className="accent">transactions</span>
          </h2>
          <p className="pr-sub">
            Pay your whole team in one run — many transfers, settled on time, every time.
          </p>
        </div>

        <div className="pr-phone" ref={phoneRef}>
          <div className="pr-device">
            <div className="pr-screen" ref={screenRef}>
              {/* iOS status bar — pinned to the top of the screen, OUTSIDE
                  .pr-content so it stays put as the list scrolls under it
                  (mirrors the .pr-tabbar overlay). .pr-content gets a matching
                  padding-top so the first row clears it. */}
              <div className="pr-statusbar" aria-hidden="true">
                <span className="pr-time">9:41</span>
                <span className="pr-island" />
                {/* Cellular / Wi-Fi / battery glyphs reproduced 1:1 from Figma
                    0:695 (exact viewBoxes + dimensions), inheriting --navy via
                    currentColor — Tabler font glyphs couldn't match these. */}
                <span className="pr-status-icons">
                  <svg className="pr-sb-ico pr-sb-cell" viewBox="0 0 19.2 12.2264" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.14623C19.2 0.513183 18.7224 0 18.1333 0H17.0667C16.4776 0 16 0.513183 16 1.14623V11.0802C16 11.7132 16.4776 12.2264 17.0667 12.2264H18.1333C18.7224 12.2264 19.2 11.7132 19.2 11.0802V1.14623ZM11.7659 2.44528H12.8326C13.4217 2.44528 13.8992 2.97078 13.8992 3.61902V11.0527C13.8992 11.7009 13.4217 12.2264 12.8326 12.2264H11.7659C11.1768 12.2264 10.6992 11.7009 10.6992 11.0527V3.61902C10.6992 2.97078 11.1768 2.44528 11.7659 2.44528ZM7.43411 5.09433H6.36745C5.77834 5.09433 5.30078 5.62652 5.30078 6.28301V11.0377C5.30078 11.6942 5.77834 12.2264 6.36745 12.2264H7.43411C8.02322 12.2264 8.50078 11.6942 8.50078 11.0377V6.28301C8.50078 5.62652 8.02322 5.09433 7.43411 5.09433ZM2.13333 7.53962H1.06667C0.477563 7.53962 0 8.06421 0 8.71132V11.0547C0 11.7018 0.477563 12.2264 1.06667 12.2264H2.13333C2.72244 12.2264 3.2 11.7018 3.2 11.0547V8.71132C3.2 8.06421 2.72244 7.53962 2.13333 7.53962Z" fill="currentColor" />
                  </svg>
                  <svg className="pr-sb-ico pr-sb-wifi" viewBox="0 0 17.1417 12.3283" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.53599C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63365 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.2877 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z" fill="currentColor" />
                  </svg>
                  <svg className="pr-sb-ico pr-sb-batt" viewBox="0 0 27.328 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.35" x="0.5" y="0.5" width="24" height="12" rx="3.8" stroke="currentColor" />
                    <path opacity="0.4" d="M26 4.78113V8.8566C26.8047 8.51143 27.328 7.70847 27.328 6.81886C27.328 5.92926 26.8047 5.1263 26 4.78113" fill="currentColor" />
                    <rect x="2" y="2" width="21" height="9" rx="2.5" fill="currentColor" />
                  </svg>
                </span>
              </div>

              <div className="pr-content" ref={contentRef}>
                <div className="pr-nav">
                  <i className="ti ti-chevron-left pr-nav-back" aria-hidden="true" />
                  <span>Payroll</span>
                </div>

                <div className="pr-runfor">
                  <div className="pr-runfor-top">
                    <span className="pr-runfor-label">You’re running payroll for</span>
                    <span className="pr-badge-outline">Autopayroll on</span>
                  </div>
                  <button className="pr-locations" type="button">
                    <span>3 locations</span>
                    <i className="ti ti-chevron-down" aria-hidden="true" />
                  </button>
                </div>

                <div className="pr-card">
                  <div className="pr-card-head">
                    <span className="pr-card-title">Run payroll</span>
                    <span className="pr-pill pr-pill-due">Due in 6 days</span>
                  </div>
                  <div className="pr-divider" />
                  <div className="pr-card-row">
                    <span className="pr-muted">We’ll submit your payroll automatically by</span>
                    <span className="pr-strong">
                      Wed, Jul 25, <span className="pr-link">7:00pm PT</span>
                    </span>
                  </div>
                  <div className="pr-divider" />
                  <div className="pr-card-cols">
                    <div>
                      <span className="pr-muted">Payday</span>
                      <span className="pr-strong">Fri, Aug 2</span>
                    </div>
                    <div>
                      <span className="pr-muted">Pay period</span>
                      <span className="pr-strong">Jul 15 – Jul 26</span>
                    </div>
                  </div>
                  <button className="pr-btn" type="button">
                    <i className="ti ti-download" />
                    Download reports
                  </button>
                </div>

                <div className="pr-details-head">
                  <span className="pr-details-title">Payroll details</span>
                  <span className="pr-details-icons">
                    <i className="ti ti-search" />
                    <i className="ti ti-adjustments" />
                  </span>
                </div>

                {payrollGroups.map((group, gi) => (
                  <div className="pr-group" key={group.month}>
                    <div className="pr-month">{group.month}</div>
                    {group.rows.map((row, ri) => {
                      const isHero = gi === 0 && ri === 0;
                      return (
                        <div
                          className={`pr-row${isHero ? " pr-row-hero" : ""}`}
                          key={row.period}
                          ref={isHero ? heroRowRef : undefined}
                        >
                          <span className="pr-row-ico">
                            <i className="ti ti-check" aria-hidden="true" />
                          </span>
                          <span className="pr-row-main">
                            <span className="pr-row-title">Regular {row.period}</span>
                            <span className="pr-row-sub">
                              {row.paychecks ?? 5} paychecks, Pay date {row.payDate}
                            </span>
                          </span>
                          <span className="pr-row-right">
                            <span className="pr-row-amount" ref={isHero ? counterRef : undefined}>
                              {row.amount}
                            </span>
                            <span className="pr-row-status">Paid</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}

                <button className="pr-showmore" type="button">Show more</button>
              </div>

              <div className="pr-tabbar">
                <div className="pr-tabbar-stack">
                  <div className="pr-tabbar-menu">
                    <button className="pr-tab" type="button">
                      <i className="ti ti-home" aria-hidden="true" />
                      <span>Home</span>
                    </button>
                    <button className="pr-tab pr-tab-active" type="button" aria-current="page">
                      <i className="ti ti-arrow-up" aria-hidden="true" />
                      <span>Send</span>
                    </button>
                    <button className="pr-tab" type="button">
                      <i className="ti ti-arrow-down" aria-hidden="true" />
                      <span>Receive</span>
                    </button>
                  </div>
                  <div className="pr-home-indicator"><span /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pr-floaters" ref={floatersRef} aria-hidden="true">
          {payrollTxns.map((t, i) => (
            <div className={`pr-floater pr-floater-${i}`} key={t.name}>
              <span className="pr-floater-ico">
                <img src={t.image} alt="" />
              </span>
              <span className="pr-floater-main">
                <span className="pr-floater-title">Sent</span>
                <span className="pr-floater-sub">{t.name}</span>
              </span>
              <span className="pr-floater-right">
                <span className="pr-floater-amount">{t.crypto}</span>
                <span className="pr-floater-eur">{formatEur(t.eur)}</span>
              </span>
            </div>
          ))}
        </div>
        </div>{/* /.pr-pin */}

        <div className="pr-sidecards" ref={sideCardsRef} aria-hidden="true">
          {sideCards.map((c) => (
            <div className={`pr-sidecard pr-sidecard-${c.side}`} key={c.title}>
              <img src={c.image} alt="" className="pr-sidecard-img" />
              <h3 className="pr-sidecard-title">{c.title}</h3>
              <p className="pr-sidecard-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
