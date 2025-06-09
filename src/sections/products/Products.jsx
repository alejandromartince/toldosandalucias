import { useState } from "react";

// Importamos la informacion
import { infoProductos } from "../../constants/infoProductos";

// Importamos los componentes
import ToldosProductos from "../../EscenasObjetos/ToldosProductos";
import BotonProductos from "../../components/Botones/BotonProductos";
import BotonInterrogacion from "../../components/Botones/BotonInterrogacion";
import PersonalizarToldos from "../PersonalizarToldos/PersonalizarToldos";

//Importamos los iconos
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Importamos los contextos
import { useIdioma } from "../../contexts/IdiomaContext";

// Estilos
import "./Products.css";

const Products = () => {
  const { idioma } = useIdioma();
  const [currentProductIndex, setCurrentProductIndex] = useState(0); //Asignamos el valor del producto
  const [mostrarPopup, setMostrarPopup] = useState(false); // Nuevo estado para mostrar el popup


  const productos = infoProductos; //Cogemos la informacion de los productos
  const productoActual = productos[currentProductIndex]; //Asignamos el valor del producto actual

  //Funcion para elegir el siguiente objeto
  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === productos.length - 1 ? 0 : prevIndex + 1
    );
  };

  //Funciona para elegir el anterior objeto
  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? productos.length - 1 : prevIndex - 1
    );
  };

  //Informacion del titulo cambiando el idioma
  const tituloProducto = {
    es: "Nuestros productos",
    en: "Our products",
  };

  return (
    <section className="seccion-productos" id="products">
      {/* CONTENEDOR SUPERIOR - Ocupa toda la pantalla */}
      <div className="contenedor-superior-productos">
        {/* IZQUIERDA: OBJETO 3D + NAVEGACIÓN */}
        <div className="contenedor-izquierda">
          <ToldosProductos
            producto={
              <productoActual.producto
                scale={productoActual.escala}
                position={productoActual.position}
                rotation={productoActual.rotation || [0, 0, 0]}
              />
            }
          />
          <div className="contenedor-navegacion-productos">
            <IoIosArrowBack
              onClick={prevProduct}
              className="icono-productos"
            />
            <IoIosArrowForward
              onClick={nextProduct}
              className="icono-productos"
            />
          </div>
        </div>

        {/* DERECHA: TEXTO Y BOTÓN DE INFO */}
        <div className="contenedor-derecha">
          <div>
            <h1>{tituloProducto[idioma]}</h1>
            <hr className="hr-productos" />
            <div className="text-productos">
              <h3>{productoActual.titulo[idioma]}</h3>
              <p>{productoActual.descripcion[idioma]}</p>
            </div>
          </div>
          <div className="boton-derecha-prueba">
            <BotonInterrogacion mensaje={productoActual.copy} />
          </div>
        </div>
      </div>

      {/* BOTÓN FIJO EN LA PARTE INFERIOR (30% de altura visible) */}
      <div className="contenedor-botones-prueba">
        <div className="boton-centro-prueba">
          <BotonProductos onAbrir={() => setMostrarPopup(true)} />
        </div>
      </div>

      {/* POPUP DE PERSONALIZACIÓN */}
      {mostrarPopup && (
        <PersonalizarToldos onCerrar={() => setMostrarPopup(false)} />
      )}
    </section>
  );
}

export default Products;
