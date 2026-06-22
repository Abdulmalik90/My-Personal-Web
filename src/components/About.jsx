import { useLanguage } from "./LanguageContext";
import "../styles/about.css";

const VIOLET = '#a78bfa';
const NAVY_2 = '#06101a';
const MUTED = '#94a3b8';
const DIM = '#64748b';
const MONO = 'ui-monospace,"JetBrains Mono",Menlo,monospace';

export default function About() {
    const { t } = useLanguage();

    const stats = [
        { k: '12+', l: t("aboutProjects") },
        { k: '3 '+ t("aboutCodingYears"), l: t("aboutCoding") },
        { k: '04', l: t("aboutCertifications")},
        { k: '∞', l: t("aboutDrink") },
    ];

    const currently = [
        { label: t("aboutCReading"),  value: t("aboutCReading2") },
        { label: t("aboutCBuilding"), value: t("aboutCBuilding2") },
        { label: t("aboutCLearning"), value: t("aboutCLearning2") },
        { label: t("aboutCDrinking"), value: t("aboutCDrinking2") },
    ];

    return (
        <section id="about-section">
            <style>{`
                @keyframes fsHRule  { from { transform: scaleX(0); } to { transform: scaleX(1); } }
                @keyframes fsHFade  { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform:none; } }
                @keyframes fsHBlink { 50% { opacity:0.3; } }
                @keyframes fsAFade  { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }
                @keyframes fsADot   { 0%,100% { opacity:1; } 50% { opacity:.4; } }
            `}</style>

            {/* ── Section header ── */}
            <div className="ab-header">
                <div className="ab-rule-row">
                    <div className="ab-rule-label">
                        <span style={{ color: DIM }}>§</span>{' '}
                        <span style={{ color: VIOLET }}>03</span>{' '}
                        <span style={{ color: DIM, marginLeft: 4 }}>{t("aboutProfile")}</span>
                    </div>
                    <div className="ab-rule-line" />
                    <div className="ab-rule-meta">
                        <span style={{ color: VIOLET, marginRight: 6, animation: 'fsHBlink 1.5s infinite', display: 'inline-block' }}>•</span>
                        {t("aboutHeader")}
                    </div>
                </div>

                <div className="ab-title-row">
                    <h5 className="ab-heading">
                        <em style={{color: "var(--text)"}}>{t("aboutTitle1")}<br />{t("aboutTitle2")}{' '}</em>
                        <em style={{ fontWeight: 400, fontStyle: 'italic', color: VIOLET }}>{t("aboutTitle3")}</em>
                    </h5>
                    <p className="ab-subtitle">
                        {t("about0")}
                    </p>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="ab-body">
                {/* Article / left column */}
                <div className="ab-article">
                    {/* Drop-cap paragraph */}
                    <p className="ab-dropcap-p">
                        <span className="ab-dropcap">{t("abouti")}</span>
                        <span style={{color: "var(--text-lighter)"}}>{t('about2').replace(/^I/, '')}</span>
                    </p>

                    {/* Two-column paragraph */}
                    <p className="ab-twocol-p">
                        {t('about1')} {t('about3')}
                    </p>

                    {/* Byline */}
                    <div className="ab-byline">
                        <div className="ab-byline-rule" />
                        <span className="ab-byline-name">— {t('name').toUpperCase()}</span>
                        <div className="ab-byline-rule" />
                    </div>
                </div>

                {/* Sidebar / right column */}
                <aside className="ab-sidebar">
                    {/* Currently panel */}
                    <div className="ab-panel">
                        <div className="ab-panel-header">
                            <span style={{ fontFamily: MONO, fontSize: 11, color: VIOLET, fontWeight: 600, letterSpacing: '0.2em' }}>{t("aboutCTitle")}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: MONO, fontSize: 11, color: DIM }}>
                                <span className="ab-live-dot" />
                                {t("aboutClive")}
                            </span>
                        </div>
                        <ul className="ab-currently-list">
                            {currently.map((row, i) => (
                                <li key={row.label} className="ab-currently-row" style={{ borderBottom: i < currently.length - 1 ? '1px dashed var(--ad-panel-border)' : 'none' }}>
                                    <span style={{ color: DIM, fontFamily: MONO, fontSize: 11 }}>{row.label}</span>
                                    <span style={{color: "var(--text)"}}>{row.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stats grid */}
                    <div className="ab-stats-grid">
                        {stats.map(s => (
                            <div key={s.l} className="ab-stat-card">
                                <div className="ab-stat-value">{s.k}</div>
                                <div className="ab-stat-label">{s.l.toUpperCase()}</div>
                            </div>
                        ))}
                    </div>

                    {/* Open to panel */}
                    <div className="ab-opento-panel">
                        <div style={{ fontFamily: MONO, fontSize: 11, color: VIOLET, fontWeight: 600, letterSpacing: '0.2em', marginBottom: 8 }}>{t("aboutOpenTo")}</div>
                        <div style={{ fontSize: 15, color: 'var(--text-lighter)', lineHeight: 1.5 }}>
                            {t("aboutOpenTo2")}
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}