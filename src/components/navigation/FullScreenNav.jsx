import React from 'react'
import { NavLink } from 'react-router-dom'

const FullScreenNav = ({isOpen}) => {

    
    return (
            
                isOpen && (
                    <div className='bg-[var(--color-midnight)] text-[#4a1df4] text-[3em] uppercase absolute left-0 w-full h-screen z-20 pt-[80px]'>
                        <div className='pt-20 flex-1  hover:bg-sky-700'>
                            <ul>
                                <li className='link origin-top border-t-1 border-[var(--color-electric)] text-center pt-3 py-3'>
                                    <NavLink to='/proyectos'>Proyectos</NavLink>
                                </li>
                                <li className='link origin-top border-t-1 border-[var(--color-electric)] text-center pt-3 py-3'>
                                    <NavLink to='/sobremi'>Sobre mí</NavLink>
                                </li>
                                <li className='link origin-top border-t-1 border-b-1 border-[var(--color-electric)] text-center pt-3 py-3 '>
                                    <NavLink to='/contacto'>Contacto</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            
        
    );
}

export default FullScreenNav
