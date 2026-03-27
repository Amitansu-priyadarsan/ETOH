import PageLayout from '../../../../components/PageLayout'
import heroImg from './hero.png'
import appImg from './setion 4.png'

const featureCards = [
    {
        icon: (
            <svg width="18" height="23" viewBox="0 0 18 23" fill="none">
                <path d="M9 0C4.03 0 0 4.03 0 9C0 15.75 9 23 9 23C9 23 18 15.75 18 9C18 4.03 13.97 0 9 0ZM9 12C7.34 12 6 10.66 6 9C6 7.34 7.34 6 9 6C10.66 6 12 7.34 12 9C12 10.66 10.66 12 9 12Z" fill="#006970" />
            </svg>
        ),
        title: 'Smart Pharmacy Coordination',
        desc: 'Automatic medication synchronization with your local specialist. Dose adjustments are updated instantly in your recovery portal based on Digital Twin telemetry.',
        iconColor: '#006970',
    },
    {
        icon: (
            <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
                <path d="M27 0H3C1.35 0 0 1.35 0 3V21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM15 6C16.66 6 18 7.34 18 9C18 10.66 16.66 12 15 12C13.34 12 12 10.66 12 9C12 7.34 13.34 6 15 6ZM24 20H6V18.75C6 16.5 10.5 15 15 15C19.5 15 24 16.5 24 18.75V20Z" fill="#006970" />
            </svg>
        ),
        title: 'Specialist On-Call',
        desc: 'Direct encrypted channels to your dedicated recovery coordinator. No call centers, no delays—just immediate access to the clinical experts who know your history.',
        iconColor: '#006970',
    },
    {
        icon: (
            <svg width="20" height="25" viewBox="0 0 20 25" fill="none">
                <path d="M10 0L0 4.5V11.5C0 17.89 4.27 23.86 10 25C15.73 23.86 20 17.89 20 11.5V4.5L10 0ZM11 17H9V15H11V17ZM11 13H9V7H11V13Z" fill="#BA1A1A" />
            </svg>
        ),
        title: 'Predictive Alerts',
        desc: 'If your recovery deviates from the expected architectural path, the system flags it immediately to our clinical response team.',
        iconColor: '#BA1A1A',
    },
]

const roadmapSteps = [
    {
        num: '01',
        active: true,
        title: 'Initial Stabilization (Hours 0-24)',
        desc: 'Continuous vitals monitoring via wearable sync. Pharmacy delivery of medication pack to your doorstep.',
    },
    {
        num: '02',
        active: false,
        title: 'Digital Twin Optimization (Days 2-7)',
        desc: 'First specialist check-in via secure video Link. Baseline data comparison to verify trajectory.',
    },
    {
        num: '03',
        active: false,
        title: 'Long-term Surveillance (Day 8+)',
        desc: 'Passive monitoring protocol activates. Health insights and preventative lifestyle adjustments.',
        last: true,
    },
]

