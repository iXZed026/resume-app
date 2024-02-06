import React, { useEffect } from 'react';
import "./HumburgerMenu.css";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
// Icons
import { IoHomeOutline } from "react-icons/io5";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";

const humburgerMenu = (props) => {

  // Destructuring props to extract 'activeHumb' and 'setActiveHumb'
  const { activeHumb, setActiveHumb } = props;

  // Function to close the hamburger menu
  const closeHumbMenu = () => {
    setActiveHumb(false);
  }

  window.addEventListener("resize", () => {
    if(window.innerWidth > 800) {
      setActiveHumb(false)
    }
  })

  return (
    <div className="humb-menu-background">
      <div className="humburger-menu">
        <GrClose id='close-icon' onClick={closeHumbMenu} />
        <div className="humb-menu-image"></div>
        <div className="humburger-menu-container">
          <div className="humburger-menu-flex">
            <Link onClick={closeHumbMenu} to="./Home/Home" id='nav-link-style'><IoHomeOutline id='icons-style' /><p>خانه</p></Link><br />
            <Link onClick={closeHumbMenu} to="./Portfolio/Portfolio" id='nav-link-style'><RiFilePaper2Line id='icons-style' /><p>رزومه های ما</p></Link><br />
            <Link onClick={closeHumbMenu} to="./AboutUs/AboutUs" id='nav-link-style'><FaUsers id='icons-style' /><p>درباره ما</p></Link><br />
            <Link onClick={closeHumbMenu} to="./ContactUs/ContactUs" id='nav-link-style'><BsTelephoneFill id='icons-style' /><p>تماس با ما</p></Link><br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default humburgerMenu; 