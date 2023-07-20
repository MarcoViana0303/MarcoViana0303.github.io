import React from "react";
import projects from '../mocks/mock.projects'

export default function Projects(){
    return (
        <div className="projects" id="projects">
        <div className="heading projects-done">
            <h2>Projetos</h2>
            <span>Alguns dos projetos que realizei individualmente ou com uma equipe</span>
        </div>

        <div className="heading projects-coming"><h2>Coming soon...</h2>

        <div className="project-divs">

{/* {projects.map(
    (project) => { return <div className="project-unit">
    <h3>{project.title}</h3>
    <img src={ require('../photos/projeto-1.png')} className="image-project" alt="" />
</div>}
    )} */}

</div>
        </div>


        </div>
    )
};
