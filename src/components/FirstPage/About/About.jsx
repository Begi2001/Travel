import React from "react";

import BgAbout from "../../../assets/AboutPngs/AboutBg.png";

import "./about.scss";
const About = () => {
  return (
    <div className="MainAbout">
      <div className="bigImgBg" style={{ backgroundImage: `url(${BgAbout})` }}>
        <div className="grayDiv">
          <p className="titleAbout">О нас</p>
          <p className="description1">
            PeroTravel - Первый онлайн-сервис по бронированию экскурсий без
            очередей и операторов. <br /> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="description2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
