import React from 'react'
import vector11 from "../../assets/images/vector11.png"
import vector8 from "../../assets/images/vector8.png"
import vector4 from "../../assets/images/vector4.png"
import vector2 from "../../assets/images/vector2.png"
import vector9 from "../../assets/images/vector9.png"


import calendarios1 from "../../assets/projects/calendarios/calendarios1.jpg"
import calendarios2 from "../../assets/projects/calendarios/calendarios2.jpg"
import calendarios3 from "../../assets/projects/calendarios/calendarios3.jpg"
import calendarios4 from "../../assets/projects/calendarios/calendarios4.jpg"

import Footer from '../navigation/Footer'

import GifCalendario from './GifCalendario.jsx'

import Calendario1 from "../../assets/projects/calendarios/2026_CALENDARIO1_BZGZJZ.pdf"
import Calendario2 from "../../assets/projects/calendarios/2026_CALENDARIO2_BZGZJZ.pdf"


const Calendarios = () => {

return (


  <main className="pt-[70px]">

{/*portada*/}

    <div className='flex w-full h-[30vh] md:hidden border-b-1 border-[var(--color-electric)]'>
      <div className=' h-full w-full'>
        <img src={calendarios1} className="object-cover h-full w-full"/>
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
          <h2 className='text-[6vw] md:text-[3em] text-[var(--color-electric)] leading-[3em] md:leading-[1em] '>Calendarios 2026</h2>
          <p className=' text-[var(--color-midnight)] not-italic '>
            Dos calendarios gratis para 2026 como regalito por tu visita. Uno con ilustraciones a mano de rosetones de catedrales góticas y el segundo mezclando los estilos streetwear y racing.
          </p>
        </div>
      </div>

      <div className='flex-grow not-md:hidden'>
        <div className=' h-full w-full'>
          <img src={calendarios1} className="object-cover h-full w-full"/>
        </div>
      </div>
    </section>

{/*sección 1 divisores - categorias*/}

    <div className="bg-[var(--color-lilac)] text-[var(--color-midnight)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
      <div>
        <h3>[Ilustración, Editorial]</h3>
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
        <h3>[Los diseños]</h3>
      </div>
    </div>

{/*sección 2 explicación*/}

    <div className='flex flex-row space-x-5 w-full p-[1em] md:hidden border-b-1 border-[var(--color-electric)] bg-[var(--color-cream)]'>
      <div className=' h-full aspect-square w-1/2 border-1 border-[var(--color-electric)]'>
        <img src={calendarios2} className="object-cover h-full w-full"/>
      </div>
      <div className='h-full aspect-square w-1/2  border-1 border-[var(--color-electric)]'>
        <img src={calendarios3} className="object-cover h-full w-full"/>
      </div>
    </div>

    <section className='bg-[var(--color-cream)] w-full overflow-hidden flex flex-col md:flex-row md:divide-x-1 divide-[var(--color-electric)] border-b-1 border-[var(--color-electric)] '>
      <div  className='flex flex-grow w-full md:w-1/2 xl:w-1/3'>
        <div className="p-[1em] mx-auto flex flex-col w-full justify-between"> 
          <h2 className='pb-20 text-[6vw] md:text-3xl text-[var(--color-electric)] '>
            ¿Calendarios? Pues sí!
          </h2>
          <p className=' lg:w-3/4 text-[var(--color-midnight)] not-italic align-bottom text-sm'>
            Realmente es un pequeño regalo para aquellos que visiten mi web. Me gusta mucho personalizarme todo al milímetro, sobre todo hacer mi propia papelería, y este año no podía ser menos. Los dos calendarios pueden parecer que no pegan ni con cola, pero quien me conoce sabe que los dos podrían ser mi estilo.< br/>< br/> 
            Un poco influenciada por las tendencias de las últimas películas resurgiendo las historias de romance gótico me he visto en la obligación de rescatar mi adoración por los rosetones de las catedrales góticas europeas, que remedio. Creo que le viene al dedo sinceramente. Son ilustraciones propias basadas en los estudios de las fachadas, intentando ser lo más fiel posible (y lo que la vista me dejaba ver de las fotos, que una es miope).< br/>< br/> 
            El segundo calendario es bastante más actual que el anterior. Como mejor lo puedo describir es salir una tarde con los amigos y encontrarse un sitio de arcade con una máquina de carreras antiguas. Bastante curioso la verdad. Pero en esencia es una mezcla de los estilos retro future y streetwear, con el toque del racing.< br/>< br/> 
            Puedes descargate los archivos en pdf más abajo. Ala, a disfrutarlos!
          </p> 
        </div>
      </div>


      <div className='not-md:hidden w-1/2 xl:w-2/3 flex-grow p-[1em]'>
        <div className='flex flex-col xl:flex-row h-full xl:space-x-5 space-y-5'>
          <div className='xl:h-full h-1/2 md:h-[30vh] xl:w-1/2 w-full border-1 border-[var(--color-electric)] overflow-hidden'>
            <img src={calendarios2} className="object-cover h-full w-full  "/>
          </div>
          <div className='xl:h-full h-1/2 md:h-[30vh] xl:w-1/2 w-full border-1 border-[var(--color-electric)] overflow-hidden'>
            <img src={calendarios3} className="object-cover h-full w-full  "/>
          </div>
        </div>
      </div>
    </section>



{/*divisor*/}

    <div className="bg-[var(--color-lavander)] text-[var(--color-electric)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between border-b-1 border-[var(--color-electric)] content-center">
      <div>
        <h3>[Descargas]</h3>
      </div>
      <div >
        <img src={vector11} className="h-[1.5em]"/>
      </div>
    </div>

{/*sección 3 enlaces descarga*/}

    <section className='flex flex-col md:flex-row w-full h-full bg-[var(--color-lavander)] not-md:divide-y-1 md:divide-x-1 divide-[var(--color-electric)] '>

      <div className=' md:w-2/3 w-full md:h-full object-cover'>
        <div className='flex h-full w-full overflow-hidden object-cover'>
          <img src={calendarios4} className="object-cover h-full w-full"/>
        </div>
      </div>

      <div className=' flex flex-row md:flex-col md:w-1/3 w-full md:divide-y-1 divide-x-1 text-[var(--color-electric)]'>
        <div className='flex h-1/2 w-full p-[1em] text-center justify-between'>
          <a href={Calendario1} target="_blank" rel="noreferrer"
          className='grid w-full text-xl not-md:uppercase md:text-[2vw] content-center'>
            Calendario rosetones (pdf)
          </a>
        </div>
        <div className='flex h-1/2 w-full p-[1em] text-center justify-between'>
          <a href={Calendario2} target="_blank" rel="noreferrer" className='grid w-full text-xl not-md:uppercase md:text-[2vw] content-center'>
            Calendario moderno (pdf)
          </a>
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


{/*sección 4 gifs full*/}

    <section className='flex w-full h-full divide-y-1 border-[var(--color-electric)] divide-[var(--color-electric)]'>
      <div className='flex h-full w-full overflow-hidden object-cover'>
        <GifCalendario />
      </div>
    </section>

    <Footer />

    </main>
  )
}

export default Calendarios
