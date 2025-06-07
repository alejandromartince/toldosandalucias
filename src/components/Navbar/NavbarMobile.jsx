//Importamos los compoentnes de react
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

//Importamos el hook personalizado para manejar el scroll
import { useScrollEffect } from '../../Hooks/Navbar/useScrollEffect'

//Importamos los compoententes
import SelectorIdioma from '../../components/Navbar/SelectorIdioma';
import BotonLinea from "../Botones/BotonLinea";

//Importamos la info
import { secciones } from '../../constants/infoNavbar';

//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

import './NavbarMobile.css'

const NavbarMobile = () => {

  const { idioma } = useIdioma(); // Obtén el idioma desde el contexto
  const [activeSection, setActiveSection] = useState('home'); // Estado para la sección activa
  useScrollEffect(secciones, setActiveSection); // Hook para manejar el scroll
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      html.classList.add('no-scroll');
      body.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
    }

    return () => {
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
    };
  }, [menuOpen]);


  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className='navbar navbar__scrolled'>
        {/* Logo */}
        <div className="navbar__logo">
          <Link to="home" spy={true} smooth={true} duration={1000}>
            <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
          </Link>
        </div>

        {/* Selector de idioma + Botón hamburguesa (solo visible si el menú está cerrado) */}
        <div className="menu-parteDerecha">
          <div className="navbar_selector">
            <SelectorIdioma />
          </div>

          <button
            className={`menu-toggle hamburger-btn ${menuOpen ? 'fade-out' : 'fade-in'}`}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>

        </div>

        {/* Menú desplegable desde la izquierda */}
        <div className={`menu-desplegable-navbar ${menuOpen ? 'open' : ''}`}>

          <div className="contenedorNavMobile">

            {/* Navegación */}
            <nav className="navbar__navColumna">

              {/* BOTÓN "X" dentro del menú desplegable (solo si está abierto) */}
              {menuOpen && (
                <button className={`menu-toggle open close-btn`} onClick={toggleMenu}>
                  <span></span><span></span><span></span>
                </button>
              )}
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
                    onClick={closeMenu}
                  >
                    {texto[idioma]}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="contenedor-boton-menu-desplegado">
            <a href="https://wa.me/34679847618">{idioma === 'es' ? "REALIZA TU PRESUPUESTO AQUÍ" : "GET YOUR QUOTE HERE"}</a>
          </div>
        </div>

      </header>
    </>
  );
}

export default NavbarMobile
