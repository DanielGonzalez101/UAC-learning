import React from 'react';
import ReactDOM from 'react-dom/client';
// import LoginProfesor from './pages/Login/Login-profesor'
import Inicio from './pages/inicio/Inicio'
import RegistrarProfesor from './pages/Registrar-profesor/Registar-profesor'
// Lo uso para importar la fuente a el proyecto porfavor no lo borren
import './index.css'; // O el nombre de tu archivo CSS principal


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegistrarProfesor/>
    {/* <Inicio/> */}
    {/* <Login/> */}

  </React.StrictMode>
);