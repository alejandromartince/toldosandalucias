//Importamos los hooks de React
import { useState } from 'react';
import { Link } from "react-scroll";

//Importamos el hook personalizado para manejar el scroll
import { useScrollEffect } from '../../Hooks/Navbar/useScrollEffect'

//Importamos la info
import { idiomas, secciones } from '../../constants/infoNavbar';

// import SelectorIdiomas from './SelectorIdiomas';
import SelectorIdiomas from '../../Components/Navbar/SelectorIdiomas';

//Importamos el contexto de idioma
import { useIdioma } from '../../Contexts/IdiomaContext';

//Importamos los estilos
import './Navbar.css';

const Navbar = () => {
  const idioma = useIdioma();
  const [idiomaActual, setIdiomaActual] = useState('es');
  const [activeSection, setActiveSection] = useState('home'); // Estado para la sección activa


  // Actualizamos el idioma actual cuando cambia el contexto
  useScrollEffect(secciones, setActiveSection); // Hook para manejar el scroll

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="home" spy={true} smooth={true} duration={1000}>
          <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
        </Link>
      </div>

      <nav className="navbar__nav">
        {secciones.filter(({ id }) => id !== 'historia')
          .map(({ id, texto, offset }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={800}
              offset={offset}
              className={`nav_link ${activeSection === id ? "active_link" : ""
                }`}          >
              {texto[idiomaActual]}
            </Link>
          ))}
      </nav>

      <div className="navbar__selector">
      </div>
    </header>
  );
};

export default Navbar;
