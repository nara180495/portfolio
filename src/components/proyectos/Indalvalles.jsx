import React from 'react'

import vector8 from "../../assets/images/vector8.png"
import vector4 from "../../assets/images/vector4.png"
import vector11 from "../../assets/images/vector11.png"
import vector2 from "../../assets/images/vector2.png"
import vector9 from "../../assets/images/vector9.png"

import indalvalles1 from "../../assets/projects/indalvalles/indalvalles1.png"
import indalvalles2 from "../../assets/projects/indalvalles/indalvalles2.png"
import indalvalles3 from "../../assets/projects/indalvalles/indalvalles3.png"
import indalvalles4 from "../../assets/projects/indalvalles/indalvalles4.png"
import indalvalles5 from "../../assets/projects/indalvalles/indalvalles5.png"
import indalvalles6 from "../../assets/projects/indalvalles/indalvalles6.png"
import indalvalles7 from "../../assets/projects/indalvalles/indalvalles7.png"
import indalvalles8 from "../../assets/projects/indalvalles/indalvalles8.png"
import indalvalles9 from "../../assets/projects/indalvalles/indalvalles9.jpg"
import indalvalles10 from "../../assets/projects/indalvalles/indalvalles10.jpg"
import indalvalles11 from "../../assets/projects/indalvalles/indalvalles11.jpg"

import Footer from '../navigation/Footer'
import GifIndalvalles from './GifIndalvalles'

const Indalvalles = () => {
return (
    <main className="pt-[70px]">
        
        
{/*portada*/}

        <div className='flex w-full h-[30vh] md:hidden border-b-1 border-[var(--color-electric)]'>
            <div className=' h-full w-full'>
                <img src={indalvalles1} className="object-cover h-full w-full"/>
            </div>
        </div>

        <section className='bg-[var(--color-lavander)] h-[30vh] md:h-[70vh] w-full overflow-hidden flex md:flex-row divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)] '>
            
            <div className=' flex-none w-[5em] p-[1em] pt-[2em]'>
                <div className=''>
                    <img src={vector4} className="h-full w-full"/>
                </div>
            </div>

            <div  className='p-[1em] md:py-[2em] flex flex-grow md:flex-none md:w-[20em]'>
                <div className=" mx-auto flex flex-col w-full justify-between"> 
                    <h2 className='text-[6vw] md:text-[3em] text-[var(--color-electric)] leading-[3em] md:leading-[1em] '>Indalvallés S.L.</h2>
                    <p className=' text-[var(--color-midnight)] not-italic '>
                        Indalvallés es una empresa de construcción con mas de 40 años en el sector, desde Barcelona a Almería, desde las estructuras hasta los detalles.< br/>
                        Así nació su marca centrada en imágenes claras y limpias con formas básicas de los cimientos de una vida de dedicación. 
                    </p>
                </div>
            </div>

            <div className='flex-grow not-md:hidden'>
                <div className=' h-full w-full'>
                    <img src={indalvalles1} className="object-cover h-full w-full"/>
                    
                </div>
            </div>
        </section>

{/*sección 1 divisores - categorias*/}

        
        <div className="bg-[var(--color-lilac)] text-[var(--color-midnight)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
            <div>
                <h3>[branding, identidad visual, UX/UI]</h3>
            </div>
            <div >
                <img src={vector8} className="h-[1.5em]"/>
            </div>
        </div>
        <div className="bg-[var(--color-cream)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
            <div >
                <img src={vector9} className="h-[1.5em] rotate-180"/>
            </div>
            <div>
                <h3>[La empresa]</h3>
            </div>
                
        </div>
        

{/*sección 2 explicación*/}

        <section className='bg-[var(--color-cream)] flex flex-col md:flex-row h-[800px] w-full 
        not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)]'>
        
                    <div className='md:h-full md:w-3/8 not-md:w-full not-md:h-2/8 flex flex-row md-flex-col p-[1em]'>
                        <div className='flex md:flex-col flex-row w-full  space-x-5 md:space-y-5 overflow-hidden'>
                            <div className=' md:h-1/2 md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)] overflow-hidden'>
                                <img src={indalvalles2} className="object-cover h-full w-full"/>
                                    
                            </div>
                            <div className='md:h-1/2 md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)]'>
                                <img src={indalvalles3} className="object-cover h-full w-full"/>
                            </div>
                        </div>
                    </div>
        
                    <div className=' md:h-full md:w-4/8 not-md:w-full not-md:h-full p-[1em]
                '>
                        <div className=' flex flex-col h-full justify-between space-y-20'>
                            <div className=' h-full 2xl:w-3/4 not-italic text-[var(--color-midnight)]'>
                                    <p>
                                        La gran dedicación a proyectos de grande escala y el detalle de una pequeña reforma transformados en una empresa de construcción que crea una casa paso a paso, de principio a fin, de la estructura a los embellecedores.< br/>< br/> 
                                        Buscaban una imagen clara y que expresara los más de 40 años de experiencia en la profesión, uniendo sus inicios a su actualidad, de Barcelona a Almería. Así nació Indalvallés con un branding centrado en un trabajo pulcro y con detalle con formas básicas de los cimientos de una vida de dedicación.< br/>< br/>
                                        Aparte de la marca era necesario realizar una gran cantidad de diseños para una buena identidad. No solo se hizo la típica papelería (sello, tarjetas, plantilla para facturas...), se realizaron sellos, indumentaria de trabajo y señalización de obras y la creación de su web donde poder tener el portfolio de obras realizadas y su filosofía de trabajo.
                                    </p>
                                </div>
                                <div className=' flex md:text-[3vw] text-[6vw] text-[var(--color-electric)] text-right justify-end leading-[1em]'>
                                    <h3>"Toda una vida de pasión por <br /> la construcción y el detalle"</h3>
                                </div>
                            </div>
                        </div>

            <div className=' md:h-full md:w-1/8 not-md:w-full not-md:h-1/8 p-[1em]'>
                <div className='grid w-full h-full not-md:grid-cols-5 md:grid-rows-5 gap-3' >
                    <div className='bg-[#0B4F59] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#1CA097] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#AEDFE1] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#D2DADA] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#70858A] w-full h-full border-1 border-[var(--color-electric)]'></div>
                </div>
            </div>
        </section>

