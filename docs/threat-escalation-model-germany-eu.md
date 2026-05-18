---
layout: research-respec
css: "/assets/spherity-research-respec.css"

title: "Superintelligent AI, Quantum Risk, Hybrid Warfare, and Robotic Autonomy"
subtitle: "A threat escalation and scenario planning model for Germany and Europe"
description: "A policy and risk paper for German and EU decision-makers on coupled escalation across AI-enabled cyber operations, hybrid warfare, post-quantum cryptography, trust infrastructure, robotic autonomy, financial resilience, and frontier AI risk."

paper_status: "Spherity Research Paper"
author: "Dr. Carsten Stöcker"
affiliation: "Spherity GmbH"
date: "2026-05-18"
last_modified_at: "2026-05-18"
lang: "en"

permalink: /threat-escalation-model-germany-eu.html
canonical_url: "https://spherity.github.io/spherity-research/threat-escalation-model-germany-eu.html"
latest_version: "https://spherity.github.io/spherity-research/threat-escalation-model-germany-eu.html"

robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"

logo: "/assets/Spherity-logo-horiz-blue-rgb.png"
image: "/assets/Spherity-logo-horiz-blue-rgb.png"
image_alt: "Spherity logo."

toc_items:
  - title: "Abstract"
    href: "#abstract"
  - title: "Central thesis"
    href: "#central-thesis"
  - title: "Key policy messages"
    href: "#key-policy-messages"
  - title: "1. Introduction and contribution"
    href: "#1-introduction-and-contribution"
  - title: "2. Scope, definitions, and method"
    href: "#2-scope-definitions-and-method"
  - title: "3. Integrated threat escalation model"
    href: "#3-integrated-threat-escalation-model"
  - title: "4. Threat domain analysis"
    href: "#4-threat-domain-analysis"
  - title: "5. Interdependencies and amplification effects"
    href: "#5-interdependencies-and-amplification-effects"
  - title: "6. Scenario planning model"
    href: "#6-scenario-planning-model"
  - title: "7. Comparative policy maturity analysis"
    href: "#7-comparative-policy-maturity-analysis"
  - title: "8. Germany case study"
    href: "#8-germany-case-study"
  - title: "9. Policy recommendations"
    href: "#9-policy-recommendations"
  - title: "10. Discussion"
    href: "#10-discussion-uncertainty-safeguards-and-evidence-gaps"
  - title: "11. Outlook"
    href: "#11-outlook"
  - title: "References"
    href: "#references"
  - title: "Appendix A"
    href: "#appendix-a-maturity-scoring-rubric"
  - title: "Appendix B"
    href: "#appendix-b-suggested-readiness-metrics"

tags:
  - superintelligent-ai
  - post-quantum-cryptography
  - hybrid-warfare
  - cyber-security
  - robotic-autonomy
  - digital-sovereignty
  - trust-infrastructure
  - germany
  - european-union
  - scenario-planning
  - national-security
---

<section class="abstract-box" markdown="1">
<h2 id="abstract">Abstract</h2>

Germany and the European Union face a threat environment that is increasingly systemic rather than sectoral. Cyber-security, AI governance, digital identity, post-quantum cryptography, hybrid warfare, financial resilience, robotics safety, and industrial policy are still often handled through separate policy tracks. This paper argues that such separation is no longer sufficient. AI can reduce the cost and time required for cyber operations and influence activity. Hybrid warfare can combine cyber attacks, disinformation, sabotage, economic pressure, and strategic ambiguity. Quantum computing creates a long-term risk to the cryptographic trust layer on which secure communications, digital signatures, identity, software updates, and legal evidence depend. Robotic and cyber-physical AI can translate digital compromise into physical harm. Prospective superintelligent AI remains uncertain, but it is a high-impact frontier risk because it could compress institutional response time and change the balance between attackers, defenders, regulators, and states.

The paper develops an integrated threat escalation and scenario planning model, applies it to Germany and the EU, and compares policy maturity across Germany, the EU, the United States, China, Japan, South Korea, and Canada. The core finding is that Germany and the EU have many relevant laws and strategies, but still lack a sufficiently operational cross-domain escalation model with measurable implementation discipline.

<p class="keywords">
  <strong>Keywords:</strong> superintelligent AI; post-quantum cryptography; hybrid warfare; AI-enabled cyber operations; robotic AI; Physical AI; digital sovereignty; Germany; European Union; threat escalation; scenario planning; trust infrastructure; critical infrastructure; digital identity.
</p>
</section>

<h2 id="central-thesis">Central thesis</h2>

<div class="paper-thesis">
  <strong>Central thesis.</strong> Germany and the EU should treat AI-enabled cyber operations, hybrid warfare, post-quantum cryptography, digital identity, software supply chains, robotic autonomy, and frontier AI as one coupled escalation problem. The next systemic crisis is unlikely to be caused by one isolated technology. It is more likely to arise from interacting failures across digital trust, public administration, finance, industrial systems, critical infrastructure, public communication, and security policy. The policy priority is therefore not only new law. It is tested readiness: cross-domain scenarios, measurable implementation dashboards, secure trust infrastructure, and rehearsed escalation paths.
</div>

<h2 id="key-policy-messages">Key policy messages</h2>

The following table summarises the main policy messages for German and EU decision-makers.

<div class="table-scroll">
<table class="academic-table recommendation-table">
<caption><strong>Table 1.</strong> Key policy messages for German and EU decision-makers.</caption>
<thead>
<tr>
<th scope="col">No.</th>
<th scope="col">Message</th>
<th scope="col">Policy implication</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>The relevant threat unit is no longer a single technology.</td>
<td>The highest policy risk comes from coupled escalation: AI-enabled cyber operations, hybrid warfare, cryptographic fragility, digital identity failure, robotic autonomy, and social destabilisation can amplify one another.</td>
</tr>
<tr>
<td>2</td>
<td>Trust infrastructure is national security infrastructure.</td>
<td>Identity, authentication, authorisation, certificates, signatures, credentials, revocation, logs, and audit trails must be treated as critical controls for public administration, finance, industry, supply chains, and AI agents.</td>
</tr>
<tr>
<td>3</td>
<td>Germany has improved strategic coordination, but execution remains the test.</td>
<td>The National Security Council created in 2025 is a material institutional improvement. It should now be used for cross-domain exercises, implementation dashboards, and threat escalation planning, not only strategic coordination.</td>
</tr>
<tr>
<td>4</td>
<td>PQC migration is not a cryptography project.</td>
<td>It is a multi-year migration of protocols, certificates, hardware security modules, identity systems, software supply chains, embedded systems, operational technology, procurement rules, and legal evidence systems.</td>
</tr>
<tr>
<td>5</td>
<td>AI-cyber capability is moving from expert tooling to institutional risk.</td>
<td>Recent public evaluations show that advanced AI systems can assist with complex cyber tasks. This does not prove unconstrained autonomous cyber offence at scale, but it changes the economics of vulnerability discovery, exploit support, triage, and defensive automation.</td>
</tr>
<tr>
<td>6</td>
<td>The EU is stronger in law than in operational integration.</td>
<td>The AI Act, NIS2, Cyber Resilience Act, DORA, eIDAS 2.0, the Machinery Regulation, Product Liability Directive, CER Directive, Cyber Solidarity Act, and Chips Act form a broad legal architecture. They do not yet amount to a single readiness architecture.</td>
</tr>
<tr>
<td>7</td>
<td>Germany should move from strategies to tested readiness.</td>
<td>The policy priority should shift from recognising threats to measuring resilience: patch time, PQC migration status, phishing-resistant authentication coverage, AI red-team coverage, cyber-physical stress tests, supplier assurance, and crisis communication exercises.</td>
</tr>
</tbody>
</table>
</div>

<h2 id="1-introduction-and-contribution">1. Introduction and contribution</h2>

Germany and the European Union have entered a phase in which technological and geopolitical risks no longer arrive as discrete policy files. Cyber-security is connected to democratic trust. AI governance is connected to cyber operations, industrial policy, labour markets, and defence. Quantum computing is connected to identity, legal evidence, software updates, secure communications, and financial infrastructure. Robotic autonomy is connected to cyber-physical safety, industrial continuity, logistics, public security, and warfare. These links create escalation paths that are faster than ordinary legislative and procurement cycles.

The policy system has recognised many parts of the problem. The EU AI Act entered into force on 1 August 2024, with a staged application timetable [1]. The Cyber Resilience Act entered into force on 10 December 2024, with main obligations applying later and reporting duties starting earlier [2]. NIS2 required Member States to transpose cyber-security rules by 17 October 2024 [3]. DORA has applied to the financial sector since 17 January 2025 [4]. The revised eIDAS framework and the EU Digital Identity Wallet programme are being implemented, and the Commission has proposed European Business Wallets for companies [5, 6]. The Machinery Regulation and the revised Product Liability Directive update EU rules for connected machinery, software-driven products, and digital liability [7, 8].

This is a strong legislative record. Yet legal coverage is not the same as operational readiness. The main problem is not that Germany and the EU lack strategies or legal texts. The problem is that escalation pathways between domains remain underdeveloped in policy planning. A cyber attack on a municipality may become a public trust crisis. A breach of a software supplier may become an industrial production shock. A deepfake released during a data leak may undermine confidence in an election. A quantum-relevant breakthrough may call into question signatures, certificates, software updates, legal evidence, and long-term confidentiality. A compromised robot, drone, vehicle, or industrial control system may create physical harm. A future highly capable AI system may compress the time available for all of these responses.

This paper proposes a threat escalation and scenario planning model for policy makers, senior civil servants, parliamentary staff, national security experts, cyber-security teams, AI governance teams, industrial policy teams, and strategic foresight units in Germany and the EU. It is not a technical manual. It is a policy model for understanding how threat domains interact, how they amplify, and how implementation maturity can be measured.

The paper makes four contributions. First, it defines a five-layer escalation model from individual sovereignty to frontier systemic risk. Second, it treats AI-enabled cyber capabilities, quantum risk, hybrid warfare, and robotic autonomy as coupled domains rather than separate policy areas. Third, it develops nine structured scenarios for policy planning. Fourth, it compares policy maturity across Germany, the EU, the United States, China, Japan, South Korea, and Canada, with a dedicated case study on Germany.

