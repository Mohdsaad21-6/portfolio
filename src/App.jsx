
import './App.css'
import About from './components/About'
import Contact from './components/contact'
import MainPage from './components/Main'
import Navbar from './components/Navbar'
import ProjectSection from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <>
    <Navbar />
    <MainPage></MainPage>
    <About/>
    <Skills />
    <ProjectSection />
    <Contact />
     
    </>
  )
}

export default App
