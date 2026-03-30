import news1 from './assets/news1.png'
import image1 from './assets/image.png'
import image2 from './assets/image copy.png'
import image3 from './assets/image copy 2.png'

export const newsArticles = [
    {
        slug: 'architecting-future-federal-health-systems',
        category: 'Clinical Operations',
        date: 'November 14, 2024',
        title: 'Architecting the Future of Federal Health Systems: The 2024 Deployment',
        author: { name: 'Dr. Julian Vane', role: 'Clinical Architect' },
        heroImage: news1,
        quote: '"The integration of algorithmic clinical modeling into state-level healthcare infrastructure represents the first true step toward operational serenity in the public sector."',
        sections: [
            {
                type: 'paragraph',
                text: "In an unprecedented move toward institutional modernization, ETOH has successfully completed the phase-one deployment of the Clinical Integration Layer (CIL) across the tripartite government health network. This milestone signifies more than just a software update; it is a fundamental restructuring of how operational data flows through clinical environments.",
            },
            {
                type: 'heading',
                level: 2,
                text: 'Technical Precision at Scale',
            },
            {
                type: 'paragraph',
                text: 'The deployment utilized a proprietary "blueprint" methodology, ensuring that existing legacy systems were not merely replaced, but harmonized within a unified data fabric. This approach minimizes cognitive load for frontline clinicians while maximizing administrative oversight.',
            },
            {
                type: 'bullets',
                items: [
                    'Real-time resource allocation via predictive clinical modeling.',
                    'Seamless interoperability with multi-tier laboratory systems.',
                    'Automated regulatory compliance auditing at the point of care.',
                ],
            },
            {
                type: 'heading',
                level: 3,
                text: 'Sustaining Operational Excellence',
            },
            {
                type: 'paragraph',
                text: "As we move into the 2025 fiscal year, ETOH's focus remains on refining these sophisticated structures. By treating healthcare delivery as a curated architectural challenge rather than a simple logistics problem, we continue to set new benchmarks for clinical efficacy.",
            },
        ],
        sidebar: {
            title: 'Institutional Context',
            items: [
                { label: 'Project Mission', text: 'To implement sophisticated operational infrastructure that reduces friction between data and delivery.' },
                { label: 'Technical Authority', text: 'Managed by the ETOH Clinical Architecture Board under the guidance of our 2024 Governance Framework.' },
            ],
            ctaText: 'Download Whitepaper',
        },
        relatedSlugs: ['streamlining-fda-approvals', 'etoh-2025-clinical-roadmap', 'expanding-global-partnerships'],
    },
    {
        slug: 'how-etoh-is-rewiring-modern-hospital',
        category: 'In The News',
        date: 'October 28, 2024',
        title: "How ETOH is Rewiring the Modern Hospital Brain",
        publication: 'The New York Times',
        author: { name: 'Sarah Chen', role: 'Health Tech Correspondent' },
        heroImage: image1,
        quote: '"What ETOH has built is not just software — it is a new nervous system for hospitals, one that thinks faster than any human administrator could."',
        sections: [
            {
                type: 'paragraph',
                text: "A deep dive into the algorithmic infrastructure that has reduced operative delays by 22% in the nation's largest hospital networks. The system processes over 14 million data points daily, transforming raw clinical signals into actionable operational directives.",
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Intelligence Layer',
            },
            {
                type: 'paragraph',
                text: "At its core, ETOH functions as an intelligence layer that sits between existing Electronic Health Records and the operational decision-making chain. Rather than replacing legacy systems, it augments them with a predictive overlay capable of anticipating bottlenecks hours before they manifest.",
            },
            {
                type: 'bullets',
                items: [
                    'Predictive bed management reducing average wait times by 34%.',
                    'Automated staff scheduling aligned with patient acuity forecasts.',
                    'Cross-departmental resource optimization in real time.',
                ],
            },
            {
                type: 'heading',
                level: 3,
                text: 'Measured Impact',
            },
            {
                type: 'paragraph',
                text: "In a twelve-month pilot across three major metropolitan health systems, ETOH demonstrated a measurable reduction in operational waste — from redundant lab orders to unused surgical suite time. The financial implications alone have drawn attention from healthcare CFOs nationwide.",
            },
        ],
        sidebar: {
            title: 'Publication Details',
            items: [
                { label: 'Original Source', text: 'The New York Times — Health & Technology Section' },
                { label: 'Coverage Scope', text: 'National investigation into operational AI in healthcare systems across 12 states.' },
            ],
            ctaText: 'Read Original Article',
        },
        relatedSlugs: ['architects-of-clinical-precision', 'operational-excellence-at-scale', 'architecting-future-federal-health-systems'],
    },
    {
        slug: 'architects-of-clinical-precision',
        category: 'In The News',
        date: 'September 30, 2024',
        title: "The Architects of Clinical Precision",
        publication: 'Wired Magazine',
        author: { name: 'Marcus Webb', role: 'Senior Technology Editor' },
        heroImage: image2,
        quote: '"Beyond the EHR lies a vast operational void. ETOH is the first company to build a bridge across it — and hospitals are racing to cross."',
        sections: [
            {
                type: 'paragraph',
                text: "Beyond the EHR: ETOH's layer of orchestration is the missing piece in the trillion-dollar healthcare puzzle. This feature examines how a team of clinical architects and systems engineers built a platform that treats hospital operations as a design problem.",
            },
            {
                type: 'heading',
                level: 2,
                text: 'Design Thinking Meets Clinical Reality',
            },
            {
                type: 'paragraph',
                text: "ETOH's approach borrows from disciplines rarely associated with healthcare — urban planning, logistics engineering, and behavioral economics. The result is a system that doesn't just track what's happening in a hospital but actively shapes the flow of patients, resources, and information.",
            },
            {
                type: 'bullets',
                items: [
                    'Algorithmic patient flow optimization across 200+ facility configurations.',
                    'Human-centered interface design reducing clinician onboarding time by 60%.',
                    'Modular architecture enabling rapid deployment in under 90 days.',
                ],
            },
            {
                type: 'heading',
                level: 3,
                text: 'The Trillion-Dollar Opportunity',
            },
            {
                type: 'paragraph',
                text: "Healthcare operational inefficiency costs the U.S. system an estimated $1.2 trillion annually. ETOH's thesis is simple: most of this waste is a design failure, not a resource shortage. By reframing the problem, they've unlocked savings that traditional approaches never could.",
            },
        ],
        sidebar: {
            title: 'Feature Context',
            items: [
                { label: 'Publication', text: 'Wired Magazine — November 2024 Issue' },
                { label: 'Editorial Focus', text: 'Emerging technologies reshaping critical infrastructure in healthcare and public services.' },
            ],
            ctaText: 'Read Full Feature',
        },
        relatedSlugs: ['how-etoh-is-rewiring-modern-hospital', 'operational-excellence-at-scale', 'architecting-future-federal-health-systems'],
    },
    {
        slug: 'operational-excellence-at-scale',
        category: 'In The News',
        date: 'August 15, 2024',
        title: 'Operational Excellence at Scale',
        publication: 'Modern Healthcare',
        author: { name: 'Dr. Amelia Torres', role: 'Healthcare Economics Analyst' },
        heroImage: image3,
        quote: '"The ROI data from ETOH deployments is unlike anything we have seen in healthcare operations — and we have been tracking this space for two decades."',
        sections: [
            {
                type: 'paragraph',
                text: "Analyzing the ROI of ETOH deployments across the largest healthcare networks in North America. This comprehensive report examines the fiscal, operational, and clinical outcomes of 18 months of ETOH integration across 47 facilities.",
            },
            {
                type: 'heading',
                level: 2,
                text: 'The Financial Case',
            },
            {
                type: 'paragraph',
                text: "Across all deployment sites, ETOH has demonstrated an average return on investment of 340% within the first year. Cost savings come from three primary vectors: reduced operational redundancy, optimized resource utilization, and decreased administrative overhead.",
            },
            {
                type: 'bullets',
                items: [
                    'Average 28% reduction in operational costs within the first 6 months.',
                    'Surgical suite utilization increased from 64% to 89%.',
                    'Administrative processing time reduced by an average of 41%.',
                ],
            },
            {
                type: 'heading',
                level: 3,
                text: 'Clinical Outcomes Correlation',
            },
            {
                type: 'paragraph',
                text: "Perhaps most significantly, the operational improvements have correlated directly with improved clinical outcomes. Facilities running ETOH report a 19% reduction in adverse events and a 26% improvement in patient satisfaction scores.",
            },
        ],
        sidebar: {
            title: 'Report Details',
            items: [
                { label: 'Study Scope', text: '47 facilities across 12 healthcare networks in North America over 18 months.' },
                { label: 'Methodology', text: 'Longitudinal analysis with matched control groups using pre-deployment baseline data.' },
            ],
            ctaText: 'Download Full Report',
        },
        relatedSlugs: ['how-etoh-is-rewiring-modern-hospital', 'architects-of-clinical-precision', 'architecting-future-federal-health-systems'],
    },
    {
        slug: 'streamlining-fda-approvals',
        category: 'Regulatory Compliance',
        date: 'July 22, 2024',
        title: 'Streamlining FDA Approvals Through Automated Integrity Modeling',
        author: { name: 'Dr. Rachel Kim', role: 'Regulatory Affairs Director' },
        heroImage: image1,
        quote: '"Automated integrity modeling transforms the FDA approval process from a bottleneck into a competitive advantage."',
        sections: [
            {
                type: 'paragraph',
                text: "ETOH's automated integrity modeling system has fundamentally changed how medical device and software submissions navigate the FDA approval pipeline. By pre-validating compliance requirements at every stage of development, the platform reduces approval timelines by an average of 40%.",
            },
            {
                type: 'heading',
                level: 2,
                text: 'Continuous Compliance Architecture',
            },
            {
                type: 'paragraph',
                text: "Traditional regulatory workflows treat compliance as a checkpoint. ETOH's approach embeds compliance validation into the continuous development cycle, ensuring that every code commit, data flow change, and operational modification is automatically assessed against current FDA requirements.",
            },
            {
                type: 'bullets',
                items: [
                    'Automated 510(k) pre-submission documentation generation.',
                    'Real-time compliance drift detection across software updates.',
                    'Integrated audit trail meeting 21 CFR Part 11 requirements.',
                ],
            },
            {
                type: 'heading',
                level: 3,
                text: 'Accelerating Time to Market',
            },
            {
                type: 'paragraph',
                text: "For healthcare technology companies, time to market is critical. ETOH's modeling system has helped partners reduce their average FDA clearance timeline from 14 months to just 8.5 months, without compromising on safety or efficacy standards.",
            },
        ],
        sidebar: {
            title: 'Regulatory Context',
            items: [
                { label: 'Framework', text: 'Aligned with FDA Digital Health Software Precertification Program guidelines.' },
                { label: 'Compliance Standard', text: 'Full adherence to IEC 62304, ISO 13485, and 21 CFR Part 820.' },
            ],
            ctaText: 'Download Compliance Brief',
        },
        relatedSlugs: ['etoh-2025-clinical-roadmap', 'architecting-future-federal-health-systems', 'expanding-global-partnerships'],
    },
    {
        slug: 'etoh-2025-clinical-roadmap',
        category: 'Medical Board',
        date: 'June 10, 2024',
        title: 'The ETOH 2025 Clinical Efficacy Roadmap: An Executive Summary',
        author: { name: 'Dr. Michael Okoye', role: 'Chief Medical Officer' },
        heroImage: image2,
        quote: '"Our 2025 roadmap is not about adding features — it is about deepening the intelligence that already runs beneath every clinical decision."',
        sections: [
            {
                type: 'paragraph',
                text: "The ETOH 2025 Clinical Efficacy Roadmap outlines the strategic priorities for the next fiscal year, focusing on three pillars: predictive analytics enhancement, expanded interoperability, and advanced clinical decision support. This executive summary provides stakeholders with a comprehensive overview of planned initiatives.",
            },
            {
                type: 'heading',
                level: 2,
                text: 'Strategic Pillars for 2025',
            },
            {
                type: 'paragraph',
                text: "Each pillar represents a critical dimension of ETOH's evolution. Predictive analytics will move from reactive pattern detection to proactive intervention recommendations. Interoperability will expand beyond FHIR standards to encompass proprietary data formats used by legacy systems. Clinical decision support will integrate real-world evidence at the point of care.",
            },
            {
                type: 'bullets',
                items: [
                    'Next-generation predictive models trained on 2.4 billion clinical data points.',
                    'Universal adapter framework supporting 340+ EHR configurations.',
                    'Evidence-based clinical pathway recommendations updated in real time.',
                ],
            },
            {
                type: 'heading',
                level: 3,
                text: 'Investment and Timeline',
            },
            {
                type: 'paragraph',
                text: "ETOH has committed $180M in R&D investment for the 2025 roadmap, with phased rollouts beginning Q1. Early access programs are available for existing deployment partners, with general availability targeted for Q3 2025.",
            },
        ],
        sidebar: {
            title: 'Executive Brief',
            items: [
                { label: 'Prepared For', text: 'ETOH Board of Directors, Clinical Advisory Council, and Strategic Partners.' },
                { label: 'Classification', text: 'Public distribution — approved by the Office of Clinical Strategy.' },
            ],
            ctaText: 'Download Full Roadmap',
        },
        relatedSlugs: ['streamlining-fda-approvals', 'architecting-future-federal-health-systems', 'expanding-global-partnerships'],
    },
    {
        slug: 'expanding-global-partnerships',
        category: 'Global Health',
        date: 'May 3, 2024',
        title: 'Expanding Sophistication: Global Partnerships in Technical Excellence',
        author: { name: 'Ingrid Svensson', role: 'VP of International Operations' },
        heroImage: image3,
        quote: '"Healthcare is a universal challenge, but the solutions must be locally intelligent. Our global partnerships are built on this principle."',
        sections: [
            {
                type: 'paragraph',
                text: "ETOH's international expansion strategy centers on strategic partnerships that respect local healthcare ecosystems while introducing operational intelligence at scale. This report details new partnerships across Europe, Asia-Pacific, and the Middle East.",
            },
            {
                type: 'heading',
                level: 2,
                text: 'Localized Intelligence, Global Standards',
            },
            {
                type: 'paragraph',
                text: "Each regional deployment is tailored to local regulatory frameworks, clinical workflows, and cultural expectations. ETOH's modular architecture enables this customization without sacrificing the core analytical capabilities that drive operational improvements.",
            },
            {
                type: 'bullets',
                items: [
                    'Berlin Hub: Central European operations covering Germany, Austria, and Switzerland.',
                    'Singapore Center: APAC headquarters serving 14 countries across the region.',
                    'Dubai Office: Middle East and North Africa operations with Arabic-first interfaces.',
                ],
            },
            {
                type: 'heading',
                level: 3,
                text: 'Data Sovereignty and Compliance',
            },
            {
                type: 'paragraph',
                text: "International expansion requires rigorous attention to data sovereignty requirements. ETOH's distributed architecture ensures all patient data remains within jurisdictional boundaries while enabling anonymized operational insights to flow across the global network.",
            },
        ],
        sidebar: {
            title: 'Partnership Overview',
            items: [
                { label: 'Active Regions', text: 'North America, Europe (DACH), Asia-Pacific, Middle East & North Africa.' },
                { label: 'Partnership Model', text: 'Joint ventures with local health system operators, ensuring cultural and regulatory alignment.' },
            ],
            ctaText: 'View Partnership Opportunities',
        },
        relatedSlugs: ['etoh-2025-clinical-roadmap', 'architecting-future-federal-health-systems', 'operational-excellence-at-scale'],
    },
]

export function getArticleBySlug(slug) {
    return newsArticles.find((a) => a.slug === slug)
}

export function getRelatedArticles(slugs) {
    return slugs.map((s) => newsArticles.find((a) => a.slug === s)).filter(Boolean)
}
