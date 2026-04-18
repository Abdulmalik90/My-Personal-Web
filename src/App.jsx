import './App.css'
import { LanguageProvider } from './components/LanguageContext'
import Nav from './components/Nav'
import Home from './components/pages/Home.jsx'
import ProjectsPage from './components/pages/ProjectsPage';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeContext'
import ScrollToHash from './components/ScrollToHash.jsx';
import AllCertsPage from './components/pages/AllCertsPage.jsx';

function App() {
  

  return (
    <>
    <ThemeProvider>

      <LanguageProvider>

        <Nav/>

        <ScrollToHash />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/all-certifications' element={<AllCertsPage/>} />
          <Route path='/Projects' element={<ProjectsPage/>} />
        </Routes>
        
        
        <Footer />
        
      </LanguageProvider>

    </ThemeProvider>
    </>
  )
}

export default App
