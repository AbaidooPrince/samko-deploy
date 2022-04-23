import { ArrowRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/custom/SectionTitle";
import TinyTitle from "../../components/custom/TinyTitle";
import ServiceList from "../../components/ServiceList";
// import { getAboutSection } from "../../services/services";

//
const AboutSection = () => {
  const [data, setData] = useState({})

  const getData = () => {
    const response = sessionStorage.getItem('about')
    setData(JSON.parse(response))
  }
  useEffect(() => {
    getData()
  }, [])
  const image =
    "https://images.unsplash.com/photo-1649185885081-91f76cb326bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <section className="mx-auto">
      { data.attributes && <div className="">
        {/* row for about section  */}
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="p-5 md:p-10">
            <TinyTitle text={'About us'}></TinyTitle>
            <div>
              <SectionTitle text={`${data.attributes.title}`}></SectionTitle>
            </div>
            <div className="prose sm:prose sm:text-justify">
              {`${data.attributes.subtitle}`}
            </div>
            <div className="mt-5">
            <Link to="/">
              <div className="flex">
                More Info
                <ArrowRightIcon className="h-6 w-6 ml-2"></ArrowRightIcon>
              </div>
            </Link>
            </div>
          </div>
          <div className="p-5 md:p-10">
            <div className="">
              <img
                height={60}
                className="w-full md:rounded-tl-large rounded-br-large h-96 object-cover"
                alt="imag"
                src={data.attributes.featuredImage ? data.attributes.featuredImage.data.attributes.url : image}
              />
            </div>
          </div>
        </div>
      </div>}
      <div className="pt-16">
        <ServiceList></ServiceList>
      </div>
    </section>
  );
};

export default AboutSection;
