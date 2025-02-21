import { memo } from "react";

const ClientLogos = () => {
  const logos = [
    {
      src: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg",
      alt: "Google",
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
      alt: "Microsoft",
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/amazon-dark.svg",
      alt: "Amazon",
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/netflix-4.svg",
      alt: "Netflix",
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/uber-2.svg",
      alt: "Uber",
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/airbnb-1.svg",
      alt: "Airbnb",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#EA580C10,transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0F172A50,transparent_25%)]" />

      <div className="relative max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Trusted By <span className="text-orange-600">Industry Leaders</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          We've collaborated with renowned companies worldwide, delivering
          exceptional digital solutions that drive success.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden opacity-75">
        <div className="animate-scroll flex space-x-16 py-12">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center w-[150px] h-[60px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0"
              />
            </div>
          ))}
        </div>

        <div
          className="animate-scroll flex space-x-16 py-12"
          aria-hidden="true"
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={`duplicate-${idx}`}
              className="flex items-center justify-center w-[150px] h-[60px] grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer hover:opacity-100"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain filter brightness-0 invert hover:brightness-100 hover:invert-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ClientLogos);
