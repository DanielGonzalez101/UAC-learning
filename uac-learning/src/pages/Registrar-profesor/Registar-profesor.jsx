import React from 'react'
import './registrar-profesor.css'

// Iconos
import archivo from '../../resources/login-registrar/iconos/icono_archivo.png'
import cuaderno from '../../resources/login-registrar/iconos/cuaderno.png'
import universidad from '../../resources/login-registrar/iconos/universidad.png'
import computador from '../../resources/login-registrar/iconos/computador.png'

// Se importa el useState de react y Axios para mandar la info
import { useState } from "react"
import Axios from 'axios'

// Import input 
import Input from '../../Components/input/Input'
import { Link } from 'react-router-dom'

function RegistrarProfesor() {

  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Contrasena, setContrasena] = useState("")
  const [Correo, setCorreo] = useState("")
  const [Codigo, setCodigo] = useState()
  const [Cedula, setCedula] = useState("")

  const add = async () => {
    try {

      const response = await Axios.post('http://localhost:3100/api/registrar', {
        Nombre: Nombre,
        Apellido: Apellido,
        Contrasena: Contrasena,
        Correo: Correo,
        Codigo: Codigo,
        Cedula: Cedula
      })

      alert(response.data.msg)
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

            <Input placeholderText="Nombre" labelText="Nombre:" inputType="text" variable={Nombre} setVariable={setNombre} />
            <br />

            <Input placeholderText="Apellido" labelText="Apellido:" inputType="text" variable={Apellido} setVariable={setApellido} />
            <br />

            <Input placeholderText="Correo" labelText="Correo:" inputType="text" variable={Correo} setVariable={setCorreo} />
            <br />

            <Input placeholderText="Contraseña" labelText="Contraseña:" inputType="password" variable={Contrasena} setVariable={setContrasena} />
            <br />
            {/* Corregir el confirmar contraseña */}
            {/* 
            <Input placeholderText="Confirmar contraseña" labelText="Confirmar contraseña:" inputType="password" />
            <br />
 */}
            <Input placeholderText="Codigo" labelText="Codigo:" inputType="number" variable={Codigo} setVariable={setCodigo} />
            <br />

            <Input placeholderText="Cedula" labelText="Cedula:" inputType="number" variable={Cedula} setVariable={setCedula} />
            <br />
            {/* Acaban los inputs */}

            {/* Inicia recordarme */}
            <br />

            {/* Termina recordarme */}
          </div>
          <br />

          {/* Inicia el boton */}
          <Link to="/login" id='button-registrar'>
            <button id="button-register" type="submit" onClick={add}>
              Crear Cuenta
            </button>
          </Link>
          {/* termina el boto */}
          {/* Personalizar a mi me da flojera */}
        </div>
        {/* termina el form */}


      </div>
      {/* // Se acaba el contenedor de la pagina */}
    </>)
}

export default RegistrarProfesor;