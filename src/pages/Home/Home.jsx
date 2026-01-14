import React from "react";
import { SCContainerBody } from "./Home.styles";
import HomeHeroSection from "@components/HomeHeroSection/HomeHeroSection";
import HomeServicesSection from "@components/HomeServicesSection/HomeServicesSection";
import AppDownloadLink from "@components/AppDownloadLink/AppDownloadLink";
import Footer from "@components/Footer/Footer";

const Home = () => {
  return (
    <SCContainerBody>
      <HomeHeroSection />
      <HomeServicesSection />
      <AppDownloadLink /> <Footer />
    </SCContainerBody>
  );
};

export default Home;
