import { useLanguage } from "./LanguageContext";

function LangCheckbox({ checked, onChange, color, label, count }) {
    return (
        <label
            className={`pgp-checkbox${checked ? " is-checked" : ""}`}
            style={{ "--field-color": color }}
        >
            <span className="pgp-checkbox-box">
                {checked && (
                    <svg
                        width="11" height="11" viewBox="0 0 24 24"
                        fill="none" stroke="#0a1118"
                        strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </span>
            <span className="pgp-checkbox-label">{label}</span>
            <span className="pgp-checkbox-count">{count}</span>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="pgp-checkbox-input"
            />
        </label>
    );
}

export default function ProjectFilterSidebar({
    languages,
    active,
    onToggle,
    onClear,
    total,
    filteredCount,
}) {
    const { t } = useLanguage();

    return (
        <aside className="pgp-sidebar">
            <div className="pgp-sidebar-head">
                <span className="pgp-sidebar-title">
                    <svg
                        width="16" height="16" viewBox="0 0 24 24"
                        fill="none" stroke="var(--secondary)"
                        strokeWidth="2.2" strokeLinecap="round"
                    >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                    {t("filterByLanguage") || "Filter by language"}
                </span>
                {active.length > 0 && (
                    <button type="button" className="pgp-clear-btn" onClick={onClear}>
                        {t("clearFilters") || "clear"}
                    </button>
                )}
            </div>

            <div className="pgp-sidebar-list">
                {languages.map((lang) => (
                    <LangCheckbox
                        key={lang.id}
                        label={lang.label}
                        color={lang.color}
                        count={lang.count}
                        checked={active.includes(lang.id)}
                        onChange={() => onToggle(lang.id)}
                    />
                ))}
            </div>

            <div className="pgp-sidebar-foot">
                {t("showingResults") || "Showing"}{" "}
                <span className="pgp-foot-count">{filteredCount}</span> / {total}
                {active.length > 0 && (
                    <span>
                        {" "}· {active.length}{" "}
                        {active.length > 1
                            ? t("filtersWord") || "filters"
                            : t("filterWord") || "filter"}
                    </span>
                )}
            </div>
        </aside>
    );
}