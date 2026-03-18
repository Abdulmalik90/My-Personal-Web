import './App.css'
import { LanguageProvider } from './components/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { ThemeProvider } from './components/ThemeContext'

function App() {
  

  return (
    <>
    <ThemeProvider>

      <LanguageProvider>

        <Nav/>

        <Hero/>

        <hr />

        <Skills/>

        <hr />

        <Projects/>
      </LanguageProvider>

    </ThemeProvider>
    </>
  )
}

export default App
