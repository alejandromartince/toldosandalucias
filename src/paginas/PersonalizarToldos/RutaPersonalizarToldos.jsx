//Importamos las secciones principales
import Footer from "../../sections/footer/Footer"
import PersonalizarToldos from "../../sections/PersonalizarToldos/PersonalizarToldos"

//Importamos los estilos
import './RutaPersonalizarToldos.css' 

// Componente que gestiona la ruta principal con lógica de carga
const RutaPersonalizarToldos = () => {

  return (
    <div className="pagina-personalizarToldos">
      <PersonalizarToldos />
      <Footer/>
    </div>
  );
};

export default RutaPersonalizarToldos