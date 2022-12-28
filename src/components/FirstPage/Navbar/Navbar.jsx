import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";
import LogoSvg from "../../../assets/logoNavbar.svg";
const Navbar = () => {
  return (
    <div className="NavWraper">
      <img className="logoSvg" src={LogoSvg} alt="" />
      <div className="navTitles">
        <NavLink className="titleNav" to="/home" activeclassname="active">
          Главная
        </NavLink>
        <NavLink className="titleNav" to="/excursion" activeclassname="active">
          Экскурсии
        </NavLink>
        <NavLink
          className="titleNav"
          to="/personal.cabinet"
          activeclassname="active"
        >
          Личный кабинет
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
