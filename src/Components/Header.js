import React, { useState } from 'react'
import  ReactDOM  from 'react-dom'
import logo from '../Logo/download (1).png'
import { Link } from 'react-router-dom';
 const Header = () => {
  const[btn,setbtn]=useState("Login");
   return (
       <div className='header'>
         <div className='logo-container'>
           <img className='logo' src={logo}></img>
         </div>
         <div className='nav-item'>
           <ul>
             <li>
                <Link to="/" className='home'>Home</Link>
               </li>
             <li>
                <Link to ='/about' className='about'>About Us</Link>
              </li>
             <li>
              <Link to='/contact' className='contact'>Contact Us</Link>
             </li>
             <li>
              <Link to='/cart' className='cart'>Cart</Link>
              </li>
             <button className='Login' 
             onClick={()=>{
                 btn === "Login"? setbtn("Logout"):setbtn("Login")
             }}>
             {btn}
             </button>
           </ul>
         </div>
       </div>
    )   
 };
 export default Header;
 
 
 
 