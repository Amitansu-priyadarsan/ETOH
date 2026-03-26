import PageLayout from '../../../components/PageLayout'
import hero1 from './assets/hero1.png'
import section3 from './assets/section3.png'
import { useResponsive } from '../../../hooks/useResponsive'

export default function PublicHealthMissionPage() {
    const { isMobile, isTablet } = useResponsive()
    const compact = isMobile || isTablet
    const px = isMobile ? 16 : 32

    return (
        <PageLayout title="Public Health Mission" fullWidth={true}>

            {/* Section 1: Hero */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 96, paddingBottom: isMobile ? 64 : 96, background: 'white', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 48 : 80, alignItems: 'flex-start' }}>

                    {/* Left: rotated image */}
                    <div style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        {/* Glow */}
                        <div style={{ width: 192, height: 192, position: 'absolute', left: -22, bottom: 0, background: 'rgba(0, 105, 112, 0.10)', borderRadius: 12, filter: 'blur(32px)', pointerEvents: 'none' }} />
                        <div style={{ transform: 'rotate(2deg)', background: '#F3F4F5', boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)', overflow: 'hidden', borderRadius: 8, width: '100%', maxWidth: 452 }}>
                            <img style={{ width: '100%', height: isMobile ? 320 : 580, objectFit: 'cover', display: 'block' }} src={hero1} alt="Public health infrastructure" />
                        </div>
                    </div>

                    {/* Right: text */}
                    <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#E7E8E9', display: 'inline-flex' }}>
                            <div style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>Foundational Infrastructure</div>
                        </div>
                        <div style={{ color: '#001736', fontSize: isMobile ? 40 : isTablet ? 52 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '44px' : isTablet ? '56px' : '72px' }}>
                            The floor of healthcare quality is where the transformation happens. ETOH is built to raise it.
                        </div>
                        <div style={{ maxWidth: 672, paddingTop: 8 }}>
                            <div style={{ color: '#43474F', fontSize: isMobile ? 16 : 24, fontFamily: 'Inter', fontWeight: 400, lineHeight: '32px' }}>
                                Improving the best hospitals is important. Bringing operational excellence to the hospitals that serve the most people — and have always had the least — is the challenge that defines a generation of health infrastructure.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: The Hardest Problem */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, background: '#F3F4F5', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: 48 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <div style={{ width: 48, height: 2, background: '#006970', flexShrink: 0 }} />
                        <div style={{ color: '#001736', fontSize: 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '36px' }}>The Hardest Problem</div>
                    </div>

                    {/* Body paragraphs */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 800 }}>
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                            Healthcare systems are not transformed at their peaks. They are transformed when the standard of care delivered at their most stretched, most under-resourced, most remote facilities begins to approach the standard of care delivered at their most capable ones.
                        </div>
                        <div style={{ color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                            This is the hardest problem in public health infrastructure, and it is the one that ETOH&apos;s public health mission is oriented around.
                        </div>
                    </div>

                    {/* Quote block */}
                    <div style={{ padding: 48, position: 'relative', background: 'white', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)', borderLeft: '4px solid #006970', overflow: 'hidden' }}>
                        <div style={{ width: 40, height: 40, position: 'absolute', right: 48, top: -24, background: '#006970', opacity: 0.20 }} />
                        <div style={{ color: '#001736', fontSize: isMobile ? 18 : 24, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '33px' }}>
                            &quot;We don&apos;t change the medicine. We change the infrastructure that medicine works through.&quot;
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3: Material Outcomes */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, background: '#F8F9FA', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '100%', maxWidth: 1280, display: 'flex', flexDirection: 'column', gap: 80 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', flexDirection: compact ? 'column' : 'row', justifyContent: 'space-between', alignItems: compact ? 'flex-start' : 'baseline', gap: compact ? 8 : 0 }}>
                        <div style={{ color: '#001736', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '34px' : '40px' }}>Material Outcomes</div>
                        <div style={{ color: '#006970', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '20px', letterSpacing: 1.4 }}>Operational Visibility Cluster</div>
                    </div>

                    {/* 2x2 cards grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: compact ? '1fr' : '1fr 1fr', gap: 16 }}>

                        {/* Card 1: Systems Integration */}
                        <div style={{ padding: 32, background: 'white', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ height: 4, background: '#006970', borderRadius: 2 }} />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 8 }}>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Systems Integration</div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px' }}>
                                    Replacing fragmented manual logs with a unified digital nervous system for district facilities.
                                </div>
                            </div>
                        </div>

                        {/* Card 2: 98% Resource Uptime */}
                        <div style={{ padding: 32, background: '#006970', display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: 600, lineHeight: '40px' }}>98%</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <div style={{ color: 'white', fontSize: 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Resource Uptime</div>
                                <div style={{ color: '#96F1FA', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px', opacity: 0.90 }}>
                                    Achieving consistency across the most remote facilities in the network.
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Patient-Centric Deployment */}
                        <div style={{ padding: 32, background: '#E7E8E9', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: 32 }}>
                            <div style={{ width: 96, height: 96, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={hero1} alt="Patient-centric deployment" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>Patient-Centric Deployment</div>
                                <div style={{ color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '26px' }}>
                                    Designing for the patients whose clinical experience ETOH is designed to change: those in limited-staff, high-volume environments.
                                </div>
                            </div>
                        </div>

                        {/* Card 4: Real-Time Coordination */}
                        <div style={{ minHeight: 300, padding: 48, position: 'relative', background: '#001736', overflow: 'hidden', borderRadius: 8, display: 'flex', alignItems: 'flex-end' }}>
                            <img style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.40 }} src={section3} alt="" />
                            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <div style={{ color: 'white', fontSize: 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '36px' }}>Real-Time Coordination</div>
                                <div style={{ maxWidth: 512, color: '#D6E3FF', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '26px' }}>
                                    A clinical team with full operational visibility and coordination tools delivers materially better care. ETOH installs the visibility that handles complexity rather than adding to it.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Section 4: A Disciplined Organization */}
            <div style={{ alignSelf: 'stretch', width: '100%', paddingLeft: px, paddingRight: px, paddingTop: isMobile ? 64 : 128, paddingBottom: isMobile ? 64 : 128, position: 'relative', background: '#001736', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
                {/* Background image */}
                <img style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.10, pointerEvents: 'none' }} src={section3} alt="" />

                <div style={{ width: '100%', maxWidth: 1280, position: 'relative', display: 'flex', flexDirection: compact ? 'column' : 'row', gap: compact ? 48 : 80, alignItems: 'flex-start' }}>

                    {/* Left: text + pills */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{ color: 'white', fontSize: isMobile ? 28 : 36, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '34px' : '40px' }}>
                                A Disciplined Organization
                            </div>
                            <div style={{ color: '#D6E3FF', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '29.25px' }}>
                                We have real operating costs and a long-term sustainability requirement. We believe a sustainable institution and a genuinely public health-oriented one are the same institution, built correctly.
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: 16 }}>
                            <div style={{ flex: 1, padding: 16, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 4, outline: '1px rgba(255, 255, 255, 0.10) solid', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <svg width="22" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.52 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" fill="#96F1FA"/>
                                </svg>
                                <div style={{ color: '#96F1FA', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>Public Sector Pricing</div>
                            </div>
                            <div style={{ flex: 1, padding: 16, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 4, outline: '1px rgba(255, 255, 255, 0.10) solid', outlineOffset: '-1px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <svg width="22" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 15.11 16.1 17.78 12 18.93V12H5V6.3L12 3.19V11.99Z" fill="#96F1FA"/>
                                </svg>
                                <div style={{ color: '#96F1FA', fontSize: 10, fontFamily: 'Inter', fontWeight: 400, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1 }}>Long-term Ethics</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: quote card */}
                    <div style={{ flex: 1, padding: 48, position: 'relative', background: 'rgba(255, 255, 255, 0.80)', overflow: 'hidden', borderRadius: 8, backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', gap: 24 }}>
                        <div style={{ width: 128, height: 128, position: 'absolute', right: -32, top: -64, background: 'rgba(0, 105, 112, 0.10)', borderRadius: 12, pointerEvents: 'none' }} />
                        <div style={{ color: '#001736', fontSize: isMobile ? 16 : 20, fontFamily: 'Inter', fontWeight: 500, lineHeight: '32.5px', position: 'relative' }}>
                            &quot;Every design decision in ETOH reflects a commitment to the public health mission that precedes the commercial one.&quot;
                        </div>
                        <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '20px', position: 'relative' }}>
                            — The ETOH Governance Charter, 2024
                        </div>
                    </div>

                </div>
            </div>

        </PageLayout>
    )
}
