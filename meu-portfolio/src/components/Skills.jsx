import React from "react";

export default function Skills() {
    return( 
    <section className="skills" id="skills">
        <div className="heading">
            <h2>Skills</h2>
            <span>Algumas das tecnologias que pude adquirir conhecimento</span>
        </div>
        <div className="skills-container">
            <div className="bars div-skills">
                <div className="bars-box skills-image">
                    <h3>HTML5</h3>
                    <div>
                    <img src={ require('../photos/html5.png')} alt="" />
                    </div>
                 
                </div>
                 <div className="bars-box skills-image">
                    <h3>CSS3</h3>
                    <div>
                    <img src={ require('../photos/css3.png')} alt="" />
                    </div>
               
                </div> 
                 <div className="bars-box skills-image">
                    <h3>Javascript</h3>
                    <div>
                    <img src={ require('../photos/javascript.png')} alt="" />
                    </div>
            
    
                </div> 
                <div className="bars-box skills-image">
                    <h3>React</h3>
                    <div>
                    <img src={ require('../photos/react.png')} alt="" />
                    </div>
                  
            
                </div>
                <div className="bars-box skills-image">
                    <h3>Redux</h3>
                    <div>
                    <img src={ require('../photos/redux.png')} alt="" />
                    </div>
  
                </div>
                <div className="bars-box skills-image">
                    <h3>Jest</h3>
                    <div>
                    <img src={ require('../photos/jest.png')} alt="" />
                    </div>
    
                </div>
                <div className="bars-box skills-image">
                    <h3>Docker</h3>
                    <div>
                    <img src={ require('../photos/docker.png')} alt="" />
                    </div>
   
                </div>
                <div className="bars-box skills-image">
                    <h3>MySQL</h3>
                    <div>
                    <img src={ require('../photos/mysql.png')} alt="" />
                    </div>
                </div>
            </div>
           
        </div>
        {/* <p>
        Algumas das tecnologias que tive a oportunidade de me aprofundar:
        <img src="./photos/png-clipart-mysql-mysql.png" alt="" />
        <ul>
            <li><em>MySQL</em></li>   
            <li><em>HTML, CSS, Javascript</em></li>
            <li><em><strong>Git</strong> e <strong>GitHub</strong></em></li>
            <li><em><strong>Terminal</strong></em></li>
    
        </ul>
    </p> */}
    </section>
       
    
    )
}