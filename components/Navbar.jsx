import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../public/assets/brand/logo_copy-removebg.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linksColor, setLinksColor] = useState('#fff');
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/scoreCard' || router.asPath === '/buyConnect' || router.asPath === '/traderaxpress') {
      setNavBg('transparent');
      setLinksColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinksColor('#fff');
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav);
  };

  {/* function for smooth scroll and prevention of an overlow at the navbar */}
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <div style={{ backgroundColor: `${navBg}`}} className={
      shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"
    }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* Incorporate lazy loading of Image */}
        <Link href="/">
          <a>
            <Image src={Logo} alt="logo" width="100%" height="80%" />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linksColor}`}} className="hidden md:flex">
            <Link href="/">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Home
                </li>
              </a>
            </Link>
            <Link href="/#about">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  About
                </li>
              </a>
            </Link>
            <Link href="/#skills">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Skills
                </li>
              </a>
            </Link>
            <Link href="/#projects">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Projects
                </li>
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                <li className="text-sm ml-10 uppercase hover:border-b ">
                  Contact
                </li>
              </a>
            </Link>
          </ul>
          {/* Hamburger Icon */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {/* Mobile view */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ''
        }
      >
        {/* side drawer menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 bg-[#ecf0f3] ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Logo} alt="logo" width="100%" height="80%" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 "
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let us build something Legendary
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Home
                  </li>
                </a>
              </Link>
              <Link href="/#about">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    About
                  </li>
                </a>
              </Link>
              <Link href="/#skills">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Skills
                  </li>
                </a>
              </Link>
              <Link href="/#projects">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Projects
                  </li>
                </a>
              </Link>
              <Link href="/#contact">
                <a>
                  <li onClick={() => setNav(false)} className="py-4 text-sm ml-10 uppercase hover:border-b ">
                    Contact
                  </li>
                </a>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="pl-3 uppercase tracking-widest text-sm text-[#5651e4]">
                Lets Us Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]  ">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaTwitter />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <IoMailOutline />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
