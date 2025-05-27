import '../ComponentsStyles/SelectorIdiomas.css';

const SelectorIdiomas = ({ idiomaActual, setIdiomaActual }) => {
  const idiomas = [
    { code: 'es', src: '/assets/Banderas/Espanol.png', alt: 'Español' },
    { code: 'en', src: '/assets/Banderas/Ingles.png', alt: 'Inglés' },
  ];

  const handleChange = (code) => {
    setIdiomaActual(code);
  };

  return (
    <div className="selector-idiomas">
      {idiomas.map((idioma) => (
        <img
          key={idioma.code}
          src={idioma.src}
          alt={idioma.alt}
          className={`bandera ${idiomaActual === idioma.code ? 'activa' : ''}`}
          onClick={() => handleChange(idioma.code)}
        />
      ))}
    </div>
  );
};

export default SelectorIdiomas;
