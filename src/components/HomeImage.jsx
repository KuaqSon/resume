import React from "react";
import avaimg2 from "../images/avatar-2.jpg";
import Fade from "react-reveal/Fade";

function HomeImage() {
  return (
    <Fade right>
      <div
        className="home-img"
        style={{ backgroundImage: `url(${avaimg2})` }}
      ></div>
    </Fade>
  );
}

export default HomeImage;
