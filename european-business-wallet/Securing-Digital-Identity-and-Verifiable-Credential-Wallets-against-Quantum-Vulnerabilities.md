# Securing Digital Identity and Verifiable Credential Wallets against Quantum Vulnerabilities

**Attack taxonomy, macro-economic risk, and post-quantum migration corridors**

Review paper for technical stakeholder discussions
Prepared for Dr. Carsten Stöcker / Spherity GmbH  
Draft date: 12 May 2026  
Status: independent draft

> **Central thesis.** The quantum risk highlighted for elliptic-curve cryptocurrencies is a special case of a broader public-key exposure problem. Digital identity wallets, verifiable credentials, verifiable presentations, trust lists, status registries, VDRs, DNSSEC, WebPKI, and semantic registries form a public-key trust fabric that supports legal persons, supply chains, Industry 4.0, critical infrastructure, and Trusted AI. This fabric needs post-quantum migration corridors before it becomes too large to migrate safely.

# Abstract

Recent quantum resource estimates for elliptic-curve discrete logarithms have changed the risk posture for systems that expose long-lived public keys. The public debate has focused on Bitcoin and other cryptocurrencies, where a cryptographically relevant quantum computer could derive private keys from exposed elliptic-curve public keys and enable at-rest or on-spend attacks. This review paper argues that the same class of risk is broader and, in macro-economic terms, more material for digital identity. Verifiable credentials (VCs), verifiable presentations (VPs), identity wallets, issuer keys, holder-binding keys, verifier authentication keys, trust-list keys, status-list keys, decentralized identifiers, DNSSEC, WebPKI, and semantic registries all depend on public-key assumptions. A break of those assumptions could create forged identity evidence, false legal-person credentials, compromised supply-chain authority, unauthorized access to critical infrastructure, and misattributed actions by AI agents. The paper maps the cryptocurrency attack taxonomy into a digital identity taxonomy: at-rest identity attacks, on-presentation attacks, on-issuance attacks, on-registry attacks, trust-list attacks, status attacks, semantic supply-chain attacks, and on-setup attacks against privacy-preserving proof systems. It further argues that legal-person identity is a macro-economic control point. It supports onboarding, contracting, procurement, customs, AML/KYC, regulated supply chains, digital product passports, industrial automation, and Trusted AI. The exposure is therefore not limited to one asset class; it touches the transaction layer of the real economy. The main recommendation is to start work on post-quantum identity corridors: bounded, testable, end-to-end identity exchange paths in which issuance, presentation, wallet key storage, verifier authentication, trust lists, status lists, VDR resolution, semantic registries, transport security, and long-term validation are made hybrid or post-quantum-ready together.

**Keywords:** post-quantum cryptography; verifiable credentials; identity wallets; legal person identity; trust lists; VDRs; DNSSEC; digital product passports; Trusted AI; supply-chain trust

# Contents

1. Introduction
2. Quantum risk as a public-key exposure problem
3. Digital identity system model
4. Attack taxonomy for VCs, VPs, wallets, and trust infrastructure
5. Identity-specific quantum attack scenarios
6. Macro-economic exposure: why legal-person identity is larger than Bitcoin
7. Standards and readiness gaps
8. Post-quantum identity corridors
9. Recommendations for Google and the wider ecosystem
10. Limitations and research agenda
11. Outlook

Appendix A. Cryptographic asset inventory template
Appendix B. Minimal PQC corridor checklist
References

# 1. Introduction

Google has publicly set a 2029 timeline for PQC migration and has called out authentication services and digital signatures as priority areas. The paper by Babbush et al. estimates that breaking 256-bit ECDLP over secp256k1 can be done with fewer than 1,200 logical qubits and fewer than 90 million Toffoli gates, or with fewer than 1,450 logical qubits and fewer than 70 million Toffoli gates. Under their superconducting architecture assumptions, the runtime can fall to minutes with fewer than half a million physical qubits [1]. The paper also distinguishes fast-clock and slow-clock quantum architectures and uses this distinction to analyze on-spend, at-rest, and on-setup attacks [1].

This is an important result for cryptocurrencies. It is also a signal for digital identity. The common substrate is not Bitcoin. The common substrate is public-key trust. If a public key can be transformed into a private key within an operational time window, then any system that exposes public keys and relies on their secrecy after exposure must be re-analyzed. Identity systems expose such keys in many places: issuer verification methods, wallet holder-binding keys, verifier request keys, trust-list anchors, status-list signing keys, DID documents, X.509 chains, DNSSEC zone keys, WebPKI certificates, and protocol metadata.

The current public debate is too narrow when it frames the problem as whether quantum computers will break Bitcoin. A better research question is: which digital trust fabrics become unsafe when public keys are no longer safe long-term identifiers? Digital identity is one of the largest such fabrics. It is being embedded into public services, enterprise onboarding, mobile wallets, regulated supply chains, digital product passports, healthcare, payments, workforce IAM, critical infrastructure, and AI governance.

The paper therefore reviews quantum risk for digital identity wallets and VC/VP ecosystems. It uses the SSI triangle as the starting model, but extends it to a trust control plane and a semantic supply chain. This is necessary because a verifier does not only check a digital signature. It checks whether the issuer is trusted, whether the credential is current, whether the wallet is acceptable, whether the verifier is authorized, whether the VDR data is correct, and whether the meaning of the claims is stable.

