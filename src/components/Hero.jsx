import { useLanguage } from "./LanguageContext";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import "../styles/hero.css";

export default function Hero() {
    const { t, language } = useLanguage(); 
    
    // Relying strictly on the language state to prevent RTL false positives
    const isArabic = language === 'ar'; 

    return (
        <div id="hero-container">
        
        <div className="hero-left">
            <div className="terminal-prompt" dir="ltr">
            <span className="prompt-path">~/portfolio</span> <span className="prompt-command">$ whoami</span>
            </div>
            
            {/* FIXED: Name and Greeting Logic */}
            <h1>
                {t("heroWelcome")}
                <span style={{ color: "var(--secondary)" }}>
                    {t("name")}
                </span>
                <span className="blinking-cursor" style={{ color: "var(--secondary)" }}>_</span>
            </h1>

            <div className="typing-wrapper" dir="ltr">
            <span className="code-keyword">const</span> <span className="code-variable">role</span> <span className="code-operator">=</span> <span className="code-string">"</span>
            <TypeAnimation
                sequence={[
                'Problem Solver.', 2000,
                'Full Stack Developer.', 2000,
                'UI Engineer.', 2000,
                ]}
                wrapper="span"
                speed={50}
                className="code-string typing-text"
                repeat={Infinity}
                cursor={true}
            />
            <span className="code-string">"</span>
            </div>

            <p className="hero-description">{t("heroSubTitle")}</p>

            <div id="hero-buttons-container">
            <Link to="/projects" style={{ textDecoration: "none" }}>
                <button id="view-btn" className="glow-effect">
                {t("heroBtn1")}
                <span style={{ marginLeft: "6px", marginRight: "8px" }} className="material-symbols-outlined">
                    {isArabic ? "arrow_back" : "arrow_forward"}
                </span>
                </button>
            </Link>

            <button id="contact-btn">
                <span style={{ marginRight: "6px", marginLeft: "6px" }} className="material-symbols-outlined">
                mail
                </span>
                {t("heroBtn2")}
            </button>
            </div>
        </div>

        <div className="hero-right">
            <div className="code-window" dir="ltr">
            <div className="window-header">
                <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                </div>
                <span className="window-title">about.ts</span>
            </div>
            <div className="window-body">
                {/* FIXED: Replaced \n with <br /> and used &nbsp; for spacing */}
                <pre>
                <code>
    <span className="code-keyword">const</span> <span className="code-function">developer</span> <span className="code-operator">=</span> {'{'}<br />
    &nbsp;&nbsp;name: <span className="code-string">'Abdulmalik'</span>,<br />
    &nbsp;&nbsp;focus: [<span className="code-string">'web'</span>, <span className="code-string">'ui'</span>, <span className="code-string">'perf'</span>],<br />
    &nbsp;&nbsp;stack: <span className="code-string">'React · TS · Node'</span>,<br />
    &nbsp;&nbsp;caffeinated: <span className="code-boolean">true</span>,<br />
    &nbsp;&nbsp;shipping: <span className="code-function">()</span> <span className="code-operator">=&gt;</span> <span className="code-string">'always'</span><br />
    {'}'}
                </code>
                </pre>
            </div>
            </div>
        </div>

        </div>
    );
}