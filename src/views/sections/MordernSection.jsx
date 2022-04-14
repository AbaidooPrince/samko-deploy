import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/custom/SectionTitle";
import TinyTitle from "../../components/custom/TinyTitle";
import ServiceList from "../../components/ServiceList";

//
const ModernSection = () => {
  const image =
    "https://images.unsplash.com/photo-1649185885081-91f76cb326bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <section className="container mx-auto">
      <div className="">
        {/* row for about section  */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="">
            <div className="">
              <img
                height={60}
                className="w-full rounded-bl-large h-96 object-cover"
                alt="imag"
                src={image}
              />
            </div>
          </div>
          <div className="p-10">
            <TinyTitle text={'About us'}></TinyTitle>
            <div>
              <SectionTitle text={'Quality Airconditioning Services for you'}></SectionTitle>
            </div>
            <div className="prose">
              Transform images and videos to load faster with no visual
              degradation, automatically generate image and video variants, and
              deliver high quality responsive experiences to increase
              conversions.
            </div>
            <div className="">
            <Link to="/">
              <div className="flex text-lg">
                More Info
                <ArrowRightIcon className="h-6 ml-2"></ArrowRightIcon>
              </div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSection;
