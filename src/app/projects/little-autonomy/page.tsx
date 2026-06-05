import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = {
  title: "Little Autonomy - Lily Liang Portfolio",
  description:
    "A Montessori-inspired mobile app that helps parents raise more independent children at home. UX design, conjoint analysis, and business model. Fall 2025–Spring 2026.",
};

/* ─── Helpers ───────────────────────────────────────────────────────────── */

/** Dashed image placeholder with aspect ratio */
function Img({ label, filename, aspect = "16/9", note }: {
  label: string; filename: string; aspect?: string; note?: string;
}) {
  return (
    <div className="la-img-slot" style={{ aspectRatio: aspect }}>
      <span className="la-img-label">{label}</span>
      <code className="la-img-file">{filename}</code>
      {note && <span className="la-img-note">{note}</span>}
    </div>
  );
}

/** Italic Fraunces pull-quote headline */
function Insight({ children }: { children: React.ReactNode }) {
  return <p className="la-insight">{children}</p>;
}

/** Thin ruled divider between sub-topics in the same section */
function Rule() {
  return <div className="la-rule" />;
}

/** Phone frame overlay — frame PNG sits on top of screenshot via multiply */
function PhoneMockup({ screenSrc, screenAlt }: { screenSrc: string; screenAlt: string }) {
  return (
    <div className="la-phone-mockup">
      {screenSrc.endsWith('.mp4')
        ? <video src={screenSrc} autoPlay loop muted playsInline className="la-phone-mockup-screen" />
        : <img loading="lazy" src={screenSrc} alt={screenAlt} className="la-phone-mockup-screen" />
      }
      <img loading="lazy" src="/images/la/la-phone-frame.webp" alt="" aria-hidden className="la-phone-mockup-frame" />
    </div>
  );
}

/** Phone-shaped placeholder (405:830 ratio) */
function PhoneSlot({ filename, label }: { filename: string; label: string }) {
  return (
    <div className="la-phone-slot">
      <span className="la-img-label">{label}</span>
      <code className="la-img-file">{filename}</code>
    </div>
  );
}


