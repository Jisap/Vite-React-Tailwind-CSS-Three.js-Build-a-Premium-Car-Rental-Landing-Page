import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Environment, Stage } from "@react-three/drei";
import { Monkey } from "./models/Monkey";


const ModelViewer = () => {

  const [webglSupported, setWebglSupported] = useState(true);

  // Device Support Checking
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        setWebglSupported(false);
      }

    }catch(error){
      setWebglSupported(false);
    }
  },[])

  if(!webglSupported){
    return (
      <div>
        WebGL not supported on this device.
      </div>
    )
  }

  return (
    <Canvas 
      camera={{position:[0.1,0.1,0.2],fov:20}} 
      gl={{
        antialias:true, 
        preserveDrawingBuffer:"high-performance"
      }}
      style={{width:"100%", height:"100%"}}
      onCreated={({gl}) => {
        gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          alert("WebGL Context Lost. Please reload the page.");
        })
      }}  
    >
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          {/* Put any Model on Stage */}
        </Stage>
        {/* ligthing */}
        <Environment preset="city" />
        {/* Controls */}
        <OrbitControls 
          anableZoom={true}
          enablePan={true}
          autoRotate={true}
          autoRotateSpeed={1}
          minDistance={6}
          maxDistance={12}
          maxPolarAngle={Math.PI / 2 -0.1}
        />
      </Suspense>
    </Canvas>
  )
}

export default ModelViewer