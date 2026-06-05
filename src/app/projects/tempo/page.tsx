import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = {
  title: "Tempo - Lily Liang Portfolio",
  description:
    "Three-part AI-powered service suite for fine dining restaurants — TempoScribe, TempoChime, and TempoTap. Designed for NCR Voyix, Fall 2023.",
};

/* ─── Helpers ─────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="tp-insight">{children}</p>;
}

function Rule() {
  return <div className="tp-rule" />;
}

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="tp-bullet">
      <strong>{label}</strong>{children}
    </p>
  );
}

function Quote({ children, attribution }: { children: React.ReactNode; attribution: string }) {
  return (
    <div className="tp-quote">
      <span className="tp-quote-mark" aria-hidden="true">&ldquo;</span>
      <p className="tp-quote-text">{children}</p>
      <span className="tp-quote-attr">{attribution}</span>
    </div>
  );
}

function StatRow({ stats }: { stats: Array<{ value: string; label: string }> }) {
  return (
    <div className="tp-stat-row">
      {stats.map(({ value, label }) => (
        <div key={label} className="tp-stat-chip">
          <span className="tp-stat-value">{value}</span>
          <span className="tp-stat-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

function ModuleChip({ name, subtitle }: { name: string; subtitle: string }) {
  return (
    <div className="tp-module-chip">
      <span className="tp-module-dot" />
      <span className="tp-module-name">{name}</span>
      <span className="tp-module-sep">·</span>
      <span className="tp-module-sub">{subtitle}</span>
    </div>
  );
}

function TrustCards({ children, cols2 }: { children: React.ReactNode; cols2?: boolean }) {
  return (
    <div className={`tp-trust-cards${cols2 ? " tp-trust-cards--2col" : ""}`}>
      {children}
    </div>
  );
}

function TrustCard({ label, children, slot }: { label: string; children: React.ReactNode; slot: React.ReactNode }) {
  return (
    <div className="tp-trust-card">
      <Bullet label={label}>{children}</Bullet>
      {slot}
    </div>
  );
}

function QuoteRow({ quotes }: { quotes: Array<{ text: React.ReactNode; attribution: string }> }) {
  return (
    <div className="tp-quote-row">
      {quotes.map(({ text, attribution }, i) => (
        <div key={i} className="tp-quote-card">
          <p className="tp-quote-card-text">{text}</p>
          <span className="tp-quote-card-attr">{attribution}</span>
        </div>
      ))}
    </div>
  );
}

function Slot({
  label,
  filename,
  aspect = "16/9",
  note,
}: {
  label: string;
  filename: string;
  aspect?: string;
  note?: string;
}) {
  return (
    <div className="tp-slot" style={{ aspectRatio: aspect }}>
      <span className="tp-slot-label">{label}</span>
      <code className="tp-slot-file">{filename}</code>
      {note && <span className="tp-slot-note">{note}</span>}
    </div>
  );
}

function GestureEditsStack() {
  const gestures = [
    {
      label: "Drag to Reassign",
      src: "/images/tempo/tempo-gesture-drag-reassign.webp",
      alt: "Tempo gesture demo showing dragging an order to reassign it",
    },
    {
      label: "Tap to Modify",
      src: "/images/tempo/tempo-gesture-tap-modify.mp4",
      alt: "Tempo gesture demo showing tapping an order to modify it",
    },
    {
      label: "Cross to Delete",
      src: "/images/tempo/tempo-gesture-cross-delete.mp4",
      alt: "Tempo gesture demo showing crossing out an order to delete it",
    },
  ];

  return (
    <div className="tp-gesture-stack" aria-label="Gesture edits screen sequence">
      {gestures.map(({ label, src, alt }) => (
        <div className="tp-gesture-card" key={label}>
          <div className="tp-gesture-media">
            {src.endsWith('.mp4')
              ? <video className="tp-gesture-gif" src={src} autoPlay loop muted playsInline />
              : <img loading="lazy" className="tp-gesture-gif" src={src} alt={alt} />
            }
            <img loading="lazy" className="tp-gesture-frame" src="/images/tempo/tempo-gesture-frame.svg" alt="" aria-hidden="true" />
          </div>
          <span className="tp-gesture-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function TempoPage() {
  return (
    <>
      <style>{`
        html, body { background: var(--tempo-bg); }

        /* ── Insight ──────────────────────────────────────────── */
        .tp-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          border-left: 3px solid var(--tempo-primary);
          padding: 12px 16px 12px 15px;
          margin: 28px 0 10px;
          background: rgba(95, 36, 159, 0.03);
          border-radius: 0 8px 8px 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .tp-insight:first-child { margin-top: 0; }
        @media (max-width: 768px) { .tp-insight { font-size: 18px; } }

        /* ── Rule ─────────────────────────────────────────────── */
        .tp-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* ── Bullet (used for criteria/objective only) ─────────── */
        .tp-bullet {
          font-family: var(--body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding: 10px 14px;
          margin: 6px 0;
          border-left: 2px solid var(--tempo-primary);
          background: rgba(95, 36, 159, 0.04);
          border-radius: 0 8px 8px 0;
        }
        .tp-bullet strong {
          color: var(--text-primary);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
        }

        /* ── Pull quote (Insights section) ────────────────────── */
        .tp-quote {
          position: relative;
          margin: 20px 0;
          padding: 18px 20px 16px 52px;
          background: rgba(95, 36, 159, 0.04);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow: hidden;
        }
        .tp-quote-mark {
          position: absolute;
          top: -4px;
          left: 14px;
          font-family: var(--display);
          font-style: italic;
          font-weight: 900;
          font-size: 52px;
          line-height: 1;
          color: var(--tempo-primary);
          opacity: 0.18;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
          pointer-events: none;
          user-select: none;
        }
        .tp-quote-text {
          font-family: var(--display);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin: 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .tp-quote-attr {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 600;
          color: var(--text-tertiary);
          letter-spacing: 0.01em;
        }

        /* ── Research stat row (Approach) ─────────────────────── */
        .tp-stat-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 16px 0 20px;
        }
        .tp-stat-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 14px 16px 12px;
          background: rgba(95, 36, 159, 0.06);
          border-radius: 14px;
          flex: 1;
          min-width: 76px;
          text-align: center;
        }
        .tp-stat-value {
          font-family: var(--display);
          font-style: italic;
          font-weight: 900;
          font-size: clamp(32px, 3.2vw, 44px);
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--tempo-primary);
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .tp-stat-label {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
          text-align: center;
        }

        /* ── Module chip (TempoScribe / Chime / Tap) ──────────── */
        .tp-module-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px 5px 10px;
          background: rgba(95, 36, 159, 0.08);
          border-radius: 999px;
          margin-bottom: 18px;
        }
        .tp-module-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--tempo-primary);
          flex-shrink: 0;
        }
        .tp-module-name {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 700;
          color: var(--tempo-primary);
        }
        .tp-module-sep {
          font-size: 11px;
          color: var(--text-tertiary);
          line-height: 1;
        }
        .tp-module-sub {
          font-family: var(--body);
          font-size: 11px;
          color: var(--text-secondary);
        }

        /* ── Trust cards (feature + visual, CIRCA-style) ─────── */
        .tp-trust-cards {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin: 14px 0;
        }
        .tp-trust-cards--2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .tp-trust-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .tp-trust-card > img,
        .tp-trust-card > video,
        .tp-trust-card > .tp-slot {
          width: 100%;
          border-radius: 10px;
          margin: 0;
        }
        .tp-trust-card > img,
        .tp-trust-card > video {
          display: block;
          height: auto;
        }

        /* ── Quote row (Validation — 3 Brian quotes) ──────────── */
        .tp-quote-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin: 20px 0;
        }
        .tp-quote-card {
          padding: 18px 16px 14px;
          background: rgba(95, 36, 159, 0.04);
          border-top: 2px solid var(--tempo-primary);
          border-radius: 0 0 12px 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 14px;
        }
        .tp-quote-card-text {
          font-family: var(--display);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(15px, 1.4vw, 18px);
          line-height: 1.6;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin: 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
          flex: 1;
        }
        .tp-quote-card-attr {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-tertiary);
          display: block;
        }

        /* ── Full-width image ─────────────────────────────────── */
        .tp-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 14px;
          margin: 18px 0;
        }

        /* ── Cropped fill image ───────────────────────────────── */
        .tp-img-crop {
          width: 72%;
          aspect-ratio: 3/2;
          border-radius: 14px;
          overflow: hidden;
          margin: 18px auto;
        }
        .tp-img-crop--full {
          width: 100%;
          aspect-ratio: 16/8;
          margin: 18px 0;
        }
        .tp-img-crop--interview {
          width: 100%;
          aspect-ratio: auto;
          border-radius: 14px;
          margin: 28px 0;
        }
        .tp-img-crop img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .tp-img-crop--interview img {
          height: auto;
          object-fit: contain;
        }

        /* ── Figure with optional caption ─────────────────────── */
        .tp-fig {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin: 18px 0;
        }
        .tp-fig--sm .tp-fig-img {
          max-width: 42%;
        }
        .tp-fig--md .tp-fig-img {
          max-width: 68%;
        }
        .tp-fig--future .tp-fig-img {
          max-width: 78%;
        }
        .tp-fig--full .tp-fig-img {
          max-width: 100%;
        }
        .tp-fig--flow .tp-fig-img {
          max-width: 78%;
        }
        .tp-fig--lg .tp-fig-img {
          max-width: 88%;
        }
        .tp-fig--stat .tp-fig-img {
          max-width: 62%;
        }
        .tp-fig-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 14px;
        }
        .tp-fig-caption {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-tertiary);
          text-align: center;
          font-style: italic;
        }
        .tp-fig-caption strong {
          font-weight: 700;
          color: var(--text-secondary);
          font-style: normal;
        }

        /* ── Image + quote split ───────────────────────────────── */
        .tp-insight-split {
          display: grid;
          grid-template-columns: 0.75fr 1fr;
          gap: 16px;
          align-items: center;
          margin: 18px 0;
        }
        .tp-insight-split-img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
        }
        .tp-insight-split .tp-quote {
          margin: 0;
          align-self: center;
        }
        .tp-stat-quote-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 22px;
          align-items: center;
          margin: 20px 0;
        }
        .tp-stat-quote-grid .tp-fig,
        .tp-stat-quote-grid .tp-quote {
          margin: 0;
        }
        .tp-stat-quote-grid .tp-fig--stat .tp-fig-img {
          max-width: 100%;
        }
        @media (max-width: 768px) {
          .tp-insight-split { grid-template-columns: 1fr; }
          .tp-stat-quote-grid { grid-template-columns: 1fr; }
        }

        /* ── Gesture edit screens ─────────────────────────────── */
        .tp-gesture-stack {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(24px, 4vw, 38px);
          width: 95%;
          margin: 4px auto 2px;
        }
        .tp-gesture-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 0;
          min-width: 0;
          padding-top: clamp(10px, 1.8vw, 16px);
        }
        .tp-gesture-media {
          position: relative;
          width: clamp(120px, 100%, 100%);
          aspect-ratio: 462 / 776;
          margin-bottom: clamp(52px, 10vw, 72px);
        }
        .tp-gesture-gif,
        .tp-gesture-frame {
          position: absolute;
          display: block;
        }
        .tp-gesture-gif {
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .tp-gesture-gif {
          object-fit: cover;
          border-radius: 2px;
        }
        .tp-gesture-frame {
          top: 52%;
          left: 50%;
          width: 114%;
          height: auto;
          max-width: none;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .tp-gesture-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.25;
          color: var(--text-primary);
          text-align: center;
          min-height: 30px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .tp-gesture-stack { grid-template-columns: 1fr; }
          .tp-gesture-media { width: min(72vw, 320px); }
        }

        /* ── Validation image row ─────────────────────────────── */
        .tp-img-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 18px 0;
        }
        .tp-img-row img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          display: block;
        }

        /* ── Image placeholder slot ───────────────────────────── */
        .tp-slot {
          width: 100%;
          margin: 18px 0;
          background: rgba(95, 36, 159, 0.03);
          border: 1.5px dashed rgba(95, 36, 159, 0.25);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          text-align: center;
        }
        .tp-slot-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: var(--tempo-primary);
          opacity: 0.8;
        }
        .tp-slot-file {
          font-size: 10px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(95, 36, 159, 0.08);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .tp-slot-note {
          font-size: 10px;
          color: var(--text-tertiary);
          font-style: italic;
          max-width: 360px;
        }

        /* ── Contribution placeholder ─────────────────────────── */
        .tp-contrib {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 14px 18px;
          border-radius: 12px;
          background: rgba(250, 205, 0, 0.08);
          border: 1.5px dashed rgba(250, 205, 0, 0.5);
          font-family: var(--body);
          font-size: 13px;
          color: #8C7200;
          font-style: italic;
          margin-top: 4px;
        }
        .tp-contrib svg { color: #8C7200; flex-shrink: 0; }

        /* ── Video embed ──────────────────────────────────────── */
        .tp-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 14px;
          overflow: hidden;
          margin: 8px 0;
          background: #000;
        }
        .tp-video iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ── Responsive ───────────────────────────────────────── */
        @media (max-width: 768px) {
          .tp-img-crop { width: 100%; }
          .tp-fig--sm .tp-fig-img,
          .tp-fig--md .tp-fig-img,
          .tp-fig--lg .tp-fig-img,
          .tp-fig--stat .tp-fig-img,
          .tp-fig--flow .tp-fig-img,
          .tp-fig--future .tp-fig-img { max-width: 100%; }
          .tp-trust-cards--2col { grid-template-columns: 1fr; }
          .tp-contactless { width: 100% !important; }
        }
        @media (max-width: 768px) {
          .tp-feature-grid { grid-template-columns: 1fr; }
          .tp-feature-grid .tp-feature-card:last-child:nth-child(odd) { grid-column: span 1; }
          .tp-quote-row { grid-template-columns: 1fr; }
          .tp-trust-cards--2col { grid-template-columns: 1fr; }
          .tp-stat-chip { min-width: 60px; }
          .tp-quote { padding-left: 18px; }
          .tp-quote-mark { display: none; }
        }
      `}</style>

      <ProjectLayout
        title="Tempo"
        year="Fall 2023"
        tagline="The future of high-end dining."
        description={
          <p>
            Tempo is a three-part AI-powered suite designed to reduce operational friction in high-end
            restaurants without disrupting the premium service experience. It covers ordering
            (TempoScribe), task coordination (TempoChime), and payment (TempoTap) — giving staff the
            tools to keep service flowing while guests experience something seamless.
          </p>
        }
        sponsoredBy={
          <img loading="lazy" src="/images/tempo/ncr-voyix-logo.svg" alt="NCR Voyix" style={{ height: 20 }} />
        }
        titleImageUrl="/images/tempo/tempo-logo.svg"
        heroImageUrl="/images/covers/cover-tempo.webp"
        heroTint="rgba(20,8,50,0.55)"
        accentVar="var(--tempo-primary)"
        meta={[
          { key: "Duration",        value: "Fall 2023" },
          { key: "Team",            value: "Lily Liang, Priyanka Jain, Hope Rackers, Kareen Yeung" },
          { key: "My Contribution", value: "TempoChime concept, AI orchestration logic, UX & IA, CAD & renderings" },
          { key: "Partner",         value: "NCR Voyix" },
          { key: "Outcome",         value: "A three-part hardware and software suite — TempoScribe, TempoChime, and TempoTap — validated with restaurant managers and designed to position NCR as a one-stop-shop for high-end restaurant operations" },
        ]}
        sidebarGroups={[
          {
            label: "Project Framing",
            items: [
              { id: "overview",     label: "Overview" },
              { id: "problem",      label: "Problem" },
              { id: "solution",     label: "Solution" },
              { id: "approach",     label: "Approach" },
              { id: "insights",     label: "Insights" },
              { id: "contribution", label: "My Contribution" },
            ],
          },
          {
            label: "Design Decisions",
            items: [
              { id: "objective",   label: "Objective" },
              { id: "temposcribe", label: "TempoScribe" },
              { id: "tempochime",  label: "TempoChime" },
              { id: "tempotap",    label: "TempoTap" },
            ],
          },
          {
            label: "Validation",
            items: [{ id: "validation", label: "Validation" }],
          },
          {
            label: "Reflection",
            items: [{ id: "reflection", label: "Reflection" }],
          },
        ]}
        prevProject={{
          title: "CIRCA",
          year: "Spring 2025",
          href: "/projects/circa",
          coverUrl: "/images/covers/cover-circa.webp",
          tint: "rgba(140,30,50,0.52)",
        }}
        nextProject={{
          title: "Little Autonomy",
          year: "Fall 2025 – Spring 2026",
          href: "/projects/little-autonomy",
          coverUrl: "/images/covers/cover-little-autonomy.webp",
          tint: "rgba(30,10,60,0.55)",
        }}
        sections={[

          /* ── OVERVIEW VIDEO ──────────────────────────────────────────────── */
          {
            id: "overview",
            title: "Overview",
            body: (
              <div className="tp-video">
                <iframe
                  src="https://www.youtube.com/embed/8j1yxKyeyZw"
                  title="Tempo overview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ),
          },

          /* ── PROBLEM ──────────────────────────────────────────────────────── */
          {
            id: "problem",
            title: "Problem",
            body: (
              <>
                <Insight>Labor costs climb, prices follow, and expectations soar</Insight>
                <p>As staff wages rise, fine-dining restaurants raise prices to survive — but their labor-heavy model makes every empty seat, every delayed course, and every bad review costlier than ever. High-end dining has almost no margin for operational error.</p>
                <figure className="tp-fig tp-fig--sm">
                  <img
                    src="/images/tempo/tempo-problem-framing.svg"
                    alt="Problem framing: fine dining cost and expectation pressures"
                    className="tp-fig-img"
                  />
                  <figcaption className="tp-fig-caption">6:1 server to guest ratio</figcaption>
                </figure>

                <Rule />

                <Insight>High-end service is a sequence. One person can break the whole thing.</Insight>
                <p>Fine dining doesn&rsquo;t just require good food — it requires a choreographed sequence of service steps, coordinated across servers, sommeliers, food runners, and bussers. When any one person falls behind, the whole table feels it. And because guests are paying a premium, they notice everything that goes wrong.</p>
                <figure className="tp-fig tp-fig--lg">
                  <img
                    src="/images/tempo/tempo-guest-journey-map.svg"
                    alt="Guest journey map showing multi-staff service sequence and failure points"
                    className="tp-fig-img"
                    data-lightbox
                  />
                  <figcaption className="tp-fig-caption">Less than <strong>28%</strong> of people are willing to wait more than 30 minutes</figcaption>
                </figure>
              </>
            ),
          },

          /* ── SOLUTION ─────────────────────────────────────────────────────── */
          {
            id: "solution",
            title: "Solution",
            body: (
              <>
                <Insight>Tempo keeps the dining room in sync</Insight>
                <p>Tempo is a three-part service-orchestration suite — an AI ordering system (TempoScribe), a task coordination system (TempoChime), and a smart payment system (TempoTap) — designed to reduce operational friction without disrupting the premium service experience guests expect.</p>
                <div className="tp-img-crop tp-img-crop--full">
                  <img loading="lazy" src="/images/tempo/tempo-system-overview.webp" alt="Tempo full system overview" />
                </div>
              </>
            ),
          },

          /* ── APPROACH ─────────────────────────────────────────────────────── */
          {
            id: "approach",
            title: "Approach",
            body: (
              <>
                <Insight>The research was extensive — every role, every perspective.</Insight>
                <StatRow stats={[
                  { value: "5",   label: "server interviews" },
                  { value: "5",   label: "guest interviews" },
                  { value: "3",   label: "manager interviews" },
                  { value: "75+", label: "survey responses" },
                  { value: "25+", label: "hours on the floor" },
                ]} />
                <p>We interviewed servers, managers, and fine dining guests, ran consumer surveys, and spent 25+ hours in restaurant visits and field observation. 45 insights came out of that research — across consumer experience, service operations, and technology — and shaped every design decision Tempo makes.</p>
                <div className="tp-img-crop tp-img-crop--interview">
                  <img loading="lazy" src="/images/tempo/tempo-interview-image.webp" alt="Tempo interview and restaurant field research collage" />
                </div>
              </>
            ),
          },

          /* ── INSIGHTS ─────────────────────────────────────────────────────── */
          {
            id: "insights",
            title: "Insights",
            body: (
              <>
                <Insight>One person can delay the whole sequence</Insight>
                <p>Fine dining runs on a set sequence of operation — and any single handoff between staff members can stall the whole table. Less than 28% of diners are willing to wait more than 30 minutes, making coordination failures directly visible to guests.</p>
                <div className="tp-insight-split">
                  <img loading="lazy" src="/images/tempo/tempo-sequence-diagram.svg" alt="Broken event sequence diagram: service flow and staff handoff points" className="tp-insight-split-img" />
                  <Quote attribution="— Sophia, Server">
                    &ldquo;Everyone has to work as fast as possible to avoid these miscommunications.&rdquo;
                  </Quote>
                </div>

                <Rule />

                <Insight>Neglect isn&rsquo;t laziness — it&rsquo;s a coordination and staffing problem</Insight>
                <p>Understaffing and the sheer complexity of service steps mean tables get missed — not because servers don&rsquo;t care, but because the system gives them no visibility into who needs attention when.</p>
                <Quote attribution="— Max, Server at STK">
                  &ldquo;I&rsquo;ve been here for 2 years ... I&rsquo;m at your table long before [the time limit for table greeting]&rdquo;
                </Quote>
                <figure className="tp-fig tp-fig--lg">
                  <img loading="lazy" src="/images/tempo/tempo-service-blueprint.svg" alt="Service blueprint: front stage / back stage showing understaffing and neglect points" className="tp-fig-img" data-lightbox />
                  <figcaption className="tp-fig-caption">High-end Restaurant Service Blueprint</figcaption>
                </figure>

                <Rule />

                <Insight>Guests pay for perfection and remember every flaw</Insight>
                <p>Because the price is high, the threshold for satisfaction is also high — and asymmetric. Guests don&rsquo;t tally up everything that went right. They focus on what went wrong. More than 72% of diners find restaurants through online ratings, so service failures compound into business ones.</p>
                <div className="tp-stat-quote-grid">
                  <figure className="tp-fig tp-fig--stat">
                    <img
                      src="/images/tempo/tempo-stat-rating.webp"
                      alt="More than 72% find out about restaurants through online search and rating platforms"
                      className="tp-fig-img"
                    />
                  </figure>
                  <Quote attribution="— Rachel, Server at Hilton Seelbach">
                    &ldquo;They don&rsquo;t think about all the details that were put in to making the whole experience — they will think about what was wrong with the whole experience.&rdquo;
                  </Quote>
                </div>
              </>
            ),
          },

          /* ── MY CONTRIBUTION ──────────────────────────────────────────────── */
          {
            id: "contribution",
            title: "My Contribution",
            body: <p>I originated the TempoChime concept — identifying inter-staff communication as the root coordination failure in fine dining and proposing a wearable device as the solution. I defined the AI orchestration logic behind it, designed the full information architecture and UX, and created all CAD models and renderings for the wristband hardware. Research was a full team effort. TempoScribe and TempoTap were led by teammates.</p>,
          },

          /* ── OBJECTIVE ────────────────────────────────────────────────────── */
          {
            id: "objective",
            title: "Objective",
            body: (
              <>
                <Insight>Designing for flow, not features</Insight>
                <p>The design objective was to <strong>use AI to improve the flow and consistency of premium service — without adding cognitive load for staff. Any feature that made the server think harder was a feature that worked against the goal.</strong></p>
                <figure className="tp-fig tp-fig--lg">
                  <img loading="lazy" src="/images/tempo/tempo-design-criteria.svg" alt="Design criteria grid: must have / should have / nice to have" className="tp-fig-img" data-lightbox />
                </figure>
              </>
            ),
          },

          /* ── TEMPOSCRIBE ──────────────────────────────────────────────────── */
          {
            id: "temposcribe",
            title: "TempoScribe",
            body: (
              <>
                <figure className="tp-fig tp-fig--full">
                  <img
                    src="/images/tempo/tempo-scribe-hero.webp"
                    alt="TempoScribe product render on a restaurant table"
                    className="tp-fig-img"
                  />
                </figure>
                <Insight>The current POS system was complicated, slow, and unforgiving</Insight>
                <p>Taking an order at a fine dining restaurant involves remembering seat assignments, capturing custom requests, navigating a complex POS interface, and doing it all without disrupting the guest&rsquo;s experience. Servers were spending more time managing the system than managing the table.</p>
                <figure className="tp-fig tp-fig--md">
                  <img
                    src="/images/tempo/tempo-pos-before.webp"
                    alt="Current POS system: cluttered interface"
                    className="tp-fig-img"
                  />
                  <figcaption className="tp-fig-caption">The current POS system demanded full attention — at exactly the wrong moment</figcaption>
                </figure>

                <Rule />

                <Insight>We gave servers three ways to take orders — and made editing effortless</Insight>
                <TrustCards>
                  <TrustCard
                    label="Voice to text"
                    slot={
                      <video autoPlay loop muted playsInline><source src="/images/tempo/tempo-scribe-voice-to-text.mp4" type="video/mp4" /></video>
                    }
                  >Server taps a seat to begin — built-in voice recognition then tracks who&rsquo;s speaking, so no extra taps are needed for each guest.</TrustCard>
                  <TrustCard
                    label="Handwriting to text"
                    slot={
                      <img
                        src="/images/tempo/tempo-scribe-handwriting.webp"
                        alt="TempoScribe handwriting to text screen"
                      />
                    }
                  >Built-in handwriting recognition matches notes to the menu and captures custom specs, keeping the traditional pad without the manual entry.</TrustCard>
                  <TrustCard
                    label="Intuitive gesture edits"
                    slot={<GestureEditsStack />}
                  >Tap to modify, drag to reassign, cross to delete — edits that match how servers already think about an order.</TrustCard>
                </TrustCards>
              </>
            ),
          },

          /* ── TEMPOCHIME ───────────────────────────────────────────────────── */
          {
            id: "tempochime",
            title: "TempoChime",
            body: (
              <>
                <figure className="tp-fig tp-fig--full">
                  <img
                    src="/images/tempo/tempo-chime-hero.webp"
                    alt="TempoChime product render showing table timers on restaurant devices"
                    className="tp-fig-img"
                  />
                </figure>
                <Insight>Staff had no shared view of the floor — so coordination happened verbally, inconsistently</Insight>
                <p>Without a live view of table status, task assignments were communicated verbally or not at all. Servers couldn&rsquo;t see where other staff were, what tasks were in progress, or when a table was falling behind. Coordination depended entirely on memory and experience.</p>
                <figure className="tp-fig tp-fig--flow">
                  <img
                    src="/images/tempo/tempo-information-flow.svg"
                    alt="Information flow diagram showing staff coordination gap across server, busser, food runner, and sommelier"
                    className="tp-fig-img"
                  />
                  <figcaption className="tp-fig-caption">Current Information Flow: Missing Inter-Staff Communication</figcaption>
                </figure>

                <Rule />

                <Insight>We gave the whole floor a shared, AI-coordinated timeline</Insight>
                <TrustCards>
                  <TrustCard
                    label="Customizable timeline"
                    slot={
                      <img
                        src="/images/tempo/tempo-chime-customize-timeline.svg"
                        alt="TempoChime customizable timeline screen"
                      />
                    }
                  >Managers set and edit the flow of service for each restaurant — every course, every task, in sequence.</TrustCard>
                  <TrustCard
                    label="AI task distribution"
                    slot={
                      <video autoPlay loop muted playsInline><source src="/images/tempo/tempo-chime-ai-task-distribution.mp4" type="video/mp4" /></video>
                    }
                  >The system assigns tasks to the right staff member at the right moment, triggered when guests are seated.</TrustCard>
                  <TrustCard
                    label="Live staff view"
                    slot={
                      <img
                        src="/images/tempo/tempo-chime-staff-view.svg"
                        alt="TempoChime live staff view screen"
                      />
                    }
                  >Indoor positioning shows where each staff member is on the floor in real time.</TrustCard>
                  <TrustCard
                    label="Inter-staff communication"
                    slot={
                      <video autoPlay loop muted playsInline><source src="/images/tempo/tempo-chime-interstaff-communication.mp4" type="video/mp4" /></video>
                    }
                  >Servers complete tasks by swiping the notification bar — no verbal check-ins needed.</TrustCard>
                  <TrustCard
                    label="Pause and redistribute"
                    slot={
                      <img
                        src="/images/tempo/tempo-chime-status-updating.svg"
                        alt="TempoChime status updating and task redistribution screen"
                      />
                    }
                  >If a staff member becomes unavailable, the system marks them and reassigns the task automatically.</TrustCard>
                  <TrustCard
                    label="Server call"
                    slot={
                      <img
                        src="/images/tempo/tempo-chime-server-call.svg"
                        alt="TempoChime server call screen"
                      />
                    }
                  >Food runners can notify a server directly when a table needs attention.</TrustCard>
                </TrustCards>
              </>
            ),
          },

          /* ── TEMPOTAP ─────────────────────────────────────────────────────── */
          {
            id: "tempotap",
            title: "TempoTap",
            body: (
              <>
                <figure className="tp-fig tp-fig--full">
                  <img
                    src="/images/tempo/tempo-tap-hero.webp"
                    alt="TempoTap product render showing a contactless payment device on a restaurant table"
                    className="tp-fig-img"
                  />
                </figure>
                <Insight>Splitting the check was the most friction-filled moment of the whole meal</Insight>
                <p>Check splitting at fine dining involves multiple guests, complex orders, and social dynamics around who pays for what. The existing process required servers to manually parse every item — a slow, error-prone close to an otherwise premium experience.</p>
                <figure className="tp-fig tp-fig--full">
                  <img
                    src="/images/tempo/tempo-check-splitting-pain.webp"
                    alt="Guests at a restaurant struggling to split a check manually"
                    className="tp-fig-img"
                  />
                </figure>

                <Rule />

                <Insight>AI handles the split — guests just tell it what they want</Insight>
                <TrustCards>
                  <TrustCard
                    label="AI split assist"
                    slot={
                      <video autoPlay loop muted playsInline style={{ mixBlendMode: "multiply" }}><source src="/images/tempo/tempo-tap-ai-check-splitting.mp4" type="video/mp4" /></video>
                    }
                  >Guests describe how they&rsquo;d like to split in natural language — the system handles the rest.</TrustCard>
                  <TrustCard
                    label="Flexible split options"
                    slot={
                      <video autoPlay loop muted playsInline><source src="/images/tempo/tempo-tap-flexible-check-splitting.mp4" type="video/mp4" /></video>
                    }
                  >By guest, equally, or by host — each with a clear summary before confirmation.</TrustCard>
                  <TrustCard
                    label="Contactless payment"
                    slot={
                      <img
                        src="/images/tempo/tempo-tap-contactless-payment.webp"
                        alt="TempoTap contactless payment flow"
                        className="tp-contactless"
                        style={{ width: "80%", margin: "0 auto", display: "block" }}
                      />
                    }
                  >Apple Pay or card, without the server needing to return multiple times.</TrustCard>
                </TrustCards>
              </>
            ),
          },

          /* ── VALIDATION ───────────────────────────────────────────────────── */
          {
            id: "validation",
            title: "Validation",
            body: (
              <>
                <Insight>The manager who said it was the restaurant of the future — and meant it as a compliment</Insight>
                <p>We tested Tempo with Brian, manager at STK, who evaluated the full system across all three modules. His feedback validated the core design decisions and surfaced one honest open question about TempoChime — which we&rsquo;ve carried into the future vision.</p>
                <QuoteRow quotes={[
                  {
                    text: <>&ldquo;The ordering — I love that ... definitely restaurant of the future ... I like being able to change or modify it by pen or actual selection ... and recognizing someone&rsquo;s writing.&rdquo;</>,
                    attribution: "— Brian, Manager at STK",
                  },
                  {
                    text: <>&ldquo;Splitting checks is always the most difficult task ... the way you did that made it very simple — better than any system I&rsquo;ve seen.&rdquo;</>,
                    attribution: "— Brian, Manager at STK",
                  },
                  {
                    text: <>&ldquo;Keeps that table flowing so that the guest has a great experience ... but yet we&rsquo;re still flipping that table and making money on it.&rdquo;</>,
                    attribution: "— Brian, Manager at STK",
                  },
                ]} />
                <div className="tp-video">
                  <iframe
                    src="https://www.youtube.com/embed/jtY6uCk7A4w"
                    title="Validation session with Brian at STK"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </>
            ),
          },

          /* ── REFLECTION ───────────────────────────────────────────────────── */
          {
            id: "reflection",
            title: "Reflection",
            body: (
              <>
                <h4>Future vision</h4>
                <p>Tempo is designed to be built in phases: a mobile software version first, then dedicated hardware, then a fully integrated system — with a next-generation Tempo 2.0 on the horizon.</p>
                <figure className="tp-fig tp-fig--future">
                  <img loading="lazy" src="/images/tempo/tempo-future-timeline.svg" alt="Tempo future vision timeline" className="tp-fig-img" />
                </figure>

                <Rule />

                <p>The brief from NCR Voyix was open-ended: reimagine the restaurant of the future. We started broad &mdash; fast food, small businesses, high-end dining &mdash; and I was initially drawn to automation in fast food. It felt exciting. Then I realized it was also the most obvious answer, the one everyone would reach for. The more interesting constraint was somewhere else.</p>
                <p style={{ marginTop: "1.25em" }}>What our research surfaced was that high-end dining was quietly struggling. Inflation had thinned margins, labor had become harder to retain, and the thing that makes fine dining worth the price &mdash; the service &mdash; is entirely human. You can&rsquo;t replace that with a robot without destroying the experience you&rsquo;re selling. That&rsquo;s what made the design problem genuinely hard, and genuinely interesting.</p>
                <p style={{ marginTop: "1.25em" }}>What we built was an integrated system, not a single terminal. The existing POS experience was essentially tab-clicking &mdash; functional, but friction-heavy and disconnected from how service actually flows. Tempo replaced that with interactions that feel natural: voice-to-text, handwriting recognition, AI-coordinated task distribution across the floor. Each module works independently but functions as a whole, keeping the dining room in sync without ever surfacing the technology to the guest.</p>
                <p style={{ marginTop: "1.25em" }}>It was also the beginning of the AI explosion, and there was something exciting about designing at that moment &mdash; figuring out where AI could genuinely reduce friction versus where it would just get in the way of what makes the experience premium in the first place.</p>
                <p style={{ marginTop: "1.25em" }}>Tempo taught me that designing for a high-stakes professional environment means holding two constraints in tension at once: reducing friction for staff without visibly changing what guests experience. Every feature that helped the server had to be invisible to the table. That constraint &mdash; not the technology &mdash; was the hardest design problem. The most honest moment of the project was Brian&rsquo;s response to TempoChime: he called it &ldquo;really outside the box&rdquo; and acknowledged it would need reality testing. That&rsquo;s the right kind of validation &mdash; not uncritical enthusiasm, but genuine interest paired with honest skepticism about what comes next.</p>

                <img loading="lazy" src="/images/tempo/tempo-team.webp" alt="Tempo team" style={{ width: "100%", height: "auto", display: "block", marginTop: "2em", borderRadius: 16 }} />
                <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: "0.75em", textAlign: "center" }}>Our team after our final presentation at NCR Voyix.</p>
              </>
            ),
          },

        ]}
      />
    </>
  );
}
