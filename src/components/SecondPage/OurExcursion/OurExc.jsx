import React from "react";

import "./ourExc.scss";

import Navbar from "../../FirstPage/Navbar/Navbar";
import TopImg from "../../../assets/ourExcursion/TopBg.png";

import Filter2 from "../../Filters2/Filter2";

const OurExc = () => {
  return (
    <div className="WraperOur">
      <div className="NavDiv" style={{ backgroundImage: `url(${TopImg})` }}>
        <Navbar />
        <h1 className="titleOur">НАШИ ЭКСКУРСИИ</h1>
      </div>

      <div className="InWraper">
        <Filter2 />
        <div className="LeftRight"></div>
      </div>
    </div>
  );
};

export default OurExc;
