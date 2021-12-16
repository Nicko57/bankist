import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import InfoBanking from "../components/infoSections/InfoBanking";
import InfoLogin from "../components/infoSections/InfoLogin";
import InfoSiginUp from "../components/infoSections/InfoSiginUp";
import Services from "../components/infoSections/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <InfoBanking />
      <InfoLogin />
      <Services />
      <InfoSiginUp />
      <Footer />
    </>
  );
};

export default Home;
