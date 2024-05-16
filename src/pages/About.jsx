import imgAbout from './pages-img/hero-profile4.jpg';
import resume from './pages-doc/my-cv.pdf';
import './pages-css/about.css';

export default function About(){
    function DownloadDocs(){
        const downloadLink = document.createElement("a");
        downloadLink.href = resume;
        downloadLink.download = "LONGAZA, MARK ALDRIN CV.pdf";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
    
    return(
    <section id="about">
        <h2>ABOUT ME</h2>
        <div className="about-sec-box"> 
            <div className="about-profile">
                <img src={imgAbout} alt="profile about section"/>
            </div>
            <div className="about-myself">
                <section>
                    <p>
                    "Hello, I am <strong className="strong-name">Mark Aldrin "Arrin" M. Longaza</strong>, a dedicated professional with 13 years of experience in marketing roles.<br/>Recently, I embarked on a journey to reignite my passion for technology and programming. Through self-learning and hands-on practice, I have acquired proficiency in languages like HTML, CSS, JavaScript, React and C++.<br/>I bring a strong foundation in communication, problem solving, and project management from my sales background, complemented by a growing expertise in software development. I am excited to leverage my diverse skills and experiences to contribute effectively to the wonderful world of Information Technology."
                    </p>
                </section>
                <button type="button" onClick={DownloadDocs} className="portfolio-button">DOWNLOAD MY *CV* </button>
            </div>
        </div>
    </section>
    )
}