import PageLayout from '../../../components/PageLayout'
import labImg from './section2.png'

const outcomeMeasures = [
    {
        title: 'Diagnostic cycle times',
        desc: 'Reduction in mean time from ingestion to actionable diagnostic output.',
        icon: (
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M1 8H19M10 1V15M4 3L1 8L4 13M16 3L19 8L16 13" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Care pathway adherence',
        desc: 'Statistical compliance with evidence-based clinical guidelines at scale.',
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1L11.5 6.5L17 7.3L13 11.2L14 17L9 14.3L4 17L5 11.2L1 7.3L6.5 6.5L9 1Z" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Avoidable adverse events',
        desc: 'Longitudinal monitoring of sentinel events and near-miss prevention.',
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="#006970" strokeWidth="1.5" />
                <path d="M10 6V10M10 14H10.01" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Patient experience',
        desc: 'Patient-reported experience measures across the full episode of care.',
        icon: (
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                <path d="M1 8H4L6 2L10 14L13 8H18" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

const publications = [
    {
        journal: 'JAMA NEUROLOGY / 2024',
        title: 'Algorithmic Accountability in Acute Stroke Diagnosis',
    },
    {
        journal: 'THE LANCET DIGITAL HEALTH / 2023',
        title: 'Real-world Validation of Autonomous Triage in ICU Settings',
    },
]

const tableRows = [
    { tier: 'Tertiary Academic', metric: '99.4% Uptime', status: 'Verified', verified: true },
    { tier: 'Community Rural', metric: 'Edge-Case Alerting', status: 'Verified', verified: true },
    { tier: 'Specialty Surgical', metric: 'Pathway Adherence', status: 'In-Progress', verified: false },
]

export default function ClinicalEvidencePage() {
    return (
        <PageLayout fullWidth>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 120px' }}>

                    {/* ── Section 1: Hero ── */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 80, marginBottom: 128 }}>
                        {/* Left: copy */}
                        <div style={{ maxWidth: 581, display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <div style={{
                                display: 'inline-flex',
                                alignSelf: 'flex-start',
                                padding: '4px 12px',
                                background: '#F3F4F5',
                            }}>
                                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '15px', letterSpacing: 2, textTransform: 'uppercase', color: '#006970' }}>
                                    Position Statement 01-A
                                </span>
                            </div>
                            <h1 style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 800,
                                fontSize: 60,
                                lineHeight: '60px',
                                color: '#001736',
                                margin: 0,
                            }}>
                                A clinical AI platform that cannot account for its own outcomes has no business operating in a hospital.
                            </h1>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: 20,
                                lineHeight: '32.5px',
                                color: '#43474F',
                                margin: '8px 0 0',
                            }}>
                                ETOH holds its systems to clinical evidence standards, not marketing standards. What we publish reflects both what the evidence supports and where it is still being built.
                            </p>
                        </div>

                        {/* Right: image */}
                        <div style={{
                            flex: '0 0 380px',
                            height: 416,
                            borderRadius: 8,
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                        }}>
                            <img
                                src={labImg}
                                alt="Clinical Research"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                        </div>
                    </div>

                    {/* ── Section 2: Honest record ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 128 }}>
                        {/* Left: image again (smaller) */}
                        <div style={{ borderRadius: 8, overflow: 'hidden', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', height: 360, position: 'relative' }}>
                            <img
                                src={labImg}
                                alt="Clinical Lab"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                        </div>
                        {/* Right: copy */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: '#001736', margin: 0 }}>
                                The honest record of what ETOH does and does not change.
                            </h2>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F', margin: 0 }}>
                                Clinical evidence for ETOH is built prospectively, in real deployment settings, against outcome measures that reflect actual clinical value.
                            </p>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F', margin: 0 }}>
                                We do not calibrate our research agenda to produce favorable results — we calibrate it to produce accurate ones, because accurate results are the only foundation on which a clinical platform can be responsibly scaled.
                            </p>
                        </div>
                    </div>

                    {/* ── Section 3: Primary Outcome Measures ── */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, marginBottom: 128 }}>
                        {/* Section label + divider */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#747780', flexShrink: 0 }}>
                                Primary Outcome Measures
                            </span>
                            <div style={{ flex: 1, height: 1, background: 'rgba(196,198,208,0.20)' }} />
                        </div>

                        {/* 4 metric cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
                            {outcomeMeasures.map((item) => (
                                <div key={item.title} style={{
                                    padding: '32px 34px',
                                    background: 'white',
                                    borderLeft: '2px solid #006970',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 0,
                                    outline: '1px solid rgba(196,198,208,0.15)',
                                    outlineOffset: '-1px',
                                }}>
                                    <div style={{ marginBottom: 24 }}>{item.icon}</div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 8 }}>
                                        {item.title}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── Section 4: Publications + Outcomes + Table ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 48, alignItems: 'start' }}>

                        {/* Left: Publications */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736', margin: 0 }}>
                                Publications
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {publications.map((pub) => (
                                    <div key={pub.journal} style={{ padding: 24, background: '#F3F4F5', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 10, lineHeight: '15px', color: '#006970' }}>
                                            {pub.journal}
                                        </div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#191C1D' }}>
                                            {pub.title}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                            <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                                                <path d="M1 1H5L7 3V9H1V1Z" stroke="#747780" strokeWidth="1" />
                                                <path d="M5 1V3H7" stroke="#747780" strokeWidth="1" />
                                            </svg>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', color: '#747780' }}>PDF</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Outcome Studies + Deployment table */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

                            {/* Outcome Studies dark card */}
                            <div style={{
                                padding: 48,
                                background: '#001736',
                                borderRadius: 8,
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                            }}>
                                {/* Teal glow */}
                                <div style={{ position: 'absolute', right: -80, top: 50, width: 256, height: 256, background: 'rgba(0,105,112,0.20)', borderRadius: 12, filter: 'blur(32px)', pointerEvents: 'none' }} />

                                <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: 'white', margin: 0 }}>
                                    Outcome Studies
                                </h3>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#7594CA', margin: 0, maxWidth: 512 }}>
                                    Active longitudinal studies evaluating clinical impact across 14 global health systems.
                                </p>

                                {/* Stats row */}
                                <div style={{ display: 'flex', gap: 64, paddingTop: 16 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 900, fontSize: 36, lineHeight: '40px', color: '#96F1FA' }}>88%</div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'white' }}>
                                            Pathway Consistency
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 900, fontSize: 36, lineHeight: '40px', color: '#96F1FA' }}>-22min</div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'white' }}>
                                            Mean Triage Latency
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Deployment Validation table */}
                            <div style={{ padding: 32, outline: '1px solid #C4C6D0', outlineOffset: '-1px', borderRadius: 4, display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <h3 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736', margin: 0 }}>
                                    Deployment Validation Data
                                </h3>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '1px solid #C4C6D0' }}>
                                            {['Facility Tier', 'Metric', 'Verification'].map((col) => (
                                                <th key={col} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '12px', letterSpacing: 1, textTransform: 'uppercase', color: '#747780', textAlign: 'left', padding: '16px 2px' }}>
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableRows.map((row, i) => (
                                            <tr key={row.tier} style={{ borderBottom: i < tableRows.length - 1 ? '1px solid #EDEEEF' : 'none' }}>
                                                <td style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14, lineHeight: '20px', color: '#191C1D', padding: '16px 2px' }}>
                                                    {row.tier}
                                                </td>
                                                <td style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#191C1D', padding: '16px 2px' }}>
                                                    {row.metric}
                                                </td>
                                                <td style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: row.verified ? '#006970' : '#747780', padding: '16px 2px' }}>
                                                    {row.status}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}
