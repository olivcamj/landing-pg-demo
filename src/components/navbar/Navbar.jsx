import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assests/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
          <ul className="gpt3__navbar-links_container ">
            <li><a href="#home">Home</a></li>
            <li><a href="#wgpt">What is GPT?</a></li>
            <li><a href="#possibility">Open AI</a></li>
            <li><a href="#features">Case Studies</a></li>
            <li><a href="#blog">Library</a></li>
        </ul>
        <div className="gpt3__navbar-sign">
          <button className="gpt3__navbar-sign">Sign in</button>
          <button className="gpt3__navbar-sign_up">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
