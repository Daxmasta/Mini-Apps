import React from 'react';
import { createRoot } from 'react-dom/client';
import { apps } from './apps';
import './styles.css';
function Dashboard() {
  return <main className="shell">
    <header><p className="eyebrow">PERSONAL LABORATORY</p><h1>Mini-Apps</h1><p className="subtitle">Scientific tools, simulations, and experiments.</p></header>
    <section className="grid" aria-label="Applications">
      {apps.map(app => <article className="tile" key={app.id}>
        <div className="symbol" aria-hidden="true">{app.symbol}</div>
        <p className="eyebrow">{app.category} · v{app.version}</p><h2>{app.name}</h2><p className="description">{app.description}</p>
        {app.url ? <a className="launch" href={app.url} target="_blank" rel="noopener noreferrer">Launch application ↗</a> : <span className="unavailable">Coming soon</span>}
      </article>)}
      <article className="tile add"><div className="symbol">+</div><h2>More to come</h2><p className="description">New applications will appear here as they are released.</p></article>
    </section>
    <footer>Mini-Apps · v0.2.0 · Source managed on GitHub</footer>
  </main>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><Dashboard /></React.StrictMode>);
