//Importamos los compoentnes de react
import { Link } from "react-scroll";

//Importamos el contexto del idioma
// import { useIdioma } from '../../Contexts/IdiomaContext';

//Importamos los compoententes
import SelectorIdioma from '../../components/Navbar/SelectorIdioma';

import useScrollPositionY from '../../Hooks/useScrollPositionY';

const NavbarMobile = () => {

    const scrollY = useScrollPositionY(); //Obtenemos el scrol vertical
    //   const { idioma } = useIdioma(); // Obtén el idioma desde el contexto


    return (
        <>
            <header className={`navbar ${scrollY > 100 ? 'navbar__scrolled' : ''}`}>
                <div className="navbar__logo">
                    <Link to="home" spy={true} smooth={true} duration={1000}>
                        <img src="/assets/Logo/Logo_Transparent.png" alt="Logo" />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default NavbarMobile
