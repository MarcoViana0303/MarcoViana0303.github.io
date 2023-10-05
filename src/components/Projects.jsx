import React from "react";
import projects from '../mocks/mock.projects'
import ProjectPagination from "./ProjectsPagination";
import { useState } from "react";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Número de projetos por página

  return (
    <div className="projects" id="projects">
      <div className="heading projects-done">
        <h2>Projetos</h2>
        <span>Alguns dos projetos que realizei individualmente ou com uma equipe</span>
      </div>

      <div className="project-divs">

          <ProjectPagination
            projects={projects}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />

      </div>
    </div>
  )
};
