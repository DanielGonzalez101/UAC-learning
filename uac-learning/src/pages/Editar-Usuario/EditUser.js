import React, { useState } from 'react';
import './EditUser.css'; // Importa el archivo CSS si lo tienes
import userIcon from '../../resources/editar-usuario/icono-usuario.png'
function EditUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu backend o realizar cualquier otra acción necesaria
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
  };
  
 // falta la imagen para la configuracion de el ususario
  return (
    <div className="edit-user-container">
      <div className="column">  
      <div className="section top-section">
          <h3>Detalles del Usuario</h3>
          <img src={userIcon} className = "img-edituser" alt="Imagen de usuario" />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input className='input-edituser'
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <label htmlFor="email">Correo electrónico:</label>
              <input className='input-edituser'
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button className='button-edituser' type="submit">Guardar</button>
          </form>
        </div>

        <div className="section">
          <h3>Detalles del Curso</h3>
          <p>algebra lineal </p>
          <p>aplicativos moviles</p>
          <p>modelamiento de datos</p>
        </div>
      </div>

      <div className="column">
      <div className="section top-section">
          <h3>Privacidad y Política</h3>
          <p>aqui en la plataforma UAC-learning buscamos el maximo entendimiento de todas las areas tratadas  </p>
          <p>tenemos la politica de siempre respetar a nuestros alumnos </p>
          <p>tenemos la politica de siempre respetar a nuestros maestros</p>
          <p>siempre que tenga alguna duda se tratara mediante nuestra seccion de contactos </p>
        </div>
        <div className="section">
          <h2>Miscelánea</h2>
          <p>Aquí puedes agregar cualquier otro contenido que se pueda cambiar desde el código.</p>
          <p>datos2 </p>
          <p>datos3 </p>
        </div>
      </div>

      <div className="column">
      <div className="section top-section">
          <h3>Informe</h3>
          <p>informe1 descripcion de su informe</p>
          <p>informe2 descripcion de su informe </p>
        </div>
        <div className="section">
          <h2>Actividad y Accesos</h2>
          <p>2024-03-01 acceso a la plataforma uac learning</p>
          <p>2023-07-12 acceso a la plataforma uac learning</p>
          <p>2024-04-10 acceso a la plataforma uac learning</p>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
