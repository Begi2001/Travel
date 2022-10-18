import React from "react";

import "./typeExc.scss";

import { typeTravel } from "./TypeData";

const TypeExc = () => {
  return (
    <div className="BigWraper">
      <div className="MainTypeExc">
        <p className="typeEx">Виды экскурсий</p>
        <div className="wraperType">
          {typeTravel.map((res) => (
            <div className="typeTravel">
              <img className="imgTravel" src={res.img} alt="#" />
              <div className="typeName">
                <p className="titleType">{res.type}</p>
                <p className="titleAbout">{res.about}</p>
              </div>
            </div>
          ))}
          <div className="topBtn">
            <p className="titleChoose">
              Выбирайте на нашем сайте экскурсию, которая подходит именно вам и
              записывайтесь онлайн без очередей, просто и быстро!
            </p>
            <button className="btnExc">К экскурсиям</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeExc;
