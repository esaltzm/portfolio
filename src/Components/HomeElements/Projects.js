import React from 'react'

export default function Projects() {
    const projects = [
        {
            name: 'SkyScan',
            subtitle: 'Weather Data Visualization',
            description: 'SkyScan is based on the DarkSky weather visualization web app, which was taken offline at the beginning of 2023 after its purchase by Apple. My version visualizes parameters including temperature, precipitation, wind speed, snow depth, and lightning on a zoomable and draggable map, allowing selection of data in 3 hour increments going back one year from 12/30/22.',
            links: [
                {
                    name: 'Deployed Project',
                    href: 'https://skyscan.vercel.app/'
                },
                {
                    name: 'Github Repos',
                    href: 'https://github.com/stars/esaltzm/lists/weather-visualization'
                }
            ],
            images: [
                'skyscan1.png', 'skyscan2.png', 'skyscan3.png', 'skyscan4.png'
            ]
        },
        {
            name: 'Spotifly',
            subtitle: 'Music Collection and Streaming',
            description: 'Spotifly is a music streaming application allowing users to save and play their favorite songs using SoundCloud. It is a full-stack MERN app using three related MongoDB models, with user information secured on the frontend and backend using Firebase authentication. User-added songs appear in a common pool visible to all other users, enabling quick addition of songs already in the database.',
            images: ['spotifly1.png', 'spotifly2.png', 'spotifly3.png', 'spotifly4.png',],
            links: [
                {
                    name: 'Deployed Project',
                    href: 'https://spotifly-ga.vercel.app/'
                },
                {
                    name: 'Github Repos',
                    href: 'https://github.com/stars/esaltzm/lists/spotifly'
                }
            ],
        },
        {
            name: 'Photocast',
            subtitle: 'Image EXIF Parsing, Mapping, and Weather Analysis',
            description: 'Photocast is an app allowing users to upload a series of photos, see their photos on a map, and then sort them by different parameters including weather and altitude at the place and time the photo was taken. I created this project because I took so many photos during my 2022 Colorado Trail hike and did not keep a journal of the experience. This app allows users to relive the moments behind their photos by extracting specific information from the EXIF data behind them.',
            images: ['photocast1.png', 'photocast1.gif', 'photocast3.png', 'photocast5.png',],
            links: [
                {
                    name: 'Deployed Project',
                    href: 'https://spotifly-ga.vercel.app/'
                },
                {
                    name: 'Github Repo',
                    href: 'https://github.com/esaltzm/photocast'
                }
            ],
        },
        {
            name: 'Fire Tracker',
            subtitle: 'Customized SMS Wildfire Alerts for Thru-Hikers',
            description: 'Inspired by my close call with a wildfire on the PCT in 2021, this app allows hikers to text the alert hotline (via cellular or satellite network) and recieve an SMS response customized to the trail they are on, listing all current fires within 50 miles of the trail and their closest mile markers, allowing users to make informed decisions about their travel. The app currently supports the Colorado Trail, with the addition of other National Scenic Trails to come.',
            images: ['firetracker3.png', 'firetracker1.jpg', 'firetracker2.jpg'],
            links: [
                {
                    name: 'Github Repo',
                    href: 'https://github.com/esaltzm/fire'
                }
            ],
        },
        {
            name: 'Tower of Hanoi',
            subtitle: 'Simple HTML/Javascript Ring Sorting Game',
            description: 'My first project with General Assembly, this game challenges users to move all the rings from one end of the game board to the other. Features include a smooth ring dropping animation, which attempts to replicate the way the game is physically played, and an auto-solve feature. The auto solver animates gameplay for each level using the recursive Tower of Hanoi algorithm, showing the user how to get past a level if they are stuck.',
            images: ['towerofhanoi1.png', 'towerofhanoi2.gif', 'towerofhanoi3.gif'],
            links: [
                {
                    name: 'Deployed Project',
                    href: 'https://esaltzm.github.io/tower-of-hanoi'
                },
                {
                    name: 'Github Repo',
                    href: 'https://github.com/esaltzm/tower-of-hanoi'
                }
            ],
        },
    ]
    return (
        <div className="window sub-window" id='projects' style={{ marginLeft: '10px', width: '132%' }}>
            <div className="title-bar">
                <div className="title-bar-text sub-title">PROJECTS</div>
                <div className="title-bar-controls">
                    <button className='title-button' aria-label="Minimize" />
                    <button className='title-button' aria-label="Maximize" />
                    <button className='title-button' aria-label="Close" />
                </div>
            </div>
            <div className='box-group' style={{ display: 'flex', flexDirection: 'column' }}>
                {projects.map(project => {
                    return (
                        <div className='img-wrap box' key={project.name}>
                            <p className='content' style={{ fontSize: '15px' }}>
                                {project.name}
                                <em className='content' style={{ fontSize: '13.5px', padding: '0px' }}>
                                    {' — ' + project.subtitle}
                                </em>
                            </p>
                            <p className='content'>
                                {project.description}
                                <br /> <br />
                                {project.links.map(link => {
                                    return (
                                        <a style={{ textDecoration: 'underline', color: 'blue', marginLeft: '20px' }} target='_blank' href={link.href}>{link.name}</a>
                                    )
                                })}
                            </p>
                            <div className='project-photos-container'>
                                {project.images.map(img => <img key={img} src={img} alt={'screencaps from ' + project.name} className='project-photo' />)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
