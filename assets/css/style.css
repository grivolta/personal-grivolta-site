:root {
  --bg: #0f172a;
  --surface: #111c34;
  --surface-2: #17233f;
  --text: #eef2ff;
  --muted: #a7b0c8;
  --accent: #7c3aed;
  --accent-2: #22d3ee;
  --border: rgba(255, 255, 255, .12);
  --shadow: 0 24px 80px rgba(0, 0, 0, .28);
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(124, 58, 237, .30), transparent 30%),
    radial-gradient(circle at top right, rgba(34, 211, 238, .20), transparent 28%),
    var(--bg);
  line-height: 1.6;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.site-header {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 7vw;
  background: rgba(15, 23, 42, .78);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.brand { font-weight: 800; letter-spacing: -.03em; }
.nav { display: flex; gap: 24px; color: var(--muted); font-weight: 600; }
.nav a:hover { color: var(--text); }
.nav-toggle { display: none; background: transparent; border: 0; color: var(--text); font-size: 28px; }
.section { padding: 96px 7vw; }
.hero { min-height: 86vh; display: grid; grid-template-columns: 1.3fr .7fr; gap: 60px; align-items: center; }
.eyebrow { color: var(--accent-2); text-transform: uppercase; letter-spacing: .16em; font-weight: 800; font-size: .78rem; }
h1, h2, h3, p { margin-top: 0; }
h1 { font-size: clamp(2.7rem, 7vw, 5.8rem); line-height: .95; letter-spacing: -.07em; max-width: 950px; }
h2 { font-size: clamp(2rem, 4vw, 3.8rem); line-height: 1; letter-spacing: -.055em; }
h3 { letter-spacing: -.02em; }
.hero-text, .content-card p, .contact-card p { color: var(--muted); font-size: 1.1rem; max-width: 720px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
.btn { padding: 14px 20px; border-radius: 999px; font-weight: 800; border: 1px solid var(--border); }
.btn.primary { background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: white; border: 0; }
.btn.secondary { background: rgba(255,255,255,.06); }
.hero-card, .content-card, .contact-card, .card, .project-card, .timeline-item {
  background: linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.035));
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: var(--shadow);
}
.hero-card { padding: 24px; display: grid; gap: 18px; }
.hero-card img { border-radius: 24px; aspect-ratio: 1 / 1; object-fit: cover; background: var(--surface-2); }
.hero-card span { display: block; color: var(--muted); margin-top: 4px; }
.split { display: grid; grid-template-columns: .8fr 1.2fr; gap: 48px; align-items: start; }
.content-card, .contact-card { padding: 34px; }
.stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 28px; }
.stat { padding: 18px; border-radius: 20px; background: rgba(255,255,255,.05); }
.stat strong { display: block; font-size: 2rem; letter-spacing: -.04em; }
.stat span { color: var(--muted); font-size: .9rem; }
.center { text-align: center; max-width: 760px; margin: 0 auto 40px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card, .project-card, .timeline-item { padding: 24px; }
.card p, .project-card p, .timeline-item p { color: var(--muted); }
.card .icon { font-size: 2rem; margin-bottom: 10px; }
.resume-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; max-width: 1160px; margin: 0 auto; }
.timeline { display: grid; gap: 16px; }
.timeline-item .period { color: var(--accent-2); font-weight: 800; font-size: .88rem; }
.project-card img { width: 100%; aspect-ratio: 16/10; object-fit: cover; border-radius: 20px; margin-bottom: 18px; background: var(--surface-2); }
.tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
.tag { font-size: .78rem; color: var(--text); border: 1px solid var(--border); border-radius: 999px; padding: 6px 10px; background: rgba(255,255,255,.05); }
.contact-section { padding-top: 50px; }
.contact-card { max-width: 860px; margin: 0 auto; text-align: center; }
.contact-links { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
footer { padding: 36px 7vw; color: var(--muted); text-align: center; border-top: 1px solid var(--border); }
.reveal { opacity: 0; transform: translateY(18px); transition: .7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
@media (max-width: 900px) {
  .nav-toggle { display: block; }
  .nav { position: absolute; inset: 72px 18px auto 18px; display: none; flex-direction: column; padding: 18px; background: var(--surface); border: 1px solid var(--border); border-radius: 18px; }
  .nav.open { display: flex; }
  .hero, .split, .resume-layout, .grid { grid-template-columns: 1fr; }
  .section { padding: 72px 6vw; }
  .stats { grid-template-columns: 1fr; }
}
