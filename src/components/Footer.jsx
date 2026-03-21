import { useLanguage } from "./LanguageContext"
import "../styles/footer.css"
export default function Footer() {
    const {t} = useLanguage();

    return (
        <>
            <h1 className="section-title">{t("footerTitle")}</h1>
            <p className="footer-subtitle">{t("footerSubTitle")}</p>
            <div id="email-link">
                <a href=""><span class="material-symbols-outlined">mail</span> test@abdulmalik.dev</a>
            </div>

            <div id="footer-link-container">
                
                <a><i className="fa-brands fa-github"></i></a>
                <a><i className="fa-brands fa-linkedin"></i></a>
                <a><i class="fa-brands fa-instagram"></i></a>
            </div>
            <p className="footer-subtitle">{t("footerRightes")}</p>
            <br />
        </>
    )
}