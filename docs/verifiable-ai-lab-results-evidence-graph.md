---
publication_template_version: 2
layout: research-respec
css: /assets/spherity-research-respec.css
title: "Verifiable AI Lab Results: From Scan to Certificate"
seo_title: "Verifiable AI Lab Results: A Case Study in Evidence Graphs"
og_title: "Verifiable AI Lab Results: From Scan to Certificate"
og_description: "A conceptual case study of verifiable AI lab results: evidence graphs connect model, input, device and authority, with material, vehicle and forensic scenarios."
subtitle: A conceptual case study in material verification, with vehicle-data and forensic laboratory variants
description: "A conceptual case study of verifiable AI lab results: evidence graphs connect model, input, device and authority, with material, vehicle and forensic scenarios."
paper_status: Spherity Research · Conceptual case study
authors:
  - Dr. Carsten Stöcker
author_entities:
  - name: Dr. Carsten Stöcker
    affiliation: Spherity GmbH
    url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    orcid: https://orcid.org/0009-0003-7417-8872
author_affiliations:
  - Dr. Carsten Stöcker — Spherity GmbH
affiliation: Spherity GmbH
date: "2026-11-13"
last_modified_at: "2026-11-13"
research_cutoff: "2026-11-13"
research_cutoff_label: Standards and public product descriptions checked to this date; the design itself is a proposal
lang: en
permalink: /case-studies/verifiable-ai-lab-results.html
canonical_url: https://spherity.github.io/spherity-research/case-studies/verifiable-ai-lab-results.html
latest_version: https://spherity.github.io/spherity-research/case-studies/verifiable-ai-lab-results.html
figure_objects:
  - id: figure-1-problem-framing
    name: What a verifier needs to trust an AI test result
    content_url: /assets/verifiable-ai-lab-results/figure-1-problem-framing.svg
    alt: "An AI analysis agent in the centre takes a spectrum and an object description and sends an AI test result to a verifier. Around the agent, six questions the verifier must be able to answer: who is accountable, which agent and model, which set-up, which input, which device, which object and is it still valid. Today only the verdict and a confidence value travel to the verifier."
    width: 1280
    height: 640
    description: The AI agent sits between the measurement and the receiver; everything that would let the receiver judge the result stays inside the lab, and only the verdict travels.
    caption: Six verifier questions connect an AI verdict to its accountable organisation, agent and model, set-up, input, device and object. Validity and status apply across every question. The figure describes the assumed portal-only baseline, not a finding about all laboratory systems.
    credit_text: Carsten Stöcker / Spherity GmbH
    copyright_notice: © 2026 Carsten Stöcker, Spherity GmbH
    license: https://creativecommons.org/licenses/by/4.0/
    creator_type: Person
    creator_name: Dr. Carsten Stöcker
    creator_url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    copyright_holder:
      type: Person
      name: Dr. Carsten Stöcker
      url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    keywords:
      - AI test result
      - verifier
      - trust gap
      - AI agent accountability
    raster_url: /assets/verifiable-ai-lab-results/figure-1-problem-framing.png
    distributions:
      - url: /assets/verifiable-ai-lab-results/figure-1-problem-framing.svg
        label: SVG
        encoding_format: image/svg+xml
      - url: /assets/verifiable-ai-lab-results/figure-1-problem-framing.png
        label: PNG
        encoding_format: image/png
  - id: figure-2-system-view
    name: "System view: from scan to Verification Certificate"
    content_url: /assets/verifiable-ai-lab-results/figure-2-system-view.svg
    alt: A marked object is scanned by a Tailor-Scan reader, an AI analysis agent issues an AI Analysis Result credential, and a verification portal issues a Verification Certificate credential to the verifier. Tailorlux GmbH, identified by an EUCC from Bundesanzeiger Verlag, issues device identity, Agent Card and Task Authorization. TÜV SÜD issues a reader certificate to the reader and an AI credential to the AI agent. Example identifiers only.
    width: 1280
    height: 660
    description: "Two chains meet at the portal: the operational chain carries the scan, the AI result and the certificate; the authority chain carries legal-person identity, device identity, agent identity, task mandate and third-party conformity, including an AI credential issued to the AI agent."
    caption: Conceptual design; all identifiers and role assignments are illustrative. System view. Solid arrows carry the scan and its results; dashed arrows carry identity, authorisation and conformity. TÜV SÜD issues the reader certificate to the reader and the AI credential to the AI agent. The verifier's six checks answer the six questions of Figure 1. All identifiers are examples; the design is a concept, not a product description.
    credit_text: Carsten Stöcker / Spherity GmbH
    copyright_notice: © 2026 Carsten Stöcker, Spherity GmbH
    license: https://creativecommons.org/licenses/by/4.0/
    creator_type: Person
    creator_name: Dr. Carsten Stöcker
    creator_url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    copyright_holder:
      type: Person
      name: Dr. Carsten Stöcker
      url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    keywords:
      - verification certificate
      - verifiable credentials
      - AI agent authorisation
      - NIR spectroscopy
    raster_url: /assets/verifiable-ai-lab-results/figure-2-system-view.png
    distributions:
      - url: /assets/verifiable-ai-lab-results/figure-2-system-view.svg
        label: SVG
        encoding_format: image/svg+xml
      - url: /assets/verifiable-ai-lab-results/figure-2-system-view.png
        label: PNG
        encoding_format: image/png
  - id: figure-3-evidence-graph
    name: Evidence graph of the Verification Certificate
    content_url: /assets/verifiable-ai-lab-results/figure-3-evidence-graph.svg
    alt: "The Verification Certificate links by hash to the AI Analysis Result, which is issued by the agent holding an Agent Card and carries task, object, input, reader and set-up assertions. Each assertion references a supporting credential: Task Authorization, Marker Registration, Reader Identity, TÜV SÜD reader certificate and TÜV SÜD AI certificate, issued by Tailorlux GmbH or TÜV SÜD. Tailorlux is identified by an EUCC issued by Bundesanzeiger Verlag."
    width: 1460
    height: 640
    description: Every claim in the certificate resolves to a signed credential and ends at a public trust anchor; a verifier walks the arrows and checks proof, status and validity at every node.
    caption: "Conceptual design; all identifiers and role assignments are illustrative. Evidence graph. Read left to right: the certificate hashes the AI result; the result is issued by the agent named in the Agent Card and carries five assertions; each assertion references the credential that backs it; those credentials are issued by Tailorlux GmbH or TÜV SÜD; Tailorlux is identified by an EUCC from Bundesanzeiger Verlag. Example identifiers only."
    credit_text: Carsten Stöcker / Spherity GmbH
    copyright_notice: © 2026 Carsten Stöcker, Spherity GmbH
    license: https://creativecommons.org/licenses/by/4.0/
    creator_type: Person
    creator_name: Dr. Carsten Stöcker
    creator_url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    copyright_holder:
      type: Person
      name: Dr. Carsten Stöcker
      url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    keywords:
      - verifiable evidence graph
      - credential chaining
      - W3C Recognized Entities
      - EU Company Certificate
    raster_url: /assets/verifiable-ai-lab-results/figure-3-evidence-graph.png
    distributions:
      - url: /assets/verifiable-ai-lab-results/figure-3-evidence-graph.svg
        label: SVG
        encoding_format: image/svg+xml
      - url: /assets/verifiable-ai-lab-results/figure-3-evidence-graph.png
        label: PNG
        encoding_format: image/png
  - id: figure-4-vehicle-data-variant
    name: The same set-up for vehicle data processing and labelling
    content_url: /assets/verifiable-ai-lab-results/figure-4-vehicle-data-variant.svg
    alt: A vehicle streams sensor data to a gateway that signs frames, an AI labelling agent issues an AI Labelling Result credential, and a data product portal issues a Data Provenance Certificate credential to the data consumer. A fictional processor identified by an EUCC issues device identity, Agent Card and Task Authorization; TÜV SÜD issues a gateway certificate to the gateway and an AI credential to the labelling agent.
    width: 1280
    height: 660
    description: "The system view of Figure 2 with the nouns of a vehicle data chain: vehicle trip, gateway, labelling agent, labelled dataset and data consumer; identity, authority and assurance links are unchanged."
    caption: "Conceptual design; all identifiers and role assignments are illustrative. The same set-up for vehicle data processing and labelling. Only the nouns change: the object is a vehicle trip, the reader is the vehicle gateway, the agent labels events, and the certificate attests the provenance of a labelled dataset. The processor is fictional."
    credit_text: Carsten Stöcker / Spherity GmbH
    copyright_notice: © 2026 Carsten Stöcker, Spherity GmbH
    license: https://creativecommons.org/licenses/by/4.0/
    creator_type: Person
    creator_name: Dr. Carsten Stöcker
    creator_url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    copyright_holder:
      type: Person
      name: Dr. Carsten Stöcker
      url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    keywords:
      - vehicle data provenance
      - data labelling
      - verifiable credentials
      - AI agent authorisation
    raster_url: /assets/verifiable-ai-lab-results/figure-4-vehicle-data-variant.png
    distributions:
      - url: /assets/verifiable-ai-lab-results/figure-4-vehicle-data-variant.svg
        label: SVG
        encoding_format: image/svg+xml
      - url: /assets/verifiable-ai-lab-results/figure-4-vehicle-data-variant.png
        label: PNG
        encoding_format: image/png
  - id: figure-5-forensic-laboratory-variant
    name: "Forensic laboratory variant: third-party AI models on lab data"
    content_url: /assets/verifiable-ai-lab-results/figure-5-forensic-laboratory-variant.svg
    alt: An exhibit is measured by an instrument with a LIMS gateway that signs raw data, an AI evaluation service running a third-party chemistry model issues an AI Analysis Result credential, and the laboratory's report service issues a Forensic Result Certificate to court, prosecutor or defence expert. The laboratory, a public body accredited by DAkkS, issues instrument identity, Agent Card and Task Authorization; the AI model vendor issues a model credential to the AI service; a calibration laboratory issues a Digital Calibration Certificate to the instrument.
    width: 1280
    height: 660
    description: A conceptual forensic evidence graph separates official laboratory identity, scope-specific accreditation, vendor model assertions, instrument calibration and exhibit custody.
    caption: Conceptual forensic scenario, not an existing project. Official identity establishes the public body; accreditation supports competence for a defined scope. The model vendor’s credential is a vendor assertion, distinct from independent model assessment. DCC is a proposed machine-readable calibration format.
    credit_text: Carsten Stöcker / Spherity GmbH
    copyright_notice: © 2026 Carsten Stöcker, Spherity GmbH
    license: https://creativecommons.org/licenses/by/4.0/
    creator_type: Person
    creator_name: Dr. Carsten Stöcker
    creator_url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    copyright_holder:
      type: Person
      name: Dr. Carsten Stöcker
      url: https://spherity.github.io/spherity-research/#dr-carsten-stoecker
    keywords:
      - forensic laboratory
      - Digital Calibration Certificate
      - model credential
      - chain of custody
    raster_url: /assets/verifiable-ai-lab-results/figure-5-forensic-laboratory-variant.png
    distributions:
      - url: /assets/verifiable-ai-lab-results/figure-5-forensic-laboratory-variant.svg
        label: SVG
        encoding_format: image/svg+xml
      - url: /assets/verifiable-ai-lab-results/figure-5-forensic-laboratory-variant.png
        label: PNG
        encoding_format: image/png
