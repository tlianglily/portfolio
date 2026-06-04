"use client";

import Link from "next/link";
import { LittleAutonomyCard } from "@/components/LittleAutonomyCard";
import { CIRCACard } from "@/components/CIRCACard";
import { TempoCard } from "@/components/TempoCard";

export default function Home() {

  return (
    <>
      <style>{`
        body { animation: pageFadeIn 400ms ease both; }
        .hero-intro      { animation: heroSlideUp 600ms cubic-bezier(.2,.6,.2,1) both; animation-delay:  40ms; }
        .hero-name       { animation: heroSlideUp 700ms cubic-bezier(.2,.6,.2,1) both; animation-delay:  80ms; }
        .hero-role       { animation: heroSlideUp 600ms cubic-bezier(.2,.6,.2,1) both; animation-delay: 160ms; }
        .hero-statement  { animation: heroSlideUp 600ms cubic-bezier(.2,.6,.2,1) both; animation-delay: 220ms; }
        .hero-statements { animation: heroSlideUp 600ms cubic-bezier(.2,.6,.2,1) both; animation-delay: 320ms; }
        @media (max-width: 768px) {
          .hero            { padding: 100px 24px 40px !important; min-height: unset !important; }
          .hero-name       { font-size: 64px !important; }
          .hero-statement  { font-size: 20px !important; }
          .hero-statements { display: none !important; }
          .hero-statement  { margin-bottom: 0px !important; }
          .work-section    { padding: 0 5% 0 !important; }
          .entry-foot      { grid-template-columns: 1fr !important; gap: 16px !important; }
          .opening-line    { font-size: 20px !important; }
          .desktop-card    { display: none !important; }
          .mobile-cards    { display: flex !important; }
          .work-rule       { margin-bottom: 24px !important; justify-content: center !important; }
          .work-inner      { padding-bottom: 64px !important; }
        }
        @media (min-width: 769px) {
          .mobile-cards    { display: none !important; }
        }
        .mobile-card-link { display: block; text-decoration: none; color: var(--text-primary); }
        .mobile-card-img  { width: 100%; aspect-ratio: 983/566; border-radius: 16px; object-fit: cover; display: block; }
        .mobile-card-title { font-family: var(--body); font-weight: 700; font-size: 20px; letter-spacing: -0.02em; transition: color 200ms ease; }
        .mobile-card-link:hover .mobile-card-title { color: var(--accent-red); }

        /* See-all banner */
        .see-all-banner {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 11px 22px;
          border: 1px solid var(--hairline);
          border-radius: 999px;
          text-decoration: none; cursor: pointer;
          font-family: var(--body); font-size: 11px; font-weight: 600;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--text-secondary);
          transition: border-color 200ms ease, color 200ms ease;
        }
        .see-all-arrow { display: inline-block; transition: transform 200ms cubic-bezier(.2,.7,.2,1); }
        .see-all-banner:hover { border-color: var(--text-secondary); color: var(--text-primary); }
        .see-all-banner:hover .see-all-arrow { transform: translateX(3px); }

      `}</style>

      {/* ── HERO ─────────────────────────────── */}
      <section className="hero" style={{ minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 64px 40px", position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 1040, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="hero-intro" style={{ fontFamily: "var(--body)", fontSize: 26, fontWeight: 400, color: "var(--text-secondary)", marginBottom: 8, letterSpacing: "0.01em" }}>
            Hi, I&apos;m
          </p>
          <h1 className="hero-name" style={{ fontFamily: "var(--display)", fontWeight: 900, fontStyle: "italic", fontSize: 100, lineHeight: 1.1, color: "var(--accent-red)", letterSpacing: "-0.03em", marginBottom: 18 }}>
            Lily <span style={{ fontStyle: "normal", fontWeight: 400 }}>Liang.</span>
          </h1>
          <p className="hero-role" style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-tertiary)", marginBottom: 40 }}>
            Product Designer
          </p>
          <p className="hero-statement" style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: 26, lineHeight: 1.35, color: "var(--text-primary)", maxWidth: 800, marginBottom: 48 }}>
            I design for the friction people have learned to live with.
          </p>
        </div>

        {/* 3-col statement grid */}
        <div className="hero-statements" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 64, marginTop: 32, width: "100%", maxWidth: "var(--max-width)", textAlign: "left" }}>
          {[
            { lbl: "Problem",  text: <>The most interesting problems are the ones people have accepted as normal. They stop being felt as friction at all.</> },
            { lbl: "Insight",  text: <>Real need lives one layer beneath what&apos;s visible. The stated problem is rarely the real one.</> },
            { lbl: "Solution", text: <>Most solutions already exist — somewhere else. The skill is knowing what to borrow and how to combine.</> },
          ].map(({ lbl, text }) => (
            <div key={lbl}>
              <span style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--accent-red)", display: "block", marginBottom: 18 }}>{lbl}</span>
              <p style={{ fontFamily: "var(--body)", fontSize: 15, lineHeight: 1.85, color: "var(--text-primary)" }}>{text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ── WORK ─────────────────────────────── */}
      <section id="work" className="work-section" style={{ padding: "0 6% 0", marginTop: -20 }}>
        <div className="work-inner" style={{ maxWidth: "var(--max-width)", margin: "0 auto", paddingBottom: 80 }}>
          <div className="work-rule" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "28px 0", borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", marginBottom: "22%" }}>
            <span className="label">Selected work · 2023–2026</span>
          </div>

          {/* Desktop cards */}
          <div className="desktop-card" style={{ marginBottom: "28%" }}>
            <Link href="/projects/little-autonomy" style={{ display: "block" }}>
              <article><LittleAutonomyCard /></article>
            </Link>
          </div>
          <div className="desktop-card" style={{ marginBottom: "28%" }}>
            <Link href="/projects/circa" style={{ display: "block" }}>
              <article><CIRCACard /></article>
            </Link>
          </div>
          <div className="desktop-card">
            <Link href="/projects/tempo" style={{ display: "block" }}>
              <article><TempoCard /></article>
            </Link>
          </div>

          {/* Mobile cover cards */}
          <div className="mobile-cards" style={{ flexDirection: "column", gap: 32 }}>
            {[
              { href: "/projects/little-autonomy", title: "Little Autonomy", year: "Fall 2025 – Spring 2026", cover: "/images/cover-little-autonomy.webp", desc: "Interaction design empowering children's independence — systems that support self-directed decision-making in everyday life.", tags: ["Interaction Design", "UX Research"] },
              { href: "/projects/circa",            title: "Circa",            year: "Spring 2025",             cover: "/images/cover-circa.png",           desc: "A text-based, AI-powered pregnancy support platform built with Penn Medicine.",                                            tags: ["Product Design", "AI", "Healthcare"] },
              { href: "/projects/tempo",            title: "Tempo",            year: "Fall 2023",               cover: "/images/cover-tempo.webp",          desc: "An AI-powered system integrating into high-end restaurant operations.",                                                   tags: ["UX / UI", "Motion", "Hardware"] },
            ].map(({ href, title, year, cover, desc, tags }) => (
              <Link key={title} href={href} className="mobile-card-link">
                <div style={{ position: "relative" }}>
                  <img src={cover} alt={title} className="mobile-card-img" />
                  <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {tags.map(t => (
                      <span key={t} style={{ fontFamily: "var(--body)", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", background: "rgba(248,248,245,0.92)", border: "1px solid rgba(50,50,49,0.12)", borderRadius: 999, padding: "3px 8px", whiteSpace: "nowrap" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 5 }}>
                    <p className="mobile-card-title">{title}</p>
                    <span style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)" }}>{year}</span>
                  </div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
            <Link href="/projects" className="see-all-banner">
              View all work <span className="see-all-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <div className="cta-band">
        <div className="cta-inner">
          <div className="cta-text">
            <h3>Let&apos;s <i>work together.</i></h3>
            <p>Currently seeking full-time product design roles for 2026.</p>
          </div>
          <div className="cta-btns">
            <a href="mailto:tlianglilydesign@gmail.com" className="cta-btn-dark">Email me →</a>
            <Link href="/resume" className="cta-btn-outline">View resume</Link>
          </div>
        </div>
      </div>
    </>
  );
}

