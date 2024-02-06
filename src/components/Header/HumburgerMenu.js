import React from 'react';
import "./HumburgerMenu.css";
import { GrClose } from "react-icons/gr";

const humburgerMenu = (props) => {

  // Destructuring props to extract 'activeHumb' and 'setActiveHumb'
  const { activeHumb, setActiveHumb } = props;

  // Function to close the hamburger menu
  const closeHumbMenu = () => {
    setActiveHumb(false);
  }

  return (
    <div className="humburger-back-ground">
      <div className="humburger-menu">
        <div className="humburger-menu-container">
          <GrClose id='close-icon' onClick={closeHumbMenu} />
          <div className="humburger-menu-flex">
          </div>
        </div>
      </div>
    </div>
  )
}

export default humburgerMenu; 