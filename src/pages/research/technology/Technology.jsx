import PageLayout from '../../../components/PageLayout'
import heroImg from './hero1.png'
import IconSvg from './iconsvg'

const benchmarks = [
    { label: 'Algorithm Specificity (Validated)', value: '89.2%', width: '89%', color: '#006970' },
    { label: 'Inference Latency (Avg)', value: '240ms', width: '95%', color: '#006970' },
    { label: 'False Discovery Rate', value: 'Low (6.4%)', width: '6%', color: '#BA1A1A' },
]

const resources = [
    { icon: 'doc', title: 'Technical Architecture Overview', meta: 'PDF · 4.2 MB · v2.4', action: 'Download' },
    { icon: 'chart', title: 'AI Clinical Validation Study', meta: 'PDF · 8.1 MB · 2024', action: 'Download' },
    { icon: 'api', title: 'API Integration Guide', meta: 'HTML · Dev Docs', action: 'Read Online' },
    { icon: 'shield', title: 'Cybersecurity Architecture', meta: 'PDF · 2.1 MB · v1.9', action: 'Download' },
]

const complianceTags = ['ISO 27001', 'HIPAA Compliant', 'SOC2 Type II']

function ResourceIcon({ type }) {
    const icons = {
        doc: <svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M10 1H3C1.9 1 1 1.9 1 3V17C1 18.1 1.9 19 3 19H13C14.1 19 15 18.1 15 17V6L10 1Z" stroke="#001736" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 1V6H15" stroke="#001736" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
        chart: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1" y="8" width="4" height="9" rx="1" stroke="#001736" strokeWidth="1.5"/><rect x="7" y="1" width="4" height="16" rx="1" stroke="#001736" strokeWidth="1.5"/><rect x="13" y="5" width="4" height="12" rx="1" stroke="#001736" strokeWidth="1.5"/></svg>,
        api: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#001736" strokeWidth="1.5"/><path d="M7 11H15M11 7V15" stroke="#001736" strokeWidth="1.5" strokeLinecap="round"/></svg>,
        shield: <svg width="16" height="20" viewBox="0 0 16 20" fill="none"><path d="M8 1L1 4.5V9.5C1 14.2 3.87 18.55 8 19.5C12.13 18.55 15 14.2 15 9.5V4.5L8 1Z" stroke="#001736" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    }
    return icons[type] || icons.doc
}