The main recommendation is to start work on PQC identity corridors. A corridor is a bounded identity flow, such as legal-person onboarding or digital product passport signing, in which all public-key dependencies are inventoried and moved to hybrid or post-quantum operation together. This is more realistic than a big-bang migration, and more useful than upgrading transport security alone.

# 2. Quantum risk as a public-key exposure problem

The Babbush et al. analysis is framed around cryptocurrency signatures. Its deeper lesson is that systems can no longer treat exposed ECC public keys as harmless long-term data. In classical security models, a public key can be public for decades. In a post-quantum threat model, the same public key may become a route to the private key. The practical risk depends on three factors: the algorithm, the public-key exposure surface, and the time window in which the attacker can use the recovered private key.

NIST finalized ML-KEM, ML-DSA, and SLH-DSA in 2024 as the first three post-quantum standards. NIST also states that organizations should begin migration and that many quantum-vulnerable algorithms are expected to be deprecated or disallowed by 2035, with high-risk use cases moving earlier [3,4,5]. Google has publicly set a 2029 timeline for PQC migration and has called out authentication services and digital signatures as priority areas [2].

Transport-layer PQC is necessary but not sufficient. Hybrid ML-KEM in TLS helps protect network sessions against harvest-now-decrypt-later attacks. It does not protect a VC signature, a VP holder-binding proof, a trust list, a status list, a DID document, or a signed schema once the object is copied, archived, logged, audited, or presented offline. Identity systems need object-level PQC and registry-level PQC, not only channel-level PQC.

Table 1. Translation of cryptocurrency attack terms into digital identity terms.

| **Cryptocurrency term**      | **Identity term**               | **Interpretation**                                                                                                                                   |
|------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| On-spend attack              | On-presentation attack          | A holder public key or proof key becomes visible during a presentation. A fast attacker derives the private key and creates a competing or later VP. |
| At-rest attack               | At-rest identity attack         | Long-lived issuer, holder, verifier, DID, trust-list, DNSSEC, or certificate keys are exposed in registries and metadata.                            |
| On-setup attack              | On-setup proof-system attack    | A trusted setup, pairing-based system, RSA group, or ZK parameter set is attacked once, then used to forge or break proofs.                          |
| Public mempool exposure      | Presentation-channel exposure   | A verifier, browser, wallet, API gateway, log system, or network channel exposes proof material during an identity transaction.                      |
| On-chain public-key exposure | VDR and trust-registry exposure | DID documents, trust lists, DNSSEC, WebPKI, ledgers, and issuer metadata expose verification material at scale.                                      |

# 3. Digital identity system model

The W3C Verifiable Credentials Data Model defines a model in which issuers create credentials, holders store and present them, and verifiers check them. Verifiable presentations can include credentials and proofs, and verifiable data registries can mediate identifiers, verification material, schemas, and revocation registries [6]. OpenID4VCI defines issuance flows and holder binding. OpenID4VP defines presentation flows using a VP token and can run through HTTPS redirects or the W3C Digital Credentials API [9,10,11].

The SSI triangle is useful, but not enough for a post-quantum threat model. The triangle must be embedded in a trust control plane. The control plane includes trust lists, trust registries, trust anchors, wallet provider certification, issuer accreditation, verifier registration, access certificates, status lists, VDR resolution, DID methods, DNSSEC, WebPKI, schema registries, context registries, policy engines, and transparency logs. In EUDI Wallet architectures, for example, trusted lists contain trust anchors, and those trust anchors are used by wallets, issuers, and relying parties to verify providers, access certificates, and other ecosystem actors [13].

A second layer is the semantic supply chain. A credential does not carry value only because it is signed. It carries value because the verifier interprets its type, schema, context, issuer authority, status, and policy meaning. In product passports and supply-chain credentials, this semantic layer links product identifiers, due diligence statements, material data, lifecycle events, customs data, and business roles. Quantum migration must therefore protect not only signatures, but also the signed and versioned meaning of the data.

**Trust control plane:** trust lists | status lists | VDRs | DNSSEC/WebPKI | schemas | policy | audit logs

| Issuer | Holder / Wallet | Verifier |
|---|---|---|
| Signs VC; manages status; publishes verification material. | Stores VC; protects holder key; creates VP. | Checks VP, issuer trust, status, semantics, and policy. |

**Semantic supply chain:** credential type | schema | context | vocabulary | issuer entitlement | policy | domain meaning

Figure 1. SSI triangle extended with trust control plane and semantic supply chain.

# 4. Attack taxonomy for VCs, VPs, wallets, and trust infrastructure

A quantum attacker does not need to attack every part of an identity ecosystem. It is enough to compromise the weakest public-key dependency on the verification path. In identity systems, this path can be longer than in a blockchain transaction. A verifier may depend on the credential proof, the holder-binding proof, the issuer DID or certificate, a trust list, a status list, a DNS name, a schema, a policy registry, and a timestamping or audit service.

Table 2. Identity attack taxonomy and PQC-relevant controls.

