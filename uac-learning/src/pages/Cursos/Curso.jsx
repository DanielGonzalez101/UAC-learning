import React from 'react'
import { useContext } from 'react'
import Contexto from '../../Context/context'
import './curso.css'
import Barrabusqueda from '../../Components/search-bar/search'
import NavBar from '../../Components/nav-bar/Navbar'
import Boton from '../../Components/AsignaturaBoton/Boton'

import iconoComputador from '../../resources/iconos-botones/Computador.svg'

const Cursos = () => {
  const { usuario } = useContext(Contexto)
  return (
    <>
      <div id="contenedor-cursos">

        <div className="cursos">
          <NavBar nombre={usuario.nombre} apellido={usuario.apellido} />
          <Barrabusqueda />

          {/* Inicia contenedor de materias */}
          <div className='ContenedorMaterias'>
            <Boton background="linear-gradient(to right, #667eea, #764ba2)"
              text="Desarrollo Web"
              iconSrc={iconoComputador}
            />
            <Boton background="linear-gradient(to right, #667eea, #764ba2)"
              text="Desarrollo Web"
              iconSrc={iconoComputador}
            />
            <Boton background="linear-gradient(to right, #667eea, #764ba2)"
              text="Desarrollo Web"
              iconSrc={iconoComputador}
            />
            <Boton background="linear-gradient(to right, #667eea, #764ba2)"
              text="Desarrollo Web"
              iconSrc={iconoComputador}/>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Cursos