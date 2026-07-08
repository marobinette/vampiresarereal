import { error } from '@sveltejs/kit';
import { getArticle } from '$lib/articles.js';

export function load({ params }) {
  const article = getArticle(params.slug);
  if (!article) throw error(404, 'Story not found — it may have turned to mist.');
  return { article };
}
