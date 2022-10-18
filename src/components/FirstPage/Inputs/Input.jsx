import React from "react";

import "./input.scss";

import InputBg from "../../../assets/inputBg/inpBg.png";

const Input = () => {
  return (
    <div className="MainWraperInp">
      <div
        className="BigWraperInp"
        style={{
          backgroundImage: `url(${InputBg}) `,
        }}
      >
        <div className="MainInputWraper">
          <div className="WraperInputs">
            <div className="DivInput">
              <div className="top">
                <p className="Qstn">Остались вопросы?</p>
                <p className="clickRequest">Оставь заявку и мы ответим</p>
              </div>
              <div className="midle">
                <input placeholder="Имя" className="nameInp" type="text" />
                <input placeholder="Телефон" className="phoneInp" type="text" />
                <input placeholder="Почта" className="mailInp" type="text" />
              </div>

              <button className="btnRequest">Оставить заявку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
