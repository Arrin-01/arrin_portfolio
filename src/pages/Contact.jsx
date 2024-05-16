import { useState } from 'react';
import emailjs from '@emailjs/browser';

import iconfb from './pages-img/icon-fb.png';
import iconinst from './pages-img/icon-inst.png';
import iconlink from './pages-img/icon-link.png';
import iconx from './pages-img/icon-x.png';
import './pages-css/contact.css';
import a1 from './pages-img/hro-profile5.png';

export default function Contact(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    function SendEmail(e){
        e.preventDefault();

        const serviceId = "service_8cwul9i";
        const templetId = "template_p1xbe9n";
        const publicKey = "sHT4V_Ea9Z0WVmr0g";

        const emailParams = {
            from_name: name,
            from_email: email,
            to_name: "Arrin Longaza",
            message: msg,
        };

        emailjs.send(serviceId, templetId, emailParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully!", response);
                setName("");
                setEmail("");
                setMsg("");
            })
            .catch((error) => {
                console.log("ERROR! email not send...", error);
            });
    }

    return(
    <section id="contact">
        <h2>MY CONTACT</h2>
        <div className="contact-container">
            <form onSubmit={SendEmail} className="contact-form p-box">
            <h3 className="cont-h3">Get in Touch</h3>
                <input
                    className="inputName"
                    placeholder="Your Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="inputEmail"
                    placeholder="Your E-mail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    cols="30"
                    rows="10"
                    className="inputMessage"
                    placeholder="Your message (maximum of 200 characters)"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                >
                </textarea>
                <button
                    className="portfolio-button"
                    type="submit"
                >
                    SEND
                </button>
            </form>
            <div className="contact-icons p-box">
                <img className="cont-img" src={a1} alt="contact profile image"/>
                <h3 className="cont-h3">You can follow me on my social media</h3>
                <div className="cont-icons">
                    <a href="https://www.facebook.com/" target="_blank"><img className="icons" src={iconfb} alt="facebook icon"/></a>
                    <a href="https://www.instagram.com/" target="blank"><img className="icons" src={iconinst} alt="instagram icon"/></a>
                    <a href="https://www.linkedin.com/" target="blank"><img className="icons" src={iconlink} alt="linked in icon"/></a>
                    <a href="https://twitter.com/" target="blank"><img className="icons" src={iconx} alt="x icon"/></a>            
                </div>
            </div>
        </div>
    </section>
    )
}
