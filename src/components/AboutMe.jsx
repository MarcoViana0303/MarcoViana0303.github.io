import React from "react";

function AboutMe() {

  const copy = require('clipboard-copy');

  const copyButton = () => {
    copy('marcoviana.dev@gmail.com')
    alert('Email copiado para a área de transferência!')
  }
  return (
    <section className="home" id="home">
      <div className="social">

        <button onClick={copyButton}>
          <i className="bx bxl-gmail"></i>
        </button>

        <a href="https://www.linkedin.com/in/marco-viana2022/"><i className="bx bxl-linkedin-square"></i></a>
        <a href="https://github.com/MarcoViana0303"><i className="bx bxl-github"></i></a>
      </div>
      <div className="home-img">
        <img src={require('../photos/photoHome2.jpeg')} className='marquinho' alt="Marco Viana" />
      </div>
      <div className="home-text">
        <span>Olá, eu me chamo</span>
        <h1 className="efect-name animation-name">Marco Viana</h1>
        <h2>Fullstack developer</h2>
        <p className="aboutMe">Programador em constante evolução! </p>
      </div>

    </section>

  )
}

export default AboutMe;
