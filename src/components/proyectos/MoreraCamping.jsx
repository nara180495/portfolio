import React from 'react'
import vector8 from "../../assets/images/vector8.png"
import vector4 from "../../assets/images/vector4.png"
import vector2 from "../../assets/images/vector2.png"
import vector11 from "../../assets/images/vector11.png"
import vector9 from "../../assets/images/vector9.png"

import morera1 from "../../assets/projects/morera/morera1.jpg"
import morera2 from "../../assets/projects/morera/morera2.jpg"
import morera3 from "../../assets/projects/morera/morera3.jpg"
import morera4 from "../../assets/projects/morera/morera4.png"
import morera5 from "../../assets/projects/morera/morera5.jpg"
import morera6 from "../../assets/projects/morera/morera6.png"
import morera7 from "../../assets/projects/morera/morera7.jpg"
import morera8 from "../../assets/projects/morera/morera8.jpg"
import morera9 from "../../assets/projects/morera/morera9.jpg"
import morera10 from "../../assets/projects/morera/morera10.png"
import morera11 from "../../assets/projects/morera/morera11.jpg"
import VideoMorera from "./VideoMorera"
import Footer from '../navigation/Footer'

const MoreraCamping = () => {
    return (
    <main className="pt-[70px]">
        
{/*portada*/}

        <div className='flex w-full h-[30vh] md:hidden border-b-1 border-[var(--color-electric)]'>
            <div className=' h-full w-full'>
                <img src={morera1} className="object-cover h-full w-full"/>
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
                    <h2 className='text-[6vw] md:text-[3em] text-[var(--color-electric)] leading-[3em] md:leading-[1em] '>La Morera Camping</h2>
                    <p className=' text-[var(--color-midnight)] not-italic '>
                        La Morera es un camping del siglo XXI, dando un servicio útil, sencillo y rápido para sus clientes. < br/>
                        Para ello se ha realizado un branding campestre y amable sin perder una línea gráfica actual. También está en proceso de desarrollo el prototipado de la aplicación de reservas e información del camping.
                    </p>
                </div>
            </div>

            <div className='flex-grow not-md:hidden'>
                <div className=' h-full w-full'>
                    <img src={morera1} className="object-cover h-full w-full"/>
                    
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
                <h3>[El Camping]</h3>
            </div>
                
        </div>
        

{/*sección 2 explicación*/}

        <section className='bg-[var(--color-cream)] flex flex-col md:flex-row h-[800px] w-full 
not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)]'>

            <div className='md:h-full md:w-3/8 not-md:w-full not-md:h-2/8 flex flex-row md-flex-col p-[1em]'>
                <div className='flex md:flex-col flex-row w-full  space-x-5 md:space-y-5 overflow-hidden'>
                    <div className=' md:h-1/2 md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)] overflow-hidden'>
                        <img src={morera2} className="object-cover h-full w-full"/>
                            
                    </div>
                    <div className='md:h-1/2 md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)]'>
                        <img src={morera3} className="object-cover h-full w-full"/>
                    </div>
                </div>
            </div>

            <div className=' md:h-full md:w-4/8 not-md:w-full not-md:h-full p-[1em]
        '>
                <div className=' flex flex-col h-full justify-between space-y-20'>
                    <div className=' h-full 2xl:w-3/4 not-italic text-[var(--color-midnight)]'> 
                        <p>La Morera es un camping situado en la sierra de la provincia de Tarragona. Con una situación idílica consiguen llegar cada vez a más gente, ampliando su recinto y sus recursos. Debido a esto, han llegado a un punto de inflexión en el que necesitaban mejorar sus servicios. Así nació esta colaboración.< br/>< br/>
                        El diseño de la marca (anteriormente inexistente) necesitaba ser actual, hogareña y versátil, por lo que me centré en crear una identidad que pudiera evolucionar y formar parte del entorno sin dejar de ser actual. Se generó una amplia gama de recursos con una simbología clara, identificable y con un tono cálido. Interesaba bastante la idea de poder jugar con ella, acercándose así a un tono desenfadado pero curioso.< br/>< br/>
                        Al estar en expansión metafórica y físicamente, era necesario facilitar a todos los huéspedes una manera de acceder a toda la información del camping, sin necesidad de recorrer toda la distancia de este gran extenso recinto. Por esa casuística se crea el proyecto de la aplicación móvil, donde poder reservar no solamente la estancia, si no todas las actividades que se quieran, reservar en el restaurante e incluso enterarse de las ofertas del mini supermercado.< br/>< br/>
                        
                        Un proyecto 360º en el que se le dá una identidad, lugar y el espíritu de la gente. 
                        </p>
                    </div>
                    <div className=' flex md:text-[3vw] text-[6vw] text-[var(--color-electric)] text-right justify-end leading-[1em]'>
                        <h3>"todo un paraíso <br />oculto en Tarragona"</h3>
                    </div>
                </div>
            </div>

            <div className=' md:h-full md:w-1/8 not-md:w-full not-md:h-1/8 p-[1em]'>
                <div className='grid w-full h-full not-md:grid-cols-6 md:grid-rows-6 gap-3' >
                    <div className='bg-[#262C00] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#A0A203] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#EDEA8D] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#FFFBDA] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#F57957] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#8C0A37] w-full h-full border-1 border-[var(--color-electric)]'></div>
                </div>
            </div>
        </section>

