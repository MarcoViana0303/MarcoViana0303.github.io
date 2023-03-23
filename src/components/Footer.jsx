import React from "react";

export default function SocialMedia() {
    const copy = require('clipboard-copy');

    const copyButton = () => {
        copy('marcoviana.dev@gmail.com')
        alert('Email copiado para a área de transferência!');
    }
    return(
        <div><div className="footer">
        <h2>Minhas redes</h2>
        <div id="social-media" className="footer-social">
         <a href="https://github.com/MarcoViana0303"><i className="bx bxl-github"></i></a>
         <a href="https://www.linkedin.com/in/marco-viana2022/"><i className="bx bxl-linkedin-square"></i></a>
    
         <button onClick={copyButton}><i className="bx bxl-gmail"></i></button>
    
         <a href="https://discordapp.com/users/417134547180716042"><i className="bx bxl-discord-alt"></i></a>
    
        </div>
    
    
    
    </div>
        <div className="copyright">
            <div className="copyright-icon">
            <i class='bx bx-copyright'></i>
            </div>
        Todos os direitos reservados.
        </div>
    
    </div>



    )
}