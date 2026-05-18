---
layout: default
title: "Spherity Research"
description: "Research papers by Spherity GmbH on decentralized identity, verifiable credentials, trust infrastructure, and regulated data ecosystems."
permalink: /
robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
image: "/assets/Spherity-logo-horiz-blue-rgb.png"
image_alt: "Spherity logo."
---

<style>
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #f6f8fa;
  }

  .research-page,
  .research-page * {
    box-sizing: border-box;
  }

  .research-page {
    width: min(100% - 3rem, 1180px);
    margin: 0 auto;
    padding: clamp(1.5rem, 3vw, 3.5rem) clamp(1rem, 2.5vw, 2rem) clamp(2.5rem, 5vw, 5rem);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #24292f;
  }

  .research-header {
    margin: 0 0 2.5rem 0;
    padding: 1.5rem 0 2rem 0;
    border-bottom: 1px solid #d8dee4;
  }

  .research-logo {
    display: block;
    width: 170px;
    max-width: 55vw;
    height: auto;
    margin: 0 0 1.4rem 0;
  }

  .research-kicker {
    margin: 0 0 0.45rem 0;
    font-size: 0.82rem;
    font-weight: 650;
    line-height: 1.4;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #57606a;
  }

  .research-title {
    max-width: 920px;
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2rem, 4vw, 3.1rem);
    font-weight: 700;
    line-height: 1.12;
    color: #111827;
  }

  .research-subtitle {
    max-width: 850px;
    margin: 1rem 0 0 0;
    font-size: clamp(1rem, 1.6vw, 1.15rem);
    line-height: 1.65;
    color: #57606a;
  }

  .research-section {
    margin: 2.75rem 0 0 0;
  }

  .research-section-header {
    max-width: 880px;
    margin: 0 0 1.15rem 0;
  }

  .research-section-title {
    margin: 0;
    padding: 0 0 0.55rem 0;
    border-bottom: 1px solid #d8dee4;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.45rem, 2.4vw, 2rem);
    line-height: 1.25;
    color: #111827;
  }

  .research-section-intro {
    margin: 0.85rem 0 0 0;
    font-size: 1rem;
    line-height: 1.65;
    color: #57606a;
  }

  .research-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin: 1.25rem 0 0 0;
  }

  .research-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(220px, 340px);
    gap: clamp(1rem, 2.5vw, 1.75rem);
    align-items: stretch;
    padding: clamp(1rem, 2.5vw, 1.45rem);
    border: 1px solid #d8dee4;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 10px 26px rgba(17, 24, 39, 0.06);
  }

  .research-card-content {
    min-width: 0;
  }

  .research-card-title {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.25rem, 2vw, 1.55rem);
    line-height: 1.28;
    color: #111827;
  }

  .research-card-title a {
    color: inherit;
    text-decoration-thickness: 0.08em;
    text-underline-offset: 0.16em;
  }

  .research-card-title a:hover {
    color: #0969da;
  }

  .research-card-description {
    max-width: 720px;
    margin: 0.75rem 0 0 0;
    font-size: 1rem;
    line-height: 1.6;
    color: #57606a;
  }

  .research-card-meta {
    margin: 1rem 0 0 0;
    font-size: 0.92rem;
    line-height: 1.45;
    color: #6e7781;
  }

  .research-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 1rem 0 0 0;
    padding: 0;
    list-style: none;
  }

  .research-tag {
    display: inline-flex;
    align-items: center;
    padding: 0.24rem 0.55rem;
    border: 1px solid #d8dee4;
    border-radius: 999px;
    background: #f6f8fa;
    font-size: 0.78rem;
    line-height: 1.35;
    color: #57606a;
  }

  .research-card-image-link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 190px;
    padding: 0.75rem;
    border: 1px solid #d8dee4;
    border-radius: 12px;
    background: #fbfbfc;
    overflow: hidden;
  }

  .research-card-image-link img {
    display: block;
    width: 100%;
    max-height: 240px;
    height: auto;
    object-fit: contain;
  }

  .research-card-image-link:hover {
    border-color: #0969da;
  }

  @media (max-width: 900px) {
    .research-page {
      width: min(100% - 2rem, 100%);
    }

    .research-card {
      grid-template-columns: 1fr;
    }

    .research-card-image-link {
      min-height: 160px;
    }
  }

  @media (max-width: 600px) {
    .research-page {
      width: 100%;
      padding-inline: 1rem;
    }

    .research-header {
      padding-top: 1rem;
    }

    .research-card {
      border-radius: 12px;
    }
  }

  @media print {
    body {
      background: #ffffff;
    }

    .research-page {
      width: auto;
      max-width: none;
      padding: 0;
    }

    .research-card {
      break-inside: avoid;
      box-shadow: none;
    }
  }
</style>

