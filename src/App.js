import React from "react";
import Topbar from "./Components/Topbar";
import MainHeader from "./Components/MainHeader";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import Portfolio from "./Components/Portfolio";
import Testimonials from "./Components/Testimonials";
import Cta from "./Components/Cta";
import OurTeam from "./Components/OurTeam";
import Contacts from "./Components/Contacts";
import MainFooter from "./Components/MainFooter";
import Sidebar from "./Components/Sidebar";
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
      <Sidebar />
    </GlobalStorage>
  );
};

export default App;
