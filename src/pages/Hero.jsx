import { useState } from 'react';
import { Link } from 'react-scroll';
import imgHero from './pages-img/hero-profile3.jpg';
import earth from './pages-img/earth.gif';
import './pages-css/hero.css';

export default function Hero(){

    const [lights, setLights] = useState(false);
    const rootStyle = document.documentElement.style; 

    function LightSwitch(event){
        const press = document.getElementsByClassName("press");
        if (lights === false) {
            rootStyle.setProperty(`--light-sizeX`,`45px`);
            rootStyle.setProperty(`--light-sizeY`,`-45px`);
            rootStyle.setProperty(`--blur-size`,`125px`);
            setLights(true);
        }
        else {
            rootStyle.setProperty(`--light-sizeX`,`4px`);
            rootStyle.setProperty(`--light-sizeY`,`-4px`);
            rootStyle.setProperty(`--blur-size`,`8px`);
            setLights(false);
        }
    }

    return(
    <section id="hero">
        <div className="hero-content">
            <h4>
                Hi their! I'm 
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}><span className="hero-name"> @rrin</span></Link>
                &emsp;<div className="hand">&#128400;</div>
            </h4>
            <h1>
                <span className="hero-title">W</span>
                <span className="hero-title">E</span>
                <span className="hero-title">B</span>
                <span> </span>
                <span className="hero-title">D</span>
                <span className="hero-title">E</span>
                <span className="hero-title">V</span>
                <span className="hero-title">E</span>
                <span className="hero-title">L</span>
                    <img src={earth} className="earth"/>
                <span className="hero-title">P</span>
                <span className="hero-title">E</span>
                <span className="hero-title">R</span>
            </h1>
            <h3>
            "A newcomer in web development, with a strong passion in
            computer programming and creating dynamic and user friendly websites."
            </h3>
            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}><button button="button" className="portfolio-button">GET IN TOUCH</button></Link>
        </div>
        <div className="hero-box">
            <img src={imgHero} onClick={LightSwitch}/>
        </div>
    </section>
    )
}