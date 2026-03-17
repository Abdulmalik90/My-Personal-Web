import { useState } from "react"; // 1. Import useState
import { useLanguage } from "./LanguageContext"
import { useTheme } from "./ThemeContext";
import "../styles/nav.css"

export default function Nav(){
    const { lang, toggleLanguage, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    
    // 2. Create state for the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Function to toggle the menu open/closed
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            {/* logo */}
            <a><h1>{t("name")}</h1></a>

            {/* 3. The Hamburger Button (Hidden on Desktop) */}
            <button className="hamburger-btn" onClick={toggleMenu}>
                <span className="material-symbols-outlined">
                    {/* Changes icon from 'menu' to 'close' (X) when open */}
                    {isMenuOpen ? "close" : "menu"} 
                </span>
            </button>

            {/* 4. buttons container - Add dynamic class "mobile-open" if state is true */}
            <div id="header-buttons-container" className={isMenuOpen ? "mobile-open" : ""}>
                {/* Clicking a link should close the menu, so we add onClick to these too */}
                <a href="#" onClick={() => setIsMenuOpen(false)}>{t("skills")}</a>
                <a href="#" onClick={() => setIsMenuOpen(false)}>{t("projects")}</a>
                <a href="#" onClick={() => setIsMenuOpen(false)}>{t("about")}</a>

                {/* download button */}
                <button id="download-btn">
                    <span className="material-symbols-outlined">download</span>
                    <p>{t("cvDownload")}</p>
                </button>

                {/* change language button */}
                <button id="language-btn" onClick={toggleLanguage}>
                    <span className="material-symbols-outlined">language</span>
                    {t("language")}
                </button>
                
                {/* dark/light mode button */}
                <button id="dark_button" onClick={toggleTheme}>
                    <span className="material-symbols-outlined">
                        {theme === "light" ? "dark_mode" : "light_mode"}
                    </span>
                </button>
            </div>
        </header>
    );
}