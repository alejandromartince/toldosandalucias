import React, { useState } from "react";

// Importamos los contextos
import { useIdioma } from "../../Contexts/IdiomaContext";

// Importamos la informacion
import { Productos } from "../../constants/infoProductos"; // Aquí importamos ambos correctamente

// Importamos los componentes
import ToldosProductos from "../../EscenasObjetos/ToldosProductos";
import BotonProductos from "../../components/Botones/BotonProductos";
import BotonInterrogacion from "../../components/Botones/BotonInterrogacion";

//Importamos los iconos
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Importamos los estilos
import "./Products.css";

const Products = () => {
  const { idioma } = useIdioma();
  const [currentProductIndex, setCurrentProductIndex] = useState(0); // Estado para almacenar el índice del producto actual

  // Array de productos importado desde el archivo
  const productos = Productos;

  // Función para cambiar al siguiente producto
  const nextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === productos.length - 1 ? 0 : prevIndex + 1
    ); // Si llegas al final, vuelve al primero
  };

  // Función para cambiar al producto anterior
  const prevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? productos.length - 1 : prevIndex - 1
    ); // Si llegas al primero, vuelve al último
  };

  // Obtener el producto actual
  const producto = productos[currentProductIndex];

  const tituloProducto = {
    es: "Nuestros productos",
    en: "Our products",
  };

  return (
    <section className="products-container" id="products">
      <div className="main-container">
        <div className="left-container">
          <ToldosProductos
            producto={
              <producto.producto
                scale={producto.escala}
                position={producto.position}
              />
            }
          />
          <div className="product-navigation-container">
            <div className="product-navigation">
              <IoIosArrowBack
                size={30}
                onClick={prevProduct}
                className="icono-productos"
                style={{
                  cursor: "pointer",
                  color: "var(--blanco-texto-navbar)",
                }}
              />
              <IoIosArrowForward
                size={30}
                onClick={nextProduct}
                className="icono-productos"
                style={{
                  cursor: "pointer",
                  color: "var(--blanco-texto-navbar)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="right-container">
          <h1>{tituloProducto[idioma]}</h1>
          <hr className="hr-productos" />
          <div className="titulo-interrogacion">
            <h3>{producto.titulo[idioma]}</h3>
          </div>
          <p>{producto.descripcion[idioma]}</p>
        <BotonInterrogacion
          className="boton-interrogacion"
          mensaje={producto.copy}
        />
        </div>
      </div>

      <div className="boton-container-productos">
        <BotonProductos />
      </div>
    </section>
  );
};

export default Products;