{/*sección 3 imagen full*/}

        
        <section className='flex flex-col w-full bg-lime-900 h-full divide-y-1 border-b-1 border-[var(--color-electric)] divide-[var(--color-electric)]'>
            <div className='h-full w-full'>
                <img src={morera4} className="h-full w-full"/>
            </div>
            <div className='h-full w-full'>
                <img src={morera5} className="h-full w-full"/>
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
        
        <section className='flex flex-col md:flex-row w-full h-full xl:h-[60vh] 2xl:h-[80vh] bg-[var(--color-lavander)] not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)]'>
            <div className=' flex md:w-1/3 w-full pb-[5em] text-[var(--color-electric)]'>
                <div className=' flex flex-col w-full'>
                    <div className='p-[1em] pb-[2em]'>
                        <h2>UX/UI: WEB Y APP</h2>
                    
                        <p className='text-[var(--color-midnight)] not-italic'>Está disponible para visualizar el prototipado de la página web y la aplicación móvil presentada al cliente. Puedes jugar con ellos en los siguientes enlaces de figma:
                    </p>
                    </div>
                    <div className='flex flex-row justify-around  divide-x-1 border-y-1'>
                        <div className='flex w-1/2 justify-around p-1 '>
                        <a 
                        href="https://www.figma.com/proto/ErUdwZZ2zv53BVauV901Re/LA-MORERA-CAMPING-PROJECT?page-id=128%3A245&node-id=128-248&p=f&viewport=172%2C167%2C0.14&t=kakNq9KnBmZ878Re-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=128%3A248" 
                        target="_blank" 
                        rel="noreferrer"
                        className='hover:text-[var(--color-lilac)] italic uppercase text-center'
                        >[Prototipo web]</a> 
                        </div>
                        <div className='flex w-1/2 justify-around p-1'>
                        <a 
                        href="https://www.figma.com/proto/ErUdwZZ2zv53BVauV901Re/LA-MORERA-CAMPING-PROJECT?page-id=34%3A99&node-id=311-3247&p=f&viewport=90%2C174%2C0.17&t=c0UPaQL8iMwL8qjZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=311%3A3247" 
                        target="_blank" 
                        rel="noreferrer"
                        className='hover:text-[var(--color-lilac)] italic uppercase  text-center  '
                        >[Prototipo app]</a> 
                        </div>
                    </div>
                </div>
            </div>

            <div className=' md:w-2/3 w-full md:h-full h-[40vh]'>
                <div className='flex h-full w-full overflow-hidden '>
                    <VideoMorera />
                </div>
            </div>
        </section>
        

{/*divisor*/}

        <div className="bg-[var(--color-lavander)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
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
                                    <img src={morera6} className="h-full w-full object-cover "/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={morera7} className="h-full w-full object-cover"/>
                                </div>
                            </div>
                            <div className='flex flex-row h-[35vw] w-full border-b-1 border-[var(--color-electric)] divide-x-1 divide-[var(--color-electric)]'>
                                <div className='flex h-full w-1/3 '>
                                    <img src={morera8} className=" h-full w-full object-cover" />
                                </div>
                                <div className='flex h-full w-2/3 '>
                                    <img src={morera9} className="h-full w-full object-cover"/>
                                </div>
                            </div>
                            <div className='flex flex-row h-[35vw] w-full divide-x-1 divide-[var(--color-electric)]'>
                                
                                <div className='flex h-full w-2/3 '>
                                    <img src={morera10} className="h-full w-full object-cover"/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={morera11} className="h-full w-full object-cover"/>
                                </div>
                            </div>

                        </section>
            
        <Footer />

    </main>
    )
}

export default MoreraCamping
