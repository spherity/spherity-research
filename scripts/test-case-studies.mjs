import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {parse} from 'yaml';

const read = file => readFileSync(file, 'utf8');
const frontMatter = file => parse(read(file).match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);
const catalog = parse(read('docs/_data/case_studies.yml'));
const page = frontMatter('docs/verifiable-ai-lab-results-evidence-graph.md');
const hub = read('_site/case-studies/index.html');
const article = read('_site/case-studies/verifiable-ai-lab-results.html');
const sitemap = read('_site/sitemap.xml');
const jsonLd = html => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
  .flatMap(match => {const node = JSON.parse(match[1]); return node['@graph'] || [node];});

test('case catalog routes resolve and are discoverable from homepage and hub', () => {
  assert.ok(catalog.length);
  assert.equal(new Set(catalog.map(item => item.url)).size, catalog.length);
  for (const item of catalog) {
    assert.ok(item.url.startsWith('/case-studies/'));
    assert.ok(existsSync('_site' + item.url));
    assert.ok(hub.includes('/spherity-research' + item.url));
    assert.ok(sitemap.includes('https://spherity.github.io/spherity-research' + item.url));
    assert.ok(item.status && item.summary && item.learning);
  }
  assert.ok(read('_site/index.html').includes('href="/spherity-research/case-studies/"'));
  assert.ok(sitemap.includes('https://spherity.github.io/spherity-research/case-studies/'));
});

test('case collection exposes its own items, not the paper catalog', () => {
  const nodes = jsonLd(hub);
  assert.equal(nodes.filter(n => n['@type'] === 'CollectionPage').length, 1);
  const list = nodes.find(n => n['@type'] === 'ItemList');
  assert.equal(list.numberOfItems, catalog.length);
  assert.deepEqual(list.itemListElement.map(n => n.item.url), catalog.map(n => 'https://spherity.github.io/spherity-research' + n.url));
  assert.ok(!nodes.some(n => n['@type'] === 'ScholarlyArticle'));
});

test('case article has technical article schema, parent breadcrumb and explicit evidence level', () => {
  const nodes = jsonLd(article);
  assert.ok(nodes.some(n => n['@type'] === 'TechArticle'));
  const breadcrumbs = nodes.find(n => n['@type'] === 'BreadcrumbList').itemListElement;
  assert.deepEqual(breadcrumbs.map(n => n.position), [1, 2, 3]);
  assert.equal(breadcrumbs[1].name, 'Case studies');
  assert.equal(breadcrumbs[2].item, page.canonical_url);
  assert.equal(page.case_study_status, 'conceptual');
  assert.match(article, /no deployment or measured outcomes/i);
  assert.match(article, /expected decisions, not observed results/i);
  assert.match(article, /scientific correctness/i);
  assert.equal(page.pdf_url, undefined);
});

test('all five case figures and their actual download formats are embedded and in the full sitemap', () => {
  assert.equal(page.figure_objects.length, 5);
  for (const figure of page.figure_objects) {
    assert.ok(article.includes(figure.id + '-figure'));
    assert.ok(article.includes(figure.content_url));
    for (const download of figure.distributions) {
      assert.ok(existsSync('_site' + download.url));
      assert.ok(article.includes(download.url));
      assert.ok(sitemap.includes('https://spherity.github.io/spherity-research' + download.url));
    }
    const svg = read('docs' + figure.content_url);
    assert.match(svg, /@font-face/);
    assert.match(svg, /data:font/);
    assert.ok(svg.includes(page.canonical_url));
    assert.match(svg, /creativecommons.org\/licenses\/by\/4.0/);
  }
});

test('homepage, case collection and individual case retain separate social cards with metadata', () => {
  const pages = ['docs/index.md', 'docs/case-studies.md', 'docs/verifiable-ai-lab-results-evidence-graph.md'].map(frontMatter);
  assert.equal(new Set(pages.map(n => n.image)).size, 3);
  for (const item of pages.slice(1)) {
    assert.ok(readFileSync('docs' + item.image).includes(Buffer.from('XMP ')));
    assert.ok(sitemap.includes('https://spherity.github.io/spherity-research' + item.image));
  }
});
