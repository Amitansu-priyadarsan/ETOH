import PageLayout from '../../../../components/PageLayout'
import clinicalImg from './section3.png'

const careTeam = [
    { name: 'Dr. Julian Vane', role: 'Lead Internist' },
    { name: 'Elena Russo, RN', role: 'Primary Nurse' },
    { name: 'Dr. Marcus Thorne', role: 'Radiologist' },
]

const schedule = [
    { time: '02:00', period: 'PM', title: 'Medication Review', desc: 'Pharmacy will deliver the updated stabilization dosage. Elena will assist with administration.', active: true },
    { time: '06:00', period: 'PM', title: 'Vitals Check-In', desc: 'A routine measurement of blood pressure and temperature to track progress.', active: false },
    { time: '09:00', period: 'AM', title: 'Consultation with Dr. Vane', desc: 'Morning rounds to discuss potential discharge timeline and home-care plan.', active: false },
]

export default function PatientAppPage() {
    return (
        <PageLayout fullWidth>
            <div style={{ background: 'white', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
                <div style={{ maxWidth: 1184, margin: '0 auto', padding: '64px 24px 80px' }}>

                    {/* ── Hero ── */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, marginBottom: 48 }}>
                        <div style={{ flex: 1 }}>
                            <h1 style={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 800,
                                fontSize: 72,
                                lineHeight: '72px',
                                color: '#001736',
                                margin: '0 0 24px',
                            }}>
                                Your care, made visible.<br />
                                Your health, made<br />
                                understandable.
                            </h1>
                            <p style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 300,
                                fontSize: 20,
                                lineHeight: '32.5px',
                                color: '#43474F',
                                maxWidth: 636,
                                margin: 0,
                            }}>
                                A hospital admission involves hundreds of decisions made about the<br />
                                patient. ETOH ensures the patient is never outside of it.
                            </p>
                        </div>
                        <div style={{
                            flexShrink: 0,
                            padding: '16px 24px',
                            background: '#F3F4F5',
                            borderRadius: 8,
                            borderLeft: '4px solid #006970',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                            alignSelf: 'flex-end',
                        }}>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.8, textTransform: 'uppercase', color: '#006970' }}>
                                Current Status
                            </div>
                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 18, lineHeight: '28px', color: '#001736' }}>
                                Observation Room 4B
                            </div>
                        </div>
                    </div>

                    {/* ── 2-column grid (persists for all content below hero) ── */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24, alignItems: 'start' }}>

                        {/* LEFT COLUMN — Care Journey · Diagnostic Translation · Next 24 Hours */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Care Journey */}
                            <div style={{ padding: 32, background: '#F3F4F5', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 40, position: 'relative' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736' }}>
                                        The Care Journey
                                    </div>
                                    <div style={{ padding: '4px 12px', background: '#006970', borderRadius: 12, fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 0.6, textTransform: 'uppercase', color: 'white' }}>
                                        Live Path
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 32 }}>
                                    {/* Connector line */}
                                    <div style={{ position: 'absolute', left: 11, top: 16, width: 2, height: 216, background: 'rgba(196,198,208,0.30)' }} />

                                    {/* Step 1 — Completed */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                                        <div style={{ paddingTop: 4, flexShrink: 0 }}>
                                            <div style={{ width: 24, height: 24, background: '#006970', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 4 }}>
                                                Admission &amp; Triage
                                            </div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                Initial assessment completed at 08:45 AM. Dr. Aris confirmed clinical stability.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2 — In Progress */}
                                    <div style={{ padding: 20, marginLeft: -20, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                                        <div style={{ paddingTop: 4, flexShrink: 0 }}>
                                            <div style={{ position: 'relative', width: 24, height: 24 }}>
                                                <div style={{ width: 24, height: 24, background: '#006970', borderRadius: '50%', position: 'absolute' }} />
                                                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: '0 0 0 4px rgba(0,105,112,0.20)' }} />
                                            </div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736' }}>
                                                    Diagnostic Phase
                                                </div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 10, lineHeight: '15px', letterSpacing: 1, textTransform: 'uppercase', color: '#006970' }}>
                                                    In Progress
                                                </div>
                                            </div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                Blood panel results analyzed. Translating technical findings for your review.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3 — Pending */}
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, opacity: 0.5 }}>
                                        <div style={{ paddingTop: 4, flexShrink: 0 }}>
                                            <div style={{ width: 24, height: 24, background: '#F8F9FA', borderRadius: '50%', border: '2px solid #C4C6D0' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 4 }}>
                                                Stabilization Protocol
                                            </div>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                Expected to begin once vitals trend remains consistent for 4 hours.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Diagnostic Translation */}
                            <div style={{ padding: 32, background: '#F3F4F5', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 32 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 4 }}>
                                            Diagnostic Translation
                                        </div>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                            Medical data converted to clear, understandable language.
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        {['Hematology', 'Vitals'].map((tag) => (
                                            <div key={tag} style={{ padding: '8px 16px', background: 'white', borderRadius: 12, outline: '1px solid rgba(196,198,208,0.20)', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', color: '#191C1D' }}>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                                    {/* WBC */}
                                    <div style={{ padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: '8px 0 0 8px', borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none">
                                                <path d="M7 0C7 0 0 7.5 0 12a7 7 0 0014 0C14 7.5 7 0 7 0z" fill="#006970" />
                                            </svg>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F' }}>
                                                White Blood Count
                                            </div>
                                        </div>
                                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: '26px', color: '#001736', margin: 0 }}>
                                            Your body's defense system is currently slightly elevated (11.2 K/uL). This is a normal response as your body fights the localized inflammation we discussed.
                                        </p>
                                    </div>
                                    {/* O2 */}
                                    <div style={{ padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: '0 8px 8px 0', borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                                                <path d="M10 0C4.477 0 0 3.582 0 8s4.477 8 10 8 10-3.582 10-8-4.477-8-10-8z" fill="#006970" />
                                            </svg>
                                            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#43474F' }}>
                                                Oxygen Saturation
                                            </div>
                                        </div>
                                        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 16, lineHeight: '26px', color: '#001736', margin: 0 }}>
                                            Your oxygen levels are holding steady at 98% on room air. This indicates your lungs are functioning exceptionally well during recovery.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Next 24 Hours */}
                            <div style={{ padding: 32, background: '#F3F4F5', borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 32 }}>
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736' }}>
                                    The Next 24 Hours
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    {schedule.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                                            <div style={{ width: 64, flexShrink: 0, textAlign: 'right' }}>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 14, lineHeight: '20px', color: item.active ? '#006970' : '#43474F' }}>
                                                    {item.time}<br />{item.period}
                                                </div>
                                            </div>
                                            <div style={{ flex: 1, paddingBottom: i < schedule.length - 1 ? 24 : 0, borderBottom: i < schedule.length - 1 ? '1px solid rgba(196,198,208,0.20)' : 'none' }}>
                                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '24px', color: '#001736', marginBottom: 4 }}>
                                                    {item.title}
                                                </div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: '#43474F' }}>
                                                    {item.desc}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>{/* end LEFT COLUMN */}

                        {/* RIGHT COLUMN — Care Team · Clinical Prediction */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

                            {/* Care Team */}
                            <div style={{ padding: 32, background: 'white', boxShadow: '0px 1px 2px rgba(0,0,0,0.05)', borderRadius: 16, outline: '1px solid rgba(196,198,208,0.10)' }}>
                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#001736', marginBottom: 32 }}>
                                    Your Care Team
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 32 }}>
                                    {careTeam.map((member) => (
                                        <div key={member.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                            <img src="https://placehold.co/56x56" alt={member.name} style={{ width: 56, height: 56, borderRadius: 12, flexShrink: 0 }} />
                                            <div>
                                                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 16, lineHeight: '20px', color: '#001736' }}>
                                                    {member.name}
                                                </div>
                                                <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, lineHeight: '16px', letterSpacing: 0.3, textTransform: 'uppercase', color: '#006970', marginTop: 2 }}>
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ borderTop: '1px solid rgba(196,198,208,0.10)', paddingTop: 32 }}>
                                    <button style={{ width: '100%', padding: '16px', background: '#001736', borderRadius: 8, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M14 10.667c0 .266-.059.525-.173.778a2.04 2.04 0 01-.493.689c-.378.355-.789.525-1.223.525-.311 0-.645-.074-.993-.229a9.917 9.917 0 01-1.007-.533 15.56 15.56 0 01-.963-.74 15.368 15.368 0 01-.918-.933 15.52 15.52 0 01-.741-.963c-.23-.333-.43-.666-.578-.992C6.767 7.822 6.7 7.489 6.7 7.17c0-.311.066-.608.2-.882.133-.281.333-.54.607-.763.33-.267.688-.393 1.07-.393.148 0 .296.03.43.089.14.059.266.148.37.281l1.274 1.793c.104.14.178.274.23.4.052.118.081.237.081.348 0 .14-.037.281-.111.415a1.908 1.908 0 01-.296.393l-.4.415c-.059.059-.082.125-.082.207 0 .044.007.082.022.126.022.044.044.081.059.118.104.192.282.44.533.74.26.3.534.607.83.907.303.3.6.578.908.837.3.252.548.422.748.526.03.014.067.03.11.044.045.015.09.022.134.022.09 0 .156-.03.215-.089l.4-.392c.126-.126.26-.222.386-.289.126-.066.252-.103.393-.103.11 0 .222.022.348.074.126.052.26.126.4.23l1.815 1.289c.133.096.222.214.274.348.044.133.073.267.073.407z" fill="white" />
                                        </svg>
                                        <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', letterSpacing: 0.35, color: 'white' }}>
                                            Contact Specialist
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Clinical Prediction */}
                            <div style={{ background: '#001736', boxShadow: '0px 25px 50px -12px rgba(0,0,0,0.25)', borderRadius: 16, overflow: 'hidden' }}>
                                <div style={{ position: 'relative', height: 192 }}>
                                    <img src={clinicalImg} alt="Clinical Prediction" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, #001736 0%, rgba(0,23,54,0.40) 50%, rgba(0,23,54,0) 100%)' }} />
                                    <div style={{ position: 'absolute', left: 24, bottom: 24 }}>
                                        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 10, lineHeight: '15px', letterSpacing: 2, textTransform: 'uppercase', color: '#2DD4BF', marginBottom: 2 }}>
                                            Predictive Modeling
                                        </div>
                                        <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: '28px', color: 'white' }}>
                                            Clinical Prediction
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '30px 32px 32px', display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '22.75px', color: '#7594CA', margin: 0 }}>
                                        Your Digital Twin indicates a 94% probability of recovery acceleration if hydration levels are maintained above 2.5L today.
                                    </p>
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: '20px', color: 'rgba(117,148,202,0.80)' }}>
                                                Recovery Confidence
                                            </span>
                                            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#2DD4BF' }}>
                                                High
                                            </span>
                                        </div>
                                        <div style={{ height: 4, background: '#002B5B', borderRadius: 12, overflow: 'hidden' }}>
                                            <div style={{ width: '94%', height: '100%', background: '#2DD4BF' }} />
                                        </div>
                                    </div>
                                    <button style={{ width: '100%', padding: '16px', background: 'white', borderRadius: 4, border: 'none', cursor: 'pointer', fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 12, lineHeight: '16px', letterSpacing: 1.2, textTransform: 'uppercase', color: '#001736' }}>
                                        Explore Detailed Model
                                    </button>
                                </div>
                            </div>

                        </div>{/* end RIGHT COLUMN */}

                    </div>{/* end 2-column grid */}

                </div>
            </div>
        </PageLayout>
    )
}
