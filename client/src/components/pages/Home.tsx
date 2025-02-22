import { Suspense, lazy, useEffect } from "react";
import Header from "../Header/Header";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import ClientLogos from "../sections/ClientLogos";
import Team from "../sections/Team";

// Lazy load only below-the-fold components
const Portfolio = lazy(() => import("../sections/Portfolio"));
const ContactCTA = lazy(() => import("../sections/ContactCTA"));
const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
const Footer = lazy(() => import("../Footer/Footer"));

// Smaller loading component for sections
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-600"></div>
  </div>
);

// Pre-load critical images
const preloadImages = () => {
  const images = ["/founder.jpeg", "/fabrice.jpg", "/johnson.jpeg"];
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const Home = () => {
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <div className="bg-slate-900">
      {/* Critical above-the-fold content */}
      <Header />

      {/* Defer non-critical sections with loading boundaries */}
      <Suspense fallback={<SectionLoader />}>
        <Services />
        <WhyChooseUs />
      </Suspense>

      {/* Group related sections to reduce Suspense boundaries */}
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
        <Team />
      </Suspense>

      {/* Group bottom sections */}
      <Suspense fallback={<SectionLoader />}>
        <ContactForm />
        <ContactCTA />
        <ClientLogos />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
