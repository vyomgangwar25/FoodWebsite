import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram,FaSquareTwitter,FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 flex-grow text-white text-center py-4  fixed  inset-x-0
    bottom-0
    p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-centerml-9 pl-9 md:px-0">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
          <div className="flex space-x-4 ">
            <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            <FaSquareTwitter/>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
            </a>
          </div>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
          <p className="mt-2">Designed and developed by Vyom Gangwar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
