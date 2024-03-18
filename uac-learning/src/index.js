import React from 'react';
import ReactDOM from 'react-dom/client';
// import Login from './pages/Login/Login'
import Inicio from './pages/inicio/Inicio'
// Lo uso para importar la fuente a el proyecto porfavor no lo borren
import './index.css'; // O el nombre de tu archivo CSS principal


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inicio/>
  </React.StrictMode>
);