import React, { useRef } from 'react';
import './contact.css';
import fb from '../../assets/facebook (1).png';
import ig from '../../assets/instagram.png';
import In from '../../assets/linkedin (1).png';
import gh from '../../assets/github.png';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ki1srss', 'template_m9xhtzq', form.current, 'akCuXyeVV3Iv7LSKB')
        .then((result) => {
            console.log(result.text);
            alert('Email Sent!!');
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <section id='Contact'>
            <h2 className='contactTitle'>Contact Me</h2>
            <span className='contactDes'> Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'/>
                <input type='text' className='email' placeholder='Your Email' name='from_email'/>
                <textarea name='message' className='msg' rows='5' placeholder='Your Message'/>
                <button type='submit' className='submitBtn' value='Send'>Submit</button>
                <div className='links'>
                    <img src={fb} alt='Facebook' className='link'/>
                    <img src={ig} alt='Instagram' className='link'/>
                    <img src={In} alt='Linkedin' className='link'/>
                    <img src={gh} alt='Github' className='link'/>
                </div>
            </form>
        </section>
    );
}

export default Contact;