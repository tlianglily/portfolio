"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export function ImageLightbox() {
  const [activeSrc, setActiveSrc] = useState<string | null>(null);
  const [activeAlt, setActiveAlt] = useState("");
  const pathname = usePathname();

  // Only active on project pages
  const isProjectPage = pathname.startsWith("/projects/") && pathname !== "/projects";

  const close = useCallback(() => setActiveSrc(null), []);

  useEffect(() => {
    if (!isProjectPage) return;

    const handler = (e: MouseEvent) => {
      if (window.innerWidth > 768) return;

      const target = e.target as HTMLElement;
      if (target.tagName !== "IMG") return;

      const img = target as HTMLImageElement;

      // Only trigger on explicitly opted-in images
      if (!img.hasAttribute("data-lightbox")) return;

      e.preventDefault();
      setActiveSrc(img.src);
      setActiveAlt(img.alt || "");
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [isProjectPage]);

  // Close on Escape
  useEffect(() => {
    if (!activeSrc) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeSrc, close]);

  // Reset after navigation settles.
  useEffect(() => {
    const id = window.setTimeout(close, 0);
    return () => window.clearTimeout(id);
  }, [pathname, close]);

  if (!activeSrc) return null;

  return (
    <>
      <style>{`
        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(255,255,255,0.96);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
          cursor: zoom-out;
          animation: lbFadeIn 180ms ease both;
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lightbox-img {
          max-width: 100%; max-height: 90svh;
          object-fit: contain; border-radius: 8px;
          animation: lbScaleIn 200ms cubic-bezier(.2,.7,.2,1) both;
          cursor: default;
        }
        @keyframes lbScaleIn {
          from { transform: scale(0.94); opacity: 0; }
          to   { transform: scale(1);    opacity: 1; }
        }
        .lightbox-close {
          position: absolute; top: 16px; right: 16px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.12);
          color: #333; font-size: 18px; line-height: 1;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 150ms ease;
        }
        .lightbox-close:hover { background: rgba(0,0,0,0.12); }
      `}</style>
      <div className="lightbox-overlay" onClick={close}>
        <img
          src={activeSrc}
          alt={activeAlt}
          className="lightbox-img"
          onClick={e => e.stopPropagation()}
        />
        <button className="lightbox-close" onClick={close} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            <path d="M1 1l10 10M11 1L1 11" />
          </svg>
        </button>
      </div>
    </>
  );
}
