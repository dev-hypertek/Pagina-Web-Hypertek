// src/components/FloatingWhatsAppButton.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image'; // 1. Importa el componente Image de Next.js

const FloatingWhatsAppButton = () => {
  // Número de contacto de Hypertek
  const phoneNumber = "573023235255"; // Basado en el brochure (+57 3023235255)
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
                 bg-green-500 hover:bg-green-600
                 text-white // El color de texto ya no aplica directamente a la imagen
                 p-3 // Puedes ajustar el padding si es necesario para la imagen
                 rounded-full
                 shadow-lg
                 transition-all duration-300 ease-in-out
                 transform hover:scale-110
                "
      aria-label="Contactar por WhatsApp"
    >
      {/* 2. Reemplaza el icono de react-icons con el componente Image */}
      <Image
        src="/img/icon.png" // Ruta pública a tu imagen (desde la carpeta 'public')
        alt="Contactar por WhatsApp" // Texto alternativo OBLIGATORIO para accesibilidad
        width={32} // Ancho deseado de la imagen en píxeles
        height={32} // Alto deseado de la imagen en píxeles
        // No necesitas className aquí a menos que quieras estilizar la imagen específicamente
      />
    </Link>
  );
};

export default FloatingWhatsAppButton;