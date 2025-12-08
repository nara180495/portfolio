import React from 'react'
import vector8 from "../../assets/images/vector8.png"
import vector4 from "../../assets/images/vector4.png"
import vector11 from "../../assets/images/vector11.png"
import vector2 from "../../assets/images/vector2.png"
import vector9 from "../../assets/images/vector9.png"
import Footer from '../navigation/Footer'
import calathea1 from "../../assets/projects/calathea/calathea1.jpg"
import calathea2 from "../../assets/projects/calathea/calathea2.jpg"
import calathea3 from "../../assets/projects/calathea/calathea3.jpg"
import calathea4 from "../../assets/projects/calathea/calathea4.jpg"
import calathea5 from "../../assets/projects/calathea/calathea5.jpg"
import calathea6 from "../../assets/projects/calathea/calathea6.jpg"
import calathea7 from "../../assets/projects/calathea/calathea7.jpg"
import calathea8 from "../../assets/projects/calathea/calathea8.jpg"
import calathea9 from "../../assets/projects/calathea/calathea9.jpg"
import calathea10 from "../../assets/projects/calathea/calathea10.jpg"
import calathea11 from "../../assets/projects/calathea/calathea11.jpg"
import calathea12 from "../../assets/projects/calathea/calathea12.jpg"
import calathea13 from "../../assets/projects/calathea/calathea13.jpg"
import calathea14 from "../../assets/projects/calathea/calathea14.jpg"
import calathea15 from "../../assets/projects/calathea/calathea15.jpg"

const CalatheaReposteria = () => {
    return (
    <main className="pt-[70px]">
        
{/*portada*/}

        <div className='flex w-full h-[30vh] md:hidden border-b-1 border-[var(--color-electric)]'>
            <div className=' h-full w-full'>
                <img src={calathea1} className="h-full w-full object-cover"/>
            </div>
        </div>

        <section className='bg-[var(--color-lavander)] h-[30vh] md:h-[70vh] w-full overflow-hidden flex md:flex-row divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)] '>
            
            <div className=' flex-none w-[5em] p-[1em] pt-[2em]'>
                <div className=''>
                    <img src={vector4} className="h-full w-full "/>
                </div>
            </div>

            <div  className='p-[1em] md:py-[2em] flex flex-grow md:flex-none md:w-[20em]'>
                <div className=" mx-auto flex flex-col w-full justify-between"> 
                    <h2 className='text-[6vw] md:text-[3em] text-[var(--color-electric)] leading-[3em] md:leading-[1em] '>Calathea Repostería Creativa</h2>
                    <p className=' text-[var(--color-midnight)] not-italic '>
                        La identidad de Calathea se ha desarrollado poniendo el foco en los dulces sueños del cliente, no en la figura de la repostera como habitualmente. <br />
                        Junto con una estilo gráfico mágico y una fotografía vibrante hemos conseguido una marca cercana, llamativa y moderna.
                    </p>
                </div>
            </div>

            <div className='flex-grow not-md:hidden'>
                <div className=' h-full w-full'>
                    <img src={calathea1} className="h-full w-full object-cover"/>
                    
                </div>
            </div>
        </section>

{/*sección 1 divisores - categorias*/}

        
        <div className="bg-[var(--color-lilac)] text-[var(--color-midnight)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
            <div>
                <h3>[branding, identidad visual, rrss]</h3>
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
                <h3>[La marca]</h3>
            </div>
                
        </div>
        

{/*sección 2 explicación*/}

<section className='bg-[var(--color-cream)] flex flex-col md:flex-row h-auto w-full 
not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)]'>
    

        <div className='md:h-auto md:w-3/8 not-md:w-full not-md:h-2/8 flex flex-row md-flex-col p-[1em]'>
            <div className='flex md:flex-col flex-row w-full  space-x-5 md:space-y-5 overflow-hidden'>
                <div className=' md:h-[400px] md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)] overflow-hidden'>
                    <img src={calathea2} className="object-cover h-full w-full"/>
                </div>
                <div className='md:h-[400px] md:w-full not-md:w-1/2 border-1 border-[var(--color-electric)]'>
                    <img src={calathea3} className="object-cover h-full w-full"/>
                </div>
            </div>
        </div>

        <div className=' md:h-auto md:w-4/8 not-md:w-full not-md:h-full p-[1em]
        '>
            <div className=' flex flex-col h-full justify-between space-y-20'>
                <div className=' h-full 2xl:w-3/4 not-italic text-[var(--color-midnight)]'>
                    <p>Calathea repostería creativa es una pastalería en el centro de Granada. Especializada en tartas personalizadas más asequibles para un público más joven.< br/>< br/>
                    Su objetivo es ser la mano que traduce tus ideas en tartas reales, por ello desarrollé una marca que nos hiciera imaginar, crear e ilusionar a todos, y así poder plasmar su sueño igual que ellos el de sus clientes.< br/>< br/>
                    La gran mayoría de pastelerías de alta repostería o creativas centra su branding en su creadora o repostera principal. La clave de este proyecto era hacer lo contrario, que la marca viviera en la gente. Centrarnos en facilitar la personalización del producto para un amplio público, desde los mas mayores a los más pequeños. Que sientan que están en el lugar correcto donde crear magia.< br/>< br/>
                    La estrategía fue esa, usar los sueños del cliente como punto clave para toda la marca. Con un estilo de fotografía de producto al natural y vibrante y una línea gráfica clara y mágica conseguí una buena coherencia de marca junto a la experiencia real ofrecida en el local.</p>
                </div>
                <div className=' flex md:text-[3vw] text-[6vw] text-[var(--color-electric)] text-right justify-end leading-[1em]'>
                    <h3>“haz tus dulces <br />sueños realidad”</h3>
                </div>
            </div>  
        </div>

        <div className=' md:h-auto md:w-1/8 not-md:w-full not-md:h-1/8 p-[1em]'>
            <div className='grid w-full md:h-full not-md:min-h-[20vw] not-md:grid-cols-5 md:grid-rows-5 gap-3' >
                    
                    <div className='bg-[#12488A] w-full h-full 
                        border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#107685] w-full h-full 
                        border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#8DB5A0] w-full h-full 
                        border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#EFDAB4] w-full h-full 
                        border-1 border-[var(--color-electric)]'></div>
                    <div className='bg-[#E86132] w-full h-full 
                        border-1 border-[var(--color-electric)]'></div>
            </div>
        </div>


