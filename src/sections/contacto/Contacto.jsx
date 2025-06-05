//Importamos los componentes
import Mapa from "../../components/Contacto/Mapa";

//Importamos los iconos
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

//Importamos la informacion
import { infoContacto } from "../../constants/infoContacto";

//Importamos los contextos
import { useIdioma } from "../../Contexts/IdiomaContext";

//Importamos los estilos
import "./Contacto.css";

const Contacto = () => {
  const { idioma } = useIdioma();
  const informacion = infoContacto;

  return (
    <section className="contacto-section" id="contacto">
      <div className="contacto-grid-container">
        <div className="contacto-grid-izquierda">
          <h1>
            {informacion[idioma].titulo}
            <span>.</span>
          </h1>
          <div className="contacto-grid-izquierda-info">
            <hr className="hr-vertical" />
            <div>
              <br />
              <p className="footer-indicacion">{informacion[idioma].direccion}</p>
              <p>c/ Santo Tomás nº 19. Pol. ind. La Leala</p>
              <p>Arroyo de la Miel, Benalmadena, 29631</p>
              <br />

              <p className="footer-indicacion">{informacion[idioma].contacto}</p>
              <div className="telefono-contacto">
                <FaPhone />
                <p>952 562 668</p>
              </div>

              <div className="email-contacto">
                <MdEmail />
                <p>info@toldosandalucia.com</p>
              </div>
              <br />
              <Mapa />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="contacto-grid-derecha">
          <div className="container">
            <form className="form">
              <p className="title">{informacion[idioma].tituloForm}</p>
              <div className="input-container-usuario-telefono">
                <input
                  placeholder={informacion[idioma].placeholderUsuario}
                  className="input"
                  type="text"
                  required
                />
                <input
                  placeholder={informacion[idioma].placeholderTelefono}
                  className="input"
                  type="text"
                  required
                />
              </div>

              <input
                placeholder={informacion[idioma].placeholderEmail}
                className="input email"
                type="email"
                required
              />

              <input type="text-area" className="input area" placeholder="Message" />

              <button className="btn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
