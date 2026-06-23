"use client";

import dynamic from "next/dynamic";

const Loader = dynamic(
  () => import("./Loader").then((m) => m.Loader),
  { ssr: false }
);

export function LoaderWrapper() {
  return <Loader />;
}
