import React from 'react';
import "./MoreInfo.css";
// Icons
import { MdArrowBack } from "react-icons/md";
import { FaCircleNodes } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { IoMdCodeWorking } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaTransgender } from "react-icons/fa";
import { FaMountainCity } from "react-icons/fa6";

export const MoreInfo = (props) => {

  const { id, firstName, lastName, area, aboutMe, img, yearOfBirth, expertise, address, setMoreInfo, gender, workExperience } = props;

  const backHandle = () => {
    setMoreInfo(false)
  }


  return (
    <>
      <div className="back-button">
        <button onClick={backHandle}><p>برگشت</p><MdArrowBack id='icons-style' /></button>
      </div>
      <br />
      <div className="moreInfo">
        <div className="moreInfo-container">
          <div className="moreInfo-flex">
            <div className="personal-information">
              <div className="personal-header">
                <img src={img} alt=" profile not found " />
                <h2>{`${firstName} ${lastName}`}</h2>
              </div>
              <div className="presonal-body">
                <h3><GrSecure id='personal-style' /> اطلاعات شخصی</h3>
                <h4 className="expertise"><IoMdCodeWorking id='personal-style' /><p> تخصص : {expertise}</p></h4>
                <h4 className="birth-of-year"><LiaBirthdayCakeSolid id='personal-style' /><p>سال تولد : {yearOfBirth}</p></h4>
                <h4 className="gender"><FaTransgender id='personal-style' /><p>جنسیت : {gender}</p></h4>
                <h4 className="address"><FaMountainCity id='personal-style'/><p>ادرس محل سکونت : {address}</p></h4>
              </div>
            </div>
            <div className="about-me">
              <h2>{area}</h2>
              <h3><FaCircleNodes id='icons-color' /> درباره من</h3>
              <p>{aboutMe}</p>
              <h3><FaCircleNodes id='icons-color' />  سوابق شغلی</h3>
              <p>{workExperience}</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

MoreInfo.defaultProps = {
  workExperience: "سوابق شغلی وارد نشده است"
}