The argument is critical but not alarmist. It does not claim that superintelligent AI currently exists, nor that quantum computers are already breaking public-key cryptography at scale. It does not attribute unsupported capabilities to named AI systems. It does claim that capability trends are significant enough to require a policy reset. The relevant policy failure would not be a failure to predict one exact future event. It would be a failure to build institutional capacity for cross-domain escalation before the next crisis tests it.

<h2 id="2-scope-definitions-and-method">2. Scope, definitions, and method</h2>

<h3 id="2-1-scope">2.1 Scope</h3>

The scope is technology-driven and technology-amplified systemic risk. The paper includes risks to democratic sovereignty, national security, cyber-security, critical infrastructure, industrial competitiveness, economic stability, financial systems, public safety, social cohesion, warfare, supply chains, labour markets, public administration, European strategic autonomy, digital trust infrastructure, AI governance, and cyber-physical systems.

Six threat domains are in scope: human privacy and digital sovereignty; hybrid warfare and cyber threats; advanced AI-enabled cyber capabilities; quantum threats to digital trust infrastructure; prospective superintelligent AI; and superintelligent robotic AI or Physical AI. These domains are selected because they are both high-impact and increasingly interdependent.

Several important risks are outside the main scope. Climate change, general energy security, pandemics, migration policy, demographic change, broad fiscal policy, and general education policy are not treated as independent risk fields. They may appear where they interact directly with the threat model. This exclusion is not a judgement on their importance. It is a scope decision. The paper focuses on technology-driven escalation and the governance gap around it.

<h3 id="2-2-definitions">2.2 Definitions</h3>

<strong>Digital sovereignty</strong> is used in two senses. At the individual level, it means the ability of persons to control identity, privacy, data exposure, and informational self-determination. At the institutional level, it means the ability of companies, public authorities, and states to maintain control over critical digital dependencies, including identity, cloud, software, cryptography, data, AI models, hardware, and operational technology.

<strong>Trust infrastructure</strong> means the technical and organisational layer that allows a digital society to know who acted, with what authority, on which data, through which system, and under which rules. It includes identity, authentication, authorisation, digital signatures, certificates, credentials, revocation, audit logs, timestamps, software signing, provenance, and evidence preservation.

<strong>AI-enabled cyber capabilities</strong> are AI systems that support software analysis, vulnerability discovery, exploit support, phishing, social engineering, reconnaissance, attack planning, defensive detection, incident response, or vulnerability management. The paper uses Claude Mythos Preview as a specific public example only where published evaluations exist. It does not assume undisclosed proprietary capabilities. Claims about named systems are limited to published evaluations and are framed as evidence about capability trends, not as proof of unconstrained real-world autonomous offence [9, 10].

<strong>Superintelligent AI</strong> is used as a horizon-risk category for AI systems that would exceed human-level performance across a broad set of strategically relevant cognitive tasks. The paper does not claim that such systems currently exist. It treats the category as relevant for policy because advanced AI capability growth could reduce institutional response time, concentrate strategic advantage, and shift the balance between public authorities and private or hostile actors [11, 12].

<strong>Physical AI</strong> means AI systems that act in, sense, or control the physical world. It includes robots, drones, autonomous vehicles, industrial machines, logistics systems, medical robots, smart grids, cyber-physical infrastructure, and automated factories.

<h3 id="2-3-evidence-hierarchy-and-limits">2.3 Evidence hierarchy and limits</h3>

The evidence hierarchy is deliberately conservative. Primary sources are preferred: official EU, German, NATO, NIST, CISA, BSI, ENISA, Europol, EEAS, central bank, national AI safety institute, and national government documents. Peer-reviewed academic research and high-quality policy research are used where available. Vendor sources are used only for claims about the vendor’s own published system or evaluation and only where those claims are framed cautiously.

Three limits are important. First, public evidence about frontier AI capabilities is incomplete. Evaluations are often controlled, benchmark-dependent, and not always a direct proxy for operational real-world performance. Second, public evidence about national preparedness is uneven. A state may have classified programmes that are not visible. Conversely, a public strategy may overstate operational readiness. Third, the maturity scoring in Section 7 is structured expert judgement, not statistical measurement. It is intended to make assumptions visible and comparable.

<h3 id="2-4-method">2.4 Method</h3>

The method has five steps. First, the paper defines an integrated five-layer threat escalation model. Second, it analyses six threat domains and their policy relevance. Third, it identifies amplification effects between domains. Fourth, it uses nine scenarios to test escalation chains. Fifth, it applies a comparative maturity model to seven jurisdictions.

The maturity model uses six levels: Level 0 means no meaningful recognition; Level 1 means discussion and expert debate; Level 2 means strategies and political statements; Level 3 means laws, standards, and assigned institutions; Level 4 means funded implementation programmes; and Level 5 means operational readiness, testing, and continuous adaptation. A jurisdiction can score strongly on law while remaining weak in implementation. This distinction is central to the analysis.

<h2 id="3-integrated-threat-escalation-model">3. Integrated threat escalation model</h2>

The proposed model has five layers. It begins with individual and societal sovereignty and ends with frontier systemic risk. The model is not a ladder in which every incident moves step by step. It is a map of escalation paths. An incident can begin at any layer and propagate to others.

Table 2 sets out the five-layer threat escalation stack and the policy question attached to each layer.

<div class="table-scroll">
<table class="academic-table taxonomy-table">
<caption><strong>Table 2.</strong> Five-layer threat escalation stack.</caption>
<thead>
<tr>
<th scope="col">Layer</th>
<th scope="col">Primary object at risk</th>
<th scope="col">Main threat logic</th>
<th scope="col">Policy question</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. Individual and societal sovereignty</td>
<td>Privacy, identity, autonomy, public opinion, democratic discourse</td>
<td>Profiling, manipulation, identity abuse, deepfakes, surveillance, social engineering</td>
<td>Can citizens and organisations act freely and trust information?</td>
</tr>
<tr>
<td>2. Institutional and economic systems</td>
<td>Government services, companies, hospitals, banks, universities, utilities, insurers</td>
<td>Ransomware, data theft, AI-enabled intrusion, fraud, supply-chain compromise</td>
<td>Can institutions function under digital pressure?</td>
</tr>
<tr>
<td>3. Critical infrastructure and cyber-physical systems</td>
<td>Energy, transport, telecom, logistics, healthcare, water, manufacturing, robotics</td>
<td>Operational technology compromise, cyber-physical sabotage, unsafe autonomy</td>
<td>Can essential services continue during attack or failure?</td>
</tr>
<tr>
<td>4. Geopolitical and military escalation</td>
<td>State stability, deterrence, elections, defence, foreign policy</td>
<td>Hybrid warfare, sabotage, espionage, coercion, cyber conflict, autonomous systems</td>
<td>Can the state respond without escalation loss or democratic harm?</td>
</tr>
<tr>
<td>5. Frontier systemic risk</td>
<td>Digital trust layer, institutional control, financial confidence, human agency</td>
<td>Quantum disruption, superintelligent AI, autonomous robotic escalation, cascading failure</td>
<td>Can political systems govern high-impact capability shifts in time?</td>
</tr>
</tbody>
</table>
</div>

<h3 id="3-1-escalation-mechanisms">3.1 Escalation mechanisms</h3>

Five mechanisms explain why these layers interact.

First, <strong>speed amplification</strong>. AI can shorten the time between vulnerability discovery, exploit support, phishing design, translation, and attack execution. Recent public evaluations by the UK AI Security Institute and the UK National Cyber Security Centre indicate that frontier AI systems are becoming more capable on cyber tasks, although these evaluations remain task-specific and should not be read as full real-world autonomy [9, 13, 14].

Second, <strong>scope amplification</strong>. A digital society is made of shared dependencies. Cloud platforms, identity providers, certificate authorities, code repositories, software libraries, chip supply chains, model providers, and operational technology vendors can connect many institutions. A compromise in one dependency may affect many sectors.

Third, <strong>trust erosion</strong>. Cyber incidents increasingly become political events. A real breach can be mixed with forged documents. A service outage can be framed as government collapse. An authentic video can be dismissed as synthetic. The result is not only false belief. It is uncertainty and delay.

Fourth, <strong>physical translation</strong>. Robotics, operational technology, connected vehicles, medical devices, drones, and automated logistics convert software failure into safety risk. EU machinery and product liability reforms acknowledge this direction by updating rules for connected machinery, digital elements, software, and product safety [7, 8].

Fifth, <strong>response-time compression</strong>. Cryptographic migration, public procurement, industrial retrofitting, federal coordination, judicial oversight, and legislation take years. AI capability shifts and adversarial operations can move faster. When response time is compressed, governance itself becomes the bottleneck.

<h3 id="3-2-why-state-capacity-is-the-bottleneck">3.2 Why state capacity is the bottleneck</h3>

The limiting factor is often not the absence of knowledge. It is the ability of the state to act. A state must detect weak signals, assess technical meaning, assign ownership, fund mitigation, update procurement, work with industry, test response, communicate with the public, and adapt. Each of these steps can fail.

Germany’s creation of a National Security Council in August 2025 is therefore relevant. The Federal Government describes the council as a body that pools national security expertise, bridges internal, external, economic, digital, civil, and military security, and contributes to crisis simulations and security-policy exercises [15]. This is a positive institutional development. The question is whether it will be used to integrate AI-cyber, PQC, trust infrastructure, hybrid warfare, robotics, finance, public administration, and industrial resilience into a single readiness model.

<h2 id="4-threat-domain-analysis">4. Threat domain analysis</h2>

<h3 id="4-1-human-privacy-and-digital-sovereignty">4.1 Human privacy and digital sovereignty</h3>

Human privacy and digital sovereignty are the base layer of democratic resilience. The issue is not only whether personal data are protected. It is whether citizens and organisations can maintain agency in an environment of profiling, behavioural prediction, synthetic media, identity theft, personalised persuasion, and automated social engineering.

