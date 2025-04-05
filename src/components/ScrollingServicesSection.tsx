"use client";

import React from "react";
import Image from "next/image";

// --- Interfaces ---
interface RailService {
  id: string;
  imageUrl: string;
  altText: string;
  text: string;
}

interface RailServiceItemProps {
  imageUrl: string;
  altText: string;
  text: string;
}

// --- Componente de Item Individual del Riel (con texto) ---
const RailServiceItem = ({ imageUrl, altText, text }: RailServiceItemProps) => {
  return (
    <div className="flex-shrink-0 w-32 mx-4 flex flex-col items-center text-center">
      {/* Contenedor de la Imagen */}
      <div className="relative w-20 h-20 mb-2">
        <Image
          src={imageUrl}
          alt={altText}
          fill={true} // Prop actualizada de Next.js Image
          className="object-contain" // Prop actualizada de Next.js Image
          sizes="(max-width: 768px) 15vw, 10vw" // Ajusta según necesidad o elimina
          title={altText}
        />
      </div>
      {/* Texto debajo de la imagen */}
      <p className="text-xs font-medium text-gray-600 leading-tight">
        {text}
      </p>
    </div>
  );
};

// --- Componente Principal de la Sección Scrolling ---
export const ScrollingServicesSection = () => {
  // --- Ajustado a 6 elementos base ---
  const baseServices: RailService[] = [
    { id: "rs1", imageUrl: "/img/db.png", altText: "Logo Base de Datos", text: "Gestión/Administración de Bases de Datos" },
    { id: "rs2", imageUrl: "/img/daen.png", altText: "Logo Servidor", text: "Ingeniería de Datos y servicios en la Nube" },
    { id: "rs3", imageUrl: "/img/bi.png", altText: "Logo Nube", text: "Análisis de Datos y Business Intelligence" },
    { id: "rs4", imageUrl: "/img/ai.png", altText: "Logo Seguridad", text: "Implementación de Soluciones de IA" },
    { id: "rs5", imageUrl: "/img/datgor.png", altText: "Logo Backup", text: "Gobernanza y Calidad de Datos" },
    { id: "rs6", imageUrl: "/img/cai.png", altText: "Logo Monitorización", text: "Consultoría en Inteligencia Artificial" },
    // Si necesitas más para un loop suave en pantallas anchas aunque el contenedor sea estrecho, añade aquí.
  ];

  // Duplicar los servicios (ahora 12 en total)
  const railServices = [...baseServices, ...baseServices];

  return (
    // --- Fondo cambiado a bg-gray-50 ---
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>

      {/* Fondo decorativo eliminado */}

      <div className="container-custom relative z-10">
        {/* Texto introductorio */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
            Nuestros Servicios y Tecnologías
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Impulsamos tu negocio con soluciones robustas y eficientes.
          </p>
        </div>

        {/* --- Ancho ajustado a max-w-4xl --- */}
        <div className="max-w-4xl mx-auto"> {/* Cambio de max-w- para ajustar ancho */}
          <div
            className="relative w-full overflow-hidden group"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex items-center animate-scroll">
              {railServices.map((service, index) => (
                <RailServiceItem
                  key={`${service.id}-${index}`}
                  imageUrl={service.imageUrl}
                  altText={service.altText}
                  text={service.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};