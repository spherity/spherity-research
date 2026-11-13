---
publication_template_version: 2
layout: research-respec
css: "/assets/spherity-research-respec.css"

title: "Verifiable AI Lab Results: From Scan to Certificate"
seo_title: "Verifiable AI Lab Results and Evidence Graphs"
og_title: "Verifiable AI Lab Results: From Scan to Certificate"
og_description: "A concept for turning AI-evaluated laboratory results into verifiable certificates backed by an evidence graph, worked through on marker and NIR verification with a vehicle-data variant."
subtitle: "A concept for AI-evaluated measurements as verifiable credentials, worked through on marker and NIR material verification"
description: "Concept note: how AI-evaluated lab results become verifiable certificates with an evidence graph, legal-person identity, agent mandates and conformity certificates."

paper_status: "Spherity Research · Concept note"
authors:
  - "Dr. Carsten Stöcker"
author_entities:
  - name: "Dr. Carsten Stöcker"
    affiliation: "Spherity GmbH"
    url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    orcid: "https://orcid.org/0009-0003-7417-8872"
author_affiliations:
  - "Dr. Carsten Stöcker — Spherity GmbH"
affiliation: "Spherity GmbH"

date: "2026-11-13"
last_modified_at: "2026-11-13"
research_cutoff: "2026-11-13"
research_cutoff_label: "Standards and public product descriptions checked to this date; the design itself is a proposal"
lang: "en"

permalink: /verifiable-ai-lab-results-evidence-graph.html
canonical_url: "https://spherity.github.io/spherity-research/verifiable-ai-lab-results-evidence-graph.html"
latest_version: "https://spherity.github.io/spherity-research/verifiable-ai-lab-results-evidence-graph.html"

figure_objects:
  - id: "figure-1-system-view"
    name: "System view: from scan to Verification Certificate"
    content_url: "/assets/verifiable-ai-lab-results/figure-1-system-view.svg"
    alt: "A marked object is scanned by a reader, an AI analysis agent issues an AI Analysis Result credential, and a verification portal issues a Verification Certificate to the verifier. Tailorlux GmbH, identified by an EUCC from Bundesanzeiger Verlag, issues device identity, Agent Card and Task Authorization; TÜV SÜD certifies the AI system and the reader."
    width: 1280
    height: 600
    description: "Two chains meet at the portal: the operational chain carries the scan, the AI result and the certificate; the authority chain carries legal-person identity, device identity, agent identity, task mandate and third-party conformity."
    caption: "System view. Solid arrows carry the scan and its results; dashed arrows carry identity, authorisation and conformity. The verifier needs the certificate and the public trust anchors only. All identifiers are examples; the design is a concept, not a product description."
    credit_text: "Carsten Stöcker / Spherity GmbH"
    copyright_notice: "© 2026 Carsten Stöcker, Spherity GmbH"
    license: "https://creativecommons.org/licenses/by/4.0/"
    creator_type: "Person"
    creator_name: "Dr. Carsten Stöcker"
    creator_url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    copyright_holder:
      type: "Person"
      name: "Dr. Carsten Stöcker"
      url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    keywords:
      - "verification certificate"
      - "verifiable credentials"
      - "AI agent authorisation"
      - "NIR spectroscopy"
  - id: "figure-2-evidence-graph"
    name: "Evidence graph of the Verification Certificate"
    content_url: "/assets/verifiable-ai-lab-results/figure-2-evidence-graph.svg"
    alt: "The Verification Certificate links by hash to the AI Analysis Result, which is issued by the agent named in the Agent Card and carries task, object, input, reader and set-up assertions. Each assertion references a supporting credential issued by Tailorlux GmbH or TÜV SÜD, and Tailorlux is identified by an EUCC from Bundesanzeiger Verlag."
    width: 1460
    height: 640
    description: "Every claim in the certificate resolves to a signed credential and ends at a public trust anchor; a verifier walks the arrows and checks proof, status and validity at every node."
    caption: "Evidence graph. Read left to right: the certificate hashes the AI result; the result is issued by the agent named in the Agent Card and carries five assertions; each assertion references the credential that backs it; those credentials are issued by Tailorlux GmbH or TÜV SÜD; Tailorlux is identified by an EUCC from Bundesanzeiger Verlag. Example identifiers only."
    credit_text: "Carsten Stöcker / Spherity GmbH"
    copyright_notice: "© 2026 Carsten Stöcker, Spherity GmbH"
    license: "https://creativecommons.org/licenses/by/4.0/"
    creator_type: "Person"
    creator_name: "Dr. Carsten Stöcker"
    creator_url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    copyright_holder:
      type: "Person"
      name: "Dr. Carsten Stöcker"
      url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    keywords:
      - "verifiable evidence graph"
      - "credential chaining"
      - "W3C Recognized Entities"
      - "EU Company Certificate"
  - id: "figure-3-vehicle-data-variant"
    name: "The same set-up for vehicle data processing and labelling"
    content_url: "/assets/verifiable-ai-lab-results/figure-3-vehicle-data-variant.svg"
    alt: "A vehicle streams sensor data to a gateway that signs frames, an AI labelling agent issues an AI Labelling Result credential, and a data product portal issues a Data Provenance Certificate to the data consumer. A fictional processor identified by an EUCC issues device identity, Agent Card and Task Authorization; TÜV SÜD certifies the AI labelling system and the gateway."
    width: 1280
    height: 600
    description: "The system view of Figure 1 with the nouns of a vehicle data chain: vehicle trip, gateway, labelling agent, labelled dataset and data consumer; identity, authority and assurance links are unchanged."
    caption: "The same set-up for vehicle data processing and labelling. Only the nouns change: the object is a vehicle trip, the reader is the vehicle gateway, the agent labels events, and the certificate attests the provenance of a labelled dataset. The processor is fictional."
    credit_text: "Carsten Stöcker / Spherity GmbH"
    copyright_notice: "© 2026 Carsten Stöcker, Spherity GmbH"
    license: "https://creativecommons.org/licenses/by/4.0/"
    creator_type: "Person"
    creator_name: "Dr. Carsten Stöcker"
    creator_url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    copyright_holder:
      type: "Person"
      name: "Dr. Carsten Stöcker"
      url: "https://spherity.github.io/spherity-research/#dr-carsten-stoecker"
    keywords:
      - "vehicle data provenance"
      - "data labelling"
      - "verifiable credentials"
      - "AI agent authorisation"

robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
license: "https://creativecommons.org/licenses/by/4.0/"
license_scope: "This concept note and its original figures"
license_exclusions: "Tailorlux, Tailor-Safe, Tailor-Scan, TÜV SÜD and Bundesanzeiger Verlag are names of third parties and their products; they are used as text only and are not covered by this licence. Spherity names and logos are excluded from the research licence."

image: "/assets/preview-verifiable-ai-lab-results.webp"
image_alt: "Concept note preview: verifiable AI lab results, from scan to certificate, with an evidence graph of credentials."
image_mime: "image/webp"
image_width: 1200
image_height: 630
image_credit_text: "Carsten Stöcker / Spherity GmbH"
image_copyright_notice: "© 2026 Carsten Stöcker, Spherity GmbH"

keywords:
  - "verifiable AI lab results"
  - "verification certificate"
  - "verifiable evidence graph"
  - "verifiable credentials"
  - "AI agent authorisation"
  - "Agent Card"
  - "task mandate"
  - "EU Company Certificate"
  - "European Business Wallet"
  - "W3C Recognized Entities"
  - "credential chaining"
  - "NIR spectroscopy"
  - "luminescent marker verification"
  - "digital calibration certificate"
  - "QI-Digital"
  - "vehicle data provenance"
  - "data labelling"
  - "digital product passport"

answer_summary: "AI-evaluated laboratory results travel further than the laboratory's accountability. This concept note proposes issuing each result as a verifiable credential whose certificate is the root of an evidence graph: it hashes the AI result, the result pins task, set-up, object, reader and input, each assertion references the credential that backs it, and every credential ends at a public trust anchor such as a company register or a conformity assessment body. The design is worked through on marker and NIR material verification and transferred to vehicle data labelling. It is a proposal for discussion, not a description of any vendor's product."
key_takeaways:
  - "Laboratories are becoming sensor-plus-AI pipelines; the receiver of an AI verdict cannot see which model, input, device or authority stood behind it unless the result carries that evidence."
  - "A Verification Certificate as a verifiable credential, with hash links to the AI result and its five assertions, lets brand owners, customs or recyclers verify a result without an account at the issuing lab."
  - "Authority runs along a second chain: company register, legal person, Agent Card and a bounded Task Authorization; conformity certificates for reader and AI system are referenced where they matter."
  - "The pattern transfers node for node to other sensor-plus-AI pipelines, shown here for vehicle data processing and labelling, and can start with one signed credential before any external party is involved."
