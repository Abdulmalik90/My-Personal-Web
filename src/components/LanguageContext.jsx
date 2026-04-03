import { createContext, useContext, useState, useEffect } from "react";
import { translation } from "../data/translation";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    // 1. Check local storage FIRST, if nothing is there, default to "en"
    const [lang, setLang] = useState(() => {
        return localStorage.getItem("lang") || "en";
    });

    // 2. useEffect runs every time 'lang' changes. It updates the HTML and saves to storage.
    useEffect(() => {
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = lang;
        document.getElementById("header-buttons-container").dir = lang === "ar" ? "rtl" : "rtl";
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLanguage = () => {
        setLang((prevLang) => (prevLang === "en" ? "ar" : "en"));
    };

    const t = (key) => translation[lang][key] || key;

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);