import { useLanguage } from "./LanguageContext"
import { useTheme } from "./ThemeContext";
import "../styles/nav.css"
export default function Nav(){
    const { lang, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    return (
        <>
            <header>
                {/* logo */}
                <a><h1>{t("name")}</h1></a>

                {/* buttons container */}
                <div id="header-buttons-container">
                    <a href="#">{t("skills")}</a>
                    <a href="#">{t("projects")}</a>
                    <a href="#">{t("about")}</a>

                    {/* download button */}
                    <button id="download-btn">
                        <span className="material-symbols-outlined">download</span>
                        <p>{t("cvDownload")}</p>
                    </button>

                    {/* change language button */}
                    <button id="language-btn" onClick={toggleLanguage}>
                        <span class="material-symbols-outlined">language</span>
                        {t("language")}
                    </button>
                    
                    {/* dark/light mode button */}
                    <button id="dark_button" onClick={toggleTheme}>
                        <span className="material-symbols-outlined">dark_mode</span>
                    </button>
                </div>
            </header>
        </>
    )
}