robots: index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1
license: https://creativecommons.org/licenses/by/4.0/
license_scope: This concept note and its original figures
license_exclusions: Tailorlux, Tailor-Safe, Tailor-Scan, TÜV SÜD and Bundesanzeiger Verlag are names of third parties and their products; they are used as text only and are not covered by this licence. Spherity names and logos are excluded from the research licence.
image: /assets/preview-verifiable-ai-lab-results.webp
image_alt: "Conceptual case study: Verifiable AI Lab Results, from scan to certificate, connecting measurement, AI result and verification."
image_mime: image/webp
image_width: 1200
image_height: 630
image_credit_text: Carsten Stöcker / Spherity GmbH
image_copyright_notice: © 2026 Carsten Stöcker, Spherity GmbH
keywords:
  - verifiable AI lab results
  - verification certificate
  - verifiable evidence graph
  - verifiable credentials
  - AI agent authorisation
  - Agent Card
  - task mandate
  - EU Company Certificate
  - European Business Wallet
  - W3C Recognized Entities
  - credential chaining
  - NIR spectroscopy
  - luminescent marker verification
  - digital calibration certificate
  - QI-Digital
  - vehicle data provenance
  - data labelling
  - forensic laboratory
  - chain of custody
  - digital product passport
answer_summary: This conceptual case study proposes a verifiable evidence graph for AI-evaluated laboratory results. A certificate binds the result to its model, input, device, object and task authorisation. The worked scenario is marker and NIR material verification, with vehicle-data and forensic variants. Credentials support checks of provenance, integrity and authority; they do not establish scientific correctness. No implementation, deployment or measured outcomes are reported.
key_takeaways:
  - Bind the result to evidence about the exact model, input, device, object and permitted task.
  - Check issuer recognition, action authorisation, evidence integrity, validity and status separately.
  - Keep legal identity, laboratory competence, model-vendor assertions and independent assessment distinct.
  - Offline verification is an as-of check against retained evidence; it cannot discover revocations after its status snapshot.
  - Test failure cases before claiming benefits. This case describes a proposed architecture, with no measured deployment outcomes.
