import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const BrandSlider = ({ brands }) => {
  return (
    <Swiper
      loop={true}
      slidesPerView={3}
      breakpoints={{
        992: {
          slidesPerView: 5,
        },
      }}
      spaceBetween={20}
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
    >
      {brands.map((brand, index) => (
        <SwiperSlide
          className=" flex h-20 cursor-pointer items-center justify-center py-6 px-6 text-center opacity-50  grayscale filter transition   hover:opacity-100 hover:grayscale-0 lg:px-10"
          key={"brand-" + index}
        >
          <img src={brand} class="inline object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BrandSlider;