OECD.AI identifies AI-related risks that are already materialising, including manipulation, polarisation, privacy infringement, bias, discrimination, and surveillance [16]. These risks are often treated as fundamental-rights issues. They are also security issues. A population that can be profiled and targeted at scale is easier to manipulate. A company whose executives, suppliers, and employees are exposed through data brokers is easier to phish. A public authority whose staff identity credentials are weak is easier to impersonate. A democracy whose citizens no longer trust authentic public communication is less resilient during crisis.

The link between privacy and national security is therefore direct. Personal data, behavioural data, location data, biometric data, social graphs, and organisational data are inputs to cyber operations and hybrid influence campaigns. They support reconnaissance, credibility, timing, target selection, and coercion.

Digital sovereignty also applies to legal persons and public authorities. Companies need verifiable identity, representation rights, mandate management, revocation, logging, and audit. Public authorities need trusted digital channels to communicate with citizens. This is why the European Digital Identity Wallet and the proposed European Business Wallet are relevant to security, not only to administrative convenience [5, 6]. If properly designed, they can become part of a European trust infrastructure for citizens, companies, public bodies, products, machines, and AI agents.

The policy risk is that privacy, identity, and digital trust are treated as compliance files rather than resilience functions. That would be a category error. Privacy and identity are strategic controls.

<h3 id="4-2-hybrid-warfare-and-cyber-threats">4.2 Hybrid warfare and cyber threats</h3>

Hybrid warfare combines military and non-military means, overt and covert methods, information manipulation, cyber operations, economic pressure, sabotage, espionage, and legal ambiguity. NATO and the Council of the EU both define hybrid threats as coordinated combinations of such instruments [17, 18]. This matters because cyber-security incidents can be used as components of wider political operations.

Germany is a high-value target for hybrid pressure. It is a leading EU economy, a NATO member, a major industrial exporter, a central actor in European policy, and a visible participant in Ukraine-related security debates. It is also a federal state with complex administrative structures and many critical supply chains. A hybrid adversary does not need to defeat Germany militarily to impose costs. It can create uncertainty, slow decisions, undermine trust, trigger public fear, and amplify domestic division.

Cyber threats remain severe. BSI’s 2025 report describes the German IT security situation as tense and highlights the need for resilience [19]. ENISA’s threat landscape work shows continued cyber pressure across Europe, including ransomware and public-administration exposure [20, 21]. Europol’s IOCTA 2025 explains how cybercriminals trade illegal access, data, and services in a commodified ecosystem [22]. These trends create an operating environment in which state, proxy, and criminal actors can interact.

Hybrid warfare exploits real weaknesses. A ransomware attack on a municipality can be framed as evidence of state failure. A leak from a political party can be mixed with forged content. A supply-chain compromise can be timed with disinformation about shortages. A cyber attack on a hospital can be used to generate fear. The operational link is therefore not cyber plus information. It is cyber as a trigger for social and political effects.

Germany’s industrial structure increases the stakes. SMEs are central to the German economy. IfM Bonn reports that in 2023 about 3.44 million German enterprises were SMEs, accounting for 99.2 percent of enterprises with turnover or employees, and that SMEs employed about 19.1 million people, or 53.1 percent of total employment [23]. Many SMEs are part of advanced industrial supply chains. Their cyber-security weaknesses can become systemic vulnerabilities.

<h3 id="4-3-advanced-ai-enabled-cyber-capabilities">4.3 Advanced AI-enabled cyber capabilities</h3>

AI-enabled cyber capability is no longer a speculative concern. It is becoming a policy-relevant capability class. AI systems can assist with code analysis, vulnerability discovery, exploit reasoning, phishing, translation, reconnaissance, privilege-escalation support, attack planning, and incident response. They can also support defence through log analysis, vulnerability prioritisation, code review, malware analysis, anomaly detection, and incident triage.

The key policy question is asymmetry. Defenders must protect broad, old, interconnected, and often poorly documented infrastructures. Attackers may need only one successful path. If AI reduces the skill barrier, shortens the reconnaissance cycle, improves phishing credibility, or automates parts of exploit development, it changes the economics of cyber conflict.

Recent public evidence should be read carefully. The UK AI Security Institute and Anthropic have published material on Claude Mythos Preview and its cyber-task performance [9, 10]. The UK AI Security Institute reported continued improvement in capture-the-flag challenges and significant improvement on multi-step cyber-attack simulations [9]. This does not prove that such systems can autonomously conduct real-world attacks under all defensive conditions. It does show that frontier AI cyber capabilities are improving in controlled evaluations. The UK National Cyber Security Centre has also warned cyber defenders to prepare for frontier AI because attacker and defender capabilities are changing quickly [14].

The defensive opportunity is also significant. AI can help defenders identify vulnerable code, detect anomalies, summarise logs, automate incident documentation, prioritise patches, and support under-resourced security teams. This is especially relevant for public administration and SMEs. The danger is that defensive institutions may adopt such tools more slowly than attackers, because procurement, certification, legal review, privacy assessment, and budget processes can delay adoption. The risk is not AI itself. The risk is asymmetric adoption under weak governance.

<h3 id="4-4-quantum-threat-to-digital-trust-infrastructure">4.4 Quantum threat to digital trust infrastructure</h3>

Quantum computing is a long-horizon but urgent risk for digital trust. A sufficiently capable cryptographically relevant quantum computer would threaten widely used public-key cryptography. This affects secure communications, digital signatures, identity systems, certificates, software updates, wallets, blockchain systems, long-lived records, defence communications, financial systems, and legal evidence.

NIST finalised the first three post-quantum cryptography standards in August 2024 [24]. This was a major step, but standardisation is not migration. CISA, NSA, NIST, and BSI guidance emphasises inventory, cryptographic discovery, supplier engagement, planning, and crypto-agility [25, 26]. NATO’s Quantum Technologies Strategy also frames quantum technologies as relevant to cyber-security and defence, with both offensive and defensive implications [27].

The most immediate quantum risk is not necessarily that encrypted traffic is being decrypted today. It is harvest-now-decrypt-later. Adversaries can collect encrypted data now and decrypt it later if quantum capability becomes available. This matters for state secrets, diplomatic communications, health records, defence data, industrial intellectual property, legal archives, trade secrets, financial data, and identity credentials.

PQC migration is not a cryptographic algorithm swap. It is a migration of trust infrastructure. It affects protocols, certificates, HSMs, key management, software libraries, firmware, wallets, eID systems, software signing, embedded devices, industrial control systems, procurement rules, compliance frameworks, audit trails, and legal evidence preservation. Public institutions must know where cryptography is used, which assets need long-term confidentiality, which systems are crypto-agile, which suppliers can support PQC, and which migration priorities are highest.

The policy danger for Germany and Europe is underestimating the operational scale. If migration begins only after a credible quantum shock, the time window may be too short. PQC is therefore a national resilience programme, not only a technical standard.

<h3 id="4-5-prospective-superintelligent-ai">4.5 Prospective superintelligent AI</h3>

Superintelligent AI is a frontier risk with high impact and high uncertainty. It should not be framed as science fiction. It should be framed as a governance problem under uncertainty. The International AI Safety Report synthesises risks from general-purpose AI, including misuse, malfunction, systemic effects, and governance challenges [11]. Its 2025 update notes continuing capability advances and risk implications in areas such as cyber attacks, biological risks, monitoring, and controllability [12].

Three horizons are useful. Near-term risks include automated persuasion, AI-assisted cyber operations, synthetic media, data leakage, privacy erosion, dependence on a small number of model providers, and labour market stress. Medium-term risks include AI systems that support scientific discovery, weapons-relevant research, cyber operations, strategic deception, autonomous agents, and policy manipulation. Long-term frontier risks include loss of meaningful human control, systems with strategic planning capacities, rapid capability jumps, misaligned objectives, and institutional inability to respond at the required speed.

The policy issue is governance lag. AI systems can improve through model scaling, reasoning techniques, tool use, agentic scaffolding, and deployment integration. Political institutions move through consultation, legislation, transposition, procurement, judicial review, and budget cycles. A capability that changes in months can meet a governance system that acts in years.

NIST’s Center for AI Standards and Innovation focuses on demonstrable risks such as cybersecurity, biosecurity, and chemical weapons [28]. NIST has also launched an AI Agent Standards Initiative for interoperability and security [29]. This is the right direction: advanced AI governance must become operational. It must include evaluation, incident reporting, secure deployment, agent authority controls, model supply-chain security, red-teaming, and public-sector expertise.

For Germany and the EU, the key question is not whether superintelligent AI will arrive by a particular date. The question is whether institutions can detect, test, constrain, and respond to rapidly changing AI capability. A policy system that waits for certainty will respond too late.

<h3 id="4-6-superintelligent-robotic-ai-and-physical-ai">4.6 Superintelligent robotic AI and Physical AI</h3>

Physical AI refers to AI systems that act in, sense, or control the physical world. It includes industrial robots, drones, autonomous vehicles, warehouse systems, logistics systems, medical robots, automated factories, smart grids, defence systems, and connected infrastructure. Superintelligent robotic AI is the frontier version of this risk: highly capable AI systems controlling or coordinating physical systems with substantial autonomy.

The risk is the transition from digital harm to physical harm. A compromised text model can mislead. A compromised robot, drone, industrial control loop, medical device, vehicle, port system, or energy component can injure people, stop production, damage equipment, or trigger escalation.

EU law is moving toward this reality. The Machinery Regulation applies from 20 January 2027 and modernises machinery safety rules [7]. The revised Product Liability Directive updates liability for defective products in a digital environment and covers software-related product risks [8]. These instruments matter, but they are not enough. Physical AI requires secure updates, authority management, sensor integrity, model provenance, cyber-security, safety cases, human override, incident reporting, and supply-chain assurance.

Germany’s exposure is high because of its industrial base. Automotive, machinery, chemicals, energy, ports, logistics, healthcare, and automated manufacturing all depend on cyber-physical systems. A cyber-physical incident can create production loss, safety risk, insurance exposure, export disruption, and political consequences. The failure mode is not only a robot accident. It is a cascade across suppliers, logistics, public communication, and market confidence.

