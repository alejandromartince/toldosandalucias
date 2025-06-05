//Importamos los hooks de react
import { Link } from "react-router-dom";

// Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

// Importamos la información
import { informacionBoton } from "../../constants/infoBotones";

// Importamos los estilos
import "./BotonProductos.css";

const BotonProductos = () => {
  const { idioma } = useIdioma();

  // Usamos el ID "Productos" para obtener el botón correspondiente
  const titulo = informacionBoton(idioma, "Productos");

  return (
    <Link to="/PersonalizarToldos">
      <button className="boton-producto">
        &gt;&gt;&nbsp;
        {titulo?.texto}
      </button>
    </Link>
  );
};

export default BotonProductos;
