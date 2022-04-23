import { ArrowRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/custom/SectionTitle";
import TinyTitle from "../../components/custom/TinyTitle";

//
const ModernSection = () => {
  const [data, setData] = useState({})

  const getData = () => {
    const response = sessionStorage.getItem('morden')
    setData(JSON.parse(response))
  }
  useEffect(() => {
    getData()
  }, [])
  const image =
    "https://images.unsplash.com/photo-1649185885081-91f76cb326bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <section className="">
      <div className="">
        {/* row for about section  */}
        { data.attributes && <div className="md:grid md:grid-cols-2 gap-4">
          <div className="p-5 md:p-10">
            <div className="">
              <img
                height={60}
                className="w-full rounded-tr-large h-96 object-cover"
                alt="imag"
                src={data.attributes.featuredImage ? data.attributes.featuredImage.data.attributes.url : image}
              />
            </div>
          </div>
          <div className="p-5 md:p-10">
            <TinyTitle text={'Modern is key'}></TinyTitle>
            <div>
              <SectionTitle text=
              {`${data.attributes.title}`}></SectionTitle>
            </div>
            <div className="prose">
              {`${data.attributes.description}`}
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
        </div>}
      </div>
    </section>
  );
};

export default ModernSection;
