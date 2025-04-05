"use client";

import Link from "next/link";
import { ChevronRight, Play } from "lucide-react";
import { memo } from "react";
import { ServiceProps } from "@/types";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import { useExpandableText } from "@/hooks/useExpandableText";

const ServiceItem = ({ title, description, tag, videoUrl, ctaLink, isReversed }: ServiceProps) => {
  const { videoRef, isPlaying, handleVideoEnter, handleVideoLeave } = useVideoPlayer();
  const { textRef, showFullDescription, isTextTruncated, handleShowMore, handleShowLess } = useExpandableText();

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

export default memo(ServiceItem);