Physical AI therefore requires a security architecture that connects cyber-security, safety regulation, product liability, operational technology, AI assurance, and industrial policy. It also requires new authority models. An AI agent or robotic system that acts for a company, a public authority, or a machine must have verifiable authority, scope, time limits, revocation, and auditability.

<h2 id="5-interdependencies-and-amplification-effects">5. Interdependencies and amplification effects</h2>

The threat domains do not merely coexist. They amplify each other. This is the central reason why separate policy treatment is insufficient. Table 3 summarises the most important directed couplings.

<div class="table-scroll">
<table class="academic-table recommendation-table">
<caption><strong>Table 3.</strong> Directed interdependency matrix.</caption>
<thead>
<tr>
<th scope="col">Directed coupling</th>
<th scope="col">Amplification effect</th>
<th scope="col">Policy implication</th>
</tr>
</thead>
<tbody>
<tr>
<td>AI-enabled cyber → cyber-security</td>
<td>Faster code analysis, vulnerability discovery, exploit support, phishing, translation, reconnaissance, and attack-path generation.</td>
<td>Increase defensive automation, red-teaming, vulnerability management, and secure-by-design procurement.</td>
</tr>
<tr>
<td>Cyber-security → hybrid warfare</td>
<td>A real breach or outage becomes material for disinformation, blame, coercion, or public trust erosion.</td>
<td>Treat major cyber incidents as public trust events, not only IT events.</td>
</tr>
<tr>
<td>AI → hybrid warfare</td>
<td>Synthetic media, bots, multilingual propaganda, narrative testing, micro-targeting, and automated persuasion reduce the cost of influence operations.</td>
<td>Build rapid authentication, crisis communication, platform cooperation, and democratic resilience.</td>
</tr>
<tr>
<td>Privacy loss → cyber and influence</td>
<td>Data brokers, leaks, and profiling improve targeting for phishing, coercion, and manipulation.</td>
<td>Treat privacy protection and data minimisation as security controls.</td>
</tr>
<tr>
<td>Quantum → trust infrastructure</td>
<td>Cryptographic fragility affects identity, digital signatures, certificates, software updates, secure communication, archives, and legal evidence.</td>
<td>Run PQC migration as a national trust infrastructure programme.</td>
</tr>
<tr>
<td>AI + quantum → response-time compression</td>
<td>AI increases cyber tempo while quantum risk creates structural migration pressure.</td>
<td>Use crypto-agility, inventories, and migration dashboards before a quantum shock.</td>
</tr>
<tr>
<td>Robotic AI → physical harm</td>
<td>Digital compromise can affect factories, vehicles, drones, hospitals, warehouses, ports, rail, and energy systems.</td>
<td>Require cyber-physical stress tests and secure authority controls.</td>
</tr>
<tr>
<td>Supply-chain dependency → all domains</td>
<td>Cloud, chips, models, software libraries, certificate authorities, identity providers, and robotics components create shared failure modes.</td>
<td>Map dependencies and reduce concentration risk in critical functions.</td>
</tr>
<tr>
<td>Labour and economic shocks → social stability</td>
<td>Job displacement, disinformation, financial stress, and public service disruption can reinforce each other.</td>
<td>Treat labour-market AI policy and crisis communication as security policy.</td>
</tr>
<tr>
<td>Weak state capacity → all domains</td>
<td>Slow procurement, unclear ownership, limited expert capacity, and fragmented federal structures create delayed response.</td>
<td>Measure readiness and assign cross-domain ownership.</td>
</tr>
</tbody>
</table>
</div>

<h3 id="5-1-trust-infrastructure-as-the-missing-cross-cutting-layer">5.1 Trust infrastructure as the missing cross-cutting layer</h3>

The most important missing component in many policy debates is trust infrastructure. Cyber-security policy often focuses on systems, networks, and incident reporting. AI policy often focuses on risk classes, transparency, and model obligations. Digital identity policy often focuses on service access. Quantum policy often focuses on algorithms. Robotics safety focuses on machinery and liability. These are all necessary, but the shared control layer is trust.

Without strong trust infrastructure, the state cannot reliably authenticate public communication, companies cannot verify representation rights, software updates cannot be trusted, AI agents cannot be bounded, machines cannot prove authority, and logs cannot support accountability. The result is a broad attack surface for false authority.

For Germany and the EU, this creates a positive policy opportunity. eIDAS 2.0, the EU Digital Identity Wallet, the proposed European Business Wallet, NIS2, CRA, DORA, and PQC migration can be integrated into one operational trust architecture. This architecture should include natural persons, legal persons, public authorities, products, devices, machines, software services, and AI agents.

<h3 id="5-2-software-data-model-and-agent-supply-chains">5.2 Software, data, model, and agent supply chains</h3>

Four supply chains require more direct attention.

The <strong>software supply chain</strong> includes open-source dependencies, build systems, package repositories, signing keys, CI/CD systems, software bills of materials, dependency confusion, compromised maintainers, and update channels. The Cyber Resilience Act is relevant because it creates mandatory cyber-security requirements for products with digital elements [2]. Yet product regulation alone will not secure all software dependencies used inside public administration or industrial control systems.

The <strong>data supply chain</strong> includes the origin, integrity, permission status, lineage, quality, access rights, and change history of data used in AI systems, public administration, compliance systems, and supply chains. Without data provenance, AI systems can amplify corrupted or unauthorised information.

The <strong>model supply chain</strong> includes foundation models, fine-tuned models, model weights, datasets, toolchains, agents, plugins, evaluation reports, deployment environments, runtime monitoring, and model update channels. Model provenance should become a normal part of high-risk AI procurement and operation.

The <strong>agent supply chain</strong> is newer. AI agents acting for humans, companies, public authorities, or machines need verifiable authority, scope, time limits, revocation, auditability, liability mapping, and policy enforcement. This is the frontier identity problem. It should be solved before agentic AI becomes deeply embedded in administration, finance, logistics, and industrial systems.

<h2 id="6-scenario-planning-model">6. Scenario planning model</h2>

The scenarios below are not predictions. They are planning instruments. Each scenario tests whether current institutions can respond to escalation across domains. The most important question is not whether a scenario will happen exactly as described. It is whether Germany and the EU have the authority, data, exercises, technical controls, and communication channels required to respond if a similar chain begins.

Table 4 presents the scenario register used for policy stress testing.

<div class="table-scroll">
<table class="academic-table recommendation-table">
<caption><strong>Table 4.</strong> Scenario register for cross-domain escalation planning.</caption>
<thead>
<tr>
<th scope="col">Scenario</th>
<th scope="col">Trigger and chain</th>
<th scope="col">Main impacts</th>
<th scope="col">Priority mitigations</th>
</tr>
</thead>
<tbody>
<tr>
<td>1. AI-enabled cyber escalation against public administration</td>
<td>AI-assisted phishing, credential theft, exploitation of municipal systems, data leak, service outage, synthetic messages about public services.</td>
<td>Citizen services fail; personal data exposed; trust in digital administration declines; federal and local responsibilities become contested.</td>
<td>Phishing-resistant MFA, secure identity, tested backups, segmented networks, public communication protocol, federal-Länder incident drills.</td>
</tr>
<tr>
<td>2. Hybrid warfare against democratic decision-making</td>
<td>Election or major policy vote is targeted through deepfakes, leaks, cyber incidents, bot amplification, and narrative testing.</td>
<td>Legitimacy crisis, polarisation, pressure on election bodies, possible public disorder.</td>
<td>Pre-bunking, rapid attribution, trusted channels, platform cooperation, election cyber exercises, legal clarity.</td>
</tr>
<tr>
<td>3. Quantum shock to trust infrastructure</td>
<td>Credible signal suggests faster-than-expected quantum capability or state-level cryptanalytic progress.</td>
<td>Loss of confidence in signatures, PKI, secure email, archives, software updates, identity, finance, and defence communications.</td>
<td>PQC inventory, crypto-agility, hybrid certificates, long-term confidentiality mapping, supplier disclosure, migration dashboard.</td>
</tr>
<tr>
<td>4. Cyber-physical disruption in German industry</td>
<td>AI-assisted attack targets an industrial supplier, OT environment, robotics cell, logistics provider, or connected production line.</td>
<td>Production shutdown, safety risk, export delay, insurance exposure, supply-chain disruption.</td>
<td>OT segmentation, supplier assurance, cyber-physical stress tests, recovery exercises, secure update and logging.</td>
</tr>
<tr>
<td>5. Autonomous robotic AI safety and security incident</td>
<td>Robot, drone, vehicle, medical system, or automated machine causes physical harm after cyber compromise, model failure, or weak human override.</td>
<td>Injury, liability dispute, loss of trust in automation, regulatory reaction.</td>
<td>Safety cases, secure updates, kill-switch verification, sensor integrity checks, audit logs, clear liability chain.</td>
</tr>
<tr>
<td>6. Financial and supply-chain confidence shock</td>
<td>AI-cyber campaign targets a bank, payment provider, logistics platform, or major industrial supplier while disinformation spreads.</td>
<td>Bank-run dynamics, payment disruption, liquidity stress, market volatility, supply disruption.</td>
<td>DORA exercises, central bank coordination, third-party risk controls, crisis communication, cyber incident reporting consistency.</td>
</tr>
<tr>
<td>7. Labour-market and societal destabilisation</td>
<td>Rapid AI automation affects visible sectors or regions; disinformation actors exploit uncertainty.</td>
<td>Regional inequality, protests, radicalisation, declining trust, pressure for emergency policy.</td>
<td>Targeted reskilling, local transition funds, credible labour-market data, social dialogue, anti-disinformation response.</td>
</tr>
<tr>
<td>8. Superintelligent AI governance failure</td>
<td>Advanced AI system exceeds expected planning, cyber, persuasion, or scientific capability thresholds faster than oversight can react.</td>
<td>Regulatory lag, concentration of capability, de facto automation of decisions, emergency governance pressure.</td>
<td>Pre-deployment evaluations, incident reporting, capability thresholds, international coordination, public-sector expertise.</td>
</tr>
<tr>
<td>9. Superintelligent robotic AI escalation</td>
<td>Highly autonomous physical systems coordinate across industrial, defence, or infrastructure settings; failure or adversarial manipulation occurs.</td>
<td>Cascading physical harm, command ambiguity, liability confusion, military escalation risk.</td>
<td>Verified authority, command limits, secure updates, human override, cyber-physical exercises, defence-civil coordination.</td>
</tr>
</tbody>
</table>
</div>

