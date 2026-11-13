import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {parse} from 'yaml';

export async function loadCaseStudyImageMetadata(sourceDirectory = 'docs') {
  const assets = {};
  for (const file of ['case-studies.md', 'verifiable-ai-lab-results-evidence-graph.md']) {
    const source = await readFile(path.join(sourceDirectory, file), 'utf8');
    const page = parse(source.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);
    const base = {creator: 'Spherity GmbH', credit: 'Spherity Research / Spherity GmbH',
      rights: '© 2026 Spherity GmbH. Original content CC BY 4.0; names and logos retain their own terms.',
      license: page.license, licensePage: page.canonical_url + (page.case_study_collection ? '#content-license' : '#license-and-citation'),
      source: page.canonical_url, metadataDate: page.last_modified_at, keywords: page.keywords};
    assets[page.image] = {...base, title: page.title, description: page.image_alt, format: 'image/webp'};
    for (const figure of page.figure_objects || []) {
      const metadata = {...base, title: figure.name, description: `${figure.description} ${figure.caption}`,
        creator: figure.creator_name, credit: figure.credit_text, rights: figure.copyright_notice + '. CC BY 4.0; referenced third-party names retain their own terms.',
        keywords: figure.keywords, source: `${page.canonical_url}#${figure.id}-figure`};
      assets[figure.content_url] = {...metadata, format: 'image/svg+xml'};
      if (figure.raster_url) assets[figure.raster_url] = {...metadata, format: 'image/png'};
    }
  }
  return assets;
}
