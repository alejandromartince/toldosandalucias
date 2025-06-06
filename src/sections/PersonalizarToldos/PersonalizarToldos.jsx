//Importamos los hooks de react
import { useEffect, useState } from 'react';

//Importamos el contexto del idioma
import { useIdioma } from '../../contexts/IdiomaContext';

//Importamos el estilo de la pagina
import './PersonalizarToldos.css';
import BotonCerrarMenu from '../../components/Botones/BotonCerrarMenu';

const PersonalizarToldos = ({ onCerrar }) => {
  const { idioma } = useIdioma();
  const [cerrando, setCerrando] = useState(false);

  // Cuando termine la animación de salida, desmonta el componente
  useEffect(() => {
    if (cerrando) {
      const timer = setTimeout(() => {
        onCerrar(); // Esto desmonta el popup desde el padre
      }, 400); // Tiempo igual al de la animación de salida
      return () => clearTimeout(timer);
    }
  }, [cerrando, onCerrar]);


  // Bloquear scroll de fondo
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Evitar scroll externo desde dentro del popup
const popup = document.querySelector('.popup-contenido-prueba');
    const handleWheel = (e) => {
      e.preventDefault(); // Bloquea el scroll fuera del popup
    };

    popup?.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      // Restaurar scroll de fondo
      document.body.style.overflow = 'auto';
      popup?.removeEventListener('wheel', handleWheel);
    };
  }, []);


  return (
    <div >
      <div className={`menu-main ${cerrando ? 'salida' : ''}`}>
        <div className={`popup-contenido-prueba ${cerrando ? 'salida' : ''}`}>
          <div className='contenido-PersonalizarToldos-izquierda'>
            <h2>{idioma === "es" ? "Personaliza tu toldo." : "Customize your awning."}</h2>
            <p>{idioma === "es" ? "Aquí podrás personalizar tu producto a medida." : "Here you can customize your product."}</p>
          </div>


          <div className='contenido-PersonalizarToldos-derecha'>
            <BotonCerrarMenu onClick={() => setCerrando(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizarToldos;