<h3 id="6-1-lessons-across-scenarios">6.1 Lessons across scenarios</h3>

Four lessons recur across all scenarios.

First, identity and authorisation are decisive. Many escalation chains start with compromised credentials, false authority, unclear delegation, or weak revocation. This applies to people, legal persons, software updates, machines, and AI agents.

Second, public communication is a security function. A crisis will not wait for perfect attribution. Governments need verified channels, pre-agreed procedures, and trusted messengers before the incident occurs.

Third, resilience must be tested in combined exercises. Separate cyber drills, media drills, financial drills, and civil-protection exercises miss the coupling between domains. Scenario exercises should combine public administration, BSI, intelligence, defence, regulators, municipalities, banks, platforms, media, and critical infrastructure operators.

Fourth, escalation planning needs metrics. Policy makers should not ask only whether a law exists. They should ask how many critical systems use phishing-resistant authentication, how many have tested backups, how many have PQC inventories, how fast critical vulnerabilities are patched, how many cyber-physical stress tests were run, and whether crisis communication channels have been tested.

<h2 id="7-comparative-policy-maturity-analysis">7. Comparative policy maturity analysis</h2>

The comparative maturity model is a structured judgement based on public evidence. It does not claim that all internal government programmes are visible. It compares recognition, institutional ownership, expert capacity, legal action, funding, operational implementation, industrial mobilisation, international coordination, and readiness testing.

Scores use the following scale: 0 means no meaningful recognition; 1 means discussion and expert debate; 2 means strategies and political statements; 3 means laws, standards, and assigned institutions; 4 means funded implementation programmes; and 5 means operational readiness, testing, and continuous adaptation.

Table 5 gives the comparative policy maturity scores. The scores should be read as directional expert judgement, not as quantitative measurement.

<div class="table-scroll">
<table class="academic-table recommendation-table">
<caption><strong>Table 5.</strong> Comparative policy maturity scoring, 0–5.</caption>
<thead>
<tr>
<th scope="col">Jurisdiction</th>
<th scope="col">AI safety</th>
<th scope="col">AI cyber</th>
<th scope="col">Hybrid readiness</th>
<th scope="col">PQC</th>
<th scope="col">Physical AI</th>
<th scope="col">Superintelligent AI</th>
<th scope="col">Digital sovereignty</th>
<th scope="col">Implementation</th>
<th scope="col">Main gap</th>
</tr>
</thead>
<tbody>
<tr>
<td>Germany</td>
<td>2.5</td>
<td>2.5</td>
<td>3.2</td>
<td>2.5</td>
<td>2.5</td>
<td>1.8</td>
<td>3.0</td>
<td>2.7</td>
<td>National Security Council improves coordination, but AI-cyber, PQC, trust infrastructure, and cyber-physical readiness remain under-integrated.</td>
</tr>
<tr>
<td>European Union</td>
<td>3.5</td>
<td>3.2</td>
<td>3.5</td>
<td>3.0</td>
<td>3.5</td>
<td>2.6</td>
<td>4.0</td>
<td>3.2</td>
<td>Strong legal architecture; uneven Member State implementation and limited operational integration.</td>
</tr>
<tr>
<td>United States</td>
<td>3.5</td>
<td>4.0</td>
<td>3.5</td>
<td>4.0</td>
<td>3.0</td>
<td>3.2</td>
<td>3.0</td>
<td>4.0</td>
<td>Strong NIST/CISA and national-security capacity; fragmented federal AI regulation and strong private-sector concentration.</td>
</tr>
<tr>
<td>China</td>
<td>2.5</td>
<td>3.5</td>
<td>4.0</td>
<td>3.0</td>
<td>4.0</td>
<td>2.2</td>
<td>5.0</td>
<td>4.0</td>
<td>High state mobilisation and digital control; limited transparency and weak rights-based safeguards.</td>
</tr>
<tr>
<td>Japan</td>
<td>3.5</td>
<td>3.5</td>
<td>3.5</td>
<td>3.0</td>
<td>3.0</td>
<td>2.7</td>
<td>3.0</td>
<td>3.5</td>
<td>Clear AI safety institute and cyber planning; capacity scaling across industry and public sector is the test.</td>
</tr>
<tr>
<td>South Korea</td>
<td>3.5</td>
<td>3.7</td>
<td>3.7</td>
<td>3.5</td>
<td>3.5</td>
<td>2.7</td>
<td>3.5</td>
<td>3.6</td>
<td>Strong technology base and security pressure; integration and legal certainty still developing.</td>
</tr>
<tr>
<td>Canada</td>
<td>3.5</td>
<td>3.0</td>
<td>3.0</td>
<td>4.0</td>
<td>2.5</td>
<td>3.0</td>
<td>3.0</td>
<td>3.2</td>
<td>Clear PQC roadmap and AI safety institute; smaller scale and incomplete AI legislative settlement.</td>
</tr>
</tbody>
</table>
</div>

<h3 id="7-1-germany">7.1 Germany</h3>

Germany has moved from recognition toward institutional coordination. The National Security Strategy introduced the language of integrated security [30]. The National Security Council, created in 2025, is a significant improvement because it can bridge internal, external, economic, digital, civil, and military security [15]. The Federal Ministry for Digital Transformation and Government Modernisation also gives digital state modernisation a clearer institutional home [31].

The weakness is still operational integration. Germany transposed NIS2 late. The Commission had issued a reasoned opinion to Germany and other Member States in May 2025 for failure to notify full transposition [32], and the German implementation law entered into force on 6 December 2025 [33]. This sequence matters because it shows that even recognised cyber-security obligations can lag in implementation. Germany also lacks a visible national PQC migration dashboard for all critical sectors, a public frontier AI evaluation centre equivalent in profile to the UK or Japanese AI safety institutes, and regular public evidence of cross-domain cyber-physical stress testing.

<h3 id="7-2-european-union">7.2 European Union</h3>

The EU is strongest in law and rule-setting. The AI Act, NIS2, CRA, DORA, eIDAS 2.0, the Machinery Regulation, Product Liability Directive, the Chips Act, and the CER Directive cover large parts of the threat landscape [1-5, 7, 8, 34, 35]. This is a major achievement. The problem is that the legal stack has not yet become an operational readiness stack. Member State implementation varies. Exercises, dashboards, PQC migration, cyber-physical testing, and AI-cyber evaluation remain uneven.

The EU’s policy advantage is that it can connect legal authority, market access, standards, certification, public procurement, and cross-border crisis mechanisms. Its disadvantage is the complexity of coordination across institutions and Member States. The EU should therefore use regulation less as an end point and more as a framework for measurable implementation.

<h3 id="7-3-united-states">7.3 United States</h3>

The United States has strong agency capacity in NIST, CISA, the intelligence community, national laboratories, and defence. NIST finalised PQC standards in 2024 [24]. CISA, NSA, and NIST have issued migration and inventory guidance [25]. NIST’s CAISI has a public role in evaluating frontier AI systems for demonstrable risks such as cyber-security and biosecurity [28]. The United States also has cyber strategy implementation plans and a strong private-sector security ecosystem [36].

The US gap is regulatory fragmentation. AI policy has shifted between administrations, and federal AI law remains less comprehensive than the EU AI Act. The US has strong technical and operational capacity, but weaker horizontal legal uniformity.

<h3 id="7-4-china">7.4 China</h3>

China has high state mobilisation capacity, strong industrial policy, and a broad conception of digital sovereignty as state control over data, platforms, infrastructure, and technology. China’s interim measures for generative AI include national security and social stability requirements [37]. China also invests heavily in AI, quantum, robotics, chips, and cyber capabilities.

The limitation is not mobilisation. It is transparency and rights-based governance. China’s model is not a European model. It may be operationally forceful, but it does not provide the democratic legitimacy, privacy protection, or rule-of-law safeguards required in Germany and the EU.

<h3 id="7-5-japan-south-korea-and-canada">7.5 Japan, South Korea, and Canada</h3>

Japan has built a clear AI safety institution. The Japan AI Safety Institute was launched in February 2024 to examine AI safety evaluation methods and related issues, and its national status material describes a coordinated structure involving ministries and government-affiliated organisations [38, 39]. Japan’s challenge is scaling operational implementation across industry, government, and defence.

South Korea has a strong technology base, a high-threat cyber environment, and a comprehensive AI Basic Act that establishes a framework for AI competitiveness and trust, including legal grounds for an AI safety institute and national coordination functions [40]. Its challenge is implementing the regime without creating uncertainty for firms, while maintaining readiness under persistent state-linked cyber pressure.

Canada has a strong PQC roadmap for federal non-classified systems and launched a Canadian AI Safety Institute in 2024 [41, 42]. Its challenge is scale and legal completion. Canada has credible guidance, but less global market power than the EU or United States and less centralised state mobilisation than China.

<h2 id="8-germany-case-study">8. Germany case study</h2>

<h3 id="8-1-strategic-exposure">8.1 Strategic exposure</h3>

Germany is structurally exposed to the integrated threat landscape. Its industrial base, export dependency, automotive and machinery sectors, chemical industry, energy-transition infrastructure, logistics networks, and federal administrative structure create both strength and vulnerability. The same features that make Germany economically important also create a large attack surface.

The SME structure is central. SMEs are numerous, employ more than half of German workers, and are deeply embedded in supply chains [23]. They often supply large enterprises, public bodies, and critical sectors. This makes SME cyber-security a systemic issue. A small supplier may be a weak cyber node but a critical industrial node.

Germany’s federal system is legitimate and constitutionally important. But it can create implementation complexity in cyber-security, digital administration, incident reporting, public communication, and emergency response. Municipalities are often the front line of public service delivery and therefore attractive targets. ENISA’s public administration threat work is directly relevant to this problem [21].

