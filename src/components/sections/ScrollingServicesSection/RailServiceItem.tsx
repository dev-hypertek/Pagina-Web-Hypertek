"use client";

import React from "react";
import Image from "next/image";
import { memo } from "react";
import { RailServiceItemProps } from "@/types";

const RailServiceItem = ({ imageUrl, altText, text }: RailServiceItemProps) => {
  return (
    <div className="flex-shrink-0 w-32 mx-4 flex flex-col items-center text-center">
      {/* Contenedor de la Imagen */}
      <div className="relative w-20 h-20 mb-2">
        <Image
          src={imageUrl}
          alt={altText}
          fill={true}
          className="object-contain"
          sizes="(max-width: 768px) 15vw, 10vw"
          title={altText}
          loading="lazy"
          priority={false}
        />
      </div>
      {/* Texto debajo de la imagen */}
      <p className="text-xs font-medium text-gray-600 leading-tight">
        {text}
      </p>
    </div>
  );
};

export default memo(RailServiceItem);
