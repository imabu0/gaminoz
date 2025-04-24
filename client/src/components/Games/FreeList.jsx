import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Game from "./Game";
import free from "./freeData.json"

const FreeList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-3">
        <h3 className="text-[16px] font-medium py-1">Free Games</h3>
        <div className="flex items-center gap-2">
          <div className="bg-[#e79e0d] w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-[5px] flex items-center justify-center cursor-pointer free-prev">
            <img
              src="img/arrow.svg"
              alt="arrow"
              className="rotate-180 w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]"
            />
          </div>
          <div className="bg-[#e79e0d] w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-[5px] flex items-center justify-center cursor-pointer free-next">
            <img
              src="img/arrow.svg"
              alt="arrow"
              className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]"
            />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation={{
          nextEl: ".free-next",
          prevEl: ".free-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          },
          1280: {
            slidesPerView: 5.5,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mt-3"
      >
        {free.map((f) => (
          <div key={f.id}>
            <SwiperSlide className="flex flex-col gap-[10px]">
              <Game img={f.thumbnail} title={f.name} link={`/free/${f.name}`} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default FreeList;