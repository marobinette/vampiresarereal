// Central article store. For now this is static, hand-written content — but it
// is deliberately shaped like a future DynamoDB item (see src/lib/server/
// dynamo.js and the vampire_project table). When we move to live data, the
// landing page and the /news/[slug] route can load from Dynamo instead of
// importing this file, with no change to the markup that consumes it.
//
// Keyed by slug so /news/<slug> can look an article up directly.

export const articles = {
  'hierarchy-of-vampires-and-its-connection-to-mrbeast': {
    slug: 'hierarchy-of-vampires-and-its-connection-to-mrbeast',
    kicker: 'Breaking',
    section: 'Investigations',
    title: 'Hierarchy of Vampires and Its Connection to MrBeast',
    dek: 'There is a growing vampire threat. Vampires are far more capable than you know. Vampires feed on your sleep, time, energy, and even your intelligence.',
    image: '/evil_mister_beast.png',
    imageAlt:
      'A red-eyed figure resembling MrBeast lunging through iron bars against a burning skyline',
    imageCredit: 'EXCLUSIVE PHOTO · High-level influencer class specimen',
    byline: 'Rana Skully, Sunlight Correspondent',
    dateline: 'GREENVILLE, NC',
    date: 'July 8, 2026',
    // Boilerplate body for now — replace with the real story later.
    body: [
      'GREENVILLE, NC — There is a growing threat. Vampires have evolved, and they now feed on your time, sleep, energy, and intelligence. In some cases, they have even been known to feed on collectibles — Pokémon cards, comic books, and the like. But the most dangerous of these newly evolved predators is the dreaded “ultimate,” or “influencer-class,” vampire. Subscribing to one is the modern equivalent of a bite from a traditional vampire: the moment you subscribe, the process of vampirification begins.',
      'Currently an apprentice to the overlords, MrBeast is one of the highest-ranking members of this top-secret vampiric organization. As the world’s most notorious and powerful influencer vampire, he has mastered the art of feeding on the time and energy of his 500 million loyal subscribers. More frightening still, each of those subscribers carries the potential to become an influencer vampire in turn. “We could be at war with a billion of these things by 2030, and we have no idea how to slow it down,” warned high-ranking vampire scholar Dr. Ethan Ratliff-Crain in a recent interview. “We have to do something now.”',
      'MrBeast is not the only one to fear. Logan Paul poses an equally terrifying danger, though of a different kind. Unlike MrBeast, he feeds on collectibles: to gather strength and climb the ranks of the vampire community, he buys up the very items that would otherwise bring joy to children and nerds alike, then resells them online for enormous profit.',
      'The Vampire Overlords are one of three hidden forces that secretly govern the world. Exactly how much they control remains unclear, but we know their grip on the United States has been nearly total since the Revolutionary War — when the Founding Fathers traded money and loyalty for the magical weapons that won it. “These vampires have been feeding on U.S. citizens from the very beginning,” Dr. Ratliff-Crain said. “Vampiric tactics have been used to control the narrative for 250 years.”',
      'Here is what you can do to prevent vampirification. Delete all social media apps and accounts. If you feel yourself zoning out — or going unalive — while watching content, do not subscribe. Immediately disengage from any creator who constantly and unwaveringly petitions you to “smash that subscribe button.” If you witness vampiric activity in your town, report it at once to your local CVC, or Center for Vampiric Control. You can also volunteer at your nearest CVC — and if your city or town doesn’t have one, start a branch of your own.'
    ]
  }
};

export function getArticle(slug) {
  return articles[slug] ?? null;
}
