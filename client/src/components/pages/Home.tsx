import Header from "../Header/Header";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import Portfolio from "../sections/Portfolio";
import ContactCTA from "../sections/ContactCTA";

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