export default function LittleAutonomyPage() {
  return (
    <>
      <style>{`
        html, body { background: var(--la-bg); }

        /* ── Pull-quote insight headline ─────────────────────────────── */
        .la-insight {
          font-family: var(--display);
          font-style: italic; font-weight: 400;
          font-size: 22px;
          line-height: 1.1; letter-spacing: -0.015em;
          color: var(--text-primary);
          border-left: 3px solid var(--la-primary);
          padding: 12px 16px 12px 15px;
          margin: 28px 0 10px;
          background: rgba(122, 54, 253, 0.03);
          border-radius: 0 8px 8px 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .la-insight:first-child { margin-top: 0; }
        @media (max-width: 768px) { .la-insight { font-size: 18px; } }

        /* ── Video title ─────────────────────────────────────────────── */
        .la-video-title {
          font-family: var(--body); font-size: 13px; font-weight: 600;
          letter-spacing: 0.01em; color: var(--text-secondary);
          margin: 20px 0 8px;
        }

        /* ── YouTube embed ───────────────────────────────────────────── */
        .la-video {
          position: relative; width: 100%;
          padding-bottom: 56.25%; /* 16:9 */
          border-radius: 16px; overflow: hidden;
          margin: 8px 0 20px; background: #000;
        }
        .la-video iframe {
          position: absolute; inset: 0;
          width: 100%; height: 100%; border: none;
        }

        /* ── Section sub-rule ────────────────────────────────────────── */
        .la-rule {
          height: 1px; background: var(--hairline);
          margin: 32px 0;
        }

        /* ── Stat pair (62% / 68%) ───────────────────────────────────── */
        .la-stat-pair {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 10px; margin: 18px 0;
        }
        .la-stat-card {
          display: flex; flex-direction: column;
          border-radius: 16px; overflow: hidden;
          background: rgba(122,54,253,0.06);
          border: 1px solid rgba(122,54,253,0.12);
        }
        .la-stat-card-img-well {
          height: 220px; background: #fff;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
        }
        .la-stat-card-img-well img {
          max-width: 100%; max-height: 100%;
          object-fit: contain; display: block;
        }
        .la-stat-card-body { padding: 16px 20px; }
        .la-stat-num {
          font-family: var(--display); font-weight: 900;
          font-size: 42px; line-height: 1; color: var(--la-primary);
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .la-stat-desc {
          font-family: var(--body); font-size: 13px;
          color: var(--text-secondary); margin-top: 5px; line-height: 1.4;
        }

        /* ── Research scope grid (4 stats) ───────────────────────────── */
        .la-research-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 10px; margin: 18px 0;
        }
        .la-research-card {
          padding: 16px 18px; border-radius: 14px;
          background: rgba(122,54,253,0.06);
          border: 1px solid rgba(122,54,253,0.1);
          display: flex; flex-direction: column; gap: 4px;
        }
        .la-research-num {
          font-family: var(--display); font-weight: 900;
          font-size: 30px; line-height: 1;
          color: var(--la-primary);
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .la-research-label {
          font-size: 12px; color: var(--text-secondary);
          font-weight: 500;
        }

        /* ── Before / after split card ───────────────────────────────── */
        .la-ba-wrap {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 0; margin: 20px 0;
          border-radius: 16px; overflow: hidden;
          border: 1px solid var(--hairline);
        }
        .la-ba-col { display: flex; flex-direction: column; }
        .la-ba-header {
          padding: 8px 14px;
          font-family: var(--body); font-size: 10px;
          font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
        }
        .la-ba-before .la-ba-header {
          background: rgba(50,50,49,0.05); color: var(--text-tertiary);
        }
        .la-ba-after .la-ba-header {
          background: rgba(122,54,253,0.09); color: var(--la-primary);
          border-left: 1px solid var(--hairline);
        }
        .la-ba-body {
          flex: 1;
          background: rgba(50,50,49,0.025);
          display: flex; align-items: center; justify-content: center;
          padding: 12px; border-top: 1px solid var(--hairline);
          font-family: var(--body); font-size: 11px;
          color: var(--text-tertiary);
          text-align: center;
        }
        .la-ba-after .la-ba-body {
          border-left: 1px solid var(--hairline);
          background: rgba(122,54,253,0.025);
        }

        /* ── Negative-impact badge (−21.2%) ──────────────────────────── */
        .la-badge-neg {
          display: inline-flex; align-items: center; gap: 4px;
          background: rgba(255,124,164,0.14);
          color: #C0306A; font-weight: 700;
          font-size: 15px; padding: 4px 13px;
          border-radius: 999px; white-space: nowrap;
          font-family: var(--body);
        }

        /* ── Metric chips row ─────────────────────────────────────────── */
        .la-metrics {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 10px; margin: 18px 0;
        }
        .la-metric {
          padding: 18px 20px; border-radius: 16px;
          background: rgba(122,54,253,0.06);
          border: 1px solid rgba(122,54,253,0.12);
        }
        .la-metric-val {
          font-family: var(--display); font-weight: 900;
          font-size: 28px; line-height: 1; color: var(--la-primary);
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .la-metric-key {
          font-size: 11px; color: var(--text-secondary);
          margin-top: 4px; font-weight: 500; letter-spacing: 0.02em;
        }

        /* ── Phone + text two-column layout ───────────────────────────── */
        .la-phone-row {
          display: grid; grid-template-columns: 2fr 1fr;
          gap: 32px; align-items: center;
          margin: 20px 0;
        }
        .la-phone-row.la-phone-row--flip {
          grid-template-columns: 1fr 2fr;
        }
        .la-phone-row-text {
          display: flex; flex-direction: column; gap: 10px;
        }
        .la-phone-row-text .la-insight { margin: 0; }
        .la-phone-row-img {
          width: 100%;
        }
        .la-phone-img {
          width: 100%; height: auto; display: block;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(50,50,49,0.13);
        }
        /* Two phones side by side (expert section) */
        .la-phone-row-img--two {
          display: flex; gap: 10px; align-items: flex-start;
        }
        .la-phone-row-img--two .la-phone-img {
          width: calc(50% - 5px); height: auto;
        }
        @media (max-width: 700px) {
          .la-phone-row, .la-phone-row.la-phone-row--flip {
            grid-template-columns: 1fr;
          }
          .la-phone-row-img--two { justify-content: center; }
          .la-phone-row-img--two .la-phone-img { width: 45%; }
        }

        /* ── Phone-shaped placeholder ─────────────────────────────────── */
        .la-phone-slot {
          aspect-ratio: 405/830; width: 160px;
          background: rgba(122,54,253,0.04);
          border: 1.5px dashed rgba(122,54,253,0.22);
          border-radius: 28px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 5px; padding: 16px; text-align: center;
        }

        /* ── Side-by-side before/after ───────────────────────────────── */
        .la-compare {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px; margin: 20px 0;
          align-items: start;
        }
        .la-compare--three { grid-template-columns: 1fr 1fr 1fr; }
        /* Two columns but each cell same width as a 3-col column */
        .la-compare--two-narrow { max-width: 67%; margin-left: auto; margin-right: auto; }
        .la-compare-col {
          display: flex; flex-direction: column; gap: 12px;
        }
        .la-compare-col img {
          width: 100%; height: auto; display: block;
          border-radius: 24px;
          box-shadow: 0 4px 24px rgba(50,50,49,0.12);
        }
        .la-compare-caption {
          display: flex; flex-direction: column; gap: 5px;
        }
        .la-compare-caption p {
          font-size: 13px; color: var(--text-secondary);
          line-height: 1.5; margin: 0;
        }
        @media (max-width: 640px) {
          .la-compare { grid-template-columns: 1fr 1fr; }
          .la-compare--three { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 400px) {
          .la-compare, .la-compare--three { grid-template-columns: 1fr; }
        }

        /* ── Phone slot inside compare column ────────────────────────── */
        .la-compare-col .la-phone-slot { width: 100%; }

        /* ── Phone mockup (frame overlay via multiply) ───────────────── */
        .la-phone-mockup {
          position: relative; display: inline-block;
          max-width: 200px; width: 100%;
        }
        .la-phone-mockup-screen {
          display: block; width: 100%; height: auto;
          border-radius: 36px;
        }
        .la-phone-mockup-frame {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: fill;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        /* ── Guided Practice alternating feature rows ─────────────────── */
        .la-gp-feature {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 40px; align-items: center;
          margin: 32px 0;
        }
        .la-gp-feature-text {
          display: flex; flex-direction: column; gap: 8px;
        }
        .la-gp-feature-text h4 { margin-top: 0 !important; }
        .la-gp-feature-media {
          display: flex; justify-content: center;
        }
        .la-gp-feature--flip .la-gp-feature-media { order: 2; }
        .la-gp-feature--flip .la-gp-feature-text  { order: 1; }
        .la-gp-feature .la-phone-slot {
          max-width: 200px; width: 100%;
        }
        @media (max-width: 640px) {
          .la-gp-feature { grid-template-columns: 1fr; }
          .la-gp-feature--flip .la-gp-feature-media,
          .la-gp-feature--flip .la-gp-feature-text { order: unset; }
        }

        /* ── Version tags ─────────────────────────────────────────────── */
        .la-version-tag {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--body); font-size: 10px; font-weight: 700;
          letter-spacing: 0.09em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 999px; margin-bottom: 8px;
          width: fit-content;
        }
        .la-version-tag--before {
          background: rgba(50,50,49,0.07); color: var(--text-tertiary);
        }
        .la-version-tag--after {
          background: rgba(122,54,253,0.1); color: var(--la-primary);
        }

        /* ── Version transition arrow ─────────────────────────────────── */
        .la-version-divider {
          display: flex; align-items: center; gap: 10px;
          margin: 16px 0; color: var(--text-tertiary);
          font-family: var(--body); font-size: 11px;
          font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
        }
        .la-version-divider::before,
        .la-version-divider::after {
          content: ""; flex: 1; height: 1px;
          background: var(--hairline);
        }

        /* ── Full-width image (diagrams, wide visuals) ────────────────── */
        .la-full-img {
          display: block; width: 100%; height: auto;
          border-radius: 14px; margin: 18px 0;
        }

        /* ── Solution: image left, text right ────────────────────────── */
        .la-solution-row {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 40px; align-items: center; margin: 24px 0 0;
        }
        .la-solution-img {
          width: 100%; height: auto; display: block;
        }
        .la-product-hero {
          width: 100%; height: auto; display: block;
        }
        .la-solution-text {
          display: flex; flex-direction: column; gap: 12px;
        }
        .la-solution-text .la-insight { margin: 0; }
        @media (max-width: 640px) {
          .la-solution-row { grid-template-columns: 1fr; }
        }

        /* ── Approach: text+stats beside research photo ───────────────── */
        .la-approach-row {
          display: grid; grid-template-columns: 1fr auto;
          gap: 24px; align-items: start; margin: 16px 0;
        }
        .la-approach-text { display: flex; flex-direction: column; gap: 10px; }
        .la-approach-text .la-insight { margin: 0; }
        .la-research-photo-wrap {
          border-radius: 12px; overflow: hidden;
          box-shadow: 0 4px 24px rgba(50,50,49,0.10);
          flex-shrink: 0; width: clamp(200px, 28vw, 360px);
        }
        .la-research-photo {
          width: 100%; height: auto; display: block;
        }

        /* ── Validation: three cards stacked ─────────────────────────── */
        .la-validation-grid {
          display: flex; flex-direction: column; align-items: center;
          gap: 14px; margin: 18px 0;
        }
        .la-validation-img {
          width: 75%; display: block;
          border-radius: 12px; overflow: hidden;
          /* crop the ~45px of transparent bottom padding in the SVG canvas */
          aspect-ratio: 1434 / 374;
          object-fit: cover; object-position: top;
        }

        /* ── Business model: constrained near-square SVG (legacy) ───────── */
        .la-biz-img {
          display: block; max-height: 480px; width: auto;
          max-width: 100%; margin: 18px auto 0;
          border-radius: 14px;
        }

        /* ── Business model: two-column (image left, metrics right) ─────── */
        .la-biz-row {
          display: grid; grid-template-columns: 2fr 1fr;
          gap: 20px; align-items: stretch; margin: 18px 0;
        }
        .la-biz-row-img {
          width: 100%; height: 100%; object-fit: contain; display: block;
          border-radius: 14px;
        }
        .la-metrics-stack {
          display: flex; flex-direction: column; gap: 8px; height: 100%;
        }
        .la-metrics-stack .la-metric {
          flex: 1; border-radius: 12px; text-align: center;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
        }
        .la-metrics-stack .la-metric-val {
          font-size: 26px;
        }
        .la-metrics-stack .la-metric-key {
          font-size: 10px;
        }
        @media (max-width: 640px) {
          .la-biz-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .la-positioning-map { width: 100% !important; }
          .la-tam-sam-som     { width: 100% !important; }
          .la-validation-img  { width: 100%; }
          .la-compare--two-narrow { max-width: 100% !important; }
        }

        @media (max-width: 640px) {
          .la-approach-row { grid-template-columns: 1fr; }
          .la-research-photo-wrap { width: 100%; }
          .la-research-photo { width: 100%; height: auto; }
        }

        /* ── My Contribution placeholder ──────────────────────────────── */
        .la-contrib-slot {
          display: flex; align-items: center; gap: 9px;
          padding: 14px 18px; border-radius: 12px;
          background: rgba(250,205,0,0.1);
          border: 1.5px dashed rgba(250,205,0,0.5);
          font-family: var(--body); font-size: 13px;
          color: #8C7200; font-style: italic;
          margin: 4px 0;
        }
        .la-contrib-icon { color: #8C7200; flex-shrink: 0; }

        /* ── Proj h4 overrides ────────────────────────────────────────── */
        .proj-section-body h4 {
          font-size: 18px !important; font-weight: 700 !important;
          letter-spacing: -0.02em !important;
          margin-top: 28px !important; margin-bottom: 6px !important;
        }
        .proj-section-body h4:first-child { margin-top: 0 !important; }

        /* ── Responsive ───────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .la-stat-pair, .la-metrics { grid-template-columns: 1fr 1fr; }
          .la-research-grid { grid-template-columns: 1fr 1fr; }
          .la-ba-wrap { grid-template-columns: 1fr; }
          .la-ba-after .la-ba-header,
          .la-ba-after .la-ba-body { border-left: none; border-top: 1px solid var(--hairline); }
        }
      `}</style>

      <ProjectLayout
        title="Little Autonomy"
        year="Fall 2025 – Spring 2026"
        tagline="From overwhelming advice to confident parenting."
        description={
          <p>Little Autonomy is a mobile app that helps parents build their child&rsquo;s independence at home through Montessori-inspired guidance and environment setup. We designed it from scratch around two barriers parents face: not knowing what to do, and not being able to prepare the right environment.</p>
        }
        titleImageUrl="/images/la/la-wordmark.svg"
        heroImageUrl="/images/covers/cover-little-autonomy.webp"
        heroTint="rgba(18, 4, 48, 0.58)"
        accentVar="var(--la-primary)"
        meta={[
          { key: "Duration", value: "Fall 2025 – Spring 2026" },
          { key: "Team",    value: "Lily Liang, Bowen Fu, Yue Fei, Kerry Wen" },
          { key: "My Contribution", value: "UX design, conjoint analysis, business model" },
          { key: "Outcome", value: "A from-scratch app concept that turns Montessori principles into step-by-step guidance and personalized lessons matched to each child's abilities" },
        ]}
        sidebarGroups={[
          {
            label: "Project Framing",
            items: [
              { id: "problem",      label: "Problem" },
              { id: "solution",     label: "Solution" },
              { id: "approach",     label: "Approach" },
              { id: "contribution", label: "My Contribution" },
            ],
          },
          {
            label: "Design Decisions",
            items: [
              { id: "guided-practice", label: "Guided Practice" },
              { id: "environment",     label: "Environment Setup" },
              { id: "expert",          label: "Expert Guidance" },
              { id: "validation",      label: "Validation" },
            ],
          },
          {
            label: "Business Viability",
            items: [
              { id: "market",         label: "Market Position" },
              { id: "business-model", label: "Business Model" },
            ],
          },
          {
            label: "Reflection",
            items: [{ id: "reflection", label: "Reflection" }],
          },
        ]}
        prevProject={{
          title: "Tempo",
          year: "Fall 2023",
          href: "/projects/tempo",
          coverUrl: "/images/covers/cover-tempo.webp",
          tint: "rgba(20,8,50,0.55)",
        }}
        nextProject={{
          title: "CIRCA",
          year: "Spring 2025",
          href: "/projects/circa",
          coverUrl: "/images/covers/cover-circa.webp",
          tint: "rgba(160,40,60,0.52)",
        }}
        sections={[

          /* ── PROBLEM ──────────────────────────────────────────────── */
          {
            id: "problem",
            title: "Problem",
            body: (
              <>
                <Insight>Parents don&rsquo;t need more advice &mdash; they need a credible system</Insight>
                <p>Parents value independence but are overwhelmed by advice and short on clarity. The problem isn&rsquo;t a lack of information &mdash; it&rsquo;s the absence of a clear system that tells them what to do.</p>
                <div className="la-stat-pair">
                  <div className="la-stat-card">
                    <div className="la-stat-card-img-well">
                      <img loading="lazy" src="/images/la/la-problem-stress.webp" alt="Parent overwhelmed by daily stress" />
                    </div>
                    <div className="la-stat-card-body">
                      <div className="la-stat-num">62%</div>
                      <div className="la-stat-desc">say lack of independence creates daily stress</div>
                    </div>
                  </div>
                  <div className="la-stat-card">
                    <div className="la-stat-card-img-well">
                      <img loading="lazy" src="/images/la/la-problem-clarity.webp" alt="Parent overwhelmed by too much advice" />
                    </div>
                    <div className="la-stat-card-body">
                      <div className="la-stat-num">68%</div>
                      <div className="la-stat-desc">face too much advice and too little clarity</div>
                    </div>
                  </div>
                </div>

                <p className="la-video-title" style={{ textAlign: "center" }}>This is what happens when independence is missing at home</p>
                <div className="la-video">
                  <iframe
                    src="https://www.youtube.com/embed/gWpp1c09ml0"
                    title="Little Autonomy video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <Rule />

                <Insight>Montessori builds independence through a prepared environment &mdash; the hardest part to recreate at home</Insight>
                <p>Montessori works through a prepared environment of instruction, materials, and furniture &mdash; but at home, materials are costly and clear guidance is scarce.</p>
                <img loading="lazy" src="/images/la/la-montessori-equation.svg" alt="Montessori equation diagram" className="la-full-img" data-lightbox />

                <Rule />

                <Insight>Most solutions give advice; almost none give a system</Insight>
                <p>Existing options are either expensive and structured or cheap and unstructured. Almost nothing offers actionable guidance at an accessible price &mdash; the open space Little Autonomy fills.</p>
                <img loading="lazy" src="/images/la/la-positioning-map.svg" alt="Positioning map: structured vs unstructured guidance by price" className="la-full-img la-positioning-map" style={{ width: "84%", margin: "18px auto" }} data-lightbox />
              </>
            ),
          },

          /* ── SOLUTION ────────────────────────────────────────────── */
          {
            id: "solution",
            title: "Solution",
            body: (
              <>
                <div className="la-solution-row">
                  <img
                    src="/images/la/la-product-hero.webp"
                    alt="Little Autonomy app screens"
                    className="la-product-hero"
                  />
                  <div className="la-solution-text">
                    <Insight>Little Autonomy turns Montessori into a system parents can follow</Insight>
                    <p>Little Autonomy is a mobile app that builds a child&rsquo;s independence at home through the two things Montessori depends on: guided practice on what to do, and help setting up the environment to do it in. Each is matched to the child&rsquo;s current abilities, so parents always know the next step.</p>
                  </div>
                </div>

                <p className="la-video-title" style={{ textAlign: "center" }}>The story of parent and child with the help of Little Autonomy would look like this</p>
                <div className="la-video">
                  <iframe
                    src="https://www.youtube.com/embed/s6SdgX2zQHA"
                    title="The story of parent and child with Little Autonomy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            ),
          },

          /* ── APPROACH ─────────────────────────────────────────────── */
          {
            id: "approach",
            title: "Approach",
            body: (
              <>
                <div className="la-approach-row">
                  <div className="la-approach-text">
                    <Insight>We met parents where they were &mdash; in their homes, in their routines, and in their own words</Insight>
                    <p>We grounded the project in mixed-method research &mdash; interviews, surveys, field visits, and forum analysis &mdash; to anchor it in real daily friction, not assumptions.</p>
                    <div className="la-research-grid">
                      {[
                        { num: "60+",  label: "Parents interviewed" },
                        { num: "20+",  label: "Montessori experts" },
                        { num: "6+",   label: "Field visits" },
                        { num: "50K+", label: "Reddit comments" },
                      ].map(({ num, label }) => (
                        <div key={label} className="la-research-card">
                          <div className="la-research-num">{num}</div>
                          <div className="la-research-label">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="la-research-photo-wrap">
                    <img loading="lazy" src="/images/la/la-research-scope.webp" alt="Field research and interviews" className="la-research-photo" />
                  </div>
                </div>
              </>
            ),
          },

          /* ── MY CONTRIBUTION ──────────────────────────────────────── */
          {
            id: "contribution",
            title: "My Contribution",
            body: (
              <>
                <p>I led the UX design across the full product — defining the app flow, the personalized recommendation system, and the guided step-by-step practice experience. I also built the conjoint analysis that quantified user feature preferences, which directly drove the decision to cut the AI chatbot in favor of live Montessori educator access. On the business side, I contributed to market sizing and the subscription model. Research was a full team effort across interviews, field visits, surveys, and forum analysis.</p>
              </>
            ),
          },

          /* ── GUIDED PRACTICE ─────────────────────────────────────── */
          {
            id: "guided-practice",
            title: "Guided Practice",
            body: (
              <>
                <Insight>Knowing the goal isn&rsquo;t the same as knowing today&rsquo;s next step</Insight>
                <p>We guide parents through what to practice and how to do it, matched to the child&rsquo;s current ability.</p>

                <div className="la-gp-feature">
                  <div className="la-gp-feature-media">
                    <PhoneMockup screenSrc="/images/la/la-rec-screen.mp4" screenAlt="Personalized recommendation screen" />
                  </div>
                  <div className="la-gp-feature-text">
                    <h4>Personalized recommendation</h4>
                    <p>Suggests what to practice based on the child&rsquo;s current capability, not their age &mdash; answering &ldquo;what should we practice today?&rdquo;</p>
                  </div>
                </div>

                <div className="la-gp-feature la-gp-feature--flip">
                  <div className="la-gp-feature-media">
                    <PhoneMockup screenSrc="/images/la/la-gif-step-by-step.mp4" screenAlt="Step-by-step guidance screen" />
                  </div>
                  <div className="la-gp-feature-text">
                    <h4>Step-by-step guidance</h4>
                    <p>Breaks each task into Montessori-style steps &mdash; model with minimal words, observe without correcting, and build the routine into daily life.</p>
                  </div>
                </div>

                <div className="la-gp-feature">
                  <div className="la-gp-feature-media">
                    <PhoneMockup screenSrc="/images/la/la-gif-task-shelf.mp4" screenAlt="Task shelf screen" />
                  </div>
                  <div className="la-gp-feature-text">
                    <h4>Task shelf</h4>
                    <p>Keeps activities visible and ready, the way Montessori materials sit on an open shelf within the child&rsquo;s reach.</p>
                  </div>
                </div>

                <Rule />

                <Insight>We dropped age-based milestones after a parent said the chart made her worry, not act</Insight>
                <p>After a parent told us the age chart made her anxious instead of helping her act, we rebuilt the roadmap around developmental phases.</p>
                <div className="la-compare la-compare--three">
                  <div className="la-compare-col">
                    <img loading="lazy" src="/images/la/la-roadmap-v1.webp" alt="V1 age-based roadmap" />
                    <div className="la-compare-caption">
                      <span className="la-version-tag la-version-tag--before">Iteration 1</span>
                      <p>Age-based milestones made parents anxious about where their child <em>should</em> be.</p>
                    </div>
                  </div>
                  <div className="la-compare-col">
                    <img loading="lazy" src="/images/la/la-roadmap-v2.webp" alt="V2 phase-based roadmap" />
                    <div className="la-compare-caption">
                      <span className="la-version-tag la-version-tag--before">Iteration 2</span>
                      <p>Switched to phase bubbles &mdash; better framing, but still too abstract for parents to act on.</p>
                    </div>
                  </div>
                  <div className="la-compare-col">
                    <img loading="lazy" src="/images/la/la-phone-2.webp" alt="Final personalized recommendation screen" />
                    <div className="la-compare-caption">
                      <span className="la-version-tag la-version-tag--after">Final</span>
                      <p>Capability-matched recommendations answer &ldquo;what should we practice today?&rdquo;</p>
                    </div>
                  </div>
                </div>
              </>
            ),
          },

          /* ── ENVIRONMENT SETUP ────────────────────────────────────── */
          {
            id: "environment",
            title: "Environment Setup",
            body: (
              <>
                <Insight>The hardest part of Montessori at home is building the space</Insight>
                <p>Since the prepared environment is what parents struggle with most, we made setup the core of the product &mdash; so the space does the teaching.</p>

                <div className="la-gp-feature">
                  <div className="la-gp-feature-media">
                    <PhoneMockup screenSrc="/images/la/la-gif-scan.mp4" screenAlt="Scan for advice screen" />
                  </div>
                  <div className="la-gp-feature-text">
                    <h4>Scan for advice</h4>
                    <p>Point the camera at any room and the app identifies key objects, detects mismatches with Montessori principles, and surfaces specific, actionable suggestions &mdash; no manual checklist needed.</p>
                  </div>
                </div>

                <div className="la-gp-feature la-gp-feature--flip">
                  <div className="la-gp-feature-media">
                    <PhoneMockup screenSrc="/images/la/la-gif-instructions.mp4" screenAlt="Illustrative instructions screen" />
                  </div>
                  <div className="la-gp-feature-text">
                    <h4>Show, don&rsquo;t tell</h4>
                    <p>Step-by-step illustrations highlight exactly what to move, replace, or add &mdash; making every setup action immediately clear without wading through text.</p>
                  </div>
                </div>

                <Rule />

                <Insight>Parents asked for less text &mdash; so we replaced the checklist with illustrations and a scan</Insight>
                <p>We swapped our text checklist for illustrated instructions and a scan feature that reads a room and flags what to fix.</p>
                <div className="la-compare la-compare--two-narrow">
                  <div className="la-compare-col">
                    <img loading="lazy" src="/images/la/la-checklist-v1.webp" alt="Iteration 1 — text checklist" />
                    <div className="la-compare-caption">
                      <span className="la-version-tag la-version-tag--before">Iteration 1</span>
                      <p>A text-heavy checklist. Parents skimmed it, missed steps, and felt overwhelmed.</p>
                    </div>
                  </div>
                  <div className="la-compare-col">
                    <img loading="lazy" src="/images/la/la-checklist-v2.webp" alt="Final — illustrated checklist" />
                    <div className="la-compare-caption">
                      <span className="la-version-tag la-version-tag--after">Final</span>
                      <p>Added illustrations and task cards &mdash; clearer, but still missing a space assessment.</p>
                    </div>
                  </div>
                </div>
              </>
            ),
          },

          /* ── EXPERT GUIDANCE ──────────────────────────────────────── */
          {
            id: "expert",
            title: "Expert Guidance",
            body: (
              <>
                <div className="la-phone-row">
                  <div className="la-phone-row-text">
                    <Insight>Parents trust people, not chatbots &mdash; so we cut the AI</Insight>
                    <p>We connected parents directly to Montessori educators and cut the AI chatbot &mdash; research showed parents trust experts, and it carried a <span className="la-badge-neg">−21.2% preference impact</span>.</p>
                  </div>
                  <div className="la-phone-row-img la-phone-row-img--two">
                    <img loading="lazy" src="/images/la/la-screen-expert-chat.webp" alt="Expert chat with real Montessori educators" className="la-phone-img" />
                    <img loading="lazy" src="/images/la/la-screen-expert-removed.webp" alt="AI chatbot that was removed" className="la-phone-img" />
                  </div>
                </div>
              </>
            ),
          },

          /* ── VALIDATION ───────────────────────────────────────────── */
          {
            id: "validation",
            title: "Validation",
            body: (
              <>
                <Insight>Parents didn&rsquo;t just like it &mdash; they saw their mornings getting easier</Insight>
                <p>Parents told us children want to practice independence, not be told what to do &mdash; and saw the real payoff as time back in their own day.</p>
                <div className="la-validation-grid">
                  <img loading="lazy" src="/images/la/la-validation-1.svg" alt="Parent validation card 1" className="la-validation-img" data-lightbox />
                  <img loading="lazy" src="/images/la/la-validation-2.svg" alt="Parent validation card 2" className="la-validation-img" data-lightbox />
                  <img loading="lazy" src="/images/la/la-validation-3.svg" alt="Parent validation card 3" className="la-validation-img" data-lightbox />
                </div>
              </>
            ),
          },

          /* ── MARKET POSITION ──────────────────────────────────────── */
          {
            id: "market",
            title: "Market Position",
            body: (
              <>
                <Insight>An open quadrant: structured guidance at an accessible price</Insight>
                <p>Little Autonomy targets the underserved parents interested in Montessori, not just those already enrolled.</p>
                <img loading="lazy" src="/images/la/la-tam-sam-som.svg" alt="TAM SAM SOM: 600-700M global parents to 0.5-1M target" className="la-full-img la-tam-sam-som" style={{ width: "65%", margin: "18px auto" }} data-lightbox />
              </>
            ),
          },

          /* ── BUSINESS MODEL ───────────────────────────────────────── */
          {
            id: "business-model",
            title: "Business Model",
            body: (
              <>
                <Insight>A subscription model with proven margins</Insight>
                <p>A $12.99/month subscription with expert add-ons, built on healthy margins and a phased path to scale.</p>
                <div className="la-biz-row">
                  <img loading="lazy" src="/images/la/la-business-model.svg" alt="Subscription model: $12.99/mo, 77.6% gross margin, $393 LTV" className="la-biz-row-img" data-lightbox />
                  <div className="la-metrics-stack">
                    <div className="la-metric">
                      <div className="la-metric-val">$12.99</div>
                      <div className="la-metric-key">per month</div>
                    </div>
                    <div className="la-metric">
                      <div className="la-metric-val">77.6%</div>
                      <div className="la-metric-key">gross margin</div>
                    </div>
                    <div className="la-metric">
                      <div className="la-metric-val">$393</div>
                      <div className="la-metric-key">lifetime value</div>
                    </div>
                  </div>
                </div>
              </>
            ),
          },

          /* ── REFLECTION ───────────────────────────────────────────── */
          {
            id: "reflection",
            title: "Reflection",
            body: (
              <>
                <p>This project taught me that good design is as much about restraint as addition. The clearest proof was cutting the AI chatbot the research didn&rsquo;t support &mdash; designing for anxious parents meant building only the few things that genuinely reduced friction: knowing the next step, setting up the space, and reaching a real expert when it mattered.</p>
                <p style={{ marginTop: "1.25em" }}>This was the first project where business constraints directly reshaped design decisions. Our conjoint analysis revealed a clear price sensitivity threshold &mdash; which meant cutting a feature we&rsquo;d planned as core to the experience, and revisiting multiple screens as the business model adjusted. It was uncomfortable to redesign work we&rsquo;d already refined, but it made the final product more honest about what it could actually sustain.</p>
                <p style={{ marginTop: "1.25em" }}>The other thing that shaped this project most was our external Montessori education mentor. Her passion for the philosophy was contagious &mdash; without her, we would have designed around Montessori rather than from it. It reminded me that reaching out early to the right outside voice can change a project&rsquo;s entire trajectory.</p>
                <p style={{ marginTop: "1.25em" }}>The biggest process lesson: expect to pivot, but don&rsquo;t treat earlier work as waste. Our early research resurfaced in meaningful ways throughout &mdash; the pivots built on what came before rather than discarding it.</p>
                <img loading="lazy" src="/images/la/la-team.webp" alt="Little Autonomy team" style={{ width: "100%", height: "auto", display: "block", marginTop: "2em", borderRadius: 16 }} />
                <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: "0.75em", textAlign: "center" }}>Our team after our final presentation with our external Montessori mentor.</p>
              </>
            ),
          },

        ]}
      />
    </>
  );
}
