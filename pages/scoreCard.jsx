import Image from "next/image";
import React from "react";
import Score from ".././public/assets/projects/scorecardbanner.png";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import Link from "next/link";

const ScoreCard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Score}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] -translate-y-[52%] text-white py-2 px-2 z-10">
          <h2 className="py-2">ScoreCard</h2>
          <h3>React Js | TypeScript |Tailwind CSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="">
            ScoreCard is a web application that allows users to create and
            manage their own scorecards. Scorecards are a great way to keep
            track of your progress and goals. ScoreCard allows users to create
            their own scorecards and add their own goals and progress. Users can
            also view other users scorecards and follow them to keep track of
            their progress.
          </p>
          <a href="https://studperf.netlify.app/" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl p-4">
            <div className="p-2">
                <p>Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        React Js
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        Typescript
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        Tailwind
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        Node
                    </p>
                    <p className="text-gray-600 flex items-center py-2">
                        <MdOutlineRadioButtonChecked className="inline-block text-[#5651e5] mr-2" />
                        MongoDB
                    </p>
                </div>
            </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer"> 
                <a className="text-[#5651e5]">Back to Projects</a>
            </p>
        </Link>
      </div>
    </div>
  );
};

export default ScoreCard;