about:
  - "AI-evaluated laboratory results"
  - "Verifiable evidence graphs"
  - "Verifiable authority for AI agents"
  - "Material verification with luminescent markers and NIR spectroscopy"
mentions:
  - "W3C Verifiable Credentials Data Model 2.0"
  - "W3C Recognized Entities"
  - "EU Company Certificate"
  - "European Business Wallet"
  - "QI-Digital and the Digital Calibration Certificate"
  - "Micro-certificates and trusted release"
  - "Vehicle data chains"
citations:
  - "https://www.w3.org/TR/vc-data-model-2.0/"
  - "https://www.w3.org/TR/vc-recognized-entities-1.0/"
  - "https://doi.org/10.1109/VTC2021-Spring51267.2021.9448697"
  - "https://www.qi-digital.de/"
  - "https://netzwerke.bam.de/Netzwerke/Navigation/DE/Netzwerke/QI-Digital/qi-digital.html"
audiences:
  - "Laboratory and quality managers"
  - "Product-protection and anti-counterfeiting teams"
  - "Credential and wallet architects"
  - "Conformity assessment bodies"
  - "Vehicle data and AI labelling teams"
spatial_coverage:
  - "European Union"
  - "Germany"

search_research:
  reviewed_on: "2026-11-13"
  source: "Google Trends"
  source_url: "https://trends.google.com/trends/explore"
  geographies:
    - "Germany"
    - "European Union"
    - "Worldwide"
  time_ranges:
    - "Past 12 months"
    - "Past 5 years"
  search_types:
    - "Web Search"
  authority_terms:
    - "verifiable AI lab results"
    - "verifiable evidence graph"
    - "AI agent authorisation"
  discovery_terms:
    - "AI in laboratories"
    - "NIR spectroscopy AI"
    - "anti-counterfeiting marker verification"
    - "digital calibration certificate"
  audience_questions:
    - "How can a lab result produced by an AI model be verified by a customer or an authority?"
    - "What evidence has to travel with an AI verdict so that it is accountable?"
  evidence:
    - comparison: "verifiable credentials vs digital calibration certificate vs AI in laboratories"
      input_type: "Search terms"
      geography: "Germany"
      time_range: "Past 5 years"
      search_type: "Web Search"
      result: "Not observed: Google Trends was not reachable from the authoring environment. Terms were chosen editorially from the standards and QI-Digital vocabulary; the Trends comparison is recorded here for a later review and no volume or trend is claimed."
  editorial_decisions:
    - "Discovery wording (AI in laboratories, NIR spectroscopy AI, anti-counterfeiting marker verification) added because readers search for the application before the mechanism."
    - "Specialist terms (verifiable evidence graph, AI agent authorisation, EU Company Certificate, W3C Recognized Entities) retained because they name the mechanism this note proposes."
    - "Google Trends review outstanding: the comparison above was not run and must be completed before the review is treated as closed."