about:
  - AI-evaluated laboratory results
  - Verifiable evidence graphs
  - Verifiable authority for AI agents
  - Material verification with luminescent markers and NIR spectroscopy
mentions:
  - Forensic laboratories and chain of custody
  - ISO/IEC 17025 accreditation
  - W3C Verifiable Credentials Data Model 2.0
  - W3C Recognized Entities
  - EU Company Certificate
  - European Business Wallet
  - QI-Digital and the Digital Calibration Certificate
  - Micro-certificates and trusted release
  - Vehicle data chains
citations:
  - https://www.w3.org/TR/vc-data-model-2.0/
  - https://www.w3.org/TR/vc-recognized-entities-1.0/
  - https://doi.org/10.1109/VTC2021-Spring51267.2021.9448697
  - https://eur-lex.europa.eu/eli/dir/2025/25/oj
  - https://www.qi-digital.de/
  - https://netzwerke.bam.de/Netzwerke/Navigation/DE/Netzwerke/QI-Digital/qi-digital.html
audiences:
  - Laboratory and quality managers
  - Product-protection and anti-counterfeiting teams
  - Credential and wallet architects
  - Conformity assessment bodies
  - Vehicle data and AI labelling teams
  - Forensic laboratories and their software partners
spatial_coverage:
  - European Union
  - Germany
search_research:
  reviewed_on: "2026-11-13"
  source: Google Trends
  source_url: https://trends.google.com/trends/explore
  geographies:
    - Germany
    - Worldwide
  time_ranges:
    - Past 12 months
    - Past 5 years
  search_types:
    - Web Search
  authority_terms:
    - verifiable AI lab results
    - verifiable evidence graph
    - AI agent authorisation
  discovery_terms:
    - AI in laboratories
    - NIR spectroscopy AI
    - anti-counterfeiting marker verification
    - digital calibration certificate
  audience_questions:
    - How can a lab result produced by an AI model be verified by a customer or an authority?
    - What evidence has to travel with an AI verdict so that it is accountable?
  evidence:
    - comparison: verifiable credentials vs digital calibration certificate vs AI in laboratories
      input_type: Search terms
      geography: Germany
      time_range: Past 5 years
      search_type: Web Search
      url: https://trends.google.com/trends/explore?date=today%205-y&geo=DE&q=verifiable%20credentials,digital%20calibration%20certificate,AI%20in%20laboratories&hl=en
      result: "Observed 13 November 2026: displayed relative averages 3, 0 and 0 respectively. The series are sparse; digital calibration certificate had insufficient regional and related-query data. A zero is not proof of zero searches. These are normalized comparison values, not search volumes."
    - comparison: verifiable credentials vs digital calibration certificate vs AI in laboratories
      input_type: Search terms
      geography: Germany
      time_range: Past 12 months
      search_type: Web Search
      url: https://trends.google.com/trends/explore?geo=DE&q=verifiable%20credentials,digital%20calibration%20certificate,AI%20in%20laboratories&hl=en
      result: "Observed 13 November 2026: displayed relative averages 14, 0 and 2 respectively, with insufficient-data notices in supporting panels. No reliable growth or market-size claim follows from this sparse comparison."
    - comparison: verifiable credentials vs digital calibration certificate vs AI in laboratories
      input_type: Search terms
      geography: Worldwide
      time_range: Past 12 months
      search_type: Web Search
      url: https://trends.google.com/trends/explore?q=verifiable%20credentials,digital%20calibration%20certificate,AI%20in%20laboratories&hl=en
      result: "Observed 13 November 2026: displayed relative averages 52, 2 and 26 respectively. Digital calibration certificate had insufficient related-query data. Unrelated rising queries were excluded from editorial decisions. Values are normalized within this comparison, not absolute volume or directly comparable to Germany."
  editorial_decisions:
    - Use verifiable credentials as established discovery vocabulary, while naming the specific laboratory problem in the title and summary.
    - Retain digital calibration certificate and evidence graph for technical precision despite sparse Trends evidence.
    - Google Trends is directional context only. No search-volume, market-size or growth claim is made; a worldwide twelve-month comparison was also reviewed, but no EU-wide aggregate was reviewed.
