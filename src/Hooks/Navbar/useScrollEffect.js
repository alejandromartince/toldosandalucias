// useScrollEffect.js
import { useEffect } from 'react';
import { useHandleScroll } from './useHandleScroll';

export const useScrollEffect = (secciones, setActiveSection) => {
  useEffect(() => {
    const handleScrollEvent = () => {
      useHandleScroll(secciones, setActiveSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [secciones, setActiveSection]);
};
