import { useLanguage } from "./LanguageContext";
import CertCard from "./CertCard";
import { cert } from "../data/certificationsData";
import CertDialog from "./CertDialog";
import { useState } from "react";
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
            <div>
                <h1 className="section-title">{t("certTitle")}</h1>

                <div className="home-cert-container" >

                    {
                        
                        cert.map((certi, i)=>(
                            
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

                
            </div>

            <CertDialog open={openDialog} dialogInfo={dialogInfo} closeDialog={closeDialog} />
        </>
    )
}