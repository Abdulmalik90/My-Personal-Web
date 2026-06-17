import { useLanguage } from "./LanguageContext";
import CertCard from "./CertCard";
import { cert } from "../data/certificationsData";
import CertDialog from "./CertDialog";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Certifications(){


    const [openDialog, setOpenDialog] = useState(false);
    const [dialogInfo, setDialogInfo] = useState({
        img: "",
        title: "",
        details: ""
    })

    function showDialog(img, title, details){
        setDialogInfo({img, title, details})
        setOpenDialog(true)
    }

    function closeDialog() {
        setOpenDialog(false);
    }

    const {t} = useLanguage();

    return (
        <>
            {/* ── Section header ── */}
            <div className="fs-header-inner">
                {/* Top rule row */}
                <div className="fs-rule-row">
                    <div className="fs-rule-label">
                        <span className="fs-dim">§</span> <span className="fs-amber">04</span>{' '}
                        <span className="fs-dim" style={{ marginLeft: 4 }}>{t("certTitle2")}</span>
                    </div>
                    <div className="fs-rule-line" />
                    <div className="fs-rule-meta">
                        <span className="fs-blink fs-amber">•</span>{' '}
                        {t("certTitle2")}: {cert.length} 
                    </div>
                </div>

                {/* Title + subtitle */}
                <div className="fs-title-row">
                    <h2 className="fs-heading" >
                        {t("certTitle1")}{' '}
                        <em style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--secondary)' }}>{t("certTitle2")}</em>
                    </h2>
                    <p className="fs-subtitle">
                        {t("certSubtitle") || "A selection of products and prototypes — built solo, with classmates, or against tight deadlines. Each one taught me something."}
                    </p>
                </div>
            </div>

            <div>

                <div className="home-cert-container" >

                    {
                        
                        cert.slice(0, 3).map((certi, i)=>(
                            
                            <CertCard id={certi.id} 
                            photoPath={certi.photoPath}
                            techTags={certi.techTags}
                            customTitle={certi.customTitle}
                            customDesc={certi.customDesc}
                            showDialog={showDialog}
                            key={i}
                    />
                        ))
                    }
                    
                </div>
                
                {/* Preview all Certification */}
                <div className="view-all-container">
                    <Link to="/all-certifications" className="view-all-btn">
                        {t("viewAllCerts")}
                        <span className="material-symbols-outlined" style={{ fontSize: "1.2rem" }}>
                            arrow_forward
                        </span>
                    </Link>
                </div>    
                
            </div>

            

            <CertDialog open={openDialog} dialogInfo={dialogInfo} closeDialog={closeDialog} />
        </>
    )
}