//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos la informacion
import { informacionBoton } from "../../constants/infoBotones";

//Importamos el estilo
import "./BotonProductos.css";

const BotonProductos = ({ onAbrir }) => {
  const { idioma } = useIdioma();
  const titulo = informacionBoton(idioma, "Productos");

  return (
    <button onClick={onAbrir} className="boton-producto">
      &gt;&gt;&nbsp;
      {titulo?.texto}
    </button>
  );
};

export default BotonProductos;
