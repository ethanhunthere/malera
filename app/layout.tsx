import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import dynamic from "next/dynamic";
import Providers from "@/app/components/Providers";
import { ScrollProvider } from "@/app/components/anim/ScrollProvider";
import { LoaderWrapper } from "@/app/components/anim/LoaderWrapper";
import "./globals.css";

const CodeWind = dynamic(
  () => import("./components/anim/CodeWind").then((m) => m.CodeWind),
  { ssr: false }
);

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Malera Studio",
  description: "We just build good stuff",
  icons: {
    icon: "/malera-transparent.png",
  },
  openGraph: {
    title: "Malera Studio",
    description: "We just build good stuff",
    images: ["/malera-transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${GeistMono.variable}`}>
      <body className="font-dm antialiased">
        <CodeWind />
        <LoaderWrapper />
        <ScrollProvider>
          <Providers>{children}</Providers>
        </ScrollProvider>
      </body>
    </html>
  );
}
