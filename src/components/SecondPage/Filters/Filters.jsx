import React from "react";

import "./filters.scss";

import { filterData } from "./filter";

const Filters = () => {
  return (
    <div className="WraperFilters">
      <div className="divPriceWraper">
        <p className="titleFilter">Фильтры</p>
        <div className="divPrice">
          <p className="titlePrice">Стоимость</p>
          <hr className="minusHr" />
        </div>
        <div className="inputsPricet">
          <input className="priceInput" type="text" />
          <input className="priceInput" type="text" />
        </div>
        <input type="range" />
      </div>
      <div className="numberBigDiv">
        <div className="divPrice">
          <p className="numberPeople">Количество человек</p>
          <hr className="minusHr" />
        </div>
        <div className="numbersBtn">
          <button className="titleNm">1 чел.</button>
          <button className="titleNm">2 чел.</button>
          <button className="titleNm">3 чел.</button>
          <button className="titleNm">4 чел.</button>
          <button className="titleNm">5 чел.</button>
          <button className="titleNm">6 чел.</button>
          <button className="titleNm">7 чел.</button>
          <button className="titleNm">8 чел.</button>
          <button className="titleNm">9 чел.</button>
          <button className="titleNm">10 чел.</button>
          <button>Больше 10 чел.</button>
        </div>
      </div>
      <div className="BigRadio">
        {filterData.map((res) => (
          <div className="radioDiv">
            <input type="radio" id="age1" name="age" value="30" />
            <label className="label" for="age1">
              {res.place}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
