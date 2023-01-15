import emailjs from 'emailjs-com'
import React, { useRef } from "react";

export default function Contact() {
    const form = useRef();
    const message = 'Mensagem enviada com sucesso.'

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_obxr0s5', e.target, '0Vz2oS_OsznI4b37k')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    const messageForm = () => {
        alert(message);
    };
    return(
        <section className="contact">
            <div className="heading">
                <h2 id="contact">Contate-me</h2>
                <span>Me mande uma mensagem!</span>
            </div>
            <div className="contact-form">
                <form onSubmit={sendEmail} action="#">
                    <input type="text" placeholder="Nome" name='name' />
                    <input type="Email" placeholder="Email" name='email' />
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Escreva uma mensagem"></textarea>
                    <input type="submit" value="Enviar" className="contact-button" 
                    onClick={messageForm}/>
                </form>
            </div>
        </section>
    )
}