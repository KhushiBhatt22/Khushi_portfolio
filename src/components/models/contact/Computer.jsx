import { useEffect, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const FallbackComputer = () => (
  <group>
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1.7, 0.4, 1.4]} />
      <meshStandardMaterial color="#1e293b" />
    </mesh>
    <mesh position={[0, 0.45, 0.1]}>
      <boxGeometry args={[1.4, 0.8, 0.05]} />
      <meshStandardMaterial color="#f8fafc" />
    </mesh>
  </group>
);

export function Computer(props) {
  const [gltf, setGltf] = useState(null);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loader = new GLTFLoader();

    loader.load(
      "/models/computer-optimized-transformed.glb",
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
  }, []);

  if (!gltf || hasLoadError) {
    return (
      <group {...props} dispose={null}>
        <FallbackComputer />
      </group>
    );
  }

  const { nodes, materials } = gltf;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

export default Computer;
