import React from 'react'
import Kika3 from '../../assets/images/supurrvisor2.mp4'

const VideoKikaContact = () => {
    return (
        <div className='h-full w-full object-cover overflow-hidden'>
            <video 
            className='h-full w-full object-cover' 
            autoPlay loop muted
            src={Kika3}
            type='video.mp4'
            ></video>
        </div>
    )
}

export default VideoKikaContact
