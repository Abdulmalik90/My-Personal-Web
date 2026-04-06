import Hero from "../Hero"
import Skills from "../Skills"
import Projects from "../Projects"
import About from "../About"

export default function Home(){
    return (
        <>
            <Hero/>

            <hr />

            <div id="skills">
                <Skills />
            </div>

            <hr />

            <Projects/>

            <hr />

            <div id="about">
                <About />
            </div>

            <hr />
        </>
    )
}