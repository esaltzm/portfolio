import React from 'react'
import './IconContainer.css'

export default function IconContainer() {
    const icons = [
        { name: 'About', image: 'about.png', alt: 'about icon - question mark' },
        { name: 'Projects', image: 'favicon.png', alt: 'projects icon - computer with paintbrush' },
        { name: 'Contact', image: 'contact.png', alt: 'contact icon - mail' }
    ]
    return (
        <>
            <div className='icon-container'>
                {icons.map(icon => {
                    return (
                        <div key={icon.name}>
                            <img src={icon.image} alt={icon.alt} />
                            <p>{icon.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className='start-bar'>Hello</div>
        </>
    )
}
