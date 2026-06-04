import { ProjectLayout } from "@/components/ProjectLayout";
import { FlowScroller } from "./FlowScroller";

export const metadata = { title: "CIRCA - Lily Liang Portfolio" };

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="cp-insight">{children}</p>;
}

function Rule() {
  return <div className="cp-rule" />;
}

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="cp-bullet">
      <strong>{label}</strong>{children}
    </p>
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
    <div className="cp-slot" style={{ aspectRatio: aspect }}>
      <span className="cp-slot-label">{label}</span>
      <code className="cp-slot-file">{filename}</code>
      {note && <span className="cp-slot-note">{note}</span>}
    </div>
  );
}

function ContribSlot() {
  return (
    <div className="cp-contrib">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
        <path
          d="M11 2.5a2.121 2.121 0 0 1 3 3L5.5 14 2 15l1-3.5L11 2.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      My contribution — to be added
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function CircaPage() {
  return (
    <>
      <style>{`
        html, body { background: var(--circa-bg); }

        /* Insight — bold italic callout with accent border */
        .cp-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 900;
          font-size: clamp(17px, 1.7vw, 22px);
          line-height: 1.35;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          border-left: 3px solid var(--circa-primary);
          padding-left: 14px;
          margin: 28px 0 10px;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .cp-insight:first-child { margin-top: 0; }

        /* Section divider */
        .cp-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* Bold-label bullet */
        .cp-bullet {
          font-family: var(--body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding: 10px 14px;
          margin: 6px 0;
          border-left: 2px solid var(--circa-secondary);
          background: rgba(250, 151, 163, 0.04);
          border-radius: 0 8px 8px 0;
        }
        .cp-bullet strong {
          color: var(--text-primary);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
        }

        /* Full-width image */
        .cp-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 14px;
          margin: 18px 0;
        }

        /* Research method cards — 2×2, horizontal layout */
        .cp-method-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 20px 0;
        }
        .cp-method-card {
          background: var(--surface);
          border-radius: 16px;
          padding: 20px 18px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
        }
        .cp-method-card > img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          flex-shrink: 0;
        }
        .cp-method-content {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cp-method-name {
          font-family: var(--body);
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .cp-method-stat-row {
          display: grid;
          grid-template-columns: 52px 1fr;
          align-items: baseline;
          gap: 6px;
        }
        .cp-method-stat {
          font-family: var(--display);
          font-style: italic;
          font-weight: 900;
          font-size: clamp(28px, 3vw, 36px);
          line-height: 1;
          letter-spacing: -0.03em;
          color: var(--circa-primary);
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .cp-method-sub {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Phone before/after */
        .cp-eyebrow--centered {
          text-align: center;
          margin: 16px 0 8px;
        }
        .cp-eyebrow {
          font-family: var(--body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin: 24px 0 6px;
        }
        .cp-phone-row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin: 24px 0;
        }
        .cp-eyebrow--fullwidth {
          width: 100%;
          margin: 0 0 8px;
        }
        .cp-phone-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: 200px;
          flex-shrink: 0;
        }
        .cp-phone-img {
          width: 100%;
          border-radius: 28px;
          display: block;
        }
        .cp-phone-caption {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-secondary);
          text-align: center;
        }
        .cp-signup-split {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 28px;
          align-items: center;
          margin: 16px 0;
        }
        .cp-signup-img img {
          width: 220px;
          height: 220px;
          display: block;
        }
        @media (max-width: 768px) {
          .cp-signup-split {
            grid-template-columns: 1fr;
          }
          .cp-signup-img { order: 2; }
          .cp-signup-text { order: 1; }
          .cp-signup-img img { width: 200px; height: 200px; margin: 0 auto; }
          .cp-redflag { max-width: 80% !important; }
        }
        .cp-signup-text { display: flex; flex-direction: column; gap: 8px; }
        .cp-signup-text p { margin: 0; }
        .cp-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 20px 0;
          align-items: start;
        }
        .cp-compare-col { display: flex; flex-direction: column; gap: 10px; }

        /* Equal-height image box — both cols forced to iPhone portrait ratio */
        .cp-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 477 / 982;
          border-radius: 22px;
          overflow: hidden;
        }
        .cp-img-box img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: top center;
          display: block;
        }
        .cp-img-box--photo img {
          object-fit: cover;
          object-position: top center;
        }
        .cp-img-box--flat {
          border-radius: 0;
          background: transparent;
        }
        .cp-compare--onboarding .cp-img-box {
          aspect-ratio: unset;
          height: 380px;
        }
        .cp-img-box--phone img {
          object-fit: contain;
          object-position: center;
        }
        /* Proposed onboarding frame */
        .cp-onboarding-frame {
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 4px 28px rgba(50,50,49,0.12);
          padding: 20px 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cp-onboarding-frame img {
          width: 100%;
          height: auto;
          display: block;
        }

        .cp-compare-caption { display: flex; flex-direction: column; gap: 4px; }
        .cp-compare-caption p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }
        .cp-tag {
          display: inline-flex;
          align-items: center;
          font-family: var(--body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          width: fit-content;
        }
        .cp-tag--before { background: rgba(50, 50, 49, 0.07); color: var(--text-tertiary); }
        .cp-tag--after  { background: rgba(250, 151, 163, 0.15); color: var(--circa-primary); }

        /* Outreach poster */
        .cp-poster {
          display: flex;
          justify-content: flex-start;
          margin: 20px 0;
        }
        .cp-poster img {
          height: clamp(200px, 22vw, 320px);
          width: auto;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(50, 50, 49, 0.12);
        }

        /* Poster before/after */
        .cp-poster-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 20px 0;
          align-items: start;
        }
        @media (max-width: 768px) {
          .cp-poster-compare { grid-template-columns: 1fr; }
        }
        .cp-poster-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .cp-poster-desc {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
          text-align: left;
        }
        .cp-poster-col img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          object-position: top center;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(50,50,49,0.12);
          display: block;
        }

        /* Poster — image + text side by side */
        .cp-trust-pair {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 28px;
          align-items: center;
          margin: 24px 0;
        }
        .cp-trust-pair--poster .cp-trust-pair-img img {
          height: clamp(200px, 22vw, 300px);
          width: auto;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(50, 50, 49, 0.12);
          display: block;
        }
        .cp-trust-pair-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cp-trust-pair-text p { margin: 0; }

        /* 2×2 trust cards — visual prominent, text below */
        .cp-trust-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin: 20px 0;
        }
        .cp-trust-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: transparent;
          border-radius: 0;
          overflow: visible;
          border: none;
        }
        .cp-trust-card > img,
        .cp-trust-card > .cp-slot {
          width: 100%;
          border-radius: 10px;
          margin: 0;
        }
        .cp-trust-card-body {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0;
        }
        .cp-trust-card-body p {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }
        .cp-trust-label {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--circa-primary);
        }

        /* Image placeholder slot */
        .cp-slot {
          width: 100%;
          margin: 18px 0;
          background: rgba(250, 151, 163, 0.04);
          border: 1.5px dashed rgba(250, 151, 163, 0.35);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          text-align: center;
        }
        .cp-slot-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: var(--circa-primary);
          opacity: 0.8;
        }
        .cp-slot-file {
          font-size: 10px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(250, 151, 163, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .cp-slot-note {
          font-size: 10px;
          color: var(--text-tertiary);
          font-style: italic;
          max-width: 360px;
        }

        /* Contribution placeholder */
        .cp-contrib {
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
          margin-top: 12px;
        }
        .cp-contrib svg { color: #8C7200; flex-shrink: 0; }

        /* JourneyScroller */
        .circa-jscroll-wrapper { height: 250vh; position: relative; }
        .circa-jscroll-sticky  { position: sticky; }
        .circa-jscroll-dots {
          position: absolute;
          left: -20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .circa-jscroll-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(50, 50, 49, 0.18);
          transition: background 0.4s;
        }
        .circa-jscroll-dot.active { background: var(--circa-primary); }
        .circa-jscroll-label-stack { position: relative; height: 18px; }
        .circa-jscroll-journey-label {
          position: absolute;
          inset: 0;
          font-family: var(--body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--circa-primary);
          margin: 0;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .circa-jscroll-journey-label.is-active { opacity: 1; }
        .circa-jscroll-chart-stack {
          position: relative;
          width: 100%;
          aspect-ratio: 1110 / 721;
        }
        .circa-jscroll-chart-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .circa-jscroll-chart-img.is-active { opacity: 1; }
        .circa-jscroll-quote-stack { position: relative; min-height: 48px; }
        .circa-jscroll-quote {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: row;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .circa-jscroll-quote.is-active { opacity: 1; }
        .circa-jscroll-quote-text {
          font-family: var(--display);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(12px, 1.1vw, 15px);
          line-height: 1.45;
          letter-spacing: -0.02em;
          color: rgba(0, 0, 0, 0.65);
          margin: 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
          flex: 1;
        }
        .circa-jscroll-quote-author {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          text-decoration: none;
          opacity: 0.45;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .circa-jscroll-quote-author:hover { opacity: 1; text-decoration: underline; }
        .circa-jscroll-cue {
          display: flex;
          align-items: center;
          gap: 5px;
          justify-content: center;
          margin-top: 10px;
          font-family: var(--body);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(50, 50, 49, 0.35);
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: cp-cue-bob 1.6s ease-in-out infinite;
        }
        .circa-jscroll-cue.visible { opacity: 1; }
        @keyframes cp-cue-bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(3px); }
        }
        .circa-jscroll-mobile {
          margin: 16px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .circa-jscroll-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .circa-jscroll-tab {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: 999px;
          border: 1.5px solid rgba(50, 50, 49, 0.15);
          background: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .circa-jscroll-tab.active {
          background: var(--circa-primary);
          border-color: var(--circa-primary);
          color: #fff;
        }

        /* ── FlowScroller ────────────────────────────────────────────────── */

        /* Outer scroll space — 3 phases × viewport height */
        .fscroll-wrapper { height: 250vh; position: relative; margin: 20px 0; }

        /* Sticky panel */
        .fscroll-sticky {
          position: sticky;
          top: calc(50vh - 280px);
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Title above diagram */
        .fscroll-title {
          font-family: var(--body);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--text-tertiary);
          margin: 0 0 10px;
          text-align: center;
        }

        /* Card — matches Figma container: white bg, rounded, overflow hidden */
        .fscroll-card {
          position: relative;
          width: 100%;
          background: #fff;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 2px 24px rgba(50,50,49,0.08);
        }

        /* Clip window — full Figma frame aspect ratio (2176 × 1415) */
        .fscroll-clip {
          width: 100%;
          aspect-ratio: 2176 / 1415;
          overflow: hidden;
          position: relative;
        }

        /* Image — absolutely positioned, translated by JS to Figma-accurate coords */
        .fscroll-img {
          position: absolute;
          top: 0;
          left: 0;
          max-width: none;
          will-change: transform;
        }

        /* Highlight box — matches Figma rgba(255,124,164,0.05) pink tint with border */
        .fscroll-hl {
          position: absolute;
          pointer-events: none;
          background: rgba(255, 124, 164, 0.05);
          border: 3px solid rgba(255, 124, 164, 0.2);
          opacity: 0;
          transition: opacity 0.5s ease, left 0.75s cubic-bezier(0.4,0,0.2,1),
                      top 0.75s cubic-bezier(0.4,0,0.2,1),
                      width 0.75s cubic-bezier(0.4,0,0.2,1),
                      height 0.75s cubic-bezier(0.4,0,0.2,1);
        }

        /* Progress dots */
        .fscroll-dots {
          position: absolute;
          bottom: 14px;
          right: 18px;
          display: flex;
          gap: 6px;
        }
        .fscroll-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(50,50,49,0.15);
          transition: background 0.4s;
        }

        /* Description text below card */
        .fscroll-desc-wrap { position: relative; min-height: 48px; }
        .fscroll-desc {
          position: absolute;
          inset: 0;
          font-family: var(--body);
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.85;
          margin: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .fscroll-desc.is-active { opacity: 1; }

        /* Mobile */
        .fscroll-mobile {
          display: flex; flex-direction: column; gap: 14px; margin: 16px 0;
        }
        .fscroll-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .fscroll-tab {
          font-family: var(--body); font-size: 11px; font-weight: 600;
          padding: 5px 12px; border-radius: 999px;
          border: 1.5px solid rgba(50,50,49,0.15);
          background: none; color: var(--text-secondary);
          cursor: pointer; transition: all 0.2s;
        }
        .fscroll-tab.active { color: #fff; }

        /* Pipeline before/after stack */
        .cp-pipeline-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 18px auto;
          max-width: 600px;
          align-items: center;
        }
        .cp-pipeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cp-poster-col img { height: auto !important; }
          .cp-compare--onboarding .cp-img-box { height: 280px !important; }
        }
        @media (max-width: 640px) {
          .cp-method-grid { grid-template-columns: 1fr; }
          .cp-compare     { grid-template-columns: 1fr; }
          .cp-trust-grid  { grid-template-columns: 1fr; }
          .cp-poster img  { height: auto; width: 100%; }
        }
      `}</style>

      <ProjectLayout
        title="CIRCA"
        year="Spring 2025"
        tagline="Trusted pregnancy support, from day one."
        description={
          <p>
            CIRCA is a text-based AI pregnancy support service from Penn Medicine&rsquo;s PEACE
            program, built for the uncertain weeks between a positive test and a first prenatal
            visit. Adoption was low. Our team redesigned CIRCA from a clinical information tool
            into a trust-centered support service, improving how it sounded, responded, and
            introduced itself to patients.
          </p>
        }
        sponsoredBy={
          <>
            <img src="/images/circa-logo-penn.webp" alt="Penn Medicine" />
            <img src="/images/circa-logo-peace.png" alt="PEACE" style={{ height: 32 }} />
          </>
        }
        heroImageUrl="/images/cover-circa.png"
        heroTint="rgba(140,30,50,0.52)"
        accentVar="var(--circa-primary)"
        meta={[
          { key: "Duration",        value: "Spring 2025" },
          { key: "Team",            value: "Lily Liang, Ashley Nam, Lindsay Park, Annie Sun" },
          { key: "My Contribution", value: "Research synthesis · AI tone strategy · onboarding copy · service flow redesign · outreach concept" },
          { key: "Sponsor",         value: "Penn Medicine PEACE Clinic" },
          { key: "Outcome",         value: "Trust-centered redesign of AI voice, onboarding, safety escalation & discovery" },
        ]}
        sidebarGroups={[
          {
            label: "Project Framing",
            items: [
              { id: "problem",      label: "Problem" },
              { id: "approach",     label: "Approach" },
              { id: "contribution", label: "My Contribution" },
            ],
          },
          {
            label: "Design Moves",
            items: [
              { id: "adaptive-voice", label: "Adaptive Voice" },
              { id: "support-flow",   label: "Safer Support Flow" },
              { id: "trust-signup",   label: "Trust Before Sign-Up" },
              { id: "roadmap",        label: "Roadmap & Prioritization" },
            ],
          },
          {
            label: "Reflection",
            items: [{ id: "reflection", label: "Reflection" }],
          },
        ]}
        prevProject={{
          title: "Little Autonomy",
          year: "Fall 2025 – Spring 2026",
          href: "/projects/little-autonomy",
          coverUrl: "/images/cover-little-autonomy.webp",
          tint: "rgba(18,4,48,0.58)",
        }}
        nextProject={{
          title: "Tempo",
          year: "Fall 2023",
          href: "/projects/tempo",
          coverUrl: "/images/cover-tempo.webp",
          tint: "rgba(10,10,10,0.55)",
        }}
        sections={[

          /* ── PROBLEM ──────────────────────────────────────────────────────── */
          {
            id: "problem",
            title: "Problem",
            body: (
              <>
                <Insight>Between a positive test and a first appointment, there&rsquo;s almost no reliable support</Insight>
                <p>Most women can&rsquo;t see a doctor until around week 12. In that limbo, worry builds and reliable answers are nowhere to be found.</p>
                <img src="/images/circa-gap.svg" alt="Support gap timeline" className="cp-img" style={{ margin: "18px 0 80px" }} data-lightbox />

                <div className="cp-signup-split">
                  <div className="cp-signup-img">
                    <img src="/images/circa-low-signup.svg" alt="Low sign-up rate illustration" />
                  </div>
                  <div className="cp-signup-text">
                    <Insight>Penn Medicine built CIRCA to fill the gap &mdash; but patients weren&rsquo;t signing up</Insight>
                    <p>CIRCA is a text-based support service from Penn Medicine&rsquo;s PEACE clinic, designed to give women reliable, clinician-backed answers during those early weeks through an AI chatbot. But it wasn&rsquo;t landing. The challenge wasn&rsquo;t just improving CIRCA&rsquo;s answers &mdash; it was making the service feel trustworthy enough to try in the first place.</p>
                  </div>
                </div>
                <p>CIRCA offers 24/7 access to clinically approved answers &mdash; a real gap-filler for women navigating early pregnancy without a doctor to call.</p>
                <p>But the experience had significant friction. Due to NLP limitations, interactions felt robotic: responses were repetitive, inputs were rigid (e.g., &ldquo;Y&rdquo; or &ldquo;N&rdquo;), and there was no natural conversation flow. More critically, CIRCA lacked emotional support &mdash; leaving users feeling unseen during vulnerable moments. Occasional account deactivations added to the frustration.</p>
                <div className="cp-phone-row">
                  <p className="cp-eyebrow cp-eyebrow--centered cp-eyebrow--fullwidth">Actual CIRCA User Screenshots</p>
                  {[
                    { src: "/images/circa-use-1.png", caption: "Helpful response" },
                    { src: "/images/circa-use-2.png", caption: "Repetitive messaging" },
                    { src: "/images/circa-use-3.png", caption: "Account deactivated" },
                  ].map(({ src, caption }) => (
                    <div key={caption} className="cp-phone-col">
                      <img src={src} alt={caption} className="cp-phone-img" />
                      <span className="cp-phone-caption">{caption}</span>
                    </div>
                  ))}
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
                <Insight>We approached CIRCA&rsquo;s redesign as a trust problem, not a feature problem.</Insight>
                <p>The existing service was clinically sound, but emotionally distant, and adoption remained low among the patients it was built to support.</p>
                <div className="cp-method-grid">
                  {[
                    { src: "/images/circa-approach-interviews.png",  name: "User Interviews",   stat: "12",  sub: "in-depth conversations to understand emotional and support needs",           bg: "#FDECEA" },
                    { src: "/images/circa-approach-surveys.png",     name: "User Surveys",       stat: "50+", sub: "quick, diverse responses on AI tone preferences and support needs",          bg: "#FDECEA" },
                    { src: "/images/circa-approach-secondary.png",   name: "Secondary Research", stat: null,  sub: "Studied how to make AI and design feel more human and trustworthy",          bg: "#EDE8FD" },
                    { src: "/images/circa-approach-ethnography.png", name: "Digital Ethnography",stat: "20+", sub: "forums and apps studied to observe real pregnancy questions and behaviors",  bg: "#EDE8FD" },
                  ].map(({ src, name, stat, sub, bg }) => (
                    <div key={name} className="cp-method-card" style={{ background: bg }}>
                      <img src={src} alt={name} />
                      <div className="cp-method-content">
                        <span className="cp-method-name">{name}</span>
                        <div className="cp-method-stat-row">
                          <span className="cp-method-stat">{stat}</span>
                          <span className="cp-method-sub">{sub}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ),
          },

          /* ── MY CONTRIBUTION ──────────────────────────────────────────────── */
          {
            id: "contribution",
            title: "My Contribution",
            body: (
              <>
                <p>I helped translate research around trust, anxiety, and information overload into CIRCA&rsquo;s service strategy. My work focused on synthesizing user needs, defining the adaptive tone model, rewriting onboarding to feel more trustworthy, mapping context-based care flows, and defining a pre-enrollment chatbot preview to make CIRCA more accessible and easier to trust before sign-up.</p>
              </>
            ),
          },

          /* ── ADAPTIVE VOICE ───────────────────────────────────────────────── */
          {
            id: "adaptive-voice",
            title: "Adaptive Voice",
            body: (
              <>
                <Insight>Behind every symptom question is an emotion that also needs an answer</Insight>
                <p>When women reach out with a question, they&rsquo;re rarely just after medical facts. They want reassurance and validation too. The best answers carry both &mdash; the information and the emotional support.</p>

                <h4>We gave CIRCA a voice that adapts to what&rsquo;s being asked</h4>
                <Bullet label="AI persona">Respectful, supportive, calming, compassionate, and clinically grounded &mdash; each attribute maps to a trust barrier from research, balancing non-judgmental warmth with Penn Medicine&apos;s clinical authority.</Bullet>
                <img src="/images/circa-ai-persona.svg" alt="AI persona" className="cp-img" data-lightbox />
                <Bullet label="Hybrid tone model">CIRCA shifts its tone to match the question &mdash; calm and factual for medical ones, warm and validating for emotional ones.</Bullet>
                <img src="/images/circa-hybrid-tone.svg" alt="Hybrid tone model" className="cp-img" data-lightbox />

                <Bullet label="Improved NLP with ChatGPT API">CIRCA&rsquo;s answers come from Memora Health&rsquo;s databank of clinically approved responses. We added a ChatGPT layer that adjusts the language &mdash; keeping the medical accuracy intact while making each answer feel helpful and supportive rather than clinical.</Bullet>
                <div className="cp-pipeline-stack">
                  <div className="cp-pipeline-item">
                    <span className="cp-tag cp-tag--before">Before</span>
                    <img src="/images/circa-pipeline-before.svg" alt="Original NLP pipeline" className="cp-img" style={{ margin: "8px 0 0" }} data-lightbox />
                  </div>
                  <div className="cp-pipeline-item">
                    <span className="cp-tag cp-tag--after">After</span>
                    <img src="/images/circa-pipeline-after.svg" alt="Proposed NLP pipeline" className="cp-img" style={{ margin: "8px 0 0" }} data-lightbox />
                  </div>
                </div>
                <p style={{ textAlign: "center", fontStyle: "italic", fontSize: 13, color: "var(--text-secondary)", margin: "4px 0 0" }}>Same clinically-approved answers, delivered with warmth.</p>
              </>
            ),
          },

          /* ── SAFER SUPPORT FLOW ───────────────────────────────────────────── */
          {
            id: "support-flow",
            title: "Safer Support Flow",
            body: (
              <>
                <Insight>A one-size-fits-all flow couldn&rsquo;t adapt to wanted, unsure, or loss</Insight>
                <p>No two pregnancies are the same &mdash; even for the same person the second time around. A single linear flow couldn&rsquo;t meet users whose experiences ranged from excitement to uncertainty to loss. Each pregnancy journey can look drastically different.</p>
                <img src="/images/circa-journey-map.svg" alt="Journey map — three pregnancy experiences" className="cp-img" data-lightbox />

                <h4>We built paths that match each person&rsquo;s situation</h4>
                <Bullet label="Redesigned workflow">Different approaches based on pregnancy preference.</Bullet>
                <FlowScroller />

                <Rule />

                <p>The adaptive flow also needed to handle moments where support alone wasn&rsquo;t enough.</p>
                <Bullet label="Red-flag alerts">Detects high-risk language like thoughts of self-harm, responds with empathy, and routes the person to a human care specialist instead of an automated reply.</Bullet>
                <img src="/images/circa-redflag.svg" alt="Red-flag alert system" className="cp-img cp-redflag" style={{ maxWidth: "45%", margin: "18px auto" }} data-lightbox />
                <Insight>User is acknowledged, validated, and safely escalated to professional help.</Insight>

                <Rule />

                <p>The original onboarding buried the service name, skipped any emotional welcome, and made no attempt to earn trust before asking for consent.</p>
                <Bullet label="Streamlined onboarding">Replaces the long, cold, spammy intro with a warm, plain-language welcome that names CIRCA, notes it&rsquo;s backed by Penn Medicine, and states upfront it&rsquo;s not for emergencies.</Bullet>
                <div className="cp-compare cp-compare--onboarding">
                  <div className="cp-compare-col">
                    <div className="cp-img-box cp-img-box--photo cp-img-box--phone">
                      <img src="/images/circa-iphone-1.png" alt="Original CIRCA onboarding" />
                    </div>
                    <div className="cp-compare-caption">
                      <span className="cp-tag cp-tag--before">Before</span>
                      <p>Long, clinical, impersonal. Didn&rsquo;t name the service or explain why to trust it.</p>
                    </div>
                  </div>
                  <div className="cp-compare-col">
                    <div className="cp-img-box cp-img-box--flat">
                      <img src="/images/circa-onboarding-v2.svg" alt="Redesigned CIRCA onboarding" />
                    </div>
                    <div className="cp-compare-caption">
                      <span className="cp-tag cp-tag--after">Proposed</span>
                      <p>Warm, clear, and honest. Builds trust before the first exchange.</p>
                    </div>
                  </div>
                </div>
              </>
            ),
          },

          /* ── TRUST BEFORE SIGN-UP ─────────────────────────────────────────── */
          {
            id: "trust-signup",
            title: "Trust Before Sign-Up",
            body: (
              <>
                <Insight>Trust starts with being found, and CIRCA was invisible</Insight>
                <p>CIRCA&rsquo;s outreach poster didn&rsquo;t convey what the service was for, and online it had almost no presence. Users couldn&rsquo;t trust &mdash; or even find &mdash; a service they didn&rsquo;t know existed.</p>

                <h4>We made CIRCA easy to find, understand, and try</h4>

                {/* Poster — before/after */}
                <Bullet label="Poster redesign">Leads with what CIRCA offers, building trust before the ask.</Bullet>
                <div className="cp-poster-compare">
                  <div className="cp-poster-col">
                    <img src="/images/circa-poster-before.png" alt="Original CIRCA poster" data-lightbox />
                    <span className="cp-tag cp-tag--before">Before</span>
                    <p className="cp-poster-desc">No service name, no Penn Medicine branding, no clarity on what happens after you enroll. Generic imagery makes the purpose ambiguous, and the cold clinical palette signals authority without warmth &mdash; the wrong emotional register for an anxious first-time patient.</p>
                  </div>
                  <div className="cp-poster-col">
                    <img src="/images/circa-flyer.png" alt="Redesigned CIRCA poster" data-lightbox />
                    <span className="cp-tag cp-tag--after">Proposed</span>
                    <p className="cp-poster-desc">A warmer color scheme and friendly tone make the service feel approachable. A clear program description, relevant visuals, Penn Medicine branding for credibility, and a link for more information give patients everything they need to trust and act.</p>
                  </div>
                </div>

                <Rule />

                {/* Digital touchpoints — 2×2 grid, each with label + description below */}
                <p>We designed a layered discovery path &mdash; find CIRCA, understand it, try it, trust it.</p>
                <div className="cp-trust-cards">
                  <div className="cp-trust-card">
                    <Bullet label="Website redesign">Warmer, more welcoming PEACE site that leads with patient needs, not clinic credentials.</Bullet>
                    <img src="/images/circa-website.webp" alt="Redesigned PEACE website" data-lightbox />
                  </div>
                  <div className="cp-trust-card">
                    <Bullet label="CIRCA landing page">A dedicated page to learn what CIRCA is, what it does, and who it&rsquo;s backed by &mdash; before enrolling.</Bullet>
                    <img src="/images/circa-landing-page.png" alt="CIRCA landing page" data-lightbox />
                  </div>
                  <div className="cp-trust-card">
                    <Bullet label="Try before signing up">An embedded chatbot preview lets users experience CIRCA&rsquo;s voice and helpfulness before committing.</Bullet>
                    <img src="/images/circa-chatbot-page.png" alt="Embedded chatbot preview" data-lightbox />
                  </div>
                  <div className="cp-trust-card">
                    <Bullet label="Transparent data handling">A plain-language privacy page that addresses the data concerns users raised directly in research.</Bullet>
                    <img src="/images/circa-privacy-policy.png" alt="Privacy policy page" data-lightbox />
                  </div>
                </div>
              </>
            ),
          },

          /* ── ROADMAP & PRIORITIZATION ─────────────────────────────────────── */
          {
            id: "roadmap",
            title: "Roadmap & Prioritization",
            body: (
              <>
                <p>We prioritized changes by feasibility and trust impact across three phases &mdash; immediate outreach fixes, near-term UX improvements, and long-term research investments.</p>
                <img src="/images/circa-roadmap.svg" alt="Roadmap & prioritization matrix" className="cp-img" data-lightbox />
              </>
            ),
          },

          /* ── REFLECTION ───────────────────────────────────────────────────── */
          {
            id: "reflection",
            title: "Reflection",
            body: (
              <p>
                CIRCA changed how I think about AI in sensitive healthcare moments: a technically
                correct answer isn&rsquo;t always a supportive one. Trust had to be designed across
                the whole experience &mdash; the first message, the tone of each reply, the ability
                to escalate risk, and how users found CIRCA in the first place. The biggest lesson
                was that AI here shouldn&rsquo;t only optimize for accuracy; it has to communicate
                its role clearly, respect emotional context, and know when to step aside for human
                care.
              </p>
            ),
          },

        ]}
      />
    </>
  );
}
