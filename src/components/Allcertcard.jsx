import { useLanguage } from "./LanguageContext";

export default function AllCertCard({ certi, color, showDialog }) {
    const { t } = useLanguage();

    const title = certi.customTitle || t(`cert${certi.id}Title`);
    const subtitle = certi.customDesc || t(`cert${certi.id}SubTitle`);
    const topicLabel = t(certi.mainTopic) || certi.mainTopic;

    function openDialog() {
        showDialog(certi.photoPath, title, subtitle);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openDialog();
        }
    }

    return (
        <div
            className="acp-card"
            style={{ "--topic-color": color || "var(--secondary)" }}
            onClick={openDialog}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label={title}
        >
            <div className="acp-card-thumb">
                <img src={certi.photoPath} alt={title} />

                <div className="acp-card-view">
                    <span className="material-symbols-outlined">visibility</span>
                    {t("showCert")}
                </div>

                <div className="acp-card-no">§ {String(certi.id).padStart(2, "0")}</div>
                <div className="acp-card-fade" />
            </div>

            <div className="acp-card-body">
                <h3 className="acp-card-title">{title}</h3>
                <p className="acp-card-desc">{subtitle}</p>

                <div className="acp-card-tags">
                    <span className="acp-topic-pill">
                        <span className="acp-topic-dot" />
                        {topicLabel}
                    </span>
                    {certi.techTags?.map((tag, i) => (
                        <span key={i} className="acp-tech-pill">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}