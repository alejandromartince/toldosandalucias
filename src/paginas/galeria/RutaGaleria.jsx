//Importamos los componentes
import Footer from '../../sections/footer/Footer'
import Galeria from '../../sections/galeria/Galeria';
import Navbar from '../../sections/Navbar/Navbar'

//Importamos el estilo
import '../../sections/galeria/Galeria.css'

const RutaGaleria = () => {

  const pagina = "galeria";
  return (
    <>
      <Navbar pagina={pagina} />
      <Galeria />
      <div className='footerGaleria'>
        <Footer />
      </div>
    </>
  )
}

export default RutaGaleria
