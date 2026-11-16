# Publishing case studies

Case studies are a separate collection at `/case-studies/`. Research papers remain in the existing publication library. A case uses the shared `research-respec` layout, the existing metadata and figure components, and the same CI build, sitemap and validation pipeline.

## Add the next case

1. Follow `AGENTS.md` and `.agents/skills/spherity-research-publishing/SKILL.md`. Start from `templates/publication.md`, using the first case as a complete example. Keep the Markdown source directly under `docs/` so the local preview builder discovers it.
2. Set `publication_type: case-study`, `schema_type: TechArticle` and a unique `/case-studies/<slug>.html` permalink. Keep `canonical_url` and `latest_version` aligned. Use `extra_css: [/assets/case-studies.css]` for the at-a-glance component.
3. State the evidence level: **conceptual**, **pilot** or **deployment**. State the setting, challenge, approach, deliverables, evidence, limitations and next validation steps. A concept must not imply customer endorsement or measured results. A pilot or deployment needs attributable evidence, scope, dates and measurement methods.
4. Add a row to `docs/_data/case_studies.yml`. The case hub and its ItemList schema use this catalog. Do not add the hub to the paper catalog. Add related research links on the case page.
5. Follow the publication skill for verified authors, source checks, Google Trends evidence, answer summary, FAQ, figure rights, alt text and embedded asset metadata. Store original figures in a dedicated asset directory. Offer only download formats that actually exist; a PDF is optional.
6. Add a distinct card to `docs/_data/social_cards.yml`. Keep the research homepage card collection-wide, the case hub card about case studies, and each individual case card about that case. Extend the case image metadata loader when adding a new source file. Use a suitable original visual or an existing generator visual, and inspect the result.
7. For the first case, `node scripts/prepare-case-study-assets.mjs` embeds licensed fonts and metadata and regenerates PNG figure downloads. Extend that preparation step when adding other case figures. Its fonts come from the repository's licensed Liberation font source; retain the accompanying OFL notice.
8. Run `pnpm run test` with Ruby/Jekyll available. Otherwise use `pnpm run test:preview` and explicitly report that production Jekyll remains unverified. Both workflows regenerate the **full sitemap**, including pages, figures, alternate formats and declared downloads. Never add per-case sitemap inclusion gates.
9. Inspect homepage → case hub → individual case on desktop, tablet and phone. Check breadcrumbs, every figure, full-size links, actual downloads, tables, keyboard focus, metadata and separate social cards. Preserve unrelated work. Push, merge and deploy only when requested; verify the live page and sitemap after an authorised release.

## Review of the first case

The supplied Git bundle contains a concept note, five figures and a social card, not a deployed customer implementation. The useful contribution is connecting an AI verdict to evidence about model, device, input and authority, with material-verification, vehicle-data and forensic examples.

The integration retains that architecture while adding an explicit evidence level and an acceptance-test plan. It corrects conflation of hashes with confidentiality, accreditation with public-body identity, and version pinning with reproducibility. It qualifies offline status checks, independent model assurance and anticipated business benefits. The case does not claim a running verifier, measured savings or third-party endorsement.

Google Trends was observed on 13 November 2026 for Germany, Web Search, past five years and past twelve months. The comparison was `verifiable credentials`, `digital calibration certificate`, `AI in laboratories`. Displayed relative averages were 3/0/0 and 14/0/2 respectively, with sparse series and insufficient-data notices. Those normalized values are not search volumes or proof of absent demand. The exact comparison links and editorial decisions are in the page front matter.

The worldwide twelve-month comparison displayed relative averages 52/2/26. Unrelated rising queries were excluded. Geography-specific normalized values are not directly comparable.
