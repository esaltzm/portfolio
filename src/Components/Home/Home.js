import React from 'react'
import About from '../HomeElements/About'
import Experiences from '../HomeElements/Experiences'
import Skills from '../HomeElements/Skills'
import Projects from '../HomeElements/Projects'
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Eli Saltzman - Developer Portfolio</div>
                    <div className="title-bar-controls">
                        <button className='title-button' aria-label="Minimize" />
                        <button className='title-button' aria-label="Maximize" />
                        <button className='title-button' aria-label="Close" />
                    </div>
                </div>
                <p className='heading'>Full-Stack Software Engineer  |  Thru-Hiker  |  LGBTQ+ Advocate</p>
                <div className='under-line'><hr /></div>
                <div className='sections'>
                    <About />
                    <Experiences />
                    <Skills />
                    <Projects />
                </div>
            </div>
        </div>
    )
}
