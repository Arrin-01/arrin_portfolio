import { Link } from 'react-scroll';
import { useState } from 'react';
import '../pages/pages-css/header.css';

export default function Header(){
    const [menu, setMenu] = useState(false);
    const [patty1, setPatty1] = useState(0);
    const [patty2, setPatty2] = useState(0);
    const [width, setWidth] = useState(33)
    const [opac, setOpac] = useState(1);
    const [showHide, setShowHide] = useState(0);
    const burgerStatus = document.documentElement.style;

    function ShowHide(){
        if(menu === false){
            setOpac(0);
            setShowHide(1);
            setPatty1(45);
            setPatty2(-45);
            setWidth(45);
            setMenu(true);
        }
        else{
            setOpac(1);
            setShowHide(0);
            setPatty1(0);
            setPatty2(0);
            setWidth(33);
            setMenu(false);
        }
        burgerStatus.setProperty(`--ofacity`,`${opac}`);
        burgerStatus.setProperty(`--showhide`,`${showHide}`);
        burgerStatus.setProperty(`--rotateA`,`${patty1}deg`);
        burgerStatus.setProperty(`--rotateB`,`${patty2}deg`);
        burgerStatus.setProperty(`--width`,`${width}px`);
    }

    return(
        <>
        <header className="header-fix">
            <nav>
                <ul className="head-navs">
                    <li className="nav-link"><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>HOME</Link></li>
                    <li className="nav-link"><Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>SKILLS</Link></li>
                    <li className="nav-link"><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
                    <li className="nav-link"><Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link></li>
                    <li className="nav-link"><Link activeClass="active" to="reference" spy={true} smooth={true} duration={500}>REFERENCE</Link></li>
                    <li className="nav-link"><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
                </ul>
            </nav>
        </header>
        <nav onClick={ShowHide} className="burger-menu">
            <div className="burger-patty1"></div>
            <div className="burger-patty2"></div>
            <div className="burger-patty3"></div>
            <ul className="burger-cheese">
                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}><li className="burger-link">HOME</li></Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}><li className="burger-link">SKILLS</li></Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}><li className="burger-link">ABOUT</li></Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}><li className="burger-link">PROJECTS</li></Link>
                <Link activeClass="active" to="reference" spy={true} smooth={true} duration={500}><li className="burger-link" >REFERENCE</li></Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}><li className="burger-link">CONTACT</li></Link>
            </ul>
        </nav>
    </>
    )
}