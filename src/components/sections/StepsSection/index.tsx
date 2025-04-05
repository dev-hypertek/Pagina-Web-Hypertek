"use client";

import { memo } from "react";
import StepItem from "./StepItem";
import { steps } from "@/data/steps";

const StepsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="how-to-start">
      {/* Fondo decorativo muy sutil */}
      <div className="absolute inset-0 -z-10">
        {/* Gradiente de fondo principal muy difuminado */}
        <div className="absolute inset-0 bg-white/95"></div>
        
        {/* Degradado para difuminar el borde superior */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-[#f7f7f7]"></div>
        
        {/* Elementos decorativos muy sutiles */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          {/* Círculos decorativos extremadamente difuminados */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gray-400 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gray-300 blur-3xl"></div>
          
          {/* Patrón de puntos muy sutil */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle, rgba(100, 100, 100, 0.03) 1px, transparent 1px)',
                 backgroundSize: '24px 24px'
               }}>
          </div>
        </div>
      </div>
    
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Columna izquierda - Encabezado */}
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <span className="inline-block text-gray-600 font-medium mb-3 px-4 py-1 rounded-full bg-gray-100">
                Metodología
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestro Proceso
              </h2>
              <p className="text-gray-700 mb-8">
                Acompañamos todo el proceso desde la conceptualización hasta la implementación y mejora continua, garantizando soluciones que generan resultados tangibles.
              </p>
              
              {/* CTA Button */}
              <a 
                href="https://www.hypertek.com.co/#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#9dcc30] text-white font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar una demostración
              </a>
            </div>
          </div>
          
          {/* Columna derecha - Timeline de pasos */}
          <div className="md:w-2/3">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              {steps.map((step, index) => (
                <StepItem
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
            
            {/* Elemento decorativo final */}
            <div className="mt-6 text-center">
              <div className="inline-block px-6 py-3 bg-gray-100 rounded-full text-sm text-gray-600 font-medium">
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(StepsSection);
