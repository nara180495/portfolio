import React from 'react'
import Kika1 from '../../assets/images/supurrvisor3.mp4'

const VideoKika = () => {
    return (
        <div className='h-full w-full'>
            <video 
            className='h-full w-full object-cover' 
            autoPlay loop muted
            src={Kika1}
            type='video.mp4'
            ></video>
        </div>
    )
}

export default VideoKika
