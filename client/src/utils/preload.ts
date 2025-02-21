import { useEffect } from "react";

export const preloadComponent = (componentPath: string) => {
  const script = document.createElement("link");
  script.rel = "modulepreload";
  script.href = componentPath;
  document.head.appendChild(script);
};

// Usage in Home.tsx
useEffect(() => {
  // Preload below-the-fold components after initial render
  preloadComponent("/src/components/sections/Portfolio.tsx");
  preloadComponent("/src/components/ContactForm/ContactForm.tsx");
}, []);
