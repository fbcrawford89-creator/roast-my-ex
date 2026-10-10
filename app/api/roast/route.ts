@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

:root {
  --bg: #12080d;
  --bg-soft: #1d1015;
  --panel: rgba(30, 16, 23, 0.88);
  --panel-strong: #221018;
  --text: #f8edf2;
  --muted: #d5b5c0;
  --accent: #ff4d6d;
  --accent-2: #ffb703;
  --line: rgba(255, 255, 255, 0.08);
  --success: #77f2a7;
  --shadow: rgba(0, 0, 0, 0.28);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(255, 77, 109, 0.22), transparent 25%),
    radial-gradient(circle at bottom right, rgba(255, 183, 3, 0.18), transparent 25%),
    var(--bg);
  color: var(--text);
}

button,
input,
textarea,
select {
  font: inherit;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px 80px;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 24px;
  align-items: center;
  margin-bottom: 30px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent-2);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.12em;
  font-size: 12px;
}

.hero h1 {
  margin: 0;
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.9;
  letter-spacing: -0.07em;
}

.subtitle {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 18px 0 22px;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-badges span {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 0.8rem;
  font-weight: 600;
}

.hero-card,
.generator-panel,
.output-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: 0 25px 60px var(--shadow);
}

.hero-card {
  padding: 24px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 77, 109, 0.12), rgba(255, 183, 3, 0.08));
}

.label {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 11px;
  font-weight: 700;
}

.hero-card h3 {
  margin: 16px 0 0;
  line-height: 1.5;
  font-size: clamp(1.3rem, 2vw, 2rem);
}

.content-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 22px;
}

.generator-panel,
.output-panel {
  padding: 22px;
}

.generator-panel h2,
.output-panel h2 {
  margin-top: 0;
  margin-bottom: 22px;
  font-size: clamp(1.5rem, 2vw, 2rem);
}

.generator-panel label {
  display: block;
  margin-bottom: 18px;
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 600;
}

.generator-panel input,
.generator-panel textarea,
.generator-panel select {
  width: 100%;
  margin-top: 8px;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  padding: 14px 16px;
  outline: none;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.generator-panel input:focus,
.generator-panel textarea:focus,
.generator-panel select:focus {
  border-color: rgba(255, 77, 109, 0.7);
  transform: translateY(-1px);
}

.generator-panel textarea {
  min-height: 140px;
  resize: vertical;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.generator-panel button {
  width: 100%;
  border: none;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), #ff7b54);
  color: white;
  font-weight: 800;
  padding: 15px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 16px 35px rgba(255, 77, 109, 0.32);
}

.generator-panel button:hover {
  transform: translateY(-2px);
}

.generator-panel button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.output-panel {
  min-height: 500px;
}

.output-box {
  border-radius: 18px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.roast-box {
  min-height: 180px;
  margin-bottom: 18px;
}

.ad-box h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.placeholder-box {
  display: grid;
  place-items: center;
  min-height: 380px;
  padding: 20px;
  text-align: center;
  color: var(--muted);
  border: 1px dashed var(--line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.02);
}

.error {
  color: #ff9aa8;
  margin-top: 14px;
  font-weight: 600;
}

@media (max-width: 860px) {
  .hero,
  .content-grid {
    grid-template-columns: 1fr;
  }

  .page-shell {
    padding-top: 28px;
  }
}
