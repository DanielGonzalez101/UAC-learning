import React from "react";
import './login.css'
// Iconos de las esquinas
import archivo from './iconos/icono_archivo.png'
import cuaderno from './iconos/cuaderno.png'
import universidad from './iconos/universidad.png'
import computador from './iconos/computador.png'
import { useState } from "react"
import Axios from 'axios'


const Login = () => {
  const [Usuario, setUsuario] = useState("")
  const [Contrasena, setContrasena] = useState("")

  // Hacemos un metodo add para poder agregar axios
  const add = () => {
    Axios.post('http://localhost:3001/create', {
      Usuario: Usuario,
      Contrasena: Contrasena
    }).then(() => {
      alert('Usuario Registrado')
    })
  }

  // Validaciones de el login
  const validar = () => {
    Axios.post('/login', {
      profesor_email: profesor_email,
      profesor_password: profesor_password,
    })
      .then(response => {
        // Manejo de la respuesta exitosa
        console.log('Respuesta exitosa:', response.data);
        // Aquí puedes redirigir al usuario o manejar el login exitoso
      })
      .catch(error => {
        // Manejo de errores
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango 2xx
          console.log('Error en el login:', error.response.data.msg);
          // Aquí puedes mostrar el mensaje de error en la UI
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió respuesta
          console.log('Error en el servidor:', error.request);
        } else {
          // Algo más causó el error
          console.log('Error:', error.message);
        }
      });
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
            <p className="lbl-inputs">Usuario:</p>
            <input
              onChange={(event) => {
                setUsuario(event.target.value)
              }}
              type="text"
              placeholder="Usuario"
              id="input-usuario"
            // onChange, value, etc.
            />
            <br />

            <p className="lbl-inputs">Contraseña:</p>
            <input
              onChange={(event) => {
                setContrasena(event.target.value)
              }}
              type="password"
              placeholder="Contraseña"
              id="input-contrasena"
            // onChange, value, etc.
            />
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
          <button id="button-style" type="submit" onClick={validar}>
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

export default Login;