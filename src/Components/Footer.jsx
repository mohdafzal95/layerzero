import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/moon.png";

const Footer = () => {
  const socialIcons = [
    { icon: FaFacebookF, link: "#" },
    {
      icon: FaTwitter,
      link: "https://x.com/moyememe?s=21&t=Ypk5_Jl-ScmBr89qFS9ZGw",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/moye.meme?igsh=MWNwc2M1ejh5MmF0bg==",
    },
    { icon: FaTelegram, link: "https://t.me/MoyeMemeCommunity" },
    { icon: FaYoutube, link: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6 md:mb-0">
          <img src={logo} alt="Company Logo" className="h-10 mr-4" />
          <h3 className="text-3xl font-bold">MOYE</h3>
        </div>
        <div className="flex z-10">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-white border rounded-full p-3 md:p-4 hover:bg-white/10 mx-2 md:mx-3"
            >

              {/* {React.createElement(social.icon)} */}
              {React.createElement(social.icon, {
                className: "text-lg md:text-xl lg:text-2xl",
              })}
            </a>
          ))}
        </div>
      </div>
      <div className="container mx-auto text-center mt-6 text-sm md:text-2xl px-4 sm:px-6 lg:px-8">
        <p>&copy; 2024 Moye. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