export default function TechnologyPage() {
    return (
        <PageLayout fullWidth>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* ── Section 1: Hero ── */}
                <div style={{ background: '#F8F9FA', padding: '128px 24px', overflow: 'hidden' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: 64 }}>
                        {/* Left copy */}
                        <div style={{ maxWidth: 620, display: 'flex', flexDirection: 'column', gap: 24, flexShrink: 0 }}>
                            <div style={{ display: 'inline-flex', alignSelf: 'flex-start', padding: '4px 12px', background: '#96F1FA', borderRadius: 2 }}>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#004F54' }}>
                                    Architectural Blueprint
                                </span>
                            </div>
                            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 72, lineHeight: '72px', margin: 0 }}>
                                <span style={{ color: '#001736' }}>The architecture behind the system.</span>
                                <br />
                                <span style={{ color: '#006970' }}>Transparent by design.</span>
                            </h1>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 20, lineHeight: '28px', color: '#43474F', maxWidth: 576, margin: 0, paddingTop: 8 }}>
                                ETOH publishes technical documentation for clinical AI researchers, health informaticists, and hospital technology leadership who want to understand not just what the platform does, but how it works.
                            </p>
                        </div>

                        {/* Right image */}
                        <div style={{ flex: 1, position: 'relative' }}>
                            <div style={{ position: 'absolute', left: -22, top: 1, width: 613, height: 422, background: 'rgba(0,23,54,0.05)', borderRadius: 8, transform: 'rotate(-2deg)' }} />
                            <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', outline: '1px solid rgba(196,198,208,0.20)' }}>
                                <img src={heroImg} alt="System Architecture" style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block', opacity: 0.9 }} />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Section 2: Quote ── */}
                <div style={{ background: '#F3F4F5', padding: '80px 216px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', paddingLeft: 32, borderLeft: '4px solid #006970' }}>
                        <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 30, lineHeight: '36px', color: '#002B5B', margin: 0 }}>
                            "Transparency about methodology is not a weakness in a clinical technology platform. It is the minimum standard of intellectual honesty."
                        </p>
                    </div>
                </div>

                {/* ── Section 3: System Operational Backbone ── */}
                <div style={{ background: '#F8F9FA', padding: '96px 24px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>
                        <div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', letterSpacing: 2.8, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                Core Infrastructure
                            </div>
                            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '40px', color: '#001736', margin: 0 }}>
                                System Operational Backbone
                            </h2>
                        </div>

                        {/* Grid: top row 2-col, bottom row 2-col */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                            {/* Unified Clinical Data Fabric — spans full width left, tall */}
                            <div style={{ padding: 32, background: 'white', borderRadius: '4px 0 0 0', borderLeft: '0px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div style={{ position: 'absolute', right: -60, bottom: -40, opacity: 0.1 }}>
                                    <IconSvg />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <rect x="1" y="1" width="6" height="6" rx="1" stroke="#006970" strokeWidth="1.5" />
                                        <rect x="11" y="1" width="6" height="6" rx="1" stroke="#006970" strokeWidth="1.5" />
                                        <rect x="6" y="11" width="6" height="6" rx="1" stroke="#006970" strokeWidth="1.5" />
                                        <path d="M4 7V11M14 7V11M9 7V11" stroke="#006970" strokeWidth="1" strokeDasharray="2 2" />
                                    </svg>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736' }}>
                                        Unified Clinical Data Fabric
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F', margin: 0, maxWidth: 512 }}>
                                        Our ingestion engine supports HL7 FHIR v4.0.1 natively, with a proprietary normalization layer that maps disparate EHR schemas into a high-fidelity clinical graph.
                                    </p>
                                </div>
                                <div style={{ display: 'flex', gap: 16, paddingTop: 48 }}>
                                    {complianceTags.map((tag) => (
                                        <span key={tag} style={{ padding: '4px 8px', background: '#E7E8E9', borderRadius: 2, fontFamily: "'Courier New', monospace", fontSize: 12, lineHeight: '16px', color: '#006970' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Zero-Trust Architecture */}
                            <div style={{ padding: 32, background: '#001736', borderRadius: '0 4px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                                        <path d="M8 1L1 4.5V9.5C1 14.2 3.87 18.55 8 19.5C12.13 18.55 15 14.2 15 9.5V4.5L8 1Z" stroke="#7DF4FF" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: 'white' }}>
                                        Zero-Trust Architecture
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#D6E3FF', margin: 0, opacity: 0.8 }}>
                                        End-to-end encryption with hardware-level security modules (HSM) for key management and automated threat detection.
                                    </p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#7DF4FF' }}>Security Whitepaper</span>
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="#7DF4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hybrid Multi-Cloud */}
                            <div style={{ padding: 32, background: '#F3F4F5', borderRadius: '0 0 0 4px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                                    <path d="M17 15H5C2.79 15 1 13.21 1 11C1 9.14 2.28 7.59 4 7.14C4 7.09 4 7.05 4 7C4 4.24 6.24 2 9 2C11.05 2 12.82 3.23 13.58 5C13.71 5 13.85 5 14 5C16.76 5 19 7.24 19 10" stroke="#001736" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736', marginTop: 16 }}>
                                    Hybrid Multi-Cloud
                                </div>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '22.75px', color: '#43474F', margin: 0 }}>
                                    Resilient infrastructure distributed across isolated regions to ensure 99.99% uptime for critical clinical operations.
                                </p>
                            </div>

                            {/* Bi-Directional Interoperability */}
                            <div style={{ padding: 32, background: 'white', borderRadius: '0 0 4px 0', borderLeft: '2px solid #006970', display: 'flex', alignItems: 'center', gap: 32 }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736', marginBottom: 8 }}>
                                        Bi-Directional Interoperability
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '22.75px', color: '#43474F', margin: 0 }}>
                                        ETOH doesn't just read data; it writes structured clinical notes and orders back to your core system via secure, audited API gateways.
                                    </p>
                                </div>
                                <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
                                    <path d="M4 12H36M36 12L28 4M36 12L28 20" stroke="#006970" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M36 24H4M4 24L12 16M4 24L12 32" stroke="#006970" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Section 4: AI Validation & Boundaries ── */}
                <div style={{ background: '#F3F4F5', padding: '96px 24px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

                        {/* Left: copy + cards */}
                        <div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', letterSpacing: 2.8, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                Methodological Honesty
                            </div>
                            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '40px', color: '#001736', margin: '0 0 16px' }}>
                                AI Validation &amp; Current Boundaries
                            </h2>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F', margin: '0 0 40px' }}>
                                We believe that understanding where an AI system fails is as important as knowing where it succeeds. Our validation protocols involve rigorous internal testing and external clinical peer review.
                            </p>

                            {/* Current Capabilities */}
                            <div style={{ padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 2, marginBottom: 24 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#006970" strokeWidth="1.5" />
                                        <path d="M6 10L9 13L14 7" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736' }}>Current Capabilities</span>
                                </div>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F', margin: 0 }}>
                                    Validated for identifying early-stage sepsis markers with 94% sensitivity across diverse patient demographics.
                                </p>
                            </div>

                            {/* Identified Boundaries */}
                            <div style={{ padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 2, opacity: 0.8 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9" stroke="#BA1A1A" strokeWidth="1.5" />
                                        <path d="M10 6V10M10 14H10.01" stroke="#BA1A1A" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#747780' }}>Identified Boundaries</span>
                                </div>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F', margin: 0 }}>
                                    Currently not validated for pediatric intensive care or high-acuity trauma triage where data streams are highly intermittent.
                                </p>
                            </div>
                        </div>

                        {/* Right: Performance Benchmarks card */}
                        <div style={{ background: 'white', borderRadius: 4, boxShadow: '0px 8px 10px -6px rgba(0,0,0,0.10), 0px 20px 25px -5px rgba(0,0,0,0.10)', overflow: 'hidden' }}>
                            <div style={{ padding: 16, background: '#002B5B', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'white' }}>
                                    Performance Benchmarks
                                </span>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                                    <path d="M1 5.5H10M5.5 1V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div style={{ padding: '32px 24px 36px', display: 'flex', flexDirection: 'column', gap: 32 }}>
                                {benchmarks.map((b) => (
                                    <div key={b.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', color: '#001736' }}>{b.label}</span>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', color: b.color }}>{b.value}</span>
                                        </div>
                                        <div style={{ height: 6, background: '#E7E8E9', borderRadius: 12, overflow: 'hidden' }}>
                                            <div style={{ width: b.width, height: '100%', background: b.color, borderRadius: 12 }} />
                                        </div>
                                    </div>
                                ))}
                                <div style={{ borderTop: '1px solid rgba(196,198,208,0.20)', paddingTop: 24 }}>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, lineHeight: '12.5px', color: '#43474F', margin: 0 }}>
                                        *Benchmarks updated October 2024. Data based on multi-site clinical validation trials involving 14,000+ patient records.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Section 5: Technical Resources ── */}
                <div style={{ background: '#F8F9FA', padding: '96px 24px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', letterSpacing: 2.8, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                    Knowledge Base
                                </div>
                                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '40px', color: '#001736', margin: 0 }}>
                                    Technical Resources
                                </h2>
                            </div>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#006970', textDecoration: 'underline', cursor: 'pointer' }}>
                                View all documentation
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
                            {resources.map((r) => (
                                <div key={r.title} style={{ padding: 25, background: 'white', borderRadius: 4, outline: '1px solid rgba(196,198,208,0.15)', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', gap: 0, minHeight: 202 }}>
                                    <div style={{ marginBottom: 18 }}>
                                        <ResourceIcon type={r.icon} />
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 8 }}>
                                        {r.title}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#43474F', marginBottom: 24 }}>
                                        {r.meta}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto', cursor: 'pointer' }}>
                                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#006970' }}>
                                            {r.action}
                                        </span>
                                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                                            <path d="M1 7L7 1M7 1H2M7 1V6" stroke="#006970" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Section 6: CTA ── */}
                <div style={{ background: '#001736', padding: '96px 192px', position: 'relative', overflow: 'hidden' }}>
                    {/* Subtle grid lines */}
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', opacity: 0.1, pointerEvents: 'none' }}>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} style={{ flex: 1, borderRight: i < 11 ? '1px solid rgba(255,255,255,0.20)' : 'none' }} />
                        ))}
                    </div>
                    <div style={{ maxWidth: 896, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, position: 'relative' }}>
                        <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 48, lineHeight: '48px', textAlign: 'center', margin: 0 }}>
                            <span style={{ color: 'white' }}>Review our infrastructure with your </span>
                            <span style={{ color: '#7DF4FF' }}>IT Security Council.</span>
                        </h2>
                        <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
                            <button style={{ padding: '16px 32px', background: '#006970', borderRadius: 4, border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: 'white' }}>
                                Request Full Audit Report
                            </button>
                            <button style={{ padding: '16px 32px', background: 'transparent', borderRadius: 4, border: 'none', outline: '1px solid rgba(255,255,255,0.30)', outlineOffset: '-1px', cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: 'white' }}>
                                Speak to an Architect
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
