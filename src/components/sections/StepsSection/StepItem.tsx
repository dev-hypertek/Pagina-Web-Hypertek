"use client";

import { memo } from "react";
import { StepItemProps } from "@/types";

const StepItem = ({ number, title, description, isLast }: StepItemProps) => {
  return (
    <div className="flex gap-6 relative">
      {/* Número con círculo */}
      <div className="flex-shrink-0 relative z-10">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-700 text-2xl font-bold border-2 border-gray-300">
          {number}
        </div>
        
        {/* Línea conectora vertical */}
        {!isLast && (
          <div className="absolute left-1/2 top-14 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 to-gray-200 transform -translate-x-1/2"></div>
        )}
      </div>
      
      {/* Contenido del paso */}
      <div className="pt-2 pb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default memo(StepItem);
