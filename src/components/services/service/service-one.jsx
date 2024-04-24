import PricingArea from "@/common/pricing-area";
import Specialists from "@/common/specialists";
import DirectContactUs from "@/components/forms/direct-contact-us";
import Footer from "@/layout/footer/footer";
import HeaderTwo from "@/layout/header/header-two";
import Banner from "./banner";
import ServiceArea from "./service-area";

const ServiceOne = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <ServiceArea />
      <Specialists />
      <PricingArea />
      <DirectContactUs />
      <Footer />
    </>
  );
};

export default ServiceOne;
