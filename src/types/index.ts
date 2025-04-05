// Servicios
export interface Service {
  id: string;
  title: string;
  description: string;
  tag: string;
  videoUrl: string;
  ctaLink: string;
}

export interface ServiceProps {
  title: string;
  description: string;
  tag: string;
  videoUrl: string;
  ctaLink: string;
  isReversed: boolean;
}

// Rail Services (Servicios en scrolling)
export interface RailService {
  id: string;
  imageUrl: string;
  altText: string;
  text: string;
}

export interface RailServiceItemProps {
  imageUrl: string;
  altText: string;
  text: string;
}

// FAQ
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Steps
export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface StepItemProps extends Step {
  isLast: boolean;
}

// Comparison
export interface ComparisonData {
  withoutPoints: string[];
  withPoints: string[];
}

// Contact
export interface ContactItem {
  icon: JSX.Element;
  text: string;
}
