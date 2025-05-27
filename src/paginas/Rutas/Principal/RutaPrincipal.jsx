//Importamos las secciones principales
import Navbar from "../../../sections/navbar/Navbar";
import Home from "../../../sections/home/Home";
import Products from "../../../sections/Products/Products";
import Historia from "../../../sections/Historia/Historia";
import NuestrosTrabajos from "../../../sections/nuestrosTrabajos/nuestrosTrabajos";
import Contacto from "../../../sections/Contacto/Contacto";
import Footer from "../../../sections/Footer/Footer";

//Importamos los hooks
import PantallaCarga from "../../../components/PantallaCarga";

//Importamos los estilos
import './RutaPrincipal.css'

// Componente que gestiona la ruta principal con lógica de carga
const RutaPrincipal = ({ cargando }) => {
  if (cargando) return <PantallaCarga />;

  return (
    <>
      <Navbar />
      <Home />
      
      <div className="pagina-principal">
        <Historia />
        <NuestrosTrabajos />
        <Products />
        <Contacto />
        <Footer />
      </div>
    </>
  );
};

export default RutaPrincipal