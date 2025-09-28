import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Languages from './components/Languages'
import Stats from './components/Stats'
import SiteFooter from './components/SiteFooter'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'resume', 'services', 'skills', 'languages', 'projects', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Stats />
        <Languages />
        <Blog />
        <Contact />
        <SiteFooter />
      </main>
    </div>
  )
}

export default App
