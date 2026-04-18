import { useState } from "react";
import { useLanguage } from "../LanguageContext";
import CertCard from "../CertCard";
import CertDialog from "../CertDialog";
import { cert } from "../../data/certificationsData";
import "../../styles/certifications.css"; // Reusing your existing card CSS!

export default function AllCertsPage() {
    const { t } = useLanguage();
    
    // 1. Keep the same dialog logic we built for the home page
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogInfo, setDialogInfo] = useState({ img: "", title: "", details: "" });

    function showDialog(img, title, details) {
        setDialogInfo({ img, title, details });
        setOpenDialog(true);
    }

    function closeDialog() {
        setOpenDialog(false);
    }

    // 2. THE MAGIC TRICK: Get a list of unique topics from your data
    // This will create an array like: ["AI", "Design", "Web Development"]
    const uniqueTopics = [...new Set(cert.map(item => item.mainTopic))];

    return (
        <div className="all-certs-page" style={{ paddingTop: "100px", paddingBottom: "50px" }}>
            
            {/* Main Page Title */}
            <h1 className="section-title">{t("viewAllCerts")}</h1>

            {/* 3. Loop through the unique topics to create sections */}
            {uniqueTopics.map((topic, index) => {
                
                // Find all certificates that belong ONLY to this specific topic
                const sectionCerts = cert.filter(c => c.mainTopic === topic);

                return (
                    <div key={index} className="cert-category-section">
                        
                        {/* Section Header (e.g., "Web Development") */}
                        <h2 className="category-title" style={{ textAlign: "center", marginTop: "60px", color: "var(--secondary)" }}>
                            {/* We use translation if it exists, otherwise just show the English topic name */}
                            {t(topic) || topic} 
                        </h2>

                        {/* Reuse your existing Grid layout! */}
                        <div className="home-cert-container">
                            {sectionCerts.map((certi) => (
                                <CertCard
                                    key={certi.id}
                                    id={certi.id}
                                    photoPath={certi.photoPath}
                                    techTags={certi.techTags}
                                    customTitle={certi.customTitle}
                                    customDesc={certi.customDesc}
                                    showDialog={showDialog} // Pass the dialog function down
                                />
                            ))}
                        </div>
                        
                    </div>
                );
            })}

            {/* The Modal */}
            <CertDialog open={openDialog} dialogInfo={dialogInfo} closeDialog={closeDialog} />
        </div>
    );
}