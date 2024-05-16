import star1 from './stars1.png';
import star2 from './stars2.png';
import star3 from './stars3.png';
import star4 from './stars4.png';
import star5 from './stars5.png';
import star6 from './stars6.png';
import star7 from './stars7.png';
import star8 from './stars8.png';
import './bg.css';

export default function BackGround (){
    return(
        <section className="star-bg-fix">
            <div className="star-bg-rel">
                <img src={star1} class="star star1"/>
                <img src={star2} class="star star2"/>
                <img src={star3} class="star star3"/>
                <img src={star4} class="star star4"/>
                <img src={star5} class="star star5"/>
                <img src={star6} class="star star6"/>
                <img src={star7} class="star star7"/>
                <img src={star8} class="star star8"/>
            </div>
        </section>
    )
}

