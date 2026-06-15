import Link from "next/link";

export const metadata = {
  title: "Resume - Lily Liang Portfolio",
  description:
    "Resume of Lily Liang — product designer based in Philadelphia. Master of Integrated Product Design, Penn. Previously Georgia Tech Industrial Design.",
};

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
        .project-tags { display:flex; flex-wrap:wrap; gap:6px; margin:10px 0 0; }
        .project-tag { display:inline-flex; align-items:center; border:1px solid var(--hairline); border-radius:999px; padding:3px 8px; font-family:var(--body); font-size:11px; font-weight:500; line-height:1.2; color:var(--text-tertiary); background:rgba(255,255,255,0.28); }
        @media (max-width:768px) {
          .page-header   { flex-direction:column !important; align-items:flex-start !important; padding:120px 0 40px !important; }
          .page-header h1{ font-size:48px !important; }
          .page-meta     { text-align:left !important; }
          .entry-row     { grid-template-columns:1fr !important; gap:8px !important; }
          .skill-row     { grid-template-columns:1fr !important; gap:4px !important; }
          .cta-resume    { flex-direction:column !important; align-items:center !important; text-align:center !important; }
          .cta-resume-btns { justify-content:center !important; flex-shrink:unset !important; width:100%; }
        }
      `}</style>

      <div className="wrap">
        {/* Page header */}
        <div className="page-header fade" style={{ padding: "140px 0 32px", borderBottom: "1px solid var(--hairline)", marginBottom: 48, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
            <h1 style={{ fontFamily: "var(--display)", fontWeight: 900, fontStyle: "italic", fontSize: 72, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-primary)" }}>
              <em style={{ color: "var(--accent-red)" }}>Lily</em> <span style={{ fontStyle: "normal", fontWeight: 400, color: "var(--accent-red)" }}>Liang.</span>
            </h1>
            <a href="/uploads/Liang_Lily_Resume.pdf" className="pdf-btn" download>↓ Download PDF</a>
          </div>
          <div className="page-meta" style={{ textAlign: "right", fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 2, flexShrink: 0 }}>
            <p>Philadelphia, PA</p>
            <p><a href="mailto:tlianglilydesign@gmail.com">tlianglilydesign@gmail.com</a></p>
            <p><a href="https://linkedin.com/in/tlianglily">LinkedIn</a></p>
            <span style={{ fontFamily: "var(--emphasis)", fontStyle: "italic", fontWeight: 700, color: "var(--text-tertiary)", marginTop: 6, display: "block" }}>Seeking full-time roles · 2026</span>
          </div>
        </div>

        {/* Education */}
        <Section label="Education" num="01">
          <EntryRow date="2024 — 2026" place="Philadelphia, PA" title="University of Pennsylvania" sub="M.S. Integrated Product Design" fade>
            <ul className="entry-bullets">
              <li>Certificate in Engineering Entrepreneurship</li>
              <li>GPA: 3.93 / 4.0</li>
            </ul>
          </EntryRow>
          <EntryRow date="2020 — 2024" place="Atlanta, GA" title="Georgia Institute of Technology" sub="B.S. Industrial Design · Highest Honors">
            <ul className="entry-bullets">
              <li>GPA: 3.82 / 4.0</li>
            </ul>
          </EntryRow>
        </Section>

        {/* Experience */}
        <Section label="Experience" num="02">
          <EntryRow date="Summer 2025" place="Remote" title="TopProduct" sub="Co-Founder" fade>
            <ul className="entry-bullets">
              <li>Built and beta-tested a web-based PM interview prep MVP featuring AI mentor feedback, role-specific practice modules, timed exercises, difficulty ratings, and community answer comparison</li>
              <li>Synthesized beta feedback and usage data to evaluate product-market fit, then led the decision to sunset the platform based on retention signals</li>
            </ul>
          </EntryRow>
          <EntryRow date="2023 — Present" place="" title="Jaguar Signage" sub="Product & Sales Representative">
            <ul className="entry-bullets">
              <li>Represented Jaguar Signage at ISA International Sign Expo in Las Vegas and Orlando, leading product demos, sales conversations, and distributor outreach for B2B signage clients</li>
            </ul>
          </EntryRow>
          <EntryRow date="Sep 2021 — Aug 2022" place="Atlanta, GA" title="Georgia Tech Police Department" sub="Social Media Assistant">
            <ul className="entry-bullets">
              <li>Produced graphics, illustrations, and motion content for Instagram and Facebook, building a consistent visual language across social channels</li>
            </ul>
          </EntryRow>
        </Section>

        {/* Projects */}
        <Section label="Selected Projects" num="03">
          <EntryRow date="Fall 2025 — Spring 2026" place="" title="Little Autonomy ↗" titleHref="/projects/little-autonomy" sub="Mobile App" tags={["UX Research", "Interaction", "Mobile"]} fade>
            <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 2 }}>Montessori-inspired app helping parents build children&apos;s independence at home through guided practice and environment setup.</p>
            <ul className="entry-bullets">
              <li>Designed a three-layer UX system spanning environment setup, guided practice, and personalized recommendations, giving parents a structured path to building independence without Montessori training</li>
              <li>Ran conjoint analysis on core feature concepts, identifying a &minus;21.2% preference impact for the AI chatbot and driving a pivot to live Montessori educator access</li>
              <li>Conducted mixed-method research across interviews, field visits, surveys, and forum analysis, reframing the product from information delivery to structured daily guidance</li>
            </ul>
          </EntryRow>
          <EntryRow date="Spring 2025" place="" title="CIRCA ↗" titleHref="/projects/circa" sub="Penn Medicine / PEACE Clinic" tags={["Product", "AI", "Healthcare"]}>
            <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 2 }}>AI-powered pregnancy support service designed to build trust with underserved patients before a first prenatal visit.</p>
            <ul className="entry-bullets">
              <li>Shaped CIRCA&apos;s AI persona and hybrid tone model, shifting between calm-factual and warm-validating responses based on question type</li>
              <li>Prototyped a pre-enrollment chatbot preview, directly addressing the trust barrier driving low adoption among the patients CIRCA was built to serve</li>
              <li>Redesigned onboarding flow and copy, including a safety escalation flow that detects high-risk language and routes patients to a human care specialist</li>
              <li>Led Reddit forum analysis of early pregnancy communities, surfacing the emotional vocabulary and language patterns that shaped CIRCA&apos;s tone strategy</li>
            </ul>
          </EntryRow>
          <EntryRow date="Fall 2023" place="" title="Tempo ↗" titleHref="/projects/tempo" sub="Sponsored by NCR Voyix" tags={["UI/UX", "Hardware", "POS"]}>
            <p style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 2 }}>Three-part AI-powered service orchestration suite designed to reduce operational friction in fine dining.</p>
            <ul className="entry-bullets">
              <li>Identified inter-staff communication breakdown as a root cause of service failures and originated TempoChime, a wearable coordination device for dining room staff</li>
              <li>Specified TempoChime&apos;s AI orchestration logic, enabling task assignment by staff role without verbal coordination between servers, runners, and bussers</li>
              <li>Developed information architecture and UX for TempoChime and created CAD models and renderings for the wristband hardware, carrying the concept from coordination logic to physical form</li>
            </ul>
          </EntryRow>
        </Section>

        {/* Skills */}
        <Section label="Skills" num="04">
          <div style={{ borderTop: "1px solid var(--text-primary)", marginTop: 28 }}>
            {[
              { lbl: "Design",          val: "UX/UI · interaction design · service design · product strategy · prototyping · industrial design · CAD · rendering · Figma · Adobe Suite · Fusion 360 · SolidWorks · KeyShot" },
              { lbl: "Research",        val: "User interviews · usability testing · field observation · survey design · forum analysis · conjoint analysis" },
              { lbl: "Data & Technical",val: "Python · SQL · R · Excel · regression analysis · hypothesis testing · cluster/factor analysis · HTML/CSS" },
              { lbl: "Technical Prototyping", val: "Arduino · C++ · sensors · interactive prototypes" },
              { lbl: "Fabrication",     val: "3D printing · laser cutting · CNC · woodworking · foam modeling · silicone casting · sewing · vacuum forming · mold making" },
              { lbl: "Languages",       val: "English and Mandarin Chinese, bilingual proficiency" },
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
            <a href="/projects" className="btn btn-glass">View work →</a>
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

function EntryRow({ date, place, title, titleHref, sub, tags, fade, children }: { date: string; place: string; title: string; titleHref?: string; sub: string; tags?: string[]; fade?: boolean; children?: React.ReactNode }) {
  return (
    <div className={`entry-row${fade ? " fade" : ""}`} style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 48, padding: "16px 0", borderTop: "1px solid var(--hairline)", alignItems: "start" }}>
      <div style={{ fontFamily: "var(--body)", fontSize: 13, color: "var(--text-tertiary)", lineHeight: 1.7, paddingTop: 3 }}>
        <strong style={{ display: "block", fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: 2 }}>{date}</strong>
        {place}
        {tags && <ProjectTags tags={tags} />}
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

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="project-tags" aria-label="Project tags">
      {tags.map((tag) => (
        <span key={tag} className="project-tag">{tag}</span>
      ))}
    </div>
  );
}