<main class="research-page">
  <header class="research-header">
    <img class="research-logo"
         src="{{ '/assets/Spherity-logo-horiz-blue-rgb.png' | relative_url }}"
         alt="Spherity"
         width="170">

    <p class="research-kicker">Spherity Research</p>

    <h1 class="research-title">Spherity Research Papers</h1>

    <p class="research-subtitle">
      Research on decentralized identity, verifiable credentials, trust infrastructure,
      regulated data ecosystems, and post-quantum migration.
    </p>
  </header>

  <section class="research-section" aria-labelledby="post-quantum-heading">
    <div class="research-section-header">
      <h2 class="research-section-title" id="post-quantum-heading">
        Post-Quantum Digital Identity
      </h2>
    </div>

    <div class="research-list">
      <article class="research-card">
        <div class="research-card-content">
          <h3 class="research-card-title">
            <a href="{{ '/Securing-Digital-Identity-Quantum-Vulnerabilities.html' | relative_url }}">
              Securing Digital Identity and Verifiable Credential Wallets against Quantum Vulnerabilities
            </a>
          </h3>

          <p class="research-card-description">
            Public-key trust fabric risk, attack taxonomy, macro-economic exposure,
            and post-quantum identity corridors.
          </p>

          <p class="research-card-meta">
            Dr. Carsten Stöcker, Spherity GmbH ·
            <time datetime="2026-05-14">2026-05-14</time>
          </p>

          <ul class="research-tags" aria-label="Topics">
            <li class="research-tag">Post-quantum cryptography</li>
            <li class="research-tag">Digital identity</li>
            <li class="research-tag">Verifiable credentials</li>
            <li class="research-tag">Legal-person identity</li>
          </ul>
        </div>

        <a class="research-card-image-link"
           href="{{ '/Securing-Digital-Identity-Quantum-Vulnerabilities.html' | relative_url }}"
           aria-label="Open research paper: Securing Digital Identity and Verifiable Credential Wallets against Quantum Vulnerabilities">
          <img src="{{ '/assets/Infochart-Securing-Legal-Person-Digital-Identity-Against-Quantum-Vulnerabilities-Spherity-GmbH-05-2026.png' | relative_url }}"
               alt="Preview of the infochart about legal person digital identity and post-quantum cryptography."
               loading="lazy">
        </a>
      </article>
    </div>
  </section>

  <section class="research-section" aria-labelledby="ebw-heading">
    <div class="research-section-header">
      <h2 class="research-section-title" id="ebw-heading">
        European Business Wallet (EBW)
      </h2>

      <p class="research-section-intro">
        The European Business Wallet (EBW) is a core building block for
        organisational identity, verifiable credentials, and compliance-driven
        data exchange under eIDAS 2.0.
      </p>
    </div>

    <div class="research-list">
      <article class="research-card">
        <div class="research-card-content">
          <h3 class="research-card-title">
            <a href="{{ '/ebw-roadmap.html' | relative_url }}">
              Legal and Operational EBW Roadmap Toward EU-Wide Acceptance
            </a>
          </h3>

          <p class="research-card-description">
            A roadmap for legal, operational, and ecosystem acceptance of the
            European Business Wallet across EU member states and regulated
            business processes.
          </p>

          <p class="research-card-meta">
            Spherity GmbH · European Business Wallet
          </p>

          <ul class="research-tags" aria-label="Topics">
            <li class="research-tag">European Business Wallet</li>
            <li class="research-tag">eIDAS 2.0</li>
            <li class="research-tag">Organisational identity</li>
            <li class="research-tag">Compliance data exchange</li>
          </ul>
        </div>

        <a class="research-card-image-link"
           href="{{ '/ebw-roadmap.html' | relative_url }}"
           aria-label="Open research paper: Legal and Operational EBW Roadmap Toward EU-Wide Acceptance">
          <img src="{{ '/assets/Europen%20Business%20Wallet%20%28EBW%29%20Roadmap%20-%20Spherity%20GmbH.png' | relative_url }}"
               alt="Preview image for the European Business Wallet roadmap paper."
               loading="lazy">
        </a>
      </article>
    </div>
  </section>
  <section class="research-section" aria-labelledby="policy-risk-heading">
  <div class="research-section-header">
    <h2 class="research-section-title" id="policy-risk-heading">
      Policy, Technology and Risk
    </h2>

    <p class="research-section-intro">
      Research on systemic technology risk, digital sovereignty, trust infrastructure,
      AI-enabled cyber operations, hybrid warfare, and resilience policy.
    </p>
  </div>

  <div class="research-list">
    <article class="research-card">
      <div class="research-card-content">
        <h3 class="research-card-title">
          <a href="{{ '/threat-escalation-model-germany-eu.html' | relative_url }}">
            Superintelligent AI, Quantum Risk, Hybrid Warfare, and Robotic Autonomy
          </a>
        </h3>

        <p class="research-card-description">
          A threat escalation and scenario planning model for Germany and Europe,
          covering AI-enabled cyber operations, post-quantum cryptography,
          trust infrastructure, hybrid warfare, robotic autonomy, and frontier AI risk.
        </p>

        <p class="research-card-meta">
          Dr. Carsten Stöcker, Spherity GmbH ·
          <time datetime="2026-05-18">2026-05-18</time>
        </p>

        <ul class="research-tags" aria-label="Topics">
          <li class="research-tag">AI risk</li>
          <li class="research-tag">Superintelligent AI</li>
          <li class="research-tag">Hybrid warfare</li>
          <li class="research-tag">PQC</li>
          <li class="research-tag">Trust infrastructure</li>
          <li class="research-tag">Germany and EU</li>
          <li class="research-tag">Cyber-security</li>
          <li class="research-tag">Systemic risk</li>
        </ul>
      </div>

      <a class="research-card-image-link"
         href="{{ '/threat-escalation-model-germany-eu.html' | relative_url }}"
         aria-label="Open research paper: Superintelligent AI, Quantum Risk, Hybrid Warfare, and Robotic Autonomy">
        <img src="{{ '/assets/Spherity-logo-horiz-blue-rgb.png' | relative_url }}"
             alt="Spherity logo."
             loading="lazy">
      </a>
    </article>
  </div>
</section>
</main>
