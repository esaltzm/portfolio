import React from 'react'

export default function Experiences() {
    return (
        <div className="window sub-window" id='experiences' style={{ marginLeft: '-20px', width: '140%' }}>
            <div className="title-bar">
                <div className="title-bar-text sub-title">EXPERIENCES</div>
                <div className="title-bar-controls">
                    <button className='title-button' aria-label="Minimize" />
                    <button className='title-button' aria-label="Maximize" />
                    <button className='title-button' aria-label="Close" />
                </div>
            </div>
            <div className='box-group'>
                <div className='img-wrap box'>
                    <p className='content' style={{ fontSize: '15px' }}>
                        Carnegie Institute
                        <img className='experience-logo' src='carnegie.png' alt='carnegie institute logo' />
                    </p>
                    <ul style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold' }}>
                        <li>Created user-friendly Python-based genomic data analysis pipeline to examine relationships between SNPs (single nucleotide polymorphisms) and plant root phenotypes</li>
                        <br />
                        <li>Developed intuitive graphical user interface using TKinter module</li>
                        <br />
                        <li>Took issues from lab management and implemented them as new features</li>
                    </ul>
                </div>
                <div className='img-wrap box'>
                    <p className='content' style={{ fontSize: '15px' }}>
                        Colorado Trail
                        <img className='experience-logo' src='ct.png' alt='colorado trail blaze' />

                    </p>
                    <ul style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold' }}>
                        <li>Hiked 486 miles from Denver to Durango</li>
                        <br />
                        <li>Used my own Fire Tracker application to receive early warning of any wildfires impacting the trail</li>
                        <br />
                        <li>Recruited 4 other beta testers to try out the app on trail, with favorable feedback</li>
                    </ul>
                </div>
                <div className='img-wrap box'>
                    <p className='content' style={{ fontSize: '15px' }}>
                        General Assembly
                        <img className='experience-logo' src='ga.png' alt='general assembly logo' />
                    </p>
                    <ul style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold' }}>
                        <li>Collaborated with other engineers using Git version control best practices (feature branches, issue tickets, pull requests)</li>
                        <br />
                        <li>Utilized frontend and backend technologies to create vibrant full-stack applications</li>
                        <br />
                        <li>Gained experience working independently and finding the resources to implement solutions efficiently</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
