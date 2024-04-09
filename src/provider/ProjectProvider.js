import React, { useState } from 'react';
import { createContext, useContext } from 'react';

const ProjectContext = createContext();
const SetProjectContext = createContext();

const ProjectProvider = ({ children }) => {

    const [project, setProject] = useState([
        { id: 1, name: 'danial', video: ["../images/danialProject1.mp4", "../images/danialProject2.mp4"] },
        { id: 2, name: 'ashkan', video: ["danialProject1.mp", "danialProject2.mp"] },
    ]);

    return (
        <ProjectContext.Provider value={project}>
            <SetProjectContext.Provider value={setProject}>
                {children}
            </SetProjectContext.Provider>
        </ProjectContext.Provider>
    )
}

const useProjectProvider = () => {
    return useContext(ProjectContext)
}

const useSetProjectProvider = () => {
    return useContext(SetProjectContext)
}

export { useProjectProvider, useSetProjectProvider }
export default ProjectProvider;