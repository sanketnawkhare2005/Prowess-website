import React from 'react'
import './SingleArrowAnimation.css'

const SingleArrowAnimation = () => {
  return (
    <div className="single-arrow-container">

      {/* Blurred tail copy - sirf peeche dikhega */}
      <div className="arrow-blur-tail">
        <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
          {/* 3 speed lines - blur version */}
          <line x1="130" y1="25" x2="20" y2="25" stroke="#E63946" strokeWidth="3" strokeLinecap="round" />
          <line x1="125" y1="16" x2="45" y2="16" stroke="#E63946" strokeWidth="2" strokeLinecap="round" />
          <line x1="125" y1="34" x2="45" y2="34" stroke="#E63946" strokeWidth="2" strokeLinecap="round" />
          {/* Arrowhead */}
          <polyline points="20,10 0,25 20,40" fill="none" stroke="#E63946" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Main sharp arrow - tip clear */}
      <div className="arrow-sharp-main">
        <svg width="140" height="50" viewBox="0 0 140 50" fill="none">
          {/* Center line - longest */}
          <line x1="130" y1="25" x2="20" y2="25" stroke="#E63946" strokeWidth="3" strokeLinecap="round" />
          {/* Top speed line */}
          <line x1="125" y1="16" x2="45" y2="16" stroke="#E63946" strokeWidth="2" strokeLinecap="round" />
          {/* Bottom speed line */}
          <line x1="125" y1="34" x2="45" y2="34" stroke="#E63946" strokeWidth="2" strokeLinecap="round" />
          {/* Arrowhead - sharp */}
          <polyline points="20,10 0,25 20,40" fill="none" stroke="#E63946" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </div>
  )
}

export default SingleArrowAnimation