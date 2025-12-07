import React from 'react'
import Calendario1 from '../../assets/projects/calendarios/Calendario1.mp4'
import Calendario2 from '../../assets/projects/calendarios/Calendario2.mp4'


const GifCalendario = () => {
    return (
        <div className='flex xl:flex-row not-md:aspect-9/18 flex-col h-full w-full items-center object-cover divide-y-1 xl:divide-x-1 divide-[var(--color-electric)]'>
            <div className='flex not-md:aspect-square h-screen w-full items-center object-cover'>
                <video 
                className='h-full w-full object-cover' 
                autoPlay loop muted
                src={Calendario1}
                type='video.mp4'
                ></video>
            </div>
            <div className='flex not-md:aspect-square h-screen w-full items-center object-cover'>
                <video 
                className='h-full w-full object-cover' 
                autoPlay loop muted
                src={Calendario2}
                type='video.mp4'
                ></video>
            </div>

        </div>
    )
}

export default GifCalendario