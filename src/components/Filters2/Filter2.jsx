import React, { useEffect, useState } from "react";
import "./filter2.scss";
import { dataFilter2 } from "./filter2Data";
import { numberData } from "./filter2Data";
import { filterTop } from "./filter2Data";
import { typeTravel } from "./filter2Data";
import Coin from "../../assets/ourExcursion/coins.png";
import Time from "../../assets/ourExcursion/time.png";
import BigImg from "../../assets/ourExcursion/tourImg.png";
import Like from "../../assets/ourExcursion/like.png";

const Filter2 = () => {
  const [type, setType] = useState("Автобусный тур");
  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      };
    }
  });

  return (
    <div className="FatherWraper">
      <section className="MainWraper">
        <div className="topSelect">
          <div className="selectsDiv">
            {typeTravel.map((traveltype) => (
              <div className="wraperTitle">
                <p
                  style={{
                    color: type === traveltype.title ? "#0499dd" : "black",
                    borderBottom:
                      type === traveltype.title
                        ? "1px solid rgba(4, 153, 221, 1)"
                        : "none",
                  }}
                  onClick={() => setType(traveltype.title)}
                  className="titleType"
                >
                  {traveltype.title}
                </p>
              </div>
            ))}
          </div>
          <div className="filters">
            {filterTop.map((res3) => (
              <div className="countryDiv">
                <p className="filterCnt">Абхазия</p>
                <img src={res3.img} alt="" />
              </div>
            ))}
            <button className="btnShow">Показать</button>
          </div>
        </div>

        <div className="FiltersTours">
          <div className="Filters">
            <p>Фильтры</p>
            <div className="MainAcc">
              <p class="accordion">
                <span>Стоимость</span>
              </p>
              <div class="panel">
                <div className="priceRange">
                  <div className="inputsRange">
                    <input type="text" />
                    <input type="text" />
                  </div>
                  <input className="rangeInp" type="range" />
                </div>
              </div>
            </div>
            <div className="MainAcc">
              <p class="accordion">
                <span>Количество человек</span>
              </p>
              <div class="panel">
                <div className="wraperNumbers">
                  {numberData.map((res2) => (
                    <button className="btnsMap">{res2.number}</button>
                  ))}
                  <button className="btn10">Больше 10 чел.</button>
                </div>
              </div>
            </div>
            <div className="MainAcc">
              <p class="accordion">
                <span>Место</span>
              </p>
              <div class="panel">
                <div className="bigWraperRadio">
                  {dataFilter2.map((res) => (
                    <div className="wraperRadio">
                      <input
                        type="radio"
                        id="html"
                        name="fav_language"
                        value="HTML"
                      />
                      <label className="country" forHTML="html">
                        {res.country}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="MainAcc">
              <p class="accordion">
                <span>Длительность</span>
              </p>
              <div class="panel">
                <div className="wraperNumbers">
                  {numberData.map((res2) => (
                    <button className="btnsMap">{res2.number}</button>
                  ))}
                  <button className="btn10">Больше 10 чел.</button>
                </div>
              </div>
            </div>
            <div className="MainAcc">
              <p class="accordion">
                <span>Дата</span>
              </p>
              <div class="panel">
                <div className="wraperNumbers">
                  {numberData.map((res2) => (
                    <button className="btnsMap">{res2.number}</button>
                  ))}
                  <button className="btn10">Больше 10 чел.</button>
                </div>
              </div>
            </div>
            <div className="footerBtns">
              <button className="showBtn">Показать</button>
              <button className="clear">
                <span>✕</span> Сбросить фильтры
              </button>
            </div>
          </div>

          <div className="ourTours">
            <p className="titleTour">Наши туры</p>
            {dataFilter2.map(res => {
              if (res.type === type) {
                return (
                  <div key={res.id} className="WraperMap">
                    <img alt="" src={BigImg} />
                    <div className="Tours">
                      <div>
                        <p className="resType">{res.type}</p>
                        <p className="resTitle">{res.title}</p>
                      </div>
                      <div className="serviceDiv">
                        <div className="moneyDiv">
                          <div className="leftDiv">
                            <div className="topLeft">
                              <img alt="" src={Coin} />
                              <p className="price">{res.moneyAdult}</p>
                            </div>
                            <p className="ticket">Взрослый билет</p>
                          </div>
                          <div className="RightDiv">
                            <div className="topRight">
                              <img alt="" src={Coin} />
                              <p>{res.moneyChild}</p>
                            </div>
                            <p className="ticket">Детский билет</p>
                          </div>
                        </div>
                        <div className="timeDiv">
                          <img alt="" className="timePng" src={Time} />
                          <p>{res.clock}</p>
                        </div>
                      </div>
                      <div className="hrAbout">
                        <hr />
                        <p>{res.description}</p>
                      </div>
                      <div className="btnLike">
                        <button className="btnInfo">Подробнее</button>
                        <img className="likeImg" src={Like} alt="" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filter2;
