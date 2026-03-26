import PageLayout from '../../../components/PageLayout'

export default function InsightsPage() {
    return (
        <PageLayout title="" fullWidth={true}>
            <div style={{ paddingLeft: 24, paddingRight: 24 }}>

                {/* Section 1 — Hero */}
                <div style={{ paddingTop: 80, paddingBottom: 96, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex' }}>
                    <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#96F1FA', borderRadius: 12, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006F77', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2, wordWrap: 'break-word' }}>Proprietary Vantage</div>
                    </div>
                    <div style={{ paddingBottom: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 72, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '72px', wordWrap: 'break-word' }}>We operate at scale. That<br />vantage point produces<br />knowledge no analyst can<br />manufacture from the<br />outside.</div>
                    </div>
                    <div style={{ width: 96, height: 4, background: '#006970' }} />
                </div>

                {/* Section 2 — Two column: System Intelligence + Clinical Perspectives */}
                <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, paddingBottom: 96 }}>

                    {/* Left column — System Intelligence */}
                    <div style={{ flex: 1.4, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'baseline', display: 'flex' }}>
                            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word' }}>System Intelligence</div>
                            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word' }}>Real-time Operational Flow</div>
                        </div>

                        {/* Main metric card */}
                        <div style={{ alignSelf: 'stretch', position: 'relative', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', overflow: 'hidden', borderRadius: 8, borderLeft: '2px #006970 solid', padding: 34 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 64 }}>
                                <div style={{ padding: 16, background: '#E7E8E9', borderRadius: 4, display: 'inline-flex' }}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="11" cy="6" rx="9" ry="4" stroke="#001736" strokeWidth="1.5" />
                                        <path d="M2 6v5c0 2.21 4.03 4 9 4s9-1.79 9-4V6" stroke="#001736" strokeWidth="1.5" />
                                        <path d="M2 11v5c0 2.21 4.03 4 9 4s9-1.79 9-4v-5" stroke="#001736" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <div style={{ flexDirection: 'column', alignItems: 'flex-end', display: 'flex' }}>
                                    <div style={{ textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: '900', lineHeight: '40px', wordWrap: 'break-word' }}>94.2%</div>
                                    <div style={{ textAlign: 'right', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', wordWrap: 'break-word' }}>Standardization Index</div>
                                </div>
                            </div>
                            <div style={{ marginBottom: 12 }}>
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>Operational patterns across deployed<br />facilities.</div>
                            </div>
                            <div style={{ marginBottom: 24 }}>
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word' }}>Our network architecture allows us to observe non-obvious correlations between facility staffing ratios and patient outcome stability that singular entities overlook.</div>
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: '#EDEEEF', borderRadius: 2 }}>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#191C1D', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Network Load</div>
                                </div>
                                <div style={{ paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, background: '#EDEEEF', borderRadius: 2 }}>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#191C1D', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Efficiency Delta</div>
                                </div>
                            </div>
                        </div>

                        {/* Two smaller cards */}
                        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'row', gap: 16 }}>
                            {/* Dark card — 320+ Units */}
                            <div style={{ flex: 1, padding: 24, position: 'relative', background: '#001736', overflow: 'hidden', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex', minHeight: 200 }}>
                                <div style={{ position: 'absolute', top: 16, right: 24, opacity: 0.20 }}>
                                    <svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 43L27.5 0L55 43H0Z" fill="white" />
                                    </svg>
                                </div>
                                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: '32px', wordWrap: 'break-word' }}>320+ Units</div>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#7594CA', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', lineHeight: '15px', wordWrap: 'break-word' }}>Coordinated facility nodes<br />providing continuous feedback<br />loops.</div>
                                </div>
                            </div>
                            {/* Light card — Predictive Staffing */}
                            <div style={{ flex: 1, padding: 24, background: '#F3F4F5', borderRadius: 8, outline: '1px rgba(196, 198, 208, 0.10) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'flex', minHeight: 200 }}>
                                <div style={{ alignSelf: 'stretch', height: 27, background: '#006970', marginBottom: 'auto' }} />
                                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex', marginTop: 48 }}>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word' }}>Predictive Staffing</div>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word' }}>Advanced algorithms predicting<br />surge requirements 72 hours in<br />advance based on system-wide<br />trends.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column — Clinical Perspectives */}
                    <div style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                        <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'baseline', display: 'flex' }}>
                            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word' }}>Clinical Perspectives</div>
                        </div>

                        {/* Testimonial 1 — Dr. Elias Thorne */}
                        <div style={{ alignSelf: 'stretch', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, outline: '1px rgba(196, 198, 208, 0.05) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', overflow: 'hidden' }}>
                            <div style={{ alignSelf: 'stretch', padding: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                    <div style={{ width: 48, height: 48, background: '#E7E8E9', overflow: 'hidden', borderRadius: 12, flexShrink: 0 }}>
                                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://placehold.co/48x48" alt="Dr. Elias Thorne" />
                                    </div>
                                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', lineHeight: '20px', wordWrap: 'break-word' }}>Dr. Elias Thorne</div>
                                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Chief Clinical Officer</div>
                                    </div>
                                </div>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22.75px', wordWrap: 'break-word' }}>&quot;Where clinical advisors and facility leadership have a view, we see the transition from raw data into actionable wisdom. We aren&apos;t just observing; we are sculpting the future of care.&quot;</div>
                            </div>
                            <div style={{ alignSelf: 'stretch', paddingLeft: 24, paddingRight: 24, paddingTop: 12, paddingBottom: 12, background: '#F3F4F5', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Q3 Protocol Review</div>
                                <div style={{ width: 9.33, height: 9.33, background: '#006970' }} />
                            </div>
                        </div>

                        {/* Testimonial 2 — Sarah Jenkins */}
                        <div style={{ alignSelf: 'stretch', padding: 24, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, outline: '1px rgba(196, 198, 208, 0.05) solid', outlineOffset: '-1px', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 14, display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex' }}>
                                <div style={{ width: 48, height: 48, background: '#E7E8E9', overflow: 'hidden', borderRadius: 12, flexShrink: 0 }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://placehold.co/48x48" alt="Sarah Jenkins" />
                                </div>
                                <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', lineHeight: '20px', wordWrap: 'break-word' }}>Sarah Jenkins</div>
                                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Head of Operational Excellence</div>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '22.75px', wordWrap: 'break-word' }}>&quot;The scalability of our insights is what separates us from consultants. We live the operational reality every hour.&quot;</div>
                        </div>

                        {/* Global Operations Hub image card */}
                        <div style={{ alignSelf: 'stretch', position: 'relative', overflow: 'hidden', borderRadius: 16, display: 'flex' }}>
                            <img style={{ alignSelf: 'stretch', width: '100%', height: 259, objectFit: 'cover' }} src="https://placehold.co/600x259/001736/001736" alt="Global Operations Hub" />
                            <div style={{ position: 'absolute', inset: 0, padding: 32, background: 'linear-gradient(0deg, rgba(0, 23, 54, 0.80) 0%, rgba(0, 23, 54, 0) 100%)', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', lineHeight: '22.50px', wordWrap: 'break-word' }}>Global Operations Hub</div>
                                <div style={{ paddingTop: 4, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#96F1FA', fontSize: 12, fontFamily: 'Inter', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word' }}>Direct telemetric feed from 42 states</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3 — Access the Full Architecture */}
                <div style={{ alignSelf: 'stretch', paddingTop: 80, paddingBottom: 48, paddingLeft: 48, paddingRight: 48, position: 'relative', background: 'white', overflow: 'hidden', borderRadius: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 48, marginBottom: 48 }}>
                    {/* Gradient overlay */}
                    <div style={{ position: 'absolute', right: 0, top: 32, bottom: 0, width: '50%', background: 'linear-gradient(270deg, rgba(0, 105, 112, 0.05) 0%, rgba(0, 105, 112, 0) 100%)', pointerEvents: 'none' }} />

                    {/* Left — Text + buttons */}
                    <div style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex', position: 'relative', zIndex: 1 }}>
                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 30, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '36px', wordWrap: 'break-word' }}>Access the Full<br />Architecture</div>
                        <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', lineHeight: '29.25px', wordWrap: 'break-word' }}>Our proprietary Insights portal is restricted to authorized facility leadership and strategic partners. Get full access to live operational deltas and clinical benchmarks.</div>
                        <div style={{ paddingTop: 8, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex' }}>
                            <div style={{ paddingTop: 12, paddingBottom: 13, paddingLeft: 32, paddingRight: 32, background: '#001736', borderRadius: 6, display: 'flex', cursor: 'pointer' }}>
                                <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', lineHeight: '20px', wordWrap: 'break-word' }}>Request Access</div>
                            </div>
                            <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 12, paddingBottom: 12, borderRadius: 6, outline: '1px #C4C6D0 solid', outlineOffset: '-1px', display: 'flex', cursor: 'pointer' }}>
                                <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', lineHeight: '20px', wordWrap: 'break-word' }}>Documentation</div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Stats grid */}
                    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, position: 'relative', zIndex: 1 }}>
                        {[
                            { value: '1.2M+', label: 'Daily Data Points' },
                            { value: '15ms', label: 'Processing\nLatency' },
                            { value: '24/7', label: 'Active Monitoring' },
                            { value: 'Zero', label: 'External Reliance' },
                        ].map(({ value, label }) => (
                            <div key={value} style={{ padding: 24, background: '#F3F4F5', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', lineHeight: '32px', wordWrap: 'break-word' }}>{value}</div>
                                <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word', whiteSpace: 'pre-line' }}>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
