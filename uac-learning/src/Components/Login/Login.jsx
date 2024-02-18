import React, { useState } from 'react';
import Icons from "../Icons/Icons"


class Login extends React.Component {
  // state and methods for handling login would go here

  // Css
  render() {
    const formStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh' // for centering vertically in the viewport
    };

    const inputStyle = {
      margin: '10px 0',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '200px' // or as required
    };

    const buttonStyle = {
      margin: '10px 0',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '20px', // adjust as needed
      backgroundColor: '#FFA07A', // the button color you want
      color: 'white',
      cursor: 'pointer'
    };

    return (
      <div style={formStyle}>
        <div style={{ margin: '20px' }}>
          <h2>UAC Learning</h2>
        </div>
        <input
          style={inputStyle}
          type="text"
          placeholder="Usuario"
          // onChange, value, etc.
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Contraseña"
          // onChange, value, etc.
        />
        <label>
          <input
            type="checkbox"
            // checked, onChange, etc.
          />
          recordarme
        </label>
        <button style={buttonStyle} type="submit">
          INICIAR SESIÓN
        </button>
      </div>
    );
  }
}

export default Login;