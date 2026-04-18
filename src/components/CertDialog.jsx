import "../styles/certDialog.css"
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
export default function CertDialog({ open, dialogInfo, closeDialog }){
    
    // NEW: Track if the closing animation is currently playing
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const dialog = document.getElementById("myDialog");
        
        if (open) {
            dialog.showModal();
            // THIS LOCKS THE BACKGROUND SCROLLING
            document.body.style.overflow = "hidden"; 
        } else {
            dialog.close();
            document.body.style.overflow = ""; 
            setIsClosing(false); // Reset state for the next time it opens
        }

        // Cleanup: Ensures scrolling is unlocked if the component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // NEW: Our custom close function with a delay
    const handleClose = () => {
        if (isClosing) return; // Prevent double-clicking
        
        setIsClosing(true); // Start the CSS animation
        
        // Wait 300ms (matching our CSS animation duration) before actually closing
        setTimeout(() => {
            closeDialog(); 
        }, 300);
    };
    
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            closeDialog();
            handleClose();
        }
    };

    // PRO-TIP: Intercept the 'Escape' key
    const handleCancel = (e) => {
        e.preventDefault(); // Stop the browser from instantly closing the dialog
        handleClose();      // Run our smooth animation instead!
    };

    const {t} = useLanguage();

    return (
        <dialog 
            id="myDialog" 
            className={isClosing ? "closing" : ""} 
            onCancel={handleCancel}
            onClick={handleOutsideClick}
        >
            <div className="modal-content">

                <div className="modal-image">
                    <img src={dialogInfo.img} alt={dialogInfo.title} />
                </div>

                <div className="modal-info">
                    <h2>{dialogInfo.title}</h2>
                    <p>{dialogInfo.details}</p>
                    <button id="closeBtn" onClick={handleClose}>{t("closeDialog")}</button>
                </div>
                
            </div>
        </dialog>
    )
}