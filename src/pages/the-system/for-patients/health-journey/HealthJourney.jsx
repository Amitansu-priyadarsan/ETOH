import PageLayout from '../../../../components/PageLayout'
import bodyImg from './section2.png'

const insights = [
    {
        bg: '#96F1FA',
        iconColor: '#006F77',
        label: 'Circadian Alignment',
        text: 'Sleep architecture has improved by 14% since Tuesday.',
    },
    {
        bg: '#7DF4FF',
        iconColor: '#001B1D',
        label: 'Metabolic Shift',
        text: 'Glucose stabilization predicted within 48 hours.',
    },
]

const journeyItems = [
    {
        num: '01',
        title: 'Post-Discharge Baseline',
        desc: 'Simulated transition into home environment with active biometric monitoring.',
    },
    {
        num: '02',
        title: 'Lifestyle Optimization',
        desc: 'Adjusting nutrient density and activity levels based on twin simulation.',
    },
    {
        num: '03',
        title: 'Long-term Vitality',
        desc: 'Predictive modeling of cardiovascular health across the next decade.',
    },
]

export default function HealthJourneyPage() {
    return (
        <PageLayout fullWidth>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
                <div style={{ maxWidth: 1184, margin: '0 auto', padding: '64px 24px 0' }}>

                    {/* ── Hero ── */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, marginBottom: 48 }}>
                        <div style={{ maxWidth: 800 }}>
                            <h1 style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 800,
                                fontSize: 56,
                                lineHeight: '61.6px',
                                color: '#001736',
                                margin: '0 0 24px',
                            }}>
                                See your health, not just your<br />diagnosis.
                            </h1>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 400,
                                fontSize: 20,
                                lineHeight: '32.5px',
                                color: '#43474F',
                                maxWidth: 638,
                                margin: 0,
                            }}>
                                ETOH builds a living picture of each patient's health trajectory — so
                                that care decisions are grounded not just in what is happening now,
                                but in where each patient is headed.
                            </p>
                        </div>
                        {/* Model Status badge */}
                        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#747780' }}>
                                Model Status
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <div style={{ width: 8, height: 8, background: '#006970', borderRadius: '50%' }} />
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#006970' }}>
                                    REAL-TIME TWIN ACTIVE
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Main 2-column grid ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24, alignItems: 'start', marginBottom: 24 }}>

                        {/* LEFT — Predictive Trajectory Map */}
                        <div style={{
                            minHeight: 500,
                            padding: 32,
                            position: 'relative',
                            background: 'white',
                            borderRadius: 8,
                            outline: '1px solid rgba(196,198,208,0.20)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            {/* Subtle gradient overlay */}
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(21deg, rgba(0,23,54,0.05) 0%, rgba(0,23,54,0) 100%)', pointerEvents: 'none' }} />

                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
                                <div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 4 }}>
                                        Predictive Trajectory Map
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                        V0.94 Behavioral Bio-Integration
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                    <div style={{ padding: '4px 12px', background: '#E7E8E9', borderRadius: 12, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: '#191C1D' }}>
                                        6-Month Outlook
                                    </div>
                                    <div style={{ padding: '4px 12px', background: '#006970', borderRadius: 12, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: 'white' }}>
                                        Projected Path
                                    </div>
                                </div>
                            </div>

                            {/* Chart area */}
                            <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 40, paddingBottom: 40 }}>
                                <svg width="100%" height="256" viewBox="0 0 738 256" fill="none" style={{ overflow: 'visible' }}>
                                    {/* Baseline dashed reference line */}
                                    <line x1="0" y1="183" x2="738" y2="183" stroke="#C4C6D0" strokeWidth="1" strokeDasharray="4 4" />

                                    {/* Main trajectory curve */}
                                    <path
                                        d="M0 220 C60 215, 120 205, 180 198 C240 190, 260 185, 282 174 C320 158, 370 140, 456 91 C540 62, 620 54, 738 48"
                                        stroke="#006970"
                                        strokeWidth="2.5"
                                        fill="none"
                                        strokeLinecap="round"
                                    />
                                    {/* Projected dashed extension */}
                                    <path
                                        d="M738 48 C780 42, 810 38, 850 34"
                                        stroke="#006970"
                                        strokeWidth="2"
                                        strokeDasharray="5 4"
                                        fill="none"
                                    />

                                    {/* Optimization Point 1 */}
                                    <circle cx="282" cy="174" r="5.5" fill="#006970" />
                                    <text x="293" y="166" fill="#006970" fontSize="9" fontFamily="Inter">OPTIMIZATION POINT</text>

                                    {/* Optimization Point 2 */}
                                    <circle cx="456" cy="91" r="5.5" fill="#006970" />
                                </svg>

                                {/* Floating stats card */}
                                <div style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: 20,
                                    maxWidth: 280,
                                    padding: '16px',
                                    background: 'rgba(255,255,255,0.90)',
                                    borderRadius: 4,
                                    outline: '1px solid rgba(255,255,255,0.40)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0px 8px 10px -6px rgba(0,0,0,0.10), 0px 20px 25px -5px rgba(0,0,0,0.10)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4,
                                }}>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#747780' }}>
                                        Stability Probability
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 30, lineHeight: '36px', color: '#001736' }}>88%</div>
                                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none">
                                            <path d="M1 9L6 3L9 6L14 1" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 11, lineHeight: '13.75px', color: '#43474F' }}>
                                        Patient trajectory remains 12% above regional benchmark for recovery velocity.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — Recovery Velocity + Strategic Insights */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Recovery Velocity card */}
                            <div style={{
                                padding: '24px 24px 42px',
                                background: '#F3F4F5',
                                borderRadius: 8,
                                borderLeft: '2px solid #006970',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 24,
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {/* Speed icon */}
                                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none">
                                        <path d="M11 2C6 2 2 6.5 2 11H4C4 7.5 7 5 11 5C15 5 18 7.5 18 11H20C20 6.5 16 2 11 2Z" fill="#006970" />
                                        <path d="M11 7L8 13H14L11 7Z" fill="#006970" />
                                    </svg>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, lineHeight: '15px', letterSpacing: 2, textTransform: 'uppercase', color: '#747780' }}>
                                        Recovery Velocity
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                        <div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F', marginBottom: 4 }}>
                                                Current Phase
                                            </div>
                                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736' }}>
                                                Structural Integration
                                            </div>
                                        </div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 30, lineHeight: '36px', color: '#006970' }}>
                                            v4.2
                                        </div>
                                    </div>
                                    {/* Progress bar */}
                                    <div style={{ height: 4, background: '#E7E8E9', borderRadius: 12, overflow: 'hidden' }}>
                                        <div style={{ width: '68%', height: '100%', background: '#006970' }} />
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '19.5px', color: '#43474F' }}>
                                        Clinical markers indicate a successful pivot from acute stabilization to long-term neuro-regeneration.
                                    </div>
                                </div>
                            </div>

                            {/* Strategic Insights card */}
                            <div style={{
                                padding: '24px 24px 41px',
                                background: 'white',
                                borderRadius: 8,
                                outline: '1px solid rgba(196,198,208,0.20)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                            }}>
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 18, lineHeight: '28px', color: '#191C1D' }}>
                                    Strategic Insights
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    {insights.map((item) => (
                                        <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                            <div style={{ width: 32, height: 32, background: item.bg, borderRadius: 12, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                                                    <path d="M5 0C2.5 0 0 2.5 0 5C0 8 5 12 5 12C5 12 10 8 10 5C10 2.5 7.5 0 5 0Z" fill={item.iconColor} />
                                                </svg>
                                            </div>
                                            <div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: '#747780', marginBottom: 4 }}>
                                                    {item.label}
                                                </div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#191C1D' }}>
                                                    {item.text}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Journey Ahead section ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'center', marginBottom: 24 }}>

                        {/* Left — copy + items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                            <div>
                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#006970', marginBottom: 16 }}>
                                    The Journey Ahead
                                </div>
                                <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 36, lineHeight: '42px', color: '#001736', margin: 0 }}>
                                    Forward-Looking Maps for<br />Coordinated Care.
                                </h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                                {journeyItems.map((item, i) => (
                                    <div key={i} style={{
                                        paddingTop: 24,
                                        paddingBottom: 24,
                                        borderBottom: i < journeyItems.length - 1 ? '1px solid rgba(196,198,208,0.25)' : 'none',
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                                            <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736' }}>
                                                {item.num}. {item.title}
                                            </span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="#006970" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                            {item.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right — Digital body image with quote */}
                        <div style={{
                            position: 'relative',
                            borderRadius: 16,
                            overflow: 'hidden',
                            boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)',
                            height: 388,
                        }}>
                            <img
                                src={bodyImg}
                                alt="Digital Twin"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            {/* Dark multiply overlay */}
                            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,23,54,0.20)', mixBlendMode: 'multiply' }} />
                            {/* Gradient + quote */}
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                padding: 32,
                                background: 'linear-gradient(0deg, rgba(0,23,54,0.80) 0%, rgba(0,23,54,0) 100%)',
                            }}>
                                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '29.25px', color: 'white', margin: 0 }}>
                                    "The twin doesn't just show data; it tells your story in advance, allowing us to edit the future before it happens."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── CTA Bar ── */}
                    <div style={{
                        padding: 48,
                        background: '#001736',
                        borderRadius: 16,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 32,
                        marginBottom: 80,
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        {/* Subtle radial glow */}
                        <div style={{ position: 'absolute', right: -80, top: -80, width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,105,112,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                        <div>
                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: 'white', marginBottom: 8 }}>
                                Ready to explore your trajectory?
                            </div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#A9C7FF' }}>
                                Connect your wearable data to refine your Digital Twin accuracy.
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                            <button style={{
                                padding: '13px 32px',
                                background: 'linear-gradient(90deg, #006970 0%, #004F54 100%)',
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 700,
                                fontSize: 16,
                                lineHeight: '24px',
                                color: 'white',
                                whiteSpace: 'nowrap',
                            }}>
                                Initialize Sync
                            </button>
                            <button style={{
                                padding: '12px 32px',
                                background: 'transparent',
                                borderRadius: 6,
                                border: 'none',
                                outline: '1px solid rgba(255,255,255,0.20)',
                                cursor: 'pointer',
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 700,
                                fontSize: 16,
                                lineHeight: '24px',
                                color: 'white',
                                whiteSpace: 'nowrap',
                            }}>
                                View Data Logs
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </PageLayout>
    )
}
