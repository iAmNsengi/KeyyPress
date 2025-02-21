import { Suspense, lazy } from "react";
import Header from "../Header/Header";

// Lazy load non-critical sections
const Services = lazy(() => import("../sections/Services"));
const Portfolio = lazy(() => import("../sections/Portfolio"));
const ContactCTA = lazy(() => import("../sections/ContactCTA"));
const WhyChooseUs = lazy(() => import("../sections/WhyChooseUs"));
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
      {/* Header is not lazy loaded as it's critical */}
      <Header />

      {/* Each section has its own Suspense boundary */}
      <Suspense fallback={<SectionLoader />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>

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
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
