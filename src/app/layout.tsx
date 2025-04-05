import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "HyperTek AI - Escalamos tu negocio con IA sin perder el toque humano",
  description: "Automatiza la atención al cliente y las ventas de tu negocio con IA, Landing Pages e Integraciones. Revolucione sus tareas, reduzca los errores y aumente la eficacia con soluciones personalizadas.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <ClientBody>
        <body className="bg-gapfixers-dark min-h-screen">
          <div className="fixed inset-0 bg-gradient-to-b from-gapfixers-dark via-gapfixers-dark to-black/80 pointer-events-none -z-10" />
          <div className="fixed inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none -z-10" />
          {children}
        </body>
      </ClientBody>
    </html>
  );
}
