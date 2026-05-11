import { useLanguage } from "./LanguageContext";

const MONO = 'ui-monospace,"JetBrains Mono",Menlo,monospace';
const AMBER = '#fbbf24';

// A bulletproof SVG GitHub Icon that doesn't rely on FontAwesome
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

export default function ProjectCard({ id, photoPath, projectURL, gitURL, techTags, customTitle, customDesc, featured, year }) {
    const { t } = useLanguage();

    const title = customTitle ? customTitle : t(`proj${id}Title`);
    const subtitle = customDesc ? customDesc : t(`proj${id}SubTitle`);
    const num = String(id).padStart(2, '0');

    if (featured) {
        return (
            <div className="fs-pcard" style={{
                position: 'relative', // Vital for overlay link
                background: 'var(--card)', border: '1px solid var(--other-buttons-border)', borderRadius: 18,
                overflow: 'hidden', display: 'flex', flexDirection: 'column',
                color: 'var(--text)', animationDelay: '0s',
            }}>
                {/* The invisible link that makes the whole card clickable */}
                <a href={projectURL} target="_blank" rel="noopener noreferrer" className="card-overlay-link" aria-label="View Project"></a>

                <div style={{ padding: '22px 26px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: MONO, fontSize: 12, color: "var(--secondary)", fontWeight: 600, letterSpacing: '0.15em' }}>★ FEATURED · {num}</span>
                    <span style={{ fontFamily: MONO, fontSize: 12, color: 'var(--text-lighter)' }}>{year || '2026'}</span>
                </div>

                <div style={{ margin: '18px 26px 0', height: 280, borderRadius: 12, overflow: 'hidden', background: 'var(--background)' }}>
                    <img src={photoPath} alt={title} className="fs-featured-img" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform .4s ease, opacity .3s ease' }} />
                </div>

                <div style={{ padding: '22px 26px 26px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20, marginBottom: 12 }}>
                        <h3 style={{ fontSize: 30, fontWeight: 700, margin: 0, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--text)' }}>{title}</h3>
                        
                        {/* Interactive Buttons (Must have z-index above the overlay) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', position: 'relative', zIndex: 2 }}>
                            {gitURL && (
                                <a href={gitURL} target="_blank" rel="noopener noreferrer" className="github-action-btn" title="View Source on GitHub">
                                    <GithubIcon />
                                </a>
                            )}
                            <a href={projectURL} target="_blank" rel="noopener noreferrer" className="a-perview">
                                <Arrow size={22} />
                            </a>
                        </div>
                    </div>
                    <p style={{ fontSize: 15, color: 'var(--text-lighter)', lineHeight: 1.65, margin: '0 0 16px 0' }}>{subtitle}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {techTags.map(tag => (
                            <span key={tag} style={{ position: 'relative', zIndex: 2, fontSize: 11, fontFamily: MONO, padding: '4px 10px', borderRadius: 6, background: 'rgba(0, 208, 255, 0.08)', color: "var(--secondary)", border: '1px solid rgba(0, 198, 253, 0.2)' }}>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fs-pcard" style={{
            position: 'relative', // Vital for overlay link
            background: 'var(--card)', border: '1px solid var(--other-buttons-border)', borderRadius: 14,
            padding: '18px 20px', display: 'flex', justifyContent: "start", gap: "20px",
            alignItems: 'center', color: 'var(--text)',
            animationDelay: `${0.1 + (id - 2) * 0.08}s`,
        }}>
            

            <div style={{ width: 72, height: 60, borderRadius: 8, overflow: 'hidden', background: 'var(--background)', flexShrink: 0 }}>
                <img src={photoPath} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', marginLeft: "3px", marginRight: "3px" }} />
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: "4px",  }}>
                    <span style={{ fontFamily: MONO, fontSize: 11, color: 'var(--text-lighter)' }}>{num}</span>
                    <h4 style={{ fontSize: 17, fontWeight: 700, margin: 0, letterSpacing: '-0.01em', color: 'var(--text)' }}>{title}</h4>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-lighter)', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{subtitle}</p>
            </div>
            
            {/* Interactive Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', position: 'relative', zIndex: 2 }}>
                {gitURL && (
                    <a href={gitURL} target="_blank" rel="noopener noreferrer" className="github-action-btn" title="View Source on GitHub">
                        <GithubIcon />
                    </a>
                )}
                <a href={projectURL} target="_blank" rel="noopener noreferrer" className="a-perview">
                    <Arrow size={20} />
                </a>
            </div>
        </div>
    );
}

function Arrow({ size }) {
    return (
        <div className="fs-arrow" style={{ transition: 'all .3s', color: 'var(--text)', flexShrink: 0, marginTop: size === 22 ? 6 : 0 }}>
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
        </div>
    );
}