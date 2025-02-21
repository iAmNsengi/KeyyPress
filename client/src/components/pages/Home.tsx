import { Suspense, lazy } from "react";
import Header from "../Header/Header";
import LoadingSpinner from "../ui/LoadingSpinner";

// Lazy load non-critical sections
const Services = lazy(() => import("../sections/Services"));
const Portfolio = lazy(() => import("../sections/Portfolio"));
const ContactCTA = lazy(() => import("../sections/ContactCTA"));
const WhyChooseUs = lazy(() => import("../sections/WhyChooseUs"));
const ContactForm = lazy(() => import("../ContactForm/ContactForm"));
const Footer = lazy(() => import("../Footer/Footer"));

const Home = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <ContactForm />
        <ContactCTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
