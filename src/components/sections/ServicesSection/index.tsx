"use client";

import { memo } from "react";
import ServiceItem from "./ServiceItem";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section className="relative pt-16 md:pt-24 pb-10 md:pb-16 overflow-hidden" id="services">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 overflow-hidden">
          <div className="absolute top-24 left-8 w-64 h-64 rounded-full bg-[#bbd735]/20 blur-3xl"></div>
          <div className="absolute bottom-36 right-8 w-80 h-80 rounded-full bg-blue-300/30 blur-3xl"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <svg className="absolute bottom-0 left-0 w-full" height="120" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 50 C 150 0, 350 100, 500 50 C 650 0, 850 100, 1000 50 L 1000 120 L 0 120 Z" fill="rgba(99, 102, 241, 0.05)"></path>
            <path d="M 0 70 C 200 20, 400 120, 600 70 C 800 20, 1000 120, 1200 70 L 1200 120 L 0 120 Z" fill="rgba(99, 102, 241, 0.07)"></path>
          </svg>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="mb-12 h-px w-full bg-[linear-gradient(to_right,rgba(25,25,26,0.2)_0%,transparent_40%,transparent_60%,rgba(25,25,26,0.2)_100%)]"></div>
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-medium text-[#19191a] px-4 py-1 rounded-full bg-[#bbd735]/10">
            Servicios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Innovación a medida para su negocio
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Soluciones de Inteligencia Artificial personalizadas que automatizan procesos y generan resultados tangibles.
          </p>
        </div>
      </div>

      <div className="relative bg-white/40 backdrop-blur-sm">
        {services.map((service, index) => (
          <ServiceItem
            key={service.id}
            title={service.title}
            description={service.description}
            tag={service.tag}
            videoUrl={service.videoUrl}
            ctaLink={service.ctaLink}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(ServicesSection);
