import React from 'react';
import './intro.css';
import ImageJp from '../../assets/LACSAMANA__JHAN_PAUL_G__40_-removebg.png'
import btnImg from '../../assets/search.png'


const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'> I'm <span className='introName'> Jhan Paul</span> <br/> Website Designer</span>
                <p className='introPara'> I am a skilled web designer with experience in creating <br/>visually appealing and user friendly website.</p>
                <a> <button className='btnHire'> <img src={btnImg} className='btnImg'/> Hire Me</button></a>
            </div>
            <img src={ImageJp} alt='JhanPaul' className='jpImg'/>
        </section>
    );
}

export default Intro;