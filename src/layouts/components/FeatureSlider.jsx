import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import * as Icon from "react-feather";
import { humanize } from "../../lib/utils/textConverter";

const FeatureSlider = ({ features }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  console.log(paginationRef.current);
  return (
    <div className="relative mt-10">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onActiveIndexChange={(swiper) => {
          console.log("active index is", swiper.activeIndex);
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        loop={true}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        // spaceBetween={20}
        // autoplay={{ delay: 3000 }}
      >
        {features.list.map((item, index) => {
          const FeatherIcon = Icon[humanize(item.icon)];
          return (
            <SwiperSlide key={"feature-" + index}>
              <div className="features-card group z-30">
                <div className="icon flex items-center justify-center text-primary group-hover:top-auto group-hover:bottom-0  group-hover:duration-300 group-hover:ease-linear group-hover:after:h-full">
                  <FeatherIcon />
                </div>
                <h3 className="h4 mt-6 mb-5">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="relative mt-9 flex justify-center">
        <div className="pagination" ref={paginationRef}></div>
      </div>
    </div>
  );
};

export default FeatureSlider;
