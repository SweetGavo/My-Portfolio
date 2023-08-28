import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs"
import useDownloader from "react-use-downloader";

const Main = () => {
  const { download } = useDownloader();
  const fileUrl = "/adimohanazacv.pdf";
  const fileName = "adimohanazacv.pdf";
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm text-gray-600 tracking-widest test-gray-600">
            Delivering Value through People, Passionate Learning and Innovation
          </p>
          <h1 className="py-4 sm:text-lg text-3xl font-bold text-gray-800">
            Hi, I am <span className='text-[#5651e5]'>N</span>aza <span className='text-[#5651e5]'>A</span>dimoha <br />{" "}
            A MERN Stack Engineer
          </h1>
          <p className="py-4 m-auto max-w-[70%] text-gray-600 text-sm mt-4">
            I am a MERN stack engineer with a passion for building scalable and robust web applications. I relish the Art of Solving Problems. I am a  <span className='text-[#5651e5]'>Design Thinker</span>
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 ">
              <a href="https://www.linkedin.com/in/chinazaadimoha/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <a href="https://github.com/NazaAdimoha" target="_blank" rel="noreferrer">
              <FaGithub />
              </a>
              
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              
              <a href="https://twitter.com/NazaAdimoha" target="_blank" rel="noreferrer">
              <FaTwitter />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              
              <a href="mailto:adimohanaza@gmail.com" target="_blank" rel="noreferrer">
              <IoMailOutline />
              </a>
            </div>
            <div onClick={() => download(fileUrl, fileName)} className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">

                <BsFillPersonLinesFill />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
