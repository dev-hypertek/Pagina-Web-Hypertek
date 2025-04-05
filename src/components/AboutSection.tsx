"use client";

import Link from "next/link";

export const AboutSection = () => {
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
              Somos seis humanos que ayudan a que las computadoras hagan el trabajo que no te gusta hacer.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: "#19191a" }}>
              Esto generalmente involucra un problema con la comunicación con tus clientes, la información de tu empresa no está centralizada o tus procesos están desorganizados y eso te está costando tiempo y dinero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};