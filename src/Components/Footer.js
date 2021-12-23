import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className='footer'>
            <Navbar variant="light">
                <Nav className="me-auto">
                    <Nav.Link href='#home'> Back to Top </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
