---
layout: default
title: "Spherity Research"
description: "Research papers by Spherity GmbH on decentralized identity, verifiable credentials, trust infrastructure, and regulated data ecosystems."
permalink: /
robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
image: "./assets/Spherity-logo-horiz-blue-rgb.png" 
image_alt: "Spherity logo."
---

<main class="paper-page research-index">
  <header class="paper-header">
    <img class="paper-logo"
         src="{{ './assets/Spherity-logo-horiz-blue-rgb.png' | relative_url }}"
         alt="Spherity"
         width="160">

    <p class="paper-kicker">Spherity Research</p>
    <h1 class="paper-title">Spherity Research Papers</h1>
    <p class="paper-subtitle">
      Research on decentralized identity, verifiable credentials, trust infrastructure,
      regulated data ecosystems, and post-quantum migration.
    </p>
  </header>

  <section aria-labelledby="post-quantum-heading">
    <h2 id="post-quantum-heading">Post-Quantum Digital Identity</h2>

    <div class="research-list">
      <article class="research-card">
        <div>
          <h2>
            <a href="{{ '/Securing-Digital-Identity-Quantum-Vulnerabilities.html' | relative_url }}">
              Securing Digital Identity and Verifiable Credential Wallets against Quantum Vulnerabilities
            </a>
          </h2>

          <p>
            Public-key trust fabric risk, attack taxonomy, macro-economic exposure,
            and post-quantum identity corridors.
          </p>

          <p class="research-card-meta">
            Dr. Carsten Stöcker, Spherity GmbH ·
            <time datetime="2026-05-14">2026-05-14</time>
          </p>
        </div>

        <a href="{{ '/Securing-Digital-Identity-Quantum-Vulnerabilities.html' | relative_url }}"
           aria-label="Open research paper: Securing Digital Identity and Verifiable Credential Wallets against Quantum Vulnerabilities">
        </a>
      </article>
    </div>
  </section>

  <section aria-labelledby="ebw-heading">
    <h2 id="ebw-heading">European Business Wallet (EBW)</h2>

    <p>
      The European Business Wallet (EBW) is a core building block for
      organisational identity, verifiable credentials, and compliance-driven
      data exchange under eIDAS 2.0.
    </p>

    <div class="research-list">
      <article class="research-card">
        <div>
          <h2>
            <a href="{{ '/ebw-roadmap.html' | relative_url }}">
              Legal and Operational EBW Roadmap Toward EU-Wide Acceptance
            </a>
          </h2>

          <p>
            A roadmap for legal, operational, and ecosystem acceptance of the
            European Business Wallet across EU member states and regulated
            business processes.
          </p>

          <p class="research-card-meta">
            Spherity GmbH · European Business Wallet
          </p>
        </div>

        <a href="{{ '/ebw-roadmap.html' | relative_url }}"
           aria-label="Open research paper: Legal and Operational EBW Roadmap Toward EU-Wide Acceptance">
          <img src="{{ '/assets/Spherity-logo-horiz-blue-rgb.png' | relative_url }}"
               alt="Spherity logo."
               loading="lazy">
        </a>
      </article>
    </div>
  </section>
</main>