| **Attack vector**            | **Primary exposure**                                                                                | **Likely attack result**                                                           | **PQC-relevant controls**                                                                     |
|------------------------------|-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Issuer key at-rest attack    | Issuer public key in DID document, X.509 certificate, trust list, metadata, or VDR.                 | Forge VCs for persons, companies, products, roles, or AI agents.                   | Hybrid/PQC issuer signatures; short-lived keys; transparency; emergency reissuance.           |
| Holder-binding key attack    | Holder public key in SD-JWT VC cnf, mdoc, DID, wallet attestation, verifier logs, or presentations. | Create valid VPs and impersonate the holder.                                       | Per-credential keys; nonce and audience binding; PQC holder proof; hardware-backed keys.      |
| On-presentation attack       | Proof material becomes visible during a VP flow, especially to a malicious or compromised verifier. | Race the session or reuse recovered key to present elsewhere.                      | Short sessions; strict verifier authentication; PQC/hybrid proofs; logging controls.          |
| On-issuance attack           | Wallet proof-of-possession key, issuance nonce, authorization code, or device attestation path.     | Bind the credential to an attacker-controlled key or clone the issued credential.  | PQC proof of possession; token binding; secure wallet attestation; short-lived grants.        |
| Verifier impersonation       | Verifier access certificate, request signing key, DNS/WebPKI key, or relying-party registration.    | Request sensitive credentials or trigger selective disclosure to a rogue verifier. | PQC verifier authentication; trust-list controls; user-agent mediation.                       |
| Trust-list attack            | Trust-list signing key or access CA key.                                                            | Add a rogue issuer, wallet provider, verifier, or certification authority.         | PQC trust-list signatures; threshold control; monitoring; emergency revocation.               |
| Status-list attack           | Status-list signing key, hosting key, or resolver path.                                             | Make revoked credentials appear valid, or valid credentials appear revoked.        | PQC status signatures; replicated status services; transparency; privacy-preserving checks.   |
| VDR and DNSSEC attack        | DID method keys, ledger keys, DNSSEC zone keys, WebPKI certificates, or database signing keys.      | Replace verification material, service endpoints, or metadata.                     | PQC-ready DID methods; PQC DNSSEC strategy; signed registry snapshots.                        |
| Semantic supply-chain attack | Schema, JSON-LD context, namespace, product identifier, vocabulary, or policy authority.            | Change the meaning of claims without changing the surface form of the credential.  | Signed and pinned schemas; versioned semantics; PQC registry signatures; policy audit.        |
| On-setup proof attack        | Trusted setups, pairings, RSA groups, accumulators, or ZK public parameters.                        | Forge privacy proofs or break unlinkability and selective disclosure.              | PQC anonymous credentials research; migration plans; setup-free or transparent proof systems. |

# 5. Identity-specific quantum attack scenarios

## 5.1 Issuer key compromise

Issuer key compromise is the most direct high-impact case. If a public issuer key is exposed in a DID document, certificate, trust list, or metadata service, a CRQC may derive the matching private key. The attacker could then issue forged credentials. For a government PID issuer, the damage is identity fraud. For a legal-person issuer, the damage can include false corporate authority, fraudulent onboarding, and supply-chain access. For a DPP issuer, the damage can include false product data and fake compliance records.

DID Core recognizes that DID documents express verification methods such as public keys, and that these methods are used for authentication, assertion, and other verification relationships [8]. This makes DID documents useful, but also makes them long-lived public-key exposure points. Post-quantum identity design must therefore treat issuer keys as high-value public assets, not only as key material in a wallet.

## 5.2 On-presentation attacks

An on-presentation attack is the identity analogue of an on-spend attack. A holder presents a credential to a verifier. The VP includes a proof, a nonce, an audience, a holder-binding key, or a reference to verification material. A fast attacker who sees the relevant public key might derive the private key during the presentation window or shortly after a first presentation. The attacker could then create a valid-looking VP for the same session or for another verifier.

The analogy to Bitcoin is not exact. Most VP flows are not broadcast to a public mempool. They are usually mediated by HTTPS, mobile wallets, browsers, or enterprise APIs. This reduces broad public exposure. It does not remove the risk. Malicious verifiers, compromised relying parties, browser logs, gateway logs, mobile telemetry, support dumps, and archived presentations can expose public keys and proof material. High-value relying parties may also be targeted directly. The right mitigation is not to assume that presentation material is private; it is to use nonce-bound, audience-bound, short-lived, and eventually PQC or hybrid holder proofs.

## 5.3 On-issuance attacks

OpenID4VCI supports credential issuance flows in which the issuer binds a credential to holder key material. The holder later proves control of the same key during presentation [9]. This mechanism is central to wallet security. It is also a quantum exposure point. If a wallet proof-of-possession key or attestation key is quantum-vulnerable and visible during issuance, an attacker may be able to bind the credential to a key that the attacker can use or derive.

The most sensitive on-issuance targets are high-assurance credentials: national PID, legal-person identity, professional roles, regulated supply-chain roles, pharma trading partner credentials, financial KYC credentials, customs credentials, product-passport issuer rights, and AI-agent delegation credentials. In these cases, a false issuance event can have a longer lifetime than a fraudulent login. It can become a signed input to downstream trust decisions.

## 5.4 Trust-list and access-certificate attacks

Trust lists are systemic trust objects. The EUDI Wallet Architecture and Reference Framework defines trusted lists that contain trust anchors. It also describes access certificate authorities, wallet provider trust anchors, and trust lists used by wallets and relying parties [13]. A quantum break of a trust-list signing key or access CA key could enable a rogue issuer, verifier, wallet provider, or service endpoint to appear legitimate. This attack can scale across an ecosystem because many verifiers may rely on the same list.

Trust-list migration should therefore be prioritized earlier than ordinary low-value credential migration. The trust-list layer should be hybrid or PQC-signed, monitored, timestamped, and designed for emergency key rollover. Threshold signing and key ceremonies are also relevant, but they do not remove the need for quantum-safe primitives.

## 5.5 VDR, DNSSEC, WebPKI, and registry attacks

VC ecosystems often rely on VDRs to resolve identifiers and verification material [6]. A VDR can be a blockchain, a database, a trusted registry, a decentralized file system, or another authoritative data source. DNSSEC can also act as identity infrastructure when domains are used to discover issuer metadata, verifier metadata, service endpoints, or DID records. DNSSEC authenticates DNS data through digital signatures over DNS resource record sets [27]. If DNSSEC or WebPKI remains quantum-vulnerable while credentials are upgraded, the verification path remains vulnerable.

There is active IETF discussion on PQC DNSSEC strategy, including the operational effect of larger PQC signatures and the need for conservative as well as lower-impact algorithm options [28]. Identity architectures that use DNS as a VDR or discovery layer should track this work closely. A credential is not quantum-safe if the resolver path that supplies its issuer keys is not safe.

## 5.6 Status, revocation, and long-term validity

Status is a core identity control. The W3C Bitstring Status List specification provides a compact mechanism for expressing credential status, including suspension and revocation [14]. Yet a status list is still a signed object. If the status signing key is compromised, an attacker can make revoked credentials appear valid or can deny service by marking valid credentials as revoked.

Long-term validity is harder. A credential might be valid at the time of presentation but later unverifiable because the algorithm is broken. Identity ecosystems need rules for timestamping, archival validation, transparency logs, reissuance, and evidence preservation. This is especially important for legal-person credentials, compliance certificates, product passports, audit logs, and AI-agent actions that may be reviewed years later.

## 5.7 On-setup attacks against privacy-preserving credentials

Privacy-preserving identity systems often use selective disclosure, anonymous credentials, accumulators, pairings, or zero-knowledge proofs. BBS-based VC cryptosuites, for example, are designed to support selective disclosure and unlinkability [15]. Other systems may use RSA-based CL signatures, pairing-based signatures, or SNARKs. These techniques are important for privacy, but many of their current constructions depend on quantum-vulnerable hardness assumptions or setup assumptions.

A PQC migration that only replaces ECDSA issuer signatures is incomplete. The identity community also needs PQC-ready privacy-preserving credentials. This is an open research area. It requires attention to proof size, mobile verification, offline use, unlinkability, issuer privacy, revocation privacy, QR-code limits, and formal security models.

## 5.8 Agentic AI and Trusted AI

Trusted AI requires traceability, accountability, and controlled authority. OECD AI principles call for traceability across datasets, processes, and decisions, and the EU AI Act imposes requirements such as logging, documentation, robustness, cybersecurity, and human oversight for high-risk AI systems [24,26]. NIST has also framed Trustworthy AI for critical infrastructure as a risk-management problem [25].

AI agents will increasingly sign API calls, procurement events, data-access requests, software actions, payments, and operational commands. Their authority will often be delegated through credentials from legal persons. A quantum break of legal-person identity or agent delegation credentials could create false authority at machine speed. PQC identity corridors for AI should therefore combine short-lived delegation, policy-limited VCs, revocation, device or workload attestation, and PQC/hybrid signatures.

# 6. Macro-economic exposure: why legal-person identity is larger than Bitcoin

The claim that digital identity is more important than Bitcoin should be made with care. It is not a claim that any single identity credential has more market value than Bitcoin. It is a claim about dependency scope, substitution cost, and contagion channels. Bitcoin is a large but sector-specific asset system. Legal-person identity is a horizontal control layer for the real economy. It is used to establish who a company is, what it is allowed to do, which person or machine may act for it, and which data or product event can be trusted.

The scale difference is visible in macro-economic data. Bitcoin market capitalization was around USD 1.6 trillion on 9 May 2026, with daily volatility [21]. By contrast, world trade in goods and services reached about USD 34.65 trillion in 2025 according to the WTO [17]. UNCTAD reported global trade at a record USD 33 trillion in 2024 [18]. The World Bank reports global GDP in current US dollars above USD 110 trillion for 2024, and has noted that global value chains account for almost half of global trade [19,20].

Legal-person identity sits under many of these flows. It supports enterprise onboarding, beneficial ownership checks, KYC/AML, sanctions screening, procurement, customs, supply-chain due diligence, supplier qualification, electronic seals, product-passport data, industrial IoT authorization, critical infrastructure access, and accountable AI delegation. A broad loss of trust in this layer would not only cause theft. It could raise transaction costs, delay trade, increase manual verification, break automated compliance, create false provenance, disrupt just-in-time operations, and weaken AI accountability.

Table 3. Macro-economic dependency surfaces for post-quantum identity risk.

| **Surface**                            | **Identity dependency**                                                                    | **Scale indicator**                                                                | **Why this matters**                                                    |
|----------------------------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Bitcoin asset ownership                | Public keys, transaction signatures, address types, wallet custody.                        | About USD 1.6 trillion market capitalization on 9 May 2026; volatile daily [21]. | High financial value, but bounded to one digital asset system.          |
| World trade                            | Legal-person identity, contracts, customs, logistics, product data, payment authorization. | Goods and services trade about USD 34.65 trillion in 2025 [17].                  | Large real-economy dependency on trusted entity and role data.          |
| Global value chains                    | Supplier identity, due diligence, product provenance, certificates, DPPs.                  | Almost half of global trade is linked to GVCs [19].                              | Identity failure can propagate across suppliers and jurisdictions.      |
| Global GDP                             | Public services, commerce, industry, finance, healthcare, energy, transport.               | World GDP above USD 110 trillion in current US dollars for 2024 [20].            | Identity is a horizontal trust layer for economic coordination.         |
| Trusted AI and critical infrastructure | Legal-person delegation, workload identity, audit trails, safety cases.                    | No single market number; exposure is systemic in high-risk sectors [25,26].      | False machine authority can create operational and legal risk at speed. |

Digital product passports make the same point in a concrete way. The EU Ecodesign for Sustainable Products Regulation creates the basis for digital product passports, with work on identifiers, data carriers, access rights, registries, and portals [22]. Product passports are intended to support transparency across value chains, including product origin, materials, lifecycle information, and compliance evidence [22,23]. Such data is not useful if the issuer, product identifier, legal entity, supply-chain event, or status record cannot be trusted.

The macro-economic argument therefore has a simple form: cryptocurrency signatures protect asset ownership in a specific network; legal-person identity protects authority and accountability across many networks. The latter is a larger dependency surface. It should receive at least the same public attention in post-quantum migration planning.

# 7. Standards and readiness gaps

There is no single identity standard that can solve the PQC migration. The identity stack is multi-layered. W3C VC Data Integrity secures credentials and constrained digital documents through signatures and related proofs [7]. W3C VC JOSE/COSE secures credentials and presentations with JOSE, SD-JWT, and COSE [12]. DID Core defines identifiers and verification methods [8]. OpenID4VCI and OpenID4VP define issuance and presentation flows [9,10]. The Digital Credentials API adds browser and user-agent mediation [11]. EUDI Wallet architectures add trusted lists, access certificates, and regulated ecosystem roles [13]. Each layer must be assessed.

Google has made relevant platform moves. Chrome moved toward standardized ML-KEM for hybrid key exchange in BoringSSL and Chrome [30]. Android 17 adds ML-DSA support in Android Keystore and related PQC work for hardware-backed identity and authentication paths [29]. Google Cloud KMS has introduced quantum-safe signatures, including ML-DSA and SLH-DSA capabilities [31]. These are important foundations. They do not by themselves define end-to-end PQC identity profiles for VCs, VPs, trust lists, status lists, DID methods, or semantic registries.

Table 4. Standards readiness gap for PQC digital identity.

| **Layer**                 | **Current standards or platforms**                                                | **PQC gap**                                                                                                   |
|---------------------------|-----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| Credential object         | W3C VC Data Model; VC Data Integrity; VC JOSE/COSE [6,7,12].                    | PQC and hybrid signature suites, algorithm identifiers, canonicalization rules, and proof-purpose validation. |
| Issuance                  | OpenID4VCI [9].                                                                 | PQC proof of possession, wallet attestation, nonce binding, and issuer metadata signatures.                   |
| Presentation              | OpenID4VP; Digital Credentials API [10,11].                                     | PQC holder binding, verifier request signing, browser capability signaling, and anti-replay design.           |
| Wallet key storage        | Android Keystore, KeyMint, secure hardware, vendor-specific wallet stacks [29]. | Hardware-backed ML-DSA/SLH-DSA keys, attestation, recovery, and migration rules.                              |
| Trust infrastructure      | EUDI trust lists, access certificates, WebPKI, DNSSEC [13,27].                  | PQC trust anchors, PQC access CAs, rollover rules, and auditability.                                          |
| Status and revocation     | Bitstring Status List and related status services [14].                         | PQC status signatures, transparency, privacy-preserving checks, and long-term evidence.                       |
| VDRs and DID methods      | DID Core and method-specific registries [8].                                    | PQC verification methods, method-specific key rotation, and registry migration.                               |
| Semantic layer            | Schemas, JSON-LD contexts, vocabularies, product identifiers, policy registries.  | Signed and pinned semantics, versioned authority, and PQC registry protection.                                |
| Privacy-preserving proofs | BBS cryptosuites, CL signatures, ZK systems, accumulators [15].                 | PQC anonymous credentials, selective disclosure, unlinkability, and quantum-safe revocation.                  |

A narrow algorithm substitution model will fail. Identity migration must account for key lifecycle, credential lifetime, presentation frequency, user experience, offline use, QR size, mobile hardware, trust-list governance, compliance rules, and audit requirements. It must also handle legacy credentials and dormant identity records that cannot be reissued quickly.

# 8. Post-quantum identity corridors

A post-quantum identity corridor is a governed, end-to-end identity exchange path in which all public-key dependencies are inventoried and moved to hybrid or post-quantum readiness together. A corridor is not only a credential format. It is a full path: issuer signature, wallet key storage, holder binding, verifier authentication, issuance channel, presentation channel, trust-list signing, status-list signing, VDR resolution, DID or certificate chain, DNSSEC/WebPKI dependency, schema/context integrity, policy validation, timestamping, audit, and reissuance.

Corridors are useful because identity ecosystems are too fragmented for a single migration event. They allow high-risk flows to move first, while preserving interoperability. They also create test beds for standards work and give platform teams clear requirements. A legal-person onboarding corridor, for example, can test issuer signatures, holder binding, trust-list verification, status checks, and verifier authorization without waiting for every consumer identity use case to migrate.

