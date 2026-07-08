<script>
  import { page } from '$app/stores';
  import { SITE_URL, SITE_NAME } from '$lib/site.js';

  export let data;
  $: article = data.article;

  // Canonical, production URL for this story (stable across preview/dev).
  $: canonical = `${SITE_URL}/news/${article.slug}`;
  $: ogImage = `${SITE_URL}${article.image}`;

  // Share targets are built from the live page URL, so they work in dev, in
  // preview deploys, and in production without any hard-coded domain.
  $: url = $page.url.href;
  $: encUrl = encodeURIComponent(url);
  $: encTitle = encodeURIComponent(article.title);

  $: shares = [
    { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`, icon: 'facebook' },
    { name: 'X', href: `https://twitter.com/intent/tweet?url=${encUrl}&text=${encTitle}`, icon: 'x' },
    { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`, icon: 'linkedin' },
    { name: 'WhatsApp', href: `https://wa.me/?text=${encTitle}%20${encUrl}`, icon: 'whatsapp' },
    { name: 'Email', href: `mailto:?subject=${encTitle}&body=${encUrl}`, icon: 'email' }
  ];

  // Icon path data (24x24 viewBox), fill=currentColor.
  const icons = {
    facebook: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
    x: 'M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-7-6.2 7H1.4l8.1-9.3L1 2h7.1l4.9 6.4L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z',
    linkedin: 'M20.45 3H3.55C2.7 3 2 3.7 2 4.55v14.9C2 20.3 2.7 21 3.55 21h16.9c.85 0 1.55-.7 1.55-1.55V4.55C22 3.7 21.3 3 20.45 3zM8 18H5.5v-8H8v8zM6.75 8.75a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM18.5 18H16v-4.2c0-1-.02-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.22V18h-2.5v-8h2.4v1.1h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.67 3 3.84V18z',
    whatsapp: 'M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2z',
    email: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
    link: 'M3.9 12a3.1 3.1 0 0 1 3.1-3.1h3V7h-3a5 5 0 0 0 0 10h3v-1.9h-3A3.1 3.1 0 0 1 3.9 12zm4.1 1h8v-2H8v2zm6-6h-3v1.9h3a3.1 3.1 0 0 1 0 6.2h-3V17h3a5 5 0 0 0 0-10z'
  };

  let copied = false;
  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      copied = true;
      setTimeout(() => (copied = false), 1600);
    } catch (e) {
      // Clipboard API unavailable (e.g. insecure context) — fail quietly.
    }
  }

  // Static teasers for the "More" rail (boilerplate).
  const more = [
    { kicker: 'Science', title: 'Study Finds 4 Out of 5 Vampires Would Recommend Immortality to a Friend' },
    { kicker: 'Politics', title: 'Senator Denies Being Vampire, Then Immediately Turns Into Fog' },
    { kicker: 'Health', title: 'Nutritionists Warn Garlic Bread May Be Doing More Good Than We Realized' }
  ];
</script>

<svelte:head>
  <title>{article.title} — Vampires Are Real</title>
  <meta name="description" content={article.dek} />
  <link rel="canonical" href={canonical} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={article.title} />
  <meta property="og:description" content={article.dek} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={article.title} />
  <meta name="twitter:description" content={article.dek} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<div class="article-wrap">
  <!-- Share rail -->
  <aside class="share-rail">
    <p class="share-label">Share</p>
    <div class="share-btns">
      {#each shares as s}
        <a
          class="share-btn"
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${s.name}`}
          title={`Share on ${s.name}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons[s.icon]} /></svg>
        </a>
      {/each}
      <button
        class="share-btn"
        on:click={copyLink}
        aria-label="Copy link"
        title={copied ? 'Link copied!' : 'Copy link'}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icons.link} /></svg>
      </button>
      {#if copied}<span class="copied">Copied!</span>{/if}
    </div>
  </aside>

  <!-- Article -->
  <article class="article">
    <a class="section-link" href="/">{article.section}</a>
    <h1 class="headline">{article.title}</h1>
    <p class="dek">{article.dek}</p>
    <p class="byline">
      By {article.byline} · {article.date} · {article.dateline}
    </p>

    <figure class="art">
      <img src={article.image} alt={article.imageAlt} />
      <figcaption>{article.imageCredit}</figcaption>
    </figure>

    <div class="body">
      {#each article.body as para}
        <p>{para}</p>
      {/each}
    </div>

    <p class="disclaimer">
      This is a work of satire. Placeholder story text — the full report is
      still being fact-checked by our holy-water-certified editors.
    </p>

    <a class="back" href="/">← Back to the front page</a>
  </article>

  <!-- More rail -->
  <aside class="more-rail">
    <p class="more-head">More From Vampires Are Real</p>
    {#each more as m}
      <a class="more-item" href="/">
        <span class="more-kicker">{m.kicker}</span>
        <span class="more-title">{m.title}</span>
      </a>
    {/each}
  </aside>
</div>

<style>
  .article-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 26px;
    padding-top: 8px;
  }

  /* Share rail ----------------------------------------------------- */
  .share-rail {
    order: 2;
  }
  .share-label {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.8rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 0 0 12px;
  }
  .share-btns {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  .share-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--ink);
    color: #fff;
    display: grid;
    place-items: center;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background 0.15s ease;
  }
  .share-btn:hover {
    background: var(--accent);
    text-decoration: none;
  }
  .share-btn svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
  .copied {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.72rem;
    color: var(--accent);
  }

  /* Article -------------------------------------------------------- */
  .article {
    order: 1;
    min-width: 0;
  }
  .section-link {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--accent);
  }
  .headline {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(1.9rem, 4.6vw, 3.3rem);
    line-height: 1.04;
    letter-spacing: -0.015em;
    margin: 10px 0 16px;
  }
  .dek {
    font-size: 1.22rem;
    line-height: 1.5;
    color: var(--ink);
    margin: 0 0 16px;
    max-width: 62ch;
  }
  .byline {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.74rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--ink-muted);
    margin: 0 0 22px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--rule-thin);
  }
  .art {
    margin: 0 0 26px;
    border: 1px solid var(--rule-thin);
  }
  .art img {
    width: 100%;
    height: auto;
    display: block;
    filter: contrast(1.06) saturate(1.05);
  }
  .art figcaption {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.68rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ink-muted);
    padding: 8px 10px;
    border-top: 1px solid var(--rule-thin);
    background: var(--paper);
  }
  .body :global(p),
  .body p {
    font-size: 1.18rem;
    line-height: 1.72;
    margin: 0 0 1.2em;
    max-width: 68ch;
  }
  .disclaimer {
    font-style: italic;
    color: var(--ink-muted);
    font-size: 0.95rem;
    border-top: 1px solid var(--rule-thin);
    padding-top: 18px;
    margin-top: 26px;
    max-width: 68ch;
  }
  .back {
    display: inline-block;
    margin-top: 20px;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  /* More rail ------------------------------------------------------ */
  .more-rail {
    order: 3;
  }
  .more-head {
    font-family: var(--font-display);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: -0.01em;
    margin: 0 0 12px;
    padding-bottom: 8px;
    border-bottom: 3px solid var(--rule);
  }
  .more-item {
    display: block;
    padding: 12px 0;
    border-top: 1px solid var(--rule-thin);
  }
  .more-item:first-of-type {
    border-top: none;
  }
  .more-kicker {
    display: block;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.66rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 4px;
  }
  .more-title {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.2;
    color: var(--ink);
  }
  .more-item:hover .more-title {
    color: var(--accent);
  }

  /* Desktop: sticky share rail on the left, article center, more right */
  @media (min-width: 760px) {
    .article-wrap {
      grid-template-columns: 56px minmax(0, 1fr);
      column-gap: 30px;
    }
    .share-rail {
      order: 0;
      position: sticky;
      top: 20px;
      align-self: start;
    }
    .share-label {
      font-size: 0.72rem;
    }
    .share-btns {
      flex-direction: column;
    }
    .article {
      order: 0;
    }
    .more-rail {
      grid-column: 2;
    }
  }

  @media (min-width: 1040px) {
    .article-wrap {
      grid-template-columns: 56px minmax(0, 1fr) 300px;
      column-gap: 40px;
    }
    .more-rail {
      grid-column: 3;
      grid-row: 1;
    }
  }
</style>
