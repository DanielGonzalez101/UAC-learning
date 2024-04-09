import React from "react";
import './login-profesor.css'
// Iconos de las esquinas
import archivo from '../../resources/login-registrar/iconos/icono_archivo.png'
import cuaderno from '../../resources/login-registrar/iconos/cuaderno.png'
import universidad from '../../resources/login-registrar/iconos/universidad.png'
import computador from '../../resources/login-registrar/iconos/computador.png'
import { useState } from "react"
import Axios from 'axios'
import Input from '../../Components/input/Input'


const LoginProfesor = () => {
  const [Usuario, setUsuario] = useState("")
  const [Contrasena, setContrasena] = useState("")

  // Hacemos un metodo add para poder agregar axios (editar)
  const add = () => {
    Axios.post('http://localhost:3001/create', {
      Usuario: Usuario,
      Contrasena: Contrasena
    }).then(() => {
      alert('Usuario Registrado')
    })
  }


  return (
    // Contenedor de toda la pagina
    <>
      <img src={archivo} id="arriba-izq" alt="" className="icon" />
      <img src={cuaderno} id="arriba-der" alt="" className="icon" />
      <img src={universidad} id="abajo-izq" alt="" className="icon" />
      <img src={computador} id="abajo-der" alt="" className="icon" />
      <div className="container">

        {/* Inicia el formulario */}
        <div id="form" >

          {/* Titulo */}
          <div id="title">
            <div>
              <h2>UAC Learning</h2>
            </div>
          </div>
          {/* Acaba titulo */}


          {/* Incian los input */}
          <div className="input-style">
            <Input placeholderText="Usuario" labelText="Usuario:" inputType="text" variable={Usuario} setVariable={setUsuario} />
            <br />
            <Input placeholderText="Usuario" labelText="Usuario:" inputType="text" variable={Contrasena} setVariable={setContrasena} />
            <br />
            <label>
              <input
                type="checkbox"
              // checked, onChange, etc.
              /> Recordarme
            </label>
          </div>
          {/* Acaban los inputs */}


          <br />
          {/* Inicia recordarme */}
          {/* Termina recordarme */}

          <br />

          {/* Inicia el boton */}
          <button id="button-style" type="submit" onClick={add}>
            INICIAR SESIÓN
          </button>
          {/* termina el boto */}

        </div>
        {/* termina el form */}
      </div>
      {/* // Se acaba el contenedor de la pagina */}
    </>
  );
  // Nota: En tu código origina
}

export default LoginProfesor;