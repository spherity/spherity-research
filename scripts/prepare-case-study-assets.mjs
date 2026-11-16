import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import {createImageXmp, embedImageXmp} from './lib/image-metadata.mjs';
import {loadCaseStudyImageMetadata} from './lib/case-study-image-metadata.mjs';

// Reuse the licensed, embedded Liberation faces already shipped by the repository.
// Font licence: docs/assets/ebw-roadmap-font-LICENSE.txt (SIL OFL 1.1).
const source = await readFile('docs/assets/Spherity-Research-European-Business-Wallet-Regulation-And-Roadmap.svg', 'utf8');
const faces = [...source.matchAll(/@font-face\s*\{[^}]+\}/g)].map(match => match[0].replaceAll('EBW Liberation Sans', 'Liberation Sans')).join('\n');
if (!faces) throw new Error('Missing licensed embedded figure fonts.');
const assets = await loadCaseStudyImageMetadata();
for (const [url, metadata] of Object.entries(assets)) {
  if (!url.endsWith('.svg')) continue;
  const file = path.join('docs', url);
  let svg = await readFile(file, 'utf8');
  svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/g, '').replace(/<style id="case-embedded-fonts">[\s\S]*?<\/style>/g, '');
  svg = svg.replace('font-family="Arial, Liberation Sans, sans-serif"', 'font-family="Liberation Sans, sans-serif"');
  svg = svg.replaceAll('Liberation Mono, Courier New, monospace', 'Liberation Sans, sans-serif');
  svg = svg.replace(/<text id="case-scope-note"[\s\S]*?<\/text>/g, '');
  const height = Number(svg.match(/<svg[^>]*height="(\d+)"/)[1]);
  svg = svg.replace('</svg>', `<text id="case-scope-note" x="20" y="${height - 10}" font-size="10" fill="#526273">Conceptual design · identifiers and role assignments are illustrative · no endorsement or certificate issuance claimed</text>\n</svg>`);
  svg = svg.replace(/(<svg[^>]*>)/, `$1\n<metadata>${createImageXmp(metadata)}</metadata>\n<style id="case-embedded-fonts">${faces}</style>`);
  svg = svg.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n');
  await writeFile(file, svg);
  const raster = url.replace(/\.svg$/, '.png');
  if (assets[raster]) {
    // librsvg does not load embedded web fonts. Use the metrically compatible
    // installed Arial/Liberation family for raster output; the SVG retains its font.
    const rasterSvg = svg.replaceAll('font-family="Liberation Sans, sans-serif"', 'font-family="Arial, Liberation Sans, sans-serif"');
    const png = await sharp(Buffer.from(rasterSvg), {density: 144}).png().toBuffer();
    await writeFile(path.join('docs', raster), embedImageXmp(png, assets[raster]));
  }
}
console.log('Prepared case-study SVG fonts, embedded metadata and PNG downloads.');
