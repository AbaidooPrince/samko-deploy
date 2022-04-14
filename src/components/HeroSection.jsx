
import React, { useEffect } from "react";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import SliderItem from './SliderItem'
// import axios from "axios";

const HeroSection = () => {
    // [sliders, setSliders] = useState([])
    // const getHeroSectionData = async () => {
    //     const response = await axios.get('')
    // }
    const settings = {
      dots: true,
      autoPlay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000
    }

    useEffect ( () => {
        
    }, [])
    return (
        <div className="overflow-hidden h-screen">
        <SlickSlider {...settings}>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
            <SliderItem></SliderItem>
        </SlickSlider>
        </div>
    )

}

export default HeroSection