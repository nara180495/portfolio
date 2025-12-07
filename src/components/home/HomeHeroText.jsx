import React from 'react'

const HomeHeroText = () => {
    return (
        <div className='p-[1em] h-full  '>
            <div className='pt-20 pb-10 top-[1em] md:top-[5em] text-[#4a12f4] flex flex-col h-full place-content-between'>
                
                    <h1 className='flex justify-start text-[16vw] md:text-[7em] leading-[13vw] md:leading-[0.8em] p-b-10 '>
                        ideas que<br />
                        aterrizan
                    </h1>
                
                    <h1 className='flex justify-end  text-[16vw] md:text-[7em] leading-[13vw] md:leading-[0.8em]'>
                        en un diseño<br />
                        que despega
                    </h1>
            </div>
        </div>
    )
}

export default HomeHeroText
