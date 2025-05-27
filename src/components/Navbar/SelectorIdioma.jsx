import { useState } from "react";

//Importamos el hook del idioma
import { useIdioma } from "../../Contexts/IdiomaContext";

//Importamos los idiomas
import { idiomas } from "../../constants/infoNavbar";

//Importamos los estilos
import "../ComponentsStyles/SelectorIdioma.css";

const SelectorIdioma = () => {
  const { idioma, cambiarIdioma } = useIdioma();
  const [desplegado, setDesplegado] = useState(false);

  const toggleMenu = () => setDesplegado(!desplegado);
  const seleccionarIdioma = (codigo) => {
    cambiarIdioma(codigo);
    setDesplegado(false);
  };

  return (
    <div className="selector-idioma-dropdown">
      <button className="boton-idioma-actual" onClick={toggleMenu}>
        <img src={idiomas[idioma]} alt={idioma} width={30} height={20} />
        <span className="flecha">{desplegado ? "▲" : "▼"}</span>
      </button>

      {desplegado && (
        <div className="menu-idiomas">
          {Object.entries(idiomas).map(([codigo, ruta]) => (
            <button
              key={codigo}
              onClick={() => seleccionarIdioma(codigo)}
              className={`idioma-opcion ${idioma === codigo ? "activo" : ""
                }`}
            >
              <img src={ruta} alt={codigo} width={30} height={20} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectorIdioma;
