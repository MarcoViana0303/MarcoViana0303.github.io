import React from "react";

export default function Skills() {
    return( 
    <section className="skills" id="skills">
        <div className="heading">
            <h2>Skills</h2>
            <span>Minhas skills</span>
        </div>
        <div className="skills-container">
            <div className="bars">
                <div className="bars-box">
                    <h3>HTML</h3>
                    <span>95%</span>
                    <div className="light-bar"></div>
                    <div className="percent-bar html-bar"></div>
                </div>
            </div>
        </div>
        <p>
        Algumas das tecnologias que tive a oportunidade de me aprofundar:
        <img src="./photos/png-clipart-mysql-mysql.png" alt="" />
        <ul>
            <li><em>MySQL</em></li>   
            <li><em>HTML, CSS, Javascript</em></li>
            <li><em><strong>Git</strong> e <strong>GitHub</strong></em></li>
            <li><em><strong>Terminal</strong></em></li>
    
        </ul>
    </p>
    </section>
       
    
    )
}