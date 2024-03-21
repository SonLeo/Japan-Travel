"use client";
import Banner from "../components/Banner";
import ServicesFaq from "../components/services/Fag";
import Services from "../components/services/Services";

const ServicesPage = () => {
  return (
    <>
      <Banner content="Services" />
      <Services />
      <ServicesFaq />
    </>
  );
};

export default ServicesPage;
