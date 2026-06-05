import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = {
  title: "Horizon - Lily Liang Portfolio",
  description:
    "A smart countdown timer and alarm system designed for the bedroom — physical product design with embedded electronics and custom light interactions.",
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="hz-insight">{children}</p>;
}

function Rule() {
  return <div className="hz-rule" />;
}

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="hz-bullet">
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
    <div className="hz-slot" style={{ aspectRatio: aspect }}>
      <span className="hz-slot-label">{label}</span>
      <code className="hz-slot-file">{filename}</code>
      {note && <span className="hz-slot-note">{note}</span>}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function HorizonPage() {
  return (
    <>
      <style>{`
        html, body { background: var(--horizon-bg); }

        /* Insight — bold italic callout with accent border */
        .hz-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          border-left: 3px solid var(--horizon-primary);
          padding: 12px 16px 12px 15px;
          margin: 28px 0 10px;
          background: rgba(201, 121, 65, 0.03);
          border-radius: 0 8px 8px 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .hz-insight:first-child { margin-top: 0; }
        @media (max-width: 768px) { .hz-insight { font-size: 18px; } }

        /* Section divider */
        .hz-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* Bold-label bullet */
        .hz-bullet {
          font-family: var(--body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding: 10px 14px;
          margin: 6px 0;
          border-left: 2px solid var(--horizon-primary);
          background: rgba(201, 121, 65, 0.04);
          border-radius: 0 8px 8px 0;
        }
        .hz-bullet strong {
          color: var(--text-primary);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
        }

        /* Image placeholder slot */
        .hz-slot {
          width: 100%;
          margin: 18px 0;
          background: rgba(201, 121, 65, 0.04);
          border: 1.5px dashed rgba(201, 121, 65, 0.35);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          text-align: center;
        }
        .hz-slot-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: var(--horizon-primary);
          opacity: 0.8;
        }
        .hz-slot-file {
          font-size: 10px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(201, 121, 65, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .hz-slot-note {
          font-size: 10px;
          color: var(--text-tertiary);
          font-style: italic;
          max-width: 360px;
        }

        /* 2-column image pair */
        .hz-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 18px 0;
        }
        .hz-pair .hz-slot { margin: 0; }

        /* Hero pair: wider render + portrait poster */
        .hz-hero-pair {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 12px;
          margin: 18px 0;
          align-items: start;
        }
        .hz-hero-pair .hz-slot { margin: 0; }

        /* Real image wrapper */
        .hz-img-wrap {
          width: 100%;
          margin: 18px 0;
          border-radius: 14px;
          overflow: hidden;
        }
        .hz-img-wrap img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
        }
        .hz-pair .hz-img-wrap { margin: 0; }

        /* 3-column state grid */
        .hz-trio {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 18px 0;
        }
        .hz-trio .hz-img-wrap { margin: 0; }

        /* Image caption */
        .hz-fig {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin: 18px 0;
        }
        .hz-fig .hz-img-wrap { margin: 0; }
        .hz-pair .hz-fig,
        .hz-trio .hz-fig { margin: 0; }

        /* How-it-works 2×2 card grid */
        .hz-hiw {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 18px 0;
        }
        .hz-hiw-card {
          display: flex;
          flex-direction: column;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--hairline);
          background: rgba(201, 121, 65, 0.07);
        }
        .hz-hiw-card img {
          width: 100%;
          height: auto;
          display: block;
        }
        .hz-hiw-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 10px 14px 12px;
          line-height: 1.4;
        }
        .hz-hiw-label strong {
          display: block;
          color: var(--text-primary);
          font-size: 13px;
          margin-bottom: 2px;
        }
        @media (max-width: 640px) {
          .hz-hiw { grid-template-columns: 1fr; }
        }
        .hz-figcap {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--horizon-primary);
          text-align: center;
          opacity: 0.85;
        }

        @media (max-width: 640px) {
          .hz-trio { grid-template-columns: 1fr; }
        }

        /* Video embed */
        .hz-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 14px;
          overflow: hidden;
          margin: 0 0 28px;
        }
        .hz-video iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .hz-pair, .hz-hero-pair { grid-template-columns: 1fr; }
        }
      `}</style>

      <ProjectLayout
        title="Horizon"
        year="2022"
        tagline="Wake up with light."
        description={
          <p>
            Horizon is a smart bedside timer built with Arduino, NeoPixel LEDs, and a rotary
            encoder. Users rotate the sun to set a sleep duration; as the night passes, the
            mountain landscape lights up layer by layer. When the timer ends, the sun gradually
            brightens into warm tones &mdash; a sunrise simulation instead of an alarm sound.
          </p>
        }
        heroImageUrl="/images/covers/cover-horizon.webp"
        heroTint="rgba(10,10,35,0.58)"
        accentVar="var(--horizon-primary)"
        meta={[
          { key: "Duration",        value: "Spring 2022" },
          { key: "Team",            value: "Solo project" },
          { key: "Skills",          value: "Interaction design · Physical prototyping · Arduino · LED programming · Form exploration · 3D modeling · Product rendering" },
          { key: "Outcome",         value: "A smart bedside object that helps users set a sleep duration, understand time remaining through ambient light, and wake up through a gradual sunrise effect." },
        ]}
        sidebarGroups={[
          {
            label: "Horizon",
            items: [
              { id: "overview",      label: "Overview" },
              { id: "concept",       label: "Concept" },
              { id: "prototype",     label: "Prototype" },
              { id: "final-design",  label: "Final Design" },
            ],
          },
        ]}
        prevProject={{
          title: "Wash Bus",
          year: "2023",
          href: "/projects/wash-bus",
          coverUrl: "/images/covers/cover-wash-bus.webp",
          tint: "rgba(10,25,45,0.55)",
        }}
        nextProject={{
          title: "Color Mixing Marker",
          year: "Fall 2021",
          href: "/projects/color-mixing-marker",
          coverUrl: "/images/cmm/cmm-banner.webp",
          tint: "rgba(5,10,20,0.35)",
        }}
        sections={[

          /* ── OVERVIEW ────────────────────────────────────────────────────── */
          {
            id: "overview",
            title: "Overview",
            body: (
              <>
                <div className="hz-video">
                  <iframe
                    src="https://www.youtube.com/embed/4GL_K2_TfIQ"
                    title="Horizon overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <Insight>A sleep timer that turns time into a quiet light experience</Insight>
                <p>Horizon replaces the alarm clock&rsquo;s abrupt jolt with something quieter. Rotate the sun to set a timer from 30 minutes to 10 hours. As time passes, the landscape lights up layer by layer &mdash; a soft visual cue readable at a glance without checking a phone. When the timer ends, the sun fills with warm light and gradually brightens, waking the user through a sunrise simulation rather than a sound.</p>
                <div className="hz-img-wrap">
                  <img src="/images/horizon/horizon-hero-render.webp" alt="Horizon on a bedside table — sunrise simulation in context" data-lightbox />
                </div>
              </>
            ),
          },

          /* ── CONCEPT ─────────────────────────────────────────────────────── */
          {
            id: "concept",
            title: "Concept",
            body: (
              <>
                <Insight>A celebration countdown came first &mdash; and revealed what the form needed to do</Insight>
                <p>The first direction was a hot air balloon countdown timer for birthdays and anniversaries &mdash; same electronics, same interaction logic, but the balloon had no relationship to the feeling of counting down. The form was interchangeable. That was the problem: the form and concept needed to be the same thing. A horizon connects nighttime with morning &mdash; the landscape holds the night, the sun holds the time, the sunrise is the wake-up. The metaphor did the work the balloon couldn&rsquo;t.</p>
                <div className="hz-pair">
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-sketch-countdown.webp" alt="Celebration countdown sketch — hot air balloon direction" data-lightbox />
                    </div>
                    <span className="hz-figcap">Celebration Countdown</span>
                  </div>
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-sketch-sleep-timer.webp" alt="Sleep timer concept sketch — horizon / mountain metaphor" data-lightbox />
                    </div>
                    <span className="hz-figcap">Sleep Timer</span>
                  </div>
                </div>

                <Rule />

                <Insight>The mountain layers made time visible without numbers</Insight>
                <p>Each NeoPixel represents 30 minutes. The layers light up base to peak as time passes, so a user waking briefly can read how much of the night is left at a glance. The sun serves as both the visual centerpiece and the physical control: rotate to set, press to start or pause.</p>
                <div className="hz-trio">
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-state-1.webp" alt="Set time — sun and base layer lit" data-lightbox />
                    </div>
                    <span className="hz-figcap">Set time</span>
                  </div>
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-state-2.webp" alt="Countdown — landscape layers lighting up" data-lightbox />
                    </div>
                    <span className="hz-figcap">Countdown</span>
                  </div>
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-state-3.webp" alt="Sunrise — sun glowing pink and warm" data-lightbox />
                    </div>
                    <span className="hz-figcap">Sunrise</span>
                  </div>
                </div>
              </>
            ),
          },

          /* ── PROTOTYPE ───────────────────────────────────────────────────── */
          {
            id: "prototype",
            title: "Prototype",
            body: (
              <>
                <Insight>Electronics testing came before the form</Insight>
                <p>The first stage was wiring LED strips to the Arduino and rotary encoder on flat cardboard &mdash; running through the layer-by-layer sequencing and sunrise color shift before committing to any shape. The key question: did the sequencing read as time passing, or just as animation? Each segment lighting up had a clear relationship to the timer, so the behavior was confirmed early.</p>
                <div className="hz-pair">
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-proto-bench.webp" alt="Electronics bench setup — Arduino, LED strip, and rotary encoder" data-lightbox />
                    </div>
                    <span className="hz-figcap">Electronics setup</span>
                  </div>
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-proto-electronics.webp" alt="LED sequence testing — layer-by-layer color behavior on flat cardboard" data-lightbox />
                    </div>
                    <span className="hz-figcap">Sequence testing</span>
                  </div>
                </div>

                <Rule />

                <Insight>The cardboard landscape proved form and light worked together</Insight>
                <p>Cutting the mountain layers from cardboard and threading the LEDs through was where the concept had to hold up. The layered profiles created enough depth that each lit segment read as a distinct zone rather than a single band of color. The circular sun cutout produced a soft diffused glow that felt clearly different from the countdown mode. The rotary encoder on the base confirmed the interaction position felt natural.</p>
                <div className="hz-pair">
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-proto-cardboard.webp" alt="Cardboard landscape prototype — layered mountain profiles with LEDs threaded through" data-lightbox />
                    </div>
                    <span className="hz-figcap">Cardboard landscape prototype</span>
                  </div>
                  <div className="hz-fig">
                    <div className="hz-img-wrap">
                      <img loading="lazy" src="/images/horizon/horizon-proto-led-test.webp" alt="Fully assembled cardboard model — sun, landscape, and base" data-lightbox />
                    </div>
                    <span className="hz-figcap">Fully assembled cardboard model</span>
                  </div>
                </div>
              </>
            ),
          },

          /* ── FINAL DESIGN ────────────────────────────────────────────────── */
          {
            id: "final-design",
            title: "Final Design",
            body: (
              <>
                <h4>How it works</h4>
                <div className="hz-hiw">
                  <div className="hz-hiw-card">
                    <img loading="lazy" src="/images/horizon/horizon-set.webp" alt="Set the time — rotate the sun on the back" />
                    <div className="hz-hiw-label">
                      <strong>Set the time</strong>
                      Rotate the sun on the back to set the time.
                    </div>
                  </div>
                  <div className="hz-hiw-card">
                    <img loading="lazy" src="/images/horizon/horizon-press.webp" alt="Start / Resume — press on the sun" />
                    <div className="hz-hiw-label">
                      <strong>Start / Resume</strong>
                      Press on the sun to start or resume.
                    </div>
                  </div>
                </div>

                <Rule />

                <h4>What it looks like</h4>
                <p>A layered landscape form with side-lit LEDs running through the mountain profiles and a circular sun as the main control. The base houses the Arduino board and power connection; the acrylic sun diffuses the LED ring into the soft glow used for both countdown and sunrise modes.</p>
                <div className="hz-img-wrap">
                  <img loading="lazy" src="/images/horizon/horizon-state-3.webp" alt="Sunrise — sun glowing pink and warm" data-lightbox />
                </div>
                <div className="hz-img-wrap">
                  <img loading="lazy" src="/images/horizon/horizon-schematic.webp" alt="Labeled schematic — Rotary Encoder, Side-Lit LED, Arduino Board, Power Cord" data-lightbox />
                </div>
              </>
            ),
          },


        ]}
      />
    </>
  );
}
