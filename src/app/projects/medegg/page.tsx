import { ProjectLayout } from "@/components/ProjectLayout";

export const metadata = {
  title: "MedEgg - Lily Liang Portfolio",
  description:
    "A physical kit that prepares children aged 5–12 for surgery before they ever arrive at the hospital — an interactive egg, medical equipment replicas, and instructional cards.",
};

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Insight({ children }: { children: React.ReactNode }) {
  return <p className="me-insight">{children}</p>;
}

function Rule() {
  return <div className="me-rule" />;
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
    <div className="me-slot" style={{ aspectRatio: aspect }}>
      <span className="me-slot-label">{label}</span>
      <code className="me-slot-file">{filename}</code>
      {note && <span className="me-slot-note">{note}</span>}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function MedeggPage() {
  return (
    <>
      <style>{`
        html, body { background: #F5EBE2; }

        /* Insight — bold italic callout with teal accent border */
        .me-insight {
          font-family: var(--display);
          font-style: italic;
          font-weight: 400;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--text-primary);
          border-left: 3px solid var(--medegg-primary);
          padding: 12px 16px 12px 15px;
          margin: 28px 0 10px;
          background: rgba(160, 197, 190, 0.03);
          border-radius: 0 8px 8px 0;
          font-optical-sizing: none;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }
        .me-insight:first-child { margin-top: 0; }
        @media (max-width: 768px) { .me-insight { font-size: 18px; } }

        /* Section divider */
        .me-rule { height: 1px; background: var(--hairline); margin: 36px 0; }

        /* Eyebrow label */
        .me-eyebrow {
          font-family: var(--body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin: 20px 0 8px;
        }

        /* Image placeholder slot */
        .me-slot {
          width: 100%;
          min-width: 0;
          margin: 18px 0;
          background: rgba(160, 197, 190, 0.06);
          border: 1.5px dashed rgba(160, 197, 190, 0.5);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: 20px;
          text-align: center;
        }
        .me-slot-label {
          font-family: var(--body);
          font-size: 12px;
          font-weight: 600;
          color: #3D7A73;
          opacity: 0.9;
        }
        .me-slot-file {
          font-size: 10px;
          font-family: monospace;
          color: var(--text-tertiary);
          background: rgba(160, 197, 190, 0.14);
          padding: 2px 8px;
          border-radius: 4px;
          word-break: break-all;
          overflow-wrap: break-word;
          max-width: 100%;
        }
        .me-slot-note {
          font-size: 10px;
          color: var(--text-tertiary);
          font-style: italic;
          max-width: 380px;
          line-height: 1.5;
        }

        /* Contribution / to-be-added placeholder */
        .me-contrib {
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
          margin-top: 4px;
        }
        .me-contrib svg { color: #8C7200; flex-shrink: 0; }

        /* Tag pill */
        .me-tag {
          display: inline-flex;
          align-items: center;
          font-family: var(--body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          width: fit-content;
        }
        .me-tag--before { background: rgba(50, 50, 49, 0.07); color: var(--text-tertiary); }
        .me-tag--after  { background: rgba(160, 197, 190, 0.22); color: #3D7A73; }

        /* 3-column equipment / interaction grids */
        .me-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin: 10px 0 18px;
        }

        /* Storyboard grid */
        .me-storyboard {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 24px 0;
        }
        .me-storyboard-frame {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .me-storyboard-frame img {
          width: 100%;
          border-radius: 10px;
        }
        .me-storyboard-num {
          font-family: var(--body);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--medegg-primary);
        }
        .proj-tagline {
          text-align: center !important;
        }
.me-storyboard-cap {
          font-family: var(--body);
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.55;
          text-align: center;
        }

        /* 5-column card strip */
        .me-card-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          margin: 18px 0;
        }

        /* 2-column before / after compare */
        .me-compare {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 18px 0;
          align-items: start;
        }
        .me-compare-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .me-compare-col > .me-slot { margin: 0; }
        .me-compare-caption {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .me-compare-caption p {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        /* YouTube embed */
        .me-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 14px;
          overflow: hidden;
          background: #000;
        }
        .me-video-wrap iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Egg section: video + text row */
        .me-egg-row {
          display: flex; gap: 28px; align-items: center; margin: 8px 0;
        }
        .me-egg-video {
          width: 210px; flex-shrink: 0; mix-blend-mode: multiply;
        }
        /* Testing / cards image rows */
        .me-img-row {
          display: flex; gap: 12px; margin: 20px 0;
        }
        .me-img-row img {
          flex: 1; min-width: 0; border-radius: 10px; object-fit: cover;
        }

        /* Problem section images — constrained on desktop, full on mobile */
        .me-problem-img-sm  { display: block; width: 70%; margin: 0 auto; }
        .me-problem-img-md  { display: block; width: 85%; margin: 0 auto; border-radius: 12px; }
        /* Solution section wrapper — indented on desktop */
        .me-solution-wrap   { margin-top: 32px; text-align: center; padding-left: 8%; }
        /* Cards section */
        .me-cards-outer     { display: flex; flex-direction: column; gap: 20px; margin: 18px 0; align-items: center; }
        .me-cards-item      { width: 78%; display: flex; flex-direction: column; gap: 8px; }

        /* Responsive */
        @media (max-width: 768px) {
          .me-grid-3     { grid-template-columns: 1fr; }
          .me-card-strip { grid-template-columns: repeat(2, 1fr); }
          .me-compare    { grid-template-columns: 1fr; }
          .me-storyboard { grid-template-columns: 1fr 1fr; }
          .me-egg-row    { flex-direction: column; align-items: flex-start; }
          .me-egg-video  { width: 100%; aspect-ratio: 16/9; object-fit: cover; object-position: center 55%; }
          .me-img-row    { flex-wrap: wrap; }
          .me-img-row img { flex: 1 1 calc(50% - 6px); }
          .me-problem-img-sm  { width: 100%; }
          .me-problem-img-md  { width: 100%; }
          .me-solution-wrap   { padding-left: 0; }
          .me-cards-outer     { align-items: stretch; }
          .me-cards-item      { width: 100%; }
        }
        @media (max-width: 480px) {
          .me-card-strip { grid-template-columns: 1fr; }
          .me-storyboard { grid-template-columns: 1fr; }
          .me-img-row img { flex: 1 1 100%; }
        }
      `}</style>

      <ProjectLayout
        title="MedEgg"
        year="2024"
        tagline="Empower, educate, encourage children for their surgeries."
        description={
          <p>
            MedEgg is a physical kit that prepares children aged 5–12 for surgery before they ever
            arrive at the hospital. Built around medical play and education, the kit includes a
            reactive egg, real-scale medical equipment replicas, instructional cards, and a comfort
            object — giving children the familiarity and sense of control they need to walk into
            the operating room without fear.
          </p>
        }
        sponsoredBy={
          <img loading="lazy" src="/images/wash-bus/logo-cognizant.png" alt="Cognizant" />
        }
        heroImageUrl="/images/covers/cover-medegg.webp"
        titleImageUrl="/images/medegg/medegg-logo.webp"
        heroTint="rgba(30,15,5,0.55)"
        accentVar="var(--medegg-primary)"
        meta={[
          { key: "Duration",        value: "Spring 2022" },
          { key: "Team",            value: "Lily Liang, Hope Rackers, Meredith Renaud, Valerie Ng" },
          { key: "My Contribution", value: "Egg concept, physical product design, prototyping (foam modeling, vacuum forming, silicone casting), research" },
          { key: "Outcome",         value: "A three-part physical product system — an equipment kit, interactive egg, and instructional cards — grounded in research with child-life therapists and validated through peer testing" },
        ]}
        sidebarGroups={[
          {
            label: "Project Framing",
            items: [
              { id: "overview",     label: "Overview" },
              { id: "problem",      label: "Problem" },
              { id: "solution",     label: "Solution" },
              { id: "how-it-works", label: "How It Works" },
              { id: "approach",     label: "Approach" },
              { id: "contribution", label: "My Contribution" },
            ],
          },
          {
            label: "Design Decisions",
            items: [
              { id: "the-egg",           label: "The Egg" },
              { id: "medical-equipment", label: "Medical Equipment" },
              { id: "the-cards",         label: "The Cards" },
              { id: "the-bag",           label: "The Bag" },
            ],
          },
          {
            label: "Reflection",
            items: [{ id: "reflection", label: "Reflection" }],
          },
        ]}
        prevProject={{
          title: "Color Mixing Marker",
          year: "Fall 2021",
          href: "/projects/color-mixing-marker",
          coverUrl: "/images/cmm/cmm-banner.webp",
          tint: "rgba(5,10,20,0.35)",
        }}
        nextProject={{
          title: "Summitware",
          year: "2024",
          href: "/projects/summit-ware",
          coverUrl: "/images/covers/cover-summit-ware.webp",
          tint: "rgba(15,30,15,0.55)",
        }}
        sections={[

          /* ── OVERVIEW VIDEO ──────────────────────────────────────────────── */
          {
            id: "overview",
            title: "Overview",
            body: (
              <div className="me-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/bIJT22hJAgI"
                  title="MedEgg overview video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ),
          },

          /* ── PROBLEM ──────────────────────────────────────────────────────── */
          {
            id: "problem",
            title: "Problem",
            body: (
              <>
                <Insight>Children aren&rsquo;t scared of surgery &mdash; they&rsquo;re scared of what they don&rsquo;t understand</Insight>
                <div style={{ margin: "24px 0", textAlign: "center" }}>
                  <img loading="lazy" src="/images/medegg/medegg-emotional.webp" alt="Three bear illustrations labeled Confusion, Loss of Control, and Pressure" className="me-problem-img-sm" style={{ mixBlendMode: "multiply", cursor: "zoom-in" }} data-lightbox />
                </div>
                <p>A child facing surgery doesn&rsquo;t arrive at the hospital afraid of the procedure itself. They arrive afraid of the unknown: equipment they&rsquo;ve never seen, sensations they can&rsquo;t anticipate, a body that suddenly doesn&rsquo;t feel like their own. That fear &mdash; rooted in unfamiliarity, not in reality &mdash; is what makes the pre-surgical experience so distressing. The hospital isn&rsquo;t dangerous to them. It just feels that way.</p>

                <Insight>The support exists &mdash; but it&rsquo;s too limited to reach most children</Insight>
                <div style={{ margin: "24px 0", textAlign: "center" }}>
                  <img loading="lazy" src="/images/medegg/medegg-emotions-chart.webp" alt="Emotions Felt chart: children go from Terrified while waiting, to Stressed at home, to No Control in hospital" className="me-problem-img-md" />
                </div>
                <p>Child-life therapists are trained to reduce pre-surgical anxiety through education and medical play, and research shows it works. But most hospitals have just one, and their window with each child is brief &mdash; a few minutes before the procedure, when anxiety has already peaked. The education happens too late, in the wrong environment, with too little time to stick.</p>
              </>
            ),
          },

          /* ── SOLUTION ─────────────────────────────────────────────────────── */
          {
            id: "solution",
            title: "Solution",
            body: (
              <>
                <Insight>MedEgg prepares children at home, so the hospital feels familiar</Insight>
                <p>MedEgg is a physical kit that starts working before surgery day. A child receives the kit at their initial appointment, takes it home, and uses it to learn about the equipment and procedures they&rsquo;ll encounter &mdash; through play, instructional cards, and an AR companion app. When they arrive at the hospital, they bring their egg. It hatches in the pre-op room, revealing the comfort object they carry through the procedure.</p>
                <div className="me-solution-wrap">
                  <img loading="lazy" src="/images/medegg/medegg-components-overview.webp" alt="Full spread of all MedEgg kit components: egg, stethoscope, IV drip, anesthesia mask, cards, backpack" style={{ width: "100%", borderRadius: "12px" }} />
                </div>
              </>
            ),
          },

          /* ── HOW IT WORKS ─────────────────────────────────────────────────── */
          {
            id: "how-it-works",
            title: "How It Works",
            body: (
              <>
                <Insight>From the first appointment to the final hatch</Insight>
                <div className="me-storyboard">
                  {[
                    "Child and guardian go to the initial doctor's visit.",
                    "Child picks out doctor kit color after the initial appointment.",
                    "Child and guardian leave initial doctor appointment with the chosen doctor's kit.",
                    "Once home, the child opens the kit to find an egg, medical equipment, and instructional cards.",
                    "Using the app, the child and guardian can check on the egg. The child discovers that something is wrong.",
                    "The child uses the medical equipment in the kit to doctor the egg. The child becomes familiar with the medical equipment they may encounter during their own procedure/surgery.",
                    "Using the app, the child and guardian can check on the egg again. The child discovers that their actions helped the egg.",
                    "The child can use the cards to see how to interact with the egg and learn more about the equipment.",
                    "The child and guardian return to the hospital on the day of the surgery with the doctor's kit and egg.",
                    "The child places the egg in a special base and waits for the egg to hatch in the pre-op room.",
                    "The child watches as the egg begins to hatch.",
                    "The egg hatches to reveal a stuffed dragon that the child can hold during the rest of the procedure.",
                    "The child leaves the hospital healthy after surgery with their stuffed dragon.",
                  ].map((caption, i) => (
                    <div key={i} className="me-storyboard-frame">
                      <img loading="lazy" src={`/images/medegg/medegg-storyboard-${i + 1}.webp`} alt={caption} />
                      <span className="me-storyboard-num">{i + 1}</span>
                      <p className="me-storyboard-cap">{caption}</p>
                    </div>
                  ))}
                </div>
              </>
            ),
          },

          /* ── APPROACH ─────────────────────────────────────────────────────── */
          {
            id: "approach",
            title: "Approach",
            body: (
              <>
                <Insight>We started where the fear starts &mdash; with the child</Insight>
                <p>The project began with a design prompt: how can the Metaverse help prepare children for surgery? We quickly challenged that frame. After interviewing a child-life therapist, surveying parents, and observing pre-surgical experiences, it became clear that the education piece mattered more than the technology. Not every child has access to devices, and anxiety starts long before the hospital. Our solution needed to work earlier, and without tech as a dependency.</p>
                <div style={{ margin: "24px 0", textAlign: "center" }}>
                  <img loading="lazy" src="/images/medegg/medegg-research-scope.webp" alt="Interview insights from Ashley McGee, a Child-Life Therapist" style={{ width: "100%", borderRadius: "12px", mixBlendMode: "multiply", cursor: "zoom-in" }} data-lightbox />
                </div>
              </>
            ),
          },

          /* ── MY CONTRIBUTION ──────────────────────────────────────────────── */
          {
            id: "contribution",
            title: "My Contribution",
            body: <p>I originated the egg concept — the idea that a child could receive an unhatched egg before their surgery date, building positive anticipation as it hatches at the hospital rather than arriving to fear and uncertainty. I led the physical design of the full artifact kit and built all prototypes with Hope using foam modeling, vacuum forming, and silicone casting, with the exception of the bag (Hope) and the activity card (Valerie, who also created all illustrations). Research was a full team effort.</p>,
          },

          /* ── THE EGG ──────────────────────────────────────────────────────── */
          {
            id: "the-egg",
            title: "The Egg",
            body: (
              <>
                <Insight>Children needed something to care for &mdash; not just learn from</Insight>
                <p>The egg is the emotional core of MedEgg. Rather than handing a child a pamphlet or a tutorial, we gave them a creature to look after. The egg needs the same things the child will need at the hospital: a stethoscope check, an IV drip, an anesthesia mask. Caring for the egg makes the equipment feel familiar before it becomes real.</p>

                <div className="me-egg-row">
                  <video autoPlay loop muted playsInline className="me-egg-video"><source src="/images/medegg/medegg-egg-reaction.mp4" type="video/mp4" /></video>
                  <div>
                    <Insight>The egg reacts to the equipment, giving children feedback without a screen</Insight>
                    <p style={{ marginTop: "10px" }}>We deliberately avoided putting electronics on the egg itself &mdash; medical environments are sensitive, and we wanted the product to be robust and manufacturable. Instead, the egg uses side-emitting optical fiber to create light responses when equipment is correctly placed. The patterns &mdash; inspired by smoke, water, and heartbeat rhythms &mdash; give children a satisfying signal that they&rsquo;ve done it right, without requiring any digital dependency.</p>
                  </div>
                </div>

                <div style={{ margin: "24px 0", textAlign: "center" }}>
                  <img loading="lazy" src="/images/medegg/medegg-egg-detail.webp" alt="Egg optical fiber detail — Smoke, Water, and Heart Beat light patterns alongside the egg construction" style={{ width: "100%", borderRadius: "12px" }} />
                </div>

                <p className="me-eyebrow">Light interactions</p>
                <div className="me-grid-3">
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <video autoPlay loop muted playsInline style={{ width: "100%", borderRadius: "10px" }}><source src="/images/medegg/medegg-gif-stethoscope.mp4" type="video/mp4" /></video>
                    <p className="me-storyboard-cap">Stethoscope → heartbeat light</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <video autoPlay loop muted playsInline style={{ width: "100%", borderRadius: "10px" }}><source src="/images/medegg/medegg-gif-iv.mp4" type="video/mp4" /></video>
                    <p className="me-storyboard-cap">IV drip → blue glow</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <video autoPlay loop muted playsInline style={{ width: "100%", borderRadius: "10px" }}><source src="/images/medegg/medegg-gif-mask.mp4" type="video/mp4" /></video>
                    <p className="me-storyboard-cap">Anesthesia mask → breath</p>
                  </div>
                </div>

                <Rule />

                <Insight>Peer testing pushed us to differentiate the interactions more clearly</Insight>
                <p>In testing, 6 out of 7 peers found the three light responses too similar &mdash; it wasn&rsquo;t immediately clear which equipment was doing what. The slots for placing equipment also needed to stand out more from the surface pattern. Both findings pointed toward the same fix: sharper differentiation across color, response, and affordance, so each piece of equipment has a clearly distinct effect.</p>
                <div className="me-img-row">
                  <img loading="lazy" src="/images/medegg/medegg-user-testing-1.webp" alt="User testing session 1" />
                  <img loading="lazy" src="/images/medegg/medegg-user-testing-2.webp" alt="User testing session 2" />
                </div>
              </>
            ),
          },

          /* ── MEDICAL EQUIPMENT ────────────────────────────────────────────── */
          {
            id: "medical-equipment",
            title: "Medical Equipment",
            body: (
              <>
                <Insight>Fear of medical equipment comes from not knowing what it does</Insight>
                <p>A child-life therapist told us: most fear is caused by misconceptions. Our job is to correct them. The equipment in MedEgg &mdash; a stethoscope, IV drip, and anesthesia mask &mdash; mirrors what children will actually encounter during their procedure. Each item is sized for a child&rsquo;s hands and designed to interact directly with the egg, making the education tactile rather than instructional.</p>

                <div className="me-grid-3">
                  <img loading="lazy" src="/images/medegg/medegg-equip-stethoscope.webp" alt="Stethoscope triggering heartbeat light pattern on the egg"         style={{ width: "100%", borderRadius: "10px", gridColumn: "1 / -1" }} />
                  <img loading="lazy" src="/images/medegg/medegg-equip-iv.webp"          alt="IV drip triggering blue glow on the egg"                           style={{ width: "100%", borderRadius: "10px", gridColumn: "1 / -1" }} />
                  <img loading="lazy" src="/images/medegg/medegg-equip-mask.webp"        alt="Anesthesia mask triggering breathing light response on the egg"    style={{ width: "100%", borderRadius: "10px", gridColumn: "1 / -1" }} />
                </div>


                <Insight>Medical play turns intimidating procedures into something a child can master</Insight>
                <p>By letting children use the equipment on the egg, they practice the role of caregiver before becoming the patient. This kind of role reversal builds positive coping &mdash; children who play doctor are less frightened when the doctor plays with them.</p>
                <div style={{ margin: "20px 0" }}>
                  <img loading="lazy" src="/images/medegg/medegg-child-playing.webp" alt="Child playing with the MedEgg kit at home" style={{ width: "100%", borderRadius: "12px" }} />
                </div>
              </>
            ),
          },

          /* ── THE CARDS ────────────────────────────────────────────────────── */
          {
            id: "the-cards",
            title: "The Cards",
            body: (
              <>
                <Insight>The cards inform without scripting &mdash; the child decides what to explore</Insight>
                <p>Each card has two sides: one showing how to use the equipment on the egg, and one explaining what it actually does in plain, age-appropriate language illustrated in comic-panel format. But the cards are a guide, not a script. A child-life therapist told us that giving children choices builds autonomy &mdash; so the cards are designed to be picked up in any order, set aside when not needed, and used at the child&rsquo;s own pace. Free play is encouraged; the cards are there when the child wants them.</p>

                <div className="me-cards-outer">
                  {[
                    { src: "medegg-card-intro.webp",      alt: "Intro card",           label: "Intro" },
                    { src: "medegg-card-stethoscope.webp", alt: "Stethoscope card",     label: "Stethoscope" },
                    { src: "medegg-card-iv.webp",          alt: "IV drip card",         label: "IV Drip" },
                    { src: "medegg-card-mask.webp",        alt: "Anesthesia mask card", label: "Anesthesia Mask" },
                    { src: "medegg-card-scale.webp",       alt: "Scale card",           label: "Scale" },
                  ].map(({ src, alt, label }) => (
                    <div key={src} className="me-cards-item">
                      <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, letterSpacing: "0.01em", color: "#3d2b1a", textAlign: "center" }}>{label}</p>
                      <img loading="lazy" src={`/images/medegg/${src}`} alt={alt} style={{ width: "100%", borderRadius: "10px", cursor: "zoom-in" }} data-lightbox />
                    </div>
                  ))}
                </div>

                <Insight>Peer testing pushed us toward imagery over instruction</Insight>
                <p>Early feedback told us the cards were too text-heavy and pulled attention away from the play experience. We revised toward imagery-first: more comic panels, less copy, with language only where it earned its place. The goal was a card a seven-year-old could follow independently &mdash; and that a child could pick up mid-play without having to stop and read.</p>
                <div className="me-img-row">
                  <img loading="lazy" src="/images/medegg/medegg-card-v1.webp" alt="Early card designs showing Stethoscope and IV Drip cards" />
                  <img loading="lazy" src="/images/medegg/medegg-cards-testing-1.webp" alt="Child testing the cards with the egg" />
                  <img loading="lazy" src="/images/medegg/medegg-cards-testing-2.webp" alt="Child testing the cards with the egg" />
                </div>
              </>
            ),
          },

          /* ── THE BAG ──────────────────────────────────────────────────────── */
          {
            id: "the-bag",
            title: "The Bag",
            body: (
              <>
                <Insight>The bag gives the child ownership of the kit from day one</Insight>
                <p>The kit arrives in a child-sized backpack so the child carries it &mdash; not the parent. The turquoise color matches the dragon that hatches from the egg, and the interior cavern pattern mimics the dragon&rsquo;s home. Once the egg hatches, the backpack becomes a home for the stuffed dragon comfort object. The same bag that carried the kit to the hospital carries the child&rsquo;s companion home.</p>

                <div style={{ margin: "24px 0" }}>
                  <img loading="lazy" src="/images/medegg/medegg-bag.webp" alt="Bag before surgery packed with egg and equipment, and after surgery holding the hatched stuffed dragon" style={{ width: "100%", borderRadius: "12px", cursor: "zoom-in" }} data-lightbox />
                </div>
              </>
            ),
          },

          /* ── REFLECTION ───────────────────────────────────────────────────── */
          {
            id: "reflection",
            title: "Reflection",
            body: (
              <>
                <p>MedEgg was the project I felt most personally invested in, because the egg concept was mine. Taking an idea from a spark to a physical artifact that a child could actually hold and respond to &mdash; that felt meaningful in a way that stayed with me.</p>
                <p style={{ marginTop: "1.25em" }}>The design work I loved most was working out the interactions between the medical props and the egg itself. Designing for children means designing for delight, and there&rsquo;s something genuinely fun about a system where every element is meant to feel a little magical. The hatching mechanic in particular &mdash; building anticipation rather than dread in the days before surgery &mdash; shaped every subsequent decision about how the artifacts should look and feel.</p>
                <p style={{ marginTop: "1.25em" }}>The project also taught me something about working under pressure and finding reserves I didn&rsquo;t know I had. When the timeline compressed and the stakes felt high, I learned that I could push further than I expected &mdash; and that my investment in the concept was what made that possible.</p>
                <img loading="lazy" src="/images/medegg/medegg-team.webp" alt="Lily and Hope at Launchpad" style={{ width: "100%", height: "auto", display: "block", marginTop: "2em", borderRadius: 16 }} />
                <p style={{ fontFamily: "var(--body)", fontSize: 12, color: "var(--text-tertiary)", marginTop: "0.75em", textAlign: "center" }}>Me and Hope at Launchpad.</p>
              </>
            ),
          },

        ]}
      />
    </>
  );
}
