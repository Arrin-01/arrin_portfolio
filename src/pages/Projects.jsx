import { useState } from 'react';
import img1 from './pages-img/project1.png';
import img2 from './pages-img/project2.png';
import img3 from './pages-img/project3.png';
import './pages-css/projects.css';

export default function Projects(){
    const projects = [
        {
            id: 1,
            image: img1,
            title: "CareBest Insurance",
            details1: `This is a marketing type website were the company sells insurance to customer. The website has a fixed navigation bar and includes navigation links like home, about, products, claims, support, contact and user accounts. In the part of homepage or hero section is a slider that automatically change images every after 5 seconds.`,
            details2: `The user account button in the top left is a navlink function were the customers can log-in on their account. On their account profile, the client can monitor the duration of the insurance plan that they bought. Not only that but also other type of plans, insurance coverage, claims (if they bought long term insurance) and many private information as well.`,
            faq: `Why this type of website?`,
            details3: `I choose this type of website as my First Project (although it was just my imagination) because last 2014 and 2015, I worked as a freelance Insurance Agent, yeah maybe I can say a Financial Advisor, but its just only months, so I did not included that details on my CV.`,
            details4: `I was just inspired during that time that I learning some sales platform techniques with my collegues as an Financial Advisor, and I was really inspired and proud on myself when I can make a closed deal with the client. Creating this website reminds me on that nostalgic moments.`
        },
        {
            id: 2,
            image: img2,
            title: "Kathrina Cuisinera",
            details1: `This is a blogs and media outlet website about cooking and food recipes. The navigation bar is not fixed, because the design is just like reading of a magazine about cooking and different recipes. The navigation links are recipe, cookbook, lifestyle, podcast, about, contact and search bar were some visitors can search any foods or recipes they like.`,
            details2: `Although the navigation is not fixed, there are lot of links that are scattered in webpage while scrolling, so the visitors can easily navigate scroll back on to the top.`,
            faq: `So! am I good in cooking?`,
            details3: `Yeah, i can cook foods by just following the steps from the recipe books and the exact ingredients while cooking. But I am not a master chef.`,
            details4: `Well, i creating this website dedicated to my wife because she is the one who really likes cooking. She also have a facebook page where she upload her videos about cooking. So I dedicate this website to her on her cooking blogs purposes.`
            
        },
        {
            id: 3,
            image: img3,
            title: "Palay Foundation",
            details1: `This is a non-profit organization type of website that focuses on helping our Filipino Farmers. The header and navigation bar is fixed on top with navlinks pointing to home, about, news, topics, learn and donate. The hero section is a slide show that change images for every 5 seconds.`,
            details2: `There is also search bar, where the visitors can search topics or news related to rice farming, agriculture and events. I also includes donate section where some random kind-hearted-visitors can donate any amount to help our local farmers in times of typhoons`,
            faq: `Am I planning to build my own non-profit organization?`,
            details3: `No! I just designing this website to practice my web development skills. I am not interested in some kind of any related political works. Actually, this is my 4th created web design and my #rd web design i also a marketing type website.`,
            details4: `As of now I am still on the development of my 3-rd website, because it needs to perform a lot of CRUD operations and I am still in the learning process in database related operations. As of now my skills is more on UI/UX and front end.`,
        },
    ];
    
    const [imgIndex, setImgIndex] = useState(1);

    const slideMsg = document.getElementsByClassName("slide-msg")[0];

    function PrevImg(){
        setImgIndex(imgIndex => imgIndex === 1 ? imgIndex = 3 : imgIndex - 1);
    }

    function NextImg(){
        setImgIndex(imgIndex => imgIndex === 3 ? imgIndex = 1 : imgIndex + 1);
    }

    const showSlides = projects.filter(project => project.id === imgIndex);

    return(
    <section id="projects">
        <div className="h2h4">
            <h2>MY RECENT PROJECTS</h2>
            <h4>As of now I have 3 projects. But these companies are not real and does not exist in the real world. I just created these base on my imagination, just to practice my web development skills &#128513;</h4>
        </div>
        <div className="slide-control">
            <span onClick={PrevImg}>{"<<"} PREV</span>
            <h3>Project {imgIndex}</h3>
            <span onClick={NextImg}>NEXT {">>"}</span>
        </div>
        <div>
            {showSlides.map(showSlide => {
                return(
                    <div key={showSlide.id} className="project-slider">
                        <div className="slide-img">
                            <img src={showSlide.image} alt="Projects"/>
                        </div>
                        <div className="slide-details p-box">
                            <h2><strong>{showSlide.title}</strong></h2>
                            <p>{showSlide.details1}</p>
                            <p>{showSlide.details2}</p>
                            <p><strong>{showSlide.faq}</strong></p>
                            <p>{showSlide.details3}</p>
                            <p>{showSlide.details4}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    </section>
    )
}
