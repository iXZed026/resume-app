import React from 'react';
import "./Current.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export const Current = () => {
    return (
        <div className="current-send">
            <div className="current-send-container">
                <div className="current-send-flex">
                    <IoIosCheckmarkCircleOutline id='checkmark-icon' /><h3>عملیات با موفقیت انجام شد.</h3>
                </div>
            </div>
            <div id="line"></div>
        </div>
    )
}
