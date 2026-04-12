import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import ProjectCard from "../ProjectCard";
import "../../styles/projects.css"

export default function ProjectsPage() {
    const { t } = useLanguage();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Replace this with your actual GitHub username!
    const GITHUB_USERNAME = "Abdulmalik90"; 

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
                if (!response.ok) throw new Error("Failed to fetch projects");
                
                const data = await response.json();
                
                // Filter out forks so it only shows your original work
                const myProjects = data.filter(repo => !repo.fork);
                
                setProjects(myProjects);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div style={{ paddingTop: "120px", paddingBottom: "50px", minHeight: "100vh" }}>
            <h1 className="section-title" style={{ textAlign: "center", marginBottom: "40px" }}>
                {t("proTitle")}
            </h1>

            {/* Loading and Error states */}
            {isLoading && <p style={{ textAlign: "center", color: "var(--text)" }}>Loading projects from GitHub...</p>}
            {error && <p style={{ textAlign: "center", color: "red" }}>Error: {error}</p>}

            <div id="projects-container">
                {!isLoading && !error && projects.map((repo) => {
                    const tags = repo.topics?.length > 0 ? repo.topics : (repo.language ? [repo.language] : ["Code"]);
                    
                    // Construct the URL to the raw image file on GitHub
                    const githubImageUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/main/preview.png`;

                    return (
                        <ProjectCard 
                            key={repo.id} 
                            id={repo.id} 
                            photoPath={githubImageUrl} // <--- Pass the GitHub URL here!
                            projectURL={repo.homepage || repo.html_url} 
                            gitURL={repo.html_url}
                            techTags={tags} 
                            customTitle={repo.name.replace(/-/g, " ")} 
                            customDesc={repo.description || "No description provided on GitHub."}
                        />
                    );
                })}
            </div>
        </div>
    );
}