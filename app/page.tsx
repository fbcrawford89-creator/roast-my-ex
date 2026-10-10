'use client';

import { useState } from 'react';

const initialForm = {
  name: '',
  reason: '',
  tone: 'savage',
  focus: 'cheating',
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

  const handleSubmit = async (event: React.FormEvent) => {
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
        throw new Error(data.error || 'Something went wrong.');
      }

      setRoast(data.roast || '');
      setAdCopy(data.adCopy || '');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">YOU DESERVE A BETTER STORY</p>
          <h1>Roast My Ex</h1>
          <p className="subtitle">
            Turn your breakup pain into a savage, funny, highly shareable roast powered by AI.
          </p>

          <div className="hero-badges">
            <span>AI-generated</span>
            <span>Funny</span>
            <span>Shareable</span>
          </div>
        </div>

        <div className="hero-card">
          <p className="label">Breakup summary</p>
          <h3>
            “{form.name || 'Your ex'} was a walking red flag with a good haircut.”
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
              Focus
              <select value={form.focus} onChange={(e) => handleChange('focus', e.target.value)}>
                <option value="cheating">Cheating</option>
                <option value="ghosting">Ghosting</option>
                <option value="money">Money habits</option>
                <option value="love-bombing">Love bombing</option>
                <option value="overall">Overall chaos</option>
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
                <h3>Ad caption</h3>
                <p>{adCopy}</p>
              </div>
            </>
          ) : (
            <div className="placeholder-box">
              Your roast will appear here. Feed in the details and let the AI do the damage.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
