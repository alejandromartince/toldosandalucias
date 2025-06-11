//Importamos los hooks
import { Link } from "react-scroll";

//Importamos la informacion
import { infoFooter } from "../../constants/infoFooter";

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos los iconos
import { FaTiktok, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

//Importamos los estilos
import './FooterDefault.css'

const FooterDefault = () => {

    const { idioma } = useIdioma();
    const informacion = infoFooter;
    return (
        <div className="footer-seccion">
            <div className="info-container">
                <div className="info-politicas">
                    <div className="info-politicas-titulo">
                        <h2>{informacion[idioma].titulos.politica}</h2>
                        <span>
                            <hr />
                        </span>
                    </div>
                    <div className="info-politicas-opciones">
                        <a href="/Privacidad" target="_blank">{informacion[idioma].politica.privacidad}</a>
                        <p>{informacion[idioma].politica.cookies}</p>
                        <p>{informacion[idioma].politica.avisos}</p>
                    </div>
                </div>
                <div className="info-ayuda">
                    <div className="info-ayuda-titulo">
                        <h2>{informacion[idioma].titulos.ayuda}</h2>
                        <span>
                            <hr />
                        </span>
                    </div>
                    <div className="info-ayuda-parrafos">
                        <div>
                            <a
                                href="https://web.whatsapp.com/send?phone=34679847618&text="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p style={{ textShadow: "none" }}>{informacion[idioma].ayuda} </p>
                                <FaWhatsapp size={25} />
                            </a>
                        </div>
                        <p style={{ textShadow: "none" }}>{informacion[idioma].telefono}</p>
                        <div className="espaciador"></div>
                    </div>
                </div>
                <div className="info-redes">
                    <div className="info-redes-titulo">
                        <h2>{informacion[idioma].titulos.redes}</h2>
                        <span>
                            <hr />
                        </span>
                    </div>
                    <div className="iconos-redes">
                        <a
                            href="https://m.facebook.com/profile.php?id=100069359261072"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF size={25} className="icono-footer" color="white" />
                        </a>

                        <a
                            href="https://www.tiktok.com/@toldos.andalucia"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTiktok size={25} className="icono-footer" color="white" />
                        </a>

                        <a
                            href="https://www.instagram.com/toldosandalucia/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram size={25} className="icono-footer" color="white" />
                        </a>
                    </div>
                </div>
                <div className="logo">
                    <Link to="home" smooth="true">
                        <img
                            src="/assets/Logo/Logo_Transparent.png"
                            alt="Logo de la empresa"
                            style={{ cursor: "Pointer" }}
                        />
                    </Link>
                </div>
            </div>

            <div className="copyright">
                <p>
                    © {new Date().getFullYear()} Toldos Andalucía -&nbsp;
                    {informacion[idioma].copy}
                </p>
            </div>
        </div>
    );
}

export default FooterDefault
