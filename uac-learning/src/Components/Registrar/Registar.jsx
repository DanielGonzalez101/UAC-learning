import React from 'react'
import './registrar.css'

// Iconos
import archivo from './iconos/icono_archivo.png'
import cuaderno from './iconos/cuaderno.png'
import universidad from './iconos/universidad.png'
import computador from './iconos/computador.png'

// Se importa el useState de react y Axios para mandar la info
import { useState } from "react"
import Axios from 'axios'

function Registrar() {

  const [Correo, setCorreo] = useState("")
  const [Contrasena, setContrasena] = useState("")
  const [ConfirmarContrasena, setConfirmarContrasena] = useState("")
  const [Colegio, setColegio] = useState("")
  const [Codigo, setCodigo] = useState(0)
  const [Usuario, setUsuario] = useState("")

  const add = async () => {
    try {

      const response = await Axios.post('http://localhost:4000/create', {
        Correo: Correo,
        Contrasena: Contrasena,
        ConfirmarContrasena: ConfirmarContrasena,
        Colegio: Colegio,
        Codigo: Codigo,
        Usuario: Usuario
      })

      console.log('Usuario creado: ', response.data)

    } catch (error) {

      console.error('Error al crear el usuario: ', error)

    }
  }

  return (// Contenedor de toda la pagina
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
              <h2>Crear Cuenta</h2>
            </div>
          </div>
          {/* Acaba titulo */}


          {/* Incian los input */}
          <div className="input-style">
            <p className="lbl-inputs">Correo:</p>
            <input
              onChange={(event) => {
                setCorreo(event.target.value)
              }}
              type="text"
              placeholder="Correo"
              id="input-correo"
            // onChange, value, etc.
            />
            <br />

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

            <p className="lbl-inputs">Confirmar Contraseña:</p>
            <input
              onChange={(event) => {
                setConfirmarContrasena(event.target.value)
              }}
              type="password"
              placeholder="Confirmar Contraseña"
              id="input-contrasena"
            // onChange, value, etc.
            />
            <br />

            <p className='lbl-inputs'>Colegio:</p>
            <input onChange={(event) => {
              setColegio(event.target.value)
            }} type='text' placeholder='Colegio' id='input-colegio' />
            <br />

            <p className='lbl-inputs'>Codigo:</p>
            <input onChange={(event) => {
              setCodigo(event.target.value)
            }} type='number' placeholder='Codigo' id='input-codigo' />
            <br />

            {/* Acaban los inputs */}

            {/* Inicia recordarme */}
            <br />
            <label>
              <input
                type="checkbox"
              // checked, onChange, etc.
              /> Recordarme
            </label>
            {/* Termina recordarme */}
          </div>
          <br />

          {/* Inicia el boton */}
          <button id="button-register" type="submit" onClick={add}>
            Crear Cuenta
          </button>
          {/* termina el boto */}

        </div>
        {/* termina el form */}
      </div>
      {/* // Se acaba el contenedor de la pagina */}
    </>)
}

export default Registrar;