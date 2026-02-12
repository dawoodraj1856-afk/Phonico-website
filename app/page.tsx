import { AccordionDemo } from "./components/Accordian";
import Connectivity from "./Home/connectivity";
import Footer from "./Home/Footer";
import Header from "./Home/header";
import Hero from "./Home/hero";
import Pakage from "./Home/pakage";
import Slider from "./Home/Slider";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Pakage />
      <Connectivity />
      <Slider />
      <AccordionDemo />
      <Footer />
    </div>
  );
};

export default Home;
