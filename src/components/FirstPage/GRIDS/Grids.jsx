import React from "react";

import "./grids.scss";

import grid1 from "../../../assets/gridsImg/1.png";
import grid2 from "../../../assets/gridsImg/2.png";
import grid3 from "../../../assets/gridsImg/3.png";
import grid4 from "../../../assets/gridsImg/4.png";
import grid5 from "../../../assets/gridsImg/5.png";
import grid6 from "../../../assets/gridsImg/6.png";
import grid7 from "../../../assets/gridsImg/7.png";
import grid8 from "../../../assets/gridsImg/8.png";

const Grids = () => {
  return (
    <div className="container">
      <div className="grid1">
        <div style={{ backgroundImage: `url(${grid1})` }} />
        <div style={{ backgroundImage: `url(${grid5})` }} />
        <div style={{ backgroundImage: `url(${grid6})` }} />
        <div style={{ backgroundImage: `url(${grid7})` }} />
      </div>
      <div className="grid2">
        <div style={{ backgroundImage: `url(${grid2})` }} />
      </div>
      <div className="grid3">
        <div style={{ backgroundImage: `url(${grid8})` }} />
        <div style={{ backgroundImage: `url(${grid4})` }} />
        <div style={{ backgroundImage: `url(${grid3})` }} />
      </div>
    </div>
  );
};

export default Grids;
