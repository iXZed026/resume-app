import React from 'react';
import "./MoreInfo.css"

export const MoreInfo = (props) => {

  const { id, firstName, lastName, area, aboutMe, img, yearOfBirth, expertise, address, setMoreInfo, gender } = props;


  return (
    <div className="moreInfo">
      <div className="moreInfo-container">
        <div className="moreInfo-flex">
          <div className="personal-information">
            <div className="personal-header">
              <img src={img} alt=" profile not found " />
              <h2>{`${firstName} ${lastName}`}</h2>
            </div>
            <div className="presonal-body">
              <h3>اطلاعات شخصی</h3>
              <h4 className="expertise">تخصص : {expertise}</h4>
              <h4 className="birth-of-year">سال تولد : {yearOfBirth}</h4>
              <h4 className="gender">جنسیت : {gender}</h4>
              <h4 className="address">ادرس محل سکونت : {address}</h4>    </div>
          </div>
          <div className="about-me">
            <h2>{area}</h2>
            <h3>درباره من</h3>
            <p>{aboutMe}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
