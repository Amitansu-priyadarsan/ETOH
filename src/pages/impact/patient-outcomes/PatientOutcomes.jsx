import PageLayout from '../../../components/PageLayout'
import section4 from './section4.png'
import { useResponsive } from '../../../hooks/useResponsive'

export default function PatientOutcomesPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : 32

    return (
        <PageLayout title="Patient Outcomes" fullWidth={true}>

            {/* Section 1: Hero */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, position: 'relative', background: '#F8F9FA', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                {/* Teal glow */}
                <div style={{ width: 384, height: 384, position: 'absolute', right: 0, bottom: 0, background: 'rgba(0, 105, 112, 0.05)', borderRadius: 12, filter: 'blur(32px)', pointerEvents: 'none' }} />

                <div style={{ width: '100%', maxWidth: 1280, position: 'relative', display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: compact ? 'flex-start' : 'flex-end', gap: compact ? 40 : 80 }}>
                    {/* Heading */}
                    <div style={{ flex: 1.5 }}>
                        <div style={{ color: '#001736', fontSize: isMobile ? 40 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '56px' : '72px' }}>
                            What has actually changed. In the facilities we operate in, and the lives of the patients they serve.
                        </div>
                    </div>
                    {/* Subtitle */}
                    <div style={{ flex: 1, paddingLeft: 24, borderLeft: compact ? 'none' : '2px solid #006970', borderTop: compact ? '2px solid #006970' : 'none', paddingTop: compact ? 16 : 0 }}>
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                            The true measure of clinical architecture is found in the delta between traditional care and precision operations.
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2a: Patient Outcomes narrative */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 40 : 80, alignItems: 'flex-start' }}>
                    {/* Left: label + heading */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Section 01 / Patient Outcomes</div>
                        <div style={{ color: '#001736', fontSize: isMobile ? 32 : 48, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '36px' : '48px' }}>
                            If the patient&apos;s care did not improve, nothing we built mattered.
                        </div>
                    </div>
                    {/* Right: paragraphs */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, paddingTop: compact ? 0 : 48 }}>
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 300, lineHeight: '29.25px' }}>
                            ETOH tracks clinical outcomes across every deployed facility: diagnostic cycle times, care pathway adherence, medication safety incidents, avoidable readmission rates, length-of-stay efficiency, and patient-reported experience from admission through post-discharge recovery.
                        </div>
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 300, lineHeight: '29.25px' }}>
                            These numbers are published not because they are uniformly favorable but because they are honest — and because the discipline of tracking them, and being willing to publish them, is part of what it means to operate a clinical platform responsibly.
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2b: Outcome data cards */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F8F9FA', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: 64 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', alignItems: compact ? 'flex-start' : 'center', gap: 16 }}>
                        <div style={{ color: '#001736', fontSize: isMobile ? 22 : 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '36px' }}>Outcome data from deployed facilities</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 8, height: 8, background: '#006970', borderRadius: 12 }} />
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>Live System Verification</div>
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>

                        {/* Diagnostic Cycle Times — spans 2 cols on desktop */}
                        <div style={{ gridColumn: compact ? '1' : '1 / 3', padding: 40, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Diagnostic Cycle Times</div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
                                <div style={{ color: '#001736', fontSize: isMobile ? 48 : 60, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '52px' : '60px' }}>-22%</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, paddingBottom: 6 }}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8L6 0L12 8H0Z" fill="#006970"/>
                                    </svg>
                                    <div style={{ color: '#006970', fontSize: 16, fontFamily: 'Inter', fontWeight: 600, lineHeight: '24px' }}>improvement</div>
                                </div>
                            </div>
                            {/* Bar chart */}
                            <div style={{ paddingTop: 24, display: 'flex', alignItems: 'flex-end', gap: 4, height: 128 }}>
                                {[
                                    { h: 102, color: '#E7E8E9' },
                                    { h: 96, color: '#E7E8E9' },
                                    { h: 77, color: '#E7E8E9' },
                                    { h: 70, color: '#E7E8E9' },
                                    { h: 51, color: '#006970' },
                                    { h: 45, color: '#006970' },
                                    { h: 32, color: '#006970' },
                                ].map((bar, i) => (
                                    <div key={i} style={{ flex: 1, height: bar.h, background: bar.color, borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />
                                ))}
                            </div>
                        </div>

                        {/* Care Pathway Adherence — col 3 desktop */}
                        <div style={{ padding: 40, background: '#001736', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <div style={{ color: '#A9C7FF', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Care Pathway Adherence</div>
                                <div style={{ color: 'white', fontSize: 72, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '72px' }}>94%</div>
                                <div style={{ color: '#7594CA', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                    Precision adherence across 12,000+ individual patient journeys in Q3-Q4.
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ color: 'white', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, lineHeight: '16px', opacity: 0.60 }}>TARGET: 90%</div>
                                <div style={{ width: 96, height: 4, background: '#264778', borderRadius: 12, overflow: 'hidden', position: 'relative' }}>
                                    <div style={{ width: '94%', height: '100%', background: '#006970', position: 'absolute', left: 0, top: 0 }} />
                                </div>
                            </div>
                        </div>

                        {/* Medication Safety Incidents */}
                        <div style={{ padding: 40, background: '#F3F4F5', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Medication Safety Incidents</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#BA1A1A"/>
                                </svg>
                                <div style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '40px' }}>-41%</div>
                            </div>
                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                Significant reduction in near-miss events through automated cross-check infrastructure.
                            </div>
                        </div>

                        {/* Avoidable Readmission Rates */}
                        <div style={{ padding: 40, background: '#F3F4F5', borderRadius: 8, borderLeft: '2px solid rgba(0, 105, 112, 0.20)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Avoidable Readmission Rates</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <svg width="22" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 6.5L12 15.5L7 10.5L3 14.5" stroke="#006970" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 6.5H21V10.5" stroke="#006970" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <div style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '40px' }}>12.4%</div>
                            </div>
                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                A 15% delta versus national averages for comparable acuity facilities.
                            </div>
                        </div>

                        {/* Patient Experience Scores */}
                        <div style={{ padding: 40, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Patient Experience Scores</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {[
                                    { label: 'Facility Trust', score: '4.8/5' },
                                    { label: 'Care Clarity', score: '4.9/5' },
                                    { label: 'Post-Op Support', score: '4.7/5' },
                                ].map(({ label, score }) => (
                                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '1px solid #EDEEEF' }}>
                                        <div style={{ color: '#191C1D', fontSize: 14, fontFamily: 'Inter', fontWeight: 500, lineHeight: '20px' }}>{label}</div>
                                        <div style={{ color: '#191C1D', fontSize: 16, fontFamily: 'Inter', fontWeight: 700, lineHeight: '24px' }}>{score}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Section 3: Quote banner */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, height: isMobile ? 'auto' : 500, position: 'relative', overflow: 'hidden', borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={section4} alt="Clinical data review" />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 23, 54, 0.60)', backdropFilter: 'blur(1px)' }} />
                    <div style={{ position: 'relative', maxWidth: 672, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: isMobile ? '64px 16px' : 48, textAlign: 'center' }}>
                        <div style={{ color: 'white', fontSize: isMobile ? 24 : 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '32px' : '49.5px' }}>
                            &quot;Data is not just a metric; it is the evidence of our commitment to the patient.&quot;
                        </div>
                        <div style={{ width: 96, height: 4, background: '#006970', flexShrink: 0 }} />
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
