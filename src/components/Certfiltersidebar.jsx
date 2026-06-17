import { useLanguage } from "./LanguageContext";

function FieldCheckbox({ checked, onChange, color, label, count }) {
    return (
        <label  className={`acp-checkbox${checked ? " is-checked" : ""}`} style={{ "--field-color": color }}>
            <span className="acp-checkbox-box">
                {checked && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0a1118" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </span>
            <span  className="acp-checkbox-label">{label}</span>
            <span className="acp-checkbox-count">{count}</span>
            <input type="checkbox" checked={checked} onChange={onChange} className="acp-checkbox-input" />
        </label>
    );
}

export default function CertFilterSidebar({ topics, active, onToggle, onClear, total, filteredCount }) {
    const { t } = useLanguage();

    return (
        <aside className="acp-sidebar">
            <div className="acp-sidebar-head">
                <span className="acp-sidebar-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.2" strokeLinecap="round">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                    {t("filterByField") || "Filter by field"}
                </span>
                {active.length > 0 && (
                    <button type="button" className="acp-clear-btn" onClick={onClear}>
                        {t("clearFilters") || "clear"}
                    </button>
                )}
            </div>

            <div className="acp-sidebar-list">
                {topics.map((field) => (
                    <FieldCheckbox
                        key={field.id}
                        label={field.label}
                        color={field.color}
                        count={field.count}
                        checked={active.includes(field.id)}
                        onChange={() => onToggle(field.id)}
                    />
                ))}
            </div>

            <div className="acp-sidebar-foot">
                {t("showingResults") || "Showing"} <span className="acp-foot-count">{filteredCount}</span> / {total}
                {active.length > 0 && (
                    <span>
                        {" "}
                        · {active.length} {active.length > 1 ? t("filtersWord") || "filters" : t("filterWord") || "filter"}
                    </span>
                )}
            </div>
        </aside>
    );
}