"use client";

import { memo } from "react";
import RailServiceItem from "./RailServiceItem";
import { railServices } from "@/data/services";

const ScrollingServicesSection = () => {
  // Duplicar los servicios para un scrolling continuo
  const scrollingServices = [...railServices, ...railServices];

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
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

        {/* Contenedor del carrusel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative w-full overflow-hidden group"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex items-center animate-scroll">
              {scrollingServices.map((service, index) => (
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

export default memo(ScrollingServicesSection);
