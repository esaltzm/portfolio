import React from 'react'
import './Nav.css'

export default function Nav() {
    return (
        <div className='nav'>
            <aside>
                <ul className='tree-view navbar'>
                    <li>About</li>
                    <li>
                        Experiences
                        <ul>
                            <li>General Assembly</li>
                            <li>Colorado Trail</li>
                            <li>Carnegie Institute</li>
                        </ul>
                    </li>
                    <li>Skills</li>
                    <li>
                        Projects
                        <ul>
                            <li>SkyScan</li>
                            <li>Spotifly</li>
                            <li>PhotoCast</li>
                            <li>Tower of Hanoi</li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
