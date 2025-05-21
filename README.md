[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/something-appsec/sbom-talk/badge)](https://scorecard.dev/viewer/?uri=github.com/something-appsec/sbom-talk) <!-- .element: class="hidden" data-fragment-index="2" -->

# SBOMs
## Eine Tragikomödie in 3 Akten

_by *Jasmin Mair* and *Lukas Mika*_

Note:
This slide deck is based on [reveal.js](https://revealjs.com/).

This file provides the Payload for the presentation and might therefore contain code, which is not natively supported by GitHub's MarkDown implementation.

The rendered presentation is available via the repository's [GitHub Pages website](https://something-appsec.github.io/sbom-talk/).

---

# Disclaimer

All characters appearing in this work  
are purely fictitious.

Any resemblance to real persons, living or dead,  
is purely coincidental.

---

<img src="images/no-cisos-harmed.png" alt="No CISOs were harmed Logo" width="1000" height="auto">

<div style="font-family: serif; font-size: 0.8em">
No CISOs were harmed <br/>
in the Making of this Presentation
</div>

---

# 1. Akt

## _Introductio_

---

<figure>
    <img src="images/supply-chain-attacks.png" width="800" height="auto">
    <figcaption><a href="https://www.sonatype.com/hubfs/1-2023%20New%20Site%20Assets/SSCR/8th-Annual-SSCR-digital-0206%20update.pdf">Sonatype: 2022 State of the Supply Chain</a></figcaption>
</figure>

---

<img src="images/sboms-rainbow.jpg" alt="SBOM Meme with Spongebob holding a rainbow" width="1000" height="auto">

---

<img src="images/distracted-by-sbom.jpg" alt="Distracted by SBOM" width="1000" height="auto"> 

---

<img src="images/sbom-big.jpg" alt="SBOM Big!" width="1000" height="auto">

---

<figure>
    <img src="images/dependency-tree.png" alt="Example Dependency Tree" width="600" height="auto">
    <figcaption><a href="https://blog.droidchef.dev/mastering-the-gradle-dependency-tree/">Ishan Khanna: Mastering the Gradle Dependency Tree</a></figcaption>
</figure>

---

<figure>
    <img src="images/oss-percentage.png" alt="70-90% of all Software is Open Source" width="1000" height="auto">
    <figcaption><a href="https://www.intel.com/content/www/us/en/developer/articles/guide/the-careful-consumption-of-open-source-software.html">Intel: The Careful Consumption of Open Source Software</a></figcaption>
</figure>

---

<img src="images/squid-game-log4j.jpg" alt="Next Task: Find log4j in your Org" width="1000" height="auto">

---

<img src="images/yo-dawg.jpg" alt="Dependencies over Dependencies" width="1000" height="auto">

---

<figure>
    <img src="images/transitive-dependencies.png" alt="Transitive Dependencies" width="800" height="auto">
    <figcaption><a href="https://blog.phylum.io/hidden-dependencies-lurking-in-the-software-dependency-network/">Phylum: Hidden Dependencies lurking in the Software Dependency Network</a></figcaption>
</figure>

---

<figure>
    <img src="images/ndepend-messy-graph.png" alt="Messy Dependency Graph" width="1000" height="auto">
    <figcaption><a href="https://understandlegacycode.com/blog/safely-restructure-codebase-with-dependency-graphs/">Nicolas Carlo: Safely restructure your codebase with Dependency Graphs</a></figcaption>
</figure>

---

# SBOM

- Supplier Name
- Component Name
- Version of the Component
- Other Unique Identifiers
- Dependency Relationship
- Author of SBOM Data
- Timestamp
- Licenses

<!--
- Component (incl. Identifiers)
- Used Version
- Creator
- Timestamp
- Filename
- Dependencies on others
- License
- Origin
- Relations
-->

---

<img src="images/sbom-example.png" alt="SPDX JSON Example" width="800" height="auto">

---

# 2. Akt

## _Disputatio_

---

<figure>
    <img src="images/sbom-publishing-isolated.png" alt="Evolution of SBOM publishing" width="1000" height="auto">
    <figcaption><a href="https://www.sonatype.com/state-of-the-software-supply-chain/2024/10-year-look">Sonatype: 2024 State of the Supply Chain</a></figcaption>
</figure>

---

<figure>
    <img src="images/projects-vs-sboms.png" alt="Projects vs SBOMs" width="500" height="auto">
    <figcaption><a href="https://www.sonatype.com/state-of-the-software-supply-chain/2024/10-year-look">Sonatype: 2024 State of the Supply Chain</a></figcaption>
</figure>

---

<figure>
    <img src="images/sbom-publishing.png" alt="Evolution of SBOM publishing" width="1000" height="auto">
    <figcaption><a href="https://www.sonatype.com/state-of-the-software-supply-chain/2024/10-year-look">Sonatype: 2024 State of the Supply Chain</a></figcaption>
</figure>

---

<figure>
    <img src="images/oss-proliferation.png" alt="Open Source Software Proliferation" width="1000" height="auto">
    <figcaption><a href="https://www.blackduck.com/content/dam/black-duck/en-us/reports/rep-ossra.pdf">Black Duck: 2025 Open Source Security and Risk Analysis Report</a></figcaption>
</figure>

---

<figure>
    <img src="images/package-maintainers.png" alt="Open Source Projects by number of maintainers" width="1000" height="auto">
    <figcaption><a href="https://www.intel.com/content/www/us/en/developer/articles/guide/the-careful-consumption-of-open-source-software.html">Intel: The Careful Consumption of Open Source Software</a></figcaption>
</figure>

---

# Sponsor more<br/>open source<br/>projects!

---

<img src="images/sbom-devs.jpg" alt="SBOMs holding back Developers" width="450" height="auto">

---

<img src="images/nevermind.webp"  alt="Nevermind" width="1000" height="auto">

---

<figure>
    <img src="images/sbom-sharing.png" alt="SBOM Sharing" width="600" height="auto">
    <figcaption><a href="https://www.cisa.gov/sites/default/files/2024-05/SBOM%20Sharing%20Primer.pdf">CISA: SBOM Sharing Primer</a></figcaption>
</figure>

---

<img src="images/trustworthy.jpg" alt="Trustworthy Racoon" width="1000" height="auto">

---

Hier fehlt eine Slide zum Thema "Konsolidierung"

---

# Supply Chain Attack Vectors

- Typosquatting
- Malicious Code Injection
  - Social Engineering
  - Compromised Build Systems
  - Repo-/Project-jacking
- Malicious Maintainer (e.g. "Protestware")
- Dependency Confusion/Hallucination

---

<img src="images/sbom-defense.jpg" alt="SBOM vs Supply Chain Attacks" width="1000" height="auto">

---

<img src="images/log4j-vendors.jpg" alt="Vendors need to patch, too" width="400" height="auto">

---

<figure>
    <img src="images/log4j-cve.png" alt="CVE-2021-44228" width="1000" height="auto">
    <figcaption><a href="https://www.cve.org/CVERecord?id=CVE-2021-44228">CVE-2021-44228 on https://cve.mitre.org/</a></figcaption>
</figure>

---

<figure>
    <img src="images/mitre-funding.png" alt="News Article: In last-minute reversal, US agency extends support for cyber vulnerability database" width="1000" height="auto">
    <figcaption><a href="https://www.reuters.com/world/us/us-agency-extends-support-last-minute-cyber-vulnerability-database-2025-04-16/">Reuters: In last-minute reversal, US agency extends support for cyber vulnerability database</a></figcaption>
</figure>

---

Slide zu ENISA?

---

<figure>
    <img src="images/anatomy_of_vex.webp" width="1000" height="auto">
    <figcaption><a href="https://blog.adolus.com/a-deeper-dive-into-vex-documents">Adolus: A Deeper Dive into VEX Documents</a></figcaption
</figure>

---

# 3. Akt

## _Conclusio_

---

<img src="images/not-the-silver-bullet.jpg" alt="Not the Silver Bullet you're looking for" width="1000" height="auto">

---

| **Regulation**           | **Industry**                     |
|--------------------------|----------------------------------|
| NIS-2 Directive          | Critical Infrastructure          |
| EU Cyber Resilience Act  | "Products with digital Elements" |
| DORA                     | Financial Sector                 |
| US Executive Order 14028 | US Government Software Suppliers |
| FDA                      | Medical Devices                  |
| UNECE R 155 WP.29        | Automotive (self-driving cars)   |

---

<img src="images/regulatory-requirements.jpg" alt="Regulatory Requirements" width="600" height="auto">

---

<img src="images/no-need.jpg" alt="No need to spend efforts, if you don't look at your SBOM" width="1000" height="auto">

---

<figure>
    <img src="images/log4j.png" alt="Downloaded versions of log4j" width="1000" height="auto">
    <figcaption><a href="https://www.sonatype.com/state-of-the-software-supply-chain/2024/risk">Sonatype: 2024 State of the Supply Chain</a></figcaption>
</figure>

---

<figure>
    <img src="images/openssf.png" alt="Example OpenSSF Scorecard Report" width="1000" height="auto">
    <figcaption>Example OpenSSF Scorecard Report; see <a href="https://scorecard.dev/">https://scorecard.dev/</a></figcaption>
</figure>

---

<img src="images/the-end.jpg" alt="The End" width="1000" height="auto">

---

Slides and Content available at<br/>https://github.com/lukas-mika/sbom-talk

<img src="images/qr-code.gif" alt="QR Code">
