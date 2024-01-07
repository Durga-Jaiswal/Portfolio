import { GrSend } from "react-icons/gr";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_meo4b0c', 'template_c6f5adr', form.current, '2saJK_obB7baVOSkq')
      e.target.reset()
  };


  return (
    <>
    <div 
    id="contact"
    className="contact--section">
        <h2>Let's Connect</h2>
        <h3>Write me Your Project</h3>
        <section className="contact--sub-section">
              <form  ref={form} onSubmit={sendEmail}>
                <fieldset>
                    <legend htmlfor="name"> Name </legend>
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Name"/>
                </fieldset>
                <fieldset>
                    <legend htmlfor="email"> Email </legend> 
                    <input 
                    type="text" 
                    id="email" 
                    name="email"
                    placeholder="Email"/>
                </fieldset>
                <fieldset>
                    <legend htmlfor="message">Message  </legend>
                    <textarea  
                    id="message" 
                    name="message"
                    placeholder="Message"/> 
                </fieldset>
                <button className="btn">
                  Send Message
                  <GrSend className="file-icon"/>
                </button>
              </form>
                
                
                
                
            
            
                
        </section>      
    </div>
    </>
  )
}

export default Contact;
