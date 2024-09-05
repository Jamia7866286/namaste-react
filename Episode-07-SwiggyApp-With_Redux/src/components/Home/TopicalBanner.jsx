import React from "react";
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TopicalBannerImage from "./TopicalBannerImage";
import RestaurantCard from "./RestaurantCard";

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
    arrows: true,
    useCSS: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1,
                infinite: false,
                arrows: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1.4,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.3,
                slidesToScroll: 1,
                arrows: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        }
    ]
};

const TopicalBanner = (props) => {
    const {gridElements, header} = props?.currentCard?.card?.card || {}
    const {restaurants} = gridElements?.infoWithStyle || {}

    return (
        <div className="relative w-9/12 m-auto pt-10 mb-2">
            <div className="lg:text-2xl text-lg font-bold mb-6">
                {header?.title}
            </div>
            <Slider
                className=""
                {...settings}
                // ref={(slider) => (sliderRef.current = slider)}
            >
                {
                    restaurants?.map((topRestaurantsItem, index)=>(
                        <div key={index}>
                            <RestaurantCard currentCard={topRestaurantsItem?.info} />
                        </div>
                    ))
                }
            </Slider>

            <>
                <div
                    className="absolute top-10 right-20 cursor-pointer"
                    // onClick={goToPrevSlide}
                >
                    <div className="bg-gray-200 rounded-xl p-1">
                        <GrFormPreviousLink size={22} />
                    </div>
                </div>
                <div
                    className="absolute top-10 right-10 cursor-pointer"
                    // onClick={goToNextSlide}
                >
                    <div className="bg-gray-200 rounded-xl p-1">
                        <GrFormNextLink size={22} />
                    </div>
                </div>
            </>
        </div>
    );
};

export default TopicalBanner;
