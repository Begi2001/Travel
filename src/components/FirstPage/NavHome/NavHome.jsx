import React from "react";

import "./NavHome.scss";
import Navbar from "../Navbar/Navbar";
import Home2 from "../Home2/Home2";
import BgHome from "../../../assets/homebg.png";
const NavHome = () => {
  return (
    <div className="WraperNavHome">
      <section
        className="MainWraper"
        style={{ backgroundImage: `url(${BgHome})` }}
      >
        <Navbar />
        <Home2 />
      </section>
    </div>
  );
};

export default NavHome;
