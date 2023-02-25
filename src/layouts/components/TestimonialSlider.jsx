import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  console.log(paginationRef.current);

  return (
    <>
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

        // spaceBetween={20}
        // autoplay={{ delay: 3000 }}
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={"testimonial-" + index}>
              <div class="testimonial-content py-10 px-8 text-center text-white">
                <FaQuoteLeft />
                <p class="text-xl">{item.content}</p>
                <span class="author">
                  <img src={item.avatar} />

                  <h5>{item.author}</h5>
                  <p className="text-light">{item.profession}</p>
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="relative mt-9 flex justify-center">
        <div className="pagination" ref={paginationRef}></div>
      </div>
    </>
  );
};

export default TestimonialSlider;
