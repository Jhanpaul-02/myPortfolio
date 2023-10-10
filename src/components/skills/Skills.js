import React from 'react';
import './skills.css';
import front from '../../assets/programming (2).png'
import back from '../../assets/app-development.png'


const Skills = () => {
    return (
    
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className='skillDesc'>Experienced front and back-end developer with a strong passion for creating seamless, user-friendly web applications, seeking to leverage my technical skills and innovative mindset to contribute effectively to a dynamic development team and deliver exceptional digital experiences.</span>
            <div className='skillSet'>
                <div className='set'>
                    <img src={front} className='sSet'/>
                    <div className='tSet'>
                        <h2>Front End</h2>
                        <p>Dedicated front-end developer proficient in creating visually appealing and intuitive user interfaces for both web applications and websites, aiming to leverage expertise in HTML, CSS, and JavaScript to enhance user experiences and drive engagement in innovative digital platforms.</p>
                    </div>
                </div>
                <div className='set'>
                    <img src={back} className='sSet'/>
                    <div className='tSet'>
                        <h2>Back End</h2>
                        <p>Results-driven back-end developer skilled in building robust and scalable server-side architectures for applications and websites, dedicated to optimizing database performance and ensuring seamless functionality, to deliver high-quality, efficient, and secure digital solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;