"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const PAGE_COLORS: Record<string, string> = {
  "/projects/little-autonomy":    "var(--la-primary)",
  "/projects/circa":              "var(--circa-primary)",
  "/projects/tempo":              "var(--tempo-primary)",
  "/projects/medegg":             "var(--medegg-primary)",
  "/projects/wash-bus":           "var(--washbus-primary)",
  "/projects/horizon":            "var(--horizon-primary)",
  "/projects/anyi":               "var(--anyi-primary)",
  "/projects/color-mixing-marker":"var(--cmm-primary)",
  "/projects/summit-ware":        "var(--sw-primary)",
};

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const bg = PAGE_COLORS[pathname] ?? "var(--text-primary)";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .back-to-top {
          display: none;
          position: fixed;
          bottom: 24px;
          right: 20px;
          z-index: 300;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #fff;
          border: none;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 240ms ease, transform 240ms ease, background 300ms ease;
          pointer-events: none;
        }
        .back-to-top.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .back-to-top:active {
          transform: scale(0.92);
        }
        @media (max-width: 768px) {
          .back-to-top { display: flex; }
        }
      `}</style>
      <button
        className={`back-to-top${visible ? " show" : ""}`}
        style={{ background: bg }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11V3M3 6l4-4 4 4" />
        </svg>
      </button>
    </>
  );
}
