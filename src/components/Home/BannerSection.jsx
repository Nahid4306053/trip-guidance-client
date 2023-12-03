import React from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useTourType from "../../Hooks/useTourType";
import "../../styles/Banner.scss";
import BigError from "../shared/BigError";
import Bigloading from "../shared/Bigloading";

export default function BannerSection() {
  const { isLoading, isError, isSuccess, tourTypes, error } = useTourType();

  return (
    <div className="w-full mx-auto  mt-32 lg:mt-[150px] h-[600px] md:h-[700px] lg:h-[800px]">
      <div className="slider_Section col-span-full order-0 lg:order-1   lg:col-span-9">
        {isLoading ? (
          <Bigloading> </Bigloading>
        ) : isError ? (
          <BigError>Try again: {error.message}</BigError>
        ) : (
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            loop={true}
            grabCursor={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="Bannerswiper  mx-auto overflow-hidden max-h-[800px] w-full h-full"
          >
            {tourTypes.data.map((ele) => {
              return (
                <SwiperSlide
                  className=""
                  style={{
                    background: `url(${ele.thumbnail}) `,
                    backgroundPosition: "center",
                  }}
                  key={ele._id}
                >
                  <div className="banneritem h-[600px] md:h-[800px] py-10  flex items-center">
                    <div className="container  mx-auto">
                      <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-8 details">
                        <h1 className="md:text-2xl font-Montserrat text-xl text-yellow-500  font-bold">
                          {ele.title}
                        </h1>
                        <h1 className="md:text-8xl italic font-Montserrat text-5xl  text-white  font-bold">
                          {ele.slogan}
                        </h1>
                        <Link className="button-serv" to="/services">
                          <button className="font-bold hover:bg-blue-900  bg-blue-900 text-blue-100 rounded-none btn-md lg:btn-lg">
                            View Packages
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
}
