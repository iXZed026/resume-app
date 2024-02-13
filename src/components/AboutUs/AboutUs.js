import React, { useState } from 'react';
import "./AboutUs.css";
import { AboutBox } from './AboutBox';
import { MoreInfo } from './MoreInfo';

export const AboutUs = () => {

  const [aboutUs, setAboutUs] = useState([
    { id: 1, firstName: "دانیال", lastName: "لطفی", age: 19, area: "Frontend", aboutMe: "Lorem ipsum dolor sit amet.", img: "../images/danyal.jpg" },
    { id: 2, firstName: "امین", lastName: "قاسمی", age: 20, area: "Backend", aboutMe: "Lorem ipsum dolor sit amet.", img: "../images/1101238.jpg" },
    { id: 3, firstName: "سارا", lastName: "مرادخانی", age: 21, area: "Database", aboutMe: "Lorem ipsum dolor sit amet.", img: "../images/1101238.jpg" },
    { id: 4, firstName: "اشکان", lastName: "طاهرنیا", age: 19, area: "Wordpress", aboutMe: "Lorem ipsum dolor sit amet.", img: "../images/1101238.jpg" },
  ]);

  const [newAboutUs, setNewAboutUs] = useState(null);

  const [moreInfo, setMoreInfo] = useState(false);

  const infoHandle = (ID) => {
    let findAboutUs = aboutUs.find((about => about.id === ID));
    setNewAboutUs(findAboutUs)
  }

  return (
    <>
      {
        !moreInfo ? (
          <div className="about-us">
            <div className="about-us-container">
              <div className="about-us-flex">
                {
                  aboutUs.map((about, key) => <AboutBox moreInfo={moreInfo} key={about.id} {...about} onInfo={infoHandle} setMoreInfo={setMoreInfo} />)
                }
              </div>
            </div>
          </div>
        ) : (
          <MoreInfo {...newAboutUs} setMoreInfo />
        )
      }
    </>
  )
}
