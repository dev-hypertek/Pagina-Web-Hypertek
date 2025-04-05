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
  // --- Servicios alineados con el brochure ---
  const baseServices: RailService[] = [
    { id: "rs1", imageUrl: "/img/ai.png", altText: "Logo IA", text: "Desarrollo de IA a medida" },
    { id: "rs2", imageUrl: "/img/daen.png", altText: "Logo Automatización", text: "Automatización Inteligente de procesos" },
    { id: "rs3", imageUrl: "/img/bi.png", altText: "Logo Chatbot", text: "Chatbots de voz y conversacionales" },
    { id: "rs4", imageUrl: "/img/db.png", altText: "Logo Análisis", text: "Analítica de datos automatizada" },
    { id: "rs5", imageUrl: "/img/datgor.png", altText: "Logo Reportes", text: "Chatbots de generación de reportes" },
    { id: "rs6", imageUrl: "/img/cai.png", altText: "Logo Consultoría", text: "Consultoría en Inteligencia Artificial" },
    // Servicios adicionales basados en el brochure
    { id: "rs7", imageUrl: "/img/bi.png", altText: "Logo Integración", text: "Integración perfecta con sistemas existentes" },
    { id: "rs8", imageUrl: "/img/daen.png", altText: "Logo Métricas", text: "Métricas claras y resultados cuantificables" },
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
            Nuestras Soluciones y Especialidades
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Combinamos experiencia técnica avanzada con comprensión profunda de procesos empresariales.
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