"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Figma source dimensions ────────────────────────────────────────────────
   All pixel values are in Figma coordinates (container = 2176 × 1415).
   At runtime we scale by: containerWidth / FIGMA_W.
──────────────────────────────────────────────────────────────────────────── */
const FIGMA_W  = 2176;
const FIGMA_H  = 1415;
const IMG_W    = 4096;
const IMG_H    = 1103;

type Highlight = {
  left: number; top: number; width: number; height: number; radius: number;
};

type Phase = {
  label: string;
  color: string;
  imgLeft: number;   // Figma px
  imgTop:  number;   // Figma px
  highlight: Highlight | null;
  description: React.ReactNode;
};

/* ─── Phase definitions (from Figma states) ──────────────────────────────────
   Phase 1 → Default state  (node 88:295)
   Phase 2 → Variant 2      (node 88:297)
   Phase 3 → (to be fetched)
──────────────────────────────────────────────────────────────────────────── */
const PHASES: Phase[] = [
  {
    label: "Redesigned workflow",
    color: "var(--circa-primary)",
    imgLeft: 128,
    imgTop:  189,
    highlight: null,
    description:
      "The redesigned flow routes users at a single decision point — their pregnancy preference — captured right after they confirm the pregnancy.",
  },
  {
    label: "Desired and unsure paths",
    color: "#7B6FD4",
    imgLeft: -1572,
    imgTop:   370,
    highlight: {
      left: 143, top: 312, width: 2107, height: 763, radius: 25,
    },
    description:
      <><strong>Desired and unsure paths:</strong> Branches into tailored support for users who are excited or uncertain, instead of one linear flow for everyone.</>,
  },
  {
    label: "Pregnancy loss support",
    color: "#5B9A8A",
    imgLeft: -960,
    imgTop:   91,
    highlight: {
      left: 327, top: 829, width: 1522, height: 423, radius: 25,
    },
    description:
      <><strong>Pregnancy loss support:</strong> Adds a dedicated path for early pregnancy loss, where the original flow had none.</>,
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export function FlowScroller() {
  const wrapperRef   = useRef<HTMLDivElement>(null);
  const cardRef      = useRef<HTMLDivElement>(null);
  const imgRef       = useRef<HTMLImageElement>(null);
  const hlRef        = useRef<HTMLDivElement>(null);

  const [active,   setActive]   = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* scroll → active phase */
  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
      const progress   = Math.max(0, Math.min(1, -el.getBoundingClientRect().top / scrollable));
      setActive(Math.min(PHASES.length - 1, Math.floor(progress * PHASES.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  /* apply Figma-accurate positions whenever active changes */
  useEffect(() => {
    const card = cardRef.current;
    const img  = imgRef.current;
    const hl   = hlRef.current;
    if (!card || !img) return;

    const scale = card.offsetWidth / FIGMA_W;
    const phase = PHASES[active];

    /* image position */
    const tx = phase.imgLeft * scale;
    const ty = phase.imgTop  * scale;
    img.style.transition = "transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)";
    img.style.transform  = `translate(${tx}px, ${ty}px)`;
    img.style.width      = `${IMG_W  * scale}px`;
    img.style.height     = `${IMG_H  * scale}px`;

    /* highlight box */
    if (hl) {
      const h = phase.highlight;
      if (h) {
        hl.style.opacity = "1";
        hl.style.left    = `${h.left   * scale}px`;
        hl.style.top     = `${h.top    * scale}px`;
        hl.style.width   = `${h.width  * scale}px`;
        hl.style.height  = `${h.height * scale}px`;
        hl.style.borderRadius = `${h.radius * scale}px`;
      } else {
        hl.style.opacity = "0";
      }
    }
  }, [active]);

  /* ── Mobile ─────────────────────────────────────────────────────────── */
  if (isMobile) {
    return (
      <div className="fscroll-mobile">
        <div className="fscroll-tabs">
          {PHASES.map((p, i) => (
            <button key={i}
              className={"fscroll-tab" + (i === active ? " active" : "")}
              style={i === active ? { background: p.color, borderColor: p.color } : {}}
              onClick={() => setActive(i)}>
              {p.label}
            </button>
          ))}
        </div>
        <div ref={cardRef} className="fscroll-card fscroll-card--mobile">
          <div className="fscroll-clip">
            <img loading="lazy" ref={imgRef} src="/images/circa/circa-flow-v2.webp" alt="CIRCA care flow" className="fscroll-img" />
            <div ref={hlRef} className="fscroll-hl" />
          </div>
        </div>
        <p className="fscroll-desc is-active">{PHASES[active].description}</p>
      </div>
    );
  }

  /* ── Desktop ─────────────────────────────────────────────────────────── */
  return (
    <div ref={wrapperRef} className="fscroll-wrapper">
      <div className="fscroll-sticky">

        {/* Title */}
        <p className="fscroll-title">Redesigned Workflow</p>

        {/* Subtitle — fades with scroll */}
        <div className="fscroll-desc-wrap fscroll-desc-wrap--top">
          {PHASES.map((p, i) => (
            <p key={i} className={"fscroll-desc" + (i === active ? " is-active" : "")}>
              {p.description}
            </p>
          ))}
        </div>

        {/* Card */}
        <div ref={cardRef} className="fscroll-card">
          <div className="fscroll-clip">
            <img
              ref={imgRef}
              src="/images/circa/circa-flow-v2.webp"
              alt="CIRCA care flow"
              className="fscroll-img"
            />
            {/* Highlight overlay — Figma rgba(255,124,164,…) */}
            <div
              ref={hlRef}
              className="fscroll-hl"
            />
          </div>

          {/* Dots */}
          <div className="fscroll-dots">
            {PHASES.map((p, i) => (
              <div key={i}
                className={"fscroll-dot" + (i === active ? " active" : "")}
                style={i === active ? { background: p.color } : {}} />
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
