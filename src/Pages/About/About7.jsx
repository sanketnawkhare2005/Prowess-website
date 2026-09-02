// import { useRef, useState, useEffect } from "react";
// import "./About1.css";

// export default function About1() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".about1-prow-eyebrow, " +
//       ".about1-prow-heading, " +
//       ".about1-prow-description, " +
//       ".about1-prow-quote, " +
//       ".about1-prow-video-card"
//     );

//     let hoverTimeout = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             targets.forEach((el) => el.classList.add("revealed"));

//             if (hoverTimeout) clearTimeout(hoverTimeout);
//             hoverTimeout = setTimeout(() => {
//               targets.forEach((el) => el.classList.add("hover-ready"));
//             }, 1200);
//           } else {
//             targets.forEach((el) => {
//               el.classList.remove("revealed", "hover-ready");
//             });
//             if (hoverTimeout) clearTimeout(hoverTimeout);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(section);
//     return () => {
//       observer.disconnect();
//       if (hoverTimeout) clearTimeout(hoverTimeout);
//     };
//   }, []);

//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <section className="about1-prow-section" ref={sectionRef}>
//       <div className="about1-prow-container">
//         {/* ---------- Left: background image + text ---------- */}
//         <div className="about1-prow-left">
//           <div className="about1-prow-content">
//             <div className="about1-prow-eyebrow">
//               WHY PROWESS EXISTS
//               <span className="about1-prow-eyebrow-line"></span>
//             </div>

//             <h1 className="about1-prow-heading">
//               BECAUSE POTENTIAL
//               <br />
//               DESERVES A REAL CHANCE
//               <br />
//               TO <span className="about1-prow-heading-accent">PERFORM.</span>
//             </h1>

//             <p className="about1-prow-description">
//               We exist to bridge the gap between what students learn
//               <br />
//               and what the real world demands.
//             </p>

//             <div className="about1-prow-quote">
//               <span className="about1-prow-quote-icon">&#8220;</span>
//               <div className="about1-prow-quote-text">
//                 <span className="about1-prow-quote-line">
//                   We don&apos;t just believe in students.
//                 </span>
//                 <span className="about1-prow-quote-line about1-prow-quote-accent">
//                   We build their performance.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Right: video player ---------- */}
//         <div className="about1-prow-right">
//           <div className="about1-prow-video-card">
//             <div className="about1-prow-video-frame">
//               <video
//                 ref={videoRef}
//                 src="/videos/backvideo.mp4"
//                 className="about1-prow-video-img"
//                 preload="auto"
//                 onPause={() => setIsPlaying(false)}
//                 onEnded={() => setIsPlaying(false)}
//                 controls={isPlaying}
//               />

//               {!isPlaying && (
//                 <>
//                   <div className="about1-prow-video-name">
//                     <span className="about1-prow-video-name-title">
//                       Saurabh Kene
//                     </span>
//                     <span className="about1-prow-video-name-role">
//                       Performance Coach
//                     </span>
//                     <span className="about1-prow-video-name-underline"></span>
//                   </div>

//                   <button
//                     type="button"
//                     className="about1-prow-play-btn"
//                     aria-label="Play video"
//                     onClick={handlePlay}
//                   >
//                     <svg viewBox="0 0 24 24" className="about1-prow-play-icon">
//                       <path d="M8 5v14l11-7z" fill="#0a0a0a" />
//                     </svg>
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










// // Dyanamic code
// import { useRef, useState, useEffect, useCallback } from "react";
// import "./About7.css";

// const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_exists_banner2";
// const AUTO_SCROLL_MS = 6000;

// function splitMainHeading(text) {
//   const words = (text || "").trim().split(/\s+/).filter(Boolean);
//   if (words.length <= 1) return { whitePart: text || "", yellowPart: "" };
//   return {
//     whitePart: words.slice(0, -1).join(" "),
//     yellowPart: words[words.length - 1],
//   };
// }

// function splitQuote(text) {
//   const raw = text || "";
//   let parts = raw.split(/\r?\n/).map((p) => p.trim()).filter(Boolean);
//   if (parts.length < 2) {
//     parts = raw.split(/(?<=[.!?])\s+/).map((p) => p.trim()).filter(Boolean);
//   }
//   if (parts.length >= 2) {
//     return { line1: parts[0], line2: parts.slice(1).join(" ") };
//   }
//   return { line1: raw, line2: "" };
// }

// export default function About7() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const autoScrollRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const [banners, setBanners] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // ---------- FETCH API ----------
//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((res) => {
//         const list = Array.isArray(res?.data) ? res.data : [];

//         // ---------- ASCENDING ORDER ----------
//         // id (ya jo bhi sequence field API bhejta hai, e.g. "sort_order")
//         // ke hisab se ascending sort. Agar API me alag field ho to
//         // "id" ki jagah wo field name daal dena.
//         const sorted = [...list].sort(
//           (a, b) => (Number(a.id) || 0) - (Number(b.id) || 0)
//         );

