import React from 'react';
import "./MoreInfo.css"

export const MoreInfo = (props) => {

    const { id, firstName, lastName, area, img ,setMoreInfo} = props;


  return (
    <div className="moreInfo">
        <div className="moreInfo-container">
            <div className="moreInfo-flex">
                <h2>{`${firstName} ${lastName}`}</h2>
            </div>
        </div>
    </div>
  )
}
