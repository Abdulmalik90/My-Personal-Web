import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../LanguageContext";
import GitHubProjectCard from "../GitHubProjectCard";
import ProjectFilterSidebar from "../ProjectFilterSidebar";
import "../../styles/Projectspage.css"

// Rotating accent palette assigned to whatever languages actually show up
// in the fetched repos. Add a new repo in a new language and a chip just appears.
const LANG_COLORS = ["#fbbf24", "#34d399", "#a78bfa", "#38bdf8", "#f97316", "#2dd4bf", "#fb7185"];

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // GitHub username (unchanged from your original)
    const GITHUB_USERNAME = "Abdulmalik90";

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
                if (!response.ok) throw new Error("Failed to fetch projects");
                const data = await response.json();
                // Filter out forks so it only shows your original work (unchanged)
                const myProjects = data.filter((repo) => !repo.fork);
                setRepos(myProjects);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Active language filters. Empty = show everything.
    const [active, setActive] = useState([]);
    function toggleLang(id) {
        setActive((curr) => (curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]));
    }

    // Build language taxonomy live from the fetched repos.
    const languages = useMemo(() => {
        const seen = [];
        for (const r of repos) {
            const lang = r.language || "Other";
            if (!seen.includes(lang)) seen.push(lang);
        }
        return seen.map((lang, i) => ({
            id: lang,
            label: t(lang) || lang,
            color: LANG_COLORS[i % LANG_COLORS.length],
            count: repos.filter((r) => (r.language || "Other") === lang).length,
        }));
    }, [repos, t]);

    const filtered =
        active.length === 0 ? repos : repos.filter((r) => active.includes(r.language || "Other"));

    return (
        <div className="pgp-page">
            {/* ── Header band (reuses your global fs-* editorial system) ── */}
            <div className="fs-header-inner">
                <div className="fs-rule-row">
                    <div className="fs-rule-label">
                        <span className="fs-dim">§</span> <span className="fs-amber">02</span>{" "}
                        <span className="fs-dim" style={{ marginLeft: 4 }}>{t("projHeader")}</span>
                    </div>
                    <div className="fs-rule-line" />
                    <div className="fs-rule-meta">
                        <span className="fs-blink fs-amber">•</span>{" "}
                        {isLoading ? "…" : `${filtered.length} / ${repos.length}`}
                    </div>
                </div>

                <div className="fs-title-row">
                    <h1 className="fs-heading">
                        {t("proTitle")}{" "}
                        <em style={{ fontWeight: 400, fontStyle: "italic", color: "var(--secondary)" }}>
                            {t("proTitle2")}
                        </em>
                    </h1>
                    <p className="fs-subtitle">
                        {t("allProjectsSubtitle") ||
                            "Every public repository — fetched live from GitHub, filterable by language."}
                    </p>
                </div>
            </div>

            {/* ── Loading / error states ── */}
            {isLoading && (
                <div className="pgp-state">
                    <p>{t("loadingProjects") || "Loading projects from GitHub…"}</p>
                </div>
            )}
            {error && (
                <div className="pgp-state pgp-state-error">
                    <p>{(t("projectsError") || "Error") + ": " + error}</p>
                </div>
            )}

            {/* ── Body: sidebar + grid ── */}
            {!isLoading && !error && (
                <div className="pgp-body">
                    <ProjectFilterSidebar
                        languages={languages}
                        active={active}
                        onToggle={toggleLang}
                        onClear={() => setActive([])}
                        total={repos.length}
                        filteredCount={filtered.length}
                    />

                    <div className="pgp-results">
                        {/* Active filter chips */}
                        <div className="pgp-chips-row">
                            {active.length === 0 ? (
                                <span className="pgp-chip-placeholder">
                                    {t("allLanguages") || "All languages"}
                                </span>
                            ) : (
                                active.map((id) => {
                                    const lang = languages.find((l) => l.id === id);
                                    if (!lang) return null;
                                    return (
                                        <span
                                            key={id}
                                            className="pgp-chip"
                                            style={{ "--chip-color": lang.color }}
                                        >
                                            {lang.label}
                                            <button
                                                type="button"
                                                aria-label={t("removeFilter") || "Remove filter"}
                                                onClick={() => toggleLang(id)}
                                            >
                                                <svg
                                                    width="13" height="13" viewBox="0 0 24 24"
                                                    fill="none" stroke="currentColor"
                                                    strokeWidth="2.5" strokeLinecap="round"
                                                >
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
                            <div className="pgp-empty">
                                <div className="pgp-empty-title">
                                    {t("noProjectsMatch") || "No projects match those filters"}
                                </div>
                                <div className="pgp-empty-sub">
                                    {t("tryRemovingFilter") || "Try removing a language."}
                                </div>
                            </div>
                        ) : (
                            <div className="pgp-grid">
                                {filtered.map((repo) => {
                                    const lang = repo.language || "Other";
                                    const langMeta = languages.find((l) => l.id === lang);
                                    return (
                                        <GitHubProjectCard
                                            key={repo.id}
                                            repo={repo}
                                            githubUsername={GITHUB_USERNAME}
                                            color={langMeta ? langMeta.color : "var(--secondary)"}
                                            langLabel={langMeta ? langMeta.label : lang}
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}