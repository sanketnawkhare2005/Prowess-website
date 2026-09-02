import React from 'react'
import './SpeedArrowsAnimation.css'

/* 5 different arrow styles - "形态多样" */
const ArrowFull = ({ size, blur, opacity, color = '#E63946' }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none', opacity, display: 'block' }}>
    <line x1="40" y1="4" x2="14" y2="30" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    <polygon points="14,30 25,21 19,33" fill={color} />
  </svg>
)

const ArrowChevron = ({ size, blur, opacity, color = '#E63946', sw = 5 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none', opacity, display: 'block' }}>
    <polyline points="34,4 6,32 18,21" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowSlim = ({ size, blur, opacity, color = '#E63946' }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none', opacity, display: 'block' }}>
    <line x1="42" y1="5" x2="18" y2="29" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    <polyline points="18,29 27,21 22,33" fill="none" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowThick = ({ size, blur, opacity, color = '#C1121F' }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none', opacity, display: 'block' }}>
    <polyline points="36,2 4,34 16,23" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowSmall = ({ size, blur, opacity, color = '#E63946' }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" style={{ filter: blur > 0 ? `blur(${blur}px)` : 'none', opacity, display: 'block' }}>
    <line x1="44" y1="4" x2="22" y2="26" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <polygon points="22,26 30,20 26,30" fill={color} />
  </svg>
)

/* Trail chevron - simple blurred shape */
const TrailChevron = ({ size, blur, opacity }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{ filter: `blur(${blur}px)`, opacity, display: 'block' }}>
    <polyline points="34,4 6,32 18,21" fill="none" stroke="#E63946" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SpeedArrowsAnimation = () => {
  return (
    <div className="sa-container">
      {/* Trail shadows */}
      <div className="sa-trail sa-trail-3">
        <TrailChevron size={28} blur={22} opacity={0.06} />
      </div>
      <div className="sa-trail sa-trail-2">
        <TrailChevron size={32} blur={15} opacity={0.12} />
      </div>
      <div className="sa-trail sa-trail-1">
        <TrailChevron size={36} blur={9} opacity={0.22} />
      </div>

      {/* Main arrows group */}
      <div className="sa-main">
        {/* Arrow 1 - top, small, sharp */}
        <div className="sa-arrow sa-arrow-1">
          <ArrowFull size={24} blur={0} opacity={0.5} />
        </div>
        {/* Arrow 2 - slight blur */}
        <div className="sa-arrow sa-arrow-2">
          <ArrowChevron size={30} blur={1.8} opacity={0.65} sw={4.5} />
        </div>
        {/* Arrow 3 - CENTER, largest, MOST BLUR */}
        <div className="sa-arrow sa-arrow-3">
          <ArrowThick size={44} blur={5} opacity={0.85} />
        </div>
        {/* Arrow 4 - slight blur */}
        <div className="sa-arrow sa-arrow-4">
          <ArrowSlim size={30} blur={1.8} opacity={0.65} />
        </div>
        {/* Arrow 5 - bottom, small, sharp */}
        <div className="sa-arrow sa-arrow-5">
          <ArrowSmall size={24} blur={0} opacity={0.5} />
        </div>
      </div>
    </div>
  )
}

export default SpeedArrowsAnimation