
import React, { useEffect, useState } from "react";
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import SliderItem from './SliderItem'
import AboutSection from '../views/sections/AboutSection'
import { getSliders } from "../services/services";
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
    const [data, setData] = useState([])
  
    const getData = () => {
      getSliders()
      const response = sessionStorage.getItem('sliders')
      setData(JSON.parse(response))
    //   setStores(response.attributes.products.data)
    }
    // const getStores = () => {
    //     const response = sessionStorage.getItem('stores')
    //     setStores(JSON.parse(response))
    //   }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="">
        <SlickSlider {...settings}>
            {data && data.map(item =><SliderItem title={item.attributes.title}
            subtitle={item.attributes.subtitle}
            image={item.attributes.image.data.attributes.url}
            key={item.id}></SliderItem>)
            }
        </SlickSlider>
        </div>
    )

}

export default HeroSection