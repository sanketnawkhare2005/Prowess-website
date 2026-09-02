import React from 'react'
import './UniqueArrowsAnimation.css'

/* Arrow 1 - Sharp pointed with long streak */
const ArrowSpike = ({ size = 60 }) => (
  <svg width={size} height={size * 0.4} viewBox="0 0 120 48" style={{ display: 'block' }}>
    <line x1="115" y1="24" x2="20" y2="24" stroke="#E63946" strokeWidth="3" strokeLinecap="round" />
    <polygon points="0,24 22,10 18,24 22,38" fill="#E63946" />
    <line x1="110" y1="18" x2="50" y2="18" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <line x1="110" y1="30" x2="50" y2="30" stroke="#E63946" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
)

/* Arrow 2 - Angular chevron bold */
const ArrowAngular = ({ size = 55 }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 100 50" style={{ display: 'block' }}>
    <polyline points="95,2 15,48 35,25" fill="none" stroke="#C1121F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="90" y1="8" x2="55" y2="38" stroke="#C1121F" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
  </svg>
)

/* Arrow 3 - Sleek dart style */
const ArrowDart = ({ size = 65 }) => (
  <svg width={size} height={size * 0.35} viewBox="0 0 130 45" style={{ display: 'block' }}>
    <line x1="125" y1="22" x2="18" y2="22" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="0,22 20,8 16,22 20,36" fill="#E63946" />
    <line x1="120" y1="16" x2="40" y2="16" stroke="#E63946" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <line x1="120" y1="28" x2="40" y2="28" stroke="#E63946" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    <circle cx="10" cy="22" r="2" fill="#FF8C42" opacity="0.7" />
  </svg>
)

/* Arrow 4 - Double line speed */
const ArrowDouble = ({ size = 50 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 90 54" style={{ display: 'block' }}>
    <polyline points="85,5 10,48 25,30" fill="none" stroke="#E63946" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="80,12 20,46 30,34" fill="none" stroke="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
  </svg>
)

/* Arrow 5 - Small quick */
const ArrowQuick = ({ size = 40 }) => (
  <svg width={size} height={size * 0.45} viewBox="0 0 80 36" style={{ display: 'block' }}>
    <polyline points="75,2 8,33 22,18" fill="none" stroke="#C1121F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* Blur trail behind each arrow - tail side fade */
const BlurTrail = ({ width = 120, height = 8, blur = 12, opacity = 0.4 }) => (
  <div
    style={{
      width: `${width}px`,
      height: `${height}px`,
      background: 'linear-gradient(to left, rgba(230,57,70,0.6), rgba(230,57,70,0))',
      borderRadius: '50%',
      filter: `blur(${blur}px)`,
      opacity,
    }}
  />
)

const UniqueArrowsAnimation = () => {
  return (
    <div className="ua-container">

      {/* Background big blur glow */}
      <div className="ua-bg-glow ua-bg-glow-1"></div>
      <div className="ua-bg-glow ua-bg-glow-2"></div>

      {/* Trail group - peeche blur */}
      <div className="ua-trails">
        <div className="ua-trail-item ua-trail-1">
          <BlurTrail width={100} height={6} blur={18} opacity={0.15} />
        </div>
        <div className="ua-trail-item ua-trail-2">
          <BlurTrail width={80} height={5} blur={15} opacity={0.12} />
        </div>
        <div className="ua-trail-item ua-trail-3">
          <BlurTrail width={130} height={10} blur={22} opacity={0.18} />
        </div>
        <div className="ua-trail-item ua-trail-4">
          <BlurTrail width={75} height={5} blur={14} opacity={0.1} />
        </div>
        <div className="ua-trail-item ua-trail-5">
          <BlurTrail width={60} height={4} blur={12} opacity={0.08} />
        </div>
      </div>

      {/* Main arrows group - clear & sharp */}
      <div className="ua-arrows">
        <div className="ua-arrow ua-pos-1">
          <ArrowSpike size={60} />
        </div>
        <div className="ua-arrow ua-pos-2">
          <ArrowAngular size={55} />
        </div>
        <div className="ua-arrow ua-pos-3">
          <ArrowDart size={65} />
        </div>
        <div className="ua-arrow ua-pos-4">
          <ArrowDouble size={50} />
        </div>
        <div className="ua-arrow ua-pos-5">
          <ArrowQuick size={40} />
        </div>
      </div>
    </div>
  )
}

export default UniqueArrowsAnimation