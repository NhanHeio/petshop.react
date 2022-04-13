import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="mx-auto md:w-3/5 w-full pt-40">
            <Slider {...settings}>
                <div className="h-32 bg-red-50">
                    <h3>1</h3>
                </div>
                <div className="h-32 bg-red-100">
                    <h3>2</h3>
                </div>
                <div className="h-32 bg-red-200">
                    <h3>3</h3>
                </div>
                <div className="h-32 bg-red-300">
                    <h3>4</h3>
                </div>
                <div className="h-32 bg-red-400">
                    <h3>5</h3>
                </div>
                <div className="h-32 bg-red-500">
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default CarouselComponent