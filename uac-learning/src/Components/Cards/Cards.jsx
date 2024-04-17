import React from 'react';
import AsignaturaCard from "../asignature-card/AsignaturaCard"; // Asegúrate de que la ruta sea correcta
import './card.css'
// Datos de ejemplo para las asignaturas
import { obtenerAsignaturas } from '../../Services/usuarios';

const Cards= () => {
  // Función para manejar el clic en la tarjeta y redirigir al usuario
  const handleCardClick = (id) => {
    // Aquí puedes usar 'useHistory' de 'react-router-dom' o 'window.location'
    window.location.href = `/asignatura/${id}`;
  };

  return (
    <>
      <div className="row">
        {obtenerAsignaturas.map((asignatura) => (
          <div key={asignatura.id} className="col">
            <AsignaturaCard
              asignatura={asignatura}
              onClick={() => handleCardClick(asignatura.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;