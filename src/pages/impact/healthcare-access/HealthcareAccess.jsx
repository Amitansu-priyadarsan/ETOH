import PageLayout from '../../../components/PageLayout'
import hero1 from './assets/hero1.png'
import doctor from './assets/doctor.png'
import section3 from './assets/section3.png'
import { useResponsive } from '../../../hooks/useResponsive'

export default function HealthcareAccessPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : 32

    return (
        <PageLayout title="Healthcare Access" fullWidth={true}>

            {/* Section 1: Hero */}
            <div style={{ alignSelf: 'stretch', width: '100%', minHeight: isMobile ? 'auto' : 870, paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 80 : 227, paddingBottom: isMobile ? 80 : 227, position: 'relative', background: 'linear-gradient(146deg, #001736 0%, #002B5B 100%)', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* Background image overlay */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.20, pointerEvents: 'none' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 84.64% 124.53% at 70.00% 30.00%, rgba(0, 105, 112, 0.40) 0%, rgba(0, 105, 112, 0) 70%)' }} />
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'overlay' }} src={hero1} alt="" />
                </div>

                {/* Content */}
                <div style={{ width: '100%', maxWidth: 1280, position: 'relative', display: 'flex', flexDirection: compact ? 'column' : 'row', alignItems: compact ? 'flex-start' : 'center', gap: compact ? 40 : 80 }}>
                    {/* Text */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ color: 'white', fontSize: isMobile ? 40 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '56px' : '72px' }}>
                            Reaching the patients who have the most to gain and the fewest alternatives.
                        </div>
                        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
                            <div style={{ paddingTop: 16, flexShrink: 0 }}>
                                <div style={{ width: 64, height: 2, background: '#006970' }} />
                            </div>
                            <div style={{ color: '#7594CA', fontSize: isMobile ? 16 : 24, fontFamily: 'Inter', fontWeight: 300, lineHeight: '32px' }}>
                                Access is measured in facilities reached, patient volumes, and care gaps closed—especially in under-resourced communities where precision matters most.
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div style={{ flexShrink: 0 }}>
                        <div style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 20, paddingBottom: 20, background: '#006970', borderRadius: 6, boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)', display: 'inline-flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
                            <div style={{ color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: 700, lineHeight: '24px' }}>View Full Access Report</div>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Impact Narrative */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: '#F8F9FA', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 48 : 80, alignItems: 'flex-start' }}>
                    {/* Left: Image */}
                    <div style={{ flex: 1, position: 'relative' }}>
                        <div style={{ background: '#F3F4F5', boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden', borderRadius: 8 }}>
                            <img style={{ width: '100%', height: isMobile ? 300 : 560, objectFit: 'cover', display: 'block' }} src={doctor} alt="Clinical team" />
                        </div>
                       
                    </div>

                    {/* Right: Text */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 40 }}>
                        <div style={{ color: '#006970', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 2.8 }}>Impact Narrative</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <div style={{ color: '#001736', fontSize: isMobile ? 32 : 48, fontFamily: 'Manrope', fontWeight: 700, lineHeight: isMobile ? '36px' : '48px' }}>
                                Operational visibility as a clinical right.
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                    For the first time, public health facilities are operating with genuinely capable infrastructure. We are bridging the divide between resource-constrained environments and high-precision clinical excellence.
                                </div>
                                <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                    By deploying institutional-grade systems into the heart of community medicine, we give clinical teams in these settings the same operational visibility and diagnostic speed as the world&apos;s best-equipped private hospitals.
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingTop: 24 }}>
                            <div style={{ padding: 16, background: '#F3F4F5', borderLeft: '4px solid #006970', display: 'inline-flex', alignItems: 'center', gap: 16 }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 15.11 16.1 17.78 12 18.93V12H5V6.3L12 3.19V11.99Z" fill="#006970"/>
                                </svg>
                                <div style={{ color: '#001736', fontSize: 14, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Genuinely Capable Infrastructure</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Deployment Reach & Access Data */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: 80 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{ color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '34px' : '40px' }}>Deployment Reach &amp; Access Data</div>
                        <div style={{ maxWidth: 576, color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '24px' }}>
                            Real-time metrics defining the footprint of ETOH operational excellence across under-resourced networks.
                        </div>
                    </div>

                    {/* 2-column grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: 16 }}>

                        {/* Left column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {/* 240+ */}
                            <div style={{ padding: 40, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, borderLeft: '4px solid #006970', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <svg width="25" height="23" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#006970"/>
                                </svg>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <div style={{ color: '#001736', fontSize: isMobile ? 48 : 60, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '52px' : '60px' }}>240+</div>
                                    <div style={{ color: '#64748B', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Total Facilities Reached</div>
                                </div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22.75px' }}>
                                    Scaling infrastructure across District Hospitals and primary clinics with zero compromise on diagnostic integrity.
                                </div>
                            </div>

                            {/* 68% + 42% */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div style={{ padding: 32, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        <div style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '40px' }}>68%</div>
                                        <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>Care Gaps Closed</div>
                                    </div>
                                    <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>
                                        Reduction in Diagnostic Latency across integrated networks.
                                    </div>
                                </div>
                                <div style={{ padding: 32, background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 16 }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        <div style={{ color: '#001736', fontSize: 36, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '40px' }}>42%</div>
                                        <div style={{ color: '#64748B', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>Community Impact</div>
                                    </div>
                                    <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>
                                        Increase in Successful Referrals within clinical pathways.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {/* 1.8M+ */}
                            <div style={{ padding: 40, background: '#001736', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 20 }}>
                                <svg width="28" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="#7AD5DD"/>
                                </svg>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <div style={{ color: 'white', fontSize: isMobile ? 48 : 60, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '52px' : '60px' }}>1.8M+</div>
                                    <div style={{ color: '#7594CA', fontSize: 14, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Annual Patient Volume Supported</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8L6 0L12 8H0Z" fill="#7AD5DD"/>
                                    </svg>
                                    <div style={{ color: '#7AD5DD', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.2 }}>12% Year-over-year increase</div>
                                </div>
                            </div>

                            {/* Image card */}
                            <div style={{ position: 'relative', background: '#E1E3E4', overflow: 'hidden', borderRadius: 8, flex: 1, minHeight: 300 }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 300 }} src={section3} alt="Precision Mapping of Clinical Gaps" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0, 23, 54, 0.80) 0%, rgba(0, 23, 54, 0) 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 32 }}>
                                    <div style={{ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: 600, lineHeight: '28px' }}>Precision Mapping of Clinical Gaps</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
