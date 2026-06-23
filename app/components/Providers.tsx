"use client";

import { LanguageProvider } from "@/app/context/LanguageContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