</section>


{/*sección 3 imagen full*/}

        
        <section className='w-full h-[10vh] md:h-[20vh] border-b-1 border-[var(--color-electric)]'>
            <img src={calathea4} className="h-full w-full object-cover"/>
        </section>
        

{/*divisor*/}

        <div className="bg-[var(--color-lavander)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
                <div>
                    <h3>[Redes Sociales]</h3>
                </div>
                <div >
                    <img src={vector11} className="h-[1.5em]"/>
                </div>
            </div>

{/*sección 4 especificaciones*/}

        <section className='flex flex-col md:flex-row w-full h-full xl:h-[60vh] 2xl:h-[80vh] bg-[var(--color-lavander)] not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)]'>
            <div className=' flex md:w-1/3 w-full  text-[var(--color-electric)] pb-[5em]'>
                <div className=' flex flex-col  w-full p-[1em]'>
                    <h2>RRSS</h2>
                    <p className='text-[var(--color-midnight)] not-italic'>Para Calathea se fue generando día a día una gran gama de publicaciones para sus redes sociales (Instagram y TikTok). Desde las ofertas semanales, los talleres de tartas (también creamos el material didáctico) hasta la edición de videos del día a día en la pastelería.</p>
                </div>
            </div>

            <div className=' md:w-2/3 w-full md:h-full h-[40vh]'>
                <div className='flex h-full w-full overflow-hidden '>
                    <img src={calathea5} className="h-full w-full object-cover"/>
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

{/*sección 5 full imagenes

            
            <section className='h-[90vh] w-full'>
                    <img src='' className="h-full w-full"/>
            </section>

 */}           

{/*sección 6 galeria =< md  */}

            <section className=' flex flex-col h-full '>
                <div className='flex flex-row h-[35vw] w-full border-b-1 border-[var(--color-electric)] divide-x-1 divide-[var(--color-electric)]'>
                    <div className='flex h-full w-2/3  '>
                        <img src={calathea6} className="h-full w-full object-cover "/>
                    </div>
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea7} className="h-full w-full "/>
                    </div>
                </div>
                <div className='flex flex-row h-[35vw] w-full border-b-1 border-[var(--color-electric)] divide-x-1 divide-[var(--color-electric)]'>
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea8} className=" h-full w-full object-cover" />
                    </div>
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea9} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea10} className="h-full w-full object-cover"/>
                    </div>
                </div>
                <div className='flex flex-row h-[35vw] w-full border-b-1 border-[var(--color-electric)] divide-x-1 divide-[var(--color-electric)]'>
                    
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea11} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-2/3 '>
                        <img src={calathea12} className="h-full w-full object-cover"/>
                    </div>
                </div>
                <div className='flex flex-row h-[35vw] w-full  divide-x-1 divide-[var(--color-electric)]'>
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea13} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea14} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-1/3 '>
                        <img src={calathea15} className="h-full w-full object-cover"/>
                    </div>
                </div>
            </section>

            
        <Footer />

    </main>
    )
}

export default CalatheaReposteria


{/*
    <section className='bg-[var(--color-cream)] flex flex-col h-full '>
                <div className='flex flex-row h-1/4  border-b-1 border-[var(--color-electric)]'>
                    <div className='flex h-full w-2/3 border-r-1 border-[var(--color-electric)] '>
                        <img src={calathea6} className="h-full w-full object-cover "/>
                    </div>
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea7} className="h-full w-full "/>
                    </div>
                </div>
                <div className='flex flex-row h-1/4  border-b-1 border-[var(--color-electric)]'>
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea8} className=" h-full" />
                    </div>
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea9} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea10} className="h-full w-full object-cover"/>
                    </div>
                </div>
                <div className='flex flex-row h-1/4  border-b-1 border-[var(--color-electric)]'>
                    
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea11} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-2/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea12} className="h-full w-full object-cover"/>
                    </div>
                </div>
                <div className='flex flex-row h-1/4  border-b-1 border-[var(--color-electric)]'>
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea13} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea14} className="h-full w-full object-cover"/>
                    </div>
                    <div className='flex h-full w-1/3 border-r-1 border-[var(--color-electric)]'>
                        <img src={calathea15} className="h-full w-full object-cover"/>
                    </div>
                </div>
            </section>
    
    */}