Table 5. Maturity levels for PQC identity corridors.

| **Level** | **Name**                    | **Requirement**                                                                                                                       |
|-----------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| 0         | Inventory                   | All algorithms, public-key exposure locations, key owners, VDRs, trust lists, status lists, and credential lifetimes are known.       |
| 1         | Hybrid transport            | TLS, APIs, and wallet-verifier channels use hybrid/PQC key establishment where available.                                             |
| 2         | Hybrid credential proofs    | Issuer signatures, holder-binding proofs, verifier request signatures, and wallet attestations support classical plus PQC algorithms. |
| 3         | Hybrid trust infrastructure | Trust lists, status lists, VDR records, DID documents, DNSSEC/WebPKI dependencies, and schema registries have PQC migration paths.    |
| 4         | Long-term validation        | Timestamping, transparency, archival validation, emergency rollover, reissuance, and evidence policies are defined.                   |
| 5         | PQC-native privacy          | Selective disclosure, unlinkability, revocation privacy, and anonymous credentials use quantum-resistant constructions.               |

Candidate corridors should be chosen by risk and leverage. Initial corridors should include legal-person identity, regulated supply-chain credentials, pharma trading partner credentials, digital product passport credentials, critical infrastructure operator credentials, EUDI PID/QEAA flows, financial KYC/AML credentials, and AI-agent delegation credentials. These flows have high assurance needs, long credential lifetimes, and strong macro-economic relevance.

A practical corridor should define at least four artefact classes: a threat model, a cryptographic profile, test vectors, and operational runbooks. The runbooks should include key rollover, emergency revocation, reissuance, downgrade prevention, audit evidence, and fallback rules for offline verification.

# 9. Recommendations for Google and the wider ecosystem

Google is well positioned to help reframe the public discourse. It has quantum research, cryptography engineering, Chrome, Android, Cloud KMS, identity systems, browser mediation, and developer reach. Google has also already stated that authentication services and digital signatures should be prioritized in PQC migration [2]. The next step is to make digital identity a first-class post-quantum migration topic.

Table 6. Recommendations for a PQC digital identity work program.

| **No.** | **Recommendation**                                                 | **Rationale and first action**                                                                                                                                                                                                                                                                                                                                              |
|---------|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1       | Move the public question from Bitcoin to public-key trust fabrics. | The public discussion should shift from “will quantum computers break Bitcoin?” to “which identity, trust, and digital signature systems become unsafe when public keys can be inverted?” This keeps cryptocurrency risk in scope, but adds identity wallets, legal-person identity, VCs, VPs, trust lists, status services, VDRs, DNSSEC, WebPKI, and semantic registries. |
| 2       | Start a PQC Identity Corridors initiative.                         | Google could convene a focused technical group with Google Quantum AI, Google Security, Android, Chrome, Cloud KMS, W3C VC groups, OpenID Foundation, IETF, NIST, ENISA, BSI, EUDI Wallet stakeholders, wallet vendors, regulated issuers, and critical-infrastructure operators.                                                                                           |
| 3       | Build reference implementations.                                   | Initial implementations should include ML-DSA issuer-signed VCs, hybrid SD-JWT VC holder binding, a Data Integrity hybrid proof suite, PQC trust-list signatures, PQC status-list signatures, Android Keystore-backed wallet keys, Digital Credentials API capability signaling, and VDR/DNSSEC migration tests.                                                            |
| 4       | Separate channel security from object security.                    | Hybrid TLS protects the session. It does not make a credential, presentation, trust list, status list, or DID document safe after storage, logging, offline presentation, or archival review. Google messaging should make this distinction explicit.                                                                                                                       |
| 5       | Prioritize legal-person identity.                                  | Legal-person credentials sit under supply chains, Industry 4.0, critical infrastructure, DPPs, procurement, KYC/AML, and AI delegation. They should be treated as high-risk migration targets, not as a secondary enterprise use case.                                                                                                                                      |
| 6       | Publish a joint threat model and test suite.                       | A shared threat model should define on-presentation, on-issuance, on-registry, trust-list, semantic, and on-setup attacks. Test suites should include downgrade attempts, key rollover, expired trust anchors, status forgery, and mixed classical/PQC chains.                                                                                                              |

The most valuable near-term outcome would be a short public position paper and a technical work plan. The position paper should state that identity is a primary PQC risk surface. The work plan should define two or three concrete corridors and publish early interoperability artefacts.

# 10. Limitations and research agenda

This paper does not claim that a CRQC exists today. The resource estimates in [1] depend on architecture assumptions, error correction, timing, and scale-up assumptions. It also does not claim that every identity presentation is as exposed as a public blockchain transaction. Many VP flows are private, authenticated, and short-lived. The risk argument is about high-value exposure points, reuse, logging, malicious verifiers, public registries, and long-term trust objects.

Several identity standards are still evolving. PQC algorithm identifiers, hybrid signature encodings, Data Integrity suites, JOSE/COSE profiles, device attestation support, and privacy-preserving PQC credentials need further work. Standards bodies should avoid premature fragmentation, but they should not wait until CRQC timelines are certain.

1. Which PQC signature profiles are best for VCs, VPs, trust lists, and status lists when mobile size, QR codes, and offline verification matter?

