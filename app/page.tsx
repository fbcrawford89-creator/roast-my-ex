'use client';

import { FormEvent, useState } from 'react';

const initialForm = {
  name: '',
  reason: '',
  tone: 'savage',
  focus: 'overall',
};

export default function HomePage() {
  const [form, setForm] = useState(initialForm);
  const [roast, setRoast] = useState('');
  const [adCopy, setAdCopy] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof typeof initialForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/roast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong while generating your roast.');
      }

      setRoast(data.roast || '');
      setAdCopy(data.adCopy || '');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">TURN THE BREAKUP INTO CONTENT</p>
          <h1>Roast My Ex</h1>
          <p className="subtitle">
            Create savage, funny, and shareable breakup roasts in seconds. Built for the internet,
            designed for revenge content, and powered by AI.
          </p>

          <div className="hero-badges">
            <span>AI-generated</span>
            <span>Classic savage</span>
            <span>Social-ready</span>
          </div>
        </div>

        <div className="hero-card">
          <p className="label">Example roast</p>
          <h3>
            “{form.name || 'Your ex'} had the emotional range of a Wi-Fi password: confusing,
            weak, and always leaving me on edge.”
          </h3>
        </div>
      </section>

      <section className="content-grid">
        <form className="generator-panel" onSubmit={handleSubmit}>
          <h2>Build your roast</h2>

          <label>
            Ex’s name
            <input
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Taylor"
            />
          </label>

          <label>
            What happened?
            <textarea
              value={form.reason}
              onChange={(e) => handleChange('reason', e.target.value)}
              placeholder="They ghosted me after borrowing my car and pretending it was a 'vacation'..."
            />
          </label>

          <div className="row">
            <label>
              Roast vibe
              <select value={form.tone} onChange={(e) => handleChange('tone', e.target.value)}>
                <option value="savage">Savage</option>
                <option value="witty">Witty</option>
                <option value="dramatic">Dramatic</option>
                <option value="clean">Clean and funny</option>
              </select>
            </label>

            <label>
              Roast focus
              <select value={form.focus} onChange={(e) => handleChange('focus', e.target.value)}>
                <option value="overall">Overall chaos</option>
                <option value="cheating">Cheating</option>
                <option value="ghosting">Ghosting</option>
                <option value="money">Money habits</option>
                <option value="love-bombing">Love bombing</option>
              </select>
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Generating...' : 'Generate roast'}
          </button>

          {error && <p className="error">{error}</p>}
        </form>

        <div className="output-panel">
          <h2>Roast output</h2>

          {roast ? (
            <>
              <div className="output-box roast-box">
                <p>{roast}</p>
              </div>

              <div className="output-box ad-box">
                <h3>Campaign caption</h3>
                <p>{adCopy}</p>
              </div>
            </>
          ) : (
            <div className="placeholder-box">
              Tell us who they were and what they did. We’ll turn the chaos into a savage one-liner.
            </div>
          )}
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <span>01</span>
          <h3>Fast generation</h3>
          <p>Generate a roast in seconds with a few breakup details.</p>
        </div>

        <div className="feature-card">
          <span>02</span>
          <h3>Sharable style</h3>
          <p>Turn your roast into meme-style marketing copy for social posts.</p>
        </div>

        <div className="feature-card">
          <span>03</span>
          <h3>Built for viral content</h3>
          <p>Designed to feel like the kind of funny post people screenshot and share.</p>
        </div>
      </section>
    </main>
  );
}
