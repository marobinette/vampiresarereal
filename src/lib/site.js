// Canonical, production-facing site constants. Used for absolute URLs in
// social-share (Open Graph / Twitter) tags and the sitemap. These deliberately
// point at the real domain even from preview/dev builds, so a shared link
// always resolves to production.

export const SITE_URL = 'https://vampiresarereal.org';
export const SITE_NAME = 'Vampires Are Real';
export const SITE_TAGLINE = "America's Finest Undead News Source";
export const SITE_DESCRIPTION =
  'Fearless reporting from the far side of dusk — breaking coverage of the nocturnal, the sanguine, and the recently reanimated. A work of satire.';

// Default share image (absolute URL). The lead photo doubles as the site card.
export const SITE_OG_IMAGE = `${SITE_URL}/evil_mister_beast.png`;
