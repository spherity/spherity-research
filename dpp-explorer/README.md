# Global DPP Atlas

A static, interactive world map, knowledge graph, evidence table and timeline for the Spherity Research page. The default view uses **candidate 0.2.0**, with an evidence cut-off of **25 October 2026**. It is **unsealed and machine-assisted; qualified human review remains pending**. The edition selector also exposes the immutable **0.1.0** baseline, whose evidence cut-off is **23 October 2026**.

The candidate contains **192 substantive records** drawn from **268 entities, 364 assertions (361 active) and 188 source observations representing 171 source identities**. Its graph has **205 active sourced edges**. Geography and analytical vocabulary are supporting entities, not extra graph nodes. The baseline remains unchanged at 128 substantive records, 203 entities, 224 assertions and 112 source records.

## Build and preview

Use **Node.js 24 or later** and the **pnpm version declared in the repository root package.json**. Install the root build dependencies, including AJV, before running Atlas commands. The served map and graph use bundled assets and do not require a runtime network connection.

Run these commands from the **repository root**, one directory above this README:

```text
pnpm install --frozen-lockfile
pnpm run test:atlas-preview
pnpm run preview:atlas
```

The test command generates the Atlas, social cards and complete Node-rendered site, then runs preview validation. Open **http://127.0.0.1:4184/spherity-research/global-digital-product-passport-regulation.html** or **http://127.0.0.1:4184/spherity-research/dpp-explorer/**. The preview server remains running until stopped with Ctrl+C.

For a narrower input or Atlas check, use these commands from the same repository root:

```text
node dpp-explorer/scripts/build.mjs --check
pnpm run atlas:prepare
pnpm run atlas:test
```

The first command validates Atlas inputs without writing outputs. The prepare command verifies frozen checksums, rebuilds candidate outputs and copies the Atlas into the website source. The tests use generated outputs, so run prepare before the Atlas test suite.

**Preview validation is not production approval.** The candidate preview retains noindex metadata. Strict production validation deliberately rejects the unsealed candidate. The Node preview renderer also does not establish that the official GitHub Pages Jekyll build passes. See the [repository publishing guidance](../README.md) for the production workflow.

## Evidence and scope

- **Frozen evidence:** `../dpp-research/releases/0.1.0/` is read-only build input. Dataset, JSON-LD, schemas, provenance dossiers and other archive files retain their original bytes and checksums.
- **Candidate evidence:** `scripts/candidate-release.mjs` combines the baseline, retained website updates and dated regulatory/technical supplements from `src/data/`. It writes the unsealed candidate and its change history to `../dpp-research/candidates/0.2.0/`. Superseded assertions remain in that history but are excluded from current graph edges.
- **Navigation overlay:** `src/data/ecosystems.json` separately versions group membership and qualified geographic associations. For example, IDTA's German association does not change an international AAS standard into German law. See [TAXONOMY.md](TAXONOMY.md).
- **Filters:** jurisdiction, standards, DPP ecosystems, sector, status and record family apply consistently across views. Choices within a filter group combine; different filter dimensions narrow results.
- **Map:** the default global regulation view shows qualified phases of particular measures. Evidence coverage and global scope remain separate views. Colours do not establish country-wide adoption or legal readiness, and missing records do not establish absence of law. Great Britain and Northern Ireland retain separate scope qualifications.
- **Graph:** edges represent active qualified assertions. A committee liaison, a technical dependency and a legal requirement are distinct relationships; none automatically proves implementation compatibility. Selecting an edge reveals its claim and sources.
- **Timeline:** legal application dates, dated observations, proposals and indicative planning windows remain distinct. The EU calendar also identifies adjacent product regimes that are not DPP mandates.
- **Geometry:** Natural Earth 1:110m is public-domain, generalised cartography using de facto boundaries. Some small jurisdictions and subdivisions are not resolved; use the scope selector or table for complete dataset coverage.

Both editions retain their source-access limits and human-review qualifications. Vendored D3 and Natural Earth versions, notices and checksums are in `src/vendor/`.

## Outputs and GitHub Pages integration

From the repository root, `pnpm run atlas:prepare` creates:

```text
dpp-explorer/dist/                         Standalone Atlas output
dpp-explorer/integration/docs/dpp-explorer/ Generated integration copy
docs/dpp-explorer/                         Atlas input to the site build
```

These generated directories are excluded from Git. Editable code and data remain in `dpp-explorer/src/`; the frozen release and candidate evidence remain under `dpp-research/`. Keep all required source inputs in the repository rather than committing the generated website.

The Atlas output includes readable catalogues for both editions and a checksummed `build-manifest.json`. The build overwrites its intended generated files without recursively deleting directories; unrelated stale files are not silently removed. Use a clean build when preparing deployment.

The production workflow runs Atlas preparation before Jekyll. Relative application and data links support `/spherity-research/dpp-explorer/`. Building locally does not push or deploy the site.

## Updating the evidence

1. Keep the immutable 0.1.0 archive byte-for-byte unchanged, including its manifests. Preserve the repository's Git attributes so line-ending conversion does not alter checksummed evidence.
2. Add or revise dated candidate inputs with source IDs, access status, scope, limitations and explicit before/after history. Do not turn machine validation into a claim of independent human review.
3. Rebuild the candidate, graph, map, calendar and exports together. Keep version labels and counts consistent; never relabel newer evidence as baseline 0.1.0.
4. Run input checks, the preview validation suite and browser review of filters, evidence details and nested-path links. Verify frozen hashes and inspect the candidate review queue.
5. Resolve evidence and publication-review requirements before sealing a new immutable release or changing production publication status. Preserve earlier editions and document the reviewed changes.

Research rights remain as recorded in the datasets; bundled third-party assets retain their own notices. The build does not invent a DOI, peer-review status or public licence grant.

## Downloadable graph JSON

The build emits `data/current-dataset.json`, `current-world-map.json`, `current-ecosystems.json`, regulatory phases and calendar data from the same candidate used by the interface. `data/knowledge-graph.json` is the candidate graph export. Historical exports remain available separately.

“Download JSON” in the graph toolbar offers the complete graph or the current filtered view for the selected edition. The complete-file link retains a static fallback. `graph-export.js` preserves canonical IDs, qualified assertions, sources, supporting context and separate semantic assessments. `nodes` and `edges` are the displayed induced graph; `context_entities` are reference-only, including off-view evidence endpoints. `assertions` retains supporting evidence and supersession history.

Original rights and human-review qualifications travel with each download. Reproducible static exports use a null export timestamp; a current-view download records its preparation time. Neither export seals or publishes a research release.
