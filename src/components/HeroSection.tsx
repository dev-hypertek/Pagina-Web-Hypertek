"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing background video:", error);
      });
    }
  }, []);

  return (
    <section className="pt-8 pb-24 relative overflow-hidden bg-gapfixers-dark">
      {/* Background video with dark overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/854053-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay on top of video */}
        <div className="absolute inset-0 bg-black opacity-60 z-0" />
      </div>

      {/* Social proof banner */}

      <div className="container-custom mb-10 relative z-10">
        <div className="backdrop-blur-sm border border-gray-800 p-3 rounded-lg flex items-center justify-center space-x-2 max-w-fit mx-auto"
             style={{ backgroundColor: "rgba(25, 25, 26, 0.7)" }}>
          <Image
            src="/img/logo_square.png"
            alt="Social Proof Icon"
            width={16}
            height={16}
            className="h-4 w-4"
          />
          <span className="text-gray-400 text-sm">Miles de negocios ya están aplicando IA para agilizar su trabajo y lograr más con menos esfuerzo.</span>
          <Link
            href="https://youtu.be/d2smz_1L2_0?list=RD44pt8w67S8I"
            className="text-sm font-medium hover:opacity-80"
            style={{ color: "#bbd735" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Empieza hoy
          </Link>
        </div>
      </div>
      
      {/* Main hero content */}
      <div className="container-custom text-center relative z-10">
        {/* Empty space where "Únete a las marcas líderes" text was */}
        <div className="text-sm text-transparent mb-2 select-none">&nbsp;</div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight mb-6">
          Escalamos tu negocio con IA sin perder el toque humano
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Te ayudamos a recuperar tu tiempo, mejorar la satisfacción de tus clientes y potenciar tus ingresos con soluciones a medida.
        </p>

        {/* Empty space where button was */}
        <div className="h-14 mb-10" />

        <div className="mt-16">
          {/* YouTube Video Embed */}
          <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/VCPGMjCW0is?controls=1&rel=0"
                title="Hypertek AI Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
