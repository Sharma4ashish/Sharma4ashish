import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { foodItems } from './Items';
import { CarouselItem } from './CarouselItem';


const MultiItemCarousel = () => {

  
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay:true,
  autoplayspeed:2000,
  responsive: [
    {
      breakpoint: 825,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 445,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
}
   
  return (
    <div className=''>
      <div className=' lg:pt-4 pt-1'>
              <Slider {...settings}>
              {foodItems.map((item)=>(
                                  
                    <CarouselItem image={item.image} title = {item.title} />
                    
              ))}
              
          </Slider>
      </div>
    </div>
  )
}

export default MultiItemCarousel

