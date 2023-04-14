import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import alumni from "../../../../public/assets/alumni.png";
import pengajar from "../../../../public/assets/pengajar.png";
import murid from "../../../../public/assets/murid.png";

const Carousel = () => {
    const [slider] = useState([
        {
            img: alumni,
            caption: `3000+`,
            kuy: "Alumni",
        },
        {
            img: pengajar,
            caption: `20+`,
            kuy: "Pengajar",
        },
        {
            img: murid,
            caption: `300+`,
            kuy: "Murid",
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
                    <div key={index}>
                        {/* <img
                            src={item.img}
                            className="w-full h-64 h-[118px] w-[221px]"
                            alt={item.caption}
                        /> */}
                        <p className="text-[60px] text-white font-bold font-poppins text-center mt-[30px]">
                            {item.caption} <br /> {item.kuy}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
