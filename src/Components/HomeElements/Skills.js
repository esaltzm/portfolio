import React from 'react'

export default function Skills() {
    return (
        <div className="window sub-window" id='skills'>
            <div className="title-bar">
                <div className="title-bar-text sub-title">SKILLS</div>
                <div className="title-bar-controls">
                    <button className='title-button' aria-label="Minimize" />
                    <button className='title-button' aria-label="Maximize" />
                    <button className='title-button' aria-label="Close" />
                </div>
            </div>
            <div className='box-group'>
                <div className='img-wrap box'>
                    <p className='content' style={{ fontSize: '15px' }}>
                        Frontend
                    </p>
                    <ul style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold' }}>
                        <li>HTML + CSS</li>
                        <br />
                        <li>JavaScript</li>
                        <br />
                        <li>React</li>
                        <br />
                        <li>Next.js</li>
                        <br />
                        <li>Visualization libraries (Plotly.js, D3, WebGL)</li>
                    </ul>
                </div>
                <div className='img-wrap box'>
                    <p className='content' style={{ fontSize: '15px' }}>
                        Backend
                    </p>
                    <ul style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold' }}>
                        <li>Node.js</li>
                        <br />
                        <li>Express</li>
                        <br />
                        <li>Python (Django)</li>
                        <br />
                        <li>Firebase + JWT Authentication</li>
                        <br />
                        <li>Shell scripting (Bash + ZSH)</li>
                        <br />
                        <li>Python data analysis libraries (Pandas, XArray, NumPy, SciPy, MatPlotLib)</li>
                    </ul>
                </div>
                <div className='img-wrap box'>
                    <p className='content' style={{ fontSize: '15px' }}>
                        Database
                    </p>
                    <ul style={{ fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold' }}>
                        <li>MongoDB</li>
                        <br />
                        <li>Relational Databases (Postgres, MySQL, MariaDB)</li>
                        <br />
                        <li>Cloud Computing (AWS RDS)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
