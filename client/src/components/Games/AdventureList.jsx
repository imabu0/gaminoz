import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Game from "./Game";
import adventure from "./adventureData.json"

const AdventureList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-3">
        <h3 className="text-[16px] font-medium py-1">Adventure Games</h3>
        <div className="flex items-center gap-2">
          <div className="bg-[#e79e0d] w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-[5px] flex items-center justify-center cursor-pointer adventure-prev">
            <img
              src="img/arrow.svg"
              alt="arrow"
              className="rotate-180 w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]"
            />
          </div>
          <div className="bg-[#e79e0d] w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] rounded-[5px] flex items-center justify-center cursor-pointer adventure-next">
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
          nextEl: ".adventure-next",
          prevEl: ".adventure-prev",
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
        {adventure.map((a) => (
          <div key={a.id}>
            <SwiperSlide className="flex flex-col gap-[10px]">
              <Game
                img={a.thumbnail}
                title={a.name}
                link={`/adventure/${a.name}`}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default AdventureList;
