import Header from "../Header/Header";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import ContactCTA from "../sections/ContactCTA";
import WhyChooseUs from "../sections/WhyChooseUs";

const Home = () => {
  return (
    <div className="bg-slate-900">
      <Header />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <ContactCTA />
    </div>
  );
};

export default Home;
