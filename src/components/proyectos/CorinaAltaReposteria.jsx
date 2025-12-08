import React from 'react'
import vector8 from "../../assets/images/vector8.png"
import vector4 from "../../assets/images/vector4.png"
import vector9 from "../../assets/images/vector9.png"
import vector2 from "../../assets/images/vector2.png"
import corina1 from "../../assets/projects/corina/corina1.png"
import corina2 from "../../assets/projects/corina/corina2.jpg"
import corina3 from "../../assets/projects/corina/corina3.jpg"
import corina4 from "../../assets/projects/corina/corina4.png"
import corina5 from "../../assets/projects/corina/corina5.png"
import corina6 from "../../assets/projects/corina/corina6.png"
import corina7 from "../../assets/projects/corina/corina7.png"
import corina8 from "../../assets/projects/corina/corina8.jpg"
import corina9 from "../../assets/projects/corina/corina9.jpg"
import corina10 from "../../assets/projects/corina/corina10.jpg"
import corina11 from "../../assets/projects/corina/corina11.png"
import Footer from '../navigation/Footer'

const CorinaAltaReposteria = () => {
    return (
    <main className="pt-[70px]">
        
        
{/*portada*/}

        <div className='flex w-full h-[30vh] md:hidden border-b-1 border-[var(--color-electric)]'>
            <div className=' h-full w-full'>
                <img src={corina1} className="object-cover h-full w-full"/>
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
                    <h2 className='text-[6vw] md:text-[3em] text-[var(--color-electric)] leading-[3em] md:leading-[1em] '>Corina Alta Repostería</h2>
                    <p className=' text-[var(--color-midnight)] not-italic '>
                        A lo largo de los años he trabajado junto a Corina desarrollando su identidad visual, desde fotografía, tarjetas informativas, plantillas para RRSS hasta los catálogos de tartas de boda y dulces personalizados. 
                    </p>
                </div>
            </div>

            <div className='flex-grow not-md:hidden'>
                <div className=' h-full w-full'>
                    <img src={corina1} className="object-cover h-full w-full"/>
                    
                </div>
            </div>
        </section>

{/*sección 1 divisores - categorias*/}

        
        <div className="bg-[var(--color-lilac)] text-[var(--color-midnight)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
            <div>
                <h3>[Identidad visual, editorial, rrss]</h3>
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
                <h3>[La pastelería]</h3>
            </div>
                
        </div>
        

{/*sección 2 explicación*/}

        <section className='bg-[var(--color-cream)] flex flex-col md:flex-row h-auto w-full 
                not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)]'>
                
            <div className='md:h-auto md:w-3/8 not-md:w-full not-md:h-2/8 flex flex-row md-flex-col p-[1em]'>
                <div className='flex md:flex-col flex-row w-full  space-x-5 md:space-y-5 overflow-hidden'>
                    <div className=' md:h-[400px] md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)] overflow-hidden'>
                        <img src={corina2} className="object-cover h-full w-full"/>
                            
                    </div>
                    <div className='md:h-[400px] md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)]'>
                        <img src={corina3} className="object-cover h-full w-full"/>
                    </div>
                </div>
            </div>
                
            <div className=' md:h-auto md:w-4/8 not-md:w-full not-md:h-full p-[1em]
        '>
                <div className=' flex flex-col h-full justify-between space-y-20'>
                    <div className=' h-full 2xl:w-3/4 not-italic text-[var(--color-midnight)]'>
                        <p>
                        Corina Alta Repostería es una pastelería de eventos en Madrid. Trabajando para bodas, cumpleaños hasta impartiendo talleres de repostería personalizable. Al estar cada año en crecimiento y en un sector que cambia constantemente, es necesario estar actualizado siempre. Por ello realizamos el ajuste anual de los catálogos de bodas y el de dulces personalizados ya sea en precios o diseño.< br/>< br/>
                        Tuve el placer de trabajar para Corina allá por 2022, lo que me permitió adentrarme en el diseño de pastelería. Siendo uno de mis primeros empleos importantes, trabajé haciendo un poco de todo. Modelado con fondant, decorar tartas, pasando a ser la encargada del montaje y diseño de impresiones comestibles y un apoyo puntual en fotografía de producto, hasta incluso años después, los catálogos anuales de sus productos y plantillas gráficas necesarias.< br/>< br/>
                        Realizar estos pequeños trabajos para Corina a lo largo del tiempo, proyecta la gran confianza y nivel de satisfacción hacia mi trabajo cosa que me enorgullece y, a pesar de no ser un proyecto gigantesco o super innovador, le guardo mucho cariño al poder seguir haciéndolo evolucionar con el paso de los años.
                        </p>
                    </div>
                    <div className=' flex md:text-[3vw] text-[6vw] text-[var(--color-electric)] text-right justify-end leading-[1em]'>
                        <h3>"Más que repostería,<br /> creando recuerdos inolvidables"</h3>
                    </div>
                </div>
            </div>

            <div className=' md:h-auto md:w-1/8 not-md:w-full not-md:h-1/8 p-[1em]'>
                <div className='grid w-full md:h-full not-md:min-h-[20vw] not-md:grid-cols-6 md:grid-rows-6 gap-3' >
                    <div className='bg-[#AFBBB1] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#DAB4A9] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#EFD8D0] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#F3EFEB] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#C7B171] w-full h-full border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#5A473B] w-full h-full border-1 border-[var(--color-electric)]'></div>
                </div>
            </div>
        </section>

{/*sección 3 imagen full*/}
        
        <section className='flex flex-col w-full h-full  '>
            <div className='h-full w-full'>
                <img src={corina4} className="h-full w-full"/>
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
                                    <img src={corina5} className="h-full w-full object-cover "/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={corina6} className="h-full w-full object-cover"/>
                                </div>
                            </div>
                            <div className='flex flex-row h-[35vw] w-full border-b-1 border-[var(--color-electric)] divide-x-1 divide-[var(--color-electric)]'>
                                <div className='flex h-full w-1/3 '>
                                    <img src={corina7} className=" h-full w-full object-cover" />
                                </div>
                                <div className='flex h-full w-2/3 '>
                                    <img src={corina8} className="h-full w-full object-cover"/>
                                </div>
                            </div>
                            <div className='flex flex-row h-[35vw] w-full divide-x-1 divide-[var(--color-electric)]'>
                                
                                <div className='flex h-full w-1/3 '>
                                    <img src={corina9} className="h-full w-full object-cover"/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={corina10} className="h-full w-full object-cover"/>
                                </div>
                                <div className='flex h-full w-1/3 '>
                                    <img src={corina11} className="h-full w-full object-cover"/>
                                </div>
                            </div>

                        </section>
            
        <Footer />

    </main>
    )
}

export default CorinaAltaReposteria

