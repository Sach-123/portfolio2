import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { profile } from "../assets";
import { Button } from "../components";

const Intro = () => {
  return (
    <div
      className="m-[50px] mx-[5%] flex scroll-mt-20 flex-col items-center justify-start py-[80px]  text-white sm:flex-row sm:justify-between"
      id="home"
    >
      <div className="flex w-[100%] flex-col text-white sm:w-[50%]">
        <div className="text-4xl">
          Hi! I am{" "}
          <span className="flex-wrap font-bold text-primary">
            Sachin Choudhary
          </span>
        </div>
        <div className="flex h-[100px] text-4xl">
          <div className="text-primary">
            <span className="text-white">A&nbsp;</span>
            <Typewriter
              words={[
                "coder!",
                "web developer!",
                "software engineer!",
                "tech enthusiast!",
                "consistent learner!",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={75}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </div>
        <div className=" text-md text-dimWhite">
          I am currently deepening my knowledge of Flutter, learning Android
          development and regularly practicing DSA.
        </div>

        <a href="#contacts">
          <Button text="Contact me!!" />
        </a>
      </div>
      <div className="relative scale-75 sm:mr-[5%] md:scale-100">
        <div className="absolute h-[100%] w-[100%] rounded-full bg-radial-custom backdrop-blur-lg"></div>
        <img
          src={profile}
          alt="profile photo"
          className="sticky z-10 w-[400px] rounded-xl drop-shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Intro;
