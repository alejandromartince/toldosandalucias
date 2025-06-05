import React, { useState } from "react";
import "./Popup.css"; // Importamos los estilos

const Popup = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(true)} className="boton-popup">
        Ver más
      </button>

      <div className={`popup-overlay ${mostrar ? "mostrar" : ""}`}>
        <div className="popup-contenido">
          <button onClick={() => setMostrar(false)} className="cerrar-boton">X</button>
          <h2>¡Hola!</h2>
          <p>Este es un popup suave con transición ✨</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
