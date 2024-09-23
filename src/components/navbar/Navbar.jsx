import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assests/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
        <li><a href="#home">Home</a></li>
        <li><a href="#wgpt">What is GPT?</a></li>
        <li><a href="#possibility">Open AI</a></li>
        <li><a href="#features">Case Studies</a></li>
        <li><a href="#blog">Library</a></li>
      </>
  );

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="gpt3__navbar-links_container ">
           <Menu />
          </ul>
      </div>
      <div className="gpt3__navbar-sign">
        <a aria-label="sign in" role="button" href="#">Sign in</a>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27}  onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27}  onClick={() => setToggleMenu(true)}/>
       }
        { toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container_links">
              <ul className="gpt3__navbar-menu_container_links-list">
                <Menu />
              </ul>
              <div className="gpt3__navbar-menu_container-links-sign">
                <a aria-label="sign in" role="button" href="#">Sign in</a>
                <button type="button">Sign up</button>
              </div>
            </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
