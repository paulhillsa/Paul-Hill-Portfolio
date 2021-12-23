import React from 'react'
import LandingPage from './LandingPage'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Licences from './Licences'
import Projects from './Projects'
import Header from './Header'
import Footer from './Footer'

export default function Main() {
    return (
        <div className='main' style={{margin: '0%', padding: '0%'}}>
            <Header />
            <LandingPage />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Licences />
            <Projects />
            <Footer />
        </div>
    )
}
