import PageLayout from '../../../components/PageLayout'
import news1 from './assets/news1.png'
import image1 from './assets/image.png'
import image2 from './assets/image copy.png'
import image3 from './assets/image copy 2.png'

export default function NewsPage() {
    return (
        <PageLayout title="">
            {/* Top row: Hero + Featured Cards */}
            <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 0 }}>

                {/* Section 1 — Hero */}
                <div style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', paddingRight: 48 }}>
                    <div style={{ alignSelf: 'stretch', paddingBottom: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
                        <div style={{ paddingLeft: 12, paddingRight: 12, paddingTop: 4, paddingBottom: 4, background: '#96F1FA', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div style={{ width: 170.84, height: 15, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006F77', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Dispatch from the center</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 72, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '72px', wordWrap: 'break-word' }}>From the<br />operating layer of<br />modern<br />healthcare.</div>
                        </div>
                    </div>
                    <div style={{ alignSelf: 'stretch', paddingTop: 96, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', lineHeight: '29.25px', wordWrap: 'break-word' }}>ETOH runs inside some of the<br />most complex clinical<br />environments in existence. The<br />perspective that produces is not<br />available in a research paper.<br />This is where we share it.</div>
                        </div>
                    </div>
                </div>

                {/* Section 2 — Featured Cards */}
                <div style={{ width: 472, height: 600, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', flexShrink: 0 }}>
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                        {/* Card 1 — System Intelligence */}
                        <div style={{ alignSelf: 'stretch', padding: 32, background: 'white', borderLeft: '4px #006970 solid', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2, wordWrap: 'break-word' }}>System Intelligence</div>
                                </div>
                                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>The Architecture of Silence: Reducing<br />Cognitive Load in ICUs</div>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', marginTop: 12 }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word' }}>New study reveals ETOH&apos;s impact on reducing alarm<br />fatigue across tertiary care facilities.</div>
                            </div>
                        </div>
                        {/* Card 2 — In The News */}
                        <div style={{ alignSelf: 'stretch', padding: 32, background: '#F3F4F5', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2, wordWrap: 'break-word' }}>In The News</div>
                                </div>
                                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                    <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>Healthcare Finance Digest: ETOH&apos;s<br />Operational Efficiency Model</div>
                                </div>
                            </div>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex', marginTop: 12 }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word' }}>Exploring the fiscal impact of precision resource<br />allocation in metropolitan health systems.</div>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 — Feature with image */}
                    <div style={{ alignSelf: 'stretch', flex: 1, padding: 48, position: 'relative', background: '#001736', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <img style={{ width: '100%', height: '100%', left: 0, top: 0, position: 'absolute', objectFit: 'cover', opacity: 0.40 }} src={news1} alt="" />
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex', position: 'relative', zIndex: 1 }}>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#96F1FA', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 2, wordWrap: 'break-word' }}>Institutional Milestone</div>
                            </div>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'white', fontSize: 30, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '37.50px', wordWrap: 'break-word' }}>Integration of ETOH<br />Intelligence into<br />National Surgical<br />Command Centers</div>
                            </div>
                            <div style={{ width: '100%', maxWidth: 448, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#A9C7FF', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word' }}>A multi-year partnership defining the next decade<br />of operative efficiency and patient safety protocol<br />automation.</div>
                            </div>
                            <div style={{ paddingTop: 16, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                                <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word', cursor: 'pointer' }}>Read Press Release</div>
                                <div style={{ width: 16, height: 16, background: '#006970' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 — Press Releases */}
            <div style={{ alignSelf: 'stretch', paddingTop: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', justifyContent: 'space-between', alignItems: 'baseline', display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 30, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '36px', wordWrap: 'break-word' }}>PRESS RELEASES</div>
                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3, wordWrap: 'break-word' }}>The Official Record</div>
                </div>
                <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'flex' }}>
                    {/* Press Release 1 */}
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', paddingTop: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word' }}>OCT 24, 2024</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', marginTop: 8 }}>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word' }}>ETOH Announces Expansion into European<br />Healthcare Markets with Strategic Berlin<br />Hub</div>
                            </div>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word' }}>Standardizing clinical architecture across EU borders requires a<br />localized approach to data sovereignty and operational culture.</div>
                            </div>
                        </div>
                    </div>
                    {/* Press Release 2 */}
                    <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', paddingTop: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                            <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 12, fontFamily: 'Inter', fontWeight: '700', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word' }}>SEP 12, 2024</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', marginTop: 8 }}>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 24, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '32px', wordWrap: 'break-word' }}>Clinical Architect Platform 4.0: The<br />Introduction of Predictive Flow<br />Management</div>
                            </div>
                            <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word' }}>Version 4.0 leverages deep learning to anticipate facility<br />bottlenecks before they manifest in patient wait times.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 4 — In The News */}
            <div style={{ alignSelf: 'stretch', paddingTop: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', paddingBottom: 16, borderBottom: '1px rgba(196, 198, 208, 0.20) solid', justifyContent: 'space-between', alignItems: 'baseline', display: 'inline-flex' }}>
                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 30, fontFamily: 'Manrope', fontWeight: '800', lineHeight: '36px', wordWrap: 'break-word' }}>IN THE NEWS</div>
                    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 3, wordWrap: 'break-word' }}>External Coverage</div>
                </div>
                <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32 }}>
                    {/* Article 1 — NYT */}
                    <div style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', background: '#E7E8E9', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                                <img style={{ alignSelf: 'stretch', height: 150, objectFit: 'cover' }} src={image1} alt="The New York Times" />
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>The New York Times</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>How ETOH is Rewiring the<br />Modern Hospital Brain</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word' }}>A deep dive into the algorithmic<br />infrastructure that has reduced<br />operative delays by 22% in the nation&apos;s…</div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', textDecoration: 'underline', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word', cursor: 'pointer' }}>Read Article</div>
                        </div>
                    </div>
                    {/* Article 2 — Wired */}
                    <div style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', background: '#E7E8E9', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                                <img style={{ alignSelf: 'stretch', height: 150, objectFit: 'cover' }} src={image2} alt="Wired Magazine" />
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Wired Magazine</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>The Architects of Clinical<br />Precision</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word' }}>Beyond the EHR: ETOH&apos;s layer of<br />orchestration is the missing piece in the<br />trillion-dollar healthcare puzzle.</div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', textDecoration: 'underline', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word', cursor: 'pointer' }}>Read Article</div>
                        </div>
                    </div>
                    {/* Article 3 — Modern Healthcare */}
                    <div style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', background: '#E7E8E9', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex' }}>
                                <img style={{ alignSelf: 'stretch', height: 150, objectFit: 'cover' }} src={image3} alt="Modern Healthcare" />
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 12, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#006970', fontSize: 10, fontFamily: 'Inter', fontWeight: '600', textTransform: 'uppercase', lineHeight: '15px', letterSpacing: 1, wordWrap: 'break-word' }}>Modern Healthcare</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 16, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', lineHeight: '28px', wordWrap: 'break-word' }}>Operational Excellence at<br />Scale</div>
                        </div>
                        <div style={{ alignSelf: 'stretch', paddingBottom: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', overflow: 'hidden', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                                <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#43474F', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '20px', wordWrap: 'break-word' }}>Analyzing the ROI of ETOH deployments<br />across the largest healthcare networks<br />in North America.</div>
                            </div>
                        </div>
                        <div style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
                            <div style={{ alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#001736', fontSize: 12, fontFamily: 'Inter', fontWeight: '600', textDecoration: 'underline', textTransform: 'uppercase', lineHeight: '16px', letterSpacing: 1.20, wordWrap: 'break-word', cursor: 'pointer' }}>Read Article</div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
