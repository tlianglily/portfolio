"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface ProjectMeta {
  key: string;
  value: string;
}

export interface ProjectSidebarGroup {
  label: string;
  items: Array<{ id: string; label: string }>;
}

export interface ProjectSection {
  id: string;
  title: string;
  body: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imageAspect?: string; // e.g. "16/9", "4/3"
}

export interface NextProject {
  title: string;
  year: string;
  href: string;
  coverUrl: string;
  tint: string;
}

export interface ProjectLayoutProps {
  title: string;
  year: string;
  tagline: string;
  sponsoredBy?: React.ReactNode;
  sponsorLabel?: string;
  description: React.ReactNode;
  heroImageUrl: string;
  heroTint: string;          // e.g. "rgba(122,54,253,0.55)"
  accentVar: string;         // CSS variable name, e.g. "var(--la-primary)"
  meta: ProjectMeta[];
  sidebarGroups: ProjectSidebarGroup[];
  sections: ProjectSection[];
  titleImageUrl?: string;       // optional image to replace the text title
  nextProject: NextProject;
  prevProject?: NextProject;
}

export function ProjectLayout({
  title,
  year,
  tagline,
  sponsoredBy,
  sponsorLabel = "Sponsored by",
  description,
  heroImageUrl,
  heroTint,
  accentVar,
  meta,
  sidebarGroups,
  sections,
  titleImageUrl,
  nextProject,
  prevProject,
}: ProjectLayoutProps) {
  const sidebarRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    const NAV = 96;
    const update = () => {
      const h = sidebar.offsetHeight;
      const vh = window.innerHeight;
      const centered = Math.round((vh - h) / 2);
      sidebar.style.top = `${Math.max(NAV, centered)}px`;
      sidebar.style.transform = "none";
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const ids = sidebarGroups.flatMap(g => g.items.map(i => i.id));
    const onScroll = () => {
      const vh = window.innerHeight;
      let bestId = ids[0] ?? "";
      let bestVisible = -1;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const visible = Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
        if (visible > bestVisible) { bestVisible = visible; bestId = id; }
      }
      setActiveId(bestId);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sidebarGroups]);

  return (
    <>
      <style>{`
        body { animation: pageFadeIn 400ms ease both; }

        /* ── Hero ───────────────────────────────── */
        .proj-hero {
          width: 100%; min-height: 420px;
          position: relative; overflow: hidden;
          background-size: cover; background-position: center;
        }
        .proj-hero-tint { position: absolute; inset: 0; }
        .proj-hero-content { position: relative; z-index: 1; width: 100%; max-width: var(--max-width); margin: 0 auto; padding: 0 64px; min-height: 420px; }
.proj-intro-title {
          font-family: var(--display); font-weight: 900; font-style: italic;
          font-size: clamp(36px, 5vw, 64px); line-height: 1; letter-spacing: -0.02em;
          color: var(--text-primary); margin: 0;
          font-variation-settings: "opsz" 144, "WONK" 1;
        }

        /* ── Intro ──────────────────────────────── */
        .proj-intro {
          display: grid; grid-template-columns: 2fr 3fr; gap: 72px;
          padding: 52px 0 52px;
        }
        .intro-left { display: flex; flex-direction: column; gap: 20px; }
        .proj-tagline {
          font-family: "DM Sans", sans-serif; font-size: 19px; font-weight: 400; font-style: italic;
          line-height: 1.35; letter-spacing: -0.02em; color: var(--text-primary);
        }
        .proj-sponsored {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .proj-sponsored-label {
          font-family: var(--body); font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--text-tertiary); white-space: nowrap;
        }
        .proj-sponsored-logos {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
        }
        .proj-sponsored-logos img {
          height: 48px; width: auto; object-fit: contain; opacity: 0.8;
        }
        .proj-sponsored-logo-crop {
          height: 48px; overflow: hidden; flex-shrink: 0;
        }
        .proj-sponsored-logo-crop img {
          height: 119%; width: auto; object-fit: cover; object-position: top; opacity: 0.8;
        }
        .intro-right { display: flex; flex-direction: column; gap: 28px; }
        .proj-desc { font-family: var(--body); font-size: 15px; color: var(--text-secondary); line-height: 1.85; }
        .proj-desc i { font-family: var(--emphasis); font-weight: 700; font-style: italic; color: var(--text-primary); }
        .meta-table { display: flex; flex-direction: column; }
        .meta-row {
          display: grid; grid-template-columns: 140px 1fr; gap: 16px;
          padding: 11px 0; border-top: 1px solid var(--hairline); align-items: start;
        }
        .meta-key {
          font-family: var(--body); font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--text-tertiary); padding-top: 3px;
        }
        .meta-val { font-family: var(--body); font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

        /* ── Body ───────────────────────────────── */
        .proj-body { display: grid; grid-template-columns: max-content 1fr; gap: 60px; padding: 16px 0 0; }

        /* Sidebar */
        .proj-sidebar-col {
          align-self: stretch;
        }
        .proj-sidebar {
          position: sticky;
          top: 50%;
          transform: translateY(-50%);
          height: fit-content;
          padding-right: 5px;
        }
        .proj-sidebar > div + div {
          margin-top: 14px;
          padding-top: 14px;
          position: relative;
        }
        .proj-sidebar > div + div::before {
          content: "";
          display: block;
          width: 100%;
          height: 1px;
          background: var(--hairline);
          margin-bottom: 14px;
        }
        .sidebar-label {
          font-family: var(--body); font-size: 10px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-primary); display: block;
          padding: 0 0 10px;
        }
        .sidebar-link {
          font-family: var(--body); font-size: 13px; font-weight: 400;
          color: var(--text-tertiary); display: block; padding: 6px 0;
          text-decoration: none; transition: color 200ms ease;
        }
        .sidebar-link::after {
          content: attr(data-content);
          display: block; height: 0; overflow: hidden; visibility: hidden;
          font-weight: 600; pointer-events: none; user-select: none;
        }
        .sidebar-link:hover,
        .sidebar-link--active { color: var(--proj-accent); font-weight: 600; }

        /* Content */
        .proj-content { display: flex; flex-direction: column; gap: 64px; padding-bottom: 96px; min-width: 0; }
        .proj-section { scroll-margin-top: 100px; }
        .proj-section-heading {
          font-family: var(--body); font-size: 20px; font-weight: 600;
          letter-spacing: -0.02em; margin-bottom: 16px; color: var(--proj-accent);
        }
        .proj-section-body { font-family: var(--body); font-size: 15px; color: var(--text-secondary); line-height: 1.85; }
        .proj-section-body p + p { margin-top: 12px; }
        .proj-section-body strong { font-weight: 600; color: var(--text-primary); }
        .proj-section-body em { font-family: var(--emphasis); font-weight: 700; font-style: italic; color: var(--text-primary); }
        .proj-section-body h4 {
          font-family: var(--body); font-size: 17px; font-weight: 600;
          letter-spacing: -0.01em; color: var(--text-primary); line-height: 1.3;
          margin-top: 32px; margin-bottom: 8px;
        }
        .proj-section-body h4:first-child { margin-top: 0; }
        .proj-image {
          width: 100%; border-radius: 16px;
          background: var(--surface); border: 1px solid var(--hairline);
          overflow: hidden; margin-top: 24px;
        }
        .proj-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .proj-coming {
          font-family: var(--body); font-size: 13px; color: var(--text-tertiary);
          font-style: italic; padding: 28px 0 0; border-top: 1px solid var(--hairline);
        }

        /* ── Next / Prev project ────────────────── */
        .proj-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 40px 0 0;
          border-top: 1px solid var(--hairline);
          margin-bottom: 0;
        }
        .proj-nav-card {
          position: relative; display: block; text-decoration: none;
          overflow: hidden; border-radius: 12px; height: 110px; cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: transform 280ms cubic-bezier(.2,.7,.2,1), box-shadow 280ms ease;
        }
        .proj-nav-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.16);
        }
        .proj-nav-card-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          transition: transform 600ms cubic-bezier(.2,.7,.2,1);
        }
        .proj-nav-card:hover .proj-nav-card-bg { transform: scale(1.06); }
        .proj-nav-card-tint {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.48);
          transition: background 280ms ease;
        }
        .proj-nav-card:hover .proj-nav-card-tint { background: rgba(0,0,0,0.35); }
        .proj-nav-card-content {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
          padding: 0 24px; gap: 2px; text-align: center;
        }
        .proj-nav-card-dir {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: var(--body); font-size: 10px; font-weight: 600;
          letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.5);
          margin-bottom: 5px;
        }
        .proj-nav-card.next .proj-nav-card-dir { flex-direction: row-reverse; }
        .proj-nav-card-title {
          font-family: var(--display); font-weight: 900; font-style: italic;
          font-size: clamp(20px, 2vw, 28px); line-height: 1; letter-spacing: -0.03em;
          color: #fff; text-align: center;
        }
        .proj-nav-card-year {
          font-family: var(--body); font-size: 11px; font-weight: 400;
          color: rgba(255,255,255,0.4); margin-top: 4px; letter-spacing: 0.02em;
        }
        @media (max-width: 768px) {
          .proj-nav-card-year { display: none; }
        }
        @media (max-width: 640px) {
          .proj-nav { grid-template-columns: 1fr 1fr; gap: 12px; }
        }

        /* ── Responsive ─────────────────────────── */
        @media (max-width: 960px) {
          .proj-intro { grid-template-columns: 1fr; gap: 36px; }
          .proj-body  { grid-template-columns: 1fr; gap: 36px; }
          .proj-sidebar-col { display: none; }
        }
        @media (max-width: 768px) {
          .proj-hero-content { padding: 0 24px; }
          .intro-left { align-items: center; text-align: center; }
          .proj-intro-title-img { margin: 0 auto; }
          .proj-tagline { text-align: center; }
          .proj-sponsored { justify-content: center; align-self: center; }
        }
        @media (max-width: 640px) {
          .proj-hero { min-height: 300px; }
          .proj-hero-content { min-height: 300px; padding: 0 24px; }
          .proj-intro-title { font-size: clamp(32px, 8vw, 48px); }
        }
      `}</style>

      <div style={{ "--proj-accent": accentVar } as React.CSSProperties}>

      {/* ── Hero ── */}
      <div
        className="proj-hero"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="proj-hero-tint" style={{ background: heroTint }} />
      </div>

      {/* ── Main content ── */}
      <div className="wrap">

        {/* Intro */}
        <div className="proj-intro">
          <div className="intro-left">
            {titleImageUrl
              ? <img src={titleImageUrl} alt={title} className="proj-intro-title-img" style={{ maxWidth: "260px", width: "100%", display: "block" }} />
              : <h1 className="proj-intro-title">{title}</h1>
            }
            <p className="proj-tagline">{tagline}</p>
            {sponsoredBy && (
              <div className="proj-sponsored">
                <span className="proj-sponsored-label">{sponsorLabel}</span>
                <div className="proj-sponsored-logos">{sponsoredBy}</div>
              </div>
            )}
          </div>
          <div className="intro-right">
            <div className="proj-desc">{description}</div>
            <div className="meta-table">
              {meta.map(({ key, value }) => (
                <div key={key} className="meta-row">
                  <span className="meta-key">{key}</span>
                  <span className="meta-val">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Body: sidebar + content */}
        <div className="proj-body">

          {/* Sidebar */}
          <div className="proj-sidebar-col">
            <aside className="proj-sidebar" ref={sidebarRef}>
              {sidebarGroups.map((group) => (
                <div key={group.label}>
                  <span className="sidebar-label">{group.label}</span>
                  {group.items.map(({ id, label }) => (
                    <a key={id} href={`#${id}`} className={`sidebar-link${activeId === id ? " sidebar-link--active" : ""}`} data-content={label}>
                      {label}
                    </a>
                  ))}
                </div>
              ))}
            </aside>
          </div>

          {/* Content */}
          <div className="proj-content">
            {sections.map(({ id, title: sTitle, body, imageUrl, imageAlt, imageAspect }) => (
              <div key={id} id={id} className="proj-section">
                <h3 className="proj-section-heading">{sTitle}</h3>
                <div className="proj-section-body">{body}</div>
                {imageUrl && (
                  <div className="proj-image" style={imageAspect ? { aspectRatio: imageAspect } : {}}>
                    <img src={imageUrl} alt={imageAlt ?? ""} />
                  </div>
                )}
              </div>
            ))}

          </div>

        </div>

        {/* Prev / Next project */}
        <div className="proj-nav" style={{ gridTemplateColumns: prevProject ? "1fr 1fr" : "1fr" }}>
          {prevProject && (
            <Link href={prevProject.href} className="proj-nav-card prev">
              <div className="proj-nav-card-bg" style={{ backgroundImage: `url(${prevProject.coverUrl})` }} />
              <div className="proj-nav-card-tint" style={{ background: prevProject.tint ?? "rgba(0,0,0,0.52)" }} />
              <div className="proj-nav-card-content">
                <span className="proj-nav-card-dir">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 8H3M7 4l-4 4 4 4" />
                  </svg>
                  Previous
                </span>
                <h2 className="proj-nav-card-title">{prevProject.title}</h2>
                <span className="proj-nav-card-year">{prevProject.year}</span>
              </div>
            </Link>
          )}
          <Link href={nextProject.href} className="proj-nav-card next">
            <div className="proj-nav-card-bg" style={{ backgroundImage: `url(${nextProject.coverUrl})` }} />
            <div className="proj-nav-card-tint" style={{ background: nextProject.tint ?? "rgba(0,0,0,0.52)" }} />
            <div className="proj-nav-card-content">
              <span className="proj-nav-card-dir">
                Next
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
              <h2 className="proj-nav-card-title">{nextProject.title}</h2>
              <span className="proj-nav-card-year">{nextProject.year}</span>
            </div>
          </Link>
        </div>

      </div>

      {/* ── CTA ── */}
      <div className="cta-band" style={{ marginTop: 0 }}>
        <div className="cta-inner">
          <div className="cta-text">
            <h3>Let&apos;s <i>work together.</i></h3>
            <p>Currently seeking full-time product design roles for 2026.</p>
          </div>
          <div className="cta-btns">
            <a href="mailto:tlianglilydesign@gmail.com" className="cta-btn-dark">Email me →</a>
            <Link href="/resume" className="cta-btn-outline">View resume</Link>
          </div>
        </div>
      </div>

      </div>{/* end --proj-accent wrapper */}
    </>
  );
}
