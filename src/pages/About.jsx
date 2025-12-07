import React from "react";
import img1 from "../assets/images/me1.jpg"
import img3 from "../assets/images/kika2.jpg"
import img2 from "../assets/images/me2.jpg"
import img4 from "../assets/images/kika1.jpg"
import vector8 from "../assets/images/vector8.png"
import vector9 from "../assets/images/vector9.png"
import vector2 from "../assets/images/vector2.png"

import VideoKika from "../components/about/VideoKika"
import VideoKikaHorizontal from "../components/about/VideoKikaHorizontal"
import Footer from "../components/navigation/Footer"

const About = () => {
    return(
        <>
        <main className="pt-[80px]">

{/* mi perfil */}

            <section className="w-full flex flex-col md:flex-row md:h-[60vh] h-[90vh] p-[1em] pt-10 pb-10 border-b-1 border-[var(--color-electric)]"> 
                <div className="md:w-1/2 flex flex-row border-1 border-[var(--color-electric)]">
                    <div className="relative flex w-full md:h-full h-[30vh]">
                        <img src={img1} className=" w-full object-cover"/>
                        <div className="group/item absolute flex items-center justify-center  top-0 left-0 h-full w-full overflow-hidden">
                            <div className="group/edit invisible group-hover/item:visible w-full overflow-hidden ">
                                <img src={img2} className=" w-full object-cover"/>
                            </div>
                        </div>
                    </div>
                    <div className="xl:flex hidden relative w-full h-full border-l-1 border-[var(--color-electric)]">
                        <img src={img3} className=" w-full object-cover"/>
                        <div className="group/item absolute flex items-center justify-center  top-0 left-0 h-full w-full overflow-hidden">
                            <div className="group/edit invisible group-hover/item:visible w-full overflow-hidden ">
                                <img src={img4} className=" w-full object-cover"/>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden flex w-full md:h-full h-[30vh] border-l-1 border-[var(--color-electric)]">
                        <img src={img3} className=" w-full object-cover"/>
                    </div>
                </div>
                <div className=" md:w-1/2 h-full flex justify-between flex-col md:pl-5">
                    <div className="w-full flex h-full flex-col text-[var(--color-electric)] divide-y-1 divide-[var(--color-electric)]">
                        <h2 className="flex text-5xl pt-5 md:pt-0 justify-start">
                            Beatriz González
                        </h2>
                        <h3 className=" uppercase not-italic">
                            [Diseñadora gráfica y web]
                        </h3>
                    </div>
                    <div className="flex w-full">
                        <p className="text-[var(--color-cream)] text-base xl:w-4/5 not-italic">
                            Soy diseñadora multidisciplinar, vamos toco un poco de allí, un poco de allá y de todo en general. Desde webs con Wordpress, pasando por contenido para redes hasta actualmente catálogos y dosieres. Específicamente he trabajado independientemente para pequeños negocios, de ahí el ser multidisciplinar. < br/> < br/>  
                            Me esfuerzo en realizar cada proyecto de manera eficiente y que, con mucho mimo, supere las expectativas. Soy una persona detallista, resolutiva y curiosa que le encanta trabajar en equipo y aprender. < br/>< br/>
                            Ahora mismo estoy ampliando horizontes estudiando diseño UX/UI con programación Front-end.
                        </p>
                    </div>
                </div>
            </section>

{/* divisores */}
            <div className="bg-[var(--color-lilac)] text-[var(--color-midnight)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
                <div>
                    <h3 className="">[granada]</h3>
                </div>
                <div >
                    <img src={vector8} className="h-[1.5em]"/>
                </div>
            </div>
            <div className="bg-[var(--color-cream)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
                <div>
                    <h3>[mi filosofía diseñando]</h3>
                </div>
                <div>
                    <h3>[actualidad]</h3>
                </div>
            </div>

{/* mi filosofia */}
            <div className='flex w-full h-[20vh] md:hidden border-b-1 border-[var(--color-electric)]'>
                <div className=' h-full w-full '>
                    <VideoKikaHorizontal />
                </div>
            </div>
            <section className='bg-[var(--color-cream)] h-[100vh] md:h-[90vh] w-full overflow-hidden flex md:flex-row divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)] '>
                        
                <div className=' flex-none w-[5em] p-[1em]'>
                    <div className=''>
                        <img src={vector9} className="h-full w-full"/>
                    </div>
                </div>
            
                <div  className='flex flex-grow md:flex-none md:w-1/2'>
                    <div className=" mx-auto flex flex-col w-full justify-between"> 
                        <h2 className='p-[1em] text-[6vw] md:text-3xl text-[var(--color-electric)] leading-[1em] '>Design thinking o como diseñar < br/> para el comercio de barrio
                        </h2>
                        <p className='p-[1em] xl:w-3/4 text-[var(--color-midnight)] not-italic align-bottom text-sm'>
                        Al trabajar independientemente para pequeños negocios y de cara al público, no solo aprendes a comunicarte y comprender, sino que te encuentras en la tesitura de adaptarte rápido a cualquier circunstancia y ambiente.< br/>< br/>
                        He trabajado como empleada y diseñadora para muchos de ellos. Sus necesidades suelen ser generar una pieza que puedan ellos actualizar o cambiar constantemente. No suele destacar por ser extremadamente creativo, sino por ser un producto en el que prevalece lo funcional y eficaz.< br/>< br/>
                        Aquí es donde se hace denotar el diseño centrado a todos los usuarios. No solamente el público objetivo de tu cliente, si no tu cliente incluido también. Por ello mi función hasta ahora ha sido ayudar a que su idea, pequeña o grande, sea real. < br/>< br/>
                        Algunos clientes tienen más nociones informáticas que otros. A veces toca usar Canva o Figma, porque saben usar el sistema de capas pero necesitan una herramienta gratuita. Otras veces es adaptar el arte final a un Power Point o una hoja de cálculo porque es lo único que han aprendido a manejar.< br/>< br/>
                        <p className="text-[var(--color-electric)]">Mi pasión es acercar mi conocimiento y ayudar a adaptar cada idea de manera eficaz según las posibilidades y necesidades de cada cliente.</p>
                        </p> 
                        <div className=' border-t-1 border-[var(--color-electric)] text-[var(--color-electric)]'>
                            <p className="p-[1em] text-right text-lg md:text-xl">*Con mucho cariño  supervisado por Kika</p>
                        </div>
                    </div>
                    
                </div>
            
                <div className='flex-grow not-md:hidden p-[1em]'>
                    <div className=' h-full w-full border-1 border-[var(--color-electric)]'>
                        <VideoKika />
                    </div>
                </div>
            </section>

{/* divisores */}

            <div className="bg-[var(--color-lavander)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
                <div >
                    <img src={vector2} className="h-[1.5em]"/>
                </div>
                <div >
                    <h3 className="">[estudios]</h3>
                </div>
            </div>

{/* conocimiento, estudios y experiencia */}

            <section className="bg-[var(--color-lavander)] text-[var(--color-midnight)]">

    {/* conocimiento */}               

                <div className="flex flex-row py-[0.5em]  w-full border-b-1 border-[var(--color-electric)]">
                    <div className="w-1/4 md:w-1/7 ">
                        <h2 className="p-[0.5em] pl-[1em]  uppercase text-lg font-semibold text-[var(--color-electric)] border-b-1 border-[var(--color-lilac)]/40 not-italic">Diseño</h2>
                    </div>
                    <div className="flex flex-col w-3/4 md:w-6/7">
                        <h3 className="p-[0.5em] text-lg text-[var(--color-electric)] border-b-1 border-[var(--color-lilac)]/40">Áreas</h3>
                        <div className="flex flex-col text-xs not-italic w-full divide-y-1 divide-[var(--color-lilac)]/40">
                            <ul className=" flex flex-row justify-start ">
                                <li className=" w-[20vw] p-[1em]">Branding</li>
                                <li className=" w-[20vw] p-[1em]">Diseño UX/UI</li>
                            </ul>
                            <ul className="flex flex-row justify-start ">
                                <li className="w-[20vw] p-[1em]">Diseño editorial</li>
                                <li className="w-[20vw] p-[1em]">Diseño web</li>
                            </ul>
                            <ul className="flex flex-row  justify-start ">
                                <li className="w-[20vw] p-[1em]">Diseño para RRSS</li>
                                <li className="w-[20vw] p-[1em]">Motion graphics</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>    

    {/* estudios */} 

                <div className="flex flex-row py-[0.5em] w-full ">
                    <div className="w-1/4 md:w-1/7 ">
                        <h2 className="p-[0.5em] pl-[1em]  w-full uppercase text-lg font-semibold text-[var(--color-electric)] border-b-1 border-[var(--color-lilac)]/40 not-italic">Estudios</h2>
                    </div>
                    <div className=" flex flex-col w-3/4 md:w-6/7" >
                        <ul className=" flex flex-row justify-start  w-full text-lg text-[var(--color-electric)] border-b-1 border-[var(--color-lilac)]/40">
                                <li className="w-2/4 md:w-3/7 xl:w-2/7 p-[0.5em]">Titulación</li>
                                <li className="w-1/4 xl:w-/1/7 p-[0.5em] ">Centro</li>
                                <li className="w-1/4 xl:w-1/7 p-[0.5em] ">Año</li>
                            </ul>
                        <div className="flex flex-col text-xs not-italic w-full divide-y-1 divide-[var(--color-lilac)]/40">
                            <ul className=" flex flex-row justify-start ">
                                <li className="w-2/4 md:w-3/7 xl:w-2/7 p-[1em] font-semibold">Certificado Profesional en Desarrollo Front-End</li>
                                <li className=" w-1/4 xl:w-/1/7 p-[1em]">Meta (online)</li>
                                <li className=" w-1/4 xl:w-1/7 p-[1em]">2025</li>
                            </ul>
                            <ul className=" flex flex-row justify-start ">
                                <li className="w-2/4 md:w-3/7 xl:w-2/7 p-[1em] font-semibold">Certificado Profesional en Diseño UX/UI</li>
                                <li className="w-1/4 xl:w-/1/7 p-[1em]">Google (online)</li>
                                <li className="w-1/4 xl:w-1/7 p-[1em]">2025</li>
                            </ul>
                            <ul className=" flex flex-row justify-start ">
                                <li className="w-2/4 md:w-3/7 xl:w-2/7 p-[1em] font-semibold">Grado en Diseño Gráfico</li>
                                <li className="w-1/4 xl:w-/1/7 p-[1em]">Escuela de Arte José Val del Omar (Granada)</li>
                                <li className="w-1/4 xl:w-1/7 p-[1em]">2020</li>
                            </ul>
                            
                            
                        </div>
                    </div>
                </div>    

            </section>            

            <Footer />


        </main>
        </>
    )
}

export default About