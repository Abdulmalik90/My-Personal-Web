import { useLanguage } from "./LanguageContext";
import "../styles/certifications.css"

// Notice we added customTitle and customDesc to the props here
export default function CertCard({id, photoPath, techTags, customTitle, customDesc}) {
    const { t } = useLanguage();
    
    // Check if we have a custom title/desc from GitHub. If not, use the translation.
    const title = customTitle ? customTitle : t(`cert${id}Title`);
    const subtitle = customDesc ? customDesc : t(`cert${id}SubTitle`);

    return (
        <div id={`card_cert${id}`} className="cert-card">
            
            <div className="card-top">
                <img src={photoPath} alt="Project Screenshot" /> 
                
                <div className="card-top-link-div">
                    <button  target="_blank" rel="noopener noreferrer">
                        <span className="material-symbols-outlined">visibility</span>
                        {t("showCert")}
                    </button>
                    
                </div>
            </div>
            
            {/* Use our dynamic title and subtitle variables here */}
            <div className="card-text-content">
                <h2 style={{ textTransform: "capitalize" }}>{title}</h2> 
                <p>{subtitle}</p>
            </div>

            <div className="tech-stack-container">
                {techTags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}
            </div>

        </div>
    );
}