import { useState } from "react";
import { Link } from "react-scroll";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los iconos
import { FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

//Importamos los estilos
import './FooterMobile.css'

const FooterMobile = () => {

  const { idioma } = useIdioma();
  const informacion = infoFooter;

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="fm-footer-seccion">
      <div className="fm-info-container">

        {/* POLÍTICAS */}
        <div className="fm-info-politicas">
          <div className="fm-info-politicas-titulo fm-desplegable-titulo" onClick={() => toggleSection("politicas")}>
            <h2>{informacion[idioma].titulos.politica}</h2>
          </div>
          <span><hr /></span>
          <div className="fm-info-politicas-opciones">
            <a href="/Privacidad" target="_blank">{informacion[idioma].politica.privacidad}</a>
            <p>{informacion[idioma].politica.cookies}</p>
            <p>{informacion[idioma].politica.avisos}</p>
          </div>
        </div>

        {/* AYUDA */}
        <div className="fm-info-ayuda">
          <div className="fm-info-ayuda-titulo fm-desplegable-titulo" onClick={() => toggleSection("ayuda")}>
            <h2>{informacion[idioma].titulos.ayuda}</h2>
          </div>
          <span><hr /></span>
          <div className="fm-info-ayuda-parrafos">
            <div>
              <a
                href="https://wa.me/34679847618"
                target="_blank"
                rel="noopener noreferrer"
                className="fmenlace-footer-whatsapp"
              >
                <p style={{ textShadow: "none" }}>{informacion[idioma].ayuda}</p>
                <FaWhatsapp size={25} />
              </a>
            </div>
            <p style={{ textShadow: "none" }}>{informacion[idioma].telefono}</p>
          </div>
        </div>

        {/* REDES */}
        <div className="fm-info-redes">
          <div className="fm-info-redes-titulo">
            <h2>{informacion[idioma].titulos.redes}</h2>
          </div>
          <span><hr /></span>
          <div className="fm-iconos-redes">
            <a href="https://www.facebook.com/..." target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} className="fm-icono-footer" color="white" />
            </a>
            <a href="tiktok://user/@toldos.andalucia" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={30} className="fm-icono-footer" color="white" />
            </a>
            <a href="instagram://user?username=toldosandalucia" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} className="fm-icono-footer" color="white" />
            </a>
          </div>
        </div>
      </div>

      <div className="fm-copyright">
        <p>
          © {new Date().getFullYear()} Toldos Andalucía - {informacion[idioma].copy}
        </p>
      </div>
    </div>
  );

};

export default FooterMobile
