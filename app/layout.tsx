import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { LanguageProvider } from "./context/LanguageContext";
import AnimatedBackground from "./components/AnimatedBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Malera Studio",
  description: "We just build good stuff.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased overflow-x-hidden`}>
        <AnimatedBackground />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
