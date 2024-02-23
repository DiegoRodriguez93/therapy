import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const logos = [
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/03/markuphero-8pLyUHTK2eApkIeyNG8V.png",
  "https://www.synergyetherapy.com/wp-content/uploads/2022/07/choosing-therapy-logo.svg",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/logo8-300x190.jpg",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/fox9.jpg",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/floated_minnpost_logo-300x183.jpg",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/private-practice2-300x193.jpg",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/sun-sailor-300x66.png",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/podcast-2.jpg",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/PrisonFellowship_RGB_FL-300x79.jpg",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/ccx2-copy.png",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/08/forbes-logo-e1696997011516.png",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2020/10/250px-Verywell_Logo.png",
  "//cdn-5fb98ed3c1ac1813b0e8c8b8.closte.com/wp-content/uploads/2023/02/Color-USA-Today-Logo-300x76.jpg",
];

const LogoCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={10}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={false}
      loop={true}
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          {/* eslint-disable-next-line */}
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LogoCarousel;
