import React from 'react';
import './works.css';
import calculator from '../../assets/calculate.png'


const Works = () => {
    return (
        <section id='Works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDes'>In my project list, I have curated a diverse portfolio showcasing my expertise in web and app development, encompassing projects ranging from responsive website designs to interactive mobile applications. Each project demonstrates my ability to translate innovative ideas into practical, user-centric solutions, highlighting my proficiency in various programming languages and technologies.</span>
            <div className='worksImgs'>
                <img src={calculator} alt='' className='worksImg'/>
                <img src={calculator} alt='' className='worksImg'/>
                <img src={calculator} alt='' className='worksImg'/>
                <img src={calculator} alt='' className='worksImg'/>
                <img src={calculator} alt='' className='worksImg'/>
                <img src={calculator} alt='' className='worksImg'/>
            </div>
            <button className='worksButton'>See More</button>
        </section>
    );
}

export default Works;