import { useLanguage } from "./LanguageContext";
import { Link } from 'react-router-dom';
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "../styles/projects.css";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <>
            <h1 className="section-title">{t("proTitle")}</h1>
            <p className="section-subtitle">{t("proSubtitle")}</p> {/* Fixed typo in class name */}

            <div id="projects-container">
                {projects.map((project, i) => (
                        <ProjectCard key={i} id={project.id} photoPath={project.photoPath}
                        projectURL={project.projectURL} gitURL={project.gitURL}
                        techTags={project.techTags} />
                    ))}
                
            </div>

            <div className="prev-btn-container">
                <Link style={{textDecoration: "none"}} to="/Projects">
                    <button id="projects-preview-btn">{t("previewButton")}<span style={{margin: "5px"}} class="material-symbols-outlined">visibility</span></button>
                </Link>
            </div>
        </>
    );
}