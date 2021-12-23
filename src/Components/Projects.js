import React from 'react'
import { Container } from 'react-bootstrap'

export default function Projects() {
    return (
        <Container> 
            <div className='projects' >
                
            

            {/* Projects Container */}
            <div className="projects-info">
            <ul style={{listStyleType: 'none'}}> 
                <li> 
                    <h2> Emoji Memory Game 🥳 </h2>
                    <p> Here I was tasked to create a simple game using React </p>
                    <p> To be able to successfully do this, I needed to consolidate all the concepts I had learnt about <span className='challenge-blue-2'>React </span>, <span className='challenge-blue-2'>JSX </span> and <span className='challenge-blue-2'>JavaScript </span>so far </p>
                    <a target="_blank" href="https://github.com/paulhillsa/Level-2-Capstone-Project-1"> Github </a>
                    <a target="_blank" href="https://level-2-capstone-project-1.herokuapp.com/"> Heroku </a>
                </li>
                <li>
                    <h2> Online Store 🛒 </h2>
                    <p> Here I was tasked to create an online store with shopping cart and checkout functionality made using basic <span className='challenge-blue-2'> HTML </span>, <span className='challenge-blue-2'> CSS </span> and <span className='challenge-blue-2'> Javascript </span> </p>
                    <a target="_blank" href="https://github.com/paulhillsa/Capstone-Project-2" > Github </a>
                </li>
                <li>
                    <h2> Itunes Web Store Search 🔍 </h2>
                    <p> In this project, I was tasked to create a full-stack web application using <span className='challenge-blue-2'> React </span> and <span className='challenge-blue-2'> Express </span> that interfaces with the <span className='challenge-blue-2'> iTunes Search API </span> </p>
                    <a target="_blank" href="https://github.com/paulhillsa/itunes-search-capstone-project"> Github </a>
                </li>
                <li>
                    <h2> MERN Stack Crud App 📚 </h2>
                    <p> In this project, I was tasked to create a full-stack web application using <span className='challenge-blue-2'> React </span>, <span className='challenge-blue-2'> Express </span>, <span className='challenge-blue-2'> MongoDB </span> and <span className='challenge-blue-2'> Node </span> </p>
                    <a target="_blank" href="https://github.com/paulhillsa/MERN-CRUD-cars-database"> Github </a>
                </li>
            </ul>
            </div>
            <h2 className='sectionRight' > Projects </h2>
            </div>
        </Container>
    )
}