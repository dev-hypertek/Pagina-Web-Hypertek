"use client";

import { memo } from "react";

interface ComparisonCardProps {
  title: string;
  subtitle: string;
  points: string[];
  footer: string;
  isPositive: boolean;
}

const ComparisonCard = ({ title, subtitle, points, footer, isPositive }: ComparisonCardProps) => {
  const cardClasses = isPositive
    ? "rounded-xl p-8 bg-white shadow-lg border border-gray-200 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    : "rounded-xl p-8 bg-[#f3f2f3] shadow-lg border border-gray-300 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl";

  const borderClasses = isPositive
    ? "border-gray-200"
    : "border-gray-300";

  const textClasses = isPositive
    ? "text-gray-600"
    : "text-gray-800 font-medium";

  return (
    <div className={cardClasses}>
      <div className="flex flex-col h-full">
        <div className={`pb-6 mb-6 border-b ${borderClasses}`}>
          <h3 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">{title}</h3>
          <p className="text-gray-500 text-center text-sm font-medium">{subtitle}</p>
        </div>
        
        <ul className="space-y-5 flex-grow">
          {points.map((point) => (
            <li key={point} className="flex items-start">
              {isPositive ? (
                <div className="flex-shrink-0 w-6 h-6 bg-[#e6f4cc] rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-[#9dcc30]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              <span className={textClasses}>{point}</span>
            </li>
          ))}
        </ul>
        
        <div className={`mt-8 pt-6 border-t ${borderClasses}`}>
          <p className="text-gray-500 text-center italic">
            {footer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ComparisonCard);
