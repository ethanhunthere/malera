"use client";

import { motion, useScroll } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile || prefersReduced) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 w-[1px] h-full bg-[#C9A84C] opacity-40 z-[150] origin-top"
      style={{ scaleY: scrollYProgress }}
    />
  );
}
