
import './search.css'
import React, { useState } from 'react';
  // Asegúrate de tener este archivo en tu proyecto

function SearchBar() {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="search-container">
            <div className="input-with-icon">
                <input className='input-search'
                    type="text"
                    placeholder="Buscar..."
                    value={input}
                    onChange={handleInputChange}
                />
                <i className="search-icon">&#128269;</i> {/* Ícono de lupa usando Unicode */}
            </div>
            <p>{input}</p>
        </div>
    );
}

export default SearchBar;
