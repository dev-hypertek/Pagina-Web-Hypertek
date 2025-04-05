"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Clases para aplicar la animación de escalado al pasar el mouse
  const buttonHoverClasses = "transition-transform duration-300 hover:scale-95";
  
  // Estilo base del botón
  const baseButtonStyle = {
    backgroundColor: "#9cd128",
    color: "#19191a",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
  };

  return (
    <header className="py-4 relative z-10" style={{ backgroundColor: "#19191a" }}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/full_logo.png"
            alt="Logo de Hypertek"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* Botón del menú móvil */}
        <button
          className="md:hidden"
          style={{ color: "#9cd128" }}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación en escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#services"
            className="hover:text-9cd128 transition-colors"
            style={{ color: "#9cd128" }}
          >
            Servicios
          </Link>
          <Link
            href="#why-us"
            className="hover:text-9cd128 transition-colors"
            style={{ color: "#9cd128" }}
          >
            Por qué elegirnos
          </Link>
          <Link
            href="#how-to-start"
            className="hover:text-9cd128 transition-colors"
            style={{ color: "#9cd128" }}
          >
            Cómo empezar
          </Link>
          <Link
            href="#faq"
            className="hover:text-9cd128 transition-colors"
            style={{ color: "#9cd128" }}
          >
            FAQ
          </Link>
          <Link
            href="https://youtu.be/DuTXAE2fRHk?list=RD44pt8w67S8I"
            className={buttonHoverClasses}
            style={baseButtonStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Empezar Ahora
          </Link>
        </nav>

        {/* Navegación en móvil */}
        {isMenuOpen && (
          <div
            className="md:hidden absolute top-full left-0 right-0 p-4 border-t border-gray-800"
            style={{ backgroundColor: "#19191a" }}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="#services"
                className="hover:text-9cd128 transition-colors"
                style={{ color: "#9cd128" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#why-us"
                className="hover:text-9cd128 transition-colors"
                style={{ color: "#9cd128" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Por qué elegirnos
              </Link>
              <Link
                href="#how-to-start"
                className="hover:text-9cd128 transition-colors"
                style={{ color: "#9cd128" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo empezar
              </Link>
              <Link
                href="#faq"
                className="hover:text-9cd128 transition-colors"
                style={{ color: "#9cd128" }}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="https://youtu.be/DuTXAE2fRHk?list=RD44pt8w67S8I"
                className={`w-full text-center ${buttonHoverClasses}`}
                style={baseButtonStyle}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Empezar Ahora
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
