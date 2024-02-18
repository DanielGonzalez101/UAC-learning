import React from "react";
import './login.css'

const Login = () => {
  // state and methods for handling login would go here
  // Css
  return (
    // Contenedor de toda la pagina
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
          <input
            type="text"
            placeholder="Usuario"
            id="input-usuario"
          // onChange, value, etc.
          />
          <br />

          <input
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
            /> recordarme
          </label>
        </div>
        {/* Acaban los inputs */}


        <br />
        {/* Inicia recordarme */}
        {/* Termina recordarme */}

        <br />

        {/* Inicia el boton */}
        <button id="button-style" type="submit">
          INICIAR SESIÓN
        </button>
        {/* termina el boto */}

      </div>
      {/* termina el form */}
    </div>
    // Se acaba el contenedor de la pagina
  );
  // Nota: En tu código origina
}

export default Login;