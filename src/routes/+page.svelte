<script>
  // Static content for now. This is intentionally shaped like what a DynamoDB
  // item will look like (see src/lib/server/dynamo.js), so swapping in live
  // data later is a matter of replacing these arrays with a load() fetch.
  import { articles } from '$lib/articles.js';
  import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SITE_OG_IMAGE } from '$lib/site.js';

  const pageTitle = "Vampires Are Real — America's Finest Undead News Source";

  // The lead story is a real, clickable article — its full page lives at
  // /news/<slug>. Single source of truth: src/lib/articles.js.
  const lead = articles['hierarchy-of-vampires-and-its-connection-to-mrbeast'];
  const leadHref = `/news/${lead.slug}`;

  const stories = [
    {
      kicker: 'Science',
      title:
        'Study Finds 4 Out of 5 Vampires Would Recommend Immortality to a Friend',
      dek: 'The remaining vampire declined to comment, citing an ongoing feud dating back to the Treaty of Westphalia.',
      byline: 'By R. Marlow'
    },
    {
      kicker: 'Local',
      title:
        'Looksmaxxing Just Became More Disturbing',
      dek: 'The latest trend in looksmaxxing among young vampires involves being tan. It’s not looking good.',
      byline: 'By W. Hughes'
    },
    {
      kicker: 'Politics',
      title:
        'Senator Denies Being Vampire, Then Immediately Turns Into Fog',
      dek: 'Aides described the transformation as "a coincidence" and "off the record."',
      byline: 'By H. Calloway'
    },
    {
      kicker: 'Undead Life',
      title:
        'Area Vampire Celebrates 400th Birthday, Still Can’t Figure Out How to Cancel Free Trial',
      dek: 'The subscription, for a mail-order blood-of-the-month club, has renewed quietly since 1987.',
      byline: 'By S. Ambrose'
    },
    {
      kicker: 'Opinion',
      title:
        'I Am Not Afraid of the Dark, and Other Lies I Tell Myself Before Bed',
      dek: 'An honest reckoning with the shape in the corner that was definitely a coat rack, probably.',
      byline: 'By a Concerned Reader'
    },
    {
      kicker: 'Health',
      title:
        'Nutritionists Warn Garlic Bread May Be Doing More Good Than We Realized',
      dek: 'Emergency rooms report a mysterious 30% drop in nocturnal home invasions on Italian restaurant nights.',
      byline: 'By L. Osei'
    }
  ];
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <link rel="canonical" href={`${SITE_URL}/`} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={SITE_NAME} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={SITE_DESCRIPTION} />
  <meta property="og:url" content={`${SITE_URL}/`} />
  <meta property="og:image" content={SITE_OG_IMAGE} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={SITE_NAME} />
  <meta name="twitter:description" content={SITE_DESCRIPTION} />
  <meta name="twitter:image" content={SITE_OG_IMAGE} />
</svelte:head>

<!-- Lead story -->
<article class="lead">
  <p class="kicker lead-kicker">{lead.kicker}</p>
  <h1 class="lead-title">
    <a href={leadHref}>{lead.title}</a>
  </h1>
  <p class="lead-dek">{lead.dek}</p>
  <p class="meta lead-byline">By {lead.byline} · {lead.dateline}</p>

  <figure class="lead-art">
    <a href={leadHref} aria-label={lead.title}>
      <img src={lead.image} alt={lead.imageAlt} />
    </a>
    <figcaption class="lead-art-label">{lead.imageCredit}</figcaption>
  </figure>
</article>

<div class="divider rule-top"></div>

<!-- Secondary grid -->
<section class="grid">
  {#each stories as s}
    <article class="card">
      <p class="kicker">{s.kicker}</p>
      <h2 class="card-title"><a href="/">{s.title}</a></h2>
      <p class="card-dek">{s.dek}</p>
      <p class="meta">{s.byline}</p>
    </article>
  {/each}
</section>

<style>
  /* Lead story ----------------------------------------------------- */
  .lead {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding-bottom: 30px;
  }
  .lead-kicker {
    font-size: 0.82rem;
    letter-spacing: 0.1em;
  }
  .lead-title {
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(1.9rem, 5.2vw, 3.6rem);
    max-width: 15ch;
  }
  .lead-title a {
    color: inherit;
  }
  .lead-title a:hover {
    color: var(--accent);
    text-decoration: none;
  }
  .lead-art a {
    display: block;
  }
  .lead-dek {
    font-size: 1.18rem;
    line-height: 1.5;
    color: var(--ink);
    max-width: 46ch;
    margin: 0;
  }
  .lead-byline {
    margin: 0;
  }
  .lead-art {
    grid-row: 1 / 5;
    grid-column: 2;
    margin: 0;
    border: 1px solid var(--rule-thin);
  }
  .lead-art img {
    width: 100%;
    height: auto;
    display: block;
    filter: contrast(1.06) saturate(1.05);
  }
  .lead-art-label {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink-muted);
    padding: 6px 8px 7px;
    border-top: 1px solid var(--rule-thin);
    background: var(--paper);
  }

  @media (min-width: 820px) {
    .lead {
      grid-template-columns: 1fr 1.5fr;
      column-gap: 34px;
      align-items: start;
    }
  }

  /* Divider -------------------------------------------------------- */
  .divider {
    margin: 4px 0 26px;
  }

  /* Secondary grid ------------------------------------------------- */
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  .card {
    padding: 22px 0;
    border-top: 1px solid var(--rule-thin);
  }
  .card:first-child {
    border-top: none;
  }
  .card-title {
    font-weight: 800;
    text-transform: none;
    font-size: 1.35rem;
    margin: 8px 0 8px;
  }
  .card-title a {
    color: var(--ink);
  }
  .card-title a:hover {
    color: var(--accent);
    text-decoration: none;
  }
  .card-dek {
    margin: 0 0 12px;
    color: var(--ink);
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (min-width: 640px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      column-gap: 34px;
    }
    .card {
      padding: 24px 0;
    }
    /* Restore top border on the second item once we're two-up. */
    .card:nth-child(2) {
      border-top: 1px solid var(--rule-thin);
    }
  }

  @media (min-width: 940px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .card:nth-child(3) {
      border-top: 1px solid var(--rule-thin);
    }
  }
</style>
