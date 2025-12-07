import React from 'react'
import Stars from '../../assets/images/bluestars.mp4'

const Video = () => {
    return (
        <div className='h-full w-full'>
            <video 
            className='h-full w-full object-cover' 
            autoPlay loop muted
            src={Stars}
            type='video.mp4'
            ></video>
        </div>
    )
}

export default Video
