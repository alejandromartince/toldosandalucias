// Importamos las constantes
import { textoHome } from "../../constants/infoHome";

//Importamos los componentes
import BotonLinea from "../../components/Botones/BotonLinea";

//Importamos los hooks
import useTipoDispositivo from "../../Hooks/useTipoDispositivo";

//Importamos el contexto del idioma
import { useIdioma } from "../../Contexts/IdiomaContext";

// Estilos
import "./Home.css";

const Home = () => {
  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto
  const tipoDispositivo = useTipoDispositivo(); // Hook para detectar el tipo de dispositivo

  return (
    <section className="home" id="home">
      <div className="home-container">

        {tipoDispositivo == "movil" && (
          <div className="home-right-container-mobile">
            <img src="/assets/Logo/Logo.png" alt="logo-movil" />
          </div>
        )}
        
        <div className="home-left-container">
          <div>
            <h1>{textoHome.titulo[idioma]}</h1>
          </div>
          <div>
            <p>{textoHome.parrafo[idioma]}</p>
          </div>

          <div className="boton-container">
            <BotonLinea
              idioma={idioma}
              id="Home" // Pasa un id único si es necesario
              className="boton-linea" // Puedes agregar una clase personalizada si lo necesitas
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