export default function PostDischargePage() {
    return (
        <PageLayout fullWidth>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

                {/* ── Section 1: Hero ── */}
                <div style={{ background: '#F3F4F5', padding: '80px 96px', overflow: 'hidden' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: 64 }}>
                        {/* Left copy */}
                        <div style={{ flex: '0 0 614px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', letterSpacing: 2.8, textTransform: 'uppercase', color: '#006970' }}>
                                Post-Discharge &amp; Continuity
                            </div>
                            <h1 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 72, lineHeight: '72px', color: '#001736', margin: 0 }}>
                                Discharge is not<br />the end of care.<br />ETOH does not<br />treat it as one.
                            </h1>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 20, lineHeight: '32.5px', color: '#43474F', margin: 0, maxWidth: 572, paddingTop: 8 }}>
                                The moment a patient leaves the hospital is when the care most hospitals provide ends. For ETOH, it is simply where one phase ends and another begins.
                            </p>
                        </div>
                        {/* Right image */}
                        <div style={{ flex: 1, position: 'relative', height: 512, borderRadius: 8, overflow: 'hidden', background: 'white' }}>
                            <img
                                src={heroImg}
                                alt="Continuity of Care"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,23,54,0.40) 0%, rgba(0,23,54,0) 100%)' }} />
                        </div>
                    </div>
                </div>

                {/* ── Section 2: Features Grid ── */}
                <div style={{ background: '#F8F9FA', padding: '96px 96px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

                        {/* Top row: Digital Twin Mapping + Home Recovery Status */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>

                            {/* Continuous Digital Twin Mapping */}
                            <div style={{
                                padding: 40,
                                background: 'white',
                                borderRadius: 8,
                                borderLeft: '2px solid #006970',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 32,
                                position: 'relative',
                                overflow: 'hidden',
                            }}>
                                {/* Decorative bg element */}
                                <div style={{ position: 'absolute', right: -48, bottom: -48, width: 240, height: 240, background: '#191C1D', opacity: 0.05, borderRadius: 0 }} />

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <svg width="30" height="29" viewBox="0 0 30 29" fill="none">
                                            <path d="M15 0C10 0 5 2.5 2.5 7L0 14L2.5 21C5 25.5 10 28 15 28C20 28 25 25.5 27.5 21L30 14L27.5 7C25 2.5 20 0 15 0ZM15 20C11.69 20 9 17.31 9 14C9 10.69 11.69 8 15 8C18.31 8 21 10.69 21 14C21 17.31 18.31 20 15 20Z" fill="#006970" />
                                        </svg>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736' }}>
                                            Continuous Digital Twin Mapping
                                        </div>
                                    </div>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '29.25px', color: '#43474F', margin: 0, maxWidth: 576 }}>
                                        Your recovery is monitored against a high-fidelity digital simulation. By comparing real-time vitals to your personalized baseline, our systems identify microscopic deviations before they manifest as complications.
                                    </p>
                                </div>

                                {/* Progress bar + stats */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ height: 4, background: '#E7E8E9', borderRadius: 12, overflow: 'hidden' }}>
                                        <div style={{ width: '83%', height: '100%', background: '#006970', borderRadius: 12 }} />
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F' }}>
                                            Biometric Sync: Active
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F' }}>
                                            Analysis Precision: 99.8%
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Home-Recovery Phase 1 */}
                            <div style={{
                                padding: 40,
                                background: '#002B5B',
                                borderRadius: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: 24,
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: 'rgba(117,148,202,0.70)' }}>
                                        Status Update
                                    </div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: 'white' }}>
                                        Home-Recovery<br />Phase 1
                                    </div>
                                </div>
                                <div style={{
                                    padding: 24,
                                    background: 'rgba(255,255,255,0.10)',
                                    borderRadius: 4,
                                    backdropFilter: 'blur(6px)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 14, lineHeight: '20px', color: '#7594CA' }}>Mobility Goal</span>
                                        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#7594CA' }}>85%</span>
                                    </div>
                                    <div style={{ height: 4, background: 'rgba(255,255,255,0.20)', borderRadius: 12, overflow: 'hidden' }}>
                                        <div style={{ width: '85%', height: '100%', background: '#96F1FA', borderRadius: 12 }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom row: 3 feature cards */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                            {featureCards.map((card) => (
                                <div key={card.title} style={{
                                    padding: '40px 40px 48px',
                                    background: '#F3F4F5',
                                    borderRadius: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 0,
                                }}>
                                    <div style={{ marginBottom: 40 }}>{card.icon}</div>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 16 }}>
                                        {card.title}
                                    </div>
                                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '26px', color: '#43474F' }}>
                                        {card.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Section 3: App / "Actionable Tranquility" ── */}
                <div style={{ background: 'white', padding: '128px 96px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 96 }}>

                        {/* Left — phone mockup image */}
                        <div style={{ flex: 1, position: 'relative' }}>
                            {/* Teal glow */}
                            <div style={{ position: 'absolute', left: -48, top: -48, width: 256, height: 256, background: 'rgba(0,105,112,0.05)', borderRadius: 12, filter: 'blur(32px)' }} />
                            <div style={{ padding: 8, background: 'rgba(255,255,255,0.80)', borderRadius: 16, backdropFilter: 'blur(12px)', position: 'relative' }}>
                                <img
                                    src={appImg}
                                    alt="Recovery Monitoring App"
                                    style={{ width: '100%', height: 270, objectFit: 'cover', borderRadius: 8, boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', display: 'block' }}
                                />
                            </div>
                        </div>

                        {/* Right — copy + CTA */}
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                            <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 36, lineHeight: '45px', color: '#001736', margin: 0 }}>
                                Your health data, translated<br />into actionable tranquility.
                            </h2>
                            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: '29.25px', color: '#43474F', margin: 0 }}>
                                We believe that information without context creates anxiety. Our post-discharge platform doesn't just show you numbers; it explains what they mean for your specific recovery timeline. It is clinical authority in the palm of your hand.
                            </p>
                            <button style={{
                                display: 'inline-flex',
                                alignSelf: 'flex-start',
                                alignItems: 'center',
                                gap: 12,
                                padding: '16px 32px',
                                background: 'linear-gradient(90deg, #001736 0%, #002B5B 100%)',
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 700,
                                fontSize: 14,
                                lineHeight: '20px',
                                letterSpacing: 1.4,
                                textTransform: 'uppercase',
                                color: 'white',
                            }}>
                                Enter Recovery Portal
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Section 4: Post-Discharge Roadmap ── */}
                <div style={{ background: '#F8F9FA', padding: '96px 256px' }}>
                    <div style={{ maxWidth: 768, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 64 }}>
                        <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: '36px', color: '#001736', textAlign: 'center', margin: 0 }}>
                            Your Post-Discharge Roadmap
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                            {roadmapSteps.map((step) => (
                                <div key={step.num} style={{ display: 'flex', alignItems: 'flex-start', gap: 32 }}>
                                    {/* Number + connector line */}
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                                        <div style={{
                                            width: 48,
                                            height: 31,
                                            background: step.active ? '#006970' : '#E7E8E9',
                                            borderRadius: 12,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 16,
                                            color: step.active ? 'white' : '#001736',
                                        }}>
                                            {step.num}
                                        </div>
                                        {!step.last && (
                                            <div style={{ width: 1, flex: 1, minHeight: 48, background: '#E7E8E9', marginTop: 16 }} />
                                        )}
                                    </div>
                                    {/* Content */}
                                    <div style={{ paddingBottom: step.last ? 0 : 48, paddingTop: 4, flex: 1 }}>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: '#001736', marginBottom: 8 }}>
                                            {step.title}
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#43474F' }}>
                                            {step.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
