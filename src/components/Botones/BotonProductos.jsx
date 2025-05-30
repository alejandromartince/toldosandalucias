// Importamos el contexto del idioma
import { useIdioma } from "../../Contexts/IdiomaContext";

// Importamos la información
import { informacionBoton } from "../../constants/infoBotones";

// Importamos los estilos
import "./BotonProductos.css";

const BotonProductos = () => {
  const { idioma } = useIdioma();

  // Usamos el ID "Productos" para obtener el botón correspondiente
  const titulo = informacionBoton(idioma, "Productos");

  return (
    <button>&gt;&gt;&nbsp;
      {titulo?.texto}
      
    </button>
  );
};

export default BotonProductos;
