import React from "react";

function Menu() {
    return(
         <div>
       {/*  <nav id="secoes">
        <ul>
            <li><a href="#description">Sobre mim</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#profiles">Perfis</a></li>
            <li><a href="https://www.devmedia.com.br/" target="_blank">Blog: DevMedia</a></li>

        </ul>


    </nav> */}
nav justify-content-end
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="secoes">
  <div className="container-fluid">
    <a className="navbar-brand opacity-50" href="#home">{'< Marco Viana />'}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="#description">Sobre mim</a>
        <a className="nav-link" href="#skills">Skills</a>
        <a className="nav-link" href="#hobbies">Hobbies</a>
        <a className="nav-link" href="#profiles">Perfis</a>
      </div>
    </div>
  </div>
</nav>
    </div>
    )
}

export default Menu;