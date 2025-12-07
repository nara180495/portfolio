import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo.jsx'
import FullScreenNav from './FullScreenNav.jsx'
import vector7 from '../../assets/images/vector7.png'

const MainNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMainNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
    <header className=' fixed top-0 z-[100] flex w-screen flex-wrap flex-row  p-[1em] uppercase text-[var(--color-electric)] border-b-1 backdrop-blur-[100px] font-medium text-xl border-[var(--color-electric)]'>
      <nav className='flex  w-full overflow-hidden items-center justify-between not-italic'>
        
        <div className='w-1/4 flex justify-start items-center'>
          <NavLink to='/' className='hover:text-[var(--color-lilac)]'>
            <h3>BZGZJZ</h3>
          </NavLink>
        </div>
      
        <div className=' w-2/4 hidden md:flex space-x-10 justify-center'>
          <NavLink to='/proyectos'  className='hover:text-[var(--color-lilac)]' >
            <h3>Proyectos</h3>
          </NavLink>
          <NavLink to='/sobremi'  className='hover:text-[var(--color-lilac)]'>
            <h3>Sobre mí</h3>
          </NavLink>
          <NavLink to='/contacto'  className='hover:text-[var(--color-lilac)]'>
            <h3>Contacto</h3>
          </NavLink>
        </div>

        <div className='w-1/4 md:flex justify-end hidden h-[1.5em]'>
          <img src={vector7} className=' h-full object-cover'/>
        </div>

        <div className="w-1/4 justify-items-end md:hidden">
          <button className='flex justify-end' onClick={toggleMainNav}>{isOpen ? <FontAwesomeIcon icon={faXmark} color='var(--color-electric)' /> : <FontAwesomeIcon icon={faBars} color='var(--color-electric)'/>}</button>
        </div>
      </nav>
    </header>
      {/*Menu del movil en pantalla completa por dios sal bien ya estoy hasta los huevos de que no vayas bien*/}

    <FullScreenNav isOpen={isOpen} />

      {/*
      {isOpen && (
        <div className='bg-amber-700 flex basis-full flex-col items-center border-2 min-h-full'>
          <div className='bg-violet-800'>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contac'>Contact</NavLink>
          </div>
        </div>

        
      )} */}
      
    </>
  )
};

export default MainNav;