Germany’s public administration digitisation remains a weakness. The eGovernment MONITOR 2024 reported a material usage gap in Germany compared with peer countries [43]. This is not merely an administrative inconvenience. Weak digital administration can mean legacy systems, fragmented identity, duplicated data, manual processes, inconsistent security, and slow recovery.

<h3 id="8-2-institutional-fragmentation-and-recent-improvement">8.2 Institutional fragmentation and recent improvement</h3>

Germany’s responsibilities are distributed across the Federal Chancellery, National Security Council, BMI, BMVg, BMDS, BMWK, BMBF, BSI, BfV, BND, Bundeswehr Cyber- und Informationsraum, BaFin, Bundesnetzagentur, Länder, municipalities, sector regulators, and EU-level institutions. This is a normal feature of complex government. The problem is that escalation chains cross these boundaries faster than institutions can coordinate.

The National Security Council is therefore a crucial development. The Federal Government states that the council bridges internal, external, economic, digital, civil, and military security and contributes to crisis simulations and security-policy exercises [15]. This provides an institutional basis for the integrated model proposed in this paper.

However, the council’s existence does not solve the problem automatically. It must be connected to technical readiness metrics, scenario exercises, PQC migration, AI-cyber evaluation, cyber-physical stress tests, trust infrastructure, and crisis communication. Otherwise, it may improve strategic discussion without closing the implementation gap.

<h3 id="8-3-priority-mismatch">8.3 Priority mismatch</h3>

Germany recognises many threats, but the relative priority of comprehensive scenario planning and implementation remains misaligned with escalation risk. Four mismatches stand out.

First, AI-enabled cyber risk is not yet treated as a national readiness programme. BSI, security agencies, and industry recognise cyber threats, but Germany lacks a public national AI-cyber test infrastructure with the visibility and operational focus needed for frontier capability evaluation.

Second, PQC migration is treated too much as a specialist cryptographic topic. BSI guidance is valuable [26], but the policy scale should be national trust infrastructure migration.

Third, digital identity and authorisation are not yet treated as a unified sovereignty layer for citizens, legal persons, public authorities, products, machines, and AI agents. eIDAS 2.0 and the European Business Wallet proposal create a basis, but Germany must integrate these with security policy [5, 6].

Fourth, Physical AI and cyber-physical risk remain too separated from AI policy. AI safety, machinery safety, product liability, operational technology, and cyber-security must be planned together.

<h3 id="8-4-capability-execution-gap">8.4 Capability & execution gap</h3>

Table 6 summarises Germany’s execution gap across core areas.

<div class="table-scroll">
<table class="academic-table recommendation-table">
<caption><strong>Table 6.</strong> Germany execution gap.</caption>
<thead>
<tr>
<th scope="col">Area</th>
<th scope="col">Recognition</th>
<th scope="col">Policy basis</th>
<th scope="col">Execution gap</th>
<th scope="col">Risk</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cyber-security</td>
<td>High</td>
<td>BSI, NIS2 implementation, KRITIS, sector obligations</td>
<td>Implementation differs across sectors and federal levels.</td>
<td>Uneven readiness and delayed response.</td>
</tr>
<tr>
<td>Public administration</td>
<td>High</td>
<td>BMDS, OZG programmes, digital government reforms</td>
<td>Legacy systems, usage gap, fragmented identity and data.</td>
<td>Service failure and low public trust.</td>
</tr>
<tr>
<td>PQC migration</td>
<td>Medium</td>
<td>BSI guidance and international standards</td>
<td>No visible national critical-sector migration dashboard.</td>
<td>Future cryptographic shock.</td>
</tr>
<tr>
<td>AI-enabled cyber</td>
<td>Medium</td>
<td>EU AI Act, BSI awareness, international AI safety work</td>
<td>Limited public German frontier AI-cyber evaluation capacity.</td>
<td>Attack tempo outpaces defence.</td>
</tr>
<tr>
<td>Hybrid warfare</td>
<td>High</td>
<td>National Security Council, BfV, BND, BMVg, foreign-policy structures</td>
<td>Limited public evidence of integrated exercises across cyber, finance, media, and municipalities.</td>
<td>Public trust shock.</td>
</tr>
<tr>
<td>Physical AI</td>
<td>Medium</td>
<td>EU Machinery Regulation and Product Liability Directive</td>
<td>Limited cyber-physical stress testing at national scale.</td>
<td>Physical harm and production loss.</td>
</tr>
<tr>
<td>Trust infrastructure</td>
<td>Medium</td>
<td>eIDAS 2.0, EUDI Wallet, Business Wallet proposal</td>
<td>Fragmented identity, authorisation, revocation, and logging across domains.</td>
<td>False authority and audit failure.</td>
</tr>
<tr>
<td>Superintelligent AI</td>
<td>Low-medium</td>
<td>EU AI Act, research activity, international AI safety institutes</td>
<td>No clear German frontier capability monitoring function with security mandate.</td>
<td>Governance lag.</td>
</tr>
</tbody>
</table>
</div>

<h3 id="8-5-case-study-finding">8.5 Case-study finding</h3>

Germany’s problem is not lack of institutions. It is the difficulty of turning many institutions into one operational response model. The National Security Council, BSI, BMDS, defence structures, intelligence agencies, BaFin, Bundesnetzagentur, Länder, municipalities, and EU interfaces can form the basis of an integrated model. But this requires a practical operating system: scenarios, dashboards, rehearsed escalation paths, procurement rules, authority controls, and public communication protocols.

The editorial judgement is that Germany has moved from strategic under-recognition to strategic recognition. It has not yet reached integrated readiness.

<h2 id="9-policy-recommendations">9. Policy recommendations</h2>

<h3 id="9-1-recommendations-for-germany">9.1 Recommendations for Germany</h3>

<strong>Establish an Integrated Threat Escalation Cell under the National Security Council.</strong> The cell should not duplicate existing agencies. It should own cross-domain scenarios, early-warning indicators, escalation playbooks, implementation dashboards, and annual exercises. It should link BMI, BMVg, BMDS, BMWK, BMBF, BSI, BfV, BND, BaFin, Bundesnetzagentur, Länder, municipalities, and industry.

<strong>Fund PQC migration as a national trust infrastructure programme.</strong> Germany should create a mandatory inventory and migration programme for government, critical infrastructure, finance, defence, trusted digital services, software signing, identity systems, archives, and operational technology. The programme should require crypto-agility, supplier disclosure, and public milestones.

<strong>Treat identity, authentication, authorisation, and revocation as national security controls.</strong> Germany should define a trust infrastructure strategy covering citizens, legal persons, public authorities, devices, machines, products, software services, and AI agents. The strategy should connect eIDAS 2.0, EUDI Wallet, Business Wallets, PQC, public procurement, and critical infrastructure regulation.

<strong>Build German AI-cyber and frontier AI evaluation capacity.</strong> Germany should create or assign an institute-level function for frontier AI evaluation, focused on cyber capability, persuasion, agentic action, model supply-chain risk, data leakage, and deployment safety. It should coordinate with the EU AI Office, ENISA, UK AISI, NIST CAISI, J-AISI, South Korea, and Canada.

<strong>Require AI-cyber red teaming for critical sectors.</strong> Critical infrastructure operators, major public authorities, financial institutions, defence suppliers, cloud providers, and key industrial suppliers should test against AI-assisted phishing, vulnerability discovery, exploit support, and disinformation coupling.

<strong>Run annual AI-enabled hybrid warfare exercises.</strong> Exercises should include deepfakes, public service disruption, targeted leaks, supply-chain rumours, payment instability, and official communication under uncertainty. They should include federal, Länder, municipal, media, platform, financial, industry, and civil-protection actors.

<strong>Run cyber-physical stress tests for German industry.</strong> Automotive, machinery, chemicals, energy, ports, rail, logistics, healthcare, defence suppliers, and automated manufacturing should test OT compromise, robotics failure, unsafe updates, sensor manipulation, and supplier disruption.

<strong>Reform procurement.</strong> Public procurement should require PQC readiness, phishing-resistant authentication, secure update mechanisms, SBOMs, vulnerability disclosure, audit logs, secure-by-design evidence, model provenance, AI agent authority controls, and recovery testing.

<strong>Treat SMEs as systemic nodes.</strong> Germany should fund SME cyber-security, supplier identity assurance, PQC readiness, secure software practices, incident response, and participation in sector exercises. Large enterprises should be required to include critical SME suppliers in resilience planning.

<strong>Create a national resilience metrics dashboard.</strong> Metrics should include time to patch, PQC inventory status, phishing-resistant MFA coverage, critical systems with strong identity, AI red-team coverage, cyber-physical exercises, incident response time, backup recovery performance, SBOM coverage, model audit coverage, dependency concentration, and public administration recovery time.

<h3 id="9-2-recommendations-for-the-european-union">9.2 Recommendations for the European Union</h3>

<strong>Build an EU-wide threat escalation model.</strong> The EU should connect AI, cyber, quantum, hybrid warfare, cyber-physical systems, financial resilience, critical entities, and digital identity into one operational risk architecture.

<strong>Convert the EU legal stack into a readiness stack.</strong> The AI Act, CRA, NIS2, DORA, eIDAS 2.0, CER Directive, Machinery Regulation, Product Liability Directive, Data Act, Cyber Solidarity Act, and Chips Act should be mapped to operational controls and measurable implementation indicators.

<strong>Create EU-level PQC migration coordination.</strong> The EU should coordinate inventories, supplier requirements, procurement standards, crypto-agility, and migration deadlines for public administration, finance, critical infrastructure, identity, software updates, and archives.

<strong>Strengthen ENISA’s operational role in AI-cyber and cyber-physical readiness.</strong> ENISA should support cross-border scenario exercises, AI-cyber threat assessment, critical-sector testing, and public administration resilience.

<strong>Use the EU Digital Identity Wallet and European Business Wallet as security infrastructure.</strong> They should support trusted cross-border identification, representation rights, mandate management, revocation, logging, and secure interaction between citizens, companies, public authorities, machines, and AI agents.

<strong>Establish EU-wide AI agent authorisation requirements for high-risk contexts.</strong> AI agents operating in finance, public administration, critical infrastructure, B2B supply chains, and B2G interactions should have verifiable authority, scope limits, time limits, revocation, auditability, and liability mapping.

