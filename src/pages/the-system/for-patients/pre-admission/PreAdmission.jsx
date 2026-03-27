import PageLayout from '../../../../components/PageLayout'
import hero from './assets/hero.png'
import section3 from './assets/section3.png'
import gradientBg from './assets/gradient-below hero backgeround.png'
import { CheckCircle2, FileText, ClipboardList, History, BarChart2, RefreshCw, ArrowRight } from 'lucide-react'

export default function PreAdmissionPage() {
    return (
        <PageLayout fullWidth={true}>

            {/* ── Section 1: Hero ── */}
            <div style={{
                width: '100%',
                paddingTop: 80,
                paddingBottom: 128,
                paddingLeft: 32,
                paddingRight: 32,
                position: 'relative',
                background: '#F8F9FA',
                overflow: 'hidden',
                boxSizing: 'border-box',
            }}>
                {/* Ambient glow */}
                <div style={{
                    width: 600,
                    height: 600,
                    position: 'absolute',
                    right: -100,
                    top: -300,
                    background: 'rgba(0, 105, 112, 0.05)',
                    borderRadius: 12,
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }} />

                <div style={{
                    maxWidth: 1216,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 80,
                    alignItems: 'flex-start',
                }}>
                    {/* Left: text content */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                        paddingTop: 32,
                    }}>
                        <span style={{
                            color: '#006970',
                            fontSize: 14,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '20px',
                            letterSpacing: 2.8,
                        }}>
                            Care Continuity Ecosystem
                        </span>
                        <div style={{
                            color: '#001736',
                            fontSize: 72,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            lineHeight: '72px',
                        }}>
                            Care begins before<br />the patient walks<br />through the door.
                        </div>
                        <div style={{
                            maxWidth: 672,
                            paddingTop: 8,
                            color: '#43474F',
                            fontSize: 20,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '32.5px',
                        }}>
                            The hospital visit is one moment in a longer health journey. ETOH
                            connects to that journey from the beginning, ensuring every detail is
                            captured before arrival.
                        </div>
                        <div style={{
                            paddingTop: 24,
                            display: 'flex',
                            gap: 16,
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <button style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 17,
                                paddingBottom: 17,
                                background: '#001736',
                                borderRadius: 6,
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '24px',
                            }}>
                                Start Pre-Admission
                                <ArrowRight size={16} color="white" strokeWidth={2} />
                            </button>
                            <button style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: 'transparent',
                                borderRadius: 6,
                                border: 'none',
                                outline: '1px rgba(196, 198, 208, 0.30) solid',
                                outlineOffset: -1,
                                cursor: 'pointer',
                                color: '#001736',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                lineHeight: '24px',
                            }}>
                                View Care Journey
                            </button>
                        </div>
                    </div>

                    {/* Right: Hero image */}
                    <div style={{
                        flex: '0 0 479px',
                        position: 'relative',
                        background: 'rgba(255,255,255,0)',
                        boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        overflow: 'hidden',
                        borderRadius: 8,
                    }}>
                        <img
                            src={hero}
                            alt="Pre-Admission"
                            style={{
                                width: '100%',
                                height: 598,
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        {/* Gradient overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(0deg, rgba(0, 23, 54, 0.40) 0%, rgba(0, 23, 54, 0) 100%)',
                        }} />
                        {/* Status widget */}
                        <div style={{
                            position: 'absolute',
                            left: 32,
                            bottom: 32,
                            right: 32,
                            padding: 24,
                            background: 'rgba(255, 255, 255, 0.80)',
                            borderRadius: 8,
                            outline: '1px rgba(255, 255, 255, 0.20) solid',
                            outlineOffset: -1,
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 16,
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                <div style={{
                                    width: 40,
                                    height: 40,
                                    background: '#006970',
                                    borderRadius: 12,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                }}>
                                    <CheckCircle2 size={20} color="white" strokeWidth={2} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{
                                        color: '#001736',
                                        fontSize: 16,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '24px',
                                    }}>
                                        Verification Complete
                                    </span>
                                    <span style={{
                                        color: '#43474F',
                                        fontSize: 12,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '16px',
                                    }}>
                                        Intake documentation processed
                                    </span>
                                </div>
                            </div>
                            {/* Progress bar */}
                            <div style={{
                                height: 8,
                                background: '#E7E8E9',
                                borderRadius: 12,
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    width: '75%',
                                    height: '100%',
                                    background: '#006970',
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: Precision Intake Modules ── */}
            <div style={{
                width: '100%',
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 96,
                paddingBottom: 96,
                background: '#F3F4F5',
                boxSizing: 'border-box',
                position: 'relative',
            }}>
                {/* Gradient background image */}
                <img
                    src={gradientBg}
                    alt=""
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.4,
                        pointerEvents: 'none',
                    }}
                />
                <div style={{
                    maxWidth: 1216,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 64,
                    position: 'relative',
                }}>
                    {/* Header row */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}>
                        <div style={{ maxWidth: 576, display: 'flex', flexDirection: 'column', gap: 16 }}>
                            <div style={{
                                color: '#001736',
                                fontSize: 36,
                                fontFamily: 'Manrope, sans-serif',
                                fontWeight: 700,
                                lineHeight: '40px',
                            }}>
                                Precision Intake Modules
                            </div>
                            <div style={{
                                color: '#43474F',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                lineHeight: '24px',
                            }}>
                                We&apos;ve replaced manual paperwork with architectural data streams. Every
                                module is designed for clinical accuracy and patient ease.
                            </div>
                        </div>
                        {/* Pagination dots */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <div style={{ width: 48, height: 2, background: '#006970' }} />
                            <div style={{ width: 16, height: 2, background: '#C4C6D0' }} />
                        </div>
                    </div>

                    {/* Cards grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 0,
                    }}>
                        {[
                            {
                                icon: <FileText size={24} color="#006970" strokeWidth={1.5} />,
                                title: 'Intake Processing',
                                desc: 'Complete all regulatory and administrative documentation digitally. Reduce on-site wait times by up to 85% through pre-arrival processing.',
                                features: ['Zero-Paper Intake', 'Legal e-Signatures'],
                                active: false,
                            },
                            {
                                icon: <ClipboardList size={30} color="#006970" strokeWidth={1.5} />,
                                title: 'Guided Preparation',
                                desc: 'Personalized guidance for your upcoming procedure. Clear instructions on fasting, medication adjustments, and arrival logistics.',
                                features: ['Step-by-step guidance', 'Direct Specialist Chat'],
                                active: false,
                            },
                            {
                                icon: <History size={29} color="#006970" strokeWidth={1.5} />,
                                title: 'Clinical History',
                                desc: 'Securely share your medical timeline and past investigations. Our AI-driven engine maps your data to clinical standards automatically.',
                                features: ['Unified EHR integration', 'Smart History Mapping'],
                                active: true,
                            },
                        ].map(({ icon, title, desc, features, active }) => (
                            <div key={title} style={{
                                background: 'white',
                                borderRadius: 8,
                                borderLeft: active ? '2px solid #006970' : '2px solid transparent',
                                padding: '40px 42px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 0,
                                minHeight: 396,
                                position: 'relative',
                            }}>
                                <div style={{ marginBottom: 40 }}>{icon}</div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 24,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                    marginBottom: 16,
                                }}>
                                    {title}
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 16,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '26px',
                                    marginBottom: 32,
                                    flex: 1,
                                }}>
                                    {desc}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    {features.map((f) => (
                                        <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <CheckCircle2 size={12} color="#006970" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                                            <span style={{
                                                color: '#001736',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 500,
                                                lineHeight: '20px',
                                            }}>
                                                {f}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Section 3: Digital Continuity ── */}
            <div style={{
                width: '100%',
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 96,
                paddingBottom: 96,
                background: '#F8F9FA',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    maxWidth: 1216,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 64,
                    alignItems: 'center',
                }}>
                    {/* Left: image */}
                    <div style={{ flex: 1 }}>
                        <img
                            src={section3}
                            alt="Digital Continuity"
                            style={{
                                width: '100%',
                                height: 500,
                                objectFit: 'cover',
                                display: 'block',
                                boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                borderRadius: 8,
                            }}
                        />
                    </div>

                    {/* Right: content */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24,
                    }}>
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '45px',
                        }}>
                            Digital Continuity: The Pre-<br />Arrival Advantage
                        </div>
                        <div style={{
                            color: '#43474F',
                            fontSize: 18,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '29.25px',
                        }}>
                            By the time you walk through our doors, your care team is already
                            briefed. Your digital twin—a comprehensive map of your clinical
                            history and current investigations—is ready for review.
                        </div>
                        <div style={{
                            paddingTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 32,
                        }}>
                            {[
                                {
                                    icon: <BarChart2 size={18} color="#006970" strokeWidth={2} />,
                                    title: 'Pre-Admission Analytics',
                                    desc: 'Our systems analyze your history to flag potential risks before you even arrive at the facility.',
                                },
                                {
                                    icon: <RefreshCw size={20} color="#006970" strokeWidth={2} />,
                                    title: 'Real-time Coordination',
                                    desc: 'Directly sync investigations from external labs into your admission profile instantly.',
                                },
                            ].map(({ icon, title, desc }) => (
                                <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 24 }}>
                                    <div style={{
                                        width: 48,
                                        height: 48,
                                        flexShrink: 0,
                                        background: 'rgba(0, 105, 112, 0.10)',
                                        borderRadius: 4,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        {icon}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                        <span style={{
                                            color: '#001736',
                                            fontSize: 18,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '28px',
                                        }}>
                                            {title}
                                        </span>
                                        <span style={{
                                            color: '#43474F',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            lineHeight: '20px',
                                        }}>
                                            {desc}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 4: CTA ── */}
            <div style={{
                width: '100%',
                paddingLeft: 32,
                paddingRight: 32,
                paddingBottom: 80,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    paddingLeft: 272,
                    paddingRight: 272,
                    paddingTop: 80,
                    paddingBottom: 80,
                    position: 'relative',
                    background: '#001736',
                    overflow: 'hidden',
                    borderRadius: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 24,
                    boxSizing: 'border-box',
                }}>
                    {/* Glows */}
                    <div style={{
                        position: 'absolute',
                        width: 384,
                        height: 384,
                        right: -96,
                        top: 98,
                        background: 'rgba(0, 105, 112, 0.20)',
                        borderRadius: 12,
                        filter: 'blur(50px)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute',
                        width: 384,
                        height: 384,
                        left: -96,
                        top: -96,
                        background: 'rgba(0, 43, 91, 0.40)',
                        borderRadius: 12,
                        filter: 'blur(50px)',
                        pointerEvents: 'none',
                    }} />

                    <div style={{
                        color: 'white',
                        fontSize: 48,
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 700,
                        lineHeight: '48px',
                        textAlign: 'center',
                        position: 'relative',
                    }}>
                        Ready to begin your journey?
                    </div>
                    <div style={{
                        color: '#7594CA',
                        fontSize: 18,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        lineHeight: '28px',
                        textAlign: 'center',
                        position: 'relative',
                        maxWidth: 672,
                    }}>
                        Access your secure portal to start the pre-admission process and connect
                        with your care team.
                    </div>
                    <div style={{
                        paddingTop: 16,
                        display: 'flex',
                        gap: 16,
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        position: 'relative',
                    }}>
                        <button style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 17,
                            paddingBottom: 17,
                            background: '#006970',
                            borderRadius: 6,
                            border: 'none',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                        }}>
                            Secure Login
                        </button>
                        <button style={{
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 16,
                            paddingBottom: 16,
                            background: 'transparent',
                            borderRadius: 6,
                            border: 'none',
                            outline: '1px rgba(255, 255, 255, 0.20) solid',
                            outlineOffset: -1,
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            lineHeight: '24px',
                        }}>
                            Help Center
                        </button>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
