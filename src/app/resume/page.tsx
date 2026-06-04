import Link from "next/link";

export const metadata = { title: "Resume - Lily Liang Portfolio" };

export default function Resume() {
  return (
    <>
      <style>{`
        body { animation: pageFadeIn 400ms ease both; }
        .entry-bullets { list-style: none; margin-top: 10px; }
        .entry-bullets li { font-family: var(--body); font-size: 13px; color: var(--text-secondary); line-height: 1.8; padding-left: 20px; position: relative; margin-bottom: 4px; }
        .entry-bullets li::before { content: ""; position: absolute; left: 0; top: 12px; width: 8px; height: 1px; background: var(--text-tertiary); }
        .pdf-btn { display:inline-flex; align-items:center; gap:8px; font-family:var(--body); font-size:13px; font-weight:500; letter-spacing:0.08em; color:var(--text-primary); border:1px solid var(--hairline); border-radius:999px; padding:9px 18px; transition:background 200ms ease,color 200ms ease; text-decoration:none; }
        .pdf-btn:hover { background:var(--text-primary); color:var(--bg); }
        .page-meta a { color:var(--text-secondary); border-bottom:1px solid var(--hairline); transition:color 200ms ease,border-color 200ms ease; }
        .page-meta a:hover { color:var(--accent-red); border-bottom-color:var(--accent-red); }
        .skill-row { display:grid; grid-template-columns:220px 1fr; gap:48px; padding:12px 0; border-bottom:1px solid var(--hairline); align-items:baseline; }
        .skill-row:last-child { border-bottom:none; }
        .entry-title-link:hover { color:var(--accent-red) !important; }
        @media (max-width:768px) {
          .page-header   { flex-direction:column !important; align-items:flex-start !important; padding:120px 0 40px !important; }
          .page-header h1{ font-size:48px !important; }
          .page-meta     { text-align:left !important; }
          .entry-row     { grid-template-columns:1fr !important; gap:8px !important; }
          .skill-row     { grid-template-columns:1fr !important; gap:4px !important; }
          .cta-resume    { flex-direction:column !important; align-items:flex-start !important; }
          .cta-resume-btns { flex-direction:column !important; align-items:flex-start !important; flex-shrink:unset !important; width:100%; }
        }
      `}</style>

      <div className="wrap">
        {/* Page header */}
        <div className="page-header fade" style={{ padding: "140px 0 32px", borderBottom: "1px solid var(--hairline)", marginBottom: 48, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
            <h1 style={{ fontFamily: "var(--display)", fontWeight: 900, fontStyle: "italic", fontSize: 72, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
              <em style={{ color: "var(--accent-red)" }}>Lily</em> Liang.
            </h1>
            <a href="/uploads/Liang_Lily_Product_Resume.docx" className="pdf-btn" download>↓ Download PDF</a>
          </div>
          <div className="page-meta" style={{ textAlign: "right", fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 2, flexShrink: 0 }}>
            <p>Philadelphia, PA</p>
            <p><a href="mailto:tlianglilydesign@gmail.com">tlianglilydesign@gmail.com</a></p>
            <p><a href="https://linkedin.com/in/lilyliang">LinkedIn</a></p>
            <span style={{ fontFamily: "var(--emphasis)", fontStyle: "italic", fontWeight: 700, color: "var(--text-tertiary)", marginTop: 6, display: "block" }}>Seeking full-time roles · 2026</span>
          </div>
        </div>

        {/* Education */}
        <Section label="Education" num="01">
          <EntryRow date="2024 — 2026" place="Philadelphia, PA" title="University of Pennsylvania" sub="Master of Integrated Product Design · School of Engineering & Applied Science" fade>
            <ul className="entry-bullets">
              <li>Certificate in Engineering Entrepreneurship — School of Engineering &amp; Applied Science</li>
              <li>Coursework: Big Data Analytics, Marketing Data &amp; Analytics, Engineering Product Management, Human Systems Engineering, Problem Framing</li>
              <li>GPA: 3.93 / 4.00</li>
            </ul>
          </EntryRow>
          <EntryRow date="2020 — 2024" place="Atlanta, GA" title="Georgia Institute of Technology" sub="Bachelor of Science in Industrial Design">
            <ul className="entry-bullets">
              <li>GPA: 3.82 / 4.00</li>
            </ul>
          </EntryRow>
        </Section>

        {/* Experience */}
        <Section label="Experience" num="02">
          <EntryRow date="Summer 2025" place="Remote" title="TopProduct" sub="Co-Founder, Design & Research" fade>
            <ul className="entry-bullets">
              <li>Co-founded an AI-powered PM interview prep platform — a LeetCode-style practice tool offering tailored questions, real-time AI feedback, and structured model answers.</li>
              <li>Led product design, brand, and user research; defined the core practice loop and answer-evaluation framework.</li>
              <li>Ran small-scale beta testing with target users; synthesized findings and made the data-driven decision to wind down the project.</li>
            </ul>
          </EntryRow>
          <EntryRow date="Jun — Aug 2023" place="Chengdu, China" title="Jaguar Sign Express" sub="Summer Intern">
            <ul className="entry-bullets">
              <li>Analyzed backend sales data to identify trends and optimize new product listings, improving sales potential.</li>
              <li>Refined store layout and visual presentation based on performance metrics — boosting user experience and conversion.</li>
            </ul>
          </EntryRow>
          <EntryRow date="Sep 2021 — Aug 2022" place="Atlanta, GA" title="Georgia Tech Police Department" sub="Social Media Student Assistant">
            <ul className="entry-bullets">
              <li>Developed social media content covering event announcements and campus safety.</li>
              <li>Created Instagram and Facebook stories — templates, graphics, illustrations, short animations, and brief videos.</li>
              <li>Designed posters and flyers for departmental events and activities.</li>
            </ul>
          </EntryRow>
        </Section>

        {/* Selected Projects */}
        <Section label="Selected Projects" num="03">
          <EntryRow date="Fall 2025 — Spring 2026" place="Philadelphia, PA" title="Little Autonomy ↗" titleHref="/projects/little-autonomy" sub="Interaction Designer · UPenn Studio" fade>
            <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 10 }}>Interaction design empowering children&apos;s independence — systems that support self-directed decision-making in everyday life.</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              {["Interaction Design", "UX Research"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.08em", marginTop: 10 }}>Figma · Field Research · Storyboarding</p>
          </EntryRow>
          <EntryRow date="Spring 2025" place="Philadelphia, PA" title="Circa ↗" titleHref="/projects/circa" sub="Product Designer · Penn Medicine">
            <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 10 }}>A text-based, AI-powered pregnancy support platform built with Penn Medicine — meeting patients where they are, when they need it most.</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              {["Product Design", "User Research", "AI Integration"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.08em", marginTop: 10 }}>Figma · Conversational Design · Penn Medicine collaboration</p>
          </EntryRow>
          <EntryRow date="Fall 2023" place="Philadelphia, PA" title="Tempo ↗" titleHref="/projects/tempo" sub="Lead Designer · AI Restaurant Operations">
            <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 10 }}>An AI-powered system integrating into high-end restaurant operations — enhancing ordering, check-splitting, contactless payment, and task management.</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
              {["UX / UI", "Motion", "Physical Prototyping"].map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.08em", marginTop: 10 }}>Figma · After Effects · Cinema 4D</p>
          </EntryRow>
        </Section>

        {/* Skills */}
        <Section label="Skills" num="04">
          <div style={{ borderTop: "1px solid var(--text-primary)", marginTop: 28 }}>
            {[
              { lbl: "Design",    val: "UX / UI Design, Wireframing, Concept Sketching, Vector & Iconography, Brand Strategy, Video Editing" },
              { lbl: "Making",    val: "3D Modeling, 3D Printing, Laser Cutting, CNC, Arduino, Foam Modeling, Vacuum Forming" },
              { lbl: "Research",  val: "User Interviews, Survey Design, Conjoint Analysis, Personas, Journey Mapping, Usability Testing, Trend Research" },
              { lbl: "Analytics", val: "Hypothesis Testing, Regression, Logistic Regression, Cluster Analysis, Factor Analysis, Machine Learning, Big Data Analytics, Data Wrangling" },
              { lbl: "Software",  val: "Figma, Adobe Creative Suite, Fusion 360, SolidWorks, Keyshot, Miro, Notion, Python, Pandas, SQL, Excel, R" },
              { lbl: "Languages", val: "English — Bilingual Proficiency · Mandarin — Native" },
            ].map(({ lbl, val }) => (
              <div key={lbl} className="skill-row">
                <span style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)" }}>{lbl}</span>
                <span style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-primary)", lineHeight: 1.75 }}>{val}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <div className="cta-resume fade" style={{ padding: "48px 0", borderTop: "1px solid var(--hairline)", marginTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 40 }}>
          <div>
            <h3 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: 32, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 8 }}>
              Let&apos;s <i style={{ fontFamily: "var(--emphasis)", fontWeight: 700, fontStyle: "italic", color: "var(--accent-red)" }}>work together.</i>
            </h3>
            <p style={{ fontFamily: "var(--body)", fontSize: 15, color: "var(--text-secondary)" }}>Currently seeking full-time product design roles for 2026.</p>
          </div>
          <div className="cta-resume-btns" style={{ display: "flex", gap: 12, flexShrink: 0 }}>
            <a href="mailto:tlianglilydesign@gmail.com" className="btn btn-primary">Email me →</a>
            <a href="/uploads/Liang_Lily_Product_Resume.docx" className="btn btn-glass" download>Download PDF</a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Sub-components ───────────────────────────── */
function Section({ label, num, children }: { label: string; num: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 0, padding: "40px 0 8px", borderTop: "1px solid var(--hairline)" }} className="fade">
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 0 }}>
        <span style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent-red)" }}>{label}</span>
        <span style={{ fontFamily: "var(--display)", fontStyle: "italic", fontWeight: 400, fontSize: 13, color: "var(--text-tertiary)" }}>{num}</span>
      </div>
      {children}
    </section>
  );
}

function EntryRow({ date, place, title, titleHref, sub, fade, children }: { date: string; place: string; title: string; titleHref?: string; sub: string; fade?: boolean; children?: React.ReactNode }) {
  return (
    <div className={`entry-row${fade ? " fade" : ""}`} style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, padding: "16px 0", borderTop: "1px solid var(--hairline)", alignItems: "start" }}>
      <div style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-tertiary)", lineHeight: 1.7, paddingTop: 3 }}>
        <strong style={{ display: "block", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: 2 }}>{date}</strong>
        {place}
      </div>
      <div>
        <p style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.3, marginBottom: 2 }}>
          {titleHref ? <Link href={titleHref} className="entry-title-link" style={{ color: "var(--text-primary)", transition: "color 200ms ease" }}>{title}</Link> : title}
        </p>
        <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", fontWeight: 400, marginBottom: 10 }}>{sub}</p>
        {children}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: "var(--body)", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", border: "1px solid var(--hairline)", padding: "4px 10px", borderRadius: 999, color: "var(--text-tertiary)" }}>{children}</span>
  );
}
