"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/img/full_logo.png"
              alt="Logo Hypertek"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#services"
              className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#why-us"
              className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
            >
              ¿Por qué elegirnos?
            </Link>
            <Link
              href="#how-to-start"
              className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
            >
              Proceso
            </Link>
            <Link
              href="#faq"
              className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="https://www.hypertek.com.co/#contact"
              className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-[#bbd735] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white mt-4 py-4 px-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link
                href="#about"
                className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="#services"
                className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#why-us"
                className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ¿Por qué elegirnos?
              </Link>
              <Link
                href="#how-to-start"
                className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proceso
              </Link>
              <Link
                href="#faq"
                className="text-gray-800 hover:text-[#bbd735] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="https://www.hypertek.com.co/#contact"
                className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-[#bbd735] transition-colors w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
