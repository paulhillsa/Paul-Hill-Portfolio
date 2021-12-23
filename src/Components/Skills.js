import React from 'react'
import { Container } from 'react-bootstrap'

export default function Skills () {
    return (
        <Container> 
            <div className='skills'>

            {/* Skills Container */}
            <div className="skills-info">
            <h2> Frontend </h2>
                <p> 
                    I have experience and worked with <span className="challenge-orange"> HTML5</span>,
                    <span className="challenge-orange"> CSS3</span>, <span className="challenge-orange"> JavaScript</span>,
                    <span className="challenge-orange"> JQuery</span>, <span className="challenge-orange"> React.js </span>
                    and <span className="challenge-orange"> Next.js </span>
                </p>
                <h2> Backend </h2> 
                <p> 
                    I have experience and worked with <span className="challenge-orange"> Node.js </span>,
                    <span className="challenge-orange"> Express.js </span> and <span className="challenge-orange"> MongoDB </span>
                </p>
                <h2> Other </h2>
                <p> 
                    I have experience and worked with <span className="challenge-orange"> Git </span>,
                    <span className="challenge-orange"> GitHub </span>, <span className="challenge-orange"> Heroku </span>,
                    <span className="challenge-orange"> RESTful API's </span>, <span className="challenge-orange"> Mocha </span>,
                    <span className="challenge-orange"> Chai </span>, <span className="challenge-orange"> Jest </span>,
                    <span className="challenge-orange"> Web Design </span>, <span className="challenge-orange"> UX/UI Design </span>,
                    and <span className="challenge-orange"> agile </span> work methodologies
                </p>
            </div>
            <h2 className='sectionRight'> Skills and Abilities </h2>
            </div>
            <div className='circleOrange' style={{right: '45rem'}}> </div>
            <hr className='line-left' id='licenses'/>
        </Container>
    )
}