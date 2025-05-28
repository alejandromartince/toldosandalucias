import { useState } from 'react'

// Importamos la información
import {
  tituloBeneficio,
  subtituloBeneficio,
  textoBeneficio,
} from '../../constants/infoBeneficios'

//Importamos el contexto del idioma
import { useIdioma } from '../../Contexts/IdiomaContext'

// Importamos los estilos
import './Beneficios.css'

const Beneficios = () => {
  const [activa, setActiva] = useState(null)

  // Idioma actual (puedes cambiar esto dinámicamente si tienes un sistema de idiomas)
  const idioma = useIdioma().idioma

  // Convertimos el objeto en array para mapearlo fácilmente
  const datos = Object.values(textoBeneficio[idioma])
  const titulosImagenes = Object.values(textoBeneficio[idioma]).map(
    (item) => item.titulo
  )

  const manejarClick = (index) => {
    setActiva(index === activa ? null : index)
  }

  return (
    <section className='beneficios' id='beneficios'>
      <div className='encabezado'>
        <h1>{tituloBeneficio[idioma]}</h1>
        <p>{subtituloBeneficio[idioma]}</p>
      </div>

      <div className='contenido-cartas'>
        <div className='titulos-imagenes'>
          {titulosImagenes.map((titulo, index) => (
            <h3 key={index} className='titulo-superior'>
              {titulo}
            </h3>
          ))}
        </div>

        <div className='contenedor-beneficios'>
          {datos.map((columna, index) => (
            <div
              key={index}
              className={`columna-beneficio ${activa === index ? 'activa' : ''}`}
              onClick={() => manejarClick(index)}
              style={{
                backgroundImage: `url(${columna.imagen})`,
              }}
            >
              <div className='contenido-beneficio'>
                <div className='info-extra'>{columna.informacion}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Beneficios
