import PageLayout from '../../../components/PageLayout'
import hero1 from './assets/hero1.png'
import section3 from './assets/section3.png'
import {
    User, X, Clock, CheckCircle2,
    FlaskConical, Activity, AlertTriangle,
    Users, Bell, Package,
    MonitorCheck, Zap
} from 'lucide-react'

export default function ForCliniciansPage() {
    return (
        <PageLayout fullWidth={true}>

            {/* ── Section 1: Hero ── */}
            <div style={{
                width: '100%',
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 128,
                paddingBottom: 128,
                position: 'relative',
                background: '#001736',
                overflow: 'hidden',
                boxSizing: 'border-box',
                display: 'flex',
            }}>
                {/* Background image overlay */}
                <img
                    src={hero1}
                    alt=""
                    style={{
                        width: 427,
                        height: '100%',
                        right: 0,
                        top: 0,
                        position: 'absolute',
                        opacity: 0.10,
                        objectFit: 'cover',
                    }}
                />
                <div style={{
                    width: '100%',
                    maxWidth: 1216,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 64,
                    alignItems: 'flex-start',
                }}>
                    {/* Left: text content */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 32,
                    }}>
                        {/* Label */}
                        <div style={{
                            display: 'inline-flex',
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 4,
                            paddingBottom: 4,
                            background: 'rgba(0, 105, 112, 0.20)',
                            borderRadius: 2,
                            width: 'fit-content',
                        }}>
                            <span style={{
                                color: '#96F1FA',
                                fontSize: 10,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                textTransform: 'uppercase',
                                lineHeight: '15px',
                                letterSpacing: 1,
                            }}>
                                Clinician Experience
                            </span>
                        </div>

                        {/* Headline */}
                        <div style={{
                            fontSize: 72,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 800,
                            lineHeight: '72px',
                            color: 'white',
                        }}>
                            The full<br />picture of<br />every patient.<br />In the pocket<br />of every<br />clinician.
                        </div>

                        {/* Subtext */}
                        <div style={{
                            maxWidth: 512,
                            color: '#7594CA',
                            fontSize: 20,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '32.5px',
                        }}>
                            Clinical decisions happen at the bedside, in the
                            corridor, and between consultations. ETOH goes
                            where the clinician goes — and it brings
                            everything they need with it.
                        </div>

                        {/* Buttons */}
                        <div style={{
                            paddingTop: 16,
                            display: 'flex',
                            gap: 16,
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <button style={{
                                paddingLeft: 32,
                                paddingRight: 32,
                                paddingTop: 16,
                                paddingBottom: 16,
                                background: 'linear-gradient(90deg, #001736 0%, #002B5B 100%)',
                                borderRadius: 6,
                                border: 'none',
                                outline: '1px rgba(196, 198, 208, 0.20) solid',
                                outlineOffset: -1,
                                cursor: 'pointer',
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                Request Deployment
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
                                color: 'white',
                                fontSize: 16,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}>
                                System Specs
                            </button>
                        </div>
                    </div>

                    {/* Right: image card */}
                    <div style={{
                        flex: '0 0 auto',
                        maxWidth: 710,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {/* Glow */}
                        <div style={{
                            width: 710,
                            height: 600,
                            position: 'absolute',
                            background: 'rgba(0, 105, 112, 0.10)',
                            borderRadius: 12,
                            filter: 'blur(32px)',
                        }} />
                        <div style={{
                            height: 600,
                            position: 'relative',
                            background: 'rgba(255, 255, 255, 0)',
                            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden',
                            borderRadius: 16,
                            outline: '1px rgba(255, 255, 255, 0.10) solid',
                            outlineOffset: -1,
                        }}>
                            <img
                                src={hero1}
                                alt="Clinical Terminal"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            {/* Patient info overlay */}
                            <div style={{
                                position: 'absolute',
                                left: 25,
                                bottom: 25,
                                right: 25,
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
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <div style={{
                                            width: 40,
                                            height: 40,
                                            background: '#006970',
                                            borderRadius: 12,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <User size={16} color="white" strokeWidth={2} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{
                                                color: '#43474F',
                                                fontSize: 10,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                textTransform: 'uppercase',
                                                lineHeight: '15px',
                                            }}>
                                                Active Patient
                                            </span>
                                            <span style={{
                                                color: '#001736',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                lineHeight: '20px',
                                            }}>
                                                Case #882-Alpha
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <span style={{
                                            color: '#43474F',
                                            fontSize: 10,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            textTransform: 'uppercase',
                                            lineHeight: '15px',
                                        }}>
                                            Live Vitals
                                        </span>
                                        <span style={{
                                            color: '#006970',
                                            fontSize: 14,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '20px',
                                        }}>
                                            STABLE
                                        </span>
                                    </div>
                                </div>
                                {/* Progress bar */}
                                <div style={{
                                    height: 4,
                                    background: '#EDEEEF',
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        width: '66%',
                                        height: '100%',
                                        background: '#006970',
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: The Clinical Imperative ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                background: '#F8F9FA',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    paddingLeft: 32,
                    paddingRight: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 80,
                }}>
                    {/* Title */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '40px',
                        }}>
                            The Clinical Imperative
                        </div>
                        <div style={{ width: 96, height: 4, background: '#006970' }} />
                    </div>

                    {/* Comparison cards */}
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 0, alignItems: 'stretch' }}>
                        {/* Legacy Workflow */}
                        <div style={{
                            flex: 1,
                            paddingTop: 48,
                            paddingBottom: 80,
                            paddingLeft: 48,
                            paddingRight: 48,
                            background: '#F3F4F5',
                            borderRadius: '16px 0 0 16px',
                            borderLeft: '4px rgba(196, 198, 208, 0.30) solid',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 32,
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Clock size={18} color="#43474F" strokeWidth={2} />
                                <span style={{
                                    color: '#43474F',
                                    fontSize: 24,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                }}>
                                    The Legacy Workflow
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                {[
                                    { title: 'Fragmented Memory', desc: 'Clinicians rely on scribbled notes on paper or physical charts that stay at the nursing station.' },
                                    { title: 'Information Lag', desc: 'Waiting for physical lab printouts or returning to a central PC to check for updates.' },
                                    { title: 'Administrative Friction', desc: 'High cognitive load from reconciling disparate data sources while standing at the bedside.' },
                                ].map((item) => (
                                    <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                        <X size={14} color="#BA1A1A" strokeWidth={3} style={{ marginTop: 5, flexShrink: 0 }} />
                                        <div>
                                            <div style={{
                                                color: '#001736',
                                                fontSize: 16,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                lineHeight: '24px',
                                            }}>
                                                {item.title}
                                            </div>
                                            <div style={{
                                                color: '#64748B',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                lineHeight: '20px',
                                            }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ETOH Standard */}
                        <div style={{
                            flex: 1,
                            paddingTop: 80,
                            paddingBottom: 48,
                            paddingLeft: 48,
                            paddingRight: 48,
                            position: 'relative',
                            background: '#001736',
                            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            overflow: 'hidden',
                            borderRadius: '0 16px 16px 0',
                            borderLeft: '4px #006970 solid',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 32,
                        }}>
                            {/* Decorative icon */}
                            <div style={{
                                position: 'absolute',
                                right: 48,
                                top: 48,
                                opacity: 0.10,
                            }}>
                                <Zap size={85} color="white" strokeWidth={1} />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Zap size={22} color="#96F1FA" strokeWidth={2} />
                                <span style={{
                                    color: '#96F1FA',
                                    fontSize: 24,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '32px',
                                }}>
                                    The ETOH Standard
                                </span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                {[
                                    { title: 'Instant Truth', desc: 'Live synchronization ensures that the device in your hand matches the reality of the ward.' },
                                    { title: 'Frictionless Decisions', desc: 'Integrated diagnostic data allows for immediate verification and prescription adjustments.' },
                                    { title: 'Closed-Loop Precision', desc: "Commands issued on-app trigger immediate workflows, eliminating the 'wait for clerk' phase." },
                                ].map((item) => (
                                    <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                                        <CheckCircle2 size={20} color="#96F1FA" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                                        <div>
                                            <div style={{
                                                color: 'white',
                                                fontSize: 16,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 700,
                                                lineHeight: '24px',
                                            }}>
                                                {item.title}
                                            </div>
                                            <div style={{
                                                color: '#7594CA',
                                                fontSize: 14,
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                lineHeight: '20px',
                                            }}>
                                                {item.desc}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 3: The Full Live Record ── */}
            <div style={{
                width: '100%',
                paddingTop: 96,
                paddingBottom: 96,
                background: '#F3F4F5',
                overflow: 'hidden',
                boxSizing: 'border-box',
            }}>
                <div style={{
                    maxWidth: 1280,
                    margin: '0 auto',
                    paddingLeft: 32,
                    paddingRight: 32,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 80,
                }}>
                    {/* Header */}
                    <div style={{
                        maxWidth: 672,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8,
                    }}>
                        <span style={{
                            color: '#006970',
                            fontSize: 11,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '16.5px',
                            letterSpacing: 1.1,
                            textAlign: 'center',
                        }}>
                            Comprehensive Visualization
                        </span>
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '40px',
                            textAlign: 'center',
                        }}>
                            The Full Live Record
                        </div>
                        <div style={{
                            paddingTop: 8,
                            color: '#43474F',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '24px',
                            textAlign: 'center',
                        }}>
                            No more scrolling through static PDFs. Explore clinical data through an interactive, live-updating architectural interface.
                        </div>
                    </div>

                    {/* Bento grid */}
                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gridTemplateRows: 'auto auto',
                        gap: 0,
                    }}>
                        {/* Row 1: Live Diagnostics (spans left), Nursing Obs (center), Critical Flags (right) */}
                        <div style={{ display: 'contents' }}>
                            {/* Live Diagnostics */}
                            <div style={{
                                padding: 32,
                                background: 'white',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <div>
                                    <FlaskConical size={24} color="#006970" strokeWidth={1.5} />
                                    <div style={{
                                        marginTop: 20,
                                        color: '#001736',
                                        fontSize: 20,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 700,
                                        lineHeight: '28px',
                                    }}>
                                        Live Diagnostics
                                    </div>
                                    <div style={{
                                        marginTop: 8,
                                        color: '#43474F',
                                        fontSize: 14,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                    }}>
                                        Real-time lab results with historical trend overlays and predictive drift analysis.
                                    </div>
                                </div>
                                {/* Bar chart */}
                                <div style={{
                                    marginTop: 32,
                                    height: 64,
                                    padding: 8,
                                    background: '#EDEEEF',
                                    borderRadius: 2,
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    gap: 4,
                                    overflow: 'hidden',
                                }}>
                                    <div style={{ flex: 1, height: '20%', opacity: 0.3, background: '#006970' }} />
                                    <div style={{ flex: 1, height: '45%', opacity: 0.5, background: '#006970' }} />
                                    <div style={{ flex: 1, height: '65%', opacity: 0.7, background: '#006970' }} />
                                    <div style={{ flex: 1, height: '90%', background: '#006970' }} />
                                    <div style={{ flex: 1, height: '55%', opacity: 0.8, background: '#006970' }} />
                                </div>
                            </div>

                            {/* Nursing Obs */}
                            <div style={{
                                padding: 32,
                                background: 'white',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <div style={{ paddingBottom: 16 }}>
                                    <Activity size={25} color="#006970" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 18,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                    }}>
                                        Nursing Obs
                                    </div>
                                    <div style={{
                                        color: '#43474F',
                                        fontSize: 12,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '15px',
                                        marginTop: 4,
                                    }}>
                                        Vitals, pain scales, and fluid balance
                                        charts updated by the minute.
                                    </div>
                                </div>
                            </div>

                            {/* Critical Flags */}
                            <div style={{
                                padding: 32,
                                position: 'relative',
                                background: '#001736',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}>
                                <div style={{ paddingBottom: 16 }}>
                                    <AlertTriangle size={22.5} color="#96F1FA" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <div style={{
                                        color: 'white',
                                        fontSize: 18,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                    }}>
                                        Critical Flags
                                    </div>
                                    <div style={{
                                        color: '#7594CA',
                                        fontSize: 12,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '15px',
                                        marginTop: 4,
                                    }}>
                                        AI-driven early warning scores (EWS)
                                        that alert you before a crisis occurs.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Prescription Integrity (spans 1 col with image), MDT Collaboration (spans 2 cols) */}
                        <div style={{ display: 'contents' }}>
                            {/* Prescription Integrity */}
                            <div style={{
                                padding: 32,
                                background: 'white',
                                borderRadius: 16,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 32,
                                gridColumn: 'span 2',
                            }}>
                                <div style={{
                                    width: 128,
                                    height: 128,
                                    flexShrink: 0,
                                    padding: 16,
                                    borderRadius: 12,
                                    outline: '4px rgba(0, 105, 112, 0.20) solid',
                                    outlineOffset: -4,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <img
                                        src={section3}
                                        alt="Prescription"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                        }}
                                    />
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 20,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '28px',
                                    }}>
                                        Prescription Integrity
                                    </div>
                                    <div style={{
                                        color: '#43474F',
                                        fontSize: 14,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                    }}>
                                        Full medication history including reconciliation notes,
                                        dosage schedules, and contraindication alerts.
                                    </div>
                                </div>
                            </div>

                            {/* MDT Collaboration */}
                            <div style={{
                                padding: 32,
                                background: 'white',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Users size={25} color="#006970" strokeWidth={1.5} />
                                <div style={{
                                    marginTop: 20,
                                    color: '#001736',
                                    fontSize: 20,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 700,
                                    lineHeight: '28px',
                                }}>
                                    MDT Collaboration
                                </div>
                                <div style={{
                                    marginTop: 8,
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                }}>
                                    Read input from specialists, physios, and social care in one unified timeline.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 4: Closing the Loop ── */}
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
                    gap: 0,
                }}>
                    {/* Left: text + steps */}
                    <div style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    }}>
                        <span style={{
                            color: '#006970',
                            fontSize: 11,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            lineHeight: '16.5px',
                            letterSpacing: 1.1,
                        }}>
                            The Technical Core
                        </span>
                        <div style={{
                            color: '#001736',
                            fontSize: 36,
                            fontFamily: 'Manrope, sans-serif',
                            fontWeight: 700,
                            lineHeight: '40px',
                        }}>
                            Closing the Loop
                        </div>
                        <div style={{
                            paddingTop: 8,
                            color: '#43474F',
                            fontSize: 16,
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            lineHeight: '26px',
                        }}>
                            The ETOH App isn&apos;t just a viewer—it&apos;s an actor. When you sign
                            off on a clinical decision, the system initiates an immediate
                            chain of operational events. This is &quot;Zero-Lag&quot; Clinical
                            Operations.
                        </div>

                        {/* Steps */}
                        <div style={{
                            paddingTop: 16,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: 24,
                        }}>
                            {[
                                { step: '1. Decision Input', desc: "Clinician enters an order (e.g., 'Escalate IV Fluids')." },
                                { step: '2. Automated Validation', desc: 'System checks against patient allergy profile and hospital protocol.', indent: true },
                                { step: '3. Action Trigger', desc: 'Pharmacy is notified, nursing task list is updated, and ward capacity is adjusted.', indent: true },
                            ].map((item, i) => (
                                <div key={item.step} style={{
                                    width: i === 0 ? '100%' : i === 1 ? 'calc(100% - 32px)' : 'calc(100% - 48px)',
                                    padding: 24,
                                    background: 'white',
                                    borderRadius: 4,
                                    borderLeft: '2px #006970 solid',
                                }}>
                                    <div style={{
                                        color: '#001736',
                                        fontSize: 16,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 600,
                                        lineHeight: '24px',
                                    }}>
                                        {item.step}
                                    </div>
                                    <div style={{
                                        color: '#64748B',
                                        fontSize: 14,
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        lineHeight: '20px',
                                    }}>
                                        {item.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Loop Is Sealed card */}
                    <div style={{
                        flex: 1,
                        padding: 48,
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {/* Background molecule image */}
                        <img
                            src={section3}
                            alt=""
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 0.05,
                                transform: 'rotate(12deg)',
                                transformOrigin: 'top left',
                            }}
                        />

                        <div style={{
                            width: '100%',
                            maxWidth: 448,
                            paddingTop: 111,
                            paddingBottom: 111,
                            position: 'relative',
                            background: 'rgba(255, 255, 255, 0.80)',
                            borderRadius: 12,
                            outline: '1px rgba(196, 198, 208, 0.30) solid',
                            outlineOffset: -1,
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        }}>
                            {/* Top floating icon */}
                            <div style={{
                                position: 'absolute',
                                top: -24,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 50,
                                height: 50,
                                background: 'white',
                                borderRadius: 8,
                                outline: '1px rgba(196, 198, 208, 0.20) solid',
                                outlineOffset: -1,
                                boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Bell size={24} color="#006970" strokeWidth={1.5} />
                            </div>

                            {/* Bottom-left floating icon */}
                            <div style={{
                                position: 'absolute',
                                bottom: 60,
                                left: -24,
                                width: 50,
                                height: 50,
                                background: 'white',
                                borderRadius: 8,
                                outline: '1px rgba(196, 198, 208, 0.20) solid',
                                outlineOffset: -1,
                                boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Users size={24} color="#006970" strokeWidth={1.5} />
                            </div>

                            {/* Bottom-right floating icon */}
                            <div style={{
                                position: 'absolute',
                                bottom: 60,
                                right: -24,
                                width: 50,
                                height: 50,
                                background: 'white',
                                borderRadius: 8,
                                outline: '1px rgba(196, 198, 208, 0.20) solid',
                                outlineOffset: -1,
                                boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.10), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Package size={24} color="#006970" strokeWidth={1.5} />
                            </div>

                            {/* Center content */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 8,
                            }}>
                                {/* Logo icon */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 24 }}>
                                    <MonitorCheck size={55} color="#001736" strokeWidth={1.2} />
                                    <div style={{
                                        position: 'relative',
                                        marginLeft: -8,
                                        marginTop: -20,
                                        width: 24,
                                        height: 24,
                                        background: '#006970',
                                        borderRadius: 12,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <span style={{
                                            color: 'white',
                                            fontSize: 10,
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 700,
                                            lineHeight: '15px',
                                        }}>
                                            LIVE
                                        </span>
                                    </div>
                                </div>
                                <div style={{
                                    color: '#001736',
                                    fontSize: 18,
                                    fontFamily: 'Manrope, sans-serif',
                                    fontWeight: 800,
                                    lineHeight: '28px',
                                    textAlign: 'center',
                                }}>
                                    The Loop Is Sealed
                                </div>
                                <div style={{
                                    color: '#43474F',
                                    fontSize: 14,
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    lineHeight: '20px',
                                    textAlign: 'center',
                                    maxWidth: 300,
                                }}>
                                    &quot;Documentation is no longer a separate task.
                                    Documentation IS the clinical action.&quot;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </PageLayout>
    )
}
