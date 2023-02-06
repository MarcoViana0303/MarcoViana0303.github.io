import React from "react";

export default function Description() {
    return(
        <section className="about" id="about">
            <div className="heading">
                <h2 id="aboutMe">Sobre mim</h2>
                <span>Me conheça um pouco mais</span>
            </div>
            <div className="about-container">
                {/* <div className="about-img">
                    <img src="https://www.promoview.com.br/uploads/images/unnamed%2819%29.png" alt="Marco Viana" />
                </div> */}
                <div className="about-text">
                    <div className="about-description"><p><h3>Me chamo Marco, tenho 21 anos e moro em Ferraz de Vasconcelos. Tive meu primeiro contato com a tecnologia aos meus 16 anos de idade, quando cursei Desenvolvimento de Sistemas na Etec. Hoje, apaixonado por programação, estou sempre buscando aperfeiçoar minhas skills enquanto desenvolvo projetos FullStack com a Trybe, uma escola de programação Web. </h3></p></div>
                    
        <div className="information">
            <div className="info-box">
                <i className="bx bxs-user"></i>
                <span>Marco Antônio Maciel Viana</span>
            </div>
            <div className="info-box">
                <i className="bx bxl-linkedin"></i>
                <span><a href="https://www.linkedin.com/in/marco-viana2022">https://www.linkedin.com/in/marco-viana2022</a></span>
            </div>
            <div className="info-box">
                <i className="bx bx-map"></i>
                <span>São Paulo - SP / Brasil</span>
            </div>
        </div>
        
                </div>
            </div>
        </section>
        
    )
}