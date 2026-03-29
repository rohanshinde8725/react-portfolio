import React from 'react'
import Home from './pages/home/Home'
import Navbar from './navbar/Navbar'
import About from './pages/about/About'
import Skills from './pages/skill/Skills'
import Projects from './pages/project/Projects'
import Contact from './pages/contact/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="relative h-screen w-full">
        <Navbar />
        <Home />
      </div>

      <About id="about" className="scroll-mt-24" />
      <Skills id="skills" className="scroll-mt-24" />
      <Projects id="Projects" className="scroll-mt-24" />
      <Contact id="contact" className="scroll-mt-24" />
      <Footer />
    </>
  )
}

export default App