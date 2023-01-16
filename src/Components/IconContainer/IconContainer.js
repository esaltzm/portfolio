import React from 'react'
import './IconContainer.css'

export default function IconContainer() {
    const icons = [
        { name: 'About', image: 'about.png', alt: 'about icon - question mark', href: '#about' },
        { name: 'Experiences', image: 'experiences.png', alt: 'experiences icon - globe', href: '#experiences' },
        { name: 'Skills', image: 'skills.png', alt: 'skills icon - tools folder', href: '#skills' },
        { name: 'Projects', image: 'favicon.png', alt: 'projects icon - computer with paintbrush', href: '#projects' },
        { name: 'Contact', image: 'contact.png', alt: 'contact icon - mail', href: 'mailto: elisaltzman@gmail.com' }
    ]
    return (
        <>
            <div className='icon-container'>
                {icons.map(icon => {
                    return (
                        <div key={icon.name} className='icon'>
                            <a href={icon.href}>
                                <img src={icon.image} alt={icon.alt} />
                                <p className='icon-text'>{icon.name}</p>
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className='start-bar'>
                <div className='button start-button-wrapper js-start-button'>
                    <div className='start-button' />
                </div>
            </div>
        </>
    )
}
