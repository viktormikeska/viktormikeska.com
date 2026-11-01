import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getWriteups } from '../lib/writeups';
import { site } from '../data/site';

export const GET: APIRoute = async (context) => {
  // Always published-only, even in dev — the feed must never leak drafts.
  const writeups = await getWriteups();

  return rss({
    title: `${site.name} — Writeups`,
    description: site.description,
    site: context.site ?? site.url,
    items: writeups.map((writeup) => ({
      title: writeup.data.title,
      description: writeup.data.summary,
      pubDate: writeup.data.date,
      categories: writeup.data.tags,
      link: `/writeups/${writeup.id}/`,
    })),
    customData: '<language>en</language>',
  });
};
