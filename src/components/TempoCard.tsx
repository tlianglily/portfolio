"use client";

import { useState } from "react";

const BG_IMAGE    = "/images/tempo-bg.webp";
const IMG_WRIST   = "/images/tempo-wrist.png";
const IMG_PHONE   = "/images/tempo-phone.png";
const IMG_TABLET  = "/images/tempo-tablet.png";
const LOGO_DEF    = "/images/tempo-logo-def.svg";  // default: black
const LOGO_HOV    = "/images/tempo-logo-hov.svg";  // hover: repositioned variant

const SPRING = "cubic-bezier(0.34, 1.15, 0.64, 1)";
const EASE   = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const TAGS = [
  { label: "UI/UX",    defLeft: "10.48%", defTop: "61.89%", hovLeft: "3.76%",  hovTop: "40.08%", hovRotate: "-18.93deg", delay: "0ms"   },
  { label: "Hardware", defLeft: "20.40%", defTop: "61.89%", hovLeft: "13.73%", hovTop: "22.20%", hovRotate: "-6.59deg",  delay: "50ms"  },
  { label: "POS",      defLeft: "33.43%", defTop: "61.89%", hovLeft: "22.28%", hovTop: "30.65%", hovRotate: "14.46deg",  delay: "100ms" },
];

export function TempoCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .tempo-card { container-type: inline-size; }

        @media (max-width: 600px) {
          .tempo-card {
            aspect-ratio: auto !important;
            height: auto !important;
            border-radius: 16px !important;
            overflow: hidden !important;
          }
          .tempo-bg { position: relative !important; top: 0 !important; height: 200px !important; border-radius: 0 !important; }
          .tempo-product-img,
          .tempo-wordmark { display: none !important; }
          .tempo-fade {
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
          .tempo-tag   { position: relative !important; top: auto !important; left: auto !important; transform: none !important; display: inline-block !important; }
          .tempo-date  { position: relative !important; top: auto !important; right: auto !important; font-size: 13px !important; text-align: left !important; }
          .tempo-title { position: relative !important; top: auto !important; right: auto !important; font-size: 26px !important; text-align: left !important; white-space: normal !important; color: var(--text-primary) !important; }
          .tempo-desc  { position: relative !important; top: auto !important; right: auto !important; left: auto !important; font-size: 15px !important; text-align: left !important; white-space: normal !important; }
        }
      `}</style>

      <div
        className="tempo-card"
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

        {/* ── Background photo + purple tint (bleeds -11.2% above card) ── */}
        <div className="tempo-bg" style={{
          position: "absolute",
          top: "-11.2%", left: 0, right: 0, bottom: 0,
          borderRadius: 25, overflow: "hidden",
        }}>
          <img src={BG_IMAGE} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(95,36,159,0.1)" }} />
        </div>

        {/* ── Above-card: "Tempo" wordmark text (static both states) ── */}
        <p className="tempo-wordmark" style={{
          position: "absolute",
          left: "4.2%", top: "-5.7%",
          margin: 0,
          fontFamily: "var(--body)",
          fontWeight: 700,
          fontSize: "clamp(14px, 2.44cqi, 24px)" as string,
          color: "rgba(248,248,245,0.97)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 2,
        }}>
          Tempo
        </p>

        {/* ── NCR VOYIX logo — swaps asset and repositions on hover ── */}
        <div
          className="tempo-wordmark"
          style={{
            position: "absolute",
            left:  hovered ? "40.08%" : "14.95%",
            top:   hovered ? "-26.92%" : "-4.13%",
            width: hovered ? "18%" : "11.72%",
            aspectRatio: "117.172 / 16.1043",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 2,
            transition: `left 500ms ${SPRING}, top 500ms ${SPRING}, width 500ms ${SPRING}`,
          }}
        >
          <img
            src={hovered ? LOGO_HOV : LOGO_DEF}
            alt="NCR VOYIX"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>

        {/* ── Wristband — flies up and tilts on hover ── */}
        <div className="tempo-product-img" style={{
          position: "absolute",
          left:  hovered ? "7.51%"   : "1.63%",
          top:   hovered ? "-29.86%" : "11.39%",
          width: hovered ? "52.45%"  : "53.92%",
          height: hovered ? "90.97%" : "77.4%",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
          pointerEvents: "none",
          transition: `left 500ms ${SPRING}, top 500ms ${SPRING}, width 500ms ${SPRING}, height 500ms ${SPRING}`,
        }}>
          <img src={IMG_WRIST} alt="" style={{
            width: "92%", height: "65%",
            objectFit: "cover", flexShrink: 0,
            transform: `rotate(${hovered ? "14.76deg" : "7.85deg"})`,
            transition: `transform 500ms ${SPRING}`,
          }} />
        </div>

        {/* ── Phone — flies up and rotates dramatically on hover ── */}
        <div className="tempo-product-img" style={{
          position: "absolute",
          left:  hovered ? "34.69%" : "31.74%",
          top:   hovered ? "-25.54%" : "33.79%",
          width: hovered ? "28.08%"  : "29.81%",
          aspectRatio: "293 / 184",
          pointerEvents: "none",
          transition: `left 520ms ${SPRING} 30ms, top 520ms ${SPRING} 30ms, width 520ms ${SPRING} 30ms`,
        }}>
          <img src={IMG_PHONE} alt="" style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: `rotate(${hovered ? "60deg" : "0deg"})`,
            transition: `transform 520ms ${SPRING} 30ms`,
          }} />
        </div>

        {/* ── Tablet — flies up-right and tilts on hover ── */}
        <div className="tempo-product-img" style={{
          position: "absolute",
          left:  hovered ? "53.31%" : "55.14%",
          top:   hovered ? "-41.85%" : "13.95%",
          width: hovered ? "51.98%"  : "33.57%",
          aspectRatio: "330 / 367",
          pointerEvents: "none",
          transition: `left 500ms ${SPRING}, top 500ms ${SPRING}, width 500ms ${SPRING}`,
        }}>
          <img src={IMG_TABLET} alt="" style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: `rotate(${hovered ? "8.93deg" : "0deg"})`,
            transition: `transform 500ms ${SPRING}`,
          }} />
        </div>

        {/* ── Gradient fade + frosted glass (retreats on hover) ── */}
        <div className="tempo-fade" style={{
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
          <span key={label} className="tempo-tag" style={{
            position: "absolute",
            left:      hovered ? hovLeft    : defLeft,
            top:       hovered ? hovTop     : defTop,
            transform: hovered ? `rotate(${hovRotate})` : "rotate(0deg)",
            transformOrigin: "center center",
            background: "rgba(95,36,159,0.5)",
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
        <p className="tempo-date" style={{
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
          Fall 2023
        </p>

        {/* ── Title ── */}
        <p className="tempo-title" style={{
          position: "absolute",
          top:   hovered ? "73.48%" : "59.72%",
          right: "7.63%",
          textAlign: "right",
          margin: 0,
          fontFamily: "var(--body)",
          fontWeight: 700,
          fontSize: "clamp(16px, 4.07cqi, 40px)" as string,
          lineHeight: "normal",
          color: hovered ? "var(--tempo-primary)" : "var(--text-primary)",
          whiteSpace: "nowrap",
          transition: `top 480ms ${EASE} 40ms, color 320ms ${EASE} 80ms`,
        }}>
          Tempo
        </p>

        {/* ── Description ── */}
        <p className="tempo-desc" style={{
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
          Innovative POS and communication system for future restaurant.
        </p>

      </div>
    </>
  );
}
