"use client";

export const ComparisonSection = () => {
  const withoutPoints = [
    "No tienes tiempo",
    "Muchas distracciones",
    "Clientes se van a la competencia",
    "Ineficiencia de los procesos internos",
    "No llegas a contestar las consultas",
  ];

  const withPoints = [
    "Mejora en la productividad",
    "Ahora tus clientes son atendidos 24/7",
    "Mejor tasa de conversión",
    "Datos medibles de cada step",
    "Mejor ROI para tus ads",
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#f6f7f6" }} id="why-us">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block text-[#9dcc30] font-medium mb-3">Beneficios</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Sin HyperTek - Ahora con el estilo que tenía "Con HyperTek" */}
          <div className="rounded-xl p-8 bg-[#f3f2f3] shadow-lg border border-gray-300 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col h-full">
              <div className="pb-6 mb-6 border-b border-gray-300"> 
                <h3 className="text-3xl font-extrabold text-black mb-2 text-center">Sin HyperTek</h3>
                <p className="text-gray-700 text-center text-sm font-medium">Desafíos actuales</p>
              </div>
              
              <ul className="space-y-5 flex-grow">
                {withoutPoints.map((point) => (
                  <li key={point} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-gray-700 text-center font-medium">
                  Oportunidades perdidas y tiempo malgastado
                </p>
              </div>
            </div>
          </div>

          {/* Con HyperTek - Ahora con el estilo que tenía "Sin HyperTek" */}
          <div className="rounded-xl p-8 bg-white shadow-lg border border-gray-200 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex flex-col h-full">
              <div className="pb-6 mb-6 border-b border-gray-200">
                <h3 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Con HyperTek</h3>
                <p className="text-gray-500 text-center text-sm font-medium">Soluciones eficaces</p>
              </div>
              
              <ul className="space-y-5 flex-grow">
                {withPoints.map((point) => (
                  <li key={point} className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 bg-[#e6f4cc] rounded-full flex items-center justify-center mr-3 mt-0.5">
  <svg className="w-3 h-3 text-[#9dcc30]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
</div>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 text-center italic">
                  Optimiza tu negocio y aumenta tus ventas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};