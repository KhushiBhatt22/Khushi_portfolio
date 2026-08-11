import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const FallbackModel = ({ model }) => (
  <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
    <group scale={model.scale} rotation={model.rotation}>
      <mesh>
        <boxGeometry args={[1.2, 1.2, 0.2]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.16]}>
        <circleGeometry args={[0.55, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#60a5fa"
          emissiveIntensity={0.35}
        />
      </mesh>
    </group>
  </Float>
);

const TechIconCardExperience = ({ model }) => {
  const [gltf, setGltf] = useState(null);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loader = new GLTFLoader();

    loader.load(
      model.modelPath,
      (loadedModel) => {
        if (isMounted) {
          setGltf(loadedModel);
          setHasLoadError(false);
        }
      },
      undefined,
      () => {
        if (isMounted) {
          setHasLoadError(true);
          setGltf(null);
        }
      }
    );

    return () => {
      isMounted = false;
    };
  }, [model.modelPath]);

  useEffect(() => {
    if (model.name === "Interactive Developer" && gltf?.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [gltf, model.name]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      {gltf && !hasLoadError ? (
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group scale={model.scale} rotation={model.rotation}>
            <primitive object={gltf.scene} />
          </group>
        </Float>
      ) : (
        <FallbackModel model={model} />
      )}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
