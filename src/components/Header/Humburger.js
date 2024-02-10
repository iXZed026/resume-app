import React, { useState, useContext } from 'react';
import "./Humburger.css";
import { useActiveProviderHumb } from '../../provider/HumbProvider';
import { useSetActiveProviderHumb } from '../../provider/HumbProvider';


export const Humburger = () => {
    // Using custom hooks to get and set the active state from a provider
    const activeHumb = useActiveProviderHumb();
    const setActiveHumb = useSetActiveProviderHumb();

    // Handler function to set the active state to true when the humburger is clicked
    const activeHumburgerHandler = () => {
        setActiveHumb(true);
    }

    return (
        <>
            <div
                className="humburger" onClick={activeHumburgerHandler}>
                <div className="humburger-container">
                    <div className="humburger-flex">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}
