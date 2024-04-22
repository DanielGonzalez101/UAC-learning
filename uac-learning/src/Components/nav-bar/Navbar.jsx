import React from 'react'
import AccordionItem from '../acordion/Acordion'
import './navbar.css'


const navbar = ({ nombre, apellido }) => {
    return (
        <div id='contenedor-navbar'>
            <div className='navbar'>
                <div className='message'>Bienvenido de nuevo,
                    <div className='mayuscula'>
                        {` ${nombre}  ${apellido}`} ✌️
                    </div>
                    <AccordionItem />
                </div>
            </div>
        </div>
    )
}

export default navbar