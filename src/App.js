import React from "react";
import Topbar from "./components/Topbar";
import MainHeader from "./components/MainHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import OurTeam from "./components/OurTeam";
import Contacts from "./components/Contacts";
import MainFooter from "./components/MainFooter";
import { GlobalStorage } from "./Context/GlobalContext";

const App = () => {
  return (
    <GlobalStorage>
      <Topbar />
      <MainHeader />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <Testimonials />
      <Cta />
      <OurTeam />
      <Contacts />
      <MainFooter />
    </GlobalStorage>
  );
};

export default App;
