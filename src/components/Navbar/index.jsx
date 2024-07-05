import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from "react-scroll";
import "./style.css"
import logo from "../../assets/save.jpeg"
const Navbar = () => {
  const [open, setopen] = useState(false);

  const togglehambuger = () => {
    setopen(!open);
    console.log(open);
  };
  const reload = () => {
    window.reload();
  }

  return (
    <div className="fixed_Navbar">
      <div className="Navbar">
        <div className="Navbar_flex">
          <div className="logo">
            <NavLink to="/" onClickx={reload}>
              <img src={logo} alt="" />
            </NavLink>
          </div>

          <div className={`Navbar_link ${open && `open`}`} id="Nav_link">
            <ul id="navlink">
            <Link
                to="Header_flex"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="/" className="link">
                  Home
                </a>
                </Link>
              <Link
                to="presale_header"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a className="link">How to Buy</a>
              </Link>
              {/* <Link
                to="Progressivebar"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="/" className="link">
                  Roadmap
                </a>
              </Link> */}
              <Link
                to="Footer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a href="/" className="link">
                Follow $SOS
                </a>
              </Link>
              {/* <NavLink to='/'><a  className='link'>CONTACT</a></NavLink>  */}
            </ul>
         
          </div>
        </div>
        <div className="hambuger">
          <label className={`hamburger ${open && `open`}`}>
            <input type="checkbox" onClick={togglehambuger} />
            <svg viewBox="0 0 32 32">
              <path
                className={`line line_top_bottom`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
