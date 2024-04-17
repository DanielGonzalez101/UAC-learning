import React from 'react'
import AccordionItem from '../acordion/Acordion'
import './navbar.css'


const navbar = ({nombre, apellido }) => {
    return (
        <div className='navbar'>
            <div className='message'>Bienvenido de nuevo, 
                <div className='mayuscula'>
                {` ${nombre}  ${apellido}`}
                </div>! &#9996;
            </div>
            <div className="accordion">
                <AccordionItem/>
            </div>
        </div>
    )
}

export default navbar