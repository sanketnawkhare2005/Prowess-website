import React from 'react'
import './StarBurstAnimation.css'

const StarBurstSVG = ({ size = 80, opacity = 1, blur = 0, scale = 1 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    style={{
      opacity,
      filter: blur > 0 ? `blur(${blur}px)` : 'none',
      transform: `scale(${scale})`,
      display: 'block',
    }}
  >
    {/* 5 long sharp red spikes */}
    {[0, 72, 144, 216, 288].map((angle) => (
      <path
        key={`l${angle}`}
        d="M50 0 L46 34 L54 34 Z"
        fill="#E63946"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    {/* 5 shorter red spikes */}
    {[36, 108, 180, 252, 324].map((angle) => (
      <path
        key={`s${angle}`}
        d="M50 12 L47.5 34 L52.5 34 Z"
        fill="#C1121F"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    {/* Orange center circle */}
    <circle cx="50" cy="50" r="21" fill="#FF8C42" />
    {/* White radial star pattern */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={`r${angle}`}
        x1="50"
        y1="33"
        x2="50"
        y2="67"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    {/* White center dot */}
    <circle cx="50" cy="50" r="4.5" fill="white" opacity="0.95" />
  </svg>
)

const StarBurstAnimation = () => {
  return (
    <div className="sb-container">
      {/* Trail 3 - most faded */}
      <div className="sb-trail sb-trail-3">
        <StarBurstSVG size={65} opacity={0.06} blur={24} scale={0.45} />
      </div>
      {/* Trail 2 */}
      <div className="sb-trail sb-trail-2">
        <StarBurstSVG size={70} opacity={0.15} blur={14} scale={0.65} />
      </div>
      {/* Trail 1 */}
      <div className="sb-trail sb-trail-1">
        <StarBurstSVG size={76} opacity={0.3} blur={7} scale={0.82} />
      </div>
      {/* Main star burst */}
      <div className="sb-main">
        <StarBurstSVG size={82} opacity={1} blur={0} scale={1} />
      </div>
    </div>
  )
}

export default StarBurstAnimation