2. How should hybrid signatures be represented consistently across Data Integrity, JOSE, COSE, SD-JWT VC, and mdoc profiles?

3. How can holder binding be PQC-ready without creating long-lived correlatable public keys?

4. What is the PQC replacement path for BBS+, CL signatures, pairing-based anonymous credentials, accumulators, and ZK proof systems?

5. How should long-term validation work after classical public-key algorithms are deprecated or broken?

6. How should EUDI-style trust lists, access certificates, and wallet attestations migrate without ecosystem downtime?

7. How should DNSSEC and WebPKI migration be coordinated with DID and VDR migration?

8. How should legal-person credentials delegate authority to AI agents in a way that is short-lived, revocable, auditable, and quantum-safe?

# 11. Outlook

The cryptocurrency analysis in [1] is a useful warning because it turns an abstract quantum concern into an operational attack model. Digital identity needs the same shift. The key question is not only when a quantum computer will break a curve. The key question is whether identity ecosystems will have already built migration paths for the public keys, trust anchors, registries, and semantics that they publish today.

The priority should be calm and concrete engineering: inventory public-key dependencies, avoid unnecessary long-lived key exposure, add crypto agility, pilot PQC corridors in high-risk legal-person and supply-chain flows, and define rules for reissuance and long-term evidence. This work should begin before identity wallets, DPPs, and AI-agent authority systems reach full scale.

# Appendix A. Cryptographic asset inventory template

| **Inventory item**           | **What to record**                                                                                          |
|------------------------------|-------------------------------------------------------------------------------------------------------------|
| Asset                        | Example values                                                                                              |
| Key owner                    | Issuer, wallet, verifier, trust-list operator, status service, VDR operator, DNS zone owner, schema owner.  |
| Algorithm and parameter set  | ECDSA P-256, Ed25519, RSA-2048, BLS12-381, ML-DSA-65, SLH-DSA, hybrid profile.                              |
| Public-key exposure location | DID document, X.509 certificate, trust list, issuer metadata, wallet metadata, DNSSEC, logs, presentations. |
| Key lifetime                 | Hours, days, months, years; rollover frequency; emergency rollover process.                                 |
| Credential lifetime          | Session-only, short-lived, annual, multi-year, lifetime.                                                    |
| Status dependency            | Bitstring status list, token status list, OCSP-like service, registry lookup, offline status evidence.      |
| VDR dependency               | Blockchain, DNSSEC, WebPKI, database, decentralized file system, trusted registry.                          |
| Semantic dependency          | Schema, JSON-LD context, vocabulary, product identifier, policy registry, authority registry.               |
| PQC readiness                | None, crypto-agile, hybrid transport, hybrid object signature, PQC-native, PQC privacy.                     |
| Migration owner              | Named team and governance body.                                                                             |
| Reissuance process           | Trigger, user or enterprise action, batch process, emergency revocation, fallback.                          |

# Appendix B. Minimal PQC corridor checklist

1. Issuer signatures are hybrid or PQC-ready, and algorithm identifiers are unambiguous.

2. Holder-binding proofs are hybrid or PQC-ready, nonce-bound, audience-bound, and not reusable across contexts.

3. Verifier request signatures and access certificates are hybrid or PQC-ready.

4. Wallet keys are protected in secure hardware where possible and have attestation paths.

5. Trust lists and access CA chains are hybrid or PQC-ready and monitored.

6. Status lists and revocation services are hybrid or PQC-ready and resilient to denial of service.

7. DID methods, VDRs, DNSSEC, and WebPKI dependencies have migration paths.

8. Schemas, contexts, namespaces, and policy registries are signed, pinned, versioned, and monitored.

9. Transport channels use hybrid/PQC key establishment where available.

10. Long-term validation, timestamping, archival evidence, emergency rollover, and reissuance policies are defined.

11. Privacy-preserving presentation mechanisms have a quantum-safe roadmap.

12. Downgrade prevention and mixed classical/PQC verification rules are tested.

# References

