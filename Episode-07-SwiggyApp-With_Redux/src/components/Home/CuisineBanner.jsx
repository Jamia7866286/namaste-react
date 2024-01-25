import React from "react";
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Slider from "react-slick";
import TopicalBannerImage from "./TopicalBannerImage";


const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                    infinite: false,
                    // dots: true,
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
    

const CuisineBanner = () => {
   

    return (
        <div className="relative w-9/12 m-auto bg-slate-50 mt-6 mb-2">
            <div className="lg:text-2xl text-lg font-bold mb-6">
                <span>Naseem</span> 
                <span className="ml-1">what's on your mind?</span>
            </div>
             <Slider
                className=""
                {...settings}
                // ref={(slider) => (sliderRef.current = slider)}
            >
                {[1,2,3,4,5,6,7,8,9].map((info) => ( 
                    <div className="">
                        <TopicalBannerImage imgStyle={{ width: '124px', height: '160px' }} />
                    </div>
                ))} 
             </Slider> 

            <div
                className="absolute top-0 right-20 cursor-pointer"
                // onClick={goToPrevSlide}
            >
                <div className="bg-gray-200 rounded-xl p-1">
                    <GrFormPreviousLink size={22} />
                </div>
            </div>
            <div
                className="absolute top-0 right-10 cursor-pointer"
                // onClick={goToNextSlide}
            >
                <div className="bg-gray-200 rounded-xl p-1">
                    <GrFormNextLink size={22} />
                </div>
            </div>
        </div>
    );
}

export default CuisineBanner