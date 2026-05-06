import { useLanguage } from "./LanguageContext";
import "../styles/skills.css";

export default function Skills() {
    const { t } = useLanguage();
    
    // Foolproof check: If the translated name is Arabic, we are 100% in Arabic mode.
    const isArabic = t("name") === 'عبدالملك';

    return (
        <section id="skills-section">
            
            {/* Top Bar now uses translation keys */}
            <div className="skills-top-bar" dir={isArabic ? "rtl" : "ltr"}>
                <div className="status-left">
                    <span className="section-symbol">§</span>
                    <span className="section-num">01</span>
                    <span className="section-label">{t("skTopBarLabel")}</span>
                </div>
                
                <div className="status-line"></div>
                
                <div className="status-right">
                    {!isArabic && <span className="status-dot"></span>}
                    <span className="status-text">{t("skTopBarText")}</span>
                    {isArabic && <span className="status-dot" style={{ marginInlineEnd: 0, marginInlineStart: '10px' }}></span>}
                </div>
            </div>

            {/* Header now uses translation keys and dynamic line breaks */}
            <div className="skills-header">
                <h2 className="skills-title">
                    {t("skTitle1")} 
                    {!isArabic && <br />} {/* Only breaks the line in English */}
                    {t("skTitle2")} 
                    <span className="highlight-italic">{t("skTitle3")}</span>
                </h2>
                
                <p className="skills-desc">{t("skSubTitle")}</p>
            </div>

            {/* Added Python and Vibe Engineering */}
            <div id="skills-btn-container" dir="ltr">
                <button className="skill-btn">HTML</button>
                <button className="skill-btn">CSS</button>
                <button className="skill-btn">JavaScript</button>
                <button className="skill-btn">TypeScript</button>
                <button className="skill-btn">React.js</button>
                <button className="skill-btn">Bootstrap & MUI</button>
                <button className="skill-btn">APIs</button>
                <button className="skill-btn">Java</button>
                <button className="skill-btn">Python</button>
                <button className="skill-btn">Vibe Engineering</button>
            </div>
        </section>
    );
}