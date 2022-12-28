import React from "react";

import "./ourExc.scss";

import Navbar from "../../FirstPage/Navbar/Navbar";
import TopImg from "../../../assets/ourExcursion/TopBg.png";

import TypesTransoprt from "../TypesTransport/TypesTr";
import Filter2 from "../../Filters2/Filter2";
import Filters from "../Filters/Filters";
import Tours from "../OurTours/Tours";

const OurExc = () => {
  return (
    <div className="WraperOur">
      <div className="NavDiv" style={{ backgroundImage: `url(${TopImg})` }}>
        <Navbar />
        <h1 className="titleOur">НАШИ ЭКСКУРСИИ</h1>
      </div>

      <div className="InWraper">
        {/* <TypesTransoprt /> */}
        <Filter2 />
        <div className="LeftRight">
          {/* <Filters /> */}
          {/* <Tours /> */}
        </div>
      </div>
    </div>
  );
};

export default OurExc;
