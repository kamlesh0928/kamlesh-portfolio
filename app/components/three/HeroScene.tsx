"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { CoreObject, OrbitRings } from "./CoreObject";
import { ParticleField } from "./ParticleField";

function MouseParallaxRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    target.current.x += (pointer.x * 0.6 - target.current.x) * 0.04;
    target.current.y += (pointer.y * 0.35 - target.current.y) * 0.04;
    camera.position.x += (target.current.x - camera.position.x) * 0.06;
    camera.position.y += (target.current.y - camera.position.y) * 0.06;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#a78bfa" />
      <pointLight position={[-4, -3, -2]} intensity={20} color="#2dd4bf" />

      <Suspense fallback={null}>
        <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
          <CoreObject />
        </Float>
        <OrbitRings />
        <ParticleField />
      </Suspense>

      <MouseParallaxRig />
    </Canvas>
  );
}
