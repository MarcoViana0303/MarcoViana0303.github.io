import React, { useState } from "react";

function Menu() {
 const [darkMode, setDarkMode] = useState(false);
 const isDarkMode = () => {
  setDarkMode(!darkMode);
}; 

 const messageTemporary = () => {
  alert('Botão dark-mode temporariamente desligado.')
 };
    return(
         <header>
       <a className="navbar-brand opacity-50 logo" href="#home">{'<Marco Viana />'}</a>

       <div className="bx bx-menu" id="menu-icon"></div>

       <ul className="navbar">
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#social-media">Mídias sociais</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><a href="#teste">Teste</a></li>
        <div className="bx bxs-ghost" id="darkmode" onClick={messageTemporary}></div>
       </ul> 
      
    </header> 
    )
}

export default Menu;