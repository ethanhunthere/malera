"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { camera, pointer } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouse = useRef({ x: 0, y: 0 });

  const { positions, colors, originalPositions, geometry } = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 30;
      pos[i3 + 1] = (Math.random() - 0.5) * 30;
      pos[i3 + 2] = (Math.random() - 0.5) * 15;
      orig[i3] = pos[i3];
      orig[i3 + 1] = pos[i3 + 1];
      orig[i3 + 2] = pos[i3 + 2];

      const isGold = Math.random() < 0.3;
      if (isGold) {
        col[i3] = 0.788;
        col[i3 + 1] = 0.659;
        col[i3 + 2] = 0.298;
      } else {
        col[i3] = 1;
        col[i3 + 1] = 1;
        col[i3 + 2] = 1;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return { positions: pos, colors: col, originalPositions: orig, geometry: geo };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;

    mouseRef.current.x += (targetMouse.current.x - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (targetMouse.current.y - mouseRef.current.y) * 0.02;

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const mx = mouseRef.current.x * 15;
    const my = mouseRef.current.y * 15;

    for (let i = 0; i < pos.length / 3; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      const dx = ox - mx;
      const dy = oy - my;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.1;

      if (dist < 3) {
        const force = (1 - dist / 3) * 0.02;
        pos[i3] += (dx / dist) * force + (ox - pos[i3]) * 0.05;
        pos[i3 + 1] += (dy / dist) * force + (oy - pos[i3 + 1]) * 0.05;
      } else {
        pos[i3] += (ox - pos[i3]) * 0.02;
        pos[i3 + 1] += (oy - pos[i3 + 1]) * 0.02;
      }
      pos[i3 + 2] = oz;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y += delta * 0.03;

    camera.position.x += (mouseRef.current.x * 3 - camera.position.x) * 0.02;
    camera.position.y += (mouseRef.current.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
