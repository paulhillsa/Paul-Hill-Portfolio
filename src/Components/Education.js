import React from 'react'
import { Container } from 'react-bootstrap'

export default function Education() {
    return (
        <Container> 
            <div className='education' >
                
            {/* About Container */}
            <div className="education-info">
                <h2> HyperionDev | 2021 </h2>
                <h3> Full Stack Web Developer Bootcamp </h3>
                <ul> 
                    <li> Learnt HTML, CSS, JavaScript, MongoDB, Express, React, Node.js, Next.js. </li>
                    <li> Developed and designed dynamic web applications using various technology stacks. </li>
                    <li> Applied agile development and product design principles to web development projects. </li>
                    <li> Understood crucial software algorithms and their application to web development. </li>
                    <li> Created NoSQL databases and data-driven web applications. </li>
                </ul>
                <h2> University of Stellenbosch | 2014 - 2019 </h2>
                <h3> Bachelor of Laws (LLB) </h3>
                <p> I have a keen interest in law and strive to follow the latest legal developments in my areas of interest. </p>
                <h2> Bishops Diocesan College | Matric 2013 </h2>
                <h3> National Senior Certificate (NSC) </h3> 
                <p> I matriculated in the year of 2013, receiving multiple distinctions in chosen subjects.  </p>
            </div>
            <h2 className='sectionRight'> Education </h2>
            </div>
            <div className='circleBlue' style={{right: '15rem'}}> </div>
            <hr className='line-left' id='experience'/>
        </Container>
    )
}