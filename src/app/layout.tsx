import { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Hypertek - Innovación a medida con IA para su negocio',
  description: 'Soluciones de Inteligencia Artificial personalizadas que automatizan procesos y generan resultados tangibles para su empresa.',
  keywords: 'hypertek, inteligencia artificial, IA, automatización de procesos, chatbots conversacionales, analítica de datos',
  authors: [{ name: 'Hypertek Colombia' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.hypertek.com.co/',
    title: 'Hypertek - Innovación a medida con IA para su negocio',
    description: 'Soluciones de Inteligencia Artificial personalizadas que automatizan procesos y generan resultados tangibles.',
    siteName: 'Hypertek',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hypertek - Innovación a medida con IA para su negocio',
    description: 'Soluciones de Inteligencia Artificial personalizadas que automatizan procesos y generan resultados tangibles.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
