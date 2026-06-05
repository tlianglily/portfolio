import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = {
  title: "Anyi - Lily Liang Portfolio",
  description:
    "A mahjong-inspired table and chair set rooted in Chinese tea culture and traditional craft. Physical product design.",
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="ay-insight">{children}</p>;
}

function Rule() {
  return <div className="ay-rule" />;
}

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="ay-bullet">
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
    <div className="ay-slot" style={{ aspectRatio: aspect }}>
      <span className="ay-slot-label">{label}</span>
      <code className="ay-slot-file">{filename}</code>
      {note && <span className="ay-slot-note">{note}</span>}
    </div>
  );
}

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="ay-img-wrap">
      <img loading="lazy" src={src} alt={alt} />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function AnyiPage() {
  return (
    <>
      <style>{`
        html, body { background: var(--anyi-bg); }

        /* ── Pull-quote insight ──────────────────────────────────────── */
        .ay-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          border-left: 3px solid var(--anyi-primary);
          padding: 12px 16px 12px 15px;
          margin: 28px 0 10px;
          background: rgba(150, 54, 37, 0.03);
          border-radius: 0 8px 8px 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .ay-insight:first-child { margin-top: 0; }
        @media (max-width: 768px) { .ay-insight { font-size: 18px; } }

        /* ── Section divider ─────────────────────────────────────────── */
        .ay-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* ── Subsection label (Chair / Table within Design Translation) ── */
        .ay-sub-label {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--anyi-primary);
          margin: 40px 0 18px;
        }
        .ay-sub-label:first-child { margin-top: 0; }

        /* ── Bold-label bullet ───────────────────────────────────────── */
        .ay-bullet {
          font-family: var(--body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding: 10px 14px;
          margin: 6px 0;
          border-left: 2px solid var(--anyi-primary);
          background: rgba(150, 54, 37, 0.04);
          border-radius: 0 8px 8px 0;
        }
        .ay-bullet strong {
          color: var(--text-primary);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
        }

        /* ── Image placeholder slot ──────────────────────────────────── */
        .ay-slot {
          width: 100%;
          margin: 18px 0;
          background: rgba(150, 54, 37, 0.03);
          border: 1.5px dashed rgba(150, 54, 37, 0.28);
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
        .ay-slot-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: var(--anyi-primary);
          opacity: 0.85;
        }
        .ay-slot-file {
          font-size: 10px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(150, 54, 37, 0.08);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .ay-slot-note {
          font-size: 10px;
          color: var(--text-tertiary);
          font-style: italic;
          max-width: 360px;
          line-height: 1.4;
        }

        /* ── Alternating text + image reference rows ─────────────────── */
        .ay-ref-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
          margin: 28px 0;
        }
        .ay-ref-row-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ay-ref-row-label {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--anyi-primary);
        }
        .ay-ref-row-text p {
          font-family: var(--body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          margin: 0;
        }
        .ay-ref-row-img {
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
        }
        .ay-ref-row-img img {
          width: 100%;
          height: auto;
          display: block;
        }
        .ay-ref-row--flip .ay-ref-row-img { order: -1; }
        @media (max-width: 640px) {
          .ay-ref-row { grid-template-columns: 1fr; gap: 16px; }
          .ay-ref-row--flip .ay-ref-row-img { order: unset; }
        }

        /* ── 2-column equal layout ───────────────────────────────────── */
        .ay-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 18px 0;
        }
        .ay-pair .ay-slot { margin: 0; }

        /* ── 3-column layout ─────────────────────────────────────────── */
        .ay-trio {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 16px 0;
        }
        .ay-trio .ay-slot { margin: 0; }

        /* ── Real image wrapper ──────────────────────────────────────── */
        .ay-img-wrap {
          width: 100%;
          margin: 18px 0;
          border-radius: 14px;
          overflow: hidden;
        }
        .ay-img-wrap img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
        }
        .ay-pair .ay-img-wrap,
        .ay-trio .ay-img-wrap { margin: 0; }

        /* ── 2-column bullet pair ────────────────────────────────────── */
        .ay-bullet-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin: 6px 0;
        }
        .ay-bullet-pair .ay-bullet { margin: 0; }

        /* ── Responsive ──────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .ay-ref-grid  { grid-template-columns: 1fr 1fr; }
          .ay-pair      { grid-template-columns: 1fr; }
          .ay-trio      { grid-template-columns: 1fr 1fr; }
          .ay-bullet-pair { grid-template-columns: 1fr; }
        }
      `}</style>

      <ProjectLayout
        title="Anyi"
        year="Fall 2023"
        tagline="Where Chengdu gathers."
        description={
          <p>
            Anyi is a solo furniture design project rooted in Chengdu&rsquo;s tea house culture.
            Starting from five cultural references &mdash; the city, tea culture, mahjong, bamboo
            and ceramic, and Chengdu lacquerware &mdash; the project translates the material
            language and communal spirit of Chengdu tea houses into a contemporary mahjong table
            and chair set. Each design decision traces back to a specific cultural source, from
            the cosmological three-part structure of the chair to the lacquerware-inspired gloss
            of the table base.
          </p>
        }
        heroImageUrl="/images/covers/cover-mahjong-table-set.webp"
        heroTint="rgba(60, 15, 10, 0.58)"
        accentVar="var(--anyi-primary)"
        meta={[
          { key: "Duration",  value: "Fall 2023" },
          { key: "Team",            value: "Solo project" },
          { key: "Skills",          value: "Cultural research · Ideation · Sketching · Material exploration · 3D modeling · Rendering" },
          { key: "Outcome",   value: "A culturally grounded mahjong table and chair set where every material and construction decision traces back to Chengdu’s tea house tradition." },
        ]}
        sidebarGroups={[
          {
            label: "Anyi",
            items: [
              { id: "overview",            label: "Overview" },
              { id: "cultural-grounding",  label: "Cultural Grounding" },
              { id: "form-exploration",    label: "Form Exploration" },
              { id: "design-translation",  label: "Design Translation" },
              { id: "final-set",           label: "Final Set" },
              { id: "reflection",          label: "Reflection" },
            ],
          },
        ]}
        prevProject={{
          title: "Summitware",
          year: "2024",
          href: "/projects/summit-ware",
          coverUrl: "/images/covers/cover-summit-ware.webp",
          tint: "rgba(15,30,15,0.55)",
        }}
        nextProject={{
          title: "Wash Bus",
          year: "2023",
          href: "/projects/wash-bus",
          coverUrl: "/images/covers/cover-wash-bus.webp",
          tint: "rgba(10, 25, 45, 0.55)",
        }}
        sections={[

          /* ── OVERVIEW ────────────────────────────────────────────────── */
          {
            id: "overview",
            title: "Overview",
            body: (
              <>
                <Insight>A furniture set shaped by the rituals of Chengdu tea houses</Insight>
                <p>In Chengdu, tea houses aren&rsquo;t just places to drink tea &mdash; they&rsquo;re social spaces where people slow down, gather, watch traditional performances, and play mahjong for hours. Anyi takes that culture as its starting point, translating its relaxed rhythm, material language, and communal spirit into a contemporary mahjong table and chair set.</p>
                <p>The name Anyi comes from the Sichuanese expression 安逸: ease, comfort, and the pleasure of unhurried gathering. Rather than solving a design problem, this project asks how furniture can carry cultural memory through form, material, and craft.</p>
                <Img src="/images/anyi/anyi-full-set-render.webp" alt="Hero render — full table and chair set" />
              </>
            ),
          },

          /* ── CULTURAL GROUNDING ──────────────────────────────────────── */
          {
            id: "cultural-grounding",
            title: "Cultural Grounding",
            body: (
              <>
                <Insight>The design began with the culture around mahjong, not the game alone</Insight>
                <p>Five references shaped the project &mdash; the city, the ritual, the game, the materials, and the craft tradition. Together they form a layered system: Chengdu sets the emotional atmosphere; tea culture and mahjong define the ritual being designed for; bamboo, ceramic, and lacquerware supply the material vocabulary.</p>
                <div className="ay-ref-row">
                  <div className="ay-ref-row-text">
                    <span className="ay-ref-row-label">Chengdu</span>
                    <p>Known for its laid-back lifestyle, teahouse culture, and Sichuanese opera. The city&rsquo;s sense of ease became the emotional foundation &mdash; the feeling the furniture should carry, not just the setting it references.</p>
                  </div>
                  <div className="ay-ref-row-img">
                    <img loading="lazy" src="/images/anyi/anyi-chengdu.webp" alt="Chengdu cityscape" />
                  </div>
                </div>

                <div className="ay-ref-row ay-ref-row--flip">
                  <div className="ay-ref-row-text">
                    <span className="ay-ref-row-label">Tea culture</span>
                    <p>Chengdu tea houses are communal spaces for long, unhurried gatherings. The project uses the tea house as a cultural scene rather than treating the furniture as isolated objects.</p>
                  </div>
                  <div className="ay-ref-row-img">
                    <img loading="lazy" src="/images/anyi/anyi-tea-culture.webp" alt="Chengdu tea house" />
                  </div>
                </div>

                <div className="ay-ref-row">
                  <div className="ay-ref-row-text">
                    <span className="ay-ref-row-label">Mahjong</span>
                    <p>More than a game &mdash; a social ritual built around a shared table. Designing for mahjong meant designing for hours of seated play, for four people gathering together, for the texture of tiles on a surface.</p>
                  </div>
                  <div className="ay-ref-row-img">
                    <img loading="lazy" src="/images/anyi/anyi-mahjong.webp" alt="Mahjong scene" />
                  </div>
                </div>

                <div className="ay-ref-row ay-ref-row--flip">
                  <div className="ay-ref-row-text">
                    <span className="ay-ref-row-label">Bamboo and ceramic</span>
                    <p>Selected because they&rsquo;re native to the tea house environment. Bamboo references traditional Chengdu tea house chairs; ceramic comes from the Gaiwan tea vessel. Both carry cultural memory without needing decorative motifs to do it.</p>
                  </div>
                  <div className="ay-ref-row-img">
                    <img loading="lazy" src="/images/anyi/anyi-bamboo-ceramic.webp" alt="Bamboo and ceramic reference" />
                  </div>
                </div>

                <div className="ay-ref-row">
                  <div className="ay-ref-row-text">
                    <span className="ay-ref-row-label">Chengdu lacquerware</span>
                    <p>The table&rsquo;s deep red finish references Chengdu lacquerware &mdash; a historic craft tradition known for its rich color and refined surface. The glossy finish was deliberate: in Chinese craft culture, lacquerware&rsquo;s reflective surface reads as elevated and ceremonial, while keeping the form itself clean.</p>
                  </div>
                  <div className="ay-ref-row-img">
                    <img loading="lazy" src="/images/anyi/anyi-lacquerware.webp" alt="Chengdu lacquerware reference" />
                  </div>
                </div>
              </>
            ),
          },

          /* ── FORM EXPLORATION ────────────────────────────────────────── */
          {
            id: "form-exploration",
            title: "Form Exploration",
            body: (
              <>
                <Insight>Exploring a contemporary language for the Chengdu tea house</Insight>
                <p>Early sketches explored how traditional tea house furniture could be reinterpreted as a contemporary mahjong set &mdash; looking at bamboo chair structures, rounded ceramic forms, and table proportions.</p>
                <p>The central tension was between cultural legibility and contemporary form. Directions that borrowed too directly felt like replicas; directions that moved too far lost their grounding. The resolution was to focus on construction logic rather than surface ornament &mdash; keeping the posture, joinery, and material behavior of traditional forms while stripping away decorative detail.</p>
                <Img src="/images/anyi/anyi-sketches.webp" alt="Ideation and form exploration sketches" />
              </>
            ),
          },

          /* ── DESIGN TRANSLATION ─────────────────────────────────────── */
          {
            id: "design-translation",
            title: "Design Translation",
            body: (
              <>
                {/* ── Chair ── */}
                <p className="ay-sub-label">Chair</p>

                <h4>Chinese cosmology shaped the chair&rsquo;s three-part structure</h4>
                <p>The chair draws from the cosmological structure of the Gaiwan tea vessel &mdash; sky, people, and ground &mdash; translated into back (sky), seat (people), and legs (ground). The structure gives the chair symbolic organization while keeping the form simple. It also creates a quiet visual echo between the object you sit in and the object you drink from.</p>
                <Img src="/images/anyi/anyi-cosmology.webp" alt="Cosmology diagram — sky, people, ground mapped to chair structure" />

                <Rule />

                <h4>Traditional Chengdu bamboo chairs informed the chair&rsquo;s posture</h4>
                <p>The outward-splayed legs, low cross-rung detail, and lightweight structure of traditional Chengdu bamboo chairs informed the overall posture. Rather than reproducing the traditional chair, the construction logic was adapted into a cleaner, more contemporary silhouette &mdash; familiar in spirit, new in form.</p>
                <Img src="/images/anyi/anyi-traditional-chair.webp" alt="Traditional Chengdu bamboo chair reference" />

                <Rule />

                <h4>Bamboo becomes both structure and craft surface</h4>
                <div className="ay-bullet-pair">
                  <Bullet label="Shell:">Seat and back use bamboo weaving &mdash; light, breathable, and tactile</Bullet>
                  <Bullet label="Legs:">Bamboo as primary structural material, connecting the chair to tea house material culture</Bullet>
                </div>
                <Img src="/images/anyi/anyi-chair-material.webp" alt="Chair material diagram" />

                <Rule />

                <h4>Frictional fit joinery keeps the construction language consistent</h4>
                <p>The legs are joined using frictional fit &mdash; a bamboo joinery method without visible hardware or adhesive. Beyond material consistency, it has a functional benefit: the joint can be disassembled and reassembled without degrading the structure. The nodes where legs meet rungs become a visible design detail rather than something hidden.</p>
                <Img src="/images/anyi/anyi-friction-fit.webp" alt="Frictional fit joinery diagram" />

                {/* ── Table ── */}
                <p className="ay-sub-label" style={{ marginTop: 56 }}>Table</p>

                <h4>The table surface frames the play space</h4>
                <div className="ay-bullet-pair">
                  <Bullet label="Bamboo board surface:">Bordered by bamboo strips to create a crafted, framed playing area</Bullet>
                  <Bullet label="Gold binding:">References traditional Chinese furniture metal fittings; marks the boundary of the playing surface</Bullet>
                </div>
                <Img src="/images/anyi/anyi-table-material.webp" alt="Table render — bamboo board surface, bamboo strip frame, ceramic base" />

                <Rule />

                <h4>The lacquerware-inspired finish adds Chengdu&rsquo;s craft identity</h4>
                <p>The deep red glossy finish references Chengdu lacquerware. Gloss over matte was deliberate &mdash; lacquerware&rsquo;s cultural identity lives in its reflective surface. A matte finish would have softened that signal.</p>
                <Img src="/images/anyi/anyi-table-diagram.webp" alt="Table render — lacquered finish" />
              </>
            ),
          },

          /* ── FINAL SET ───────────────────────────────────────────────── */
          {
            id: "final-set",
            title: "Final Set",
            body: (
              <>
                <Insight>A contemporary mahjong set rooted in ease, gathering, and material culture</Insight>
                <p>Seen together, the chair and table reinforce each other: the warm, woven bamboo of the chair sits against the lacquered red of the table base; the lightness of the seating is offset by the weight and ceremony of the table. The set carries the feeling of anyi &mdash; ease, comfort, and the pleasure of gathering &mdash; not through quotation, but through material memory.</p>
                <Img src="/images/anyi/anyi-full-set-render.webp" alt="Full set beauty render of the Anyi table and chair set" />
                <div className="ay-pair">
                  <Img src="/images/anyi/anyi-table-render.webp" alt="Final table render" />
                  <Img src="/images/anyi/anyi-chair-render.webp" alt="Final chair render" />
                </div>
                <Img src="/images/anyi/anyi-close-up-render.webp" alt="Close-up render of the Anyi table and chair set" />
              </>
            ),
          },

          /* ── REFLECTION ──────────────────────────────────────────────── */
          {
            id: "reflection",
            title: "Reflection",
            body: (
              <>
                <p>Anyi was the first project I worked on that didn&rsquo;t start with a problem. There was no pain point to solve, no user frustration to address &mdash; just a culture I grew up close to and wanted to understand more deeply through making. That shift taught me something important: design is not exclusively problem-driven. Sometimes it begins with identity, with material, with a question about what a place or a ritual means and how that meaning can live in an object.</p>
                <p style={{ marginTop: "1.25em" }}>That said, the project never stopped being human-centered. The comfort of sitting for hours at a mahjong table shaped every decision about the chair&rsquo;s posture, the seat height, the breathability of the woven bamboo surface. The human consideration was just quieter &mdash; embedded in the form rather than driven by a brief.</p>
                <p style={{ marginTop: "1.25em" }}>The other thing this project gave me was a clearer relationship with my own cultural identity as a design resource. Chengdu&rsquo;s material language &mdash; bamboo, ceramic, lacquerware &mdash; wasn&rsquo;t just reference material. It was a vocabulary I could actually think in. Anyi taught me that knowing where you come from can make your design instincts more specific, not less universal.</p>
              </>
            ),
          },

        ]}
      />
    </>
  );
}
