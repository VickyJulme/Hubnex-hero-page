import React from "react";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <div className=" 
    ">
      <div className="heading ">
        <h1 className="font-semibold text-6xl max-md:text-4xl max-sm:text-xl text-center mt-14">
          Transform your skills with Expert <br />
          Guidance and Professional Mentorship
        </h1>
        <div className="gg"></div>

        <div className="gg2"></div>
        <h1 className=" text-center z-[] max-md:text-2xl max-sm:text-base mt-5 text-3xl">
          Personalized learning journey with the
          <br /> help of expert mentors{" "}
          <div className=" mt-5 flex justify-center text-center">
            <img className=" group1" src="group1.png"></img>
          </div>
        </h1>

        <div >
          <a href="button" className="flex my-5 justify-center ">
            <button className="button  font-serif  ">Book Mentorship </button>
          </a>

          <div className="flex absolute bottom-48 justify-between">
            <img
              className="girl max-md:w-[240px] max-sm:hidden "
              src="11.svg"
            />
            <img className="boy ml-[700px] max-md:w-[320px] max-sm:hidden" src="13.svg" />
          </div>
        </div>
      </div>

      <div className="text-center w-screen  bg-orange-500  flex items-center justify-center"></div>
      <div className="">
        <div className="">
        <img className="i1 ml-4 max-md:hidden" src="1.svg" />
          <img className="i2 ml-5 max-md:hidden" src="2.svg" />

          <img className="i4 max-md:hidden" src="4.svg" />
        </div>
        <div>
        <img className="i3 max-md:hidden" src="3.svg" />
        <img className="i5 max-md:hidden" src="5.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
