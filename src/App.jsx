import './App.css'
import { LanguageProvider } from './components/LanguageContext'
import Nav from './components/Nav'

function App() {
  

  return (
    <>
      <LanguageProvider>
        <Nav/>
      </LanguageProvider>
      
    </>
  )
}

export default App
