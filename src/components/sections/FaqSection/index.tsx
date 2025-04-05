"use client";

import { memo } from "react";
import FaqItem from "./FaqItem";
import ContactItem from "./ContactItem";
import { PhoneIcon, EmailIcon, LocationIcon } from "./ContactIcons";
import { faqs } from "@/data/faq";

const FaqSection = () => {
  return (
    <section className="py-20 bg-[#19191a]" id="faq">
      <div className="container-custom">
        {/* Sección de FAQ */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#9dcc30] font-medium mb-3">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas frecuentes sobre nuestras soluciones
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Sección de Datos de Contacto */}
        <div>
          <br />
          <br />
          <br />
          <br />
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
            Datos de contacto
          </h2>
          <ul className="space-y-2 max-w-xs mx-auto">
            <ContactItem icon={<PhoneIcon />} text="+57 302 323 5255" />
            <ContactItem icon={<EmailIcon />} text="contacto@hypertek.com" />
            <ContactItem icon={<LocationIcon />} text="Bogotá, Colombia." />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default memo(FaqSection);
