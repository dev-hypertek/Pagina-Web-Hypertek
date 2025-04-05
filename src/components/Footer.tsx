"use client";

import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#19191a] border-t border-gray-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/img/full_logo.png"
                alt="Logo Gapfixers"
                width={160}
                height={40}
                priority
              />
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            &copy; {currentYear} Hypertek - Innovación a medida
          </p>

          <div className="flex space-x-8">
            <Link
              href="#services"
              className="text-gray-300 hover:text-gapfixers-purple transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#faq"
              className="text-gray-300 hover:text-gapfixers-purple transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="https://www.hypertek.com.co/#contact"
              className="text-gray-300 hover:text-gapfixers-purple transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
