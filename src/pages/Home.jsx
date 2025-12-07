import React from "react";
import Video from '../components/home/Video'
import HomeHeroText from "../components/home/HomeHeroText";


const Home = () => {
    return(
        <div className="text-[var(--color-electric)]">
            <div className='fixed inset-0 h-screen w-screen'>
                <Video />
            </div>
            <div className='pt-[20px] mx-auto flex w-full h-screen relative overflow-hidden flex-col justify-between'>
                <HomeHeroText />
                
                
            </div>
        </div>
    )
}

export default Home