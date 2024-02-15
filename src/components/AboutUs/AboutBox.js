import React, { useState } from 'react';
import "./AboutBox.css"

export const AboutBox = (props) => {

    const { id, firstName, lastName, area, img, onInfo ,setMoreInfo} = props;

    const moreDetailsHandle = () => {
        onInfo(id)
        setMoreInfo(true)
    }

    return (
        <div className="aboutBox">
            <div className="aboutBox-container">
                <div className="aboutBox-flex">
                    <img src={img} alt="image not found" draggable='false'/>
                    <h2 id="fullName">{`${firstName} ${lastName}`}</h2>
                    <h3>{area}</h3>
                    <button src="submit" onClick={moreDetailsHandle}>جزئیات بیشتر</button>
                </div>
            </div>
        </div>
    )
}
