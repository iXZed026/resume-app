import React, { useEffect } from 'react';
import "./HumburgerMenu.css";
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom';
// Icons
import { IoHomeOutline } from "react-icons/io5";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";


const HumburgerMenu = (props) => {
  // Destructuring props to extract 'activeHumb' and 'setActiveHumb'
  const { activeHumb, setActiveHumb, activeLink, setActiveLink } = props;

  // Function to close the hamburger menu
  const closeHumbMenu = (event) => {
    setActiveHumb(false);

    let dataLink = event.target.getAttribute("data-link");

    if (dataLink === "home") {
      setActiveLink({
        homeFlag: true,
        portfolioFlag: false,
        aboutUsFlag: false,
        contactUsFlag: false,
      })
    } else if (dataLink === "portfolio") {
      setActiveLink({
        homeFlag: false,
        portfolioFlag: true,
        aboutUsFlag: false,
        contactUsFlag: false,
      })
    } else if (dataLink === "aboutUs") {
      setActiveLink({
        homeFlag: false,
        portfolioFlag: false,
        aboutUsFlag: true,
        contactUsFlag: false,
      })
    } else if (dataLink === "contactUs") {
      setActiveLink({
        homeFlag: false,
        portfolioFlag: false,
        aboutUsFlag: false,
        contactUsFlag: true,
      })
    }
  }

  // Event listener for window resize to close the menu if window width is greater than 800
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
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
            <Link
              className={activeLink.homeFlag ? "nav-link2" : "nav-link3"}
              onClick={closeHumbMenu}
              to="./Home/Home"
              id='nav-link-style'>
              <IoHomeOutline id='icons-style' /><p data-link={"home"}>خانه</p></Link><br />
            <Link
              className={activeLink.portfolioFlag ? "nav-link2" : "nav-link3"}
              onClick={closeHumbMenu}
              to="./Portfolio/Portfolio"
              id='nav-link-style'>
              <RiFilePaper2Line id='icons-style' /><p data-link={"portfolio"}>رزومه های ما</p></Link><br />
            <Link
              className={activeLink.aboutUsFlag ? "nav-link2" : "nav-link3"}
              onClick={closeHumbMenu}
              to="./AboutUs/AboutUs"
              id='nav-link-style'>
              <FaUsers id='icons-style' /><p data-link={"aboutUs"}>درباره ما</p></Link><br />
            <Link
              className={activeLink.contactUsFlag ? "nav-link2" : "nav-link3"}
              onClick={closeHumbMenu}
              to="./ContactUs/ContactUs"
              id='nav-link-style'>
              <BsTelephoneFill id='icons-style' /><p data-link={"contactUs"}>تماس با ما</p></Link><br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HumburgerMenu;
