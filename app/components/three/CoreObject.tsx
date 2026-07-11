"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Icosahedron, Line } from "@react-three/drei";
import * as THREE from "three";

export function CoreObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.08;
      meshRef.current.rotation.y = t * 0.12;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.05;
      wireRef.current.rotation.y = -t * 0.09;
      const s = 1.35 + Math.sin(t * 0.6) * 0.02;
      wireRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      <Icosahedron ref={meshRef} args={[1.3, 4]}>
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.35}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          emissive="#5b21b6"
          emissiveIntensity={0.25}
        />
      </Icosahedron>

      <Icosahedron ref={wireRef} args={[1, 1]}>
        <meshBasicMaterial
          color="#2dd4bf"
          wireframe
          transparent
          opacity={0.22}
        />
      </Icosahedron>
    </group>
  );
}

/**
 * Thin orbiting rings that suggest data / trajectories around the core.
 */
export function OrbitRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = t * 0.05;
      groupRef.current.rotation.x = 0.6 + Math.sin(t * 0.15) * 0.05;
    }
  });

  const ringPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const radius = 2.4;
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius * 0.35, 0),
      );
    }
    return points;
  }, []);

  const ringPoints2 = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const radius = 3.1;
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      points.push(
        new THREE.Vector3(Math.cos(a) * radius * 0.5, Math.sin(a) * radius, 0),
      );
    }
    return points;
  }, []);

  return (
    <group ref={groupRef}>
      <Line
        points={ringPoints}
        color="#a78bfa"
        lineWidth={1}
        transparent
        opacity={0.3}
      />
      <Line
        points={ringPoints2}
        color="#2dd4bf"
        lineWidth={1}
        transparent
        opacity={0.18}
      />
    </group>
  );
}
