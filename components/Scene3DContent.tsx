"use client";

import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Scene3DContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 animate-pulse" />
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      gl={{ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      }}
      dpr={[1, 2]}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      onError={(error) => {
        console.error("Canvas Error:", error);
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          makeDefault
        />
      </Suspense>
    </Canvas>
  );
}
