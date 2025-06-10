//Importamos el contexto del idioma
import { useIdioma } from "../../contexts/IdiomaContext"

//Importamos la informacion
import { encabezadoBeneficios } from '../../constants/infoBeneficios'

//Importamos los componentes
import Galeria from "../../components/Beneficios/Galeria";

//Importamos los estilos
import './Beneficios.css'

const Beneficios = () => {

  const { idioma } = useIdioma();

  return (
    <section className="beneficios" id="beneficios">
      <div className='encabezado-beneficios'>
        <h1>{encabezadoBeneficios.titulo[idioma]}</h1>
        <p>{encabezadoBeneficios.descripcion[idioma]}</p>
      </div>

      <Galeria />

    </section >
  )
}

export default Beneficios
