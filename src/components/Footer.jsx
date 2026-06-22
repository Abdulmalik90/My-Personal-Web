import { useLanguage } from "./LanguageContext"
import "../styles/footer.css"
export default function Footer() {
    const {t} = useLanguage();

    const handleCopyEmail = (e) => {
        e.preventDefault(); // لمنع المتصفح من محاولة فتح تطبيق
        navigator.clipboard.writeText("contact@abdulmalik.dev");
        alert("تم نسخ الإيميل بنجاح! | The email has been copied!"); // أو يمكنك استخدام مكتبة Toast لرسالة أجمل
    };

    return (
        <>
            <h1 className="section-title">{t("footerTitle")}</h1>
            <p className="footer-subtitle">{t("footerSubTitle")}</p>
            <div id="email-link">
                <a href="mailto:contact@abdulmalik.dev" onClick={handleCopyEmail} style={{cursor: "pointer"}}><span class="material-symbols-outlined">mail</span> contact@abdulmalik.dev</a>
            </div>

            <div id="footer-link-container">
                
                <a href="https://github.com/Abdulmalik90" target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/abdulmalik-alkhalifh-b50243321/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.instagram.com/malik_dev5?igsh=ZzBoY3Jxc3FvbHc3" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <p className="footer-subtitle">{t("footerRightes")}</p>
            <br />
        </>
    )
}