import React from "react";

import "./filters.scss";

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
    </div>
  );
};

export default Filters;
