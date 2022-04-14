import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import SectionTitle from "../../components/custom/SectionTitle";
import { ServicesCard } from "../../components/homepage/ServicesCard";

//
const ServicesSection = () => {

  const settings = {
    dots: true,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    adaptiveHeight: false
  }
  const image = "https://images.unsplash.com/photo-1649185885081-91f76cb326bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <section className="container mx-auto">
      <div className="text-center">
        <div className="uppercase font-light mb-2">
              <small>About Company</small>
        </div>
            <div className="rounded-lg ">
              <SectionTitle></SectionTitle>
            </div>
        <div className="prose text-center mx-auto">
    You dont have to worry about the results
        </div>
      </div>
      <div className="mt-10">
        <SlickSlider {...settings}>
        <ServicesCard></ServicesCard>
        {/* <ServicesCard></ServicesCard>
        <ServicesCard></ServicesCard> */}
        </SlickSlider>
      </div>
          
    </section>
  );
};

export default ServicesSection;
