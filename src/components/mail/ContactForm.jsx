import React, {useRef} from 'react';
import emailjs from "@emailjs/browser";


const ContactForm = () => {
    const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        "service_2iyi32g", 
        "template_ysol3iu", 
        form.current,
        "G-Y7X0fF5FtjORufE"
        )
        .then(
            () => {
                alert("Mensajito enviado, muchas grasias 👽")
                form.current.reset();
            },
            (error) => {
                alert("Upsies, algo ha fallado, intentalo de nuevo porfa...👁️👄👁️", error.text);
            }
        );
    }
    

    return (
        <div className='form-wrapper text-[var(--color-electric)] not-italic h-full w-full flex '>
            <form ref={form} onSubmit={sendEmail} className='contact-form flex flex-col h-full w-full'>
                <label>Nombre</label>
                <input 
                className='bg-[var(--color-lavander)] text-[var(--color-midnight)] p-[0.5em] border-1 border-[var(--color-electric)]'
                type='text' 
                name='user_name' 
                required placeholder='Fulanito de tal..'/>

                <label>Email</label>
                <input 
                className='bg-[var(--color-lavander)] text-[var(--color-midnight)] p-[0.5em] border-1 border-[var(--color-electric)]'
                type='email' 
                name='user_email' 
                required placeholder='Correito.com...'/>
                
                <label className='pt-[1em] uppercase '>
                    Asunto
                </label>
                <input 
                className='bg-[var(--color-lavander)] text-[var(--color-midnight)] p-[0.5em] border-1 border-[var(--color-electric)]'
                type='subject' 
                name='subject' 
                required placeholder='El asuntillo..'/>

                <label className='pt-[1em]'>
                    Mensaje
                </label>
                <textarea 
                className='bg-[var(--color-lavander)] text-[var(--color-midnight)] p-[0.5em] border-1 border-[var(--color-electric)] h-full'
                type='message' 
                rows='10'
                name='user_name' 
                required placeholder='Cuéntame el chisme...'>
                </textarea>

                <button 
                className=' mt-[1em] hover:bg-[var(--color-lilac)] p-[0.3em] bg-[var(--color-electric)] w-full text-[var(--color-cream)] flex uppercase text-2xl justify-around cursor-pointer' 
                type='submit' 
                value='Enviar'
                > Enviar
                </button>
                
            </form>
        </div>
    )
}

export default ContactForm