//         setBanners(sorted);
//       })
//       .catch((err) => console.error("About1 banner API error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   // ---------- AUTO SCROLL (Home1 pattern) ----------
//   const startAutoScroll = useCallback(() => {
//     if (banners.length <= 1) return;
//     if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     autoScrollRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % banners.length);
//     }, AUTO_SCROLL_MS);
//   }, [banners.length]);

//   useEffect(() => {
//     if (isPlaying) {
//       if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//       return undefined;
//     }
//     startAutoScroll();
//     return () => {
//       if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     };
//   }, [isPlaying, startAutoScroll]);

//   // Banner change → video reset
//   useEffect(() => {
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, [currentIndex]);

//   // ---------- SCROLL REVEAL ----------
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".about1-prow-eyebrow, " +
//       ".about1-prow-heading, " +
//       ".about1-prow-description, " +
//       ".about1-prow-quote, " +
//       ".about1-prow-video-card"
//     );

//     let hoverTimeout = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             targets.forEach((el) => el.classList.add("revealed"));

//             if (hoverTimeout) clearTimeout(hoverTimeout);
//             hoverTimeout = setTimeout(() => {
//               targets.forEach((el) => el.classList.add("hover-ready"));
//             }, 1200);
//           } else {
//             targets.forEach((el) => {
//               el.classList.remove("revealed", "hover-ready");
//             });
//             if (hoverTimeout) clearTimeout(hoverTimeout);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(section);
//     return () => {
//       observer.disconnect();
//       if (hoverTimeout) clearTimeout(hoverTimeout);
//     };
//   }, [loading]);

//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   // ---------- DOT CLICK ----------
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//     startAutoScroll(); // timer reset
//   };

//   if (loading) {
//     return <section className="about1-prow-section" ref={sectionRef}></section>;
//   }

//   const current = banners[currentIndex];
//   if (!current) {
//     return <section className="about1-prow-section" ref={sectionRef}></section>;
//   }

//   const { whitePart, yellowPart } = splitMainHeading(current.main_heading);
//   const { line1, line2 } = splitQuote(current.heading);

//   return (
//     <section
//       className="about1-prow-section"
//       ref={sectionRef}
//       style={{
//         backgroundImage: `url(${current.image_path})`,
//       }}
//     >
//       <div className="about1-prow-section-overlay"></div>

//       <div className="about1-prow-container">
//         {/* ---------- Left ---------- */}
//         <div className="about1-prow-left">
//           <div className="about1-prow-content">
//             <div className="about1-prow-eyebrow">
//               {current.sub_heading}
//               <span className="about1-prow-eyebrow-line"></span>
//             </div>

//             <h1 className="about1-prow-heading">
//               {whitePart}{" "}
//               {yellowPart && (
//                 <span className="about1-prow-heading-accent">{yellowPart}</span>
//               )}
//             </h1>

//             <p className="about1-prow-description">{current.description}</p>

//             <div className="about1-prow-quote">
//               <span className="about1-prow-quote-icon">&#8220;</span>
//               <div className="about1-prow-quote-text">
//                 <span className="about1-prow-quote-line">{line1}</span>
//                 {line2 && (
//                   <span className="about1-prow-quote-line about1-prow-quote-accent">
//                     {line2}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Right: video ---------- */}
//         <div className="about1-prow-right">
//           <div className="about1-prow-video-card">
//             <div className="about1-prow-video-frame">
//               <video
//                 ref={videoRef}
//                 src={current.video_file_path}
//                 className="about1-prow-video-img"
//                 preload="auto"
//                 onPause={() => setIsPlaying(false)}
//                 onEnded={() => setIsPlaying(false)}
//                 controls={isPlaying}
//               />

//               {!isPlaying && (
//                 <>
//                   <div className="about1-prow-video-name">
//                     <span className="about1-prow-video-name-title">
//                       {current.full_name}
//                     </span>
//                     <span className="about1-prow-video-name-role">
//                       {current.position}
//                     </span>
//                     <span className="about1-prow-video-name-underline"></span>
//                   </div>

//                   <button
//                     type="button"
//                     className="about1-prow-play-btn"
//                     aria-label="Play video"
//                     onClick={handlePlay}
//                   >
//                     <svg viewBox="0 0 24 24" className="about1-prow-play-icon">
//                       <path d="M8 5v14l11-7z" fill="#0a0a0a" />
//                     </svg>
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------- DOTS (bottom center) ---------- */}
//       {banners.length > 1 && (
//         <div className="about1-prow-dots">
//           {banners.map((item, index) => (
//             <button
//               key={item.id || index}
//               type="button"
//               className={`about1-prow-dot${index === currentIndex ? " active" : ""}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }