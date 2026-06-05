import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = {
  title: "Wash Bus - Lily Liang Portfolio",
  description:
    "A mobile laundry service for people experiencing homelessness in Atlanta. Service design, branding, and system design. Sponsored by Cognizant.",
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="wb-insight">{children}</p>;
}

function Rule() {
  return <div className="wb-rule" />;
}

function Bullet({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="wb-bullet">
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
    <div className="wb-slot" style={{ aspectRatio: aspect }}>
      <span className="wb-slot-label">{label}</span>
      <code className="wb-slot-file">{filename}</code>
      {note && <span className="wb-slot-note">{note}</span>}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function WashBusPage() {
  return (
    <>
      <style>{`
        html, body { background: var(--washbus-bg); }

        /* Insight — bold italic callout with accent border */
        .wb-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          border-left: 3px solid var(--washbus-primary);
          padding: 12px 16px 12px 15px;
          margin: 28px 0 10px;
          background: rgba(78, 142, 203, 0.03);
          border-radius: 0 8px 8px 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .wb-insight:first-child { margin-top: 0; }
        @media (max-width: 768px) { .wb-insight { font-size: 18px; } }

        /* Section divider */
        .wb-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* Bold-label bullet */
        .wb-bullet {
          font-family: var(--body);
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.7;
          padding: 10px 14px;
          margin: 6px 0;
          border-left: 2px solid var(--washbus-primary);
          background: rgba(182, 224, 217, 0.05);
          border-radius: 0 8px 8px 0;
        }
        .wb-bullet strong {
          color: var(--text-primary);
          font-weight: 700;
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
        }

        /* Image placeholder slot */
        .wb-slot {
          width: 100%;
          margin: 18px 0;
          background: rgba(182, 224, 217, 0.07);
          border: 1.5px dashed rgba(58, 158, 145, 0.3);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          text-align: center;
        }
        .wb-slot-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: #2E8C7E;
          opacity: 0.9;
        }
        .wb-slot-file {
          font-size: 10px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(182, 224, 217, 0.18);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .wb-slot-note {
          font-size: 10px;
          color: var(--text-tertiary);
          font-style: italic;
          max-width: 360px;
        }

        /* 2-column image pair */
        .wb-pair {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 18px 0;
        }
        .wb-pair .wb-slot { margin: 0; }

        /* Video embed */
        .wb-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 14px;
          overflow: hidden;
          margin: 0 0 28px;
        }
        .wb-video iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* External article link card */
        .wb-link-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          border-radius: 14px;
          border: 1.5px solid rgba(58, 158, 145, 0.25);
          background: rgba(182, 224, 217, 0.07);
          text-decoration: none;
          color: var(--text-primary);
          transition: border-color 200ms ease, background 200ms ease;
          margin: 18px 0;
          cursor: pointer;
        }
        .wb-link-card:hover {
          border-color: var(--washbus-primary);
          background: rgba(182, 224, 217, 0.14);
        }
        .wb-link-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--washbus-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #1A5E56;
        }
        .wb-link-body {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
          min-width: 0;
        }
        .wb-link-title {
          font-family: var(--body);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .wb-link-url {
          font-family: var(--body);
          font-size: 11px;
          color: var(--text-tertiary);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .wb-link-arrow {
          color: var(--text-tertiary);
          flex-shrink: 0;
          transition: transform 200ms ease;
        }
        .wb-link-card:hover .wb-link-arrow { transform: translateX(3px); }

        /* Rich article preview card */
        .wb-article-card {
          display: block;
          border-radius: 14px;
          overflow: hidden;
          border: 1.5px solid rgba(58, 158, 145, 0.25);
          background: rgba(182, 224, 217, 0.06);
          text-decoration: none;
          color: var(--text-primary);
          transition: border-color 200ms ease, background 200ms ease;
          margin: 18px 0;
          cursor: pointer;
        }
        .wb-article-card:hover {
          border-color: var(--washbus-primary);
          background: rgba(182, 224, 217, 0.12);
        }
        .wb-article-card-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid var(--hairline);
        }
        .wb-article-card-body {
          padding: 14px 18px 16px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .wb-article-card-text { flex: 1; min-width: 0; }
        .wb-article-card-source {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--washbus-primary);
          opacity: 0.85;
          margin-bottom: 4px;
        }
        .wb-article-card-title {
          font-family: var(--body);
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.35;
        }
        .wb-article-card-desc {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-top: 5px;
        }
        .wb-article-card-arrow {
          color: var(--text-tertiary);
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 200ms ease;
        }
        .wb-article-card:hover .wb-article-card-arrow { transform: translateX(3px); }

        /* 2×2 systems card grid */
        .wb-sys-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin: 18px 0;
        }
        .wb-sys-card {
          display: flex;
          flex-direction: column;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--hairline);
          background: rgba(182, 224, 217, 0.06);
        }
        .wb-sys-card-slot {
          width: 100%;
          aspect-ratio: 4/3;
          background: rgba(182, 224, 217, 0.08);
          border-bottom: 1px solid var(--hairline);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 14px;
          text-align: center;
        }
        .wb-sys-card-slot span {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 600;
          color: #2E8C7E;
          opacity: 0.7;
        }
        .wb-sys-card-slot code {
          font-size: 9px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(182, 224, 217, 0.18);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .wb-sys-card-body {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 10px 14px 12px;
          line-height: 1.5;
        }
        .wb-sys-card-body strong {
          display: block;
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 3px;
        }
        @media (max-width: 640px) {
          .wb-sys-grid { grid-template-columns: 1fr; }
        }

        /* Figure caption */
        .wb-figcap {
          font-family: var(--body);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--washbus-primary);
          text-align: center;
          opacity: 0.85;
          margin-top: 5px;
        }

        /* ── Fix: prevent grid-item min-width blowout (iframe / long text) ── */
        /* Grid items default to min-width:auto; YouTube iframe forces the    */
        /* proj-content column wider than the grid container. Setting 0 here  */
        /* lets the column respect its actual 1fr width on mobile.            */
        .proj-content { min-width: 0; }
        .proj-section-body { min-width: 0; overflow-wrap: break-word; word-break: break-word; }

        /* Slot label wrapping (long labels like "Service flow diagram…") */
        .wb-slot-label { word-break: break-word; }

        /* ── Tablet (≤768px) ── */
        @media (max-width: 768px) {
          .wb-insight {
            font-size: clamp(16px, 3.5vw, 20px);
            margin: 22px 0 8px;
          }
          .wb-rule { margin: 28px 0; }
        }

        /* ── Mobile (≤640px) ── */
        @media (max-width: 640px) {
          /* Pairs collapse to single column */
          .wb-pair { grid-template-columns: 1fr; }

          /* Tighter slot padding & smaller radius */
          .wb-slot {
            padding: 14px 12px;
            border-radius: 10px;
            margin: 12px 0;
          }
          .wb-slot-note { max-width: 100%; }

          /* Video */
          .wb-video { border-radius: 10px; margin-bottom: 20px; }

          /* Bullet */
          .wb-bullet { padding: 8px 12px; font-size: 13px; }

          /* Link card — tighter, hide URL on small screens */
          .wb-link-card { gap: 12px; padding: 12px 14px; border-radius: 10px; }
          .wb-link-icon { width: 32px; height: 32px; border-radius: 8px; }
          .wb-link-url { display: none; }
          .wb-link-arrow { display: none; }
        }
      `}</style>

      <ProjectLayout
        title="Wash Bus"
        year="2023"
        tagline="Clean clothes, restored dignity."
        description={
          <p>
            Wash Bus was a community-partnered design project with Flowing with Blessings, an
            Atlanta nonprofit providing mobile hygiene services for people experiencing homelessness.
            The organization was already running a mobile shower service and wanted to expand into
            laundry. Our team developed design proposals for the bus layout, laundry workflow, water
            and electrical systems, volunteer experience, and visual identity. The final bus was
            adapted through real-world construction and budget constraints &mdash; this case study
            focuses on our design contribution rather than claiming every detail was implemented
            exactly as proposed.
          </p>
        }
        heroImageUrl="/images/wash-bus/washbus-hero-banner.webp"
        heroTint="rgba(10,40,35,0.25)"
        accentVar="var(--washbus-primary)"
        sponsoredBy={<img loading="lazy" src="/images/wash-bus/logo-flowing-with-blessings.png" alt="Flowing with Blessings, Inc." />}
        sponsorLabel="Partnered with"
        meta={[
          { key: "Duration",        value: "Summer 2023" },
          { key: "Team",            value: "Lily Liang, Zaria Hardnett, David Hounyo, Claudia Ross" },
          { key: "My Contribution", value: "Service design · Systems thinking · Spatial planning · UX/UI · Branding · 3D modeling" },
          { key: "Outcome",         value: "A full design proposal — covering systems, service flow, and branding — that helped Flowing with Blessings visualize and plan a mobile laundry service for Atlanta's unhoused community." },
        ]}
        sidebarGroups={[
          {
            label: "Wash Bus",
            items: [
              { id: "overview",             label: "Overview" },
              { id: "why-laundry",          label: "Why Laundry Matters" },
              { id: "design-contribution",  label: "Design Contribution" },
              { id: "public-outcome",       label: "Public Outcome" },
              { id: "reflection",           label: "Reflection" },
            ],
          },
        ]}
        prevProject={{
          title: "Anyi",
          year: "Fall 2023",
          href: "/projects/anyi",
          coverUrl: "/images/covers/cover-mahjong-table-set.webp",
          tint: "rgba(60,15,10,0.58)",
        }}
        nextProject={{
          title: "Horizon",
          year: "2022",
          href: "/projects/horizon",
          coverUrl: "/images/covers/cover-horizon.webp",
          tint: "rgba(10,10,35,0.58)",
        }}
        sections={[

          /* ── OVERVIEW ─────────────────────────────────────────────────── */
          {
            id: "overview",
            title: "Overview",
            body: (
              <>
                <div className="wb-video">
                  <iframe
                    src="https://www.youtube.com/embed/n1i0sx9c2ck"
                    title="Wash Bus overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <Insight>Flowing with Blessings needed a way to expand from showers to clean clothes</Insight>
                <p>Flowing with Blessings was already operating a weekly mobile shower service for Atlanta&rsquo;s unhoused community. Showers helped &mdash; but guests left clean and changed back into the same dirty clothes. The organization wanted to add laundry to complete the hygiene loop, and needed a team to help figure out how.</p>
                <p>Our team explored how a school bus could become a self-contained mobile laundry service: how the machines would be secured, how water and electricity would work, how guests and volunteers would move through the space, and how the service would communicate itself to the community.</p>
                <div style={{ margin: "18px 0" }}>
                  <img loading="lazy" src="/images/wash-bus/washbus-partner-photo.webp" alt="Wash Bus team with Flowing with Blessings" style={{ width: "100%", height: "auto", display: "block", borderRadius: "14px" }} data-lightbox />
                  <p className="wb-figcap">Team with Flowing with Blessings (I couldn&rsquo;t attend the final presentation in person)</p>
                </div>
              </>
            ),
          },

          /* ── WHY LAUNDRY MATTERS ──────────────────────────────────────── */
          {
            id: "why-laundry",
            title: "Why Laundry Matters",
            body: (
              <>
                <img loading="lazy" src="/images/wash-bus/washbus-problem.webp" alt="Homelessness in Atlanta — 3,076 people homeless on a given night, 65.1 per 10,000 people" style={{ width: "100%", height: "auto", display: "block", borderRadius: "14px", margin: "0 0 18px" }} data-lightbox />
                <Insight>A shower only solves half the problem</Insight>
                <p>For unhoused individuals trying to find work, cleanliness is directly tied to opportunity. Clean clothes affect how people are perceived at job interviews and in public spaces &mdash; and without access to laundry, even consistent showering isn&rsquo;t enough to maintain hygiene. Atlanta is home to over a quarter of Georgia&rsquo;s homeless population. Flowing with Blessings saw laundry as the missing piece in the hygiene services it was already providing.</p>
              </>
            ),
          },

          /* ── DESIGN CONTRIBUTION ──────────────────────────────────────── */
          {
            id: "design-contribution",
            title: "Design Contribution",
            body: (
              <>
                <Insight>Our team designed the system, the service, and the identity</Insight>
                <p>Because the bus would be built and operated by a small nonprofit, every design decision had to be practical and volunteer-friendly. We worked across three areas:</p>

                <Rule />

                <h4>Systems planning</h4>
                <div className="wb-sys-grid">
                  <div className="wb-sys-card">
                    <div className="wb-sys-card-body">
                      <strong>Machine layout</strong>
                      Washer and dryer placement for a standard school bus footprint, with a prewash utility sink station.
                    </div>
                    <img loading="lazy" src="/images/wash-bus/washbus-machine-layout.webp" alt="Machine layout diagram" style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }} data-lightbox />
                  </div>
                  <div className="wb-sys-card">
                    <div className="wb-sys-card-body">
                      <strong>Machine securing</strong>
                      Wood screws, window jamb supports, and 5-foot load securing tracks to keep machines stable in transit.
                    </div>
                    <img loading="lazy" src="/images/wash-bus/washbus-securing-machines.webp" alt="Machine securing diagram" style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }} data-lightbox />
                  </div>
                  <div className="wb-sys-card">
                    <div className="wb-sys-card-body">
                      <strong>Water system</strong>
                      Custom 2&times;4&times;8 fresh water tank &rarr; pump &rarr; hot water heater &rarr; washer, with separate grey water storage tanks for self-contained operation.
                    </div>
                    <img loading="lazy" src="/images/wash-bus/washbus-water-storage.webp" alt="Water storage system diagram" style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }} data-lightbox />
                  </div>
                  <div className="wb-sys-card">
                    <div className="wb-sys-card-body">
                      <strong>Electrical system</strong>
                      AC outlets on a DIN rail connected to each machine, running through a circuit breaker to a self-contained power generator.
                    </div>
                    <img loading="lazy" src="/images/wash-bus/washbus-electricity.webp" alt="Electricity system diagram — AC outlets, circuit breaker, power generator" style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }} data-lightbox />
                  </div>
                  <div className="wb-sys-card">
                    <div className="wb-sys-card-body">
                      <strong>Color system</strong>
                      Magnetic name tags on each machine protect guests&rsquo; belongings and provide clear user identification throughout the laundry process.
                    </div>
                    <img loading="lazy" src="/images/wash-bus/washbus-color-system.webp" alt="Color system — magnetic name tags for user identification" style={{ width: "100%", height: "auto", display: "block", mixBlendMode: "multiply" }} data-lightbox />
                  </div>
                  <div className="wb-sys-card">
                    <div className="wb-sys-card-body">
                      <strong>Volunteer workstation</strong>
                      Folding table with swivel system and under-bench storage, designed to fold flat when the bus is in transit.
                    </div>
                    <img loading="lazy" src="/images/wash-bus/washbus-workstation.webp" alt="Volunteer workstation diagram" style={{ width: "100%", height: "auto", display: "block" }} data-lightbox />
                  </div>
                </div>

                <Rule />

                <h4>Service experience</h4>
                <p>We mapped the full service flow for both guests and volunteers &mdash; from sign-up to laundry drop-off, washing, and pickup. The goal was to make the process clear and low-friction for people who might be anxious, unfamiliar with the service, or in a hurry.</p>
                <div style={{ width: "100%", margin: "18px 0", borderRadius: "14px", overflow: "hidden" }}>
                  <img loading="lazy" src="/images/wash-bus/washbus-service-flow.webp" alt="Service flow storyboard — guest journey and volunteer coordination" style={{ width: "100%", height: "auto", display: "block" }} data-lightbox />
                </div>

                <Rule />

                <h4>Branding and outreach</h4>
                <p>The visual identity needed to work across the bus exterior, social media, and in-person outreach. The bus graphic references flowing water &mdash; echoing the Flowing with Blessings logo &mdash; and doubles as a helping hand shape to signal community and care. The side of the bus carries a step-by-step service diagram so guests can understand the process before they arrive.</p>
                <Bullet label="Bus graphics">Flowing water motif referencing the partner&rsquo;s logo; side panel service walkthrough.</Bullet>
                <img loading="lazy" src="/images/wash-bus/washbus-bus-graphics-1.webp" alt="Bus side view with flowing water graphic" style={{ width: "100%", height: "auto", display: "block", borderRadius: "14px", mixBlendMode: "multiply", margin: "10px 0" }} data-lightbox />
                <img loading="lazy" src="/images/wash-bus/washbus-bus-graphics-2.webp" alt="Bus wayfinding outreach — painting decals" style={{ width: "100%", height: "auto", display: "block", borderRadius: "14px", mixBlendMode: "multiply", margin: "6px 0 10px" }} data-lightbox />
                <Bullet label="Branding">Color palette and typography system developed for the Wash Bus identity.</Bullet>
                <div className="wb-pair" style={{ margin: "10px 0" }}>
                  <div>
                    <img loading="lazy" src="/images/wash-bus/washbus-branding-colors.webp" alt="Wash Bus brand color palette" style={{ width: "100%", height: "auto", display: "block", borderRadius: "14px", mixBlendMode: "multiply" }} data-lightbox />
                    <p className="wb-figcap">Colors</p>
                  </div>
                  <div>
                    <img loading="lazy" src="/images/wash-bus/washbus-branding-typefaces.webp" alt="Wash Bus brand typefaces — Lemon and Futura" style={{ width: "100%", height: "auto", display: "block", borderRadius: "14px", mixBlendMode: "multiply" }} data-lightbox />
                    <p className="wb-figcap">Typefaces</p>
                  </div>
                </div>
                <Bullet label="Outreach materials">Social assets, donor-facing materials, and volunteer recruitment graphics.</Bullet>
                <div style={{ margin: "10px 0" }}>
                  <img loading="lazy" src="/images/wash-bus/washbus-promotional.webp" alt="Wash Bus promotional material — four bus views" style={{ width: "100%", height: "auto", display: "block", borderRadius: "14px" }} data-lightbox />
                  <p className="wb-figcap">Example outreach material</p>
                </div>
              </>
            ),
          },

          /* ── PUBLIC OUTCOME ───────────────────────────────────────────── */
          {
            id: "public-outcome",
            title: "Public Outcome",
            body: (
              <>
                <Insight>Flowing with Blessings built the bus &mdash; and Georgia Tech recognized the team&rsquo;s role</Insight>
                <p>After the student collaboration ended, Flowing with Blessings continued developing the Mobile Laundry Bus as part of its ongoing effort to provide showers and clean clothing to people experiencing homelessness. Georgia Tech later featured the project, highlighting the student team&rsquo;s contribution to brainstorming, sketching, 3D modeling, workflow planning, water systems, and washer/dryer layout.</p>
                <a
                  href="https://id.gatech.edu/feature/laundry-dignity-and-design-story-atlantas-wash-bus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wb-article-card"
                >
                  <img
                    src="/images/wash-bus/washbus-gt-article-preview.webp"
                    alt="The Wash Bus parked outside Grady Hospital"
                    className="wb-article-card-img"
                  />
                  <div className="wb-article-card-body">
                    <div className="wb-article-card-text">
                      <div className="wb-article-card-source">Georgia Tech Industrial Design</div>
                      <div className="wb-article-card-title">Laundry, Dignity, and Design: The Story of Atlanta&rsquo;s Wash Bus</div>
                      <div className="wb-article-card-desc">How a student team partnered with nonprofit Flowing with Blessings to design a mobile laundry service for Atlanta&rsquo;s unhoused community.</div>
                    </div>
                    <svg className="wb-article-card-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </a>
              </>
            ),
          },

          /* ── REFLECTION ───────────────────────────────────────────────── */
          {
            id: "reflection",
            title: "Reflection",
            body: (
              <>
                <p>Wash Bus taught me that community-based design doesn&rsquo;t always move from concept to implementation in a straight line. Some recommendations may change as real-world constraints take over &mdash; but the work can still create real value by clarifying the system, visualizing possibilities, and helping a partner move from an idea toward an actual service.</p>
                <p>The most meaningful part was learning how design can support dignity at a practical level: not by making an object alone, but by shaping the service, workflow, and communication around it.</p>
              </>
            ),
          },

        ]}
      />
    </>
  );
}