<strong>Create a European Physical AI risk observatory.</strong> This function should link AI safety, product safety, machinery regulation, robotics security, OT cyber-security, civil protection, defence, and market surveillance.

<strong>Fund secure European industrial capacity.</strong> Secure AI, cryptography, identity infrastructure, robotics security, chips, software supply-chain assurance, and cloud resilience should be treated as strategic industrial capabilities.

<strong>Run cross-border crisis exercises.</strong> The EU should test scenarios involving cyber attacks, disinformation, financial confidence shocks, quantum migration failure, robotic incidents, energy or logistics disruption, and public administration outages.

<strong>Protect democratic legitimacy.</strong> All security measures should respect proportionality, privacy, rule of law, judicial oversight, transparency, and redress. Europe’s strategic advantage is legitimate governance, not only technical control.

<h2 id="10-discussion-uncertainty-safeguards-and-evidence-gaps">10. Discussion: uncertainty, safeguards, and evidence gaps</h2>

<h3 id="10-1-uncertainty">10.1 Uncertainty</h3>

Several risks are observable now: ransomware, cyber espionage, software supply-chain compromise, identity abuse, disinformation, synthetic media, data brokerage, and public administration exposure. Other risks remain uncertain: the timeline to cryptographically relevant quantum computers, the emergence of superintelligent AI, and the degree of autonomy in future robotic systems.

Uncertainty does not justify inaction. It changes the policy response. For uncertain high-impact risks, the correct response is monitoring, inventories, stress tests, thresholds, flexible procurement, reversible safeguards, and international coordination. The objective is not prediction. It is preparedness.

<h3 id="10-2-risk-of-overreaction">10.2 Risk of overreaction</h3>

Security policy can harm democracy if it becomes too broad, secretive, or intrusive. Measures against disinformation can threaten speech if poorly designed. Surveillance can weaken privacy. Emergency powers can become normalised. AI monitoring can create new forms of control. Cyber-security regulation can impose costs on SMEs without improving resilience.

A European response must therefore be rights-preserving. It should include legal basis, proportionality, independent oversight, parliamentary scrutiny, transparency where possible, privacy-preserving technologies, clear liability, redress, and sunset clauses for emergency measures.

<h3 id="10-3-risk-of-underreaction">10.3 Risk of underreaction</h3>

The larger risk for Germany is underreaction through fragmentation. A state can publish many strategies and still fail to act in time. It can have expert agencies but no shared escalation model. It can pass laws but not test implementation. It can invest in innovation but not in resilience. It can modernise public administration but ignore identity and cyber-security. It can discuss AI safety but fail to build evaluation capacity.

Underreaction often looks like normal process. Deadlines slip. Procurement remains outdated. Budgets remain sectoral. Exercises are postponed. Dashboards are missing. Responsibilities are unclear. This is why implementation discipline is the main policy recommendation.

<h3 id="10-4-evidence-gaps">10.4 Evidence gaps</h3>

Important evidence gaps remain. Public data on national PQC migration status are weak. AI-cyber capability evaluations are still young and not fully standardised. Cyber-physical stress-test data are limited. Model supply-chain risk lacks mature metrics. AI agent authority control is underdeveloped. SME cyber-security readiness is hard to measure. Public communication resilience is rarely tested openly. Dependency concentration across cloud, chips, models, identity, and software supply chains is not mapped with enough policy precision.

These gaps should become research and policy priorities. A useful research agenda would include PQC migration measurement, AI-cyber benchmark validity, cyber-physical incident taxonomy, supply-chain dependency mapping, agentic AI authority systems, crisis communication under synthetic media conditions, and democratic safeguards for hybrid-threat response.

<h2 id="11-outlook">11. Outlook</h2>

The evidence supports the central thesis. Germany and the EU face an escalating threat landscape in which AI, cyber operations, hybrid warfare, quantum risk, robotic autonomy, supply-chain dependency, financial confidence, labour-market stress, and social destabilisation interact. The highest risk is not one technology. It is the coupling between them.

The policy problem is not the absence of individual laws or strategies. Germany and the EU have many relevant instruments. The EU has a broad regulatory architecture. Germany has created a National Security Council and a dedicated digital transformation ministry. BSI, ENISA, Europol, BaFin, Bundesnetzagentur, defence structures, intelligence agencies, and EU bodies all have relevant roles. The gap is operational: integrated escalation planning, measurable implementation, cross-domain exercises, and trust infrastructure.

The central policy lesson is direct. Privacy is not separate from security. Cyber-security is not separate from hybrid warfare. AI safety is not separate from cyber operations. PQC is not separate from digital identity. Robotics safety is not separate from cyber-physical resilience. Digital trust is not separate from democratic sovereignty.

Germany and the EU need a model that is layered, cross-domain, scenario-based, measurable, and rights-preserving. The model should treat trust infrastructure as a foundation of democratic and economic resilience. It should connect AI, cyber, quantum, robotics, finance, public administration, industry, and defence. It should measure deployment rather than intent. It should also mobilise high-talent technical, policy, and operational resources with real execution authority.

The question for policy makers is not whether every scenario in this paper will occur. The question is whether current institutions can detect and contain escalation before it becomes systemic. On the public evidence available, Germany and the EU are improving. They are not yet ready enough.

<section class="references" markdown="1">
<h2 id="references">References</h2>

**[1]** European Commission. "AI Act." Shaping Europe’s Digital Future, updated 2026. [https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)

**[2]** European Commission. "Cyber Resilience Act." Shaping Europe’s Digital Future, updated 2026. [https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act](https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act)

