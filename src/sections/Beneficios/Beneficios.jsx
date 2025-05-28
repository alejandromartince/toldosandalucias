// Importamos los estilos
import './Beneficios.css'
import { useState } from 'react'

const datos = [
  {
    titulo: 'Neocolonial',
    info: 'Estilo tradicional con detalles clásicos y patios interiores.',
    imagen: '/assets/SliderInterseccion/Slider-1.jpg',
  },
  {
    titulo: 'Racionalista',
    info: 'Líneas rectas, minimalismo y funcionalidad moderna.',
    imagen: '/assets/SliderInterseccion/Slider-2.jpg',
  },
  {
    titulo: 'Contemporánea',
    info: 'Diseño moderno, materiales innovadores y espacios abiertos.',
    imagen: '/assets/SliderInterseccion/Slider-5.jpg',
  },
]

const Beneficios = () => {
  const [activa, setActiva] = useState(null)

  const manejarClick = (index) => {
    setActiva(index === activa ? null : index)
  }

  return (
    <section className='beneficios' id='beneficios'>
      <div className='encabezado'>
        <h2>BENEFICIOS</h2>
        <p>Descubre las ventajas de trabajar con nosotros: diseño, calidad y atención personalizada.</p>
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
              <h3>{columna.titulo}</h3>
              <div className='info-extra'>{columna.info}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Beneficios
