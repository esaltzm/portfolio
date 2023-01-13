import React from 'react'

export default function Home() {
    return (
        <div>
            <div style={{ width: 300 }} className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Eli Saltzman</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" />
                        <button aria-label="Maximize" />
                        <button aria-label="Close" />
                    </div>
                </div>
                <div className="window-body">
                    <p style={{ textAlign: "center" }}>Welcome to my page!</p>
                    <div className="window" style={{ textAlign: "center", fontWeight: "bold" }}>
                        About me:
                    </div>
                </div>
            </div>
        </div>
    )
}
