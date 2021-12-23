import React from 'react'
import { Container } from 'react-bootstrap'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'



export default function LandingPage() {
    return (
        <Container>
            <div className='landing-page'>
                <div className='landing-page-text'> 
                <h1> Hello, my name is <span className='name'>Paul Hill</span> </h1>
                <h1> and I am a <span className='subname'>Full Stack Developer</span> </h1>
                </div>

                <div className='landing-page-icons'>
                    <a className='icon-links' href='https://github.com/paulhillsa'> <FaGithub className='landing-page-icon' /> </a>
                    <a className='icon-links' href='https://www.linkedin.com/in/paulhillsa/'> <FaLinkedin className='landing-page-icon' /> </a>
                    <a className='icon-links' href='mailto:paulhillsa@gmail.com?subject=Paul%20Hill%20Portfolio&body=Hi%20there%20%F0%9F%91%8B%2C%20I%20have%20just%20viewed%20your%20Portfolio%20online%20and%20would%20love%20to%20get%20ahold%20of%20you!'> <FaEnvelope className='landing-page-icon' /> </a>
                </div>
            </div>
        </Container>
    )
}
