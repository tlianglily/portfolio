import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = {
  title: "Summitware - Lily Liang Portfolio",
  description:
    "Ergonomic cookware redesigned for outdoor adventure — lightweight, packable, and built around how people actually cook in the backcountry.",
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="sw-insight">{children}</p>;
}

function Rule() {
  return <div className="sw-rule" />;
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
    <div className="sw-slot" style={{ aspectRatio: aspect }}>
      <span className="sw-slot-label">{label}</span>
      <code className="sw-slot-file">{filename}</code>
      {note && <span className="sw-slot-note">{note}</span>}
    </div>
  );
}

function Img({
  src,
  alt,
  className = "",
  caption,
  lightbox,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  lightbox?: boolean;
}) {
  return (
    <div className={`sw-img-wrap ${className}`}>
      <img loading="lazy" src={src} alt={alt} {...(lightbox ? { "data-lightbox": true } : {})} />
      {caption && <p className="sw-img-caption">{caption}</p>}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function SummitWarePage() {
  return (
    <>
      <style>{`
        html, body { background: var(--sw-bg); }

        /* ── Insight — italic display pull-quote ─────────────────────── */
        .sw-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          border-left: 3px solid var(--sw-primary);
          padding: 12px 16px 12px 15px;
          margin: 28px 0 10px;
          background: rgba(122, 148, 104, 0.03);
          border-radius: 0 8px 8px 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .sw-insight:first-child { margin-top: 0; }
        @media (max-width: 768px) { .sw-insight { font-size: 18px; } }

        /* ── Section divider ─────────────────────────────────────────── */
        .sw-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* ── Image placeholder ───────────────────────────────────────── */
        .sw-slot {
          width: 100%; min-width: 0;
          margin: 18px 0;
          background: rgba(122, 148, 104, 0.05);
          border: 1.5px dashed rgba(122, 148, 104, 0.4);
          border-radius: 14px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 6px; padding: 20px; text-align: center;
        }
        .sw-slot-label {
          font-family: var(--body); font-size: 12px; font-weight: 600;
          color: #3D5C30; opacity: 0.9;
        }
        .sw-slot-file {
          font-size: 10px; font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(122, 148, 104, 0.12);
          padding: 2px 8px; border-radius: 4px;
          word-break: break-all; overflow-wrap: break-word; max-width: 100%;
        }
        .sw-slot-note {
          font-size: 10px; color: var(--text-tertiary);
          font-style: italic; max-width: 380px; line-height: 1.5;
        }

        /* ── Real image wrapper ──────────────────────────────────────── */
        .sw-img-wrap {
          width: 100%;
          margin: 18px 0;
          border-radius: 14px;
          overflow: hidden;
        }
        .sw-img-wrap img {
          width: 100%;
          height: auto;
          display: block;
        }
        .sw-img-caption {
          font-family: var(--body);
          font-size: 12px;
          line-height: 1.5;
          color: var(--text-tertiary);
          margin: 8px 0 0;
        }
        .sw-img--blend img {
          mix-blend-mode: multiply;
        }
        .sw-img--crop-top {
          aspect-ratio: 16 / 10;
        }
        .sw-img--crop-top img {
          height: 100%;
          object-fit: cover;
          object-position: center 58%;
        }

        /* ── Version tag pills ───────────────────────────────────────── */
        .sw-tag {
          display: inline-flex; align-items: center;
          font-family: var(--body); font-size: 10px; font-weight: 700;
          letter-spacing: 0.09em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 999px; width: fit-content;
        }
        .sw-tag--before { background: rgba(50, 50, 49, 0.07); color: var(--text-tertiary); }
        .sw-tag--mid    { background: rgba(122, 148, 104, 0.14); color: #4A6B3A; }
        .sw-tag--after  { background: rgba(122, 148, 104, 0.24); color: #3A5E2B; }

        /* ── 3-column prototype evolution grid ───────────────────────── */
        .sw-v-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin: 20px 0;
          align-items: start;
        }
        .sw-v-col { display: flex; flex-direction: column; gap: 8px; }
        .sw-v-col > .sw-slot { margin: 0; }
        .sw-v-cap { display: flex; flex-direction: column; gap: 5px; }
        .sw-v-cap p {
          font-size: 12px; color: var(--text-secondary);
          line-height: 1.55; margin: 0;
        }

        /* ── User testing quotes ─────────────────────────────────────── */
        .sw-quote-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin: 24px 0 8px;
        }
        .sw-quote {
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-width: 0;
          padding: 18px;
          background: rgba(122, 148, 104, 0.06);
          border: 1px solid rgba(122, 148, 104, 0.18);
          border-radius: 8px;
        }
        .sw-quote blockquote {
          font-family: var(--display);
          font-style: italic;
          font-weight: 700;
          font-size: clamp(15px, 1.35vw, 18px);
          line-height: 1.35;
          color: var(--text-primary);
          margin: 0;
          text-align: center;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .sw-quote p {
          font-family: var(--body);
          font-size: 12px;
          line-height: 1.55;
          color: var(--text-secondary);
          margin: 0;
        }

        /* ── Rendering gallery ──────────────────────────────────────── */
        .sw-render-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin: 18px 0;
        }
        .sw-render-grid .sw-img-wrap {
          aspect-ratio: 3 / 2;
          margin: 0;
          border-radius: 14px;
        }
        .sw-render-grid .sw-img-wrap img {
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }

        /* ── Responsive ──────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .sw-v-grid { grid-template-columns: 1fr 1fr; }
          .sw-render-grid { grid-template-columns: 1fr; }
          .sw-quote-grid { grid-template-columns: 1fr; gap: 24px; }
          .sw-quote blockquote { text-align: left; }
        }
        @media (max-width: 400px) {
          .sw-v-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <ProjectLayout
        title="Summitware"
        year="2024"
        tagline="Eating slower, by design."
        description={
          <p>
            Summitware is a glass bowl with a mountain-like sculptural pattern inside that encourages
            mindful eating through resistance and tactile engagement. It went through three physical
            iterations — from sketch models to 3D-printed prototypes — each refined to balance the
            mindfulness effect with real usability.
          </p>
        }
        heroImageUrl="/images/covers/cover-summit-ware.webp"
        heroTint="rgba(15, 30, 15, 0.55)"
        accentVar="var(--sw-primary)"
        meta={[
          { key: "Duration",        value: "Fall 2024" },
          { key: "Skills",          value: "Solo project" },
          { key: "My Contribution", value: "Concept · ideation · sketch modeling · form exploration · 3D modeling · physical prototyping · user testing" },
          { key: "Outcome", value: "A final-prototype bowl whose mountain pattern slows eating pace, encourages two-handed holding, and limits overeating — without any instructions to the user" },
        ]}
        sidebarGroups={[
          {
            label: "Summitware",
            items: [
              { id: "overview",     label: "Overview" },
              { id: "process",      label: "Process" },
              { id: "exploration",  label: "Exploration" },
              { id: "user-testing", label: "User Testing" },
              { id: "rendering",    label: "Rendering" },
            ],
          },
        ]}
        prevProject={{
          title: "MedEgg",
          year: "2024",
          href: "/projects/medegg",
          coverUrl: "/images/covers/cover-medegg.webp",
          tint: "rgba(30,15,5,0.55)",
        }}
        nextProject={{
          title: "Anyi",
          year: "Fall 2023",
          href: "/projects/anyi",
          coverUrl: "/images/covers/cover-mahjong-table-set.webp",
          tint: "rgba(50, 10, 10, 0.55)",
        }}
        sections={[

          /* ── OVERVIEW ───────────────────────────────────────────────── */
          {
            id: "overview",
            title: "Overview",
            body: (
              <>
                <Insight>Most people eat too fast because nothing in their environment asks them to slow down</Insight>
                <p>Summitware introduces a mountain-like sculptural pattern inside the bowl that adds gentle resistance when scooping. The pattern prompts the diner to navigate around it, slowing their pace and drawing attention back to eating — without any instruction.</p>
                <Img
                  src="/images/summit-ware/summit-ware-overview.webp"
                  alt="Summitware bowl overview render"
                  className="sw-img--crop-top"
                  lightbox
                />
              </>
            ),
          },

          /* ── PROCESS ────────────────────────────────────────────────── */
          {
            id: "process",
            title: "Process",
            body: (
              <>
                <Insight>Eleven directions, three versions, one calibration problem</Insight>
                <p>Early ideation spanned bent utensils, obstacle-filled bowls, and timed covers. Sketch models in clay and paper narrowed the direction — working physically revealed how surfaces felt in hand in ways drawing couldn&rsquo;t. Twelve form silhouettes were explored before landing on a wide, shallow bowl with a clean exterior that puts all visual interest inside.</p>

                <Img
                  src="/images/summit-ware/summit-ware-ideation.webp"
                  alt="Summitware ideation sketches exploring slow-eating bowl concepts"
                  className="sw-img--blend"
                  caption="Early concept sketches explored ways to slow eating through portioning, friction, timed access, and visual perception."
                  lightbox
                />
                <Img
                  src="/images/summit-ware/summit-ware-form-exploration.webp"
                  alt="Summitware form exploration models and texture studies"
                  className="sw-img--blend"
                  caption="Material studies and quick physical models tested texture, grip, bowl proportion, and how different interior obstacles changed the eating experience."
                  lightbox
                />
              </>
            ),
          },

          /* ── EXPLORATION ─────────────────────────────────────────────── */
          {
            id: "exploration",
            title: "Exploration",
            body: (
              <>
                <p>Three prototypes followed. Version 1 spread the pattern across the entire bottom — too restrictive, and the solid base made it un-stackable. Version 2 moved the pattern to the center and hollowed the mountains, improving balance, but sharp edges created more friction than intended. Version 3 softened the curves: scooping became intuitive without losing the challenge that makes the bowl work.</p>

                <div className="sw-v-grid">
                  <div className="sw-v-col">
                    <Img src="/images/summit-ware/summit-ware-v1.webp" alt="Summitware version 1 model" />
                    <div className="sw-v-cap">
                      <span className="sw-tag sw-tag--before">Version 1</span>
                      <p>Pattern across the entire bottom — too restrictive, and the solid base made it un-stackable.</p>
                    </div>
                  </div>
                  <div className="sw-v-col">
                    <Img src="/images/summit-ware/summit-ware-v2.webp" alt="Summitware version 2 model" />
                    <div className="sw-v-cap">
                      <span className="sw-tag sw-tag--mid">Version 2</span>
                      <p>Pattern centered and mountains hollowed — better balance, but sharp edges created more friction than intended.</p>
                    </div>
                  </div>
                  <div className="sw-v-col">
                    <Img src="/images/summit-ware/summit-ware-v3.webp" alt="Summitware version 3 model" />
                    <div className="sw-v-cap">
                      <span className="sw-tag sw-tag--after">Version 3</span>
                      <p>Softened curves: scooping became intuitive without losing the challenge that makes the bowl work.</p>
                    </div>
                  </div>
                </div>
              </>
            ),
          },

          /* ── USER TESTING ───────────────────────────────────────────── */
          {
            id: "user-testing",
            title: "User Testing",
            body: (
              <>
                <Insight>The bowl changed how people held it — and they didn&rsquo;t notice until we asked</Insight>
                <p>Users appreciated that the pattern stayed centered — it slowed them down without feeling intrusive. The resistance naturally prompted two-handed holding, creating a more deliberate eating posture. It also limited portion size per scoop without any visible instruction.</p>

                <div className="sw-quote-grid">
                  <div className="sw-quote">
                    <blockquote>&ldquo;I like that the pattern is in the middle&mdash;it slows me down just enough without being too annoying.&rdquo;</blockquote>
                    <p>Users value that the pattern is only in the middle, as it slows them down without being intrusive.</p>
                  </div>
                  <div className="sw-quote">
                    <blockquote>&ldquo;Because the bowl resists when I scoop, I naturally hold it with my other hand, which keeps me more present.&rdquo;</blockquote>
                    <p>The resistance from the pattern prompts users to hold the bowl with their other hand, creating a more deliberate posture.</p>
                  </div>
                  <div className="sw-quote">
                    <blockquote>&ldquo;You can&rsquo;t scoop too much food at once because of the pattern, which makes me eat more slowly.&rdquo;</blockquote>
                    <p>The pattern subtly limits overeating by making it harder to scoop large amounts of food at once.</p>
                  </div>
                </div>
                <Img
                  src="/images/summit-ware/summit-ware-user-testing.webp"
                  alt="User testing photos showing Summitware in use"
                  lightbox
                />
              </>
            ),
          },

          /* ── RENDERING ──────────────────────────────────────────────── */
          {
            id: "rendering",
            title: "Rendering",
            body: (
              <>
                <Img
                  src="/images/summit-ware/summit-ware-rendering-4.webp"
                  alt="Top-down Summitware render with food"
                  lightbox
                />
                <div className="sw-render-grid">
                  <Img src="/images/summit-ware/summit-ware-rendering-2.webp" alt="Summitware render with spoon and rice" lightbox />
                  <Img src="/images/summit-ware/summit-ware-rendering-3.webp" alt="Summitware render in dining context" lightbox />
                </div>
                <Img
                  src="/images/summit-ware/summit-ware-rendering-details.webp"
                  alt="Summitware rendering details"
                  lightbox
                />
              </>
            ),
          },

        ]}
      />
    </>
  );
}
