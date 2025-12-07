import React from "react";
import Footer from "../components/navigation/Footer";

import VideoKikaContact from "../components/mail/VideoKikaContact";
import ContactForm from "../components/mail/ContactForm";

const Contact = () => {
    return(
        <main className="text-[var(--color-cream)] pt-[80px]">

{/* Titulo */}           
            <header className="mx-auto flex w-full flex-wrap items-center justify-between p-[1em]"> 
                <h2 className='text-[6vw] md:text-[3em] text-[var(--color-electric)] uppercase'>Contacta conmigo</h2>
            </header>

{/* info */}   

            <section className="flex lg:flex-row flex-col border-y-1 border-[var(--color-electric)] not-lg:h-full lg:h-[70vh] lg:divide-x-1 divide-[var(--color-electric)] lg:mb-10 mb-20">               
                <div className="lg:w-1/2 w-full flex flex-col divide-y-1 divide-[var(--color-electric)]">
                    <div className=" flex flex-row h-full p-[1em] space-x-5">
        {/* gif kika */}                
                        <div className=" xl:w-2/5 w-1/2 h-full border-1 border-[var(--color-electric)]">
                            <div className="not-lg:h-[40vh] h-full w-full overflow-hidden object-cover flex">
                                <VideoKikaContact />
                            </div>
                        </div>
        {/* pekeña info */} 
                        <div className="xl:w-3/5 w-1/2 h-full not-italic">
                            
                            <p className="xl:w-2/3">¿Te interesa que trabajemos juntos o tienes algún proyecto en mente? < br/>< br/>
                            Puedes contactar conmigo a través del siguiente formulario, por correo o por Linkedin y me pondré en contacto lo antes posible.< br/>< br/>
                            <p className="text-[var(--color-electric)]"> Gracias ♡ </p>
                            </p>
                        </div>
                    </div>

                    <div className="hidden text-[var(--color-electric)] not-italic uppercase font-medium p-[0.5em] md:flex flex-wrap justify-between content-center">
                        <div>
                            <a href="https://www.linkedin.com/in/bzgzjz/" target="_blank" rel="noreferrer"> [LinkedIn] </a> 
                            
                        </div>
                        <div>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDpKBqJqwdXjRtrzJQZCZTscmfPzsGfhtLxMNTJbrRQZVlKxBxHVWBPZlCxRLXWpjlZLqpQ" mailto="mailto:beag.design@gmail.com" target="_blank" rel="noreferrer"> [beag.design@gmail.com] </a>
                        </div>
                    </div>
                </div>



{/* formulario */}  

                <div className="lg:w-1/2 bg-[var(--color-lavander)] h-full p-[1em]">
                    <div className=" h-full w-full">
                        <ContactForm />
                    </div>
                </div>

            </section>
        

{/* footer */}  

        <Footer />
        </main>
        
    )
}

export default Contact