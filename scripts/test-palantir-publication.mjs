import assert from 'node:assert/strict';
import fs from 'node:fs';
import crypto from 'node:crypto';
import test from 'node:test';
import { parse } from 'yaml';
const base='docs/assets/europes-answer-to-palantir/graph-v0.1';
const model=JSON.parse(fs.readFileSync(base+'/graph-model.json','utf8'));
const page=slug=>{const s=fs.readFileSync('docs/'+slug+'.md','utf8');return parse(s.match(/^---\r?\n([\s\S]*?)\r?\n---/)[1]);};
test('released PDFs, model and all 36 figure assets retain their approved bytes',()=>{
 const manifest=JSON.parse(fs.readFileSync('scripts/data/palantir-release-integrity.json','utf8'));
 assert.equal(manifest.length,39);
 for(const f of manifest){const b=fs.readFileSync('docs'+f.path);assert.equal(b.length,f.bytes,f.path);assert.equal(crypto.createHash('sha256').update(b).digest('hex'),f.sha256,f.path);}
});
test('static fallback and embedded model derive exactly from the authoritative model',()=>{
 const html=fs.readFileSync('docs/_includes/robot-evidence-static.html','utf8');
 assert.deepEqual(JSON.parse(html.match(/id="reg-data">([\s\S]*?)<\/script>/)[1]),model);
 assert.equal(model.nodes.length,22);assert.equal(new Set(model.nodes.map(n=>n.id)).size,22);assert.equal(model.edges.length,20);assert.equal(model.groups.length,4);assert.equal(model.domains.length,8);
 for(const n of model.nodes)assert.ok(html.includes('id="record-'+n.id+'"'));
 for(let i=1;i<=20;i++)assert.ok(html.includes('id="relationship-'+i+'"'));
});
test('the topic represents two distinct works and the academic record cites only its paper',()=>{
 const p=page('europes-answer-to-palantir'),a=page('global-cooperation-sovereign-industrial-ai');
 assert.equal(p.schema_type,'WebPage');assert.equal(p.citation_metadata,false);assert.equal(p.research_works.length,2);
 assert.equal(new Set(p.research_works.map(w=>w.pdf_url)).size,2);
 const w=p.research_works.find(w=>w.schema_type==='ScholarlyArticle');assert.equal(w.pdf_url,a.pdf_url);assert.equal(w.id,a.canonical_url+'#article');assert.equal(a.author_entities[0].citation_name,'Carsten Stöcker');
 assert.equal(p.figure_objects.length,12);assert.equal(p.figure_objects.reduce((n,f)=>n+f.placements.length,0),14);
 assert.equal(p.faq_schema,false);assert.equal(a.faq_schema,false);
});
test('rendered topic has crawlable fallbacks, separate work encodings and no mixed Scholar tags',()=>{
 const html=fs.readFileSync('_site/europes-answer-to-palantir.html','utf8');
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
 const topic=schemas.find(s=>s['@type']==='WebPage');assert.equal(topic.mainEntity.length,2);assert.equal(topic.encoding.length,0);
 assert.doesNotMatch(html,/name="citation_/);assert.equal(schemas.filter(s=>s['@type']==='MediaObject').length,2);
 assert.equal(schemas.filter(s=>s['@type']==='ScholarlyArticle').length,1);assert.equal(schemas.filter(s=>s['@type']==='Article').length,1);
 assert.doesNotMatch(html,/Do not add a live|Preserve that method limit|C:\\Users|openai:set_globals/);
 for(const n of model.nodes)assert.ok(html.includes('id="record-'+n.id+'"'));
 const academic=fs.readFileSync('_site/global-cooperation-sovereign-industrial-ai.html','utf8');assert.equal([...academic.matchAll(/name="citation_title"/g)].length,1);assert.match(academic,/name="citation_author" content="Carsten Stöcker"/);
});
