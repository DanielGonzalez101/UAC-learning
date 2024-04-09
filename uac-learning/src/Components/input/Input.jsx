import React from "react";
import './input.css';

const Input = ({ placeholderText, labelText, inputType, variable, setVariable }) => {

  const handleInputChange = (e) => {
    setVariable(e.target.value); // Actualiza el estado en el componente padre
  };

  return (
    <>
      <div>
        <p className="lbl-input">{labelText}</p>
        <input
          onChange={handleInputChange}
          type={inputType}
          placeholder={placeholderText}
          id="input-usuario"
          value={variable} // Controlado por el componente padre
        />
      </div>
    </>
  );
}

export default Input;