import React from 'react'
import morera1 from '../../assets/projects/morera/APP1.mp4'
import morera2 from '../../assets/projects/morera/APP2.mp4'

const VideoMorera = () => {
    return (
        <div className='flex flex-row h-full w-full bg-[#262C00] items-center'>
            <div>
                <video 
                className='h-full w-full' 
                autoPlay loop muted
                src={morera1}
                type='video.mp4'
                ></video>
            </div>
            <div>
                <video 
                className='h-full w-full' 
                autoPlay loop muted
                src={morera2}
                type='video.mp4'
                ></video>
            </div>
        </div>
    )
}

export default VideoMorera
