//Importamos los hooks de React
import { useState } from 'react';
import { Link } from "react-scroll";

//Importamos el hook personalizado para manejar el scroll
import { useScrollEffect } from '../../Hooks/Navbar/useScrollEffect'
import useScrollPositionY from '../../Hooks/useScrollPositionY';

//Importamos la info
import { secciones } from '../../constants/infoNavbar';

//Importamos el contexto del idioma
import { useIdioma } from "../../Contexts/IdiomaContext";

//Importamos los compoententes
import SelectorIdioma from '../../components/Navbar/SelectorIdioma';

//Importamos los estilos
import './Navbar.css';

const Navbar = () => {
  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto
  const [activeSection, setActiveSection] = useState('home'); // Estado para la sección activa

  // Actualizamos el idioma actual cuando cambia el contexto
  useScrollEffect(secciones, setActiveSection); // Hook para manejar el scroll
  const scrollY = useScrollPositionY();

  const scrollYProgress = (() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    return docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  })();

  return (
    <header className={`navbar ${scrollY > 100 ? 'navbar__scrolled' : ''}`}>
      
      <div className="navbar__logo">
        <Link to="home" spy={true} smooth={true} duration={1000}>
          <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
        </Link>
      </div>

      <nav className="navbar__nav">
        {secciones.filter(({ id }) => id !== 'historia' && id !== 'beneficios')
          .map(({ id, texto, offset }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={800}
              offset={offset}
              className={`nav_link ${activeSection === id ? "active_link" : ""}`}>
              {texto[idioma]}
            </Link>
          ))}
      </nav>

      <div className="navbar_selector">
        <SelectorIdioma />
      </div>
      <div className="navbar__progress-bar" style={{ width: `${scrollYProgress}%` }}></div>
    </header>
  );
};

export default Navbar;
