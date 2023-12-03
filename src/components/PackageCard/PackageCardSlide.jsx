import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { times } from "lodash";
import { Autoplay, EffectFade, FreeMode, Thumbs } from "swiper/modules";
import AddWishlist from "./AddWishlist";

export default function PackageCardSlide({ data, id }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const handleThumbSlideChange = () => {
    if (mainSwiper && thumbsSwiper) {
      const activeThumbSlideIndex = thumbsSwiper.realIndex;
      mainSwiper.slideTo(activeThumbSlideIndex, 500);
    }
  };

  return (
    <div className="relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        onSwiper={setMainSwiper}
        loop={true}
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Thumbs, EffectFade]}
        effect="fade"
        className="mySwiper2 h-[250px]"
      >
        {times(data.length * 3, (index) => data[index % data.length]).map(
          (ele, ind) => {
            return (
              <SwiperSlide>
                <img src={ele} key={Math.random()} />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
      <div className="w-[80%] shadow-lg z-40 bg-blue-100 absolute h-16 px-2 -bottom-8 pt-2 rounded-lg left-[10%]">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          autoplay={{
            delay: Math.floor(Math.random() * (3500 - 2500 + 1)) + 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          watchSlidesProgress={true}
          onSlideChange={handleThumbSlideChange}
          modules={[FreeMode, Thumbs, Autoplay]}
          centeredSlides={true}
          className="mySwiper  h-12 bg-blue-100  w-[100%]"
        >
          {times(data.length * 3, (index) => data[index % data.length]).map(
            (ele, ind) => {
              return (
                <SwiperSlide>
                  <img
                  
                    src={ele}
                    className="h-full w-full cursor-grab object-cover"
                    key={ind}
                  />
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
      <AddWishlist id={id}></AddWishlist>
    </div>
  );
}
