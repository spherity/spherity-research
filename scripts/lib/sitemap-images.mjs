import {readFile, stat} from 'node:fs/promises';
import path from 'node:path';
import {glob} from 'glob';
import {parse} from 'yaml';

// Opt-in keeps the change scoped to publications whose image rights were reviewed.
export async function loadSitemapImages(sourceDirectory, siteDirectory, siteUrl) {
  const result = new Map();
  for (const filename of await glob('*.md', {cwd: sourceDirectory})) {
    const source = await readFile(path.join(sourceDirectory, filename), 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatter) continue;
    const page = parse(frontmatter[1]);
    if (!page.image_sitemap || page.publication_state === 'draft' || /noindex/i.test(page.robots || '')) continue;
    const images = [...new Set([...(page.figure_objects || []).flatMap(figure => [figure.content_url, figure.raster_url]), page.cover_image, page.image].filter(Boolean))];
    const urls = [];
    for (const asset of images) {
      if (!/^\/assets\/[^?#]+\.(?:svg|png|jpe?g|webp|avif)$/i.test(asset)) throw new Error(`Unsupported sitemap image: ${asset}`);
      const local = path.resolve(siteDirectory, `.${asset}`);
      if (!local.startsWith(path.resolve(siteDirectory) + path.sep) || !(await stat(local)).isFile()) throw new Error(`Missing sitemap image: ${asset}`);
      urls.push(`${siteUrl}${asset.split('/').map(encodeURIComponent).join('/')}`);
    }
    result.set(page.canonical_url || `${siteUrl}${page.permalink}`, urls);
  }
  return result;
}
