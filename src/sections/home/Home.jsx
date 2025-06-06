// Importamos las constantes
import { textoHome } from "../../constants/infoHome";

//Importamos los componentes
import BotonLinea from "../../components/Botones/BotonLinea";

//Importamos los hooks personalizados
import  useTipoDispositivo from "../../Hooks/useTipoDispositivo"

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

// Estilos
import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto
  const dispositivo = useTipoDispositivo();


  return (
    <section className="home" id="home">
      <div className="contenedor-home">
        <div className="contenido-home">
          <h1>{textoHome.titulo[idioma]}</h1>
          <p>{textoHome.parrafo[idioma]}</p>
        </div>

        {dispositivo !== 'movil' && (
          <div className="boton-container">
            <BotonLinea
              idioma={idioma}
              id="Home" // Pasa un id único si es necesario
              className="boton-linea" // Puedes agregar una clase personalizada si lo necesitas
            />
          </div>)}
      </div>
    </section>
  );
};

export default Home;