**[1]** Babbush, R., Zalcman, A., Gidney, C., Broughton, M., Khattar, T., Neven, H., Bergamaschi, T., Drake, J., and Boneh, D. "Securing Elliptic Curve Cryptocurrencies against Quantum Vulnerabilities: Resource Estimates and Mitigations." arXiv:2603.28846, 2026. [https://arxiv.org/abs/2603.28846](https://arxiv.org/abs/2603.28846)

**[2]** Adkins, H. and Schmieg, S. "Quantum frontiers may be closer than they appear." Google, 2026. [https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/](https://blog.google/innovation-and-ai/technology/safety-security/cryptography-migration-timeline/)

**[3]** National Institute of Standards and Technology. "NIST Releases First 3 Finalized Post-Quantum Encryption Standards." 2024. [https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)

**[4]** NIST Computer Security Resource Center. "Post-Quantum Cryptography." [https://csrc.nist.gov/projects/post-quantum-cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography)

**[5]** Moody, D. et al. "Transition to Post-Quantum Cryptography Standards." NIST IR 8547 Initial Public Draft, 2024. [https://csrc.nist.gov/pubs/ir/8547/ipd](https://csrc.nist.gov/pubs/ir/8547/ipd)

**[6]** World Wide Web Consortium. "Verifiable Credentials Data Model v2.0." W3C Recommendation, 2025. [https://www.w3.org/TR/vc-data-model-2.0/](https://www.w3.org/TR/vc-data-model-2.0/)

**[7]** World Wide Web Consortium. "Verifiable Credential Data Integrity 1.0." W3C Recommendation, 2025. [https://www.w3.org/TR/vc-data-integrity/](https://www.w3.org/TR/vc-data-integrity/)

**[8]** World Wide Web Consortium. "Decentralized Identifiers (DIDs) v1.0." W3C Recommendation, 2022. [https://www.w3.org/TR/did-core/](https://www.w3.org/TR/did-core/)

**[9]** OpenID Foundation. "OpenID for Verifiable Credential Issuance." [https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html)

**[10]** OpenID Foundation. "OpenID for Verifiable Presentations." [https://openid.net/specs/openid-4-verifiable-presentations-1_0.html](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)

**[11]** World Wide Web Consortium. "Digital Credentials API." W3C Working Draft. [https://www.w3.org/TR/digital-credentials/](https://www.w3.org/TR/digital-credentials/)

**[12]** World Wide Web Consortium. "Securing Verifiable Credentials using JOSE and COSE." [https://www.w3.org/TR/vc-jose-cose/](https://www.w3.org/TR/vc-jose-cose/)

**[13]** European Commission. "European Digital Identity Wallet Architecture and Reference Framework 1.10." [https://eudi.dev/1.10.0/architecture-and-reference-framework-main/](https://eudi.dev/1.10.0/architecture-and-reference-framework-main/)

**[14]** World Wide Web Consortium. "Bitstring Status List v1.0." [https://www.w3.org/TR/vc-bitstring-status-list/](https://www.w3.org/TR/vc-bitstring-status-list/)

**[15]** World Wide Web Consortium. "Data Integrity BBS Cryptosuites v1.0." [https://www.w3.org/TR/vc-di-bbs/](https://www.w3.org/TR/vc-di-bbs/)

**[16]** European Commission. "European Digital Identity Wallet." [https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity_en](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity_en)

**[17]** World Trade Organization. "Global Trade Outlook and Statistics 2026." [https://www.wto.org/english/res_e/booksp_e/trade_outlook26_e.pdf](https://www.wto.org/english/res_e/booksp_e/trade_outlook26_e.pdf)

**[18]** UNCTAD. "Global trade hits record \$33 trillion in 2024." [https://unctad.org/news/global-trade-hits-record-33-trillion-2024](https://unctad.org/news/global-trade-hits-record-33-trillion-2024)

**[19]** World Bank. "World Development Report 2020: Trading for Development in the Age of Global Value Chains." [https://www.worldbank.org/en/publication/wdr2020](https://www.worldbank.org/en/publication/wdr2020)

**[20]** World Bank. "GDP (current US\$) - World." [https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=1W](https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=1W)

**[21]** YCharts. "Bitcoin Market Cap." Source: Blockchain.com. Data point: 1.615T USD, 9 May 2026. [https://ycharts.com/indicators/bitcoin_market_cap](https://ycharts.com/indicators/bitcoin_market_cap)

**[22]** European Commission. "Ecodesign for Sustainable Products Regulation." [https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/ecodesign-sustainable-products-regulation_en](https://commission.europa.eu/energy-climate-change-environment/standards-tools-and-labels/products-labelling-rules-and-requirements/ecodesign-sustainable-products-regulation_en)

**[23]** Centre for European Policy Studies. "Digital Product Passport: the ticket to achieving a climate neutral and circular European economy?" [https://cdn.ceps.eu/wp-content/uploads/2024/03/Digital-Product-Passport.pdf](https://cdn.ceps.eu/wp-content/uploads/2024/03/Digital-Product-Passport.pdf)

**[24]** OECD.AI. "Accountability principle." [https://oecd.ai/en/dashboards/ai-principles/P9](https://oecd.ai/en/dashboards/ai-principles/P9)

**[25]** National Institute of Standards and Technology. "AI Risk Management Framework: Generative AI and Critical Infrastructure Profiles." [https://www.nist.gov/itl/ai-risk-management-framework](https://www.nist.gov/itl/ai-risk-management-framework)

**[26]** European Commission. "AI Act." [https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)

**[27]** IETF. RFC 4033: "DNS Security Introduction and Requirements." [https://www.rfc-editor.org/rfc/rfc4033](https://www.rfc-editor.org/rfc/rfc4033)

**[28]** IETF Internet-Draft. "Post-Quantum DNSSEC Strategy." [https://www.ietf.org/archive/id/draft-sheth-pqc-dnssec-strategy-01.html](https://www.ietf.org/archive/id/draft-sheth-pqc-dnssec-strategy-01.html)

**[29]** Google Security Blog. "Post-quantum cryptography in Android." 2026. [https://security.googleblog.com/2026/03/post-quantum-cryptography-in-android.html](https://security.googleblog.com/2026/03/post-quantum-cryptography-in-android.html)

**[30]** Google Security Blog. "A new path for Kyber on the Web." 2024. [https://security.googleblog.com/2024/09/a-new-path-for-kyber-on-web.html](https://security.googleblog.com/2024/09/a-new-path-for-kyber-on-web.html)

**[31]** Google Cloud. "Post-quantum cryptography (PQC)." [https://cloud.google.com/security/resources/post-quantum-cryptography](https://cloud.google.com/security/resources/post-quantum-cryptography)

*All web references accessed on 12 May 2026. Market data is time-sensitive and should be refreshed before publication.*
