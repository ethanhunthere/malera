"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as [number, number, number, number];
const easeInOut = [0.87, 0, 0.13, 1] as [number, number, number, number];

export default function PageLoader({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) { setLoading(false); return; }
    // Skip on return visits
    if (sessionStorage.getItem("malera-loaded")) { setLoading(false); return; }
    sessionStorage.setItem("malera-loaded", "1");
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [prefersReduced]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            className="fixed inset-0 z-[100] bg-[#080808] flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.7],
                y: [0, 0, 0, -80],
              }}
              transition={{
                duration: 1.6,
                times: [0, 0.5, 0.75, 1],
                ease: easeInOut,
              }}
            >
              <img src="/malera-transparent.png" alt="Malera" className="h-24 w-auto" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && children}
    </>
  );
}
