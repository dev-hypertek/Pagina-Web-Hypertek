/**
 * Acceso centralizado a las variables de entorno
 */
export const environment = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  
  // Contacto
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+573023235255',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contacto@hypertek.com',
  contactLocation: process.env.NEXT_PUBLIC_CONTACT_LOCATION || 'Bogotá, Colombia',
  
  // URLs
  contactUrl: process.env.NEXT_PUBLIC_CONTACT_URL || 'https://www.hypertek.com.co/#contact',
  
  // Metadatos
  isProduction: process.env.NODE_ENV === 'production',
};
