import React from 'react'

import morera1 from "../../assets/projects/morera/morera1.jpg" 
import calathea1 from "../../assets/projects/calathea/calathea1.jpg"
import indalvalles1 from "../../assets/projects/indalvalles/indalvalles1.png"
import calendarios1 from "../../assets/projects/calendarios/calendarios1.jpg"
import corina1 from "../../assets/projects/corina/corina1.png"

import vector23 from "../../assets/images/vector23.png"
import vector24 from "../../assets/images/vector24.png"
import vector6 from "../../assets/images/vector6.png"

import {NavLink} from 'react-router-dom'


const ProjectCard = () => {
    return (
    
    <>

            <div className='flex flex-wrap  border-b-1  border-[var(--color-electric)] text-[var(--color-electric)] not-italic uppercase sm:text-base text-[0.75em]'> 
{/* 1º cuadro 1-IZQ */}
                <div className='bg-[var(--color-cream)] w-1/2 border-r-1 border-[var(--color-electric)]'>
                    <NavLink to='/proyectos/moreracamping'>
                        <div className='relative h-[50vw] md:h-[30vw] overflow-hidden transition-all border-t-1 border-[var(--color-electric)]'>
                            <img className='h-full w-full object-cover' src={morera1} alt=""/>
                                <div className="group/item absolute flex items-center justify-center top-0 left-0 h-full w-full hover:backdrop-blur-xs hover:bg-[var(--color-lilac)]/20">
                                        <div className="group/edit invisible group-hover/item:visible size-20 ">
                                            <img className=" w-full h-full object-cover" src={vector6}/>
                                        </div>
                                </div>
                        </div>
                    </NavLink>
                    <div className='flex p-2 bg-[var(--color-cream)] justify-between border-t-1 border-[var(--color-electric)]'>
                        <h3 className='w-1/2'>[La Morera Camping]</h3>
                        <h3 className='text-right w-1/2'>[Branding, identidad, UX/UI]</h3>
                    </div>
                </div>
{/* 2º cuadro 1-DRCH */}
                <div className='bg-[var(--color-cream)] w-1/2'>
                    <NavLink to='/proyectos/calathea'>
                        <div className='relative h-[50vw] md:h-[30vw] overflow-hidden transition-all border-t-1 border-[var(--color-electric)]'>
                            <img className='h-full w-full object-cover' src={calathea1} alt=""/>
                                <div className="group/item absolute flex items-center justify-center top-0 left-0 h-full w-full hover:backdrop-blur-xs hover:bg-[var(--color-lilac)]/20">
                                        <div className="group/edit invisible group-hover/item:visible size-20 ">
                                            <img className=" w-full h-full object-cover" src={vector6}/>
                                        </div>
                                </div>
                        </div>
                    </NavLink>
                    <div className='flex p-2 bg-[var(--color-cream)] justify-between border-t-1 border-[var(--color-electric)]'>
                        <h3 className='w-1/2'>[Calathea Repostería]</h3>
                        <h3 className='text-right w-1/2'>[Branding, identidad, RRSS]</h3>
                    </div>
                </div>
{/* 3º cuadro 2-IZQ */}                
                <div className='bg-[var(--color-cream)] w-1/2 border-r-1 border-[var(--color-electric)]'>
                    <NavLink to='/proyectos/corinaaltareposteria'>
                        <div className='relative h-[50vw] md:h-[30vw] overflow-hidden transition-all border-t-1 border-[var(--color-electric)]'>
                            <img className='h-full w-full object-cover' src={corina1} alt=""/>
                                <div className="group/item absolute flex items-center justify-center top-0 left-0 h-full w-full hover:backdrop-blur-xs hover:bg-[var(--color-lilac)]/20">
                                        <div className="group/edit invisible group-hover/item:visible size-20 ">
                                            <img className=" w-full h-full object-cover" src={vector6}/>
                                        </div>
                                </div>
                        </div>
                    </NavLink>
                    <div className='flex p-2 bg-[var(--color-cream)] justify-between border-t-1 border-[var(--color-electric)]'>
                        <h3 className='w-1/2'>[Corina Alta Repostería]</h3>
                        <h3 className='text-right w-1/2'>[Identidad, Editorial, RRSS]</h3>
                    </div>
                </div>
{/* 4º cuadro 2-DRCH */}
                <div className='bg-[var(--color-cream)] w-1/2'>
                    <NavLink to='/proyectos/indalvalles'>
                        <div className='relative h-[50vw] md:h-[30vw] overflow-hidden transition-all border-t-1 border-[var(--color-electric)]'>
                            <img className='h-full w-full object-cover' src={indalvalles1} alt=""/>
                                <div className="group/item absolute flex items-center justify-center top-0 left-0 h-full w-full hover:backdrop-blur-xs hover:bg-[var(--color-lilac)]/20">
                                        <div className="group/edit invisible group-hover/item:visible size-20 ">
                                            <img className=" w-full h-full object-cover" src={vector6}/>
                                        </div>
                                </div>
                        </div>
                    </NavLink>
                    <div className='flex p-2 bg-[var(--color-cream)] justify-between border-t-1 border-[var(--color-electric)]'>
                        <h3 className='w-1/2'>[Indalvallés S.L.]</h3>
                        <h3 className='text-right w-1/2'>[Branding, identidad, UX/UI]</h3>
                    </div>
                </div>
{/* 5º cuadro 3-IZQ */}
                <div className='bg-[var(--color-cream)] w-1/2 border-r-1 border-[var(--color-electric)]'>
                    <NavLink to='/proyectos/calendarios'>
                        <div className='relative h-[50vw] md:h-[30vw] overflow-hidden transition-all border-t-1 border-[var(--color-electric)]'>
                            <img className='h-full w-full object-cover' src={calendarios1} alt=""/>
                                <div className="group/item absolute flex items-center justify-center top-0 left-0 h-full w-full hover:backdrop-blur-xs hover:bg-[var(--color-lilac)]/20">
                                        <div className="group/edit invisible group-hover/item:visible size-20 ">
                                            <img className=" w-full h-full object-cover" src={vector6}/>
                                        </div>
                                </div>
                        </div>
                    </NavLink>
                    <div className='flex p-2 bg-[var(--color-cream)] justify-between border-t-1 border-[var(--color-electric)]'>
                        <h3 className='w-1/2'>[Calendarios]</h3>
                        <h3 className='text-right w-1/2'>[Ilustración, editorial]</h3>
                    </div>
                </div>
{/* 6º cuadro 3-DRCH */}
                <div className=' w-1/2 h-full'>
                    
                        <div className='md:hidden h-[50vw] md:h-[30vw] overflow-hidden transition-all border-t-1 border-[var(--color-electric)] bg-[var(--color-midnight)] '>
                            <img className='h-full w-full object-right' src={vector24} alt=""/>
                        </div>
                        <div className='not-md:hidden h-[50vw] md:h-[30vw] overflow-hidden transition-all border-t-1 border-[var(--color-electric)] bg-[var(--color-midnight)] '>
                            <img className='h-full w-full object-right' src={vector23} alt=""/>
                        </div>
                    
                </div>

            </div>
        
    </>
    
    )
}

export default ProjectCard

