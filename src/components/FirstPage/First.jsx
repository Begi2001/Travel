import React from "react";
import NavHome from "./NavHome/NavHome";
import PopularExc from "./PopularExc/PopularExc";
import About from "./About/About";
import TypeExc from "./TypeExc/TypeExc";
import Gallery from "./Gallery/Gallery";
import Grids from "./GRIDS/Grids";
import Recall from "./Recall/Recall";
import Input from "./Inputs/Input";
import Footer from "./Footer/Footer";
const First = () => {
  return (
    <>
      <NavHome />
      <PopularExc />
      <About />
      <TypeExc />
      <Gallery />
      <Grids />
      <Recall />
      <Input />
      <Footer />
    </>
  );
};

export default First;
