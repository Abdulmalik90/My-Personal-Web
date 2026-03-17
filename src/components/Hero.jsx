import { useLanguage } from "./LanguageContext"
import "../styles/hero.css"
export default function Hero(){

    const {t} = useLanguage();

    return (
        <div id="hero-div">
            <h1>{t("heroTitle")}</h1>
            <p>{t("heroSubTitle")}</p>

            <div id="hero-buttons-container">
                <button id="view-btn">
                    {t("heroBtn1")}
                    <span style={{marginLeft: "6px", marginRight: "8px"}} class="material-symbols-outlined">arrow_forward</span>
                </button>

                <button id="contact-btn">
                    <span style={{marginRight: "6px", marginLeft: "6px"}} class="material-symbols-outlined">mail</span>
                    {t("heroBtn2")}
                </button>
            </div>
        </div>
    )
}