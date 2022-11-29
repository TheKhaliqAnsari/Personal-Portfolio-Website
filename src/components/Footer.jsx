import React from 'react';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import heart from '../assets/img/heart.png'

function Footer() {
  return (
    <>
    <span className='navbar-text-footer'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/khaliqansari/'><img src={navIcon1} height='50px' width='50px' alt="Linkedin" /></a>
                <a href='https://github.com/TheKhaliqAnsari'><img src={navIcon2} height='50px' width='60px' alt="Github" /></a>
                <a href='https://www.instagram.com/thekhaliqansari/'><img src={navIcon3} height='50px' width='50px' alt="Instagram" /></a>
            </div>
            
    </span>
    <div>Made with <span><img className='footer-heart' src={heart} alt="love" /></span> by TheKhaliqAnsari</div>
    </>
  )
}

export default Footer