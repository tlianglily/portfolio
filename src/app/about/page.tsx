import Link from "next/link";

export const metadata = {
  title: "About - Lily Liang Portfolio",
  description:
    "Lily Liang is a product designer based in Philadelphia with a Master of Integrated Product Design from Penn and a background in Industrial Design from Georgia Tech.",
};

export default function About() {
  return (
    <>
      <style>{`
        body { animation: pageFadeIn 400ms ease both; }

        .about-lede-display {
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }

        /* ── Hero ─────────────────────────────────────────── */
        .about-hero {
          padding-top: 140px;
          padding-bottom: 0;
        }
        .about-eyebrow {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--hairline);
        }
        .about-hero-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          grid-template-areas: "portrait name" "portrait body";
          column-gap: 64px;
          align-items: start;
          padding-top: 48px;
          padding-bottom: 72px;
        }
        .about-portrait {
          grid-area: portrait;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: var(--r-card);
          overflow: hidden;
        }
        .about-portrait img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .about-hero-body { grid-area: body; }
        .about-hero-name {
          grid-area: name;
          padding-top: 6px;
          font-family: var(--display);
          font-weight: 400;
          font-size: clamp(36px, 4vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--text-primary);
          margin-bottom: 28px;
        }
        .about-hero-name em {
          font-family: var(--emphasis);
          font-style: italic;
          font-weight: 700;
          color: var(--accent-red);
        }
        .about-hero-lede {
          font-family: var(--body);
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-secondary);
          max-width: 540px;
          padding-top: 24px;
          border-top: 1px solid var(--hairline);
          margin-bottom: 32px;
        }
        .about-hero-meta {
          display: grid;
          grid-template-columns: max-content max-content;
          column-gap: 34px;
          row-gap: 22px;
        }
        .about-hero-meta dl { display: flex; flex-direction: column; gap: 4px; }
        .about-hero-meta dl:not(:last-child) { min-width: 160px; }
        .about-hero-meta dl:last-child { grid-column: 1 / -1; }
        .about-hero-meta dt {
          font-family: var(--body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }
        .about-hero-meta dd {
          font-family: var(--body);
          font-size: 13px;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .about-hero-meta dd.about-education-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
          min-height: 60px;
          padding-top: 2px;
        }
        .about-school-logo {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }
        .about-school-logo img {
          display: block;
          width: 120px;
          height: auto;
          object-fit: contain;
          opacity: 0.9;
        }
        .about-school-logo--penn img {
          width: 130px;
        }
        /* ── Body sections ───────────────────────────────── */
        .about-body {
          border-top: 1px solid var(--hairline);
        }
        .about-section {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 64px;
          padding: 56px 0;
          border-bottom: 1px solid var(--hairline);
          align-items: start;
        }
        .about-aside {
          position: sticky;
          top: 88px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .about-aside-tag {
          display: flex;
          align-items: baseline;
          gap: 8px;
          font-family: var(--body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .about-aside-num { color: var(--accent-red); }
        .about-aside-label { color: var(--text-tertiary); }
        .about-aside-title {
          font-family: var(--display);
          font-style: italic;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .about-content {
          max-width: 620px;
          padding-top: 4px;
        }
        .about-content p {
          font-family: var(--body);
          font-size: 15px;
          line-height: 1.85;
          color: var(--text-secondary);
        }
        .about-content p + p { margin-top: 12px; }

        /* Media grids */
        .about-media {
          margin-top: 36px;
          display: grid;
          gap: 14px;
        }
        .about-media.two { grid-template-columns: 1fr 1fr; }
        .about-media-item img {
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          object-position: center top;
          border-radius: var(--r-card-sm);
          display: block;
        }
        .about-media-item img.wide {
          aspect-ratio: 3 / 2;
          object-position: center 25%;
        }
        .about-content .about-media-cap {
          margin-top: 8px;
          font-family: var(--body);
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-tertiary);
          text-align: center;
        }

        /* Penn image — half width on desktop, full on mobile */
        .about-media--half { max-width: 50%; }

        /* Closing section kicker */
        .about-section.closing .about-content .kicker {
          display: block;
          margin-top: 1em;
          font-family: var(--body);
          font-style: normal;
          font-weight: 600;
          font-size: 15px;
          color: var(--accent-red);
        }

        /* ── CTA ─────────────────────────────────────────── */
        .about-cta {
          padding: 56px 0 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }
        .about-actions { display: flex; gap: 12px; flex-shrink: 0; }

        /* ── Responsive ──────────────────────────────────── */
        @media (max-width: 960px) {
          .about-hero-grid {
            display: grid;
            grid-template-columns: minmax(220px, 34%) minmax(0, 1fr);
            grid-template-areas:
              "name name"
              "portrait body";
            column-gap: 36px;
            row-gap: 28px;
            align-items: start;
            padding-top: 28px;
            padding-bottom: 48px;
          }
          .about-hero-name { margin-bottom: 0; }
          .about-portrait { max-width: 100%; aspect-ratio: 4/5; }
          .about-section { grid-template-columns: 1fr; gap: 28px; padding: 40px 0; }
          .about-aside { position: static; flex-direction: row; align-items: baseline; gap: 16px; flex-wrap: wrap; }
          .about-aside-title { font-size: 20px; }
          .about-media.two { grid-template-columns: 1fr 1fr; }
          .about-media--half { max-width: 100%; }
        }
        @media (max-width: 600px) {
          .about-hero { padding-top: 100px; }
          .about-eyebrow { display: none; }
          .about-hero-grid {
            display: grid;
            grid-template-columns: 84px max-content;
            grid-template-areas:
              "portrait name"
              "body body";
            column-gap: 16px;
            row-gap: 22px;
            align-items: center;
            justify-content: center;
          }
          .about-hero-name {
            order: initial;
            font-size: 32px;
            margin-bottom: 0;
            padding-top: 0;
          }
          .about-portrait {
            order: initial;
            width: 84px;
            height: 84px;
            max-width: none;
            aspect-ratio: 1;
            border-radius: 50%;
            margin-bottom: 0;
          }
          .about-hero-body {
            order: initial;
            width: calc(100vw - 48px);
            max-width: 540px;
            justify-self: center;
          }
          .about-media.two { grid-template-columns: 1fr; }
          .about-cta { flex-direction: column; align-items: flex-start; }
          .about-actions { flex-direction: column; width: 100%; }
          .about-actions a { justify-content: center; }
        }
      `}</style>

      <div className="wrap">

        {/* ── Hero ───────────────────────────────────────── */}
        <section className="about-hero fade" aria-label="Introduction">
          <div className="about-eyebrow">
            <span className="label">About</span>
            <span className="label">Product Designer · Philadelphia, PA</span>
          </div>

          <div className="about-hero-grid">
            <h1 className="about-hero-name about-lede-display">
              I&apos;m <em>Lily Liang,</em><br />a product designer.
            </h1>
            <div className="about-portrait">
              <img src="/images/about/portrait-new.webp" alt="Lily Liang" />
            </div>
            <div className="about-hero-body">
              <p className="about-hero-lede">
                I find the problems people have stopped questioning, and solve them by looking sideways — borrowing from other domains, recombining what already exists, building things that carry real value in the world.
              </p>
              <div className="about-hero-meta">
                <dl>
                  <dt>From</dt>
                  <dd>Chengdu, China</dd>
                </dl>
                <dl>
                  <dt>Based in</dt>
                  <dd>Philadelphia, PA</dd>
                </dl>
                <dl>
                  <dt>Education</dt>
                  <dd className="about-education-logos">
                    <span className="about-school-logo about-school-logo--gt" aria-label="Georgia Tech">
                      <img loading="lazy" src="/images/about/georgia-tech-logo.png" alt="Georgia Tech" />
                    </span>
                    <span className="about-school-logo about-school-logo--penn" aria-label="University of Pennsylvania">
                      <img loading="lazy" src="/images/about/upenn-logo.png" alt="University of Pennsylvania" />
                    </span>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sections ────────────────────────────────────── */}
        <div className="about-body">

          {/* 01 — Georgia Tech */}
          <section className="about-section fade" aria-label="Georgia Tech">
            <div className="about-aside">
              <span className="about-aside-tag">
                <span className="about-aside-num">01</span>
                <span className="about-aside-label">Industrial Design</span>
              </span>
              <h2 className="about-aside-title">Georgia Tech</h2>
            </div>
            <div className="about-content">
              <p>I got into design because I wanted to make things. Growing up, I was always doing arts and crafts — building, drawing, figuring out how things came together. That eventually led me to study industrial design at Georgia Tech, where I learned that making things well meant understanding people first. Design wasn&apos;t just craft. It was problem solving.</p>
              <p>The more I learned, the more I was drawn to the front end of the process — the research, the questioning, the moments before any solution exists. Finding the problem nobody had named yet felt like the most important work.</p>
              <div className="about-media two">
                <div className="about-media-item">
                  <img loading="lazy" src="/images/about/about-gt-grad.webp" alt="Graduating from Georgia Tech, May 2024" />
                  <p className="about-media-cap">Georgia Tech · Industrial Design</p>
                </div>
                <div className="about-media-item">
                  <img loading="lazy" src="/images/about/about-studio.webp" alt="Working in studio" className="wide" style={{ aspectRatio: "4/5", objectPosition: "left center" }} />
                  <p className="about-media-cap">GT Studio · Making</p>
                </div>
              </div>
            </div>
          </section>

          {/* 02 — University of Pennsylvania */}
          <section className="about-section fade" aria-label="University of Pennsylvania">
            <div className="about-aside">
              <span className="about-aside-tag">
                <span className="about-aside-num">02</span>
                <span className="about-aside-label">Product Design</span>
              </span>
              <h2 className="about-aside-title">University of Pennsylvania</h2>
            </div>
            <div className="about-content">
              <p>But not all of my work starts from a problem. Anyi, a mahjong table set, started from my own cultural background. Adaptex, a conceptual venture, started from a material. Neither was problem-driven — but both taught me something the problem-solving frame can&apos;t: that design can begin anywhere, as long as it ends somewhere meaningful. Whatever the starting point, the question is always the same — does this carry enough value that someone would choose it?</p>
              <p>That question is what pulled me toward Penn&apos;s Master of Integrated Product Design. A good idea sitting on a shelf helps nobody. For design to matter in the real world, it has to carry business value — it has to sell. I spent two years learning how design, engineering, and business fit together, and left with an engineering entrepreneurship certificate and a much clearer picture of what it takes to get something made.</p>
              <div className="about-media two">
                <div className="about-media-item">
                  <img loading="lazy" src="/images/about/about-penn-grad.webp" alt="Graduating from Penn Engineering, May 2026" />
                  <p className="about-media-cap">Penn · Integrated Product Design</p>
                </div>
                <div className="about-media-item">
                  <img loading="lazy" src="/images/about/about-upenn-group.webp" alt="Conducting a guerilla interview during a Penn project" style={{ objectPosition: "center center" }} />
                  <p className="about-media-cap">Penn · Guerilla interview</p>
                </div>
              </div>
            </div>
          </section>

          {/* 03 — Closing */}
          <section className="about-section closing fade" aria-label="How I think">
            <div className="about-aside">
              <span className="about-aside-tag">
                <span className="about-aside-num">03</span>
                <span className="about-aside-label">Thinking</span>
              </span>
              <h2 className="about-aside-title">Beyond design</h2>
            </div>
            <div className="about-content">
              <p>When I was choosing a college major, I almost picked computer science. I&apos;ve always seen technical skills as a way to bring ideas to life — but I decided the ideas came first. That instinct feels more relevant now than ever. A lot of people are unsettled by AI. I see it as the thing that finally closes the gap between having an idea and being able to build it. I built this entire portfolio using Claude Code — animations, interactions, effects that would have taken months before. That&apos;s not a shortcut. That&apos;s what it looks like when a designer gets the tools to match their ambition.
                <span className="kicker">I&apos;m still here for the ideas. Now I can actually build them too.</span>
              </p>
            </div>
          </section>

        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="about-cta fade">
          <div>
            <h3 style={{
              fontFamily: "var(--display)", fontWeight: 400,
              fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 8,
              fontOpticalSizing: "none",
              fontVariationSettings: '"opsz" 144, "WONK" 1',
            } as React.CSSProperties}>
              Let&apos;s{" "}
              <i style={{ fontFamily: "var(--emphasis)", fontWeight: 700, fontStyle: "italic", color: "var(--accent-red)" }}>
                work together.
              </i>
            </h3>
            <p style={{ fontFamily: "var(--body)", fontSize: 14, color: "var(--text-secondary)" }}>
              Currently seeking full-time product design roles for 2026.
            </p>
          </div>
          <div className="about-actions">
            <a href="mailto:tlianglilydesign@gmail.com" className="btn btn-primary">Email me →</a>
            <Link href="/resume" className="btn btn-glass">View resume</Link>
          </div>
        </div>

      </div>
    </>
  );
}
