import React from 'react'

export default function About() {
    return (
        <div className="window sub-window" id='about'>
            <div className="title-bar">
                <div className="title-bar-text sub-title">ABOUT ME</div>
                <div className="title-bar-controls">
                    <button className='title-button' aria-label="Minimize" />
                    <button className='title-button' aria-label="Maximize" />
                    <button className='title-button' aria-label="Close" />
                </div>
            </div>
            <div className='about-block-container'>
                <div className='about-block'>
                    <div className='img-wrap'>
                        <div className='img-container'>
                            <img style={{ height: '250px' }} src='https://i.imgur.com/EZ9SLEX.jpg' alt='me hiking the pct' />
                            <p className='content' style={{ textAlign: 'right' }}>Me on the PCT (Mount Rainier, WA) - 2021</p>
                        </div>
                    </div>
                    <p className='content' style={{ fontFamily: 'sans-serif', fontSize: '13px' }}>
                        My journey with software engineering started during an internship with a plant genomics lab at the Carnegie Institute in Palo Alto. It was there that I got first professional coding experience, creating a novel genomic data analysis tool in Python. Then, a few years later, my passion for development was rekindled in an unlikely place - the wilderness of the Pacific Crest Trail.
                    </p>
                </div>
                <div className='about-block' style={{ flexDirection: 'row', marginTop: '-70px' }}>
                    <div className='img-wrap'>
                        <div className='img-container'>
                            <img style={{ width: '300px' }} src='dixie_fire.jpg' alt='wildfire smoke over town' />
                            <p className='content' style={{ textAlign: 'right' }}>Dixie Fire, Quincy CA - 2021</p>
                        </div>
                    </div>
                    <p className='content' style={{ fontFamily: 'sans-serif', fontSize: '13px' }}>
                        I was about 10 miles out from my next town stop, the resort at Buck's Lake, CA, when I saw the smoke billowing. As I had been hiking off grid for the past few days, the Dixie Fire had been growing in size and intensity, and the resort I would resupply at next had already been evacuated. I had no choice but to backtrack to the previous road crossing and hitch a ride to a town out of range of the wildfire. My next few days sheltering from the smoke and ash were spent thinking — what if there was a way I could have been notified of the extent of the wildfire earlier, even without cell service?
                    </p>
                </div>
                <div className='about-block' style={{ marginTop: '-60px' }}>
                    <div className='img-wrap'>
                        <div className='img-container'>
                            <img style={{ width: '300px' }} src='https://i.imgur.com/acwUpbV.jpg' alt='fire tracker text message' />
                            <p className='content' style={{ textAlign: 'right' }}>Fire tracker SMS alert system</p>
                        </div>
                    </div>
                    <p className='content' style={{ fontFamily: 'sans-serif', fontSize: '13px' }}>
                        The winter following my PCT hike, I dusted off my Python skills and developed a Fire Tracker app, hoping to never be caught in that situation again. It used an API from the National Interagency Fire Center, combined with GPS trail data, to send customized SMS alerts using a Flask / Twilio framework. So even with no internet access or cell service, I could use my Garmin satellite communication device to request a wildfire update specific to my hiking trip. It was the process of seeing the need for this app and then teaching myself how to turn it into a real product that drove me to further my software engineering experience and make a career change!
                    </p>
                </div>
            </div>
        </div >
    )
}
