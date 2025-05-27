import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Importamos las paginas
import RutaPrincipal from "./paginas/Rutas/Principal/RutaPrincipal";
import RutaPersonalizarToldos from "./paginas/Rutas/PersonalizarToldos/RutaPersonalizarToldos";

// Contexto
import { IdiomaProvider } from "./Contexts/IdiomaContext";
import { useProgress } from "@react-three/drei";


const App = () => {
  const [cargando, setCargando] = useState(true);
  const { progress } = useProgress();


  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setCargando(false), 0);
    }
  }, [progress]);

  return (
    <IdiomaProvider>
      <Router>
          <Routes>
            <Route path="/" element={<RutaPrincipal cargando={cargando} />} />
            <Route path="/PersonalizarToldos" element={<RutaPersonalizarToldos />} />
          </Routes>
      </Router>
    </IdiomaProvider>
  );
};

export default App;
