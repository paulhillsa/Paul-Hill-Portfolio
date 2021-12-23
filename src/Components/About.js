import React from 'react'
import { Container } from 'react-bootstrap'

export default function About() {
    return (
        <Container> 
            <div className='about' >
                <h2 className='sectionLeft' id='about'> About Me </h2>

            {/* About Container */}
            <div className="about-info">
                <p>
                    I am a <span className="challenge-blue"> hardworking</span>, <span className="challenge-blue">innovative </span> and <span className="challenge-blue"> passionate </span> person. 
                </p>
                <p>
                    I enjoy working with other people, have great <span className="challenge-blue"> social </span> and <span className="challenge-blue"> problem-solving </span> skills that enable me to be
                    an excellent <span className="challenge-blue">team player</span> as well as an individual worker.
                </p>
                <p> 
                    Through my educational background in Law at the University of Stellenbosch as well as my
                    employment experiences and volunteering work, I learned to work under pressure, take up challenges
                    and <span className="challenge-blue">adapt</span> quickly.
                </p>
                <p>
                    My objectives are to apply my knowledge, gain experience and to <span className="challenge-blue"> challenge</span>  myself.
                </p>
            </div>
            </div>
            <div className='circleOrange' style={{left: '25rem'}}> </div>
            <hr className='line-right'id='education' />
        </Container>
    )
}