questions_answered:
  - question: "Why does an AI-evaluated lab result need a verifiable certificate?"
    answer: "A human-signed report carried its own accountability: a named person, an accredited lab, a calibrated instrument. An AI verdict arrives as a label with a confidence value. Receivers such as brand owners, customs or recyclers cannot tell which model produced it, from which input and device, under whose authority, and whether that was valid at the time. A verifiable credential that hashes the result and its assertions lets them check this without contacting the lab."
  - question: "What is in the evidence graph behind the certificate?"
    answer: "The certificate hashes the AI result. The result is issued by the agent named in an Agent Card and carries five assertions: task, set-up (model and reference-database versions), object, reader and input. Each assertion references the credential that backs it: Task Authorization, Marker Registration, Reader Identity and conformity certificates for reader and AI system. Those credentials are issued by the lab as a legal person, identified by an EU Company Certificate, or by a conformity assessment body."
  - question: "How could a lab start without rebuilding its systems?"
    answer: "Issue the existing result as a signed credential with model and reference versions and the hash of the raw input; give each reader a key; issue an Agent Card and a bounded Task Authorization for the evaluation service; root the issuer in a company register; add third-party conformity certificates; then publish schemas and a verifier. Each step is useful on its own and none requires the previous architecture to change."
  - question: "Does the pattern apply outside material verification?"
    answer: "Yes. Any pipeline of sensor, model, reference library and portal has the same structure. The note shows the vehicle data chain: a gateway signs frames, a labelling agent issues labelled events, and a Data Provenance Certificate attests the labelled dataset. Food and pharma quality control, environmental sampling, diagnostics and recycling sorting map node for node. The vehicle variant adds one element: the data-use mandate of the vehicle owner or OEM inside the Task Authorization."
  - question: "Is this a description of a Tailorlux product?"
    answer: "No. Tailorlux's marker and reader flow is used as a concrete instance of a common pattern. Everything about identities, certificates, partners and identifiers on this page is a design proposal for discussion; no identifier, certificate or partner relationship shown here exists."

related_publications:
  - title: "Proofs over Statements: Verifiable Evidence Graphs"
    url: "/proofs-over-statements-evidence-graphs.html"
    context: "Defines the credential profile and proof inputs for evidence graphs; this note applies the graph to AI-evaluated measurements."
  - title: "Beyond Single-Enterprise ZTA: Multi-Trust Architectures for Authorised Agentic Actors"
    url: "/beyond-zero-trust-m-trust-authorised-agentic-actors.html"
    context: "Supplies the verifiable-authority chain from legal person to agent mandate that the Agent Card and Task Authorization implement here."
  - title: "European Business Wallets as the Legal Control Plane for Zero Trust AI Agents"
    url: "/ebw-zero-trust-ai-agents.html"
    context: "Describes the legal-person identity and mandate primitives the issuing lab would present from a Business Wallet."
  - title: "Evidence Graphs for Industrial AI"
    url: "/evidence-graphs-industrial-ai-data-plane.html"
    context: "Gives the data-plane architecture for provenance, validation and freshness that the certificate's assertions feed."

toc_items:
  - title: "Abstract"
    href: "#abstract"
  - title: "1. Labs are becoming AI pipelines"
    href: "#labs-ai-pipelines"
  - title: "2. One pattern, many labs"
    href: "#common-pattern"
  - title: "3. Use case and requirements"
    href: "#use-case-and-requirements"
  - title: "4. The design"
    href: "#design"
  - title: "5. How to start"
    href: "#how-to-start"
  - title: "6. Vehicle data variant"
    href: "#vehicle-data"
  - title: "7. Outlook"
    href: "#outlook"
  - title: "References"
    href: "#references"
  - title: "License and citation"
    href: "#license-and-citation"
  - title: "Questions answered"
    href: "#questions-answered"

tags:
  - verifiable-credentials
  - evidence-graphs
  - trusted-ai
  - digital-identity
  - industrial-ai
---

<section class="abstract-box" markdown="1">
<h2 id="abstract">Abstract</h2>

Laboratory measurements no longer end at the instrument. A raw signal goes to a backend, a model compares it with reference databases, and a portal delivers a verdict to a receiver who was never in the lab. The verdict travels further than the laboratory's accountability: the receiver cannot see which model, input, device or authority stood behind it. This concept note proposes issuing such results as verifiable credentials. The Verification Certificate is the root of an evidence graph: it hashes the AI result, the result pins task, set-up, object, reader and input, each assertion references the credential that backs it, and every credential ends at a public trust anchor. Authority runs along a second chain from a company register through the legal person to an Agent Card and a bounded Task Authorization. The design is worked through on marker and NIR material verification, with a six-step starting guideline, and transferred to vehicle data processing and labelling. It builds on the W3C Verifiable Credentials Data Model 2.0, the W3C Recognized Entities working draft and the digitisation of the quality infrastructure. It is a proposal for discussion, not a description of any vendor's product.

<p class="keywords"><strong>Keywords:</strong> verifiable AI lab results; verification certificate; verifiable evidence graph; AI agent authorisation; EU Company Certificate; W3C Recognized Entities; NIR spectroscopy; vehicle data provenance</p>
</section>

<h2 id="labs-ai-pipelines">1. Labs are becoming AI pipelines</h2>

A measurement used to end at the instrument: a spectrum, a chromatogram, an image, read by a trained person who signed a report. Today the instrument is the first step of a pipeline. The raw signal goes to a backend, a model compares it with reference databases, software classifies, quantifies or labels, and a portal delivers the result to someone who was never in the lab. This is the same in materials testing, food and pharma quality control, environmental monitoring, medical diagnostics, recycling sorting and vehicle data analysis.

Four forces drive the trend. **Throughput and cost:** models evaluate in seconds what a specialist did in minutes, and handheld or inline sensors move the measurement from the lab to the field. **Reference data:** spectral and marker libraries grow with every scan, so the model becomes better than any single analyst at recognising a fingerprint. **Demand for machine-readable evidence:** product passports, recycled-content declarations, customs and conformity procedures want results as data, not as PDFs. **Digital quality infrastructure:** calibration certificates, test reports and accreditation symbols are being digitised in initiatives such as QI-Digital, so the surrounding assurance can be checked by software too [7][8].

The trend creates a trust gap. A human-signed report carried its own accountability: a named person, an accredited lab, a calibrated instrument. An AI result arrives as a verdict with a confidence value. The receiver cannot tell which model produced it, on which input, from which device, under whose authority, and whether any of that was still valid at the time. The further the result travels, the larger the gap.

<h2 id="common-pattern">2. One pattern, many labs</h2>

The Tailorlux flow is a textbook instance of this pattern. Tailorlux marks materials with Tailor-Safe luminescent pigments; a Tailor-Scan handheld reads the VIS/NIR spectrum; the device backend evaluates it with AI against NIR reference and marker databases; a verification portal returns a verdict to the user. Replace the nouns and you have a food lab, a metals lab or a vehicle data chain. Whatever closes the trust gap for this flow closes it for the others.

<aside class="evidence-callout" aria-label="Scope of this note">
<h3>Concept only</h3>
<p>Everything on this page about Tailorlux is a design proposal for discussion. It is not a description of a Tailorlux product, process or commitment, and no identifier, certificate or partner relationship shown here exists. TÜV SÜD and Bundesanzeiger Verlag appear as examples of the roles a conformity assessment body and a company register play.</p>
</aside>

<h2 id="use-case-and-requirements">3. Use case and requirements</h2>

**Use case.** Today the verdict of the marker and NIR evaluation is a screen or a report. Whoever receives it has to trust the portal and call the lab to confirm it. This is the trust gap of section 1 in one concrete flow.

**Objective.** Turn the result into a **Verifikationszertifikat**, a Verification Certificate, that brand owners, customs, recyclers and auditors can verify on their own, offline if needed, without an account at the issuing lab. Material claims feed into product passports, recycled-content declarations and anti-counterfeiting cases, so an AI verdict has to be accountable: who ran it, under whose authority, with which model, on which input, from which device.

**Requirements.**

1. Issuer identity rooted in a public register: an EU Company Certificate (EUCC) issued by the register operator, here Bundesanzeiger Verlag.
2. Verifiable authority for the AI agent: an identity (Agent Card) and a bounded task mandate (Task Authorization).
3. Reproducibility: task, set-up, object, reader and input pinned in the result.
4. Independent assurance of reader and AI system by a conformity assessment body.
5. Confidentiality: hashes of spectra and reference data, not the data itself.
6. Status and revocation per certificate, device, model and reference database.
7. Open standards only: W3C Verifiable Credentials Data Model 2.0 and Recognized Entities chain validation.

<h2 id="design">4. The design</h2>

Every event becomes a micro-certificate bound to the scanned object, following the micro-certificate and trusted-release pattern developed for regulated supply chains [1][2]. The certificate is the root of a verifiable evidence graph [3]: it hashes the AI result, the result carries five assertions, each assertion references the credential that backs it, and every credential ends at a public trust anchor. Authority runs along a second chain, EUCC to the legal person to Agent Card to Task Authorization [4], and third-party conformity comes from certificates referenced where they matter. Verification follows the W3C Recognized Entities algorithm [5].

{% assign figure_system_view = page.figure_objects | first %}
{% include research-figure.html figure=figure_system_view number=1 %}

