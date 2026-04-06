import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
        // The setTimeout gives React 1 millisecond to render the page before trying to scroll
        setTimeout(() => {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            }
        }, 10);
        } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [hash]);

    return null;
}