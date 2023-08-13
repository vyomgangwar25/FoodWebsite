import React, { useState } from 'react';
import logo from '../Logo/download (1).png';
import { Link } from 'react-router-dom';
import UseOnlineStatus from '../Utils/UseOnlineStatus';

const Header = () => {
  const [btn, setBtn] = useState('Login');

  const onlineStatus = UseOnlineStatus(); // call custom hook

  return (
    <div className="flex justify-between bg-[#4c5262] shadow-lg py-2 px-4 mb-2">
      <div className="logo-container flex items-center">
        <img className="w-40" src={logo} alt="" />
      </div>
      <div className="flex items-center">
   
        <ul className="flex space-x-4">
        <li className="text-white text-xl font-bold" >
        Online Status: {onlineStatus ? <span className="text-green-500">🟢</span> : <span className="text-red-500">🔴</span>}
             </li>
          <li>
            <Link className="text-white text-xl hover:text-indigo-300 font-bold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl hover:text-indigo-300 font-bold" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl hover:text-indigo-300 font-bold" to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="text-white text-xl  hover:text-indigo-300 font-bold" to="/cart">
              Cart
            </Link>
          </li>
          <button
            className={`border rounded-md py-1 px-3 ${
              btn === 'Login' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'
            } transition duration-300 text-white text-sm`}
            onClick={() => {
              setBtn(btn === 'Login' ? 'Logout' : 'Login');
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
