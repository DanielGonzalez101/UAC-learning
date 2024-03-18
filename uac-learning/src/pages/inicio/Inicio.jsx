import React from "react";
import './inicio.css'

import cohete from '../../resources/inicio/icons/cohete.svg'
import btnProfesor from '../../resources/inicio/icons/btn-profesor.svg'
import btnEstudiante from '../../resources/inicio/icons/btn-estudiante.svg'

const Inicio = () => {
  return (
    <>
      <img src={cohete} alt="" className="cohete" id="iconos" />
      {/* Contenedor de texto */}
      <div id="contenedor-texto">
        <p id="texto" className="programa">
          Programa tu futuro con nosotros
        </p>
        <pre id="segundoParrafo">
          "La programación es como un lienzo en blanco, tú
          decides qué obra de arte crear."
        </pre>
      </div>
      <div id="contenedor-botones">
        <img src={btnProfesor} alt=""  id=""/>
        <img src={btnEstudiante} alt=""  />
      </div>
    </>
  )
}

export default Inicio