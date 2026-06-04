import Link from "next/link";

export const metadata = { title: "Projects - Lily Liang Portfolio" };

const SELECTED = [
  { href: "/projects/little-autonomy", title: "Little Autonomy", year: "Fall 2025 – Spring 2026", cover: "/images/cover-little-autonomy.webp", desc: <>Interaction design empowering children&apos;s independence — systems that support self-directed decision-making in everyday life.</>, tags: ["Interaction Design", "UX Research"] },
  { href: "/projects/circa",            title: "Circa",            year: "Spring 2025", cover: "/images/cover-circa.png",          desc: <>A text-based, AI-powered pregnancy support platform built with Penn Medicine — meeting patients where they are, <i style={{ fontFamily: "var(--emphasis)", fontWeight: 700, fontStyle: "italic" }}>when they need it most</i>.</>, tags: ["Product Design", "AI", "Healthcare"] },
  { href: "/projects/tempo",            title: "Tempo",            year: "Fall 2023",   cover: "/images/cover-tempo.webp",          desc: <>An AI-powered system integrating into high-end restaurant operations — enhancing ordering, check-splitting, contactless payment, and task management.</>, tags: ["UX / UI", "Motion", "Hardware"] },
];

const EXPLORATIONS = [
  { href: "/projects/medegg",            title: "Medegg",            year: "2024", cover: "/images/cover-medegg.webp",            tags: ["CAD", "Physical"] },
  { href: "/projects/summit-ware",       title: "Summit Ware",       year: "2024", cover: "/images/cover-summit-ware.webp",       tags: ["CAD", "Physical"] },
  { href: "/projects/anyi", title: "Anyi", year: "Fall 2023", cover: "/images/cover-mahjong-table-set.webp", tags: ["CAD", "Fabrication"] },
  { href: "/projects/wash-bus",          title: "Wash Bus",          year: "2023", cover: "/images/cover-wash-bus.webp",          tags: ["Product", "Research"] },
  { href: "/projects/horizon",           title: "Horizon",           year: "2022", cover: "/images/cover-horizon.webp",           tags: ["Concept", "Prototyping"] },
  { href: "/projects/color-mixing-marker", title: "Color Mixing Marker", year: "Fall 2021", cover: "/images/cover-color-mixing-pen.png", tags: ["CAD", "Toy Design"] },
];

export default function Projects() {
  return (
    <>
      <style>{`
        body { animation: pageFadeIn 400ms ease both; }
        .sel-card          { display:block; text-decoration:none; color:var(--text-primary); transition:transform 280ms ease; }
        .sel-card:hover    { transform:translateY(-4px); }
        .sel-card:hover .sel-title { color:var(--accent-red); }
        .exp-card          { display:block; text-decoration:none; color:var(--text-primary); transition:transform 280ms ease; }
        .exp-card:hover    { transform:translateY(-4px); }
        .exp-card:hover .exp-title { color:var(--accent-red); }
        .card-img { width:100%; aspect-ratio:983/566; border-radius:20px; background:var(--surface); border:1px solid var(--hairline); overflow:hidden; }
        .card-img img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 600ms cubic-bezier(.2,.7,.2,1); }
        .sel-card:hover .card-img img { transform:scale(1.08); }
        .exp-card:hover .card-img img { transform:scale(1.08); }
.sel-title { transition:color 200ms ease; }
        .exp-title { transition:color 200ms ease; }
        @media (max-width:768px) {
          .selected-grid  { grid-template-columns:1fr !important; }
          .exp-grid       { grid-template-columns:1fr !important; }
          .label-detail   { display: none; }
          .page-header-row { flex-direction: column !important; align-items: flex-start !important; gap: 8px; }
          .projects-page-header { padding: 100px 0 24px !important; }
        }
        @media (min-width:769px) and (max-width:1024px) { .exp-grid { grid-template-columns:1fr 1fr !important; } }
      `}</style>

      <div className="wrap">
        {/* Page header */}
        <div className="projects-page-header" style={{ padding: "160px 0 32px", marginBottom: 40 }}>
          <div className="page-header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
            <h1 style={{ fontFamily: "var(--display)", fontWeight: 900, fontStyle: "italic", fontSize: 52, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
              All <em style={{ color: "var(--accent-red)" }}>work.</em>
            </h1>
            <span className="label">9 projects · 2022–2026</span>
          </div>
          <p style={{ fontFamily: "var(--body)", fontSize: 13, lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: "56ch" }}>
            Product design, interaction design, and industrial design — from AI healthcare tools to restaurant POS systems to children&apos;s autonomy apps. Each shaped by{" "}
            <i style={{ fontFamily: "var(--emphasis)", fontWeight: 700, fontStyle: "italic" }}>time spent in the field</i>.
          </p>
        </div>

        {/* Selected work */}
        <div style={{ marginBottom: 72 }}>
          <div className="section-rule">
            <span className="label">Selected work<span className="label-detail"> — Product &amp; UX Design</span></span>
            <span className="label">3 / 9</span>
          </div>
          <div className="selected-grid fade" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 28px" }}>
            {SELECTED.map(({ href, title, year, cover, desc, tags }) => (
              <Link key={title} href={href} className="sel-card">
                <div style={{ position: "relative", width: "100%" }}>
                  <div className="card-img"><img src={cover} alt={title} /></div>
                  <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end", pointerEvents: "none" }}>
                    {tags.map(t => (
                      <span key={t} style={{ fontFamily: "var(--body)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", background: "rgba(248,248,245,0.92)", border: "1px solid rgba(50,50,49,0.12)", borderRadius: 999, padding: "4px 10px", whiteSpace: "nowrap" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 14 }}>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
                    <p className="sel-title" style={{ fontFamily: "var(--body)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{title}</p>
                    <span style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-tertiary)" }}>{year}</span>
                  </div>
                  <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75 }}>{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Explorations */}
        <div style={{ marginBottom: 80 }}>
          <div className="section-rule">
            <span className="label"><span className="label-detail">Explorations — </span>Industrial Design</span>
            <span className="label">6 / 9</span>
          </div>
          <div className="exp-grid fade" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "32px 24px" }}>
            {EXPLORATIONS.map(({ href, title, year, cover, tags }) => (
              <Link key={title} href={href} className="exp-card">
                <div style={{ position: "relative", width: "100%" }}>
                  <div className="card-img"><img src={cover} alt={title} /></div>
                  <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end", pointerEvents: "none" }}>
                    {tags.map(t => (
                      <span key={t} style={{ fontFamily: "var(--body)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)", background: "rgba(248,248,245,0.92)", border: "1px solid rgba(50,50,49,0.12)", borderRadius: 999, padding: "4px 10px", whiteSpace: "nowrap" }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 14, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <p className="exp-title" style={{ fontFamily: "var(--body)", fontWeight: 700, fontSize: 13, letterSpacing: "-0.02em" }}>{title}</p>
                  <span style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-tertiary)" }}>{year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
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
