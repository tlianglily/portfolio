"use client";

import { useState } from "react";

const BG_IMAGE  = "/images/la/la-bg.webp";
const PHONE_1   = "/images/la/la-phone-1.webp";
const PHONE_2   = "/images/la/la-phone-2.webp";
const LOGO_ICON = "/images/la/la-logo.svg";

// Spring for elements flying in, smooth ease for colour/gradient
const SPRING = "cubic-bezier(0.34, 1.15, 0.64, 1)";
const EASE   = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

const TAGS = [
  {
    label: "UX Research",
    defLeft: "10.48%", defTop: "61.9%",
    hovLeft: "1.22%",  hovTop: "11.98%",
    hovRotate: "-25.64deg",
    delay: "0ms",
  },
  {
    label: "Interaction",
    defLeft: "26.18%", defTop: "61.9%",
    hovLeft: "17.4%",  hovTop: "1.96%",
    hovRotate: "22.16deg",
    delay: "50ms",
  },
  {
    label: "Mobile",
    defLeft: "40.14%", defTop: "61.9%",
    hovLeft: "31.33%", hovTop: "11%",
    hovRotate: "-23.2deg",
    delay: "100ms",
  },
];

export function LittleAutonomyCard() {
  const [hovered, setHovered] = useState(false);

  return (
      <div
        className="la-card"
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

        {/* ── Background photo + violet tint (bleeds -11.2% above card) ── */}
        <div className="la-bg" style={{
          position: "absolute",
          top: "-11.2%", left: 0, right: 0, bottom: 0,
          borderRadius: 25,
          overflow: "hidden",
        }}>
          <img
            src={BG_IMAGE} alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(151,71,255,0.1)" }} />
        </div>

        {/* ── Logo icon + wordmark grouped so they always align ── */}
        <div
          className="la-wordmark-icon la-wordmark-text"
          style={{
            position: "absolute",
            left: "5.49%", top: "-8%",
            display: "flex", alignItems: "center", gap: 6,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <img
            src={LOGO_ICON} alt=""
            style={{ width: "2.75%", minWidth: 18, aspectRatio: "27 / 39", display: "block" }}
          />
          <p
            style={{
              margin: 0,
              fontFamily: "'Montserrat Alternates', sans-serif",
              fontSize: "clamp(11px, 1.63cqi, 16px)" as string,
              color: "#fbf8f3",
              whiteSpace: "nowrap",
              lineHeight: "normal",
            }}
          >
            <span style={{ fontWeight: 500 }}>Little </span>
            <span style={{ fontWeight: 700 }}>Autonomy</span>
          </p>
        </div>

        {/* ── Phone 1 — flies up-left and grows on hover ── */}
        <div
          className="la-phone-1-wrap"
          style={{
            position: "absolute",
            left:  hovered ? "40.9%"   : "51.37%",
            top:   hovered ? "-20%"    : "8.06%",
            width: hovered ? "30.5%"   : "28.89%",
            aspectRatio: "283.79 / 408.64",
            pointerEvents: "none",
            transition: `left 500ms ${SPRING}, top 500ms ${SPRING}, width 500ms ${SPRING}`,
          }}
        >
          <img
            src={PHONE_1} alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain", transform: "rotate(-18.95deg)" }}
          />
        </div>

        {/* ── Phone 2 — flies up-right, grows more and tilts further ── */}
        <div
          className="la-phone-2-wrap"
          style={{
            position: "absolute",
            left:  hovered ? "64.8%"   : "71.01%",
            top:   hovered ? "-33%"    : "8.06%",
            width: hovered ? "27%"     : "21.26%",
            aspectRatio: "209.09 / 388.58",
            pointerEvents: "none",
            transition: `left 520ms ${SPRING} 30ms, top 520ms ${SPRING} 30ms, width 520ms ${SPRING} 30ms`,
          }}
        >
          <img
            src={PHONE_2} alt=""
            style={{
              width: "100%", height: "100%", objectFit: "contain",
              transform: `rotate(${hovered ? "14.82deg" : "5.84deg"})`,
              transition: `transform 520ms ${SPRING} 30ms`,
            }}
          />
        </div>

        {/* ── Gradient fade + frosted glass (retreats on hover, revealing more image) ── */}
        <div className="la-fade" style={{
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

        {/* ── Tags — scatter and rotate out on hover ── */}
        {TAGS.map(({ label, defLeft, defTop, hovLeft, hovTop, hovRotate, delay }) => (
          <span key={label} className="la-tag" style={{
            position: "absolute",
            left:      hovered ? hovLeft    : defLeft,
            top:       hovered ? hovTop     : defTop,
            transform: hovered ? `rotate(${hovRotate})` : "rotate(0deg)",
            transformOrigin: "center center",
            background: "rgba(122,54,253,0.5)",
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
        <p className="la-date" style={{
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
          Fall 2025 – Spring 2026
        </p>

        {/* ── Title ── */}
        <p className="la-title" style={{
          position: "absolute",
          top:  hovered ? "73.48%" : "59.72%",
          right: "7.63%",
          textAlign: "right",
          margin: 0,
          fontFamily: "var(--body)",
          fontWeight: 700,
          fontSize: "clamp(16px, 4.07cqi, 40px)" as string,
          lineHeight: "normal",
          color: hovered ? "var(--la-primary)" : "var(--text-primary)",
          whiteSpace: "nowrap",
          transition: `top 480ms ${EASE} 40ms, color 320ms ${EASE} 80ms`,
        }}>
          Little Autonomy
        </p>

        {/* ── Description ── */}
        <p className="la-desc" style={{
          position: "absolute",
          right: "7.63%",
          textAlign: "right",
          top: hovered ? "86.84%" : "73.08%",
          margin: 0,
          fontFamily: "var(--body)",
          fontWeight: 400,
          fontSize: "clamp(12px, 2.03cqi, 20px)" as string,
          lineHeight: 1.3,
          color: "var(--text-secondary)",
          whiteSpace: "nowrap",
          transition: `top 480ms ${EASE} 20ms`,
        }}>
          A Montessori-inspired app that helps parents raise more independent children at home.
        </p>

        {/* ── Mobile-only static tag row (inside la-fade via CSS flex) ── */}
        <div className="la-mobile-tags" style={{ display: "none" }}>
          <span className="la-tag" style={{ background: "rgba(122,54,253,0.5)", color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 14, fontFamily: "var(--body)", fontWeight: 400 }}>UX Research</span>
          <span className="la-tag" style={{ background: "rgba(122,54,253,0.5)", color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 14, fontFamily: "var(--body)", fontWeight: 400 }}>Interaction</span>
          <span className="la-tag" style={{ background: "rgba(122,54,253,0.5)", color: "#fff", borderRadius: 100, padding: "2px 10px", fontSize: 14, fontFamily: "var(--body)", fontWeight: 400 }}>Mobile</span>
        </div>

      </div>
  );
}
