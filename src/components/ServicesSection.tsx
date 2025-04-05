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
    { id: "service-1", title: "Creamos a tu clon digital...", description: "Atiende a miles de clientes al mismo tiempo con un clon digital. Utilizamos IA avanzada para crear una representación perfecta de tu negocio que puede interactuar con clientes potenciales, responder preguntas comunes y guiarlos a través del proceso de venta. Nunca más perderás una oportunidad por falta de tiempo o recursos.", tag: "AI Agents", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://youtu.be/d2smz_1L2_0?list=RD44pt8w67S8I" },
    { id: "service-2", title: "Convertimos cada clic en una conversión", description: "Desarrollamos páginas de aterrizaje optimizadas para convertir visitantes en clientes. Cada elemento está diseñado estratégicamente para captar la atención, comunicar valor y generar acción. Combinamos diseño atractivo con mensajes persuasivos y llamados a la acción claros para maximizar tus tasas de conversión.", tag: "Landing Pages", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://youtu.be/d2smz_1L2_0?list=RD44pt8w67S8I" },
    { id: "service-3", title: "Automatizamos tu trabajo repetitivo", description: "Conectamos tus herramientas y sistemas para que trabajen juntos sin esfuerzo. Eliminamos tareas manuales y procesos redundantes, permitiéndote enfocarte en lo que realmente importa. Desde seguimiento de leads hasta gestión de clientes, creamos flujos de trabajo eficientes que ahorran tiempo y reducen errores.", tag: "Automations & Integrations", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://youtu.be/d2smz_1L2_0?list=RD44pt8w67S8I" },
    { id: "service-4", title: "Análisis de datos inteligente", description: "Transformamos tus datos en insights accionables. Implementamos soluciones de analítica avanzada para identificar patrones, tendencias y oportunidades que de otra manera pasarían desapercibidos. Toma decisiones informadas basadas en datos reales y métricas relevantes para tu negocio.", tag: "Data Analytics", videoUrl: "/videos/854053-hd_1920_1080_25fps.mp4", ctaLink: "https://youtu.be/d2smz_1L2_0?list=RD44pt8w67S8I" }
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
            Nuestras Soluciones de Alto Rendimiento
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Soluciones personalizadas para ayudarte a vender más, mejor y con menos esfuerzo.
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
