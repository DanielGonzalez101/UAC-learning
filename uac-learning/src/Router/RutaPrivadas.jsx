import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Curso from '../pages/Cursos/Curso'
import EditUser from '../pages/Editar-Usuario/EditUser'

function RutaPrivadas() {
  return (
    <>
        {/*<NavBar/> Hagan el navbar perros*/ }
        <Routes>
            <Route path='cursos' element={<Curso/>}/>
            <Route path='perfil' element={<EditUser/>}/>
            <Route path='/*' element={<Navigate to="/cursos"/>}/>
        </Routes>
    </>
  )
}

export default RutaPrivadas