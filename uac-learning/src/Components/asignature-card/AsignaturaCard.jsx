import './asigatura-card.css'
const AsignaturaCard = ({ asignatura, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        <img src={asignatura.imagen} alt={asignatura.nombre} className="card-img" />
        <div className="card-body">
          <h5 className="card-title">{asignatura.nombre}</h5>
          <p className="card-text">{asignatura.descripcion}</p>
        </div>
      </div>
    );
  };
  
export default AsignaturaCard;