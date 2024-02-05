import React, { createContext, useContext, useState } from 'react';


const ActiveHumbContext = createContext();
const SetActiveHumbContext = createContext();


const HumbProvider = ({ children }) => {

    const [activeHumb, setActiveHumb] = useState(false);

    return (
        <ActiveHumbContext.Provider value={activeHumb}>
            <SetActiveHumbContext.Provider value={setActiveHumb}>
                {children}
            </SetActiveHumbContext.Provider>
        </ActiveHumbContext.Provider>
    )
}



function useActiveProviderHumb() {
    return useContext(ActiveHumbContext);
}

function useSetActiveProviderHumb() {
    return useContext(SetActiveHumbContext);
}

export { useActiveProviderHumb, useSetActiveProviderHumb }
export default HumbProvider;