**[3]** European Commission. "NIS2 Directive: securing network and information systems." Shaping Europe’s Digital Future, updated 2026. [https://digital-strategy.ec.europa.eu/en/policies/nis2-directive](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive)

**[4]** EIOPA. "Digital Operational Resilience Act (DORA)." Updated 2026. [https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en)

**[5]** European Commission. "EU Digital Identity Wallet Home." Updated 2026. [https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/](https://ec.europa.eu/digital-building-blocks/sites/spaces/EUDIGITALIDENTITYWALLET/)

**[6]** European Commission. "Proposal for a Regulation on the establishment of European Business Wallets." 19 November 2025. [https://digital-strategy.ec.europa.eu/en/library/proposal-regulation-establishment-european-business-wallets](https://digital-strategy.ec.europa.eu/en/library/proposal-regulation-establishment-european-business-wallets)

**[7]** European Union. Regulation (EU) 2023/1230 on machinery. 14 June 2023. [https://eur-lex.europa.eu/eli/reg/2023/1230/oj/eng](https://eur-lex.europa.eu/eli/reg/2023/1230/oj/eng)

**[8]** European Union. Directive (EU) 2024/2853 on liability for defective products. 23 October 2024. [https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng)

**[9]** UK AI Security Institute. "Our evaluation of Claude Mythos Preview’s cyber capabilities." 13 April 2026. [https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities](https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities)

**[10]** Anthropic. "Assessing Claude Mythos Preview’s cybersecurity capabilities." 2026. [https://red.anthropic.com/2026/mythos-preview/](https://red.anthropic.com/2026/mythos-preview/)

**[11]** International AI Safety Report. "International AI Safety Report 2025." 29 January 2025. [https://internationalaisafetyreport.org/publication/international-ai-safety-report-2025](https://internationalaisafetyreport.org/publication/international-ai-safety-report-2025)

**[12]** International AI Safety Report. "International AI Safety Report 2025: First Key Update." 2025. [https://arxiv.org/abs/2510.13653](https://arxiv.org/abs/2510.13653)

**[13]** UK AI Security Institute. "Frontier AI Trends Report." 2025/2026. [https://www.aisi.gov.uk/frontier-ai-trends-report](https://www.aisi.gov.uk/frontier-ai-trends-report)

**[14]** UK National Cyber Security Centre. "Why cyber defenders need to be ready for frontier AI." 2026. [https://www.ncsc.gov.uk/blogs/why-cyber-defenders-need-to-be-ready-for-frontier-ai](https://www.ncsc.gov.uk/blogs/why-cyber-defenders-need-to-be-ready-for-frontier-ai)

**[15]** Federal Government of Germany. "The National Security Council." 24 March 2026. [https://www.bundesregierung.de/breg-en/news/national-security-council-2415704](https://www.bundesregierung.de/breg-en/news/national-security-council-2415704)

**[16]** OECD.AI. "Risk and Accountability Overview." Updated 2026. [https://oecd.ai/en/site/risk-accountability](https://oecd.ai/en/site/risk-accountability)

**[17]** NATO. "Countering hybrid threats." Updated 2026. [https://www.nato.int/en/what-we-do/deterrence-and-defence/countering-hybrid-threats](https://www.nato.int/en/what-we-do/deterrence-and-defence/countering-hybrid-threats)

**[18]** Council of the European Union. "Hybrid threats." Updated 2026. [https://www.consilium.europa.eu/en/policies/hybrid-threats/](https://www.consilium.europa.eu/en/policies/hybrid-threats/)

**[19]** Bundesamt für Sicherheit in der Informationstechnik (BSI). "Die Lage der IT-Sicherheit in Deutschland 2025." 2025. [https://www.bsi.bund.de/DE/Service-Navi/Publikationen/Lagebericht/lagebericht_node.html](https://www.bsi.bund.de/DE/Service-Navi/Publikationen/Lagebericht/lagebericht_node.html)

**[20]** ENISA. "ENISA Threat Landscape 2025." 2025. [https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025](https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025)

**[21]** ENISA. "Sectorial Threat Landscape: Public Administration." 2025. [https://www.enisa.europa.eu/publications/enisa-sectorial-threat-landscape-public-administration](https://www.enisa.europa.eu/publications/enisa-sectorial-threat-landscape-public-administration)

**[22]** Europol. "IOCTA 2025: Steal, deal and repeat - how cybercriminals trade and exploit your data." 2025. [https://www.europol.europa.eu/publication-events/main-reports/steal-deal-and-repeat-how-cybercriminals-trade-and-exploit-your-data](https://www.europol.europa.eu/publication-events/main-reports/steal-deal-and-repeat-how-cybercriminals-trade-and-exploit-your-data)

**[23]** IfM Bonn. "Macro-economic significance of SMEs - Germany." Updated 2025. [https://www.ifm-bonn.org/en/statistics/overview-mittelstand/macro-economic-significance-of-smes/deutschland](https://www.ifm-bonn.org/en/statistics/overview-mittelstand/macro-economic-significance-of-smes/deutschland)

**[24]** NIST. "NIST Releases First 3 Finalized Post-Quantum Encryption Standards." 13 August 2024. [https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)

**[25]** CISA, NSA, and NIST. "Quantum-Readiness: Migration to Post-Quantum Cryptography." 2023; CISA. "Strategy for Migrating to Automated PQC Discovery and Inventory Tools." 2024. [https://www.cisa.gov/](https://www.cisa.gov/)

**[26]** BSI. "Migration zu Post-Quanten-Kryptografie." Technical guidance, updated 2025. [https://www.bsi.bund.de/](https://www.bsi.bund.de/)

**[27]** NATO. "Summary of NATO’s Quantum Technologies Strategy." 16 January 2024. [https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/2024/01/16/summary-of-natos-quantum-technologies-strategy](https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/2024/01/16/summary-of-natos-quantum-technologies-strategy)

**[28]** NIST. "Center for AI Standards and Innovation (CAISI)." Updated 2026. [https://www.nist.gov/caisi](https://www.nist.gov/caisi)

**[29]** NIST. "AI Agent Standards Initiative." 2026. [https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure](https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure)

**[30]** Federal Government of Germany. "National Security Strategy: Integrated Security for Germany." 2023. [https://www.nationalesicherheitsstrategie.de/](https://www.nationalesicherheitsstrategie.de/)

**[31]** Federal Government of Germany. "Federal Ministry for Digital Transformation and Government Modernisation." Updated 2026. [https://www.bundesregierung.de/breg-en/federal-government/ministries/ministry-for-digitalisation-and-state-modernisation](https://www.bundesregierung.de/breg-en/federal-government/ministries/ministry-for-digitalisation-and-state-modernisation)

**[32]** European Commission. "Commission calls on 19 Member States to fully transpose the NIS2 Directive." 7 May 2025. [https://digital-strategy.ec.europa.eu/en/news/commission-calls-19-member-states-fully-transpose-nis2-directive](https://digital-strategy.ec.europa.eu/en/news/commission-calls-19-member-states-fully-transpose-nis2-directive)

**[33]** Federal Government of Germany. "Umsetzung der NIS-2-Richtlinie beschlossen." 8 December 2025. [https://www.bundesregierung.de/breg-de/aktuelles/nis-2-richtlinie-deutschland-2373174](https://www.bundesregierung.de/breg-de/aktuelles/nis-2-richtlinie-deutschland-2373174)

**[34]** European Commission. "European Chips Act." Updated 2026. [https://digital-strategy.ec.europa.eu/en/policies/european-chips-act](https://digital-strategy.ec.europa.eu/en/policies/european-chips-act)

**[35]** European Union. Directive (EU) 2022/2557 on the resilience of critical entities. 14 December 2022. [https://eur-lex.europa.eu/eli/dir/2022/2557/oj/eng](https://eur-lex.europa.eu/eli/dir/2022/2557/oj/eng)

**[36]** White House. "National Cybersecurity Strategy Implementation Plan." Version 2, May 2024. [https://bidenwhitehouse.archives.gov/](https://bidenwhitehouse.archives.gov/)

**[37]** Cyberspace Administration of China and partner agencies. "Interim Measures for the Management of Generative Artificial Intelligence Services." 2023. English translation by China Aerospace Studies Institute. [https://www.airuniversity.af.edu/](https://www.airuniversity.af.edu/)

**[38]** Japan Ministry of Economy, Trade and Industry. "Launch of AI Safety Institute." 14 February 2024. [https://www.meti.go.jp/english/press/2024/0214_001.html](https://www.meti.go.jp/english/press/2024/0214_001.html)

**[39]** Japan AI Safety Institute. "National Status Report on AI Safety in Japan 2024." 2025. [https://aisi.go.jp/](https://aisi.go.jp/)

**[40]** U.S. International Trade Administration. "South Korea Artificial Intelligence (AI) Basic Act." 14 April 2025. [https://www.trade.gov/market-intelligence/south-korea-artificial-intelligence-ai-basic-act](https://www.trade.gov/market-intelligence/south-korea-artificial-intelligence-ai-basic-act)

**[41]** Canadian Centre for Cyber Security. "Roadmap for the migration to post-quantum cryptography for the Government of Canada." 24 June 2025. [https://www.cyber.gc.ca/en/guidance/roadmap-migration-post-quantum-cryptography-government-canada-itsm40001](https://www.cyber.gc.ca/en/guidance/roadmap-migration-post-quantum-cryptography-government-canada-itsm40001)

**[42]** Government of Canada. "Canada launches Canadian Artificial Intelligence Safety Institute." 12 November 2024. [https://www.canada.ca/en/innovation-science-economic-development/news/2024/11/canada-launches-canadian-artificial-intelligence-safety-institute.html](https://www.canada.ca/en/innovation-science-economic-development/news/2024/11/canada-launches-canadian-artificial-intelligence-safety-institute.html)

**[43]** Initiative D21 and Technical University of Munich. "eGovernment MONITOR 2024." 2024. [https://initiatived21.de/download/261166/eGovMon2024_eng_250404.pdf](https://initiatived21.de/download/261166/eGovMon2024_eng_250404.pdf)

</section>

<h2 id="appendix-a-maturity-scoring-rubric">Appendix A. Maturity scoring rubric</h2>

The maturity scoring rubric below makes the comparative assessment transparent.

<div class="table-scroll">
<table class="academic-table maturity-table">
<caption><strong>Table A1.</strong> Maturity scoring rubric.</caption>
<thead>
<tr>
<th scope="col">Score</th>
<th scope="col">Level</th>
<th scope="col">Observable criteria</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>No meaningful recognition</td>
<td>Threat not named in public strategy, no responsible institution, no implementation signal.</td>
</tr>
<tr>
<td>1</td>
<td>Discussion and expert debate</td>
<td>Threat appears in expert debate or isolated papers, but not in binding policy.</td>
</tr>
<tr>
<td>2</td>
<td>Strategy and political recognition</td>
<td>Threat appears in strategies, speeches, policy papers, or non-binding programmes.</td>
</tr>
<tr>
<td>3</td>
<td>Law, standards, and assigned institutions</td>
<td>Binding rules, standards, regulators, agencies, or formal mandates exist.</td>
</tr>
<tr>
<td>4</td>
<td>Funded implementation</td>
<td>Budgets, programmes, migration plans, pilots, and sector implementation are visible.</td>
</tr>
<tr>
<td>5</td>
<td>Operational readiness and adaptation</td>
<td>Regular exercises, audits, stress tests, dashboards, red-teaming, incident feedback, and continuous adaptation.</td>
</tr>
</tbody>
</table>
</div>

<h2 id="appendix-b-suggested-readiness-metrics">Appendix B. Suggested readiness metrics</h2>

Table B1 translates the paper’s recommendations into operational metrics that can be used in dashboards, audits, and scenario exercises.

<div class="table-scroll">
<table class="academic-table recommendation-table">
<caption><strong>Table B1.</strong> Suggested readiness metrics.</caption>
<thead>
<tr>
<th scope="col">Metric area</th>
<th scope="col">Suggested metric</th>
<th scope="col">Purpose</th>
</tr>
</thead>
<tbody>
<tr>
<td>Vulnerability management</td>
<td>Median and 95th percentile time to patch critical vulnerabilities in public administration and critical infrastructure.</td>
<td>Measures whether exposure windows are shrinking.</td>
</tr>
<tr>
<td>Authentication</td>
<td>Percentage of critical systems with phishing-resistant multi-factor authentication.</td>
<td>Measures resistance to credential-driven escalation.</td>
</tr>
<tr>
<td>PQC readiness</td>
<td>Percentage of critical systems with complete cryptographic inventory and PQC migration plan.</td>
<td>Measures readiness for cryptographic transition.</td>
</tr>
<tr>
<td>Supplier assurance</td>
<td>Percentage of critical suppliers with verified identity, software signing, and incident reporting obligations.</td>
<td>Measures supply-chain trust maturity.</td>
</tr>
<tr>
<td>Cyber-physical resilience</td>
<td>Number of annual cyber-physical stress tests by sector.</td>
<td>Measures tested readiness for physical translation of digital compromise.</td>
</tr>
<tr>
<td>AI-cyber readiness</td>
<td>Number and coverage of AI-cyber red-team exercises.</td>
<td>Measures preparedness for AI-assisted attack and defence.</td>
</tr>
<tr>
<td>Public service recovery</td>
<td>Recovery time objective and tested recovery time for essential public services.</td>
<td>Measures resilience of citizen-facing services.</td>
</tr>
<tr>
<td>Backup integrity</td>
<td>Backup integrity test frequency and success rate.</td>
<td>Measures ransomware recovery reliability.</td>
</tr>
<tr>
<td>Software supply chain</td>
<td>SBOM coverage for products and public-sector software deployments.</td>
<td>Measures visibility into software dependencies.</td>
</tr>
<tr>
<td>Model supply chain</td>
<td>Model provenance and model supply-chain audit coverage for high-risk AI systems.</td>
<td>Measures control over high-risk AI components and updates.</td>
</tr>
<tr>
<td>AI agent authority</td>
<td>Percentage of high-risk AI agents with verifiable authority, scope limits, revocation, and audit logs.</td>
<td>Measures bounded delegation and accountability.</td>
</tr>
<tr>
<td>Crisis communication</td>
<td>Crisis communication exercise frequency across federal, Länder, municipal, media, platform, and financial-sector actors.</td>
<td>Measures readiness under synthetic media and uncertainty.</td>
</tr>
<tr>
<td>Concentration risk</td>
<td>Dependency concentration index for cloud, chips, identity providers, certificate authorities, AI models, and software repositories.</td>
<td>Measures shared dependency and systemic failure risk.</td>
</tr>
</tbody>
</table>
</div>
