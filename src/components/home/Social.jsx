import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://github.com/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-github-alt"></i>
        </a>
        <a href="https://linkedin.com/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://medium.com/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i class="uil uil-medium-m"></i>
        </a>
        <a href="https://www.instagram.com/" className="home__social-icon" rel="noreferrer" target="_blank">
            <i class="uil uil-instagram"></i>
        </a>
        <a href="https://www.facebook.com/" className="home__social-icon"  rel="noreferrer" target="_blank">
            <i class="uil uil-facebook-f"></i>
        </a>
        
    </div>
  )
}

export default Social