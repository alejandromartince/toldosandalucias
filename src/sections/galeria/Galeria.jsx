//Importamos los hooks de react
import { useState } from 'react';

//Importamos la información
import { imagesNuestrosTrabajos } from '../../constants/infoNuestrosTrabajos'

//Importamos los hooks personales
import useTipoDipositivo from "../../Hooks/useTipoDispositivo"

//Importamos los componentes
import CarruselGaleria from '../../components/Galeria/CarruselGaleria';

//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext";

//Importamos el estilo
import './Galeria.css'

const Galeria = () => {

    const dispositivo = useTipoDipositivo();
    const [indiceActual, setIndiceActual] = useState(0);
    const { idioma } = useIdioma(); // o "en", según lo que uses con i18n

    const imagenActual = imagesNuestrosTrabajos[indiceActual];

    return (

        <section className='galeria-section'>
            <div className='backgroundTopGaleria'>
                <div className='contenidoGaleria'>
                    <h2>{imagenActual.titulo[idioma]}</h2>
                    <p>
                        {idioma === 'es' ? (
                            <>
                                Para más información, contacte con nosotros <a href={dispositivo !== 'movil' ? "https://web.whatsapp.com/send?phone=34679847618&text=" : "https://wa.me/34679847618"} target='_blank'><u>aquí</u></a>
                            </>
                        ) : (
                            <>
                                For more information, contact us <a href={dispositivo !== 'movil' ? "https://web.whatsapp.com/send?phone=34679847618&text=" : "https://wa.me/34679847618"}><u>here</u></a>
                            </>
                        )}
                    </p>
                </div>
            </div>

                <div className='carrusel-galeria-container'>
                    <CarruselGaleria trabajos={imagesNuestrosTrabajos} setIndiceActual={setIndiceActual} />
                </div>
        </section>
    );
};

export default Galeria
