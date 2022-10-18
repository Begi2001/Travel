import React from "react";

import "./footer.scss";

import Prcht from "../../../assets/footerImg/prcht.png";

import Whtsp from "../../../assets/footerImg/whtsp.png";
import Tlgm from "../../../assets/footerImg/tlgm.png";
import Email from "../../../assets/footerImg/email.png";

import Vk from "../../../assets/footerImg/vk.png";
import Insta from "../../../assets/footerImg/insta.png";
import Fcb from "../../../assets/footerImg/fcb.png";

const Footer = () => {
  return (
    <div className="BigFooterDiv">
      <div className="WraperFooter">
        <div className="leftFooter">
          <img className="parachute" src={Prcht} alt="" />
          <div className="titleFooter">
            <p className="clickFooter">Главная</p>
            <p className="clickFooter">Экскурсии</p>
            <p className="clickFooter">Личный кабинет</p>
          </div>
        </div>
        <div className="rightFooter">
          <div className="inLeft">
            <p className="whtsp">
              <img src={Whtsp} /> +998 91 234 56 78
            </p>
            <p className="whtsp">
              <img src={Tlgm} /> +998 90 123 45 67
            </p>
            <p className="whtsp">
              <img src={Tlgm} /> Телеграм-бот PeroTravel
            </p>
          </div>
          <div className="inRight">
            <p className="email">
              <img src={Email} /> office@perotravel.ru
            </p>

            <div className="sociallNet">
              <img className="linkScl" src={Vk} />
              <img className="linkScl" src={Insta} />
              <img className="linkScl" src={Fcb} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
