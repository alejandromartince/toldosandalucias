import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

// Importamos los componentes
import CanvasLoader from "../components/Objetos 3D/CanvasLoader";

const ToldosProductos = ({ producto }) => {


  return (
    <div className="model-proyecto-container">
      <Canvas className="model-productos" shadows style={{ width: "100%" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={1} />
        <directionalLight
          position={[0, 10, 2]}
          intensity={2}
          shadow-mapSize={[2048, 2048]}
          castShadow
        />
        <Suspense fallback={<CanvasLoader />}>
          {producto}
        </Suspense>
        <OrbitControls
          enablePan={false}
          autoRotate
          rotateSpeed={0.5}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
};

export default ToldosProductos;
