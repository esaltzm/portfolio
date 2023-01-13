import React from 'react'
import './App.css'

export default function App() {
  return (
    <div style={{ width: 300 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text" style={{ fontSize: '30px' }}>Eli Saltzman</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p style={{ textAlign: "center" }}>Welcome to my page!</p>
      </div>
    </div>
  );
};