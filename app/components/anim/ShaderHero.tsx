"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ShaderHero() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mount.current) return;
    if (window.innerWidth < 768) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.current.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uRes: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uGold: { value: new THREE.Color("#C9A84C") },
      uScroll: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      transparent: true,
      vertexShader: `
        varying vec2 vUv;
        void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: `
        precision highp float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform vec2 uRes;
        uniform vec3 uGold;

        vec2 hash(vec2 p){
          p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
          return -1.0 + 2.0*fract(sin(p)*43758.5453123);
        }
        float noise(vec2 p){
          vec2 i = floor(p); vec2 f = fract(p);
          vec2 u = f*f*(3.0-2.0*f);
          return mix(mix(dot(hash(i+vec2(0,0)), f-vec2(0,0)),
                         dot(hash(i+vec2(1,0)), f-vec2(1,0)), u.x),
                     mix(dot(hash(i+vec2(0,1)), f-vec2(0,1)),
                         dot(hash(i+vec2(1,1)), f-vec2(1,1)), u.x), u.y);
        }
        void main(){
          vec2 uv = vUv;
          float t = uTime * 0.06;
          float d = distance(uv, uMouse);
          float n = noise(uv*3.0 + t) + 0.5*noise(uv*6.0 - t);
          n += 0.15 * smoothstep(0.4, 0.0, d);
          float glow = smoothstep(0.2, 0.9, n);
          vec3 col = mix(vec3(0.04,0.04,0.04), uGold, glow*0.5);
          float alpha = glow * 0.5;
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let pendingMouse = { x: 0.5, y: 0.5 };
    let mousePending = false;
    const onMove = (e: MouseEvent) => {
      pendingMouse.x = e.clientX / window.innerWidth;
      pendingMouse.y = 1.0 - e.clientY / window.innerHeight;
      mousePending = true;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onScroll = () => {
      uniforms.uScroll.value = Math.min(window.scrollY / window.innerHeight, 1.0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const clock = new THREE.Timer();
    let id: number;
    const loop = () => {
      id = requestAnimationFrame(loop);
      if (mousePending) {
        uniforms.uMouse.value.set(pendingMouse.x, pendingMouse.y);
        mousePending = false;
      }
      uniforms.uTime.value = clock.getElapsed();
      renderer.render(scene, camera);
    };
    loop();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uRes.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.current?.contains(renderer.domElement))
        mount.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mount}
      className="shader-hero"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
