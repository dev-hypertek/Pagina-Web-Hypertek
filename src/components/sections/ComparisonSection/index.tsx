"use client";

import { memo } from "react";
import ComparisonCard from "./ComparisonCard";
import { comparisonData } from "@/data/comparison";

const ComparisonSection = () => {
  const { withoutPoints, withPoints } = comparisonData;

  return (
    <section className="py-20" style={{ backgroundColor: "#f6f7f6" }} id="why-us">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-[#9dcc30] font-medium mb-3">¿Por qué elegirnos?</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">Nuestras ventajas</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sin soluciones de IA */}
          <ComparisonCard
            title="Sin soluciones de IA"
            subtitle="Desafíos empresariales actuales"
            points={withoutPoints}
            footer="Ineficiencia operativa y oportunidades perdidas"
            isPositive={false}
          />

          {/* Con HyperTek */}
          <ComparisonCard
            title="Con HyperTek"
            subtitle="Soluciones eficaces"
            points={withPoints}
            footer="Optimice sus procesos y transforme su negocio"
            isPositive={true}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(ComparisonSection);
