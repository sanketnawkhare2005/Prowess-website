// Pages/RocketAnimation/RocketAnimation.jsx
import React from 'react'
import './RocketAnimation.css'

const RocketAnimation = () => {
  return (
    <div className="planet-container">
      {/* Main Planet */}
      <div className="planet">
        {/* Surface details */}
        <div className="planet-surface"></div>
        <div className="planet-highlight"></div>
        <div className="planet-shadow-overlay"></div>
      </div>

      {/* Trailing shadows */}
      <div className="trail trail-1"></div>
      <div className="trail trail-2"></div>
      <div className="trail trail-3"></div>
      <div className="trail trail-4"></div>
      <div className="trail trail-5"></div>
    </div>
  )
}

export default RocketAnimation

