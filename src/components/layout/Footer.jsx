import React from "react";
import {
  BsGithub,
  BsTelegram,
  BsYoutube,
  BsSkype,
  BsLinkedin,
  BsPersonBadgeFill,
} from "react-icons/bs";

const socialLinks = [
  { href: "https://7piseth.github.io/maportfolio/", icon: <BsPersonBadgeFill size={25} /> },
  { href: "https://github.com/7piseth", icon: <BsGithub size={25} /> },
  { href: "https://t.me/7piseth", icon: <BsTelegram size={25} /> },
  { href: "https://www.youtube.com/channel/UC7piseth", icon: <BsYoutube size={25} /> },
  { href: "https://join.skype.com/invite/7piseth", icon: <BsSkype size={25} /> },
  { href: "https://www.linkedin.com/in/7piseth", icon: <BsLinkedin size={25} /> },
];

const Footer = () => {
  return (
    <div
      className={`w-full h-[10vh] md:h-[5vh] bg-slate-200 dark:bg-[rgb(22,27,34)] dark:text-[#A3B3BC] 
      text-slate-00 flex flex-col md:flex-row justify-evenly items-center absolute bottom-0`}
    >
      <div className="flex">
        {socialLinks.map((link, index) => (
          <a 
            className=" mx-3 md:mx-5 md:hover:opacity-70"
            key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
          </a>
        ))}
      </div>
      <p class="md:mr-5 text-center font-poppins">
      Designed and Developed by <span className="font-koulen">អាយធី ភ្នំដិន</span>
      </p>
    </div>
  );
};

export default Footer;