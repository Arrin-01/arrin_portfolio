import ref1 from './pages-img/reference1.jpg/';
import ref2 from './pages-img/reference2.jpg/';
import ref3 from './pages-img/reference3.jpg/';
import './pages-css/reference.css';


export default function Reference(){
    return(
    <section id="reference">
        <h2>MY REFERENCES</h2>
        <div className="reference-container">
            <div className="reference-box p-box">
                <img src={ref1}/>
                <h4>ELOISA SANTIAGO</h4>
                <h4>Accounting Manager</h4>
                <p>
                    "Arrin is a smart and organize person. He's creativeness did a great contribution in document designs and presentations.
                    Being funny and clever are the things that you will like on his personality."
                </p>
            </div>

            <div className="reference-box p-box">
                <img src={ref2}/>
                <h4>CATHERINE OLMOGES</h4>
                <h4>Marketing Director</h4>
                <p>
                    "Arrin is my partner in business and marketing, when it comes in sales he is very good in closing deals to the client.
                    He can show to the clients a very good solutions to solve their problems using the products that we selling."
                </p>
            </div>

            <div className="reference-box p-box">
                <img src={ref3}/>
                <h4>VHON DOMINIC</h4>
                <h4>Software Engineer Instructor</h4>
                <p>
                    "I am not totally became he's direct mentor in web development, but I do make a conversation with Arrin on my discord channel, 
                    and I believe that he has a potential to become great Software Engineer."
                </p>
            </div>
        </div>
    </section>
    )
}