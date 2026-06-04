import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = { title: "Color Mixing Marker - Lily Liang Portfolio" };

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="cmm-insight">{children}</p>;
}

function Rule() {
  return <div className="cmm-rule" />;
}

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="cmm-bullet">
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
    <div className="cmm-slot" style={{ aspectRatio: aspect }}>
      <span className="cmm-slot-label">{label}</span>
      <code className="cmm-slot-file">{filename}</code>
      {note && <span className="cmm-slot-note">{note}</span>}
    </div>
  );
}

function ContribSlot() {
  return (
    <div className="cmm-contrib">
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

export default function ColorMixingMarkerPage() {
  return (
    <>
      <style>{`
        html, body { background: var(--cmm-bg); }

        /* ── Pull-quote insight ──────────────────────────────────────── */
        .cmm-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 900;
          font-size: clamp(17px, 1.7vw, 22px);
          line-height: 1.35;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          border-left: 3px solid var(--cmm-primary);
          padding-left: 14px;
          margin: 28px 0 10px;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .cmm-insight:first-child { margin-top: 0; }

        /* ── Section divider ─────────────────────────────────────────── */
        .cmm-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* ── Bold-label bullet ───────────────────────────────────────── */
        .cmm-bullet {
          font-family: var(--body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding: 10px 14px;
          margin: 6px 0;
          border-left: 2px solid var(--cmm-primary);
          background: rgba(28, 158, 142, 0.04);
          border-radius: 0 8px 8px 0;
        }
        .cmm-bullet strong {
          color: var(--text-primary);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
        }

        /* ── Image placeholder slot ──────────────────────────────────── */
        .cmm-slot {
          width: 100%;
          margin: 18px 0;
          background: rgba(28, 158, 142, 0.03);
          border: 1.5px dashed rgba(28, 158, 142, 0.28);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          text-align: center;
          box-sizing: border-box;
        }
        .cmm-slot-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: var(--cmm-primary);
          opacity: 0.85;
        }
        .cmm-slot-file {
          font-size: 10px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(28, 158, 142, 0.08);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .cmm-slot-note {
          font-size: 10px;
          color: var(--text-tertiary);
          font-style: italic;
          max-width: 360px;
          line-height: 1.4;
        }

        /* ── 2-column equal layout ───────────────────────────────────── */
        .cmm-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 18px 0;
        }
        .cmm-pair .cmm-slot { margin: 0; }

        /* ── 3-column layout ─────────────────────────────────────────── */
        .cmm-trio {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 16px 0;
        }
        .cmm-trio .cmm-slot { margin: 0; }

        /* ── Contribution placeholder ────────────────────────────────── */
        .cmm-contrib {
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
        .cmm-contrib svg { color: #8C7200; flex-shrink: 0; }

        /* ── Video embed ─────────────────────────────────────────────── */
        .cmm-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 14px;
          overflow: hidden;
          margin: 0 0 24px;
          background: #000;
        }
        .cmm-video iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* ── Responsive ──────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .cmm-pair { grid-template-columns: 1fr; }
          .cmm-trio { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <ProjectLayout
        title="Color Mixing Marker"
        year="Fall 2021"
        tagline="Create your own colors."
        description={
          <p>
            Color Mixing Marker is a rocket-shaped teaching toy designed for 5-year-olds. It holds
            separate primary-color ink chambers inside a single marker body. By pushing the wing
            controls to release and mix different amounts of ink, children can create their own
            colors and draw with them immediately &mdash; turning an abstract concept into a
            hands-on making experience.
          </p>
        }
        heroImageUrl="/images/cmm-banner.webp"
        heroTint="rgba(5,10,20,0.35)"
        accentVar="var(--cmm-primary)"
        meta={[
          { key: "Duration",        value: "Fall 2021" },
          { key: "Team",            value: "Solo project" },
          { key: "Skills",          value: "Toy design · Product ideation · Physical prototyping · CAD modeling · Interaction design · 3D printing · Rendering" },
          { key: "Outcome",   value: "A rocket-shaped marker concept that lets children release and mix primary-color inks to discover how new colors are made." },
        ]}
        sidebarGroups={[
          {
            label: "Color Mixing Marker",
            items: [
              { id: "overview",     label: "Overview" },
              { id: "concept",      label: "Concept" },
              { id: "prototype",    label: "Prototype" },
              { id: "final-design", label: "Final Design" },
              { id: "reflection",   label: "Reflection" },
            ],
          },
        ]}
        prevProject={{
          title: "Horizon",
          year: "2022",
          href: "/projects/horizon",
          coverUrl: "/images/cover-horizon.webp",
          tint: "rgba(10,10,35,0.58)",
        }}
        nextProject={{
          title: "Medegg",
          year: "2024",
          href: "/projects/medegg",
          coverUrl: "/images/cover-medegg.webp",
          tint: "rgba(30,15,5,0.55)",
        }}
        sections={[

          /* ── OVERVIEW ────────────────────────────────────────────────── */
          {
            id: "overview",
            title: "Overview",
            body: (
              <>
                <Insight>A marker that turns color mixing into a hands-on drawing experience</Insight>
                <p>Most color-mixing toys show children that colors combine &mdash; through filters, light, or experiments. But they don&rsquo;t let children make a color and immediately use it. Color Mixing Marker closes that gap: a child pushes a wing to release red ink, pushes another to add yellow, and draws with the orange they just created.</p>
                <p>The product contains separate primary-color ink chambers inside one marker body. Releasing different amounts of ink lets children experiment with combinations and see the result right at the tip &mdash; no separate mixing step, no waiting.</p>
                <div className="cmm-video">
                  <iframe
                    src="https://www.youtube.com/embed/S_h2v0N6ohg"
                    title="Color Mixing Marker — overview video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </>
            ),
          },

          /* ── CONCEPT ────────────────────────────────────────────────── */
          {
            id: "concept",
            title: "Concept",
            body: (
              <>
                <Insight>Existing toys showed color relationships &mdash; but didn&rsquo;t let children make anything</Insight>
                <p>Color-mixing toys on the market use overlapping filters, colored glasses, or light boxes to demonstrate how colors combine. They&rsquo;re good at showing the relationship, but the child is a passive observer. The concept here was different: combine learning and making into one object, so children discover color by creating it themselves.</p>
                <img
                  src="/images/cmm-existing-toys.png"
                  alt="Existing color-mixing toys on the market"
                  style={{ width: "100%", borderRadius: 14, display: "block", margin: "18px 0", mixBlendMode: "multiply" }}
                />

                <Rule />

                <h4>The rocket form made the interaction feel like play, not instruction</h4>
                <p>Five aesthetic directions were explored &mdash; space, woodland, ocean, animal characters, and abstract patterns. The space and rocket direction won because it gave the fin controls a natural home: the rocket&rsquo;s fins became the ink-release mechanism, so the interaction felt like part of the object&rsquo;s character rather than a functional add-on bolted to the side. It also made the marker feel clearly like a toy rather than a school supply.</p>
                <figure style={{ margin: "18px 0", width: "100%" }}>
                  <img
                    src="/images/cmm-aesthetic-sketches.png"
                    alt="Five aesthetic direction sketches"
                    style={{ width: "100%", borderRadius: 10, display: "block", mixBlendMode: "multiply" }}
                    data-lightbox
                  />
                  <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                    Five aesthetic directions explored — abstract, space/rocket, woodland, ocean, and animal characters
                  </figcaption>
                </figure>
              </>
            ),
          },

          /* ── PROTOTYPE ──────────────────────────────────────────────── */
          {
            id: "prototype",
            title: "Prototype",
            body: (
              <>
                <Insight>The lo-fidelity model proved the concept &mdash; and revealed the mechanism needed to change</Insight>
                <p>The first model used a modified syringe to test whether multiple ink chambers could fit inside a single marker body and feed into one tip. It confirmed the concept worked spatially, but the push-plunger mechanism required too much force and precision for a young child. That finding drove the shift to a wing-based release system in the next phase.</p>
                <figure style={{ margin: "18px 0" }}>
                  <img
                    src="/images/cmm-lofi-model.webp"
                    alt="Lo-fidelity syringe model testing multi-chamber concept"
                    style={{ width: "100%", borderRadius: 14, display: "block" }}
                  />
                  <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                    Lo-fidelity model — modified syringe testing whether multiple ink chambers could fit inside a single marker body and feed into one tip
                  </figcaption>
                </figure>

                <Rule />

                <h4>Two 3D-printed iterations refined the grip, proportions, and wing placement</h4>
                <p>The first 3D-printed prototype established the rocket silhouette and tested the wing controls at a real scale. The fins were short and wide, and holding the marker revealed the grip needed to be longer &mdash; a child&rsquo;s hand wanted more body to hold onto while operating the wings with their fingers.</p>
                <p>The second iteration lengthened the body, made the transparent upper section more prominent so the ink chambers are visible, and repositioned the wings closer to the tip where the child&rsquo;s fingers naturally rest. These changes made the interaction feel intuitive rather than effortful.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "18px 0" }}>
                  <figure style={{ margin: 0 }}>
                    <img src="/images/cmm-prototype-v1.webp"   alt="Iteration 1 — view A" style={{ width: "100%", borderRadius: 10, display: "block", marginBottom: 6 }} />
                    <img src="/images/cmm-prototype-v1-2.webp" alt="Iteration 1 — view B" style={{ width: "100%", borderRadius: 10, display: "block" }} />
                    <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                      Iteration 1 — short fins, initial rocket silhouette
                    </figcaption>
                  </figure>
                  <figure style={{ margin: 0 }}>
                    <img src="/images/cmm-prototype-v2.webp"   alt="Iteration 2 — view A" style={{ width: "100%", borderRadius: 10, display: "block", marginBottom: 6 }} />
                    <img src="/images/cmm-prototype-v2-2.webp" alt="Iteration 2 — view B" style={{ width: "100%", borderRadius: 10, display: "block" }} />
                    <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                      Iteration 2 — lengthened body, repositioned wings
                    </figcaption>
                  </figure>
                  <figure style={{ margin: 0 }}>
                    <img src="/images/cmm-hand-hold-1.webp" alt="Hand-hold comparison — V1" style={{ width: "100%", borderRadius: 10, display: "block", marginBottom: 6 }} />
                    <img src="/images/cmm-hand-hold-2.webp" alt="Hand-hold comparison — V2" style={{ width: "100%", borderRadius: 10, display: "block" }} />
                    <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                      V1 vs V2 in hand — grip length and fin placement comparison
                    </figcaption>
                  </figure>
                </div>
              </>
            ),
          },

          /* ── FINAL DESIGN ───────────────────────────────────────────── */
          {
            id: "final-design",
            title: "Final Design",
            body: (
              <>
                <Insight>Wing controls let children release and mix ink in four steps</Insight>
                <p>In the final interaction, children push a wing down to release ink, hold it to control the amount, and push it back up to stop the flow. Repeating the process with a different primary color creates a mixed color at the tip, ready to draw with.</p>
                <img
                  src="/images/cmm-how-it-works.webp"
                  alt="How it works — 4-step wing interaction diagram"
                  style={{ width: "100%", borderRadius: 14, display: "block", margin: "18px 0", mixBlendMode: "multiply" }}
                  data-lightbox
                />

                <Rule />

                <p>The final CAD model shows the rocket-shaped body, transparent upper section that makes the ink chambers visible, three primary-color ink chambers, and the space-themed exterior graphics. The design combines the familiarity of a marker with the imagination of a toy.</p>
                <figure style={{ margin: "18px 0" }}>
                  <img
                    src="/images/cmm-cad-exploded.png"
                    alt="Exploded view — components separated to show ink chambers and assembly"
                    style={{ width: "100%", borderRadius: 14, display: "block" }}
                    data-lightbox
                  />
                  <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                    Exploded view — ink chambers, wing controls, and outer shell
                  </figcaption>
                </figure>
                <figure style={{ margin: "12px 0" }}>
                  <img
                    src="/images/cmm-cad-2.png"
                    alt="CAD model — alternate angle showing fin and wing detail"
                    style={{ width: "100%", borderRadius: 14, display: "block" }}
                    data-lightbox
                  />
                  <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                    Alternate angle — cap removed to show visible ink chambers
                  </figcaption>
                </figure>
                <figure style={{ margin: "12px 0" }}>
                  <img
                    src="/images/cmm-cad-1.png"
                    alt="CAD model — rocket body with space-themed exterior graphics"
                    style={{ width: "100%", borderRadius: 14, display: "block" }}
                    data-lightbox
                  />
                  <figcaption style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: 8, paddingLeft: 2 }}>
                    Final CAD — rocket body, transparent upper section, space-themed graphics
                  </figcaption>
                </figure>
              </>
            ),
          },

          /* ── REFLECTION ─────────────────────────────────────────────── */
          {
            id: "reflection",
            title: "Reflection",
            body: (
              <>
                <p>Color Mixing Marker taught me how a teaching toy can make an abstract concept easier to understand through direct manipulation. The biggest challenge was translating &ldquo;color mixing&rdquo; into a physical mechanism that felt simple enough for a young child but still clearly showed cause and effect &mdash; and the lo-fidelity model was what made that problem visible early enough to solve it.</p>
                <p>The project also pushed me to think about how form language supports learning. The rocket shape made the marker more playful, while the wing controls turned the functional ink release into part of the toy&rsquo;s character &mdash; so the child isn&rsquo;t operating a mechanism, they&rsquo;re flying a rocket.</p>
              </>
            ),
          },

        ]}
      />
    </>
  );
}
