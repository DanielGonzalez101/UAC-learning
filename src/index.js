import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Components/Login/Login'
// Lo uso para importar la fuente a el proyecto porfavor no lo borren
import './index.css'; // O el nombre de tu archivo CSS principal


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals