
import React from 'react';
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import { Link } from "react-router-dom";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';

function Footer(props) {
    return (
        <div>
            <div className="foot-section pt-5" id="footer">
            <div className="container">

<div className="row">
 <div className="col-md-4"> 
 <div className='footer-img'> 
 <Navbar.Brand href="#about"><svg width="60" height="60" viewBox="0 0 185 186" fill="none">
<path d="M138.371 58.1241C144.292 49.901 151.441 44.9836 148.868 37.9138C147.623 36.3112 142.494 36.8758 138.415 41.9666C134.108 35.9366 129.511 34.9465 127.984 37.8574C126.089 43.7882 131.242 49.1855 138.371 58.1241Z" fill="#9678B6"/>
<path d="M0 0.436824H92.5V93H0V0.436824Z" fill="white"/>
<rect y="93" width="92.5" height="92.5" fill="#F7F1FF"/>
<rect x="92.5" y="93" width="92.5" height="92.5" fill="#9678B6"/>
<path d="M60.4333 131.425C59.2 128.588 57.3089 126.368 54.76 124.765C52.2522 123.121 49.2922 122.298 45.88 122.298C42.6733 122.298 39.7956 123.038 37.2467 124.518C34.6978 125.998 32.6833 128.116 31.2033 130.87C29.7233 133.583 28.9833 136.749 28.9833 140.367C28.9833 143.984 29.7233 147.171 31.2033 149.925C32.6833 152.679 34.6978 154.797 37.2467 156.277C39.7956 157.757 42.6733 158.497 45.88 158.497C48.8811 158.497 51.5739 157.859 53.9583 156.585C56.3839 155.269 58.3161 153.419 59.755 151.035C61.235 148.609 62.0778 145.793 62.2833 142.587H44.1533V139.072H66.8467V142.217C66.6411 145.999 65.6133 149.432 63.7633 152.515C61.9133 155.557 59.4261 157.962 56.3017 159.73C53.2183 161.498 49.7444 162.382 45.88 162.382C41.8922 162.382 38.2744 161.457 35.0267 159.607C31.7789 157.716 29.2094 155.105 27.3183 151.775C25.4683 148.404 24.5433 144.601 24.5433 140.367C24.5433 136.132 25.4683 132.35 27.3183 129.02C29.2094 125.649 31.7789 123.038 35.0267 121.188C38.2744 119.297 41.8922 118.352 45.88 118.352C50.4844 118.352 54.5133 119.503 57.9667 121.805C61.42 124.107 63.9278 127.314 65.49 131.425H60.4333Z" fill="#9678B6" fill-opacity="0.26"/>
<path d="M154.722 118.228V161.333H150.405V141.168H127.033V161.333H122.717V118.228H127.033V137.592H150.405V118.228H154.722Z" fill="white"/>
<path d="M66.785 28.1333V70.6833H62.4683V36.705L47.2983 70.6833H44.1533L28.9833 36.8283V70.6833H24.6667V28.1333H29.23L45.695 65.01L62.16 28.1333H66.785Z" fill="#69478B"/>
</svg>

</Navbar.Brand>
</div> 
<div className='foot-cont'>
<p>© Copyright 2022 All rights reserved.
   Design by <br/> <a href='https://www.linkedin.com/in/meghavi-prajapati-91b091127' target="_blank"   rel="noopener noreferrer" >Meghavi Prajapati</a></p>
   </div>
    </div>
    <div className="col-md-4">
<h4>Links</h4>

<ul className="navbar-nav ml-auto py-4 py-md-0">
<li key={0} className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <a href='#about' className="nav-link"  >Home</a>
                  
                  </li>
                  <li key={1} className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                    <a href='#aboutmore' className="nav-link"  >About</a>
                  
                  </li>
                  <li key={2} className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a  href='#exeriance' className="nav-link">Experience</a>
                  </li>
                  <li key={3} className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a href='#projects' className="nav-link">Projects</a>
                  </li>
                  <li  key={4} className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a  href='#education' className="nav-link">Education</a>
                  </li>
                
                  <li key={5} className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                    <a  href='#footer'  className="nav-link">Contact</a>
                  </li>
                </ul>
    </div>
    <div className="col-md-4 cont-me">
<h4>Contact</h4>
<div className="contact-box py-4 ">
    <h5><a href='tel:(+91)9714720415'><FontAwesomeIcon icon={faPhone} size="1x" className='sc-ic' />(+91) 97147 20415</a></h5>
    <h5><a href='mailto:megha.p265@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='sc-ic' size="1x" />megha.p265@gmail.com</a></h5>
    <div className='social-icon'>
      <ul>
      <li key={1}>
        <a href="https://www.linkedin.com/in/meghavi-prajapati-91b091127"
        className="soc-ic social">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a></li>
      <li key={2}>
        <a href="https://www.facebook.com/mghthunder"
        className="soc-ic social">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a></li>
      <li key={3}>
        <a href="https://www.instagram.com/mgh_265/?hl=en"
        className="soc-ic social">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a></li>
      </ul>
    </div>
</div>
    </div>
</div>

            </div>
        </div>
      
        </div>

    );
}

export default Footer;