import React from "react";

export default function ProjectPagination({
  projects,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div>
      <div className="project-divs">
        {projects
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((project) => (
            <div className="project-unit" key={project.id}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <img src={project.image} className="image-project" alt="" />
                <p>{project.description}</p>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            </div>
          ))}
      </div>
      <div className="pagination">
        <ul className="page-numbers">
          {getPageNumbers().map((page) => (
            <li
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
