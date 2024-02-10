import React, { createContext, useContext, useState } from 'react';

const ActiveLinkContext = createContext();
const SetActiveLinkContext = createContext();

export const LinkProvider = ({ children }) => {

    const [activeLink, setActiveLink] = useState({
        homeFlag: true,
        portfolioFlag: false,
        aboutUsFlag: false,
        contactUsFlag: false,
    })

    return (
        <ActiveLinkContext.Provider value={activeLink}>
            <SetActiveLinkContext.Provider value={setActiveLink}>
                {children}
            </SetActiveLinkContext.Provider>
        </ActiveLinkContext.Provider>
    )
}

const useActiveLinkProvider = () => {
    return useContext(ActiveLinkContext);
}

const useSetActiveLinkProvider = () => {
    return useContext(SetActiveLinkContext);
} 

export { useActiveLinkProvider, useSetActiveLinkProvider }
export default LinkProvider;