questions_answered:
  - question: Is this a deployed customer case study?
    answer: "No. It is a conceptual case study: a proposed architecture and validation plan, with no deployment, benchmark or measured business outcome. Third-party names illustrate roles; no endorsement, certificate issuance or commercial relationship is claimed."
  - question: What does a verifiable AI lab result prove?
    answer: Cryptographic checks can establish integrity and attribution under the verifier’s trusted keys and policy. An evidence graph connects those checks to the model, input, device, object and task mandate. It does not establish that the measurement or scientific conclusion is correct; method validation, uncertainty, competence and independent assurance remain separate.
  - question: What is in the evidence graph?
    answer: "The Verification Certificate hashes the AI result. The result identifies the agent and carries five assertions: task, set-up, object, reader and input. Supporting credentials describe agent identity, task authorisation, object registration, device identity and relevant assessment or calibration. The verifier chooses which issuers and actions to recognise."
  - question: Can the result be verified offline?
    answer: An offline verifier needs the proof suite, full credential chain, trusted key material and authenticated status evidence, with an explicit evaluation time and freshness policy. It can verify against that retained snapshot. It cannot discover a later revocation without updated evidence, and should return indeterminate or require an online check when evidence is stale.
  - question: How could a laboratory start?
    answer: Start with a signed result that pins input hashes and model and reference versions. Add signed device observations, an Agent Card and bounded Task Authorization, verified legal identity, then suitable independent assurance. Define schemas and test successful and failing verification paths. Issuing a credential alone does not validate its scientific claims.
  - question: How does the forensic variant differ?
    answer: It separates the public laboratory’s official identity and authorisation, scope-specific accreditation, the vendor’s model assertions and instrument calibration. The exhibit adds a chain of custody. A Digital Calibration Certificate can carry calibration data; ISO/IEC 17025 does not prescribe that digital format. Re-analysis also needs retained artefacts, data, runtime information and lawful access. Legal admissibility remains a separate decision.
related_publications:
  - title: "Proofs over Statements: Verifiable Evidence Graphs"
    url: /proofs-over-statements-evidence-graphs.html
    context: Defines the credential profile and proof inputs for evidence graphs; this note applies the graph to AI-evaluated measurements.
  - title: "Beyond Single-Enterprise ZTA: Multi-Trust Architectures for Authorised Agentic Actors"
    url: /beyond-zero-trust-m-trust-authorised-agentic-actors.html
    context: Supplies the verifiable-authority chain from legal person to agent mandate that the Agent Card and Task Authorization implement here.
  - title: European Business Wallets as the Legal Control Plane for Zero Trust AI Agents
    url: /ebw-zero-trust-ai-agents.html
    context: Describes the legal-person identity and mandate primitives the issuing lab would present from a Business Wallet.
  - title: Evidence Graphs for Industrial AI
    url: /evidence-graphs-industrial-ai-data-plane.html
    context: Gives the data-plane architecture for provenance, validation and freshness that the certificate's assertions feed.
toc_items:
  - title: Case study at a glance
    href: "#case-at-a-glance"
  - title: Abstract
    href: "#abstract"
  - title: 1. Labs are becoming AI pipelines
    href: "#labs-ai-pipelines"
  - title: 2. One pattern, many labs
    href: "#common-pattern"
  - title: 3. Use case and requirements
    href: "#use-case-and-requirements"
  - title: 4. The design
    href: "#design"
  - title: 5. How to start
    href: "#how-to-start"
  - title: 6. Vehicle data variant
    href: "#vehicle-data"
  - title: 7. Forensic laboratory variant
    href: "#forensic-lab"
  - title: 8. Outlook
    href: "#outlook"
  - title: 9. Validation and evidence gaps
    href: "#validation-plan"
  - title: References
    href: "#references"
  - title: License and citation
    href: "#license-and-citation"
  - title: Questions answered
    href: "#questions-answered"
tags:
  - verifiable-credentials
  - evidence-graphs
  - trusted-ai
  - digital-identity
  - industrial-ai
publication_type: case-study
schema_type: TechArticle
case_study_status: conceptual
extra_css:
  - /assets/case-studies.css
---

<section class="case-at-glance" aria-labelledby="case-at-a-glance">
<h2 id="case-at-a-glance">Case study at a glance</h2>
<dl><dt>Evidence level</dt><dd><strong>Conceptual case study.</strong> Proposed architecture; no deployment or measured outcomes are reported.</dd>
<dt>Setting</dt><dd>Marker and NIR material verification; transferable questions for vehicle data and forensic laboratories.</dd>
<dt>Challenge</dt><dd>An AI verdict reaches a receiver without portable evidence of its provenance and authority.</dd>
<dt>Approach</dt><dd>Connect each result to signed evidence about its model, input, device, object and permitted task.</dd>
<dt>Deliverables</dt><dd>Five architecture figures, a staged implementation path and a validation plan. No executable prototype or PDF accompanies this case.</dd>
<dt>Main lesson</dt><dd>Verifiable provenance and authority help assess a result; they do not establish scientific correctness.</dd></dl>
</section>


<section class="abstract-box" markdown="1">
<h2 id="abstract">Abstract</h2>

Laboratory measurements no longer end at the instrument. A raw signal goes to a backend, a model compares it with reference databases, and a portal delivers a verdict to a receiver who was never in the lab. The verdict travels further than the laboratory's accountability: the receiver cannot see which model, input, device or authority stood behind it. This concept note proposes issuing such results as verifiable credentials. The Verification Certificate is the root of an evidence graph: it hashes the AI result, the result pins task, set-up, object, reader and input, each assertion references the credential that backs it, and every credential ends at a public trust anchor. Authority runs along a second chain from a company register through the legal person to an Agent Card and a bounded Task Authorization. The design is worked through on marker and NIR material verification, with a six-step starting guideline, and transferred to vehicle data processing and labelling. It builds on the W3C Verifiable Credentials Data Model 2.0, the W3C Recognized Entities working draft and the digitisation of the quality infrastructure. It is a proposal for discussion, not a description of any vendor's product.

<p class="keywords"><strong>Keywords:</strong> verifiable AI lab results; verification certificate; verifiable evidence graph; AI agent authorisation; EU Company Certificate; W3C Recognized Entities; NIR spectroscopy; vehicle data provenance</p>
</section>

<h2 id="labs-ai-pipelines">1. Labs are becoming AI pipelines</h2>

A measurement used to end at the instrument: a spectrum, a chromatogram, an image, read by a trained person who signed a report. Today the instrument is the first step of a pipeline. The raw signal goes to a backend, a model compares it with reference databases, software classifies, quantifies or labels, and a portal delivers the result to someone who was never in the lab. This is the same in materials testing, food and pharma quality control, environmental monitoring, medical diagnostics, recycling sorting and vehicle data analysis.

Four forces drive the trend. **Throughput and cost:** automation can reduce evaluation time for suitable, validated tasks, and handheld or inline sensors move the measurement from the lab to the field. **Reference data:** spectral and marker libraries grow with every scan, creating opportunities for automated comparison; accuracy must be established for the intended task. **Demand for machine-readable evidence:** product passports, recycled-content declarations, customs and conformity procedures want results as data, not as PDFs. **Digital quality infrastructure:** calibration certificates, test reports and accreditation symbols are being digitised in initiatives such as QI-Digital, so the surrounding assurance can be checked by software too [7][8].

The trend creates a trust gap. A human-signed report carried its own accountability: a named person, an accredited lab, a calibrated instrument. An AI result arrives as a verdict with a confidence value. The receiver cannot tell which model produced it, on which input, from which device, under whose authority, and whether any of that was still valid at the time. The further the result travels, the larger the gap.

<h2 id="common-pattern">2. One pattern, many labs</h2>

The Tailorlux flow is a textbook instance of this pattern. Tailorlux marks materials with Tailor-Safe luminescent pigments and a Tailor-Scan handheld reads the VIS/NIR spectrum; in the set-up considered here, a backend evaluates the spectrum with AI against NIR reference and marker databases and a verification portal returns a verdict to the user. Tailorlux publicly describes on-device checks against a stored verification rule [13]; the backend and portal are taken from the set-up discussed for this note. Replace the nouns and you have a food lab, a metals lab or a vehicle data chain. The identity and evidence pattern can transfer, but each domain needs its own schemas, acceptance policy, scientific validation and governance.

<aside class="evidence-callout" aria-label="Scope of this note">
<h3>Concept only</h3>
<p>Everything on this page about Tailorlux is a design proposal for discussion. It is not a description of a Tailorlux product, process or commitment, and all identifiers and role assignments are illustrative; no certificate issuance, endorsement or partner relationship is claimed. TÜV SÜD and Bundesanzeiger Verlag appear as examples of the roles a conformity assessment body and a company register play. TÜV SÜD describes certification of AI management systems under ISO/IEC 42001 [14]; a credential that assesses a specific model version, as drawn here, is a role assumed for the concept.</p>
</aside>

<h2 id="use-case-and-requirements">3. Use case and requirements</h2>

**Use case.** Today the verdict of the marker and NIR evaluation is a screen or a report. Whoever receives it has to trust the portal and call the lab to confirm it. This is the trust gap of section 1 in one concrete flow. Figure 1 puts the AI agent in the centre and lists what a verifier would need to trust its result.

{% assign figure_problem = page.figure_objects | first %}
{% include research-figure.html figure=figure_problem number=1 %}

**Reading Figure 1.** The agent sits between the measurement and the receiver. Everything that would let the receiver judge the result (dashed) stays inside the lab: the mandate, the model and its assessment, the reference versions, the raw spectrum, the device state and the object binding. Only the verdict (solid) travels. The requirements below give each of the six questions a verifiable answer, and the design in section 4 binds those answers to the result.

**Objective.** Turn the result into a **Verifikationszertifikat**, a Verification Certificate, that brand owners, customs, recyclers and auditors can verify on their own, offline if needed, without an account at the issuing lab. Material claims feed into product passports, recycled-content declarations and anti-counterfeiting cases, so an AI verdict has to be accountable: who ran it, under whose authority, with which model, on which input, from which device.

**Requirements.**

1. Issuer identity checked against an authoritative register or official public-body record. An EU Company Certificate under Directive (EU) 2025/25 [10] is a prospective company-identity input, subject to implementation. The figures assign Bundesanzeiger Verlag an illustrative register role, not a confirmed EUCC issuing role. A DID by itself does not establish legal identity.
2. Verifiable authority for the AI agent: an identity (Agent Card) and a bounded task mandate (Task Authorization).
3. Traceability: task, set-up, object, reader and input pinned in the result. Reproducibility additionally requires retained model and data artefacts, runtime configuration, access rights and a policy for nondeterministic outputs.
4. Independent assurance of reader and AI system by a conformity assessment body.
5. Data minimisation: reference input commitments rather than distributing raw data unnecessarily. Hashes are not encryption; predictable inputs may be guessed. Confidential material needs access controls, encryption and, where appropriate, salted commitments.
6. Status and revocation per certificate, device, model and reference database.
7. Standards alignment: W3C Verifiable Credentials Data Model 2.0, with an explicit proof suite and status mechanism. Recognized Entities is a working draft; Agent Card, task and laboratory assertion schemas here are proposed profiles, not established W3C standards.

<h2 id="design">4. The design</h2>

Every event becomes a micro-certificate bound to the scanned object, following the micro-certificate and trusted-release pattern developed for regulated supply chains [1][2]. The certificate is the root of a verifiable evidence graph [3]: it hashes the AI result, the result carries five assertions, each assertion references the credential that backs it, and every credential ends at a public trust anchor. Authority runs along a second chain, EUCC to the legal person to Agent Card to Task Authorization [4], and third-party conformity comes from certificates referenced where they matter. The proposed recognition checks follow the W3C Recognized Entities working draft [5], whose version must be pinned in an implementation.

{% assign figure_system_view = page.figure_objects | where: "id", "figure-2-system-view" | first %}
{% include research-figure.html figure=figure_system_view number=2 %}

**Reading Figure 2.** Two chains meet at the portal. The operational chain (solid) carries the scan: the reader signs the raw input, the agent issues the result, the portal issues the certificate. The authority chain (dashed) says who is allowed to do what: the register vouches for the lab as a legal person, the lab equips its reader and its agent with credentials and signs the certificate, and the conformity assessment body vouches for the reader type and, with an AI credential bound to the model version, for the AI agent. The verifier's six checks are the six questions of Figure 1. A verifier need not hold an account at the portal. It still needs the complete supporting evidence, trusted keys, proof verification, status information and an acceptance policy. Offline checks rely on a retained snapshot and cannot discover later revocations.

{% assign figure_evidence_graph = page.figure_objects | where: "id", "figure-3-evidence-graph" | first %}
{% include research-figure.html figure=figure_evidence_graph number=3 %}

**Reading Figure 3.** The graph is what a verifier walks. Each arrow is a cryptographic link, a hash or a signature, with a stated meaning. Walking left to right answers, in order: what was claimed, by which agent, on what task, about which object, from which input and device, under which set-up, backed by which certificates, issued by which legal persons, recognised by which anchors. The chain validation of the W3C Recognized Entities draft gives two answers, `recognized` (the issuer is in a chain to an anchor) and `actionRecognized` (recognised for this specific action, here issuing a Verification Certificate). Both must hold for the recognition check. Proof integrity, status, evidence completeness and the scientific acceptance policy must also pass; recognition alone is not sufficient.

Two choices in the figures are open for revision. The AI credential issued by the conformity assessment body is bound to the model version and referenced from the set-up assertion rather than from the certificate itself, so the chain stays attached to the model actually used. The portal has no identity of its own and signs as the legal person.

<h2 id="how-to-start">5. How to start: simple first, one step at a time</h2>

The following stages provide a migration path. Key management, data retention, schemas and system integration must be planned across stages; existing systems may need changes. The order follows value for the receiver: first make the result tamper-evident, then attributable, then independently assured.

1. **Sign the result.** The portal issues the existing result as a verifiable credential: verdict, time, lot or object identifier, model version, reference-database versions, and the hash of the raw spectrum. Receivers can check integrity and attribution and see the issuer’s claim about the set-up. Establishing that the claimed set-up actually ran requires additional execution or assessment evidence.
2. **Give the reader a key.** Each reader signs its scans with a device key and reports serial, firmware and calibration date. The input assertion becomes verifiable: the device key signed this spectrum and timestamp. Secure key custody, trusted time and protection of the acquisition path are separate requirements.
3. **Name the agent and bound its task.** The lab issues an Agent Card for the evaluation service and a Task Authorization per job or per customer. The result now says under whose authority it was produced and for what scope.
4. **Root the issuer in a register.** The lab obtains a register-backed legal-person identity (an EUCC once available, a register-linked DID until then) and signs certificates with it. A receiver can resolve the legal person without trusting a web page.
5. **Add independent assurance.** A conformity assessment body certifies the reader type and the AI evaluation system; the certificates are referenced from the reader and set-up assertions. Calibration moves to a Digital Calibration Certificate [8].
6. **Publish the schemas and a verifier.** Credential schemas, a public verification page and a stapled recognition chain for offline checks: the issuer attaches the recognition credentials up to the trust anchor to the certificate itself, along with trusted keys and authenticated status evidence. Offline validation is an as-of assessment with an explicit maximum evidence age; stale or missing evidence must not silently pass. From here on the certificate can be dropped into a product passport or a customs file as evidence.

Steps 1 and 2 need no external party. Steps 3 and 4 are mostly governance decisions. Steps 5 and 6 depend on partners and standards timelines.

<h2 id="vehicle-data">6. The same set-up for vehicle data processing and labelling</h2>

Vehicle data chains have the same accountability problem as material verification: a downstream consumer receives labelled data and cannot tell which model produced the labels, from which raw frames, on which device, and with what mandate [6]. The evidence graph of Figure 3 supplies a starting structure; vehicle privacy, permissions and dataset acceptance require their own policy.

{% assign figure_vehicle = page.figure_objects | where: "id", "figure-4-vehicle-data-variant" | first %}
{% include research-figure.html figure=figure_vehicle number=4 %}

**Reading Figure 4.** The object is a vehicle trip instead of a marked lot, the reader is the vehicle gateway, the AI agent labels events instead of verifying a marker, and the certificate attests the provenance of a labelled dataset. Identity, authority, assurance and evidence links are the same as in Figures 2 and 3. The labelling example follows the dangerous-driving detection case in [6]. One addition is specific to vehicle data: the Task Authorization has to carry the data-use mandate of the vehicle owner or OEM next to the processor's own authorisation of the agent.

