import { getCollection, type CollectionEntry } from 'astro:content';

export type Writeup = CollectionEntry<'writeups'>;

/**
 * Writeups sorted newest first. Drafts are only included when explicitly
 * requested — pages pass `import.meta.env.DEV` so drafts are previewable
 * locally but never make it into a production build.
 */
export async function getWriteups({ includeDrafts = false } = {}): Promise<Writeup[]> {
  const entries = await getCollection('writeups', ({ data }) => includeDrafts || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export const WRITEUPS_PER_PAGE = 5;

export interface WriteupsPage {
  items: Writeup[];
  /** 1-based page number. */
  current: number;
  total: number;
}

/** Slice the (already sorted) writeups into one page of the /writeups/ archive. */
export function getWriteupsPage(writeups: Writeup[], page: number): WriteupsPage {
  const start = (page - 1) * WRITEUPS_PER_PAGE;
  return {
    items: writeups.slice(start, start + WRITEUPS_PER_PAGE),
    current: page,
    total: Math.max(1, Math.ceil(writeups.length / WRITEUPS_PER_PAGE)),
  };
}

/** Archive page (1-based) that lists the writeup at `index` in the sorted list. */
export function writeupsPageOf(index: number): number {
  return Math.floor(index / WRITEUPS_PER_PAGE) + 1;
}

/** Page 1 lives at /writeups/; later pages at /writeups/page/<n>/. */
export function writeupsPageUrl(page: number): string {
  return page === 1 ? '/writeups/' : `/writeups/page/${page}/`;
}
