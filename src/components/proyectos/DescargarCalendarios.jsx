import React from 'react'
import Calendario1 from "../../assets/projects/calendarios/2026_CALENDARIO1_BZGZJZ.pdf"
import Calendario2 from "../../assets/projects/calendarios/2026_CALENDARIO2_BZGZJZ.pdf"

const DescargarCalendarios = () => {
    return (
        <center className='text-[var(--color-electric)]'>
            
            <a href={Calendario1} target="_blank" rel="noreferrer">
                Calendario rosetones (pdf)
            </a> <br></br>
            <a href={Calendario2} target="_blank" rel="noreferrer">
                Calendario moderno (pdf)
            </a>
        </center>
    )
}

export default DescargarCalendarios