{/*sección 3 imagen full*/}

        
        <section className='flex flex-col w-full h-full divide-y-1 border-b-1 border-[var(--color-electric)] divide-[var(--color-electric)]'>
            <div className='h-full w-full'>
                <img src={indalvalles4} className="h-full w-full"/>
            </div>
        </section>
        

{/*divisor*/}

        <div className="bg-[var(--color-lavander)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
                <div>
                    <h3>[destacados]</h3>
                </div>
                <div >
                    <img src={vector11} className="h-[1.5em]"/>
                </div>
            </div>

{/*sección 4 especificaciones*/}
        
        <section className='flex flex-col md:flex-row w-full h-full bg-[var(--color-lavander)] not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)]'>
            <div className=' flex md:w-1/3 w-full  text-[var(--color-electric)]'>
                    <div className=' flex flex-col  w-full p-[1em]'>
                        <h2>UX/UI: WEB</h2>
                        <p className='text-[var(--color-midnight)] not-italic '>Una web portfolio sencilla creada mediante Wordpress y Elementor para una fácil edición del cliente para poder añadir todas las obras que quisieran mostrar. <br/><br/>
                        También realicé la fotografía de algunas obras que estaban terminando en su momento para la web.</p>
                    </div>
            </div>

            <div className=' md:w-2/3 w-full md:h-full object-cover'>
                <div className='flex h-full w-full overflow-hidden object-cover'>
                    <GifIndalvalles />
                </div>
            </div>
        </section>
        

{/*divisor*/}

        <div className="bg-[var(--color-lavander)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-y-1 border-[var(--color-electric)] content-center">
                <div >
                    <img src={vector2} className="h-[1.5em]"/>
                </div>
                <div>
                    <h3>[galería]</h3>
                </div>
                
            </div>

{/*sección 5 full imagenes*/}

            
            <section className=' flex flex-col h-full '>
                            <div className='flex flex-row h-[35vw] w-full border-b-1 border-[var(--color-electric)] divide-x-1 divide-[var(--color-electric)]'>
                                <div className='flex h-full w-2/3  '>
                                    <img src={indalvalles5} className="h-full w-full object-cover "/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={indalvalles6} className="h-full w-full object-cover"/>
                                </div>
                            </div>
                            <div className='flex flex-row h-[35vw] w-full border-b-1 border-[var(--color-electric)] divide-x-1 divide-[var(--color-electric)]'>
                                <div className='flex h-full w-1/3 '>
                                    <img src={indalvalles7} className=" h-full w-full object-cover" />
                                </div>
                                <div className='flex h-full w-2/3 '>
                                    <img src={indalvalles8} className="h-full w-full object-cover"/>
                                </div>
                            </div>
                            <div className='flex flex-row h-[35vw] w-full divide-x-1 divide-[var(--color-electric)]'>
                                
                                <div className='flex h-full w-1/3 '>
                                    <img src={indalvalles9} className="h-full w-full object-cover"/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={indalvalles10} className="h-full w-full object-cover"/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={indalvalles11} className="h-full w-full object-cover"/>
                                </div>
                            </div>

                        </section>
            
        <Footer />

    </main>
    
    )
}

export default Indalvalles