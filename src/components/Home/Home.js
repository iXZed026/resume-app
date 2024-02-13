import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
//Icons
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useSetActiveLinkProvider } from '../../provider/LinkProvider';

export const Home = () => {

  const setActiveLink = useSetActiveLinkProvider();

  const activePotfolioHandler = () => {
    setActiveLink({
      homeFlag: false,
      portfolioFlag: true,
      aboutUsFlag: false,
      contactUsFlag: false,
    })
  }

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-flex">
          <div className="about-team">
            <div className="about-team-flex">
              <h2>سلام, این تیم ماست</h2>
              <h1>New Folder 4</h1>
              <h3>ما همگی <span id='about-text-color'>توسعه دهنده وب</span> هستیم.</h3>
              <p>این وبسایت در جهت معرفی اعضای تیم و گذاشتن رزومه های خود طراحی شده است. برای دیدن رزومه ها, روی رزومه ها در پایین یا در لیست بالا کلیک کنید.</p>
              <div className="social-media">
                <a href=""><FaInstagram id='social-style' /></a>
                <a href=""><FaTelegramPlane id='social-style' /></a>
                <a href="https://github.com/iXZed026"><FaGithub id='social-style' /></a>
                <a href=""><FaDiscord id='social-style' /></a>
              </div>
              <Link id='portfolio-style' to="/Portfolio/Portfolio">
                <button onClick={activePotfolioHandler} type='submit'>
                  رزومه ها
                </button>
              </Link>
            </div>
          </div>
          <div className="team-picture">
            <div className="picture">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
