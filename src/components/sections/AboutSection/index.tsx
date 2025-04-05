"use client";

import { memo } from "react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Triángulo verde en la parte superior apuntando hacia abajo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
        <svg width="60" height="15" viewBox="0 0 60 15">
          <path
            d="M0,0 L60,0 C60,8.284 46.569,15 30,15 C13.431,15 0,8.284 0,0 Z"
            fill="#bbd735"
          />
        </svg>
      </div>

      {/* Círculos concéntricos como fondo - con tonos del gris #19191a */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          {/* Círculo más grande */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border opacity-5" style={{ borderColor: "#19191a" }}></div>
          
          {/* Círculo mediano 1 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border opacity-10" style={{ borderColor: "#19191a" }}></div>
          
          {/* Círculo mediano 2 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border opacity-15" style={{ borderColor: "#19191a" }}></div>
          
          {/* Círculo interno */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border opacity-20" style={{ borderColor: "#19191a" }}></div>
          
          {/* Círculo central (más grande) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border opacity-20" style={{ borderColor: "#19191a" }}></div>
        </div>
      </div>
      
      {/* Contenido de la sección con z-index para estar por encima de los círculos */}
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
            <span style={{ color: "#19191a" }}>¿Qué es HyperTek</span>
            <span style={{ color: "#19191a" }}>?</span>
          </h2>
          
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: "#19191a" }}>
              Nos especializamos en crear soluciones de Inteligencia Artificial adaptadas específicamente a las necesidades únicas de cada cliente.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ color: "#19191a" }}>
              Combinamos experiencia técnica avanzada con comprensión profunda de procesos empresariales para entregar tecnologías que generan resultados tangibles.
            </p>

            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#19191a" }}>
              Identificamos, diseñamos e implementamos soluciones que automatizan sus procesos más complejos. Nuestros sistemas inteligentes reducen errores, aceleran operaciones y escalan sin esfuerzo con el crecimiento de su negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(AboutSection);
