import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {
    return (
        <div className='header' id='home'>
            <Navbar variant="light">
                    <Nav className="me-auto">
                    <Nav.Link href="#about"> About </Nav.Link>
                    <Nav.Link href="#education"> Education </Nav.Link>
                    <Nav.Link href="#experience"> Work Experience </Nav.Link>
                    <Nav.Link href="#skills"> Skills </Nav.Link>
                    <Nav.Link href="#licenses"> Licences & Certification </Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link id='contact-link' href="/contact">Contact Me</Nav.Link>
                    </Nav>
            </Navbar>
            <div className='circleBlue' style={{top: '10rem', right: '20rem'}}> </div>
        </div>
    )
}
