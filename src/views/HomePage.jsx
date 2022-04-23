import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { getAboutSection, getModernSection, getProductsSection, getStores } from "../services/services";
import AboutSection from "./sections/AboutSection";
import ModernSection from "./sections/MordernSection";
import ProductList from "./sections/ProductList";
import ServicesSection from "./sections/ServicesSection";

const HomePage = () => {
    useEffect(() => {
        getAboutSection()
        getModernSection()
    })
    return (
        <div className="overflow-x-hidden">
            <div>
            <HeroSection></HeroSection>
            </div>
            <div className="md:p-16 p-4">
            <AboutSection></AboutSection>
            </div>
            <div className="bg-slate-400 md:p-16 p-4">
                <ServicesSection></ServicesSection>
            </div>
            <div className="md:p-16 p-4">
                <ModernSection></ModernSection>
            </div>
            <div className="md:p-16 p-4">
                <ProductList></ProductList>
            </div>
        </div>
    )

}

export default HomePage