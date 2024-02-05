import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import { IoNewspaperOutline } from "react-icons/io5";
import { Humburger } from './Humburger';

export const Header = () => {
    return (
        <div className="header">
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
    )
}
