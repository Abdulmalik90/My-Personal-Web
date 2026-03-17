import { useLanguage } from "./LanguageContext";

export default function Skills(){
    const {t} = useLanguage();

    return (
        <>
            <h1 className="section-title">{t("skTitle")}</h1>
            <p className="sectoin-subtitle">{t("skSubTitle")}</p>

            <div id="skills-btn-container">
                <button className="skill-btn">HTML</button>
                <button className="skill-btn">CSS</button>
                <button className="skill-btn">JavaScript</button>
                <button className="skill-btn">TypeScript</button>
                <button className="skill-btn">React.js</button>
                <button className="skill-btn">Bootstrap & MUI</button>
                <button className="skill-btn">APIs</button>
                <button className="skill-btn">Java</button>
            </div>
        </>
    )
}