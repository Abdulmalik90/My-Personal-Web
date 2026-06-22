import { useMemo, useState } from "react";
import { useLanguage } from "../LanguageContext";
import CertDialog from "../CertDialog";
import AllCertCard from "../AllCertCard"; //TEMP1
import CertFilterSidebar from "../CertFilterSidebar";   //TEMP2
import { cert } from "../../data/certificationsData";
import "../../styles/allCertsPage.css";

// Rotating accent palette assigned to whatever topics actually exist in
// certificationsData.js (in the order they first appear). Add a new
// mainTopic to the data and it just shows up here automatically.
const TOPIC_COLORS = ["#34d399", "#a78bfa", "#38bdf8", "#fbbf24", "#f97316", "#2dd4bf"];

export default function AllCertsPage() {
    const { t } = useLanguage();

    // Same dialog contract as the home section — untouched CertDialog.
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogInfo, setDialogInfo] = useState({ img: "", title: "", details: "" });

    function showDialog(img, title, details) {
        setDialogInfo({ img, title, details });
        setOpenDialog(true);
    }

    function closeDialog() {
        setOpenDialog(false);
    }

    // Active mainTopic filters. Empty array = show everything.
    const [active, setActive] = useState([]);

    function toggleTopic(id) {
        setActive((curr) => (curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]));
    }

    // Build the field/topic taxonomy straight from your data — not hardcoded.
    const topics = useMemo(() => {
        const uniqueTopics = [...new Set(cert.map((c) => c.mainTopic))];
        return uniqueTopics.map((topic, i) => ({
            id: topic,
            label: t(topic) || topic,
            color: TOPIC_COLORS[i % TOPIC_COLORS.length],
            count: cert.filter((c) => c.mainTopic === topic).length,
        }));
    }, [t]);

    const filtered =
        active.length === 0 ? cert : cert.filter((certi) => active.includes(certi.mainTopic));

    return (
        <div className="acp-page">
            {/* ── Header band (same editorial system as the home section) ── */}
            <div className="fs-header-inner">
                <div className="fs-rule-row">
                    <div className="fs-rule-label">
                        <span className="fs-dim">§</span> <span className="fs-amber">04</span>{" "}
                        <span className="fs-dim" style={{ marginLeft: 4 }}>{t("certTitle2")}</span>
                    </div>
                    <div className="fs-rule-line" />
                    <div className="fs-rule-meta">
                        <span className="fs-blink fs-amber">•</span>{" "}
                        {filtered.length} / {cert.length}
                    </div>
                </div>

                <div className="fs-title-row">
                    <h1 className="fs-heading">
                        {t("certTitle1")}{" "}
                        <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--secondary)" }}>
                            {t("certTitle2")}
                        </em>
                    </h1>
                    <p className="fs-subtitle">
                        {t("allCertsSubtitle") || "Every credential I've earned, filterable by field."}
                    </p>
                </div>
            </div>

            {/* ── Body: filter sidebar + results grid ── */}
            <div className="acp-body">
                <CertFilterSidebar
                    topics={topics}
                    active={active}
                    onToggle={toggleTopic}
                    onClear={() => setActive([])}
                    total={cert.length}
                    filteredCount={filtered.length}
                />

                <div className="acp-results">
                    {/* Active filter chips */}
                    <div className="acp-chips-row">
                        {active.length === 0 ? (
                            <span className="acp-chip-placeholder">{t("allFields") || "All fields"}</span>
                        ) : (
                            active.map((id) => {
                                const topic = topics.find((tp) => tp.id === id);
                                if (!topic) return null;
                                return (
                                    <span key={id} className="acp-chip" style={{ "--chip-color": topic.color }}>
                                        {topic.label}
                                        <button
                                            type="button"
                                            aria-label={t("removeFilter") || "Remove filter"}
                                            onClick={() => toggleTopic(id)}
                                        >
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </span>
                                );
                            })
                        )}
                    </div>

                    {filtered.length === 0 ? (
                        <div className="acp-empty">
                            <div className="acp-empty-title">
                                {t("noCertsMatch") || "No certifications match those filters"}
                            </div>
                            <div className="acp-empty-sub">{t("tryRemovingFilter") || "Try removing a field."}</div>
                        </div>
                    ) : (
                        <div className="acp-grid">
                            {filtered.map((certi) => (
                                <AllCertCard
                                    key={certi.id}
                                    certi={certi}
                                    color={(topics.find((tp) => tp.id === certi.mainTopic) || {}).color}
                                    showDialog={showDialog}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <CertDialog open={openDialog} dialogInfo={dialogInfo} closeDialog={closeDialog} />
        </div>
    );
}