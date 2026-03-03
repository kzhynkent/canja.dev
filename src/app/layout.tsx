import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";

const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "c.dev",
  description: "Personal Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${archivoBlack.className} bg-slate-950 text-slate-50 antialiased`} suppressHydrationWarning>
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
