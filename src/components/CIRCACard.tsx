"use client";

import { useState } from "react";

const IMG_FLYER  = "/images/circa/circa-flyer.webp";
const IMG_LAPTOP = "/images/circa/circa-laptop.webp";
const IMG_TABLET = "/images/circa/circa-tablet.webp";
const LOGO_PEACE = "/images/circa/circa-logo-peace.png";
const LOGO_PENN  = "/images/circa/circa-logo-penn.webp";

const SPRING = "cubic-bezier(0.34, 1.15, 0.64, 1)";
const EASE   = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const TAGS = [
  { label: "Product",    defLeft: "10.48%", defTop: "61.89%", hovLeft: "8%",    hovTop: "45%",    hovRotate: "-30deg",    delay: "0ms"   },
  { label: "AI",         defLeft: "22.12%", defTop: "61.89%", hovLeft: "16%",   hovTop: "58%",    hovRotate: "20.99deg",  delay: "50ms"  },
  { label: "Healthcare", defLeft: "28.96%", defTop: "61.89%", hovLeft: "81.08%", hovTop: "46.76%", hovRotate: "17.3deg",   delay: "100ms" },
];

export function CIRCACard() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .circa-card { container-type: inline-size; }

        @media (max-width: 600px) {
          .circa-card {
            aspect-ratio: auto !important;
            height: auto !important;
            border-radius: 16px !important;
            overflow: hidden !important;
          }
          .circa-bg { position: relative !important; top: 0 !important; height: 200px !important; border-radius: 0 !important; }
          .circa-product-img,
          .circa-logos { display: none !important; }
          .circa-fade {
            position: relative !important;
            top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
            height: auto !important;
            padding: 16px 20px 24px !important;
            border-radius: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
            -webkit-backdrop-filter: none !important;
            backdrop-filter: none !important;
            background: #f8f8f5 !important;
          }
          .circa-tag   { position: relative !important; top: auto !important; left: auto !important; transform: none !important; display: inline-block !important; }
          .circa-tags-mobile { display: flex !important; flex-wrap: wrap !important; gap: 6px !important; }
          .circa-date  { position: relative !important; top: auto !important; right: auto !important; font-size: 13px !important; text-align: left !important; }
          .circa-title { position: relative !important; top: auto !important; right: auto !important; font-size: 26px !important; text-align: left !important; white-space: normal !important; color: var(--text-primary) !important; }
          .circa-desc  { position: relative !important; top: auto !important; right: auto !important; left: auto !important; font-size: 15px !important; text-align: left !important; white-space: normal !important; }
        }
      `}</style>

      <div
        className="circa-card"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 960,
          aspectRatio: "983 / 509",
          cursor: "pointer",
          margin: "0 auto",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* ── Pink background (bleeds -11.2% above card) ── */}
        <div className="circa-bg" style={{
          position: "absolute",
          top: "-11.2%", left: 0, right: 0, bottom: 0,
          borderRadius: 25,
          background: "rgba(250,151,163,0.3)",
        }} />

        {/* ── PEACE logo — flies up and grows on hover ── */}
        <div className="circa-logos" style={{
          position: "absolute",
          left:  hovered ? "20%" : "4.68%",
          top:   hovered ? "-40.28%" : "-1.77%",
          width: hovered ? "14.35%" : "8.75%",
          aspectRatio: "86 / 40",
          overflow: "hidden",
          pointerEvents: "none", zIndex: 2,
          transform: `rotate(${hovered ? "-18.16deg" : "0deg"})`,
          transformOrigin: "center center",
          transition: `left 500ms ${SPRING}, top 500ms ${SPRING}, width 500ms ${SPRING}, transform 500ms ${SPRING}`,
        }}>
          <img loading="lazy" src={LOGO_PEACE} alt="PEACE" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
        </div>

        {/* ── Penn Medicine logo — flies up and grows on hover ── */}
        <div className="circa-logos" style={{
          position: "absolute",
          left:  hovered ? "31%" : "14.85%",
          top:   hovered ? "-32.43%" : "-3.73%",
          width: hovered ? "22.07%" : "10.89%",
          pointerEvents: "none", zIndex: 2,
          transform: `rotate(${hovered ? "8.57deg" : "0deg"})`,
          transformOrigin: "center center",
          transition: `left 520ms ${SPRING} 30ms, top 520ms ${SPRING} 30ms, width 520ms ${SPRING} 30ms, transform 520ms ${SPRING} 30ms`,
        }}>
          <img loading="lazy" src={LOGO_PENN} alt="Penn Medicine" style={{ width: "100%", objectFit: "contain" }} />
        </div>

        {/* ── Flyer — flies up-left and tilts on hover ── */}
        <div className="circa-product-img" style={{
          position: "absolute",
          left:  hovered ? "-3.15%" : "27.16%",
          top:   hovered ? "-42.24%" : "3.73%",
          width: hovered ? "26.35%" : "20.85%",
          aspectRatio: "205 / 316",
          pointerEvents: "none",
          transform: `rotate(${hovered ? "-26.43deg" : "0deg"})`,
          transformOrigin: "center center",
          transition: `left 500ms ${SPRING}, top 500ms ${SPRING}, width 500ms ${SPRING}, transform 500ms ${SPRING}`,
        }}>
          <img loading="lazy" src={IMG_FLYER} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* ── Laptop — flies up-right and tilts on hover ── */}
        <div className="circa-product-img" style={{
          position: "absolute",
          left:  hovered ? "50.66%" : "50.97%",
          top:   hovered ? "-37.52%" : "15.91%",
          width: hovered ? "54.02%" : "48.42%",
          aspectRatio: "476 / 288",
          pointerEvents: "none",
          transform: `rotate(${hovered ? "13.95deg" : "0deg"})`,
          transformOrigin: "center center",
          transition: `left 520ms ${SPRING} 30ms, top 520ms ${SPRING} 30ms, width 520ms ${SPRING} 30ms, transform 520ms ${SPRING} 30ms`,
        }}>
          <img loading="lazy" src={IMG_LAPTOP} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* ── Tablet — slides up slightly on hover, no rotation ── */}
        <div className="circa-product-img" style={{
          position: "absolute",
          left:  hovered ? "22.99%" : "35.2%",
          top:   hovered ? "-2.95%" : "31.43%",
          width: hovered ? "55.75%" : "37.74%",
          aspectRatio: "371 / 225",
          pointerEvents: "none",
          transition: `left 500ms ${SPRING}, top 500ms ${SPRING}, width 500ms ${SPRING}`,
        }}>
          <img loading="lazy" src={IMG_TABLET} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* ── Gradient fade + frosted glass (retreats on hover) ── */}
        <div className="circa-fade" style={{
          position: "absolute",
          top:   hovered ? "62.67%" : "46.17%",
          left: 0, right: 0, bottom: 0,
          borderRadius: 25,
          background: "linear-gradient(179deg, rgba(248,248,245,0) -22.94%, #F8F8F5 98.92%)",
          WebkitBackdropFilter: "blur(20px)",
          backdropFilter: "blur(20px)",
          pointerEvents: "none",
          transition: `top 480ms ${EASE}`,
        }} />

        {/* ── Tags — scatter and rotate on hover ── */}
        {TAGS.map(({ label, defLeft, defTop, hovLeft, hovTop, hovRotate, delay }) => (
          <span key={label} className="circa-tag" style={{
            position: "absolute",
            left:      hovered ? hovLeft    : defLeft,
            top:       hovered ? hovTop     : defTop,
            transform: hovered ? `rotate(${hovRotate})` : "rotate(0deg)",
            transformOrigin: "center center",
            background: "rgba(250,151,163,0.5)",
            color: "#fff",
            borderRadius: 100,
            padding: "clamp(3px, 0.41cqi, 4px) clamp(12px, 2.03cqi, 20px)" as string,
            fontFamily: "var(--body)",
            fontSize: "clamp(11px, 1.73cqi, 17px)" as string,
            fontWeight: 400,
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            lineHeight: "normal",
            transition: [
              `left      480ms ${SPRING} ${delay}`,
              `top       480ms ${SPRING} ${delay}`,
              `transform 480ms ${SPRING} ${delay}`,
            ].join(", "),
          }}>
            {label}
          </span>
        ))}

        {/* ── Date ── */}
        <p className="circa-date" style={{
          position: "absolute",
          right: "7.63%",
          textAlign: "right",
          top: hovered ? "69.35%" : "55.6%",
          margin: 0,
          fontFamily: "var(--body)",
          fontWeight: 500,
          fontSize: "clamp(10px, 1.3cqi, 13px)" as string,
          lineHeight: 1.3,
          color: "var(--text-primary)",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          transition: `top 480ms ${EASE} 40ms`,
        }}>
          Spring 2025
        </p>

        {/* ── Title ── */}
        <p className="circa-title" style={{
          position: "absolute",
          top:   hovered ? "73.48%" : "59.72%",
          right: "7.63%",
          textAlign: "right",
          margin: 0,
          fontFamily: "var(--body)",
          fontWeight: 700,
          fontSize: "clamp(16px, 4.07cqi, 40px)" as string,
          lineHeight: "normal",
          color: hovered ? "var(--circa-primary)" : "var(--text-primary)",
          whiteSpace: "nowrap",
          transition: `top 480ms ${EASE} 40ms, color 320ms ${EASE} 80ms`,
        }}>
          CIRCA
        </p>

        {/* ── Description ── */}
        <p className="circa-desc" style={{
          position: "absolute",
          top:   hovered ? "86.84%" : "73.08%",
          right: "7.63%",
          left:  "10.48%",
          textAlign: "right",
          margin: 0,
          fontFamily: "var(--body)",
          fontWeight: 400,
          fontSize: "clamp(12px, 2.03cqi, 20px)" as string,
          lineHeight: 1.3,
          color: "var(--text-secondary)",
          whiteSpace: "nowrap",
          transition: `top 480ms ${EASE} 20ms`,
        }}>
          Rethinking trust in AI-powered pregnancy support.
        </p>

      </div>
    </>
  );
}
