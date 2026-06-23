"use client";
import dynamic from "next/dynamic";

const CodeWindLazy = dynamic(
  () => import("./CodeWind").then((m) => m.CodeWind),
  { ssr: false }
);

export function CodeWindClient() {
  return <CodeWindLazy />;
}
