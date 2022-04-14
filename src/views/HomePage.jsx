import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "./sections/AboutSection";
import ModernSection from "./sections/MordernSection";
import ProductList from "./sections/ProductList";
import ServicesSection from "./sections/ServicesSection";

const HomePage = () => {
    return (
        <div className="">
            <div>
            <HeroSection></HeroSection>
            </div>
            <div className="p-16">
            <AboutSection></AboutSection>
            </div>
            <div className="bg-slate-400 p-16">
                <ServicesSection></ServicesSection>
            </div>
            <div className="p-16">
                <ModernSection></ModernSection>
            </div>
            <div className="p-16">
                <ProductList></ProductList>
            </div>
        </div>
    )

}

export default HomePage