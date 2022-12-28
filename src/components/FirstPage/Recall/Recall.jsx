import React, { useState } from "react";

import "./recall.scss";
import { recallData } from "./RecallData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Recall = () => {
  const [setSwiperRef] = useState(null);

  return (
    <div className="MainRecallDiv">
      <div className="topRecall">
        <p className="titleRecall">Отзывы</p>
        <p className="watchAll">Смотреть все</p>
      </div>
      <div className="sliderRecall">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1.7}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="swiperRecall"
        >
          {recallData.map((res, index) => (
            <SwiperSlide className="swiperWraper">
              <div className="cardsRecall" key={index}>
                <div className="wraperRecall">
                  <img className="imgRecall" src={res.img} alt="" />
                  <div className="NameRecall">
                    <p className="name">{res.name}</p>
                    <p className="recal">{res.recall}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Recall;
