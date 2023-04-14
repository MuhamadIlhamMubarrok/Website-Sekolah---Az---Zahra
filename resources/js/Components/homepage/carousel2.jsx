import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = () => {
    const [slider] = useState([
        {
            caption: `3000+`,
            kuy: (
                <div className="mb-[50px] md:mb-0 h-[191px] md:h-[247px] w-[244px] md:w-[316px] bg-[#97DECE] rounded-[20px] mx-auto ">
                    <div className="bg-white rounded-[50%] w-[103px] md:w-[133px] h-[103px] md:h-[133px] ml-[-30px] mt-[-30px]"></div>
                </div>
            ),
        },
        {
            caption: `20+`,
            kuy: (
                <div className="mb-[50px] md:mb-0 h-[191px] md:h-[247px] w-[244px] md:w-[316px] bg-[#97DECE] rounded-[20px] mx-auto ">
                    <div className="bg-white rounded-[50%] w-[103px] md:w-[133px] h-[103px] md:h-[133px] ml-[-30px] mt-[-30px]"></div>
                </div>
            ),
        },
        {
            caption: `300+`,
            kuy: (
                <div className="mb-[50px] md:mb-0 h-[191px] md:h-[247px] w-[244px] md:w-[316px] bg-[#97DECE] rounded-[20px] mx-auto ">
                    <div className="bg-white rounded-[50%] w-[103px] md:w-[133px] h-[103px] md:h-[133px] ml-[-30px] mt-[-30px]"></div>
                </div>
            ),
        },
    ]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "w-full",
        arrows: true,
    };

    return (
        <div className="carousel px-[35px] pb-[40px] block md:hidden">
            <Slider {...settings}>
                {slider.map((item, index) => (
                    <div key={index} className="mt-12">
                        <p className="text-[60px] text-white font-bold font-poppins text-center mt-[30px]">
                            {item.kuy}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel2;
