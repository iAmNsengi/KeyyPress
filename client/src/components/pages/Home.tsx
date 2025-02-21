import Header from "../Header/Header";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import ContactCTA from "../sections/ContactCTA";
import WhyChooseUs from "../sections/WhyChooseUs";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <ContactForm />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Home;
