import Link from "next/link";

export const metadata = {
  title: "About - Lily Liang Portfolio",
  description:
    "About Lily Liang, a product designer from Chengdu, China, based in Philadelphia.",
};

const SECTIONS = [
  {
    num: "01",
    title: "Background",
    body: "I started in industrial design at Georgia Tech because I wanted to make things. Four years later I understood that making things well meant understanding people first. That pulled me toward UPenn’s Master of Integrated Product Design, where I spent two years learning how design, engineering, and business fit together.",
  },
  {
    num: "02",
    title: "How I think about design",
    body: "The most interesting problems are the ones people have accepted as normal. Finding them means questioning what everyone else has stopped questioning. Solving them means looking somewhere unexpected — the way a dish comes together not from new ingredients, but from the right ones in the right order.",
  },
];

export default function About() {
  return (
    <>
      <style>{`
        body { animation: pageFadeIn 400ms ease both; }
        .about-header {
          padding: 160px 0 42px;
          border-bottom: 1px solid var(--hairline);
          margin-bottom: 64px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
        }
        .about-hero {
          display: grid;
          grid-template-columns: minmax(180px, 220px) 1fr;
          gap: 40px;
          align-items: start;
          padding-bottom: 72px;
          border-bottom: 1px solid var(--hairline);
          margin-bottom: 72px;
        }
        .about-portrait {
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: var(--r-card);
          background: var(--surface);
          border: 1px solid var(--hairline);
          overflow: hidden;
        }
        .about-portrait img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .about-intro {
          font-family: var(--display);
          font-weight: 400;
          font-size: 18px;
          line-height: 1.65;
          color: var(--text-primary);
          max-width: 780px;
          padding-top: 4px;
        }
        .about-section {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 56px;
          padding: 38px 0;
          border-bottom: 1px solid var(--hairline);
        }
        .about-section:first-of-type { border-top: 1px solid var(--hairline); }
        .about-section-kicker {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 24px;
        }
        .about-section-title {
          font-family: var(--body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-primary);
        }
        .about-section-num {
          font-family: var(--display);
          font-style: italic;
          font-weight: 900;
          font-size: 13px;
          color: var(--accent-red);
          flex-shrink: 0;
        }
        .about-section-body {
          font-family: var(--body);
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-secondary);
          max-width: 760px;
        }
        @media (max-width: 900px) {
          .about-header {
            flex-direction: column;
            align-items: flex-start;
            padding: 120px 0 36px;
            margin-bottom: 44px;
          }
          .about-hero {
            grid-template-columns: 1fr;
            gap: 36px;
            padding-bottom: 52px;
            margin-bottom: 48px;
          }
          .about-portrait { max-width: 220px; }
          .about-intro { font-size: 18px; }
          .about-section {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 32px 0;
          }
          .about-section-kicker { justify-content: flex-start; }
          .cta-about { flex-direction: column; align-items: flex-start !important; }
        }
        @media (max-width: 520px) {
          .about-header h1 { font-size: 50px !important; }
          .about-intro { font-size: 17px; }
          .about-portrait { border-radius: var(--r-card-sm); }
          .about-actions { flex-direction: column; align-items: stretch; width: 100%; }
          .about-actions a { justify-content: center; }
        }
      `}</style>

      <div className="wrap">
        <header className="about-header fade">
          <h1
            style={{
              fontFamily: "var(--display)",
              fontWeight: 900,
              fontStyle: "italic",
              fontSize: 58,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            About
          </h1>
          <div
            style={{
              textAlign: "right",
              fontFamily: "var(--body)",
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              flexShrink: 0,
            }}
          >
            <p>
              Product Designer
              <br />
              Philadelphia, PA
            </p>
            <p>
              <i
                style={{
                  fontFamily: "var(--emphasis)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "var(--text-tertiary)",
                }}
              >
                Seeking full-time roles · 2026
              </i>
            </p>
          </div>
        </header>

        <section className="about-hero fade" aria-label="Introduction">
          <div className="about-portrait">
            <img src="/images/portrait-new.jpg" alt="Lily Liang" />
          </div>
          <p className="about-intro">
            I’m Lily Liang —{" "}
            <i
              style={{
                fontFamily: "var(--emphasis)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              梁婷妤
            </i>{" "}
            in Chinese — a product designer from Chengdu, China. I find the problems people have stopped questioning, and solve them by looking sideways — borrowing from other domains, recombining what already exists, building things that carry real value in the world.
          </p>
        </section>

        <div style={{ marginBottom: 72 }}>
          {SECTIONS.map(({ num, title, body }) => (
            <section key={title} className="about-section fade">
              <div className="about-section-kicker">
                <h2 className="about-section-title">{title}</h2>
                <span className="about-section-num">{num}</span>
              </div>
              <p className="about-section-body">{body}</p>
            </section>
          ))}
        </div>

        <div
          className="cta-about fade"
          style={{
            padding: "48px 0",
            borderTop: "1px solid var(--hairline)",
            marginTop: 32,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--display)",
                fontWeight: 400,
                fontSize: 32,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Let’s{" "}
              <i
                style={{
                  fontFamily: "var(--emphasis)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "var(--accent-red)",
                }}
              >
                work together.
              </i>
            </h3>
            <p
              style={{
                fontFamily: "var(--body)",
                fontSize: 15,
                color: "var(--text-secondary)",
              }}
            >
              Currently seeking full-time product design roles for 2026.
            </p>
          </div>
          <div className="about-actions" style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <a href="mailto:tlianglilydesign@gmail.com" className="btn btn-primary">
              Email me →
            </a>
            <Link href="/resume" className="btn btn-glass">
              View resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
