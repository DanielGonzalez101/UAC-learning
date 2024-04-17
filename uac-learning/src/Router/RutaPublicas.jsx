import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login-profesor/Login-profesor'
import RutaPrivadas from './RutaPrivadas'
import { useContext } from 'react'
import Contexto from '../Context/context'
import Registrar from '../pages/Registrar-profesor/Registar-profesor'
import Inicio from '../pages/inicio/Inicio'

function RutaPublicas() {
  const {estado} = useContext(Contexto)
  return (
    <>
    <Routes>
        <Route path='login'  
        element= {!estado? <Login/> : <Navigate to="/"/>}
        />
        <Route path='registro'  
        element= {!estado? <Registrar/> : <Navigate to="/"/>}
        />
        <Route path='inicio'  
        element= {!estado? <Inicio/> : <Navigate to="/"/>}
        />
        <Route path='/*' 
        element={estado? <RutaPrivadas/>:<Navigate to="/inicio"/>}
        />
    </Routes>
    </>
  )
}

export default RutaPublicas