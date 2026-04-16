import { useLanguage } from "./LanguageContext";
import CertCard from "./CertCard";
import { cert } from "../data/certificationsData";
export default function Certifications(){
    const {t} = useLanguage();
    return (
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
                        key={i}
                />
                    ))
                }
                
            </div>
        </div>
    )
}