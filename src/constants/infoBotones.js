import useTipoDispositivo from "../Hooks/useTipoDispositivo";

const useInformacionBoton = (idioma, id) => {
  const dispositivo = useTipoDispositivo();

  const botones = [
    {
      id: "Home",
      texto: {
        es: "Realizar un presupuesto",
        en: "Make a quote",
      },
      url:
        dispositivo !== "movil"
          ? "https://web.whatsapp.com/send?phone=34679847618&text="
          : "https://wa.me/34679847618",
    },
    {
      id: "Historia",
      texto: {
        es: "Ver Productos",
        en: "See Products",
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
      url: "/PersonalizarToldos",
    },
    {
      id: "Beneficios",
      texto: {
        es: "MÁS INFORMACIÓN",
        en: "MORE INFORMATION",
      },
      subtexto: {
        es: "SIN COMPROMISO",
        en: "NO STRING ATTACHED",
      },
      url: "https://web.whatsapp.com/send?phone=34679847618&text=",
    },
  ];

  const boton = botones.find((b) => b.id === id);

  return boton
    ? {
        id: boton.id,
        texto: boton.texto[idioma] || boton.texto.es,
        url: boton.url,
        offset: boton.offset || 0,
      }
    : null;
};

export default useInformacionBoton;