**Reading Figure 1.** Two chains meet at the portal. The operational chain (solid) carries the scan: the reader signs the raw input, the agent issues the result, the portal issues the certificate. The authority chain (dashed) says who is allowed to do what: the register vouches for the lab as a legal person, the lab equips its reader, its agent and its portal with credentials, and the conformity assessment body vouches for the reader type and the AI system. A verifier never talks to the portal; it needs the certificate and the public anchors only.

{% assign figure_evidence_graph = page.figure_objects | where: "id", "figure-2-evidence-graph" | first %}
{% include research-figure.html figure=figure_evidence_graph number=2 %}

**Reading Figure 2.** The graph is what a verifier walks. Each arrow is a cryptographic link, a hash or a signature, with a stated meaning. Walking left to right answers, in order: what was claimed, by which agent, on what task, about which object, from which input and device, under which set-up, backed by which certificates, issued by which legal persons, recognised by which anchors. The chain validation of the W3C Recognized Entities draft gives two answers, `recognized` (the issuer is in a chain to an anchor) and `actionRecognized` (recognised for this specific action, here issuing a Verification Certificate). Both must hold.

Two choices in the figures are open for revision. The conformity certificate for the AI system hangs off the set-up assertion rather than the certificate itself, so the chain stays attached to the model version actually used. The portal has no identity of its own and signs as the legal person.

<h2 id="how-to-start">5. How to start: simple first, one step at a time</h2>

None of the steps requires the previous architecture to change. Each step adds one signature or one credential, and each step is already useful on its own. The order follows value for the receiver: first make the result tamper-evident, then attributable, then independently assured.

1. **Sign the result.** The portal issues the existing result as a verifiable credential: verdict, time, lot or object identifier, model version, reference-database versions, and the hash of the raw spectrum. Nothing else changes. Receivers can now check that a result is unaltered and which set-up produced it.
2. **Give the reader a key.** Each reader signs its scans with a device key and reports serial, firmware and calibration date. The input assertion becomes verifiable: this spectrum came from this device at this time.
3. **Name the agent and bound its task.** The lab issues an Agent Card for the evaluation service and a Task Authorization per job or per customer. The result now says under whose authority it was produced and for what scope.
4. **Root the issuer in a register.** The lab obtains a register-backed legal-person identity (an EUCC once available, a register-linked DID until then) and signs certificates with it. A receiver can resolve the legal person without trusting a web page.
5. **Add independent assurance.** A conformity assessment body certifies the reader type and the AI evaluation system; the certificates are referenced from the reader and set-up assertions. Calibration moves to a Digital Calibration Certificate [8].
6. **Publish the schemas and a verifier.** Credential schemas, a public verification page and a stapled recognition chain for offline checks. From here on the certificate can be dropped into a product passport or a customs file as evidence.

Steps 1 and 2 need no external party. Steps 3 and 4 are mostly governance decisions. Steps 5 and 6 depend on partners and standards timelines.

<h2 id="vehicle-data">6. The same set-up for vehicle data processing and labelling</h2>

Vehicle data chains have the same accountability problem as material verification: a downstream consumer receives labelled data and cannot tell which model produced the labels, from which raw frames, on which device, and with what mandate [6]. The evidence graph of Figure 2 applies node for node.

{% assign figure_vehicle = page.figure_objects | where: "id", "figure-3-vehicle-data-variant" | first %}
{% include research-figure.html figure=figure_vehicle number=3 %}

**Reading Figure 3.** The object is a vehicle trip instead of a marked lot, the reader is the vehicle gateway, the AI agent labels events instead of verifying a marker, and the certificate attests the provenance of a labelled dataset. Identity, authority, assurance and evidence links are the same as in Figures 1 and 2. The labelling example follows the dangerous-driving detection case in [6]. One addition is specific to vehicle data: the Task Authorization has to carry the data-use mandate of the vehicle owner or OEM next to the processor's own authorisation of the agent.

