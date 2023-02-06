import React, { useState } from "react";

function Menu() {
const [darkMode, setDarkMode] = useState(false);

 const messageTemporary = () => {
  alert('Botão dark-mode temporariamente desligado.');
  setDarkMode(!darkMode);
 };
    return(
         <header>
       <a className="navbar-brand opacity-50 logo" href="#home">{'<Marco Viana />'}</a>

       <div className="bx bx-menu" id="menu-icon"></div>

       <ul className="navbar">
       <li><a href="#home">Início</a></li>
        <li><a href="#about">Sobre mim</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
        <div className="bx bxs-ghost" id="darkmode" onClick={messageTemporary}></div>
        { darkMode && <audio autoPlay >
  <source src={ require('../Audio/files_theme2.mp3')} type="audio/mp3" />
</audio> }
       </ul> 

    </header> 
    )
}

export default Menu;