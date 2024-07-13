import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
const Title = (props) => {
  return (
    <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" duration={1}>
      <div>
        <span className="text-primary">#</span>
        <span>{props.titleText} </span>
        <span className="hidden text-2xl font-light text-primary md:inline-flex lg:text-3xl ">
          ------------------------------------------
        </span>
        <span className="hidden font-light text-primary sm:inline-flex md:hidden">
          ------------------
        </span>
      </div>
    </ScrollAnimation>
  );
};

export default Title;