<div class="table-scroll" role="region" aria-label="Node mapping between material verification and vehicle data labelling" tabindex="0">
<table class="academic-table">
<caption>Table 1. The evidence graph of Figure 2 mapped to both cases.</caption>
<thead>
<tr><th scope="col">Node in Figure 2</th><th scope="col">Material verification</th><th scope="col">Vehicle data labelling</th></tr>
</thead>
<tbody>
<tr><th scope="row">Certificate</th><td>Verification Certificate for a lot</td><td>Data Provenance Certificate for a labelled dataset</td></tr>
<tr><th scope="row">AI result</th><td>AI Analysis Result: marker present, share, confidence</td><td>AI Labelling Result: events and labels with confidence</td></tr>
<tr><th scope="row">Agent Card</th><td>analysis agent, model version</td><td>labelling agent, model version</td></tr>
<tr><th scope="row">Task assertion</th><td>marker verification of one lot</td><td>labelling job for one trip or time window</td></tr>
<tr><th scope="row">Set-up assertion</th><td>model, NIR reference database, marker database, rule</td><td>model, label taxonomy version, pipeline version</td></tr>
<tr><th scope="row">Object assertion</th><td>lot, product, expected marker</td><td>vehicle pseudonym, trip, sensor set</td></tr>
<tr><th scope="row">Reader assertion</th><td>reader, firmware, calibration</td><td>vehicle gateway, firmware, sensor calibration</td></tr>
<tr><th scope="row">Input assertion</th><td>spectrum hash, time, operator</td><td>frame hashes, time series, trip</td></tr>
<tr><th scope="row">Task Authorization</th><td>the lab authorises the agent for the lot</td><td>the processor authorises the agent; plus the data-use mandate of owner or OEM</td></tr>
<tr><th scope="row">Marker Registration</th><td>marker code to customer product</td><td>gateway onboarding: gateway bound to vehicle</td></tr>
<tr><th scope="row">Reader Identity</th><td>reader DID and key</td><td>gateway DID and key</td></tr>
<tr><th scope="row">Conformity certificates</th><td>reader type and calibration; AI system</td><td>gateway type and calibration; AI labelling system</td></tr>
<tr><th scope="row">Anchors</th><td colspan="2">EU Company Certificate from the register operator for the legal person; the conformity assessment body for certificates</td></tr>
</tbody>
</table>
</div>

<h2 id="outlook">7. Outlook</h2>

**Where the pattern pays off for labs.** The pattern is not specific to markers. Any lab that runs an instrument, a model and a reference library can issue its results as certificates with an evidence graph. The gains come from what the receiver no longer has to do.

- **No re-testing on receipt.** Incoming quality control accepts a certified result when its chain validates, instead of repeating the measurement. The same result serves every downstream party.
- **Fewer audits.** Micro-certification binds evidence to each result, so a receiver audits the chain per result rather than the lab per year. Accreditation and calibration are checked by software from the referenced credentials [1][2].
- **Faster release decisions.** Deviation checks run on structured assertions (model version, calibration date, reference-database version) and the person releasing a batch sees pre-validated inputs, the trusted-release idea applied to lab results.
- **Reusable evidence.** One certificate feeds a product passport, a customs declaration, a recycled-content claim and an insurance file, with the same hash links, instead of four reports.
- **Model governance.** Because every result pins the model and reference versions, a recalled model or a corrected reference library identifies exactly the results it affects, and revocation reaches them.
- **Applies across domains.** Spectroscopy and marker verification, food and pharma quality control, environmental sampling, diagnostics, recycling sorting lines, inspection robots and vehicle data labelling share the graph node for node.

**Next steps for this design.**

- **Schemas and a worked verification.** JSON-LD schemas for the seven credential types and one end-to-end chain validation with the Recognized Entities algorithm, including a failing case (expired mandate, revoked model version).
- **Offline checks.** Staple the recognition chain into the certificate so customs or field inspectors can verify without network access, with a maximum age for the stapled chain.
- **QI-Digital alignment.** Reader calibration as a Digital Calibration Certificate, conformity assessments as digital conformity statements, accreditation as a recognition credential, so the certificate plugs into the digital quality infrastructure [7][8].
- **European Business Wallet.** The lab issues from a Business Wallet once the EUCC and the wallet are available; until then a register-backed DID with the same chain.
- **Product passports.** The certificate becomes an evidence node in the product passport of the tested item, with the same hash links.
- **AI accountability.** AI Service Passport and test evidence behind the AI conformity certificate; human sign-off for verdicts used in legal disputes.

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
10. Spherity Research, open-access library. <https://spherity.github.io/spherity-research/>
