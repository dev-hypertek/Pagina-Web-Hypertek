"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Componente para cada item de FAQ
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown
  style={{ color: "#9dcc30" }}
  className={`h-5 w-5 transition-transform ${
    isOpen ? "transform rotate-180" : ""
  }`}
/>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

// Componente para cada dato de contacto
interface ContactItemProps {
  icon: JSX.Element;
  text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => (
  <li className="flex items-center justify-center text-white text-xs">
    <span className="mr-2">{icon}</span>
    <span>{text}</span>
  </li>
);

// Íconos reutilizables
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a2 2 0 011.832 1.22l1.2 2.4a2 2 0 01-.493 2.11l-1.51 1.51a11.037 11.037 0 005.516 5.516l1.51-1.51a2 2 0 012.11-.493l2.4 1.2A2 2 0 0121 16.72V20a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 4H8m8-8H8" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8"
    />
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10.5S15.364 2 12 2 4 7.5 4 11.5 12 22 12 22z" />
  </svg>
);

// Componente principal de FAQ que organiza cada sección
export const FaqSection = () => {
  const faqs = [
    {
      id: "faq-1",
      question: "¿Cómo la IA puede ayudar a mi negocio?",
      answer:
        "Simple, desarrollamos una solución que haga lo mismo que están haciendo ahora pero 24/7 y con una performance mucho más alta.",
    },
    {
      id: "faq-2",
      question: "¿Cómo aseguran la privacidad de datos?",
      answer:
        "Explicado de manera muy simple, jamás vamos a compartirle ningún dato confidencial de tu negocio a un AI Agent, con eso logramos evitar al 100% cualquier problema de privacidad.",
    },
    {
      id: "faq-3",
      question: "¿Cuál es la inversión requerida?",
      answer:
        "Esto dependería de tus necesidades, objetivos y volumen de negocio, pero para que tengas una idea, pueden ir desde 1000 a 3000 USD.",
    },
  ];

  return (
<section className="py-20 bg-[#19191a]" id="faq">
  <div className="container-custom">
    {/* Sección de FAQ */}
    <div className="text-center mb-12">
      <span className="inline-block text-[#9dcc30] font-medium mb-3">FAQ</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Las respuestas a tus preguntas están aquí
      </h2>
    </div>
    
    <div className="max-w-3xl mx-auto mb-16">
      {faqs.map((faq) => (
        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
        {/*
        // Bloque de Llamado a la acción "¿Qué esperas? Empezar ahora" comentado:
        <div className="py-12 px-6 bg-black/30 rounded-xl text-center relative overflow-hidden mb-12">
          <div className="absolute right-10 bottom-0 w-32 h-32 opacity-50 md:opacity-100">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="100" cy="100" r="100" fill="#ac1f7c" fillOpacity="0.2" />
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">¿Qué esperas?</h3>
            <p className="text-xl md:text-2xl font-bold text-white mb-4">
              El mejor momento para empezar es ahora
            </p>
            <a
              href="https://cal.com/gapfixersai/20min"
              className="button-primary inline-block text-sm md:text-base py-2 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Empezar ahora
            </a>
          </div>
        </div>
        */}

        {/* Sección de Datos de Contacto - con estilos más pequeños */}
        <div>
        <br />
        <br />
        <br />
        <br />
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
            Datos de contacto
          </h2>
          <ul className="space-y-2 max-w-xs mx-auto">
            <ContactItem icon={<PhoneIcon />} text="(57) 318 691 72 63" />
            <ContactItem icon={<PhoneIcon />} text="(57) 318 691 72 63" />
            <ContactItem icon={<EmailIcon />} text="hola@proyectow.co" />
            <ContactItem icon={<LocationIcon />} text="Bogotá, Colombia." />
          </ul>
        </div>
      </div>
    </section>
  );
};
