import { useLanguage } from "./LanguageContext";

// Notice we added customTitle and customDesc to the props here
export default function ProjectCard({id, photoPath, projectURL, gitURL, techTags, customTitle, customDesc}) {
    const { t } = useLanguage();
    
    // Check if we have a custom title/desc from GitHub. If not, use the translation.
    const title = customTitle ? customTitle : t(`proj${id}Title`);
    const subtitle = customDesc ? customDesc : t(`proj${id}SubTitle`);

    return (
        <div id={`card${id}`} className="project-card">
            
            <div className="card-top">
                <img src={photoPath} alt="Project Screenshot" /> 
                
                <div className="card-top-link-div">
                    <a href={projectURL} target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined">open_in_new</span>
                        {t("proLiveDemo")}
                    </a>
                    <a href={gitURL} target="_blank" rel="noopener noreferrer">
                        <i style={{fontSize: "20px"}} className="fa-brands fa-github"></i> GitHub
                    </a>
                </div>
            </div>
            
            {/* Use our dynamic title and subtitle variables here */}
            <h2 style={{ textTransform: "capitalize" }}>{title}</h2> 
            <p>{subtitle}</p>

            <div className="tech-stack-container">
                {techTags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}
            </div>

        </div>
    );
}