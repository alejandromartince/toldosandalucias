export const informacionBoton = (idioma, id) => {
  const botones = [
    {
      id: "Home",
      texto: {
        es: "Realizar un presupuesto",
        en: "Make a quote",
      },
      url: "https://web.whatsapp.com/send?phone=34679847618&text=",
    },
    {
      id: "Historia",
      texto: {
        es: "Ver Productos",
        en: "See Porducts",
      },
      url: "products",
      offset: -20,
    },
    {
      id: "Productos",
      texto: {
        es: "Personaliza tu toldo",
        en: "Customize your awning",
      },
      url: "/PersonalizarToldos", // Asegúrate de que la URL sea correcta
    },
    {
      id: "Beneficios", // Nuevo botón agregado
      texto: {
        es: "MÁS INFORMACIÓN", // Texto en español
        en: "MORE INFORMATION", // Texto en inglés
      },
      subtexto: {
        es: "SIN COMPROMISO",
        en: "NO STRING ATTACHED"
      },
      url: "https://web.whatsapp.com/send?phone=34679847618&text=", // URL de la nueva sección
    },


  ];
  // Encuentra el botón con el ID dado
  const boton = botones.find((boton) => boton.id === id);

  // Si el botón existe, devuelve el texto en el idioma seleccionado
  return boton
    ? {
      id: boton.id,
      texto: boton.texto[idioma] || boton.texto.es,
      url: boton.url,
      offset: boton.offset || 0,
    }
    : null;
};
