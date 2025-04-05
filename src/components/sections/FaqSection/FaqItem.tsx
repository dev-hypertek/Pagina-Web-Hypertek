"use client";

import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { memo } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Utilizamos useCallback para evitar recrear esta función en cada renderizado
  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown
          style={{ color: "#9dcc30" }}
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {/* Utilizamos un div con altura y opacidad animadas en lugar de condicional rendering */}
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(FaqItem);
