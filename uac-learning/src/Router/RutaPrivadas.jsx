import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/pagina-principal/Home'

function RutaPrivadas() {
  return (
    <>
        {/*<NavBar/> Hagan el navbar perros*/ }
        <Routes>
            <Route path='principal' element={<Home/>}/>
            {/*<Route path='editar-usuario'element={<editar-usuario/>}/> Hazlo aqui cuña*/}
            <Route path='/' element={<Navigate to="principal"/>}/>
        </Routes>
    </>
  )
}

export default RutaPrivadas