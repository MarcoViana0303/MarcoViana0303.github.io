import React, { Children, useState } from "react";

export default function Teste() {
  const [ changeMenu, setChangeMenu ] = useState(false);
  const menuSectionOn = "menu-section on";
  const menuSection = "menu-section";

  const messageTemporary = () => {
    alert('Botão dark-mode temporariamente desligado.')
   };
   
      return(
        <header>
         
         <a className="navbar-brand opacity-50 logo" href="#home">{'<Marco Viana />'}</a>
   <div className={ changeMenu ? menuSectionOn : menuSection} onClick={() => setChangeMenu(!changeMenu)}>

        <div className="mobile-menu">
          
        
            <i className="bx bx-menu" id="menu-button"></i>
        

          <nav>
            <ul className="navbar">
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#social-media">Mídias sociais</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><a href="#teste">Teste</a></li>
        <div className="bx bxs-ghost" id="darkmode" onClick={messageTemporary}></div>
            </ul>
          </nav>



        </div>

   </div>
       
      
        </header>
    
      
  
    )  
}