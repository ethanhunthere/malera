"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/*
╔══════════════════════════════════════════════════════════════╗
║   MALERA STUDIO · ANIMATED BACKGROUND                       ║
║                                                              ║
║   Two elements, one story — we just build good stuff:        ║
║                                                              ║
║   1. CODESTREAM — flowing ribbons of code-structure dots     ║
║      along curved 3D paths, like source code as a waterfall. ║
║                                                              ║
║   2. THE ARCHITECT — a golden cursor moving through          ║
║      the scene, editing, leaving code trails.                ║
║      The visible hand of the developer in 3D.                ║
║                                                              ║
║   Palette: gold (#C9A84C) & white, additive blending         ║
╚══════════════════════════════════════════════════════════════╝
*/

/* ═══════════════════════════════════════════════════════════
   ELEMENT 1: THE CODESTREAM
   Flowing ribbons of code-structure dots along curved
   3D paths. Each ribbon undulates gently like source
   code flowing through a waterfall. Gold & white.
   ═══════════════════════════════════════════════════════════ */
function Codestream() {
  const groupRef = useRef<THREE.Group>(null);

  const ribbons = useMemo(() => {
    const result: {
      points: Float32Array;
      count: number;
      speed: number;
      phase: number;
      waveAmp: number;
    }[] = [];

    const ribbonCount = 7;
    for (let r = 0; r < ribbonCount; r++) {
      const count = 180;
      const points = new Float32Array(count * 3);
      const depth = -3 - r * 1.2;

      for (let i = 0; i < count; i++) {
        const t = i / count;
        const x = (Math.sin(t * 3.5 + r * 0.9) * 6 + Math.cos(t * 1.7 + r) * 3);
        const y = (t - 0.5) * 14;
        const z = depth + Math.sin(t * 2.3 + r * 1.4) * 2;
        points[i * 3] = x;
        points[i * 3 + 1] = y;
        points[i * 3 + 2] = z;
      }

      result.push({
        points,
        count,
        speed: 0.12 + r * 0.04,
        phase: r * 1.2,
        waveAmp: 0.6 + r * 0.3,
      });
    }

    return result;
  }, []);

  const pointsRefs = useRef<(THREE.Points | null)[]>([]);
  const originalPositions = useMemo(() =>
    ribbons.map(r => new Float32Array(r.points)),
  [ribbons]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const t = Date.now() * 0.001;

    ribbons.forEach((ribbon, ri) => {
      const pts = pointsRefs.current[ri];
      if (!pts) return;
      const geom = pts.geometry as THREE.BufferGeometry;
      const posAttr = geom.attributes.position as THREE.BufferAttribute;
      const arr = posAttr.array as Float32Array;
      const orig = originalPositions[ri];

      for (let i = 0; i < ribbon.count; i++) {
        const idx = i * 3;
        const undulation = Math.sin(t * ribbon.speed + i * 0.08 + ribbon.phase) * ribbon.waveAmp;
        arr[idx] = orig[idx] + undulation;
        arr[idx + 1] = orig[idx + 1] + Math.cos(t * 0.3 + i * 0.04) * 0.4;
        arr[idx + 2] = orig[idx + 2];
      }
      posAttr.needsUpdate = true;
    });
  });

  return (
    <group ref={groupRef}>
      {ribbons.map((ribbon, ri) => (
        <points key={ri} ref={(el) => { pointsRefs.current[ri] = el as THREE.Points | null; }}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[ribbon.points, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04 + ri * 0.005}
            color={ri % 3 === 0 ? "#C9A84C" : "#ffffff"}
            transparent
            opacity={0.14 + (ri % 3 === 0 ? 0.08 : 0.02)}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>
      ))}
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════
   ELEMENT 2: THE ARCHITECT · REDESIGNED
   A living cursor — the visible hand of the developer
   working in 3D. Features:
   · Distinctive tall bar cursor shape with core glow
   · Continuous flowing trail line (ring buffer)
   · Expanding pulse rings at edit points
   · Speed ramping — slow at waypoints, fast in between
   · Subtle wobble & rotation for organic movement
   · Spark emission during travel
   ═══════════════════════════════════════════════════════════ */

const TRAIL_LENGTH = 160;     // ring buffer size — longer trail
const TRAIL_FADE_START = 0.6; // where fading begins (0-1 from head)
function Architect() {
  const groupRef = useRef<THREE.Group>(null);
  const cursorGroupRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const barRef = useRef<THREE.Mesh>(null);

  // Geos
  const barGeo = useMemo(() => new THREE.BoxGeometry(0.07, 0.28, 0.03), []);
  const coreGeo = useMemo(() => new THREE.SphereGeometry(0.06, 8, 8), []);
  const glowGeo = useMemo(() => new THREE.SphereGeometry(0.14, 12, 12), []);
  const sparkGeo = useMemo(() => new THREE.SphereGeometry(0.015, 4, 4), []);

  // Waypoints
  const editPoints = useMemo(() => {
    const pts: [number, number, number][] = [
      [-5.5, 4.2, -4],
      [-3, 1.2, -5],
      [2.5, 3.2, -3.5],
      [5, -0.8, -4.5],
      [0.5, -3.8, -5.5],
      [-4.5, -1.2, -4],
      [-2, 2.8, -3],
      [5.5, 0.8, -4],
      [1.5, 4.2, -3.5],
      [-5, 0.5, -5],
    ];
    return pts;
  }, []);

  // ── Trail ring buffer ──
  const trailPositions = useRef(new Float32Array(TRAIL_LENGTH * 3));
  const trailWriteIdx = useRef(0);
  const trailLen = useRef(0);

  // Trail line refs
  const trailLineRef = useRef<THREE.Line>(null);
  const trailLine2Ref = useRef<THREE.Line>(null);

  // Spark pool
  const sparkRefs = useRef<(THREE.Mesh | null)[]>([]);
  const sparkVelocities = useRef<THREE.Vector3[]>([]);
  const SPARK_COUNT = 40;

  // ── Binary digit sprites — 0s and 1s trailing the cursor ──
  const BINARY_COUNT = 45;
  const binarySpriteRefs = useRef<(THREE.Sprite | null)[]>([]);
  const binaryData = useRef<
    { velocity: THREE.Vector3; life: number; age: number }[]
  >([]);
  const binarySpawnTimer = useRef(0);

  const binaryTextures = useMemo(() => {
    const makeTexture = (char: string) => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#ffffff";
      ctx.font = "500 38px 'DM Sans', 'Inter', system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(char, 32, 32);
      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      return tex;
    };
    return [makeTexture("0"), makeTexture("1")];
  }, []);

  // ── Animation ──
  const prevPos = useRef(new THREE.Vector3(0, 0, -4));
  const currentSpeed = useRef(0);

  useFrame((_, delta) => {
    if (!groupRef.current || !cursorGroupRef.current) return;
    const t = Date.now() * 0.001;

    const cycleTime = 20; // slightly longer tour
    const rawT = (t % cycleTime) / cycleTime;

    const numPoints = editPoints.length;
    const segmentFloat = rawT * numPoints;
    const segIndex = Math.floor(segmentFloat) % numPoints;
    const segFrac = segmentFloat - Math.floor(segmentFloat);
    const nextIndex = (segIndex + 1) % numPoints;

    // ── Speed ramping — ease-in-out per segment ──
    // Use a sigmoid-like curve: slow at edges, fast in middle
    const speedCurve = (x: number) => {
      // smoothstep-like: slow at 0 and 1, fastest at 0.5
      const s = 2 * x - 1;           // -1 to 1
      const eased = s < 0
        ? 0.5 * Math.pow(1 + s, 3)   // ease-in from 0
        : 1 - 0.5 * Math.pow(1 - s, 3); // ease-out to 1
      return eased;
    };
    const easedFrac = speedCurve(segFrac);

    const p0 = editPoints[Math.max(0, segIndex - 1) % numPoints];
    const p1 = editPoints[segIndex];
    const p2 = editPoints[nextIndex];
    const p3 = editPoints[(nextIndex + 1) % numPoints];

    // Catmull-Rom with speed-ramped fraction
    const t2 = easedFrac;
    const t3 = t2 * t2;
    const t4 = t3 * t2;

    const x = 0.5 * (
      (2 * p1[0]) + (-p0[0] + p2[0]) * t2 +
      (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t3 +
      (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t4
    );
    const y = 0.5 * (
      (2 * p1[1]) + (-p0[1] + p2[1]) * t2 +
      (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t3 +
      (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t4
    );
    const z = 0.5 * (
      (2 * p1[2]) + (-p0[2] + p2[2]) * t2 +
      (2 * p0[2] - 5 * p1[2] + 4 * p2[2] - p3[2]) * t3 +
      (-p0[2] + 3 * p1[2] - 3 * p2[2] + p3[2]) * t4
    );

    const pos = new THREE.Vector3(x, y, z);
    cursorGroupRef.current.position.copy(pos);

    // Compute speed for visual effects
    currentSpeed.current = pos.distanceTo(prevPos.current) / Math.max(delta, 0.001);
    prevPos.current.copy(pos);

    // ── Cursor wobble & rotation ──
    const wobbleX = Math.sin(t * 2.7) * 0.04;
    const wobbleY = Math.cos(t * 3.1) * 0.03;
    const rotationZ = Math.sin(t * 1.4) * 0.15;
    cursorGroupRef.current.rotation.z = rotationZ;
    if (barRef.current) {
      barRef.current.position.x = wobbleX;
      barRef.current.position.y = wobbleY;
    }

    // ── Cursor blink — variable pulse ──
    const nearEditPoint = segFrac < 0.06 || segFrac > 0.94;
    const hovering = nearEditPoint && currentSpeed.current < 0.3;
    const blinkSpeed = hovering ? 5 : 1.8;
    const blink = Math.abs(Math.sin(t * blinkSpeed));
    const baseBrightness = hovering ? 0.65 : 0.35;
    const barBrightness = baseBrightness + blink * (hovering ? 0.35 : 0.15);

    if (barRef.current) {
      (barRef.current.material as THREE.MeshBasicMaterial).opacity = barBrightness;
    }
    if (coreRef.current) {
      (coreRef.current.material as THREE.MeshBasicMaterial).opacity = barBrightness * 0.9;
    }
    if (glowRef.current) {
      const glowPulse = 1 + Math.sin(t * 2.2) * 0.25;
      glowRef.current.scale.setScalar(glowPulse);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity = barBrightness * 0.04;
    }

    // ── Trail ring buffer ──
    const idx = trailWriteIdx.current * 3;
    const buf = trailPositions.current;
    buf[idx] = x;
    buf[idx + 1] = y;
    buf[idx + 2] = z;
    trailWriteIdx.current = (trailWriteIdx.current + 1) % TRAIL_LENGTH;
    trailLen.current = Math.min(trailLen.current + 1, TRAIL_LENGTH);

    // Update trail line geometry
    if (trailLineRef.current && trailLen.current > 1) {
      const geom = trailLineRef.current.geometry;
      const posAttr = geom.attributes.position as THREE.BufferAttribute;

      // Build ordered position array from ring buffer
      const oldest = trailWriteIdx.current; // next write = oldest
      for (let i = 0; i < trailLen.current; i++) {
        const src = ((oldest + i) % TRAIL_LENGTH) * 3;
        const dst = i * 3;
        posAttr.array[dst] = buf[src];
        posAttr.array[dst + 1] = buf[src + 1];
        posAttr.array[dst + 2] = buf[src + 2];
      }
      // Fill remaining with last known position
      for (let i = trailLen.current; i < TRAIL_LENGTH; i++) {
        const lastSrc = ((oldest + trailLen.current - 1) % TRAIL_LENGTH) * 3;
        const dst = i * 3;
        posAttr.array[dst] = buf[lastSrc];
        posAttr.array[dst + 1] = buf[lastSrc + 1];
        posAttr.array[dst + 2] = buf[lastSrc + 2];
      }
      posAttr.needsUpdate = true;

      // Trail opacity: fade tail
      const fadeFraction = Math.min(1, trailLen.current / TRAIL_LENGTH);
      const mat = trailLineRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.04 + fadeFraction * 0.12;
    }

    // Secondary (core) trail — shorter
    if (trailLine2Ref.current && trailLen.current > 1) {
      const geom2 = trailLine2Ref.current.geometry;
      const posAttr2 = geom2.attributes.position as THREE.BufferAttribute;
      const shortLen = Math.min(trailLen.current, Math.floor(TRAIL_LENGTH * 0.35));
      const oldest = trailWriteIdx.current;
      for (let i = 0; i < shortLen; i++) {
        const src = ((oldest + i) % TRAIL_LENGTH) * 3;
        const dst = i * 3;
        posAttr2.array[dst] = buf[src];
        posAttr2.array[dst + 1] = buf[src + 1];
        posAttr2.array[dst + 2] = buf[src + 2];
      }
      for (let i = shortLen; i < TRAIL_LENGTH; i++) {
        const lastSrc = ((oldest + shortLen - 1) % TRAIL_LENGTH) * 3;
        const dst = i * 3;
        posAttr2.array[dst] = buf[lastSrc];
        posAttr2.array[dst + 1] = buf[lastSrc + 1];
        posAttr2.array[dst + 2] = buf[lastSrc + 2];
      }
      posAttr2.needsUpdate = true;
    }

    // ── Sparks during travel ──
    if (currentSpeed.current > 0.15) {
      sparkRefs.current.forEach((spark, i) => {
        if (!spark) return;
        if (!spark.visible) {
          // Respawn from cursor
          const vel = sparkVelocities.current[i];
          if (!vel) return;
          spark.position.copy(pos);
          spark.position.x += (Math.random() - 0.5) * 0.2;
          spark.position.y += (Math.random() - 0.5) * 0.2;
          spark.position.z += (Math.random() - 0.5) * 0.1;
          vel.set(
            (Math.random() - 0.5) * 1.2,
            (Math.random() - 0.5) * 1.2,
            (Math.random() - 0.5) * 0.6,
          );
          spark.visible = true;
          (spark.material as THREE.MeshBasicMaterial).opacity = 0.5 + Math.random() * 0.3;
          spark.userData.life = 0.6 + Math.random() * 0.9;
          spark.userData.age = 0;
        }
      });
    }

    // Animate sparks
    sparkRefs.current.forEach((spark, i) => {
      if (!spark || !spark.visible) return;
      const vel = sparkVelocities.current[i];
      if (!vel) return;
      spark.position.x += vel.x * delta;
      spark.position.y += vel.y * delta;
      spark.position.z += vel.z * delta;
      spark.userData.age = (spark.userData.age || 0) + delta;
      const life = spark.userData.life || 0.8;
      const progress = spark.userData.age / life;
      if (progress >= 1) { spark.visible = false; return; }
      (spark.material as THREE.MeshBasicMaterial).opacity = (1 - progress) * 0.5;
    });

    // ── Binary digits — spawn 0s and 1s along the trail ──
    binarySpawnTimer.current -= delta;
    if (currentSpeed.current > 0.08 && binarySpawnTimer.current <= 0) {
      binarySpawnTimer.current = 0.08 + Math.random() * 0.12;
      for (let i = 0; i < BINARY_COUNT; i++) {
        const sprite = binarySpriteRefs.current[i];
        if (!sprite || sprite.visible) continue;
        sprite.position.copy(pos);
        sprite.position.x += (Math.random() - 0.5) * 0.25;
        sprite.position.y += (Math.random() - 0.5) * 0.25;
        sprite.position.z += (Math.random() - 0.5) * 0.15;
        sprite.visible = true;
        sprite.material.opacity = 0.65;
        const bd = binaryData.current[i];
        if (bd) {
          bd.velocity.set(
            (Math.random() - 0.5) * 0.35,
            0.25 + Math.random() * 0.55,
            (Math.random() - 0.5) * 0.18,
          );
          bd.life = 2.2 + Math.random() * 2.5;
          bd.age = 0;
        }
        sprite.material.map = binaryTextures[Math.random() < 0.5 ? 0 : 1];
        sprite.material.needsUpdate = true;
        break;
      }
    }

    // Animate binary sprites
    for (let i = 0; i < BINARY_COUNT; i++) {
      const sprite = binarySpriteRefs.current[i];
      if (!sprite || !sprite.visible) continue;
      const bd = binaryData.current[i];
      if (!bd) continue;
      bd.age += delta;
      if (bd.age >= bd.life) {
        sprite.visible = false;
        continue;
      }
      const progress = bd.age / bd.life;
      sprite.position.x += bd.velocity.x * delta;
      sprite.position.y += bd.velocity.y * delta;
      sprite.position.z += bd.velocity.z * delta;
      sprite.material.opacity = (1 - progress) * 0.65;
    }
  });

  return (
    <group ref={groupRef}>
      {/* ── Main trail — long golden line ── */}
      <line ref={trailLineRef as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(TRAIL_LENGTH * 3), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#C9A84C"
          transparent
          opacity={0.04}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </line>

      {/* ── Core trail — shorter, brighter, whiter ── */}
      <line ref={trailLine2Ref as any}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(TRAIL_LENGTH * 3), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.06}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </line>

      {/* ── Spark particles pool ── */}
      {Array.from({ length: SPARK_COUNT }, (_, i) => {
        // Pre-initialize velocities
        if (!sparkVelocities.current[i]) {
          sparkVelocities.current[i] = new THREE.Vector3();
        }
        return (
          <mesh
            key={`spark-${i}`}
            ref={(el) => { sparkRefs.current[i] = el; }}
            visible={false}
            geometry={sparkGeo}
          >
            <meshBasicMaterial
              color={i % 3 === 0 ? "#ffffff" : "#C9A84C"}
              transparent
              opacity={0}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      })}

      {/* ── Binary digit trail — 0s and 1s floating off the cursor ── */}
      {Array.from({ length: BINARY_COUNT }, (_, i) => {
        if (!binaryData.current[i]) {
          binaryData.current[i] = {
            velocity: new THREE.Vector3(),
            life: 0,
            age: 999,
          };
        }
        return (
          <sprite
            key={`binary-${i}`}
            ref={(el) => { binarySpriteRefs.current[i] = el; }}
            visible={false}
            scale={[0.28, 0.28, 1]}
          >
            <spriteMaterial
              map={binaryTextures[0]}
              transparent
              opacity={0}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </sprite>
        );
      })}

      {/* ── Cursor group ── */}
      <group ref={cursorGroupRef} position={[0, 0, -4]}>
        {/* Outer glow sphere */}
        <mesh ref={glowRef} geometry={glowGeo}>
          <meshBasicMaterial
            color="#C9A84C"
            transparent
            opacity={0.06}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Inner core sphere */}
        <mesh ref={coreRef} geometry={coreGeo}>
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>

        {/* Tall cursor bar */}
        <mesh ref={barRef} geometry={barGeo}>
          <meshBasicMaterial
            color="#C9A84C"
            transparent
            opacity={0.45}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════
   AMBIENT DUST — minimal golden atmosphere particles
   Digital sawdust, the byproduct of active construction.
   ═══════════════════════════════════════════════════════════ */
function AmbientDust() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 350;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.02;
    meshRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#C9A84C"
        transparent
        opacity={0.10}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCENE COMPOSITION
   ═══════════════════════════════════════════════════════════ */
function Scene() {
  return (
    <>
      {/* 1. CODESTREAM — flowing code tapestry */}
      <Codestream />

      {/* 2. THE ARCHITECT — the golden cursor at work */}
      <Architect />

      {/* Subtle: ambient dust for depth */}
      <AmbientDust />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════════════════════ */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
        }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
      {/* Dark base beneath the 3D scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, #08080a 0%, #0a0908 35%, #060606 65%, #080808 100%)",
          zIndex: -1,
        }}
      />
    </div>
  );
}
