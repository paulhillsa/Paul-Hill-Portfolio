import React from 'react'
import { Container } from 'react-bootstrap'

export default function Licences() {
    return (
        <Container> 
            <div className='licenses' >
            <h2 className='sectionLeft' > Licenses and Certifications </h2>
            {/* Licences Container */}
            <div className="licenses-info">
                <ul> 
                    <li> Introduction to UX and Accessible Design | <span className='challenge-blue-2'> UAL Creative Computing Institute and Institute of Coding </span> (FutureLearn) </li>
                    <li> Science of Well-being | <span className='challenge-blue-2'> Yale University </span> (Coursera) </li>
                    <li> Fundamentals of Digital Marketing | <span className='challenge-blue-2'> Google </span> (Google Digital Garage) </li>
                    <li> Open Water Diver | <span className='challenge-blue-2'> SSI Scuba Schools International </span> </li>
                    <li> Speed Reading | <span className='challenge-blue-2'> Lab-On-Line </span> </li>
                    <li> Leadership in Law | <span className='challenge-blue-2'> Frederik van Zyl Slabbert Institute for Student Leadership Development </span> </li>
                </ul>
            </div>
            </div>
            <hr className='line-right'id='projects' />
            <div className='circleBlue' style={{left: '25rem'}}> </div>
        </Container>
    )
}