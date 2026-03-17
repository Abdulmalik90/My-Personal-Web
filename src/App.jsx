import './App.css'
import { LanguageProvider } from './components/LanguageContext'
import Nav from './components/Nav'
import { ThemeProvider } from './components/ThemeContext'

function App() {
  

  return (
    <>
    <ThemeProvider>

      <LanguageProvider>

        <Nav/>
        
      </LanguageProvider>

    </ThemeProvider>
    </>
  )
}

export default App
