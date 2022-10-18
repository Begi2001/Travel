import React, { useState } from "react";

import "./popularExc.scss";
import { dataPop } from "./PopularData";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import clockPng from "../../../assets/sliderExc/clock.png";
import moneyPng from "../../../assets/sliderExc/money.png";

const PopularExc = () => {
  const [setSwiperRef] = useState(null);

  return (
    <div className="MainPopularDiv">
      <div className="TopDiv">
        <p className="popularTitle">Популярные экскурсии</p>
        <p className="watchAll">Смотреть все</p>
      </div>
      <>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          // breakpoints={{
          //   "@0.00": {
          //     slidesPerView: 2,
          //     spaceBetween: 10,
          //   },
          //   "@0.75": {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   "@1.00": {
          //     slidesPerView: 3,
          //     spaceBetween: 40,
          //   },
          //   "@1.50": {
          //     slidesPerView: 4,
          //     spaceBetween: 50,
          //   },
          // }}

          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {dataPop.map((res, index) => (
            <SwiperSlide className="sliderSwaper">
              <div
                className="cardsPop"
                key={index}
                style={{
                  backgroundImage: `url(${res.img})`,
                  width: 360,
                  height: 497,
                  borderRadius: "10px",
                }}
              >
                <p className="type">{res.type}</p>
                <p className="place">{res.place}</p>
                <div className="timeMny">
                  <div className="timeDiv">
                    <img className="clockImg" src={clockPng} alt="#" />
                    <p className="time">{res.time}</p>
                    <p className="time">часа</p>
                  </div>
                  <div className="moneyDiv">
                    <img className="moneyImg" src={moneyPng} alt="#" />
                    <p className="money">{res.money}</p>
                    <p className="money">₽</p>
                  </div>
                </div>
                <p className="invite">{res.invite}</p>
                <button className="detail">Подробнее</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default PopularExc;
