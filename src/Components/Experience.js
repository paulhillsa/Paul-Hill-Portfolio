import React from 'react'
import { Container } from 'react-bootstrap'

export default function Experience() {
    return (
        <Container> 
            <div className='experience' >
            <h2 className='sectionLeft' > Experience </h2>
            {/* About Container */}
            <div className="experience-info">
                <h2> Social Media Manager | Nov 2020 - Oct 2021 </h2>
                <h3> Smokers Against Plastic (Smokey Treats (Ltd)) </h3>
                <p> 
                    Worked alongside eco-conscious tobacco company Smokey Treats (Ltd)
                    to create a social media presence for the company. </p>
                <h2> Community Volunteer | Mar 2019 </h2>
                <h3> Hands at Work in Africa </h3>
                <p> 
                    Worked in colloboration with an UK based development organisation to help and uplift
                    the local Mafambisa community with their daily tasks. </p>
                <h2> Student Consultant | Jul 2018 - Dec 2018 </h2>
                <h3> Stellenbosch University Law Clinic  </h3>
                <p> 
                    Worked as a student consultant to provide <em> pro bono </em> legal aid services
                    to the greater Cape Winelands area consisting of Stellenbosch and the surrounding communities.
                </p>
            </div>
            </div>
            <div className='circleBlue' style={{left: '40rem'}}> </div>
            <hr className='line-right' id='skills' />
        </Container>
    )
}