import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { Liquid } from "liquidjs";
import { parse as parseYaml } from "yaml";

const layout = await readFile(new URL("../docs/_layouts/default.html", import.meta.url), "utf8");
const citationTag = layout.match(/<meta name="citation_title"[^>]*>/)?.[0];
const pdfTag = layout.match(/<meta name="citation_pdf_url"[^>]*>/)?.[0];
assert.ok(citationTag, "The shared layout must emit citation title metadata.");
assert.ok(pdfTag, "The shared layout must retain the primary PDF citation URL.");

const origin = "https://spherity.github.io/spherity-research";
const engine = new Liquid();
engine.registerFilter("absolute_url", (value) => `${origin}${value}`);
const render = (page = {}) => engine.parseAndRender(citationTag, {
  page_title: "Existing publication title",
  page
});

test("citation title defaults to the existing page title", async () => {
  assert.equal(await render(), '<meta name="citation_title" content="Existing publication title">');
});

test("an empty optional citation title preserves the existing fallback", async () => {
  assert.equal(await render({ citation_title: "" }), await render());
});

test("an explicit bibliographic title overrides only the citation title and is escaped", async () => {
  const output = await render({ citation_title: 'Exact PDF title: A & B <C> "D"' });
  assert.equal(output.replaceAll("&#34;", "&quot;"), '<meta name="citation_title" content="Exact PDF title: A &amp; B &lt;C&gt; &quot;D&quot;">');
});

test("a citation title override does not replace the primary PDF URL", async () => {
  const output = await engine.parseAndRender(pdfTag, {
    page: { citation_title: "Exact PDF title", pdf_url: "/primary-paper.pdf" }
  });
  assert.equal(output, `<meta name="citation_pdf_url" content="${origin}/primary-paper.pdf">`);
});

test("the revocation series hub cites its executive brief without replacing the topic title", async () => {
  const source = await readFile(new URL("../docs/ai-agent-revocation-containment-multi-agent-systems.md", import.meta.url), "utf8");
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  assert.ok(frontmatter, "The series page requires front matter.");
  const page = parseYaml(frontmatter[1]);
  assert.equal(page.pdf_url, "/Spherity-Reseach-AI-Agent-Revocation-in-MAS-Executive-Brief.pdf");
  assert.equal(page.citation_title, "Revocation and Containment in AI Agent Networks: Executive Brief and Engineering Implementation Guide");
  assert.equal(page.title, "AI Agent Revocation and Containment in Multi-Agent Systems");
  assert.ok(page.associated_media.some((media) => media.url === page.pdf_url));
});
