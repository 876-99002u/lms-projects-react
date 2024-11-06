import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="fixed left-0 bottom-0 w-full h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
      <section className="text-lg">
        &copy; {year} | All rights reserved
      </section>
      <section className="flex items-center justify-center gap-5 text-2xl text-white">
        <a
          href=""
          className="hover:text-yellow-600 transition-all ease-in-out duration-300"
        >
          <BsFacebook />
        </a>
        <a
          href=""
          className="hover:text-yellow-600 transition-all ease-in-out duration-300"
        >
          <BsTwitter />
        </a>
        <a
          href=""
          className="hover:text-yellow-600 transition-all ease-in-out duration-300"
        >
          <BsInstagram />
        </a>
        <a
          href=""
          className="hover:text-yellow-600 transition-all ease-in-out duration-300"
        >
          <BsLinkedin />
        </a>
      </section>
    </footer>
  );
};

export default Footer;







