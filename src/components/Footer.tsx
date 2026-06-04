import Link from "next/link";

export function Footer() {
  return (
    <>
      <style>{`
        .footer-link { transition: color 180ms ease; }
        .footer-link:hover { color: var(--accent-red) !important; }
        .footer-inner {
          max-width: var(--max-width); margin: 0 auto;
          padding-top: 20px; border-top: 1px solid var(--hairline);
          display: flex; justify-content: space-between; align-items: center;
        }
        .footer-copy {
          font-family: var(--body); font-size: 13px;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-tertiary);
        }
        .footer-links {
          display: flex; gap: 28px;
        }
        @media (max-width: 768px) {
          footer { padding: 0 24px 40px !important; }
          .footer-inner { flex-direction: column; align-items: center; gap: 16px; text-align: center; }
          .footer-links { gap: 20px; justify-content: center; }
        }
      `}</style>
      <footer style={{ padding: "0 64px 48px" }}>
        <div className="footer-inner">
          <div className="footer-copy">
            © 2026&nbsp;
            <span style={{ fontFamily: "var(--display)", fontWeight: 400, fontStyle: "normal" }}>
              <em style={{ fontStyle: "italic", fontWeight: 900 }}>Lily</em> Liang
            </span>
          </div>
          <div className="footer-links">
            <a
              href="https://linkedin.com/in/lilyliang"
              target="_blank" rel="noopener noreferrer"
              className="footer-link"
              style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-tertiary)", textDecoration: "none" }}
            >LinkedIn</a>
            <a
              href="mailto:tlianglilydesign@gmail.com"
              className="footer-link"
              style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-tertiary)", textDecoration: "none" }}
            >Email</a>
            <Link
              href="/resume"
              className="footer-link"
              style={{ fontFamily: "var(--body)", fontSize: 13, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-tertiary)", textDecoration: "none" }}
            >Resume</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
