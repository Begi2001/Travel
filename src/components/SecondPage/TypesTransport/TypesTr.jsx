import React from "react";

import "./typesTr.scss"

import LocImg from "../../../assets/ourExcursion/location.png";
import CalImg from "../../../assets/ourExcursion/calendar.png";
import PersonImg from "../../../assets/ourExcursion/person.png";

const TypesTr = () => {
  return (
    <div className="BigSelector">
      <div className="selectorType">
        <p className="titleType">АВТОБУСНЫЙ ТУР</p>
        <p className="titleType">ДЖИППИНГ</p>
        <p className="titleType">ЯХТИНГ</p>
        <p className="titleType">КАНЬОНИНГ</p>
      </div>
      <div className="WraperSelected">
        <div className="selectedDiv">
          <p>Абхазия</p>
          <img src={LocImg} alt="" />
        </div>
        <div className="selectedDiv">
          <p>10 ноября 2021</p>
          <img src={CalImg} alt="" />
        </div>
        <div className="selectedDiv">
          <p>5 человек</p>
          <img src={PersonImg} alt="" />
        </div>
        <button className="btnShow">Показать</button>
      </div>
    </div>
  );
};

export default TypesTr;
