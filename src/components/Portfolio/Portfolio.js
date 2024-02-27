import React, { useState } from 'react';
import "./Portfolio.css";
import { useProjectProvider } from '../../provider/ProjectProvider';
import { useSetProjectProvider } from '../../provider/ProjectProvider';


const Portfolio = () => {

  const [mouseHover, setMouseHover] = useState(false);

  const projects = useProjectProvider();
  const setProjects = useSetProjectProvider();

  const [activeDisplay, setActiveDisplay] = useState(false);

  let [newProjectUser, setNewProjectUser] = useState(null);

  const handleMouseEnter = (event) => {
    const video = event.target;
    video.play()
  }

  const handleMouseLeave = (event) => {
    const video = event.target;
    video.pause();
  }

  const viewProject = (event) => {

    const user = event.target.parentElement.children[0].innerHTML;

    setActiveDisplay(true);

    const findProjectUser = projects.find(project => project.name === user);

    setNewProjectUser(findProjectUser);


  }

  return (
    <>
      <div className="portfolio" style={!activeDisplay ? { display: "initial" } : { display: "none" }}>
        <div className="portfolio-container">
          <div className="portfolio-flex">
            {
              projects.map((project, key) => (
                <div className="userProjects" key={project.id}>
                  <h2>{project.name}</h2>
                  <button onClick={viewProject}>دیدن رزومه</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="portfolio-box" style={activeDisplay ? { display: "initial" } : { display: "none" }}>
        <div className="portfolio-box-container">
          <div className="portfolio-box-flex">
            {
              newProjectUser && (
                newProjectUser.video.map((vid, key) => (
                  <div className="television-bg" key={projects.length}>
                    <video
                      src={vid}
                      type="video/mp4"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  </div>
                ))
              )
            }
          </div>
        </div>
      </div>
    </>



  )
}

export default Portfolio
