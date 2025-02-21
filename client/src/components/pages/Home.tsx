import { Suspense, lazy } from "react";
import Header from "../Header/Header";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import ClientLogos from "../sections/ClientLogos";

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

const Home = () => {
  return (
    <div className="bg-slate-900">
      {/* Critical components loaded immediately */}
      <Header />
      <Services />
      <WhyChooseUs />

      {/* Below-the-fold components lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactForm />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactCTA />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ClientLogos />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
