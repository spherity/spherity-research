---
publication_template_version: 2
layout: research-respec
css: "/assets/spherity-research-respec.css"

title: "Securing the Semantic Supply Chain: Meaning as a Foundation of Trust Infrastructure"
seo_title: "Securing the Semantic Supply Chain"
og_title: "Securing the Semantic Supply Chain: Meaning as a Foundation of Trust Infrastructure"
og_description: "Executive brief, research article and supplements on securing the meaning of verifiable credentials: threat model, open harness, formal model, 30 mechanisms and 91 proposed requirements."
subtitle: "Meaning as a Foundation of Trust Infrastructure"
description: "Why a valid signature is not a valid meaning, and how release engineering for meaning secures verifiable credentials: threat model, empirical findings, formal model, mechanisms and requirements."
abstract: "Verifiable credentials are becoming legal and economic infrastructure. With a trusted binding between the signing key and the issuer, a signature authenticates the signed content; it does not by itself fix what that content means to the party that reads it. Meaning reaches a verifier through a supply chain of its own: JSON-LD contexts, vocabularies, ontologies, validation shapes, crosswalks, rulebooks, Type Metadata and codec tables. Each can be substituted, rolled back, frozen, shown differently to different verifiers, or withdrawn without verifiers noticing. W3C Data Integrity already requires approved contexts, or equivalent protections, at each verifier. We show what this leaves open and propose mechanisms to close it.\n\nIn laboratory tests with an open harness on production libraries, changing mutable, decision-relevant context bytes that the verifier did not authenticate independently changed a credential's meaning without invalidating signatures over its JSON text (JCS) or over an envelope. On one CBOR-LD library, a synthetic compact label became unreadable after a routine vocabulary update and, under a profile that signs the compressed bytes, decoded to a different meaning with a valid signature. Unauthenticated input imposed seconds of computation before the signature check when canonicalisation had no work limit; the tested canonicalisation library's default limit stops such input but rejects some legitimate credentials. A formal model of the semantic supply chain states the core results with proof sketches and model-checks the stateful mechanisms in 66 cases on small instances.\n\nFrom these results we derive 30 mechanisms, among them release engineering for meaning, lexical-first proofs that commit to the semantic graph, codec binding for long-lived carriers, receipts that record the meaning a decision applied, attested decision engines whose receipts the proposed profile requires to be attributable to an accountable legal person, and a profile for compliance evidence. We propose 91 requirements as a baseline for a high-assurance profile of W3C VCDM 2.0; no W3C group has adopted them. The problem is not specific to W3C VCDM: SD-JWT VC and ISO mdoc take their meaning from rulebooks and Type Metadata, and we give a first mapping, by design reasoning, of which mechanisms would transfer; none is specified or tested for those formats. The results bind meaning, not its truth; hardware isolation is simulated, not demonstrated, and enrolment for attribution is specified, not implemented."

paper_status: "Spherity Research Topic Page · Executive Brief + Research Article + Supplements S1–S5"
version: "1.0"
authors:
  - "Dr. Carsten Stöcker"
author_entities:
  - name: "Dr. Carsten Stöcker"
    affiliation: "Spherity GmbH"
    url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    orcid: "https://orcid.org/0009-0003-7417-8872"
    same_as:
      - "https://www.linkedin.com/in/dr-carsten-st%C3%B6cker-1145871/"
      - "https://orcid.org/0009-0003-7417-8872"
author_affiliations:
  - "Dr. Carsten Stöcker — Spherity GmbH"
affiliation: "Spherity GmbH"
date: "2026-11-16"
last_modified_at: "2026-11-16"
research_cutoff: "2026-11-15"
research_cutoff_label: "Standards, regulation and implementation evidence reviewed to this date"
lang: "en"

permalink: /securing-semantic-supply-chain.html
canonical_url: "https://spherity.github.io/spherity-research/securing-semantic-supply-chain.html"
latest_version: "https://spherity.github.io/spherity-research/securing-semantic-supply-chain.html"
pdf_url: "/Spherity-Research-Semantic-Supply-Chain-Article.pdf"
executive_brief_pdf_url: "/Spherity-Research-Semantic-Supply-Chain-Executive-Brief.pdf"
associated_media:
  - name: "Securing the Semantic Supply Chain — Executive Brief"
    url: "/Spherity-Research-Semantic-Supply-Chain-Executive-Brief.pdf"
    license: "https://creativecommons.org/licenses/by/4.0/"
  - name: "Securing the Semantic Supply Chain — Research Article"
    url: "/Spherity-Research-Semantic-Supply-Chain-Article.pdf"
    license: "https://creativecommons.org/licenses/by/4.0/"

robots: "noindex"
license: "https://creativecommons.org/licenses/by/4.0/"
license_scope: "This research collection: the topic page, executive brief, research article and supplements S1–S5"
keywords:
  - "verifiable credentials"
  - "semantic integrity"
  - "JSON-LD"
  - "RDF canonicalisation"
  - "Data Integrity"
  - "supply-chain security"
  - "formal model"
  - "European Digital Identity Wallet"
  - "digital product passport"
  - "attested decisions"
---

<!-- DRAFT: page body to be written with the Spherity Research Publishing skill before this file is committed. Not published. -->
