import Image from "next/image";
import React from "react";
import HTML from "../public/assets/skills/html.png";
import CSS from "../public/assets/skills/css.png";
import JS from "../public/assets/skills/javascript.png";
import REACT from "../public/assets/skills/react.png";
import NEXT from "../public/assets/skills/nextjs.png";
import TAILWIND from "../public/assets/skills/tailwind.png";
import FIREBASE from "../public/assets/skills/firebase.png";
import NODE from "../public/assets/skills/node.png";
import MONGO from "../public/assets/skills/mongo.png";


const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl tracking-widest uppercase text-[#5651e5] font-bold">
          Skills
        </p>
        <h2 className="text-xl tracking-widest uppercase py-4">
          My Skill sets
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={HTML}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={CSS}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={JS}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={REACT}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NEXT}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={TAILWIND}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={FIREBASE}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={MONGO}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>MONGO</h3>
              </div>

            
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NODE}
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <h3>NODE</h3>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
