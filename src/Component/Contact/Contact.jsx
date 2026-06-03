import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/img/contact/msg-icon.png'
import mail_icon from '../../assets/img/contact/mail-icon.png'
import phone_icon from '../../assets/img/contact/phone-icon.png'
import location_icon from '../../assets/img/contact/location-icon.png'
import white_arrow from '../../assets/img/contact/white-arrow.png'

function Contact() {
  return (
    <div className="container">
      <div className='contact' id='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through contact form or find our contact information below.
              Your feedback, questions, and suggestions are important to us as we strive to provide 
              exceptional service to our customers
          </p>
          <ul>
              <li><img src={mail_icon} alt="" />Contact@carrentalfro.com</li>
              <li><img src={phone_icon} alt="" />+23498479293</li>
              <li><img src={location_icon} alt="" />7 Nnamdi Street Awka Anambr State Awka</li>
          </ul>
        </div>
        <div className="contact-col">
          <form>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
            <label>Write Your Message Here</label>
            <textarea name="message" rows="6" placeholder='Write Your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
          </form>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Contact
