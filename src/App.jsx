
import {Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Lenis from "@studio-freight/lenis"
import { useLenis } from "./components/common/UseLenis.jsx"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import MainNav from './components/navigation/MainNav'
import MoreraCamping from './components/proyectos/MoreraCamping.jsx'
import CalatheaReposteria from './components/proyectos/CalatheaReposteria.jsx'
import Indalvalles from './components/proyectos/Indalvalles.jsx'
import CorinaAltaReposteria from './components/proyectos/CorinaAltaReposteria.jsx'
import Calendarios from './components/proyectos/Calendarios.jsx'


const App = () => {


const lenis = useLenis()
  const { pathname } = useLocation()


  useEffect(() => {
    if (lenis.current) {
      lenis.current.scrollTo(0, {
        immediate: true   
      })
    }
  }, [pathname, lenis])


  return (
    <div className='overflow-x-hidden scroll-smooth md:scroll-auto cursor-crosshair'>
      <div className='border-b-1 border-[var(--color-electric)] ' >
        <MainNav />
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/proyectos' element={<Projects />}/>  
        <Route path='/sobremi' element={<About />}/>
        <Route path='/contacto' element={<Contact />}/>  
        <Route path='/proyectos/moreracamping' element={<MoreraCamping />}/>  
        <Route path='/proyectos/calathea' element={<CalatheaReposteria />}/>   
        <Route path='/proyectos/indalvalles' element={<Indalvalles />}/>   
        <Route path='/proyectos/corinaaltareposteria' element={<CorinaAltaReposteria />}/>  
        <Route path='/proyectos/calendarios' element={<Calendarios />}/>
      </Routes>
    </div>
  )
}

export default App


