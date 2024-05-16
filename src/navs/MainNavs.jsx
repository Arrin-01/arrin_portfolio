import { Link, Element } from 'react-scroll';
import Hero from '../pages/Hero.jsx';
import About from '../pages/About.jsx';
import Skills from '../pages/Skills.jsx';
import Projects from '../pages/Projects.jsx';
import Reference from '../pages/Reference.jsx';
import Contact from '../pages/Contact.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';


function MainNavs(){
    return(
        <> 
            <ul className="main-navs-link">
                <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500}></Link></li>
                <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}></Link></li>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={500}></Link></li>
                <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}></Link></li>
                <li><Link activeClass="active" to="reference" spy={true} smooth={true} duration={500}></Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}></Link></li>
            </ul>
            <header><Header/></header>
            <main>
                <Element name="home"className="elements"><Hero/></Element>
                <Element name="skills" className="elements"><Skills/></Element >
                <Element name="about" className="elements"><About/></Element >
                <Element name="projects" className="elements"><Projects/></Element >
                <Element name="reference" className="elements"><Reference/></Element >
                <Element name="contact" className="elements"><Contact/></Element >
            </main>
            <footer><Footer/></footer>
        </>
    )
}
export default MainNavs