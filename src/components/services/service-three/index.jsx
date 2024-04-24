import PricingArea from "@/common/pricing-area";
import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import ProcessArea from "./process-area";
import ServiceArea from "./service-area";
import { Footer } from "antd/es/layout/layout";

const ServiceThree = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ServiceArea />
      <ProcessArea />
      <PricingArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default ServiceThree;
