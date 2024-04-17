import React from 'react'
import { useContext } from 'react'
import Contexto from '../../Context/context'
import './curso.css'
import Barrabusqueda from '../../Components/search-bar/search'
import NavBar from '../../Components/nav-bar/Navbar'
import Cards from '../../Components/Cards/Cards'
const Cursos = () => {
  const {usuario} = useContext(Contexto)
  return (
    <>
      <div className="cursos">
        <NavBar nombre={usuario.nombre} apellido={usuario.apellido}/>
        <Barrabusqueda/>
        <Cards/>
      </div>
    </>
  )
}

export default Cursos