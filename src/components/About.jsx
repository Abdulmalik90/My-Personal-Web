import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import "../styles/about.css"

export default function About(){
    const {t} = useLanguage();
    const { theme } = useTheme();

    return (
        <>
            <h1 className="section-title">{t("aboutTitle")}</h1>

            <div id="about-container">
                <div id="about-img-container">
                    <img 
                        src={theme === "light" ? "/about-light.png" : "/about-dark.png"} 
                        alt="About me graphic" 
                    />
                </div>

                <div id="about-text-container">
                    <h3 id="first-about-h3">{t("about1")}</h3>
                    <br />
                    <h3>{t("about2")}</h3>
                    <br />
                    <h3>{t("about3")}</h3>
                </div>
            </div>
        </>
    )
}