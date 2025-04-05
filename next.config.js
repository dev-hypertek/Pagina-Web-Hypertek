/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Optimización de compilación
  swcMinify: true, // Usar SWC para minificación
  
  // Optimización de imágenes
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '**',
      },
    ],
  },
  
  // Reducir archivos generados
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
        '.git/**/*',
      ],
    },
    turbotrace: {
      logLevel: 'error',
    },
  },
  
  // Optimizaciones para desarrollo
  onDemandEntries: {
    // Periodo durante el que se conserva una página en memoria (reducido)
    maxInactiveAge: 10 * 1000,
    // Número de páginas a mantener cacheadas (reducido)
    pagesBufferLength: 1,
  },
  
  // Ignorar errores en desarrollo para mejorar velocidad
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
