"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/",         label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about",    label: "About" },
  { href: "/resume",   label: "Resume" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [pill, setPill] = useState<{ left: number; width: number; top: number; height: number } | null>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Close mobile menu after navigation settles.
  useEffect(() => {
    const id = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const container = linksRef.current;
    if (!container) return;
    const active = container.querySelector<HTMLElement>("[data-active='true']");
    if (!active) { setPill(null); return; }
    const cRect = container.getBoundingClientRect();
    const aRect = active.getBoundingClientRect();
    setPill({
      left:   aRect.left - cRect.left,
      top:    aRect.top  - cRect.top,
      width:  aRect.width,
      height: aRect.height,
    });
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/projects"
      ? pathname === "/projects" || pathname.startsWith("/projects/")
      : pathname === href;

  return (
    <>
      <style>{`
        .nav-link:not([data-active='true']):hover { color: var(--accent-red) !important; }
        .nav-mark:hover { opacity: 0.8; }

        /* Hamburger */
        .nav-hamburger {
          display: none; flex-direction: column; justify-content: center; gap: 4px;
          width: 30px; height: 30px; cursor: pointer;
          background: none; border: none; padding: 4px; border-radius: 8px;
          transition: background 200ms ease;
        }
        .nav-hamburger:hover { background: rgba(50,50,49,0.06); }
        .nav-hamburger span {
          display: block; width: 100%; height: 2px; background: var(--text-secondary);
          border-radius: 2px; transition: transform 300ms ease, opacity 300ms ease;
          transform-origin: center;
        }
        .nav-open .nav-hamburger span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nav-open .nav-hamburger span:nth-child(2) { opacity: 0; }
        .nav-open .nav-hamburger span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* Mobile dropdown */
        .nav-dropdown {
          display: none; position: fixed; z-index: 199;
          top: 76px; left: 20px; right: 20px;
          background: rgba(248,248,245,0.96);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid var(--hairline); border-radius: 20px;
          padding: 8px; flex-direction: column; gap: 2px;
        }
        .nav-dropdown.open { display: flex; }
        .nav-dropdown a {
          font-family: var(--body); font-size: 15px; font-weight: 400;
          color: var(--text-primary); text-decoration: none;
          padding: 13px 20px; border-radius: 12px;
          transition: background 180ms ease, color 180ms ease;
          display: block;
        }
        .nav-dropdown a:hover { background: var(--surface); }
        .nav-dropdown a.mob-active { color: var(--accent-red); font-weight: 600; }

        @media (max-width: 768px) {
          .nav-header { padding-left: 20px !important; padding-right: 20px !important; }
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <header
        className={`nav-header${menuOpen ? " nav-open" : ""}`}
        style={{
          position: "fixed", top: 0, left: 0, right: 0,
          zIndex: 200,
          padding: scrolled ? "12px 64px" : "20px 64px",
          transition: "padding 300ms ease",
        }}
      >
        <div style={{
          maxWidth: "var(--max-width)", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "var(--nav-bg)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid var(--hairline)",
          borderRadius: "999px", padding: "10px 10px 10px 28px",
        }}>
          <Link href="/" className="nav-mark" style={{
            fontFamily: "var(--display)", fontSize: "22px",
            color: "var(--accent-red)", fontWeight: 400, fontStyle: "normal",
            textDecoration: "none", whiteSpace: "nowrap", transition: "opacity 200ms ease",
          }}>
            <em style={{ fontStyle: "italic", fontWeight: 900 }}>Lily</em>
            {" "}Liang
          </Link>

          {/* Desktop links */}
          <div ref={linksRef} className="nav-links-desktop" style={{ display: "flex", gap: 4, alignItems: "center", position: "relative" }}>
            {pill && (
              <span style={{
                position: "absolute",
                left: pill.left, top: pill.top,
                width: pill.width, height: pill.height,
                background: "var(--accent-red)", borderRadius: "999px",
                transition: "left 280ms cubic-bezier(.4,0,.2,1), width 280ms cubic-bezier(.4,0,.2,1)",
                pointerEvents: "none",
              }} />
            )}
            {LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  data-active={active ? "true" : "false"}
                  className="nav-link"
                  style={{
                    fontFamily: "var(--body)", fontSize: 13,
                    fontWeight: active ? 700 : 400,
                    color: active ? "#FFF8F3" : "var(--text-primary)",
                    textDecoration: "none", padding: "10px 20px",
                    borderRadius: "999px", position: "relative", zIndex: 1,
                    transition: "color 220ms ease",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Hamburger button */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <div className={`nav-dropdown${menuOpen ? " open" : ""}`}>
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={isActive(href) ? "mob-active" : ""}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
