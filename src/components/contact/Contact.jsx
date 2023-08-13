import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="cantact__title">Talk to me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">kkrmadhu1999@gmail.com</span>
                        <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write me{""} 
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+9472 055 2665</span>
                        <a href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!" className="contact__button">Write me{""} 
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bx-phone contact__card-icon"></i>
                        <h3 className="contact__card-title">Mobile</h3>
                        <span className="contact__card-data">+9476 757 2665</span>
                        <a href="https://www.dialog.lk/contact-support" className="contact__button">Write me 
                        <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="cantact__title">Write me your project</h3>
                <form className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name="name" className="contact__form-input" 
                        placeholder="Insert your name"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact