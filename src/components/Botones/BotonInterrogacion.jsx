import "./BotonInterrogacion.css";

const BotonInterrogacion = ({ mensaje }) => {
  return (
    <div className="tooltip-container">
      <button className="boton-interrogacion">?</button>
      <div className="tooltip-mensaje">{mensaje}</div>
    </div>
  );
};

export default BotonInterrogacion;
