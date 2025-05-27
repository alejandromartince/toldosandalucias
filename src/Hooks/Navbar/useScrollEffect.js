import { useEffect } from 'react';

export const useScrollEffect = (secciones, setActiveSection) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 70;

      for (let i = 0; i < secciones.length; i++) {
        const { id } = secciones[i];
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            // Si estás en "historia", también se considera como "home"
            if (id === 'historia') {
              setActiveSection('home');
            } else {
              setActiveSection(id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecuta una vez al montar

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [secciones, setActiveSection]);
};
