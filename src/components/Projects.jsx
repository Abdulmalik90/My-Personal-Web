import { useLanguage } from "./LanguageContext";
import "../styles/projects.css";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <>
            <h1 className="section-title">{t("proTitle")}</h1>
            <p className="section-subtitle">{t("proSubtitle")}</p> {/* Fixed typo in class name */}

            <div id="projects-container">
                {/* Project 1: Social Media Dashboard */}
                <div id="card1" className="project-card">
                    
                    {/* Top Image & Buttons */}
                    <div className="card-top">
                        {/* Make sure your image path is correct */}
                        <img src="/portal.png" alt="Project Screenshot" /> 
                        
                        <div className="card-top-link-div">
                            <a href="https://juportal.online/" target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined">open_in_new</span>
                                {t("proLiveDemo")}
                            </a>
                            <a href="https://github.com/Abdulmalik90/JIC-Website" target="_blank" rel="noopener noreferrer">
                                <i style={{fontSize: "20px"}} className="fa-brands fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    
                    {/* Bottom Content */}
                    <h2>{t("proj1Title")}</h2> {/* You can replace with t("proj1Title") */}
                    <p>{t("proj1SubTitle")}</p>

                    {/* Tech Stack Tags added here */}
                    <div className="tech-stack-container">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        
                    </div>

                </div>

                {/* Project 2: Social Media Dashboard */}
                <div id="card2" className="project-card">
                    
                    {/* Top Image & Buttons */}
                    <div className="card-top">
                        {/* Make sure your image path is correct */}
                        <img src="/socialMedia.png" alt="Project Screenshot" /> 
                        
                        <div className="card-top-link-div">
                            <a href="https://socialweb12.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined">open_in_new</span>
                                {t("proLiveDemo")}
                            </a>
                            <a href="https://github.com/Abdulmalik90/Social-media-web" target="_blank" rel="noopener noreferrer">
                                <i style={{fontSize: "20px"}} className="fa-brands fa-github"></i> Github
                            </a>
                        </div>
                    </div>
                    
                    {/* Bottom Content */}
                    <h2> {t("proj2Title")}</h2> {/* You can replace with t("proj1Title") */}
                    <p> {t("proj2SubTitle")}</p>

                    {/* Tech Stack Tags added here */}
                    <div className="tech-stack-container">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Bootstrap</span>
                        <span>API</span>
                    </div>

                </div>

                {/* Project 3: Social Media Dashboard */}
                <div id="card3" className="project-card">
                    
                    {/* Top Image & Buttons */}
                    <div className="card-top">
                        {/* Make sure your image path is correct */}
                        <img src="/ayat.png" alt="Project Screenshot" /> 
                        
                        <div className="card-top-link-div">
                            <a href="https://prayertime1.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined">open_in_new</span>
                                {t("proLiveDemo")}
                            </a>
                            <a href="https://github.com/Abdulmalik90/Prayer-times" target="_blank" rel="noopener noreferrer">
                                <i style={{fontSize: "20px"}} className="fa-brands fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    
                    {/* Bottom Content */}
                    <h2> {t("proj3Title")}</h2> 
                    <p> {t("proj3SubTitle")}</p>

                    {/* Tech Stack Tags added here */}
                    <div className="tech-stack-container">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Bootstrap</span>
                        <span>API</span>
                    </div>

                </div>

                {/* Project 4: Social Media Dashboard */}
                <div id="card4" className="project-card">
                    
                    {/* Top Image & Buttons */}
                    <div className="card-top">
                        {/* Make sure your image path is correct */}
                        <img src="/cayCafe.png" alt="Project Screenshot" /> 
                        
                        <div className="card-top-link-div">
                            <a href="https://cay-cafe.vercel.app/" target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined">open_in_new</span>
                                {t("proLiveDemo")}
                            </a>
                            <a href="https://github.com/Abdulmalik90/Cay-Cafe" target="_blank" rel="noopener noreferrer">
                                <i style={{fontSize: "20px"}} className="fa-brands fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                    
                    {/* Bottom Content */}
                    <h2> {t("proj4Title")}</h2> 
                    <p> {t("proj4SubTitle")}</p>

                    {/* Tech Stack Tags added here */}
                    <div className="tech-stack-container">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>TypeScript</span>
                        <span>React.js</span>
                    </div>

                </div>
            </div>

            <button>Preview All Projects</button>
        </>
    );
}