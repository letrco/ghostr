import { NostrEvent } from '@nostrify/nostrify';
import htmlToMarkdown from '@wcj/html-to-markdown';

import { GhostPayload } from './schema.ts';

export async function toNostr({ post }: GhostPayload): Promise<Omit<NostrEvent, 'id' | 'pubkey' | 'sig'>> {
  const { current } = post;

  if (current.visibility !== 'public') {
    throw new Error('Only public posts are supported');
  }

  const tags = [
    ['d', current.slug],
    ['title', current.title],
    ['published_at', Math.floor(new Date(current.published_at).getTime() / 1000).toString()],
  ];

  if (current.feature_image) {
    tags.push(['image', current.feature_image]);
  }

  if (current.excerpt) {
    tags.push(['summary', current.excerpt]);
  }

  return {
    kind: 30023,
    content: await htmlToMarkdown({ html: current.html }),
    tags,
    created_at: Math.floor(Date.now() / 1000),
  };
}
