//Importamos los compoentnes de react
import { Link } from "react-scroll";
import { useState } from "react";

//Importamos los compoententes
import SelectorIdioma from '../../components/Navbar/SelectorIdioma';

//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

//Importamos el hook personalizado para manejar el scroll
import { useScrollEffect } from '../../Hooks/Navbar/useScrollEffect'
import useScrollPositionY from '../../Hooks/useScrollPositionY';

//Importamos la info
import { secciones } from '../../constants/infoNavbar';

//Importamos el estilo
import './NavbarDefault.css'

const NavbarDefault = () => {

  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto
  const [activeSection, setActiveSection] = useState('home'); // Estado para la sección activa
  useScrollEffect(secciones, setActiveSection); // Hook para manejar el scroll
  const scrollY = useScrollPositionY(); //Obtenemos el scrol vertical



  //Scroll para la barra de progreso
  const scrollYProgress = (() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  })();


  return (
    // <header className={`navbar ${scrollY > 100 ? 'navbar__scrolled' : ''}`}>
    <>
      <header className={`navbar ${scrollY > 100 ? 'navbar__scrolled' : ''}`}>
        <div className="navbar__logo">
          <Link to="home" spy={true} smooth={true} duration={1000}>
            <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
          </Link>
        </div>

        <nav className="navbar__nav">
          {secciones
            .filter(({ id }) => id !== 'historia' && id !== 'beneficios')
            .map(({ id, texto, offset }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={800}
                offset={offset}
                className={`nav_link ${activeSection === id ? "active_link" : ""}`}
              >
                {texto[idioma]}
              </Link>
            ))}
        </nav>

        <div className="navbar_selector">
          <SelectorIdioma />
        </div>
        <div className="navbar__progress-bar" style={{ width: `${scrollYProgress}%` }}></div>

      </header>
    </>
  )
};

export default NavbarDefault
