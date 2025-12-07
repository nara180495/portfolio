import React from 'react'
import Kika2 from '../../assets/images/supurrvisor1.mp4'

const VideoKikaHorizontal = () => {
    return (
        <div className='h-full w-full'>
            <video 
            className='h-full w-full object-cover' 
            autoPlay loop muted
            src={Kika2}
            type='video.mp4'
            ></video>
        </div>
    )
}

export default VideoKikaHorizontal
