import React, { useState } from 'react';
import './acordion.css'; 
import {Link} from 'react-router-dom'
import Contexto from '../../Context/context'
import { useContext } from 'react'

function AccordionItem() {
  const [isOpen, setIsOpen] = useState(false);
  const {deslogearme} = useContext(Contexto)
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <i className='icons'>&#9660;&#127890;</i>
      </div>
      {isOpen && 
        <div className="accordion-content">
            <Link to='/perfil'><button className='button'>Perfil &#x1F464;</button></Link>
            <button className='button' onClick={deslogearme}>Logout &#x1F6AA;</button>
        </div>
      }
    </div>
  );
}



export default AccordionItem;
