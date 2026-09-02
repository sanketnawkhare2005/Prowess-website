// import React from 'react';
// import './PerformanceStories.css';
// import VideoTestimonials from './VideoTestimonials';
// import WrittenTestimonials from './WrittenTestimonials';
// import ImpactStatistics from './ImpactStatistics';
// import BeforeAfter from './BeforeAfter';
// import ShareExperience from './ShareExperience';

// const PerformanceStories = () => {
//   return (
//     <div className="apple-container">
     
// <div className="apple-header">
//   {/* Left: Logo */}
//   <div className="apple-logo-block">
//     <img
//           src="/images/ChatImage.png"
//           alt="Prowess"
//           className="prowss-nav-logo-img"
//         />
//   </div>

//   {/* Center: Heading + desc */}
//   <div className="apple-heading-block">
//     <div className="apple-heading-row">
//   {/* Left comet-arrow: fades in from left, tapers to a point near heading */}
//   <svg className="apple-arrow-line" viewBox="0 0 90 20" fill="none">
//     <defs>
//       <linearGradient id="fadeLeft" x1="0" y1="0" x2="1" y2="0">
//         <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
//         <stop offset="55%" stopColor="#D4AF37" stopOpacity="0.9" />
//         <stop offset="100%" stopColor="#C9971F" stopOpacity="1" />
//       </linearGradient>
//     </defs>
//     <path
//       d="M0,10.5 L68,10 L80,4 L88,10 L80,16 L68,10.3 Z"
//       fill="url(#fadeLeft)"
//     />
//   </svg>

//   <h1 className="apple-heading">PERFORMANCE STORIES</h1>

//   {/* Right comet-arrow: mirrored */}
//   <svg className="apple-arrow-line" viewBox="0 0 90 20" fill="none">
//     <defs>
//       <linearGradient id="fadeRight" x1="0" y1="0" x2="1" y2="0">
//         <stop offset="0%" stopColor="#C9971F" stopOpacity="1" />
//         <stop offset="45%" stopColor="#D4AF37" stopOpacity="0.9" />
//         <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
//       </linearGradient>
//     </defs>
//     <path
//       d="M90,10.5 L22,10 L10,4 L2,10 L10,16 L22,10.3 Z"
//       fill="url(#fadeRight)"
//     />
//   </svg>
// </div>
//     <p className="apple-subheading">
//       Real feedback from students who transformed their
//       <br />
//       <strong>Skills. Confidence. Mindset. Future.</strong>
//     </p>
//   </div>

//   {/* Right: Gold script tagline */}
//   <div className="apple-tagline-block">
//   <p>Real People.</p>
//   <p>Real Growth.</p>
//   <p className="apple-tagline-last">
//     Real Impact.
//     <svg className="apple-underline-swoosh" viewBox="0 0 110 14" fill="none">
//       <path d="M2 8 C 20 2, 40 12, 60 6 C 75 2, 90 8, 108 4" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
//     </svg>
//   </p>
// </div>
// </div>

//       {/* Section 1: Video Testimonials */}
//       <VideoTestimonials />

//       {/* Section 2: Written Testimonials */}
//       <WrittenTestimonials />

//       {/* Section 3: Impact Statistics Strip */}
//       <ImpactStatistics />

//       {/* Section 4: Before vs After */}
//       <BeforeAfter />

//       {/* Section 5: Share Your Experience Form */}
//       <ShareExperience />

//       {/* Bottom Tagline */}
//       {/* <div className="apple-tagline-section">
//         <p className="apple-tagline-main">
//           WE DON'T JUST TEACH,
//           <br />
//           WE TRANSFORM PERFORMANCE.
//         </p>
//         <p className="apple-tagline-sub">Grow. Lead. Succeed.</p>
//       </div> */}
//     </div>
//   );
// };

// export default PerformanceStories;









import React, { useEffect, useRef } from 'react';
import './PerformanceStories.css';
import VideoTestimonials from './VideoTestimonials';
import WrittenTestimonials from './WrittenTestimonials';
import ImpactStatistics from './ImpactStatistics';
import BeforeAfter from './BeforeAfter';
import ShareExperience from './ShareExperience';

const PerformanceStories = () => {
  const headerRef = useRef(null);

  /* ── Intersection Observer for Arrow Effects ── */
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const arrows = header.querySelectorAll('.apple-static-arrow');

    let hoverTimeout = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            arrows.forEach((el) => el.classList.add('revealed'));

            if (hoverTimeout) clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
              arrows.forEach((el) => el.classList.add('hover-ready'));
            }, 800);
          } else {
            arrows.forEach((el) => {
              el.classList.remove('revealed', 'hover-ready');
            });
            if (hoverTimeout) clearTimeout(hoverTimeout);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(header);
    return () => {
      observer.disconnect();
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
  }, []);

  return (
    <div className="apple-container">
      <div className="apple-header" ref={headerRef}>
        {/* Left: Logo */}
        <div className="apple-logo-block">
          <img
            src="/images/ChatImage.png"
            alt="Prowess"
            className="apple-nav-logo-img"
          />
        </div>

        {/* Center: Heading + desc */}
        <div className="apple-heading-block">
          <div className="apple-heading-row">
            
            {/* LEFT ARROW (Right Direction) */}
            <span className="apple-static-arrow">
              <svg viewBox="0 0 60 24" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="storyArrowLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f5b301" stopOpacity="0" />
                    <stop offset="45%" stopColor="#f5b301" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#f5b301" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M0 8h34v-6l24 10-24 10v-6H0z" fill="url(#storyArrowLeft)" />
              </svg>
            </span>

            <h1 className="apple-heading">PERFORMANCE STORIES</h1>

            {/* RIGHT ARROW (Left Direction - Mirrored) */}
            <span className="apple-static-arrow apple-arrow-mirrored">
              <svg viewBox="0 0 60 24" fill="none" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="storyArrowRight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f5b301" stopOpacity="0" />
                    <stop offset="45%" stopColor="#f5b301" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#f5b301" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path d="M0 8h34v-6l24 10-24 10v-6H0z" fill="url(#storyArrowRight)" />
              </svg>
            </span>

          </div>
          
          <p className="apple-subheading">
            Real feedback from students who transformed their
            <br />
            <strong>Skills. Confidence. Mindset. Future.</strong>
          </p>
        </div>

        {/* Right: Gold script tagline with Zimil-Zimil Effect */}
        <div className="apple-tagline-block">
          <p>Real People.</p>
          <p>Real Growth.</p>
          <p className="apple-tagline-last">
            Real Impact.
            <svg className="apple-underline-swoosh" viewBox="0 0 110 14" fill="none">
              <path d="M2 8 C 20 2, 40 12, 60 6 C 75 2, 90 8, 108 4" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </p>
        </div>
      </div>

      <VideoTestimonials />
      <WrittenTestimonials />
      <ImpactStatistics />
      <BeforeAfter />
      <ShareExperience />
    </div>
  );
};

export default PerformanceStories;