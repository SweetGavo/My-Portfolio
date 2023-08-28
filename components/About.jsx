import React from "react";
import Image from "next/image";
import AboutImg from "../public/assets/brand/react_banner_copy.png";

const About = () => {
  return (
    <div id="about" className="w-full bg-black md:h-screen p-4 flex items-center py-12 md:px-32">
      <div className="max-w-[1240] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase font-bold text-2xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-[#5651e5]">Meet Me...</h2>
          <p className=" py-2  text-gray-600">| Bugs are a Thrill |</p>
          <p className="text-gray-500 py-2 ">
            I am a MERN-STACK Engineer with a passion for building applications <br/>
            that solve real-world problems. I am proficient in an assortment of <br/>
            technologies, including React, Node.Js, Typescript, Express, and <br/>
            Relational Databases such as MongoDB. I have also led a team of six <br/>
            in building a progress tracker application to serve over 1,000 devs <br/>
            per month, increasing efficiency and transparency by over 60 percent. <br/>
            I was awarded the Most Outstanding Developer With <br /> 
            Exemplary Leadership traits. I can work both in interdisciplinary <br />
            teams and take initiative in a remote team environmen
          </p>
          <p className="text-gray-600 py-2 cursor-pointer underline">
            Checkout out some of my projects...
          </p>
        </div>
        <div className="cursor-pointer shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-110 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={AboutImg}
            alt=""
            // width="100%" 
            // height="100vh"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
