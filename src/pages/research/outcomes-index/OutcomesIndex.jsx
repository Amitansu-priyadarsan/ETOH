import React from 'react'
import PageLayout from '../../../components/PageLayout'
import hero3 from './assets/hero3.png'
import asset3 from './assets/asset3.png'
import { useResponsive } from '../../../hooks/useResponsive'

export default function OutcomesIndexPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : 32

    return (
        <PageLayout title="Outcomes Index" fullWidth={true}>

            {/* Section 1: Hero */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, background: 'white', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1376, display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: 'flex-start', gap: compact ? 48 : 64 }}>
                    {/* Text */}
                    <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ color: '#001736', fontSize: isMobile ? 40 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '56px' : '72px', wordWrap: 'break-word' }}>
                            We built a framework for how hospital operating systems should be evaluated. Then we applied it to ourselves.
                        </div>
                        <div style={{ maxWidth: 672 }}>
                            <div style={{ color: '#43474F', fontSize: isMobile ? 16 : 20, fontFamily: 'Inter', fontWeight: 400, lineHeight: isMobile ? '26px' : '32.5px' }}>
                                Standard IT metrics like uptime and latency are insufficient for the clinical reality. The Outcomes Index moves beyond technical throughput to measure patient-centered impact, operational precision, and care velocity.
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 16, paddingTop: 16 }}>
                            <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 17, paddingBottom: 17, background: '#001736', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 6, display: 'inline-flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px' }}>Download the Framework</div>
                            </div>
                            <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 16, paddingBottom: 16, borderRadius: 6, outline: '1px #C4C6D0 solid', outlineOffset: '-1px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                                <div style={{ color: '#006970', fontSize: 16, fontFamily: 'Inter', fontWeight: 500, lineHeight: '24px' }}>View Latest Published Results</div>
                            </div>
                        </div>
                    </div>

                    {/* Image with floating stat */}
                    {!isMobile && (
                        <div style={{ flex: 1, position: 'relative' }}>
                            <div style={{ position: 'relative', background: '#F3F4F5', boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)', overflow: 'hidden', borderRadius: 12, outline: '8px white solid', outlineOffset: '-8px' }}>
                                <img style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', opacity: 0.90, display: 'block' }} src={hero3} alt="Hospital infrastructure" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(0, 23, 54, 0.20) 0%, rgba(0, 23, 54, 0) 100%)' }} />
                            </div>
                            <div style={{ padding: 24, position: 'absolute', bottom: -16, left: -24, background: 'white', borderRadius: 8, boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <div style={{ color: '#006970', fontSize: 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '36px' }}>94.2%</div>
                                <div style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>Operational Precision</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Section 2: The Outcomes Index Framework */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1376, display: 'flex', flexDirection: 'column', gap: 64 }}>
                    <div style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap: compact ? 16 : 0 }}>
                        <div style={{ maxWidth: 672, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>The Methodology</div>
                            <div style={{ color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '34px' : '40px' }}>The Outcomes Index Framework</div>
                        </div>
                        <div style={{ maxWidth: compact ? '100%' : 384 }}>
                            <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>
                                Our criteria was developed in collaboration with clinical directors to ensure every data point translates to a human outcome.
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)', gap: 16 }}>
                        {/* Patient Outcomes */}
                        <div style={{ padding: '32px 36px', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#006970"/>
                            </svg>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Patient Outcomes</div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                    Measuring the velocity of recovery and the reduction of post-acute complications through algorithmic intervention.
                                </div>
                            </div>
                        </div>

                        {/* Care Quality */}
                        <div style={{ padding: '32px 36px', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="#006970"/>
                            </svg>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Care Quality</div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                    Objective scoring of adherence to clinical protocols and the minimization of administrative friction for providers.
                                </div>
                            </div>
                        </div>

                        {/* Access Reach */}
                        <div style={{ padding: '32px 36px', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 7.59 7.59 4 12 4C13.57 4 15.04 4.46 16.28 5.25L5.25 16.28C4.46 15.04 4 13.57 4 12ZM12 20C10.43 20 8.96 19.54 7.72 18.75L18.75 7.72C19.54 8.96 20 10.43 20 12C20 16.41 16.41 20 12 20Z" fill="#006970"/>
                            </svg>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Access Reach</div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                    Evaluating the democratization of specialist knowledge and the equity of care delivery across diverse patient cohorts.
                                </div>
                            </div>
                        </div>

                        {/* Clinical Error Reduction */}
                        <div style={{ padding: '32px 36px', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <svg width="30" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 18.49L9.5 12.48L13.5 16.48L22 6.92L20.59 5.51L13.5 13.48L9.5 9.48L2 17L3.5 18.49Z" fill="#006970"/>
                            </svg>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Clinical Error Reduction</div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                    Quantifying the impact of predictive alerts and automated safety barriers in high-stakes environments.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Quality Scorecard */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: 'white', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1376, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 48 : 80, alignItems: 'flex-start' }}>
                    {/* Left: Text */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 2.4 }}>Live Performance</div>
                        <div style={{ color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '34px' : '40px' }}>Quality Scorecard</div>
                        <div style={{ color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '26px', paddingTop: 8 }}>
                            We don&apos;t just measure; we visualize the delta between current performance and the clinical gold standard. Our dashboard provides real-time visibility into operational health.
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 16 }}>
                            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                                <div style={{ padding: 8, background: 'rgba(0, 105, 112, 0.10)', borderRadius: 2, flexShrink: 0 }}>
                                    <div style={{ width: 12, height: 12, background: '#006970' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px' }}>Protocol Adherence</div>
                                    <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>Real-time mapping of care delivery against established peer-reviewed pathways.</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                                <div style={{ padding: 8, background: 'rgba(0, 105, 112, 0.10)', borderRadius: 2, flexShrink: 0 }}>
                                    <div style={{ width: 12, height: 12, background: '#006970' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px' }}>Systemic Efficiency</div>
                                    <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>The ratio of clinical outcome success to administrative resource consumption.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Dashboard Card */}
                    <div style={{ flex: 1.2, padding: 32, background: 'white', borderRadius: 16, outline: '1px #EDEEEF solid', outlineOffset: '-1px', boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)', display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ color: '#001736', fontSize: 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Outcomes Index Over Time</div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#EDEEEF', borderRadius: 12 }}>
                                    <div style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px' }}>Q3 2023</div>
                                </div>
                                <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#006970', borderRadius: 12 }}>
                                    <div style={{ color: 'white', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px' }}>Current</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingBottom: 16 }}>
                            {[
                                { label: 'Patient Recovery Velocity', value: '+12.4%', width: '88%' },
                                { label: 'Administrative Friction Reduction', value: '-22.1%', width: '72%' },
                                { label: 'Care Protocol Integrity', value: '99.8%', width: '99%' },
                            ].map(({ label, value, width }) => (
                                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 0.6 }}>{label}</div>
                                        <div style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 0.6 }}>{value}</div>
                                    </div>
                                    <div style={{ height: 16, background: '#F3F4F5', borderRadius: 12, overflow: 'hidden' }}>
                                        <div style={{ width, height: '100%', background: '#002B5B', borderRadius: 12, position: 'relative' }}>
                                            <div style={{ width: 8, height: '100%', right: 0, top: 0, position: 'absolute', background: '#006970' }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ paddingTop: 32, borderTop: '1px solid #EDEEEF', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                                <div style={{ width: 48, height: 48, background: 'rgba(0, 105, 112, 0.05)', borderRadius: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0L0 3V9C0 14.55 3.41 19.74 8 21C12.59 19.74 16 14.55 16 9V3L8 0ZM8 10H14C13.47 13.11 11.1 15.79 8 16.93V10H2V4.3L8 2.19V10Z" fill="#006970"/>
                                    </svg>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <div style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>Trust Index</div>
                                    <div style={{ color: '#001736', fontSize: 16, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '24px' }}>Verifiable Compliance</div>
                                </div>
                            </div>
                            <div style={{ color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2, cursor: 'pointer' }}>Export Data Set</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4: Open Data & Transparency */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#001736', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1376, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 48 : 80, alignItems: 'center' }}>
                    <div style={{ flex: 1 }}>
                        <img style={{ width: '100%', maxWidth: compact ? '100%' : 512, height: isMobile ? 240 : 'auto', objectFit: 'cover', opacity: 0.80, boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', borderRadius: 16, display: 'block' }} src={asset3} alt="Data analytics dashboard" />
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ color: 'white', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '34px' : '40px' }}>Open Data &amp; Transparency</div>
                            <div style={{ color: '#CBD5E1', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                We believe progress in healthcare requires radical honesty. ETOH publishes its full performance results—even the challenging ones. We make our raw data and the framework itself available for peer review, researchers, and hospital leadership globally.
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ padding: 16, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 4, outline: '1px rgba(255, 255, 255, 0.10) solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="#96F1FA"/>
                                </svg>
                                <div style={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>Access the Clinical Blueprint (PDF)</div>
                            </div>
                            <div style={{ padding: 16, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 4, outline: '1px rgba(255, 255, 255, 0.10) solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="#96F1FA"/>
                                </svg>
                                <div style={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>Download Anonymous Data Sets (v2.4)</div>
                            </div>
                            <div style={{ padding: 16, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 4, outline: '1px rgba(255, 255, 255, 0.10) solid', outlineOffset: '-1px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#96F1FA"/>
                                </svg>
                                <div style={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>Join the Researchers Consortium</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 5: CTA */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: 'white', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 832, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
                    <div style={{ textAlign: 'center', color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '34px' : '40px' }}>
                        Operational Excellence is a Choice
                    </div>
                    <div style={{ textAlign: 'center', color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '28px' }}>
                        Join the network of hospitals moving beyond legacy IT thinking and into a future of precision clinical operation.
                    </div>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 24, paddingTop: 24, alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 20, paddingBottom: 20, background: '#006970', borderRadius: 6, boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                            <div style={{ color: 'white', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Download the Framework</div>
                        </div>
                        <div style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 20, paddingBottom: 20, background: 'white', borderRadius: 6, outline: '1px #C4C6D0 solid', outlineOffset: '-1px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                            <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Request Clinical Audit</div>
                        </div>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
