import img1 from './pages-img/ui-ux.png';
import img2 from './pages-img/front-end.jpg';
import img3 from './pages-img/back-end.png';
import img4 from './pages-img/communication.jpg';
import './pages-css/skills.css';


export default function Skills(){
    return(
    <section id="skills">
        <h2>SKILLS AND EXPERTISE</h2>
        <div className="skill-container">
            <div className="skill-content p-box">
                <h4>UI/UX Design</h4>
                <img src={img1}/>
                <p>
                    "I am a self-taught UI/UX enthusiast with a strong passion for learning
                    and applying design principles to create engaging user experiences."
                </p>
            </div>

            <div className="skill-content p-box">
                <h4>Front-End</h4>
                <img src={img2}/>
                <p>
                    "I am a self-motivated front-end developer proficient in HTML, CSS, JavaScript 
                    and React, with a dedication in creating dynamic and user-friendly web interfaces."
                </p>
            </div>

            <div className="skill-content p-box">
                <h4>Back-End</h4>
                <img src={img3}/>
                <p>
                    "I also have a keen interest in expanding my skill set to include back-end development,
                    demonstrating a proactive attitude towards continues learning and growth in the field of web development."
                </p>
            </div>

            <div className="skill-content p-box">
                <h4>Communication</h4>
                <img src={img4}/>
                <p>
                    "I am a result-driven professional with a strong background in sales and marketing,
                    equipped exceptional communication skills to effectively engage with clients and drive business growth."
                </p>
            </div>
        </div>
    </section>
    )
}