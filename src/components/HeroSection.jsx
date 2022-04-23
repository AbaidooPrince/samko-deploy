
import React, { useEffect } from "react";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import SliderItem from './SliderItem'
import AboutSection from '../views/sections/AboutSection'
// import axios from "axios";

const HeroSection = () => {
    // [sliders, setSliders] = useState([])
    // const getHeroSectionData = async () => {
    //     const response = await axios.get('')
    // }
    const settings = {
      dots: true,
      autoPlay: true,
      initialSlide: 0,
      slidesToShow: 1,
      infinite: true,
      slide: 'div',
      slidesToScroll: 1,
      speed: 1000,
      easing: 'linear',
      autoplaySpeed: 2000
    }

    useEffect ( () => {
        
    }, [])
    return (
        <div className="">
        <SlickSlider {...settings}>
            <SliderItem></SliderItem>
            <AboutSection></AboutSection>
            <SliderItem></SliderItem>
        </SlickSlider>
        </div>
    )

}

export default HeroSection