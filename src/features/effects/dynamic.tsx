"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(
  () => import("./components/AnimatedBackground"),
  {
    ssr: false,
    loading: () => <BackgroundPlaceholder />,
  }
);

function BackgroundPlaceholder() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 80%, rgba(255,255,255,0.04) 0%, transparent 60%),
          radial-gradient(ellipse 50% 50% at 80% 20%, rgba(220,225,240,0.03) 0%, transparent 50%),
          radial-gradient(ellipse 40% 40% at 20% 30%, rgba(240,235,225,0.025) 0%, transparent 50%),
          #030303
        `,
      }}
    />
  );
}

export default AnimatedBackground;
