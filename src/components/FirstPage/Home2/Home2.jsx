import React from "react";

import "./home2.scss";

import wk from "../../../assets/links/wk.svg";
import insta from "../../../assets/links/insta.svg";
import facebook from "../../../assets/links/fcb.svg";
import Carusel from "../Carousel/Carousel";
import { NavLink } from "react-router-dom";

const Home2 = () => {
  return (
    <>
      <div className="bigHomeWraper">
        <div className="titlesWraper">
          <div className="left">
            <p className="travel">путешествуй</p>
            <p className="with">вместе с</p>
            <p className="pero">pero travel</p>
            <NavLink className="navBtn" to="/excursion">
              <button className="toExc">К экскурсиям</button>
            </NavLink>
          </div>
          <div className="right">
            <img src={wk} alt="" className="svgLinks" />
            <img src={insta} alt="" className="svgLinks" />
            <img src={facebook} alt="" className="svgLinks" />
          </div>
        </div>
        <Carusel />
      </div>
    </>
  );
};

export default Home2;
