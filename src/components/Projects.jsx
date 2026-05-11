import { useLanguage } from "./LanguageContext";
import { Link } from 'react-router-dom';
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

export default function Projects() {
    const { t } = useLanguage();
    

    const featured = projects[0];
    const sideProjects = projects.slice(1, 4);

    return (
        <section id="projects-section">
            <style>{`
                @keyframes fsHRule { from { transform: scaleX(0); } to { transform: scaleX(1); } }
                @keyframes fsHFade { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
                @keyframes fsHBlink { 50% { opacity:0.3; } }
                @keyframes fsPCardIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform:none; } }
                .fs-pcard { animation: fsPCardIn .6s both; transition: transform .4s, border-color .4s; }
                .fs-pcard:hover { transform: translateY(-4px); border-color: var(--secondary) !important; }
                
            `}</style>

            {/* ── Section header ── */}
            <div className="fs-header-inner">
                {/* Top rule row */}
                <div className="fs-rule-row">
                    <div className="fs-rule-label">
                        <span className="fs-dim">§</span> <span className="fs-amber">02</span>{' '}
                        <span className="fs-dim" style={{ marginLeft: 4 }}>WORK</span>
                    </div>
                    <div className="fs-rule-line" />
                    <div className="fs-rule-meta">
                        <span className="fs-blink fs-amber">•</span>{' '}
                        {projects.length} projects · 2024–25
                    </div>
                </div>

                {/* Title + subtitle */}
                <div className="fs-title-row">
                    <h2 className="fs-heading" >
                        {t("proTitle")}{' '}
                        <em style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--secondary)' }}>{t("proTitle2")}</em>
                    </h2>
                    <p className="fs-subtitle">
                        {t("proSubtitle") || "A selection of products and prototypes — built solo, with classmates, or against tight deadlines. Each one taught me something."}
                    </p>
                </div>
            </div>

            {/* ── Projects grid ── */}
            <div id="projects-container">
                <ProjectCard
                    key={featured.id}
                    id={featured.id}
                    photoPath={featured.photoPath} projectURL={featured.projectURL}
                    gitURL={featured.gitURL}
                    techTags={featured.techTags}
                    year="2025"
                    featured={true}
                />
                <div className="side-cards-column">
                    {sideProjects.map(p => (
                        <ProjectCard
                            key={p.id}
                            id={p.id}
                            photoPath={p.photoPath} projectURL={p.projectURL}
                            gitURL={p.gitURL}
                            techTags={p.techTags}
                            featured={false}
                        />
                    ))}
                </div>
            </div>

            {/* ── Preview button ── */}
            <div className="prev-btn-container">
                <Link style={{ textDecoration: 'none' }} to="/Projects">
                    <button id="projects-preview-btn">
                        {t("previewButton")}
                        <span style={{ margin: '0 0 0 8px' }} className="material-symbols-outlined">visibility</span>
                    </button>
                </Link>
            </div>
        </section>
    );
}