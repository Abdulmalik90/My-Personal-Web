import './App.css'
import { LanguageProvider } from './components/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { ThemeProvider } from './components/ThemeContext'

function App() {
  

  return (
    <>
    <ThemeProvider>

      <LanguageProvider>

        <Nav/>

        <Hero/>
        <hr />
      </LanguageProvider>

    </ThemeProvider>
    </>
  )
}

export default App
