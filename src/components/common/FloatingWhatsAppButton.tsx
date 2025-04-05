"use client";

import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';

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
                 p-3
                 rounded-full
                 shadow-lg
                 transition-all duration-300 ease-in-out
                 transform hover:scale-110
                "
      aria-label="Contactar por WhatsApp"
    >
      <Image
        src="/img/icon.png"
        alt="Contactar por WhatsApp"
        width={32}
        height={32}
      />
    </Link>
  );
};

// Utilizamos memo para evitar rerenderizaciones innecesarias
export default memo(FloatingWhatsAppButton);
