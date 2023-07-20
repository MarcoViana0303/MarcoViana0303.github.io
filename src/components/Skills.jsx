import React from "react";
import MockSkills from "../mocks/mock.skills";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="heading">
        <h2>Skills</h2>
        <span>Algumas das tecnologias que pude adquirir conhecimento</span>
      </div>
      <div className="skills-container">
        <div className="div-skills">
          {MockSkills.map((skill) => {
            return <div className="skill-card">
              <div className="skill-image">
                <img src={require(`../photos/${skill.image}`)} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
            </div>

          })}
        </div>
      </div>
    </section>
  );
}
