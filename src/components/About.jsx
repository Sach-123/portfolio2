import React from "react";
import Lottie from "lottie-react";
import { Title } from "../components";
import { robot } from "../assets";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const About = () => {
  return (
    <div
      className="mx-[5%] mb-[50px] mt-[100px] scroll-mt-20 text-3xl text-white"
      id="about"
    >
      <Title titleText="About-me" />

      <div className="my-5 flex flex-col-reverse justify-between text-lg text-dimWhite sm:flex-row">
        <div className="about-content text-center sm:w-[50%] sm:text-left">
          <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
            <p>
              Hello there! I'm{" "}
              <strong className="text-white">Sachin Choudhary</strong> , a
              passionate software engineer and full stack developer. Equipped
              with a diverse and promising skill set. With a strong background
              in computer science and a love for problem-solving, I thrive on
              turning ideas into functional, user-friendly applications.
            </p>
            <br />
            <p>
              In addition to my proficiency in web development, I am deeply
              interested in machine learning. I have a solid understanding of
              fundamental machine learning concepts, algorithms, and techniques.
              I have experience in building and deploying machine learning
              models using popular frameworks like Flask and scikit-learn. I
              possess the versatility to excel in both individual and
              collaborative projects.
            </p>
          </ScrollAnimation>
        </div>

        <div className="mx-auto flex w-[50%] justify-center">
          <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
            <Lottie animationData={robot} />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default About;
