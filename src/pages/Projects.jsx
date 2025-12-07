import ProjectCard from "../components/proyectos/ProjectCard";
import vector21 from "../assets/images/vector21.png"
import { NavLink} from 'react-router-dom'
import Footer from "../components/navigation/Footer"

const Projects = () => {



    
    
    return(
        <div className="bg-[var(--color-midnigt)] pt-[80px] h-full overflow-hidden">

{/*TITULOS*/}  
            <header className="mx-auto flex w-full flex-wrap items-center justify-between p-[1em]"> 
                <h2 className='text-[6vw] md:text-[3em] text-[var(--color-electric)] uppercase'>Proyectos</h2>
            </header>

{/*DISPOSICIÓN*/}  
            <section>
                <ProjectCard />
            </section>

{/*DIVISOR LILA*/}         
            <div>
                <div className="bg-[var(--color-lilac)] h-[20v] text-[var(--color-midnigt)] not-italic uppercase font-medium p-[1em] flex flex-wrap justify-between  content-center">
                    <div>
                        <img src={vector21} className="h-[1.7em] w-[1.7em]"/>
                    </div>
                    <div>
                        <h3>[proyectos destacados]</h3>
                    </div>
                </div>
            </div>
            <Footer />


        </div>
    )
}

export default Projects


{/*

    gsap.fromTo(thisAnimWrap, { 
        x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
    }, { 
        x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
        ease: "none",
        scrollTrigger: {
        trigger: sec,		
        start: "top top",
        end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
        pin: thisPinWrap,
        invalidateOnRefresh: true,
        //anticipatePin: 1,
        scrub: true,
        //markers: true,
        }
    });


const project = [{
    img1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    img2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
    }, {
    img1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    img: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    }, {
    img1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    img2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    }]

gsap.registerPlugin(ScrollTrigger)

    useGSAP(function () {
        gsap.from('.hero', {
        height: '100px',
        stagger: {
            amount: 0.4
        },
        scrollTrigger: {
            trigger: '.lol',
            markers: true,
            start: 'top 100%',
            end: 'top -150%',
            scrub: true,
        }
        })
    })

    return(
    <div className="p-4 bg-[var(--color-cream)] h-screen">
        <div className="pt-[10vw]"> 
            <h2 className='text-[16vw] md:text-[7em] text-[var(--color-electric)] uppercase'>Projects</h2>
        </div>
        <div className="mt-20 lol">
            {projects.map(function(elem, idx){
                return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex gap-2'>
                    <ProjectCard img1={elem.img1} img2={elem.img2}/>
                </div>
            })}
        </div>   
    </div>
    )
}     

<div
                ref={(ref) => imageRef.current [i-1] = ref} 
                className="w-[80vh] h-[50vw] flex shrink-0  overflow-hidden border-y-1 border-[var(--color-electric)] bg-amber-400"
                > 
                        <img src={img2} className="w-full"/>
                </div>
                <div
                ref={(ref) => imageRef.current [i-1] = ref} 
                className="w-[80vh] h-[50vw] flex shrink-0  overflow-hidden border-y-1 border-[var(--color-electric)] bg-amber-400"
                > 
                        <img src={img3} className="w-full"/>
                </div>
                <div
                ref={(ref) => imageRef.current [i-1] = ref} 
                className="w-[80vh] h-[50vw] flex shrink-0  overflow-hidden border-y-1 border-[var(--color-electric)] bg-amber-400"
                > 
                        <img src={img4} className="w-full"/>
                </div>




*/}