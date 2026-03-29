import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageLayout from '../../../components/PageLayout'
import { useResponsive } from '../../../hooks/useResponsive'
import news1 from './assets/news1.png'
import image1 from './assets/image.png'
import image2 from './assets/image copy.png'
import image3 from './assets/image copy 2.png'

const ease = [0.22, 1, 0.36, 1]
const sharp = [0.25, 0.46, 0.45, 0.94]

export default function NewsPage() {
    const { isMobile } = useResponsive()

    const featuredRef = useRef(null)
    const pressRef = useRef(null)
    const inNewsRef = useRef(null)

    const featuredInView = useInView(featuredRef, { once: true, amount: 0.15 })
    const pressInView = useInView(pressRef, { once: true, amount: 0.2 })
    const inNewsInView = useInView(inNewsRef, { once: true, amount: 0.15 })

    return (
        <PageLayout fullWidth title="" lightHero>
            <div style={{ fontFamily: "'Inter', sans-serif" }}>

                {/* ── Hero: Row 1 — Badge + Heading (left) | Body text (right) ── */}
                <div style={{ padding: isMobile ? '48px 16px 0' : '80px 24px 0' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', gap: isMobile ? 24 : 64 }}>

                        {/* Left — Badge + Heading */}
                        <div style={{ flex: isMobile ? '1' : '0 0 55%', display: 'flex', flexDirection: 'column', gap: 24 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.5, ease: sharp }}
                                style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#96F1FA', display: 'inline-flex', alignSelf: 'flex-start' }}
                            >
                                <span style={{ color: '#006F77', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, whiteSpace: 'nowrap' }}>
                                    Dispatch from the center
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.75, ease: ease, delay: 0.1 }}
                                style={{ margin: 0, color: '#001736', fontSize: isMobile ? 40 : 72, fontFamily: 'Manrope', fontWeight: 800, lineHeight: isMobile ? '46px' : '74px' }}
                            >
                                From the operating layer of modern healthcare.
                            </motion.h1>
                        </div>

                        {/* Right — Body paragraph */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: ease, delay: 0.3 }}
                            style={{ flex: isMobile ? '1' : '0 0 40%', paddingTop: isMobile ? 0 : 80 }}
                        >
                            <p style={{ margin: 0, color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: 400, lineHeight: '30px' }}>
                                ETOH runs inside some of the most complex clinical environments in existence. The perspective that produces is not available in a research paper. This is where we share it.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ── Hero: Row 2 — Dark image card (left) | Feature cards (right) ── */}
                <div ref={featuredRef} style={{ padding: isMobile ? '24px 16px 48px' : '40px 24px 64px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'stretch', gap: isMobile ? 16 : 0 }}>

                        {/* Left — Dark "Institutional Milestone" card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={featuredInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, ease: ease, delay: 0.1 }}
                            style={{ flex: isMobile ? 'none' : '0 0 55%', position: 'relative', background: '#001736', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: isMobile ? 320 : 420, padding: isMobile ? 28 : 48 }}
                        >
                            <img
                                style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', objectFit: 'cover', opacity: 0.35 }}
                                src={news1}
                                alt=""
                            />
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative', zIndex: 1 }}>
                                <span style={{ color: '#96F1FA', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                                    Institutional Milestone
                                </span>
                                <div style={{ color: 'white', fontSize: 30, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '38px', maxWidth: 480 }}>
                                    Integration of ETOH Intelligence into National Surgical Command Centers
                                </div>
                                <div style={{ color: '#A9C7FF', fontSize: 15, fontFamily: 'Inter', fontWeight: 400, lineHeight: '22px', maxWidth: 440 }}>
                                    A multi-year partnership defining the next decade of operative efficiency and patient safety protocol automation.
                                </div>
                                <div style={{ paddingTop: 8, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                    <span style={{ color: '#1FC9C3', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20 }}>
                                        Read Press Release
                                    </span>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11" stroke="#1FC9C3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right — System Intelligence + In The News stacked */}
                        <div style={{ flex: isMobile ? 'none' : '0 0 45%', display: 'flex', flexDirection: 'column', gap: 16, padding: isMobile ? 0 : '0 0 0 16px' }}>
                            {/* Card 1 — System Intelligence */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={featuredInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.65, ease: ease, delay: 0.2 }}
                                style={{ flex: 1, padding: 36, background: 'white', borderLeft: '4px #006970 solid', borderRadius: 12, display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}
                            >
                                <span style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                                    System Intelligence
                                </span>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>
                                    The Architecture of Silence: Reducing Cognitive Load in ICUs
                                </div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px' }}>
                                    New study reveals ETOH&apos;s impact on reducing alarm fatigue across tertiary care facilities.
                                </div>
                            </motion.div>

                            {/* Card 2 — In The News */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={featuredInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.65, ease: ease, delay: 0.32 }}
                                style={{ flex: 1, padding: 36, background: '#F3F4F5', borderRadius: 12, display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}
                            >
                                <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2 }}>
                                    In The News
                                </span>
                                <div style={{ color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '28px' }}>
                                    Healthcare Finance Digest: ETOH&apos;s Operational Efficiency Model
                                </div>
                                <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px' }}>
                                    Exploring the fiscal impact of precision resource allocation in metropolitan health systems.
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* ── Section 2: Press Releases ── */}
                <div ref={pressRef} style={{ padding: isMobile ? '32px 16px' : '48px 24px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={pressInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharp }}
                            style={{ paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
                        >
                            <span style={{ color: '#001736', fontSize: 28, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '36px' }}>PRESS RELEASES</span>
                            <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3 }}>The Official Record</span>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                            {[
                                {
                                    date: 'OCT 24, 2024',
                                    title: 'ETOH Announces Expansion into European Healthcare Markets with Strategic Berlin Hub',
                                    body: 'Standardizing clinical architecture across EU borders requires a localized approach to data sovereignty and operational culture.',
                                    delay: 0.1,
                                },
                                {
                                    date: 'SEP 12, 2024',
                                    title: 'Clinical Architect Platform 4.0: The Introduction of Predictive Flow Management',
                                    body: 'Version 4.0 leverages deep learning to anticipate facility bottlenecks before they manifest in patient wait times.',
                                    delay: 0.22,
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.date}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={pressInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.55, ease: sharp, delay: item.delay }}
                                    style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
                                >
                                    <span style={{ color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: 700, lineHeight: '16px', letterSpacing: 1.20 }}>
                                        {item.date}
                                    </span>
                                    <div style={{ color: '#001736', fontSize: 22, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '30px' }}>
                                        {item.title}
                                    </div>
                                    <div style={{ color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: 400, lineHeight: '26px' }}>
                                        {item.body}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Section 3: In The News ── */}
                <div ref={inNewsRef} style={{ padding: isMobile ? '32px 16px 64px' : '48px 24px 80px' }}>
                    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={inNewsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: sharp }}
                            style={{ paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
                        >
                            <span style={{ color: '#001736', fontSize: 28, fontFamily: 'Manrope', fontWeight: 800, lineHeight: '36px' }}>IN THE NEWS</span>
                            <span style={{ color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: 700, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3 }}>External Coverage</span>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 40 : 28 }}>
                            {[
                                { src: image1, pub: 'The New York Times', title: 'How ETOH is Rewiring the Modern Hospital Brain', body: "A deep dive into the algorithmic infrastructure that has reduced operative delays by 22% in the nation's…", delay: 0.1 },
                                { src: image2, pub: 'Wired Magazine', title: 'The Architects of Clinical Precision', body: "Beyond the EHR: ETOH's layer of orchestration is the missing piece in the trillion-dollar healthcare puzzle.", delay: 0.2 },
                                { src: image3, pub: 'Modern Healthcare', title: 'Operational Excellence at Scale', body: 'Analyzing the ROI of ETOH deployments across the largest healthcare networks in North America.', delay: 0.3 },
                            ].map((article) => (
                                <motion.div
                                    key={article.pub}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inNewsInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, ease: ease, delay: article.delay }}
                                    style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                                >
                                    <div style={{ background: '#E7E8E9', overflow: 'hidden', marginBottom: 20 }}>
                                        <img style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }} src={article.src} alt={article.pub} />
                                    </div>
                                    <span style={{ color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: 600, textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, marginBottom: 10 }}>
                                        {article.pub}
                                    </span>
                                    <div style={{ color: '#001736', fontSize: 18, fontFamily: 'Manrope', fontWeight: 700, lineHeight: '26px', marginBottom: 12 }}>
                                        {article.title}
                                    </div>
                                    <div style={{ color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: 400, lineHeight: '21px', marginBottom: 20, flex: 1 }}>
                                        {article.body}
                                    </div>
                                    <span style={{ color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: 600, textDecoration: 'underline', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, cursor: 'pointer' }}>
                                        Read Article
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </PageLayout>
    )
}
