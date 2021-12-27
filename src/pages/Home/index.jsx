import React from "react";
import Hero from "components/Home/Hero";
import About from "components/Home/About";
import Services from "components/Home/Services";
import Clients from "components/Home/Clients";
import Portfolio from "components/Home/Portfolio";
import Testimonials from "components/Home/Testimonials";
import Cta from "components/Home/Cta";
import OurTeam from "components/Home/OurTeam";
import Contacts from "components/Home/Contacts";

import Topbar from "components/common/Topbar";
import MainFooter from "components/common/MainFooter";
import Sidebar from "components/common/Sidebar";
import MainHeader from "components/common/Headers/MainHeader";
import SentPopup from "components/common/Modals/SentPopup";

const Home = () => {
  return (
    <>
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
      <SentPopup />
    </>
  );
};

export default Home;