<div class="table-scroll" role="region" aria-label="Node mapping between material verification and vehicle data labelling" tabindex="0">
<table class="academic-table">
<caption>Table 1. The evidence graph of Figure 3 mapped to the three cases.</caption>
<thead>
<tr><th scope="col">Node in Figure 3</th><th scope="col">Material verification</th><th scope="col">Vehicle data labelling</th><th scope="col">Forensic laboratory (Figure 5)</th></tr>
</thead>
<tbody>
<tr><th scope="row">Certificate</th><td>Verification Certificate for a lot</td><td>Data Provenance Certificate for a labelled dataset</td><td>Forensic Result Certificate for an exhibit</td></tr>
<tr><th scope="row">AI result</th><td>AI Analysis Result: marker present, share, confidence</td><td>AI Labelling Result: events and labels with confidence</td><td>AI Analysis Result: substance identified, library match</td></tr>
<tr><th scope="row">Agent Card</th><td>analysis agent, model version</td><td>labelling agent, model version</td><td>evaluation service running a vendor model</td></tr>
<tr><th scope="row">Task assertion</th><td>marker verification of one lot</td><td>labelling job for one trip or time window</td><td>analysis order for one exhibit and method</td></tr>
<tr><th scope="row">Set-up assertion</th><td>model, NIR reference database, marker database, rule</td><td>model, label taxonomy version, pipeline version</td><td>vendor model version, spectral library version, method</td></tr>
<tr><th scope="row">Object assertion</th><td>lot, product, expected marker</td><td>vehicle pseudonym, trip, sensor set</td><td>exhibit, sample, chain of custody reference</td></tr>
<tr><th scope="row">Reader assertion</th><td>reader, firmware, calibration</td><td>vehicle gateway, firmware, sensor calibration</td><td>instrument, LIMS gateway, calibration</td></tr>
<tr><th scope="row">Input assertion</th><td>spectrum hash, time, operator</td><td>frame hashes, time series, trip</td><td>raw-data hashes, time, analyst</td></tr>
<tr><th scope="row">Task Authorization</th><td>the lab authorises the agent for the lot</td><td>the processor authorises the agent; plus the data-use mandate of owner or OEM</td><td>the laboratory authorises the service; the vendor's model credential covers the model</td></tr>
<tr><th scope="row">Marker Registration</th><td>marker code to customer product</td><td>gateway onboarding: gateway bound to vehicle</td><td>chain of custody: exhibit bound to case and sample</td></tr>
<tr><th scope="row">Reader Identity</th><td>reader DID and key</td><td>gateway DID and key</td><td>instrument DID and key</td></tr>
<tr><th scope="row">Conformity certificates</th><td>reader type and calibration; AI system</td><td>gateway type and calibration; AI labelling system</td><td>DCC for the instrument; vendor model assertions and separately identified independent assessment</td></tr>
<tr><th scope="row">Anchors</th><td colspan="2">EU Company Certificate from the register operator for the legal person; the conformity assessment body for certificates</td><td>official public-body identity; scope-specific accreditation; vendor identity; traceable calibration</td></tr>
</tbody>
</table>
</div>

<h2 id="forensic-lab">7. Forensic laboratories: lab data enriched by third-party AI models</h2>

Forensic laboratories are the sharpest case of the trend in section 1. Their instruments produce spectra and chromatograms, specialised chemistry models from software vendors enrich the raw data with substance identification, structure proposals or similarity scores, and the result ends up as evidence in criminal proceedings. The receiver is a court, the prosecution and the defence, and the result has to survive a re-analysis years later.

Three properties make the pattern harder than the material-verification flow, and the evidence graph answers each of them. The AI models are not the laboratory's own: each vendor is a legal person of its own and has to vouch for its model with a model credential that pins version and validation status, so the laboratory's Agent Card and the vendor's model credential are two separate links in the chain. For the public-body scenario, official records establish the laboratory’s identity and authority. Accreditation under ISO/IEC 17025 supports competence for a defined scope; it is a separate assurance input, not a substitute for legal identity [12]. A vendor-issued model credential is an attributed vendor assertion, not independent certification. And the object is an exhibit with a chain of custody, which is itself a credential chain the certificate has to reference. Instrument calibration as a Digital Calibration Certificate is the part that QI-Digital already provides [7][8].

{% assign figure_forensic = page.figure_objects | where: "id", "figure-5-forensic-laboratory-variant" | first %}
{% include research-figure.html figure=figure_forensic number=5 %}

**Reading Figure 5.** The evidence graph of Figure 3 is unchanged, but the verifier is now a court, which raises the bar on three of the six questions of Figure 1. Question 2 splits in two: the laboratory vouches for the agent (Agent Card, Task Authorization) and the vendor vouches for the model (model credential with version and validation status), so a defence expert can see both without a request to the laboratory. Question 5 points at a Digital Calibration Certificate instead of a type certificate, a proposed machine-readable way to convey calibration data [8]. ISO/IEC 17025 does not require the DCC digital format. Question 6 adds the chain of custody of the exhibit as its own credential chain. Because proceedings run for years, pinned versions support traceability, but re-analysis also needs retained model artefacts, input data, libraries, runtime configuration and lawful access. Nondeterministic inference may prevent bit-for-bit reproduction. Neither a valid credential chain nor accreditation determines legal admissibility.

<aside class="evidence-callout" aria-label="Scope of the forensic variant">
<h3>Illustrative scenario</h3>
<p>The forensic variant describes a laboratory such as a federal criminal police laboratory in general terms. It is not a description of any existing platform or project, and all identifiers are illustrative.</p>
</aside>

<h2 id="outlook">8. Outlook</h2>

**Where the pattern pays off for labs.** The pattern is not specific to markers. Any lab that runs an instrument, a model and a reference library can issue its results as certificates with an evidence graph. The gains come from what the receiver no longer has to do.

- **Potentially less duplicate testing.** A receiver may reuse evidence when its quality policy and applicable requirements allow. A valid signature chain alone does not justify skipping measurement or mandatory checks.
- **More focused audits.** Structured evidence can support review of particular results and assessment scopes. It complements required audits and accreditation rather than replacing them [1][2].
- **Faster release decisions.** Deviation checks run on structured assertions (model version, calibration date, reference-database version) and the person releasing a batch sees pre-validated inputs, the trusted-release idea applied to lab results.
- **Reusable evidence.** One certificate feeds a product passport, a customs declaration, a recycled-content claim and an insurance file, with the same hash links, instead of four reports.
- **Model governance.** Because every result pins the model and reference versions, a complete dependency index can help locate potentially affected results. Notifications, status checks and receiver policies must propagate and act on a recall; revocation is not automatic scientific invalidation.
- **Applies across domains.** Spectroscopy and marker verification, food and pharma quality control, environmental sampling, diagnostics, recycling sorting lines, inspection robots, vehicle data labelling and forensic laboratories with third-party AI models can reuse the evidence pattern, with domain-specific scientific, privacy and governance requirements.

**Next steps for this design.**

