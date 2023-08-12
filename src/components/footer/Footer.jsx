import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <h1 className="footer__title">Ramesh Madhusanka</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#blogs" className="footer__link">Blogs</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://linkedin.com/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/" className="footer__social-link" rel="noreferrer" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com/" className="footer__social-link"  rel="noreferrer" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Major Pvt. Ltd. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer