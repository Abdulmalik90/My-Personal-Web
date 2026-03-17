import { useLanguage } from "./LanguageContext"
import "../styles/nav.css"
export default function Nav(){
    const {t} = useLanguage();
    return (
        <>
            <header>
                <a><h1>{t("name")}</h1></a>
                <div id="header-buttons-container">
                    <a href="#">{t("skills")}</a>
                    <a href="#">{t("projects")}</a>
                    <a href="#">{t("about")}</a>
                    <button>
                        <span class="material-symbols-outlined">download</span>
                        <p>{t("cvDownload")}</p>
                    </button>

                    <button>
                        <span class="material-symbols-outlined">dark_mode</span>
                    </button>
                </div>
            </header>
        </>
    )
}