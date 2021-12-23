import React from 'react'
import { Container, Navbar, Nav, Button} from 'react-bootstrap'
import {FaGithub, FaLinkedin, FaEnvelope, FaPhone} from 'react-icons/fa'

export default function Contact() {
    return (
        <Container> 
            <div className='circleBlue' style={{top: '10rem', right: '20rem'}}> </div>
            <div className='circleOrange' style={{top: '5rem', left: '50rem'}}> </div>
            <div className='split contact'>
            <h2 className='sectionLeft' id='contact'> Contact Me </h2>
            <h2 style={{textAlign: 'right', padding: '0'}}> get in touch with me here </h2>
            <a style={{textAlign: 'right'}} id='back-link' href="/">back to home</ a>
            
            </div>

            

            <div className="split contact-info" style={{textAlign: 'left'}}>
            <div className='vertical-line' />
            <ul style={{listStyleType: 'none'}}> 
                <li> 
                    <p> <FaPhone className='landing-page-icon' /> +27 71 1176 275  </p>  
                </li>
                <li> 
                    <p> <a className='icon-links' href='mailto:paulhillsa@gmail.com?subject=Paul%20Hill%20Portfolio&body=Hi%20there%20%F0%9F%91%8B%2C%20I%20have%20just%20viewed%20your%20Portfolio%20online%20and%20would%20love%20to%20get%20ahold%20of%20you!'> <FaEnvelope className='landing-page-icon' /> </a> paulhillsa@gmail.com </p> 
                </li>
                <li> 
                     <p> <a className='icon-links' href='https://github.com/paulhillsa'> <FaGithub className='landing-page-icon'/> </a> github.com/paulhillsa</p>
                </li>
                <li> 
                    <p> <a className='icon-links' href='https://www.linkedin.com/in/paulhillsa/'> <FaLinkedin className='landing-page-icon' /> </a> linkedin.com/in/paulhillsa</p>   
                </li>
            </ul>
            </div>

            <div id='back'>
                   
            </div>
        </Container>
    )
}