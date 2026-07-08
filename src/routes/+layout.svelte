<script>
  import '../app.css';
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectAnalytics({ mode: dev ? 'development' : 'production' });

  // Static dateline for now. Once content is dynamic this can reflect the
  // latest published article's date.
  const dateline = 'VOL. MMXXVI · NO. 13 · WEDNESDAY, JULY 8, 2026';

  const sections = [
    'News',
    'Local',
    'Politics',
    'Science',
    'Opinion',
    'Undead Life'
  ];
</script>

<div class="site">
  <!-- Utility strip -->
  <div class="topstrip">
    <div class="container topstrip-inner">
      <span>{dateline}</span>
      <span class="topstrip-right">Garlic Index: HIGH · Sunset 8:31 PM</span>
    </div>
  </div>

  <!-- Masthead / nameplate -->
  <header class="masthead">
    <div class="container">
      <p class="masthead-tag">America's Finest Undead News Source</p>
      <a class="nameplate" href="/">Vampires Are Real</a>
      <p class="masthead-sub">
        Fearless reporting from the far side of dusk since 2026
      </p>
    </div>
  </header>

  <!-- Category navigation -->
  <nav class="nav rule-top">
    <div class="container nav-inner">
      {#each sections as s}
        <a class="nav-link" href="/">{s}</a>
      {/each}
    </div>
  </nav>

  <main class="container">
    <slot />
  </main>

  <footer class="footer rule-top">
    <div class="container footer-inner">
      <p class="footer-name">Vampires Are Real</p>
      <p class="footer-note">
        A work of satire. Any resemblance to actual vampires, living, undead, or
        merely photosensitive, is entirely coincidental.
      </p>
      <p class="meta">© MMXXVI Vampires Are Real · Not responsible for stake-related injuries</p>
    </div>
  </footer>
</div>

<style>
  .site {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Utility strip -------------------------------------------------- */
  .topstrip {
    background: var(--ink);
    color: #cfc9bf;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.66rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .topstrip-inner {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .topstrip-right {
    color: var(--accent);
  }

  /* Masthead ------------------------------------------------------- */
  .masthead {
    text-align: center;
    padding: 26px 0 20px;
  }
  .masthead-tag {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 0 0 10px;
  }
  .nameplate {
    display: block;
    font-family: var(--font-display);
    font-weight: 900;
    color: var(--ink);
    letter-spacing: -0.03em;
    line-height: 0.9;
    font-size: clamp(2.6rem, 9vw, 6.5rem);
    text-transform: uppercase;
  }
  .nameplate:hover {
    color: var(--ink);
    text-decoration: none;
  }
  .masthead-sub {
    font-family: var(--font-body);
    font-style: italic;
    color: var(--ink-muted);
    font-size: 0.95rem;
    margin: 12px 0 0;
  }

  /* Nav ------------------------------------------------------------ */
  .nav {
    border-bottom: 3px solid var(--rule);
  }
  .nav-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4px 26px;
    padding: 12px 20px;
  }
  .nav-link {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.82rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .nav-link:hover {
    color: var(--accent);
    text-decoration: none;
  }

  main {
    flex: 1;
    padding-top: 26px;
    padding-bottom: 48px;
  }

  /* Footer --------------------------------------------------------- */
  .footer {
    background: var(--paper-alt);
    margin-top: 24px;
  }
  .footer-inner {
    text-align: center;
    padding: 34px 20px 40px;
  }
  .footer-name {
    font-family: var(--font-display);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    font-size: 1.5rem;
    margin: 0 0 10px;
  }
  .footer-note {
    max-width: 560px;
    margin: 0 auto 16px;
    font-style: italic;
    color: var(--ink-muted);
    font-size: 0.92rem;
  }
</style>
