import React from "react";

import "./carousel.scss";

import VideoPng1 from "../../../assets/videos/video1.png";
import VideoPng2 from "../../../assets/videos/video2.png";
import VideoPng3 from "../../../assets/videos/video3.png";
import VideoPng4 from "../../../assets/videos/video4.png";

export const data = [
  {
    img: VideoPng1,
  },
  {
    img: VideoPng2,
  },
  {
    img: VideoPng3,
  },
  {
    img: VideoPng4,
  },
  {
    img: VideoPng1,
  },
  {
    img: VideoPng2,
  },
  {
    img: VideoPng3,
  },
  {
    img: VideoPng4,
  },
];

const Carusel = () => {
  return (
    <section id="brands">
      <div className="marquee">
        <div className="marquee--inner">
          {data.map((res, index) => (
            <span key={index}>
              <div className="orb">
                <img alt="" src={res.img} />
              </div>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carusel;