- **Schemas and a worked verification.** JSON-LD schemas for the seven credential types and one end-to-end chain validation with the Recognized Entities algorithm, including a failing case (expired mandate, revoked model version).
- **Offline checks.** Staple the recognition chain into the certificate so customs or field inspectors can verify without network access, with a maximum age for the stapled chain.
- **QI-Digital alignment.** Reader calibration as a Digital Calibration Certificate, conformity assessments as digital conformity statements, accreditation as a recognition credential, so the certificate plugs into the digital quality infrastructure [7][8].
- **European Business Wallet.** The lab issues from a Business Wallet once the EUCC and the wallet are available; until then a register-backed DID with the same chain.
- **Product passports.** The certificate becomes an evidence node in the product passport of the tested item, with the same hash links.
- **AI accountability.** AI Service Passport and test evidence behind the AI conformity certificate; human sign-off for verdicts used in legal disputes.

<h2 id="validation-plan">9. Validation and evidence gaps</h2>

**What this case establishes.** It specifies a proposed evidence structure and the questions a receiver should ask. It supplies no running verifier, issued credentials, benchmark, customer deployment or measured savings. The figures are architecture illustrations, not test results.

**What a pilot should demonstrate.** Start with a retained scan, a pinned model and reference set, a documented method, test keys and a receiver-owned acceptance policy. Publish synthetic example credentials and a repeatable verifier before using production data. Record proof, recognition, scope, status and scientific acceptance as separate decisions.

<div class="table-scroll" role="region" aria-label="Proposed validation cases" tabindex="0">
<table class="academic-table"><caption>Table 2. Proposed acceptance tests — expected decisions, not observed results.</caption>
<thead><tr><th scope="col">Test input</th><th scope="col">Expected verifier behaviour</th></tr></thead><tbody>
<tr><td>Complete, valid evidence within the agreed scope</td><td>Pass technical checks; apply the independent scientific and business acceptance policy.</td></tr>
<tr><td>Changed raw input or result after signing</td><td>Reject the broken hash link or invalid proof.</td></tr>
<tr><td>Expired mandate, wrong object or unauthorised task</td><td>Reject the scope or time mismatch, even when the signature is valid.</td></tr>
<tr><td>Revoked credential or disallowed model version</td><td>Reject under the current policy; record evaluation time and status evidence.</td></tr>
<tr><td>Offline status snapshot beyond its allowed age</td><td>Return indeterminate or require fresh evidence; never infer current validity.</td></tr>
<tr><td>Accreditation does not cover the claimed method</td><td>Fail the competence-scope check; identity recognition must not hide that failure.</td></tr>
<tr><td>Valid signatures but an incorrect scientific result</td><td>Show that cryptographic validation can pass while method validation fails.</td></tr>
</tbody></table></div>

Measure verification latency, evidence completeness, false acceptance and rejection on labelled test cases, handling of status changes and reviewer effort against the existing workflow. Report sample sizes and limitations. Any claimed reduction in duplicate testing or review effort should be supported by those measurements and receiver acceptance.

<h2 id="references">References</h2>

1. Stöcker, C., Rüther, M., Jürgens, G. (2020). *Collection of relevant milk quality data "from cow to dairy": Introduction to micro-certificates and the digital twin of milk.* Spherity whitepaper, version 073.
2. Fritz, D., Stöcker, C., Suichies, B. *Transforming "Release to Market Process" in regulated industries with decentralized micro-certificates.* Primer, version 02.
3. Stöcker, C. (2026). *Proofs over statements in verifiable evidence graphs for the European Business Wallet*, version 1.3. Spherity Research. <https://spherity.github.io/spherity-research/proofs-over-statements-evidence-graphs.html>
4. Stöcker, C. (2026). *Beyond single-enterprise ZTA: multi-trust architectures for authorised agentic actors in open, cross-domain ecosystems.* Spherity Research. <https://spherity.github.io/spherity-research/beyond-zero-trust-m-trust-authorised-agentic-actors.html>
5. W3C Verifiable Credentials Working Group. *Recognized Entities v1.0*, Working Draft, with the Recognized Entities Threat Model. <https://www.w3.org/TR/vc-recognized-entities-1.0/>
6. Wilms, D., Stoecker, C., Caballero, J. (2021). *Data provenance in vehicle data chains.* IEEE 93rd Vehicular Technology Conference (VTC2021-Spring). <https://doi.org/10.1109/VTC2021-Spring51267.2021.9448697>. Also at [ResearchGate](https://www.researchgate.net/publication/350967194_Data_Provenance_in_Vehicle_Data_Chains).
7. QI-Digital (BAM, PTB, DAkkS, DIN, DKE). *Qualitätsinfrastruktur Digital.* <https://www.qi-digital.de/> and the [BAM network page on QI-Digital](https://netzwerke.bam.de/Netzwerke/Navigation/DE/Netzwerke/QI-Digital/qi-digital.html).
8. PTB. *Digital Calibration Certificate (DCC)* and *Digital Certificate of Conformity (D-CoC)* within QI-Digital. [PTB project group on the digitalisation of the quality infrastructure](https://www.ptb.de/cms/ptb/fachabteilungen/abt9/fb-94/qi-digital.html).
9. W3C. *Verifiable Credentials Data Model v2.0.* <https://www.w3.org/TR/vc-data-model-2.0/>
10. Directive (EU) 2025/25 of 19 December 2024 as regards the further expansion and upgrading of the use of digital tools and processes in company law (EU Company Certificate). <https://eur-lex.europa.eu/eli/dir/2025/25/oj>
11. Spherity Research, open-access library. <https://spherity.github.io/spherity-research/>

12. DAkkS. *Basics of accreditation: competence and applicable standards.* <https://www.dakks.de/en/step-1-basics.html>
13. Tailorlux. *Tailor-Scan material verification.* Public product description; the credential architecture in this case is a separate proposal. <https://www.tailorlux.com/>
14. TÜV SÜD. *ISO/IEC 42001 certification of AI management systems.* <https://www.tuvsud.com/en/services/management-system-certification/iso-iec-42001>
