"use client";

import Link from "next/link";
import { Play, ChevronRight } from "lucide-react";
import { useRef, useState, useCallback, useEffect } from "react";

// --- Interfaces (sin cambios) ---
interface ServiceProps {
  title: string;
  description: string;
  tag: string;
  videoUrl: string;
  ctaLink: string;
  isReversed: boolean;
}

interface Service {
  id: string;
  title: string;
  description: string;
  tag: string;
  videoUrl: string;
  ctaLink: string;
}

// --- Componente de Servicio Individual ---
const ServiceItem = ({ title, description, tag, videoUrl, ctaLink, isReversed }: ServiceProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const isTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsTextTruncated(isTruncated);
    }
  }, [description]);

  const handleVideoEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  }, []);

  const handleVideoLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleShowMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowFullDescription(true);
  };

  const handleShowLess = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowFullDescription(false);
  };

  return (
    <div className="py-20 border-b border-gray-200/50 last:border-b-0 relative z-10">
      <div className={`container-custom flex flex-col gap-8 items-center ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {/* Columna de Texto */}
        <div className="w-full md:w-1/2 px-4">
          <div className="mb-4">
            <span className="inline-block rounded bg-[#bbd735]/10 px-3 py-1 text-xs font-medium text-[#19191a]">
              {tag}
            </span>
          </div>
          <h3 className="mb-4 text-3xl md:text-4xl font-extrabold text-gray-900">
            {title}
          </h3>

          <div className="relative">
            {/* Descripción normal */}
            <div className={`${showFullDescription ? 'hidden' : 'block'}`}>
              <p ref={textRef} className="mb-6 text-gray-700 line-clamp-4 md:line-clamp-none">
                {description}
              </p>
              {isTextTruncated && !showFullDescription && (
                <button
                  className="mt-2 text-sm text-[#bbd735] hover:underline"
                  onClick={handleShowMore}
                >
                  Leer más
                </button>
              )}
            </div>

            {/* Descripción expandida */}
            {showFullDescription && (
              <div className="mb-6">
                <p className="text-gray-700">{description}</p>
                <button
                  className="mt-2 text-sm text-[#19191a] hover:underline"
                  onClick={handleShowLess}
                >
                  Leer menos
                </button>
              </div>
            )}
          </div>

          <Link
            href={ctaLink}
            className="inline-flex items-center mt-4 font-medium text-[#19191a] hover:text-[#bbd735]/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Saber más <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Columna de Video */}
        <div className="w-full md:w-1/2 px-4">
  {/* Contenedor externo: mantiene redondeo, overflow y sombra */}
  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
    {/* Contenedor interno: aplica la transformación */}
    <div
      className="transform transition-transform duration-300 hover:scale-[1.02]"
      onMouseEnter={handleVideoEnter}
      onMouseLeave={handleVideoLeave}
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="h-full w-full object-cover rounded-xl transition-opacity duration-500"
        preload="metadata"
        poster={videoUrl.replace('.mp4', '.jpg')}
      >
        <source src={videoUrl} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div
        className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-300 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      >
        {!isPlaying && (
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#bbd735]/60 text-white backdrop-blur">
            <Play className="ml-1 h-6 w-6" />
          </span>
        )}
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

// --- Componente ServicesSection ---
export const ServicesSection = () => {
  const services: Service[] = [
    { id: "service-1", title: "Desarrollo de IA a medida", description: "Creamos soluciones de Inteligencia Artificial personalizadas específicamente para su negocio. Identificamos sus necesidades únicas y desarrollamos sistemas inteligentes que automatizan procesos, mejoran la toma de decisiones y generan valor real. Nuestras soluciones se integran perfectamente con sus sistemas existentes, minimizando disrupciones mientras maximizan el impacto.", tag: "IA Personalizada", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://www.hypertek.com.co/#contact" },
    { id: "service-2", title: "Automatización Inteligente de procesos", description: "Transformamos sus operaciones más complejas con automatización potenciada por IA. Nuestros sistemas reducen errores, aceleran procesos operativos y escalan sin esfuerzo con el crecimiento de su negocio. Identifique las áreas de mayor impacto y permítanos diseñar una solución que elimine tareas manuales repetitivas, liberando a su equipo para enfocarse en actividades de mayor valor.", tag: "Automatización", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://www.hypertek.com.co/#contact" },
    { id: "service-3", title: "Chatbots de voz y conversacionales", description: "Implementamos asistentes virtuales inteligentes que transforman la interacción con sus clientes. Nuestros chatbots entienden el lenguaje natural, aprenden de cada interacción y proporcionan respuestas precisas y personalizadas. Mejore la experiencia del cliente, reduzca costos de soporte y atienda consultas 24/7 con soluciones conversacionales avanzadas que representan perfectamente su marca.", tag: "Asistentes IA", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://www.hypertek.com.co/#contact" },
    { id: "service-4", title: "Analítica de datos automatizada", description: "Convertimos sus datos en insights accionables con soluciones analíticas impulsadas por IA. Nuestros sistemas automatizan la recopilación, procesamiento y visualización de datos, revelando patrones ocultos y oportunidades de negocio. Implementamos métricas claras que demuestran el impacto real de nuestras soluciones, permitiéndole tomar decisiones basadas en datos concretos y medibles.", tag: "Data Analytics", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://www.hypertek.com.co/#contact" },
    { id: "service-5", title: "Chatbots de generación de reportes", description: "Obtenga informes y análisis a demanda mediante interfaces conversacionales intuitivas. Nuestros chatbots especializados en reportería permiten a cualquier miembro de su equipo solicitar y recibir informes complejos utilizando lenguaje natural. Transforme la manera en que su organización accede y utiliza la información, democratizando el acceso a los datos y acelerando la toma de decisiones.", tag: "Reportes IA", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://www.hypertek.com.co/#contact" }
  ];

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
