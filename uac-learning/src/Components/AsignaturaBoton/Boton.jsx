import React from 'react';
import PropTypes from 'prop-types';
import './boton.css'; // Asumiendo que tienes un archivo CSS para estilos

const Boton = ({ background, text, iconSrc, className }) => {
  return (
    <div className={`my-button ${className}`} style={{ background }}>
      {iconSrc && <img src={iconSrc} alt="Icon" className="my-button-icon" />}
      <br />
      <p className="my-button-text">{text}</p>
    </div>
  );
};

Boton.propTypes = {
  background: PropTypes.string,
  text: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
  className: PropTypes.string
};

Boton.defaultProps = {
  background: '#ffffff', // Un color de fondo predeterminado
  className: ''
};

export default Boton;