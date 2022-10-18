import React from "react";

import "./tours.scss";
import ImgSquare from "../../../assets/ourExcursion/tourImg.png";
import CoinsImg from "../../../assets/ourExcursion/coins.png";
import TimeImg from "../../../assets/ourExcursion/time.png";
import LikeImg from "../../../assets/ourExcursion/like.png";

const Tours = () => {
  return (
    <div className="MainWraper">
      <p className="titleTours">Наши туры</p>
      <div className="cardWraper">
        <img className="squareImg" src={ImgSquare} alt="" />
        <div className="infocards">
          <p className="carType">Автобусный тур</p>
          <p className="titlePlace">Золотое кольцо Абхазии (из Адлера)</p>
          <div className="WraperFlex">
            <div className="flexDiv">
              <div className="moneyWraper">
                <div className="moneyDiv">
                  <img className="coinsImg" src={CoinsImg} alt="" />
                  <p className="moneyNm">1 618 ₽</p>
                </div>
                <p className="ticket">Взрослый билет</p>
              </div>
              <div className="moneyWraper">
                <div className="moneyDiv">
                  <img className="coinsImg" src={CoinsImg} alt="" />
                  <p className="moneyNm">1 412 ₽</p>
                </div>
                <p className="ticket">Детский билет</p>
              </div>
            </div>
            <div className="timeDiv">
              <img className="timeImg" src={TimeImg} alt="" />
              <p className="timeNm">2,5 часа</p>
            </div>
          </div>
          <div className="hrDscrp">
            <hr className="titleHr" />
            <p className="titleDscpt">
              Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес
              Спринтер (20 мест). По маршруту вас будет сопровождать
              профессиональный гид. Посадка на экскурсию осуществляется с вашего
              отеля или ближайшей автобусной остановки. Пересечение границы без
              пересадок...
            </p>
          </div>
          <div className="btnLike">
            <button className="btnDetail">Подробнее</button>
            <img src={LikeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;
