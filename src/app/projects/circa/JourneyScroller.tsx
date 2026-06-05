"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const STEPS = [
  {
    label: "Unsure about pregnancy",
    chart: "/images/circa/circa-journey-1.svg",
    quote: `"I understand this is largely a thread for very excited pregnant folks, but I fall into the category of every other day I change my mind, and I'm still not sure."`,
    author: "thejaybrayster",
    href: "https://www.reddit.com/r/pregnant/comments/17u6n07/to_keep_or_not_to_keep_this_unexpected_pregnancy/",
  },
  {
    label: "Miscarriage",
    chart: "/images/circa/circa-journey-2.svg",
    quote: `"I don't know why this is happening. I don't know why my body can't keep a baby."`,
    author: "NegotiationFrosty839",
    href: "https://www.reddit.com/r/pregnant/comments/18kcqxx/im_having_a_miscarriage/",
  },
  {
    label: "Overwhelmed by physical symptoms",
    chart: "/images/circa/circa-journey-3.svg",
    quote: `"Extreme fatigue, no appetite, muscle aches."`,
    author: "lunarkoko",
    href: "https://www.reddit.com/r/pregnant/comments/1jmxtne/what_are_your_first_trimester_symptoms/",
  },
];

export function JourneyScroller() {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const panelRef    = useRef<HTMLDivElement>(null);
  const [active,     setActive]     = useState(0);
  const [isMobile,   setIsMobile]   = useState(false);
  const [stickyTop,  setStickyTop]  = useState("0px");
  const [cueVisible, setCueVisible] = useState(true);

  // ── mobile breakpoint ──────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── sticky top = 50 vh − half panel height (mount + resize only) ─────────
  useLayoutEffect(() => {
    const compute = () => {
      if (!panelRef.current) return;
      const h = panelRef.current.offsetHeight;
      setStickyTop(`calc(50vh - ${h / 2}px)`);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []); // ← empty deps: run once, then only on resize

  // ── scroll → active step ───────────────────────────────────────────────────
  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const rect      = wrapper.getBoundingClientRect();
      const scrollable = Math.max(1, wrapper.offsetHeight - window.innerHeight);
      const progress   = Math.max(0, Math.min(1, -rect.top / scrollable));
      setActive(prev => Math.min(2, Math.floor(progress * 3)));
      setCueVisible(progress <= 0.04);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // ── mobile ─────────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="circa-jscroll-mobile">
        <div className="circa-jscroll-tabs">
          {STEPS.map((step, i) => (
            <button
              key={i}
              className={"circa-jscroll-tab" + (i === active ? " active" : "")}
              onClick={() => setActive(i)}
            >
              {step.label}
            </button>
          ))}
        </div>
        <img
          src={STEPS[active].chart}
          alt={STEPS[active].label}
          className="circa-jscroll-chart-img"
          width={1110} height={721}
        />
        <p className="circa-jscroll-quote-text">{STEPS[active].quote}</p>
      </div>
    );
  }

  // ── desktop ────────────────────────────────────────────────────────────────
  return (
    <div ref={wrapperRef} className="circa-jscroll-wrapper">
      <div ref={panelRef} className="circa-jscroll-sticky" style={{ top: stickyTop }}>

        {/* Progress dots */}
        <div className="circa-jscroll-dots">
          {STEPS.map((_, i) => (
            <div key={i} className={"circa-jscroll-dot" + (i === active ? " active" : "")} />
          ))}
        </div>

        {/* Labels — absolute stack, crossfade */}
        <div className="circa-jscroll-label-stack">
          {STEPS.map((step, i) => (
            <p
              key={i}
              className={"circa-jscroll-journey-label" + (i === active ? " is-active" : "")}
            >
              {step.label}
            </p>
          ))}
        </div>

        {/* Charts — absolute stack, crossfade */}
        <div className="circa-jscroll-chart-stack">
          {STEPS.map((step, i) => (
            <img
              key={i}
              src={step.chart}
              alt={step.label + " journey map"}
              className={"circa-jscroll-chart-img" + (i === active ? " is-active" : "")}
              width={1110} height={721}
            />
          ))}
        </div>

        {/* Quotes — absolute stack, crossfade */}
        <div className="circa-jscroll-quote-stack">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={"circa-jscroll-quote" + (i === active ? " is-active" : "")}
            >
              <p className="circa-jscroll-quote-text">{step.quote}</p>
              <a
                className="circa-jscroll-quote-author"
                href={step.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                u/{step.author}
              </a>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className={"circa-jscroll-cue" + (cueVisible ? " visible" : "")}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>scroll</span>
        </div>

      </div>
    </div>
  );
}
