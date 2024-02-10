import React, { useState, useEffect } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
import { Humburger } from './Humburger';
import HumburgerMenu from "./HumburgerMenu";
import { useActiveProviderHumb } from '../../provider/HumbProvider';
import { useSetActiveProviderHumb } from '../../provider/HumbProvider';
import { useActiveLinkProvider } from '../../provider/LinkProvider';
import { useSetActiveLinkProvider } from '../../provider/LinkProvider';

export const Header = () => {

    const activeHumb = useActiveProviderHumb();
    const setActiveHumb = useSetActiveProviderHumb();

    const activeLink = useActiveLinkProvider();
    const setActiveLink = useSetActiveLinkProvider();

    const [scrollHeader, setScrollHeader] = useState(false);

    useEffect(() => {

        if (window.location.pathname !== "/") {
            window.location.pathname = "/"
        }

        const scrollHandle = () => {

            if (Math.round(window.scrollY <= 0)) {
                setScrollHeader(false);
            } else {
                setScrollHeader(true);
            }
        }

        document.addEventListener("scroll", scrollHandle);

        return () => {
            document.addEventListener("scroll", scrollHandle)
        }

    }, []);

    const activeLinkHandler = (event) => {

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


    return (
        <>
            <div className="header"
                style={scrollHeader ? { position: "fixed" } : { position: "inherit" }}>
                <div className="header-container" >
                    <div className="header-flex">
                        <div className="nav-bar">
                            <Link onClick={activeLinkHandler} to="./Home/Home" id="link-style" ><p data-link={"home"} className={activeLink.homeFlag ? "link-active" : ''}>خانه</p></Link>
                            <Link onClick={activeLinkHandler} to="./Portfolio/Portfolio" id="link-style" ><p data-link={"portfolio"} className={activeLink.portfolioFlag ? "link-active" : ''}>رزومه های ما</p></Link>
                            <Link onClick={activeLinkHandler} to="./AboutUs/AboutUs" id="link-style" ><p data-link={"aboutUs"} className={activeLink.aboutUsFlag ? "link-active" : ''}>درباره ما</p></Link>
                            <Link onClick={activeLinkHandler} to="./ContactUs/ContactUs" id="link-style" ><p data-link={"contactUs"} className={activeLink.contactUsFlag ? "link-active" : ''}>تماس با ما</p></Link>
                        </div>
                        <div className="logo">
                            <h2><span>R</span>esume</h2><IoNewspaperOutline id='resume-icon' />
                        </div>
                    </div>
                    <Humburger />
                </div>
            </div>
            {
                activeHumb && (
                    <HumburgerMenu activeHumb={activeHumb} setActiveHumb={setActiveHumb}
                        activeLink={activeLink} setActiveLink={setActiveLink} />
                )
            }
        </>
    )
}
