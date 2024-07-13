import React from "react";
import Lottie from "lottie-react";
import { Title } from "../components";
import { skillset } from "../constants";
import { coder } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const Skillbox = ({ skillTitle, skillContent }) => (
  <div className="m-2 flex flex-col border border-dimWhite">
    <div className="text border-b-[1px] p-2">{skillTitle}</div>
    <div className="p-2 font-semibold text-dimWhite">{skillContent}</div>
  </div>
);

const Skills = () => {
  return (
    <div
      className="mx-[5%] mb-[50px] mt-[100px] scroll-mt-20 text-3xl text-white"
      id="skills"
    >
      <Title titleText="Skills" />
      <div className="my-5 flex flex-col justify-between text-center text-lg sm:flex-row">
        <div className=" m-auto w-[50%] ">
          <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
            <Lottie animationData={coder} />
          </ScrollAnimation>
        </div>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:ml-10 md:grid-cols-2">
            {skillset.map((skill) => (
              <Skillbox key={skill.skillTitle} {...skill} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Skills;
