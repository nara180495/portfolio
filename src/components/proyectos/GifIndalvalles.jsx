import React from 'react'
import IVloop from '../../assets/projects/indalvalles/IVloop.mp4'


const GifIndalvalles = () => {
    return (
        <div className='flex h-full w-full items-center object-cover'>
            <div className='object-cover h-full w-full'>
                <video 
                className='h-full w-full object-cover' 
                autoPlay loop muted
                src={IVloop}
                type='video.mp4'
                ></video>
            </div>

        </div>
    )
}

export default GifIndalvalles
