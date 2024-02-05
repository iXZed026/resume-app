import React, { useState } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
import { Humburger } from './Humburger';
import HumburgerMenu from "./HumburgerMenu";
import { useActiveProviderHumb } from '../../provider/HumbProvider';
import { useSetActiveProviderHumb } from '../../provider/HumbProvider';


export const Header = () => {

    const activeHumb = useActiveProviderHumb();
    const setActuveHumb = useSetActiveProviderHumb();

    const [scrollHeader, setScrollHeader] = useState(false);

    document.addEventListener("scroll", () => {
        if (Math.round(window.scrollY <= 0)) {
            setScrollHeader(false);
        } else {
            setScrollHeader(true);
        }
    });


    return (
        <>
            <div className="header" style={scrollHeader ? {position:"fixed"} : {position:"inherit"}}>
                <div className="header-container">
                    <div className="header-flex">
                        <div className="nav-bar">
                            <Link id="link-style"><p>خانه</p></Link>
                            <Link id="link-style"><p>رزومه های ما</p></Link>
                            <Link id="link-style"><p>درباره ما</p></Link>
                            <Link id="link-style"><p>تماس با ما</p></Link>
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
                    <HumburgerMenu />
                )
            }
        </>
    )
}
