// import { useRef, useState, useEffect } from "react";
// import "./Home1.css";

// /* ───────── API Endpoint ───────── */
// const API_URL = "https://workfit.co.in/provess/Prowess/api/banner";

// /* ───────── Heading Split Helper ───────── */
// /* "WE DON'T JUST TEACH.WE BUILD PERFORMANCE."
//    → Line 1: "WE DON'T JUST TEACH."
//    → Line 2: "WE BUILD " + accent("PERFORMANCE.") */
// function splitHeading(heading) {
//   if (!heading) return [{ text: "", accent: "" }];

//   const sentences = heading.split(".").filter((s) => s.trim());

//   if (sentences.length === 0) return [{ text: heading || "", accent: "" }];

//   if (sentences.length === 1) {
//     const words = sentences[0].trim().split(/\s+/);
//     if (words.length <= 1) return [{ text: sentences[0].trim(), accent: "" }];
//     const lastWord = words.pop();
//     return [{ text: words.join(" ") + " ", accent: lastWord }];
//   }

//   const lines = [];
//   for (let i = 0; i < sentences.length - 1; i++) {
//     lines.push({ text: sentences[i].trim() + ".", accent: "" });
//   }

//   const lastSentence = sentences[sentences.length - 1].trim();
//   const words = lastSentence.split(/\s+/);
//   if (words.length > 1) {
//     const lastWord = words.pop();
//     lines.push({ text: words.join(" ") + " ", accent: lastWord });
//   } else {
//     lines.push({ text: lastSentence, accent: "" });
//   }

//   return lines;
// }

// /* ════════════════════════════════════════════════════════════════════════
//    COMPONENT
//    ════════════════════════════════════════════════════════════════════════ */
// export default function Home1() {
//   /* ─── State ─── */
//   const [banners, setBanners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isRevealed, setIsRevealed] = useState(false);
//   const [hoverReady, setHoverReady] = useState(false);
//   const [playingSlide, setPlayingSlide] = useState(null);
//   const [showBtnVideo, setShowBtnVideo] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   /* ─── Refs ─── */
//   const sectionRef = useRef(null);
//   const videoRefs = useRef({});
//   const btnVideoRef = useRef(null);
//   const autoScrollRef = useRef(null);
//   const hoverTimeoutRef = useRef(null);
//   const touchStartX = useRef(0);

//   /* ─── Derived ─── */
//   const currentBanner = banners[currentIndex] || null;
//   const isSingle = banners.length <= 1;

//   /* ══════════════════════════════════════════════════════════════════════
//      1. FETCH API
//      ══════════════════════════════════════════════════════════════════════ */
//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.data) {
//           const items = Array.isArray(res.data) ? res.data : [res.data];
//           if (items.length > 0) setBanners(items);
//         }
//       })
//       .catch((err) => console.error("Banner fetch error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   /* ══════════════════════════════════════════════════════════════════════
//      2. INTERSECTION OBSERVER — Reveal Animation
//      ══════════════════════════════════════════════════════════════════════ */
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section || banners.length === 0) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsRevealed(true);
//           } else {
//             setIsRevealed(false);
//             setHoverReady(false);
//             setPlayingSlide(null);
//             if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(section);
//     return () => {
//       observer.disconnect();
//       if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
//     };
//   }, [banners.length]);

//   /* ─── hover-ready timer (single item: 1200ms, multiple: 600ms) ─── */
//   useEffect(() => {
//     if (!isRevealed) {
//       setHoverReady(false);
//       return;
//     }
//     if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
//     hoverTimeoutRef.current = setTimeout(
//       () => setHoverReady(true),
//       isSingle ? 1200 : 600
//     );
//     return () => {
//       if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
//     };
//   }, [isRevealed, isSingle]);

//   /* ══════════════════════════════════════════════════════════════════════
//      3. AUTO SCROLL (multiple items only)
//      ══════════════════════════════════════════════════════════════════════ */
//   useEffect(() => {
//     if (banners.length <= 1 || isPaused) {
//       if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//       return;
//     }

//     autoScrollRef.current = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % banners.length);
//     }, 5000);

//     return () => {
//       if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     };
//   }, [banners.length, isPaused]);

//   /* ─── Pause video when slide changes ─── */
//   useEffect(() => {
//     if (playingSlide !== null && playingSlide !== currentIndex) {
//       const prevVideo = videoRefs.current[playingSlide];
//       if (prevVideo) {
//         prevVideo.pause();
//         prevVideo.currentTime = 0;
//       }
//       setPlayingSlide(null);
//     }
//   }, [currentIndex, playingSlide]);

//   /* ══════════════════════════════════════════════════════════════════════
//      4. MODAL — btn_video (secondary button click)
//      ══════════════════════════════════════════════════════════════════════ */
//   useEffect(() => {
//     if (!showBtnVideo) return;
//     const handleEsc = (e) => {
//       if (e.key === "Escape") setShowBtnVideo(false);
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [showBtnVideo]);

//   useEffect(() => {
//     if (!showBtnVideo && btnVideoRef.current) {
//       btnVideoRef.current.pause();
//       btnVideoRef.current.currentTime = 0;
//     }
//   }, [showBtnVideo]);

//   /* ══════════════════════════════════════════════════════════════════════
//      HANDLERS
//      ══════════════════════════════════════════════════════════════════════ */
//   const handlePlay = (idx) => {
//     const video = videoRefs.current[idx];
//     if (video) {
//       video.play();
//       setPlayingSlide(idx);
//     }
//   };

//   const openBtnVideo = () => {
//     if (currentBanner?.btn_video_path) {
//       setShowBtnVideo(true);
//     }
//   };

//   const handleDotClick = (idx) => {
//     setCurrentIndex(idx);
//     /* Reset auto-scroll timer so it doesn't jump immediately */
//     if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//   };

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e) => {
//     if (banners.length <= 1) return;
//     const diff = touchStartX.current - e.changedTouches[0].clientX;
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         setCurrentIndex((prev) => (prev + 1) % banners.length);
//       } else {
//         setCurrentIndex(
//           (prev) => (prev - 1 + banners.length) % banners.length
//         );
//       }
//     }
//   };

//   /* ══════════════════════════════════════════════════════════════════════
//      CLASS HELPERS
//      ══════════════════════════════════════════════════════════════════════ */
//   const getLeftClasses = (idx) => {
//     const isActive = idx === currentIndex;
//     if (!isRevealed || !isActive) return "home1-prowess-left";
//     if (hoverReady) return "home1-prowess-left revealed hover-ready";
//     return "home1-prowess-left revealed";
//   };

//   const getCardClasses = (idx) => {
//     const isActive = idx === currentIndex;
//     if (!isRevealed || !isActive) return "home1-prowess-video-card";
//     if (hoverReady) return "home1-prowess-video-card revealed hover-ready";
//     return "home1-prowess-video-card revealed";
//   };

//   /* ══════════════════════════════════════════════════════════════════════
//      RENDER
//      ══════════════════════════════════════════════════════════════════════ */
//   if (loading) return null;
//   if (banners.length === 0) return null;

//   return (
//     <section
//       className="home1-prowess-section"
//       ref={sectionRef}
//       style={{
//         "--home1-bg-image": currentBanner.image_path
//           ? `url(${currentBanner.image_path})`
//           : "none",
//         "--home1-bg-opacity": currentBanner.image_path ? "0.12" : "0",
//       }}
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       {/* ────── Carousel ────── */}
//       <div className="home1-prowess-carousel-wrapper">
//         <div
//           className="home1-prowess-carousel-track"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {banners.map((banner, idx) => {
//             const lines = splitHeading(banner.heading);
//             const isPlayingThis = playingSlide === idx;

//             return (
//               <div key={banner.id || idx} className="home1-prowess-slide">
//                 <div className="home1-prowess-container">
//                   {/* ──── Left Column ──── */}
//                   <div className={getLeftClasses(idx)}>
//                     <h1 className="home1-prowess-heading">
//                       {lines.map((line, li) => (
//                         <span key={li}>
//                           {line.text}
//                           {line.accent && (
//                             <span className="home1-prowess-heading-accent">
//                               {line.accent}
//                             </span>
//                           )}
//                           {li < lines.length - 1 && <br />}
//                         </span>
//                       ))}
//                     </h1>
//                     <span className="home1-prowess-underline" />

//                     <p className="home1-prowess-desc">{banner.description}</p>

//                     <div className="home1-prowess-btn-row">
//                       {/* Primary Button — button_watch */}
//                       <button type="button" className="home1-prowess-btn-primary">
//                         {banner.button_watch || "TALK TO A PERFORMANCE COACH"}
//                       </button>

//                       {/* Secondary Button — button_started + btn_video icon */}
//                       <button
//                         type="button"
//                         className="home1-prowess-btn-secondary"
//                         onClick={openBtnVideo}
//                       >
//                         <svg
//                           viewBox="0 0 40 32"
//                           className="home1-prowess-btn-play-icon"
//                         >
//                           <path
//                             d="M8 2
//                                C20 2 34 10 37 16
//                                C34 22 20 30 8 30
//                                C5 30 4 28 4 25
//                                V7
//                                C4 4 5 2 8 2Z"
//                             fill="#f5b301"
//                           />
//                           <path d="M16 10 L27 16 L16 22 Z" fill="#ffffff" />
//                         </svg>
//                         {banner.button_started || "SEE HOW PROWESS WORKS"}
//                       </button>
//                     </div>
//                   </div>

//                   {/* ──── Right Column — Video Card ──── */}
//                   <div className="home1-prowess-right">
//                     <div className={getCardClasses(idx)}>
//                       <video
//                         ref={(el) => {
//                           if (el) videoRefs.current[idx] = el;
//                         }}
//                         className="home1-prowess-video"
//                         preload="auto"
//                         playsInline
//                         onPause={() => {
//                           if (playingSlide === idx) setPlayingSlide(null);
//                         }}
//                         onEnded={() => {
//                           if (playingSlide === idx) setPlayingSlide(null);
//                         }}
//                         controls={isPlayingThis}
//                       >
//                         {banner.video_file_path && (
//                           <source
//                             src={banner.video_file_path}
//                             type="video/mp4"
//                           />
//                         )}
//                       </video>

//                       {/* Overlay: Name + Position + Play Button */}
//                       {!isPlayingThis && banner.video_file_path && (
//                         <>
//                           <div className="home1-prowess-video-name">
//                             <span className="home1-prowess-video-name-title">
//                               {banner.name}
//                             </span>
//                             <span className="home1-prowess-video-name-role">
//                               {banner.position}
//                             </span>
//                           </div>

//                           <button
//                             type="button"
//                             className="home1-prowess-play-btn"
//                             aria-label="Play video"
//                             onClick={() => handlePlay(idx)}
//                           >
//                             <svg
//                               viewBox="0 0 24 24"
//                               className="home1-prowess-play-icon"
//                             >
//                               <path d="M8 5v14l11-7z" fill="#0a0a0a" />
//                             </svg>
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ────── Dots (only when multiple banners) ────── */}
//       {banners.length > 1 && (
//         <div className="home1-prowess-dots">
//           {banners.map((_, idx) => (
//             <button
//               key={idx}
//               type="button"
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`home1-prowess-dot${
//                 idx === currentIndex ? " active" : ""
//               }`}
//               onClick={() => handleDotClick(idx)}
//             />
//           ))}
//         </div>
//       )}

//       {/* ────── Modal: btn_video (secondary button click) ────── */}
//       {showBtnVideo && currentBanner?.btn_video_path && (
//         <div
//           className="home1-prowess-modal-overlay"
//           onClick={() => setShowBtnVideo(false)}
//         >
//           <div
//             className="home1-prowess-modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               type="button"
//               className="home1-prowess-modal-close"
//               onClick={() => setShowBtnVideo(false)}
//               aria-label="Close video"
//             >
//               ✕
//             </button>
//             <video
//               ref={btnVideoRef}
//               className="home1-prowess-modal-video"
//               autoPlay
//               controls
//               playsInline
//             >
//               <source
//                 src={currentBanner.btn_video_path}
//                 type="video/mp4"
//               />
//             </video>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
















// // Dynamic Code
// import { useRef, useState, useEffect, useCallback } from "react";
// import "./Home10.css";
// import { useNavigate } from "react-router-dom";

// export default function Home10() {
//   const navigate = useNavigate();
//   const [bannerData, setBannerData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [modalVideoPath, setModalVideoPath] = useState("");

//   const modalVideoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const videoRefs = useRef({});
//   const autoSlideRef = useRef(null);


//   const handleTalkToCoach = () => {
//   navigate("/contact#contact1");
//   };


//   /* ───────── Fetch API ───────── */
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           "https://workfit.co.in/provess/Prowess/index.php/API/list_home_prowess_banner2"
//         );
//         const json = await res.json();
//         if (json.success === "1" && json.data) {
//   const data = Array.isArray(json.data) ? json.data : [json.data];

//   // Oldest ID first
//   const sortedData = [...data].sort(
//     (a, b) => Number(a.id) - Number(b.id)
//   );

//   setBannerData(sortedData);
// }
//       } catch (err) {
//         console.error("Banner API error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   /* ───────── Reset playing on slide change ───────── */
//   useEffect(() => {
//     setIsPlaying(false);
//   }, [currentSlide]);

//   /* ───────── Auto-slide ───────── */
//   const startAutoSlide = useCallback(() => {
//     if (bannerData.length <= 1) return;
//     if (autoSlideRef.current) clearInterval(autoSlideRef.current);
//     autoSlideRef.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerData.length);
//     }, 5000);
//   }, [bannerData.length]);

//   useEffect(() => {
//     startAutoSlide();
//     return () => {
//       if (autoSlideRef.current) clearInterval(autoSlideRef.current);
//     };
//   }, [startAutoSlide]);

//   /* ───────── Intersection Observer (animations) ───────── */
//   useEffect(() => {
//     if (bannerData.length === 0) return;
//     const section = sectionRef.current;
//     if (!section) return;

//     let hoverTimeout = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             /* First slide: animate in */
//             const firstSlide = section.querySelector(".home1-prowess-slide");
//             if (firstSlide) {
//               const firstTargets = firstSlide.querySelectorAll(
//                 ".home1-prowess-left, .home1-prowess-video-card"
//               );
//               firstTargets.forEach((el) => el.classList.add("revealed"));
//               if (hoverTimeout) clearTimeout(hoverTimeout);
//               hoverTimeout = setTimeout(() => {
//                 firstTargets.forEach((el) => el.classList.add("hover-ready"));
//               }, 1200);
//             }

//             /* Other slides: skip animation, go straight to final state */
//             const allTargets = section.querySelectorAll(
//               ".home1-prowess-left, .home1-prowess-video-card"
//             );
//             allTargets.forEach((el) => {
//               if (!el.classList.contains("revealed")) {
//                 el.classList.add("hover-ready");
//               }
//             });
//           } else {
//             const allTargets = section.querySelectorAll(
//               ".home1-prowess-left, .home1-prowess-video-card"
//             );
//             allTargets.forEach((el) =>
//               el.classList.remove("revealed", "hover-ready")
//             );
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
//   }, [bannerData]);

//   /* ───────── Escape to close modal ───────── */
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape" && showModal) closeModal();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [showModal]);

//   /* ───────── Helpers ───────── */
//   const splitHeading = (heading) => {
//     if (!heading) return { part1: "", part2: "" };
//     const dotIdx = heading.indexOf(".");
//     if (dotIdx !== -1 && dotIdx < heading.length - 1) {
//       return {
//         part1: heading.substring(0, dotIdx),
//         part2: heading.substring(dotIdx + 1).trim(),
//       };
//     }
//     return { part1: heading, part2: "" };
//   };

//   const handlePlay = () => {
//     const video = videoRefs.current[currentSlide];
//     if (video) {
//       video.play().then(() => setIsPlaying(true)).catch(() => {});
//     }
//   };

//   const handleBtnVideo = (videoPath) => {
//     if (!videoPath) return;
//     setModalVideoPath(videoPath);
//     setShowModal(true);
//     setTimeout(() => {
//       if (modalVideoRef.current) {
//         modalVideoRef.current.play().catch(() => {});
//       }
//     }, 200);
//   };

//   const closeModal = () => {
//     if (modalVideoRef.current) {
//       modalVideoRef.current.pause();
//       modalVideoRef.current.currentTime = 0;
//     }
//     setShowModal(false);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     startAutoSlide();
//   };

//   /* ───────── Loading / Empty ───────── */
//   if (loading || bannerData.length === 0) return null;

//   const isSingle = bannerData.length === 1;
//   const currentItem = bannerData[currentSlide];

//   /* ───────── Render ───────── */
//   return (
//     <section className="home1-prowess-section" ref={sectionRef}>
//       {/* Dynamic background image from API */}
//       <div
//         className="home1-prowess-bg-image"
//         style={{
//           backgroundImage: `url(${currentItem.image_path || ""})`,
//         }}
//       />

//       {/* ─── Slider ─── */}
//       <div className="home1-prowess-slider-wrapper">
//         <div
//           className={`home1-prowess-slider-track${isSingle ? " single" : ""}`}
//           style={
//             !isSingle
//               ? { transform: `translateX(-${currentSlide * 100}%)` }
//               : undefined
//           }
//         >
//           {bannerData.map((item, index) => {
//             const { part1, part2 } = splitHeading(item.heading);
//             return (
//               <div className="home1-prowess-slide" key={item.id || index}>
//                 <div className="home1-prowess-container">
//                   {/* ── Left ── */}
//                   <div className="home1-prowess-left">
//                     <h1 className="home1-prowess-heading">
//                       {part1}
//                       {part2 && (
//                         <>
//                           <br />
//                           <span className="home1-prowess-heading-accent">
//                             {part2}
//                           </span>
//                         </>
//                       )}
//                     </h1>
//                     <span className="home1-prowess-underline" />

//                     <p className="home1-prowess-desc">{item.description}</p>

//                     <div className="home1-prowess-btn-row">
//                       <button type="button" 
//                       className="home1-prowess-btn-primary"
//                       onClick={handleTalkToCoach}
//                       >
//                         {item.button_watch}
//                       </button>

//                       <button
//                         type="button"
//                         className="home1-prowess-btn-secondary"
//                         onClick={() => handleBtnVideo(item.btn_video_path)}
//                       >
//                         <svg
//                           viewBox="0 0 40 32"
//                           className="home1-prowess-btn-play-icon"
//                         >
//                           <path
//                             d="M8 2
//                                C20 2 34 10 37 16
//                                C34 22 20 30 8 30
//                                C5 30 4 28 4 25
//                                V7
//                                C4 4 5 2 8 2Z"
//                             fill="#f5b301"
//                           />
//                           <path d="M16 10 L27 16 L16 22 Z" fill="#ffffff" />
//                         </svg>
//                         {item.button_started}
//                       </button>
//                     </div>
//                   </div>

//                   {/* ── Right: Video ── */}
//                   <div className="home1-prowess-right">
//                     <div className="home1-prowess-video-card">
//                       <video
//                         ref={(el) => {
//                           if (el) videoRefs.current[index] = el;
//                         }}
//                         className="home1-prowess-video"
//                         preload="auto"
//                         onPause={() => {
//                           if (index === currentSlide) setIsPlaying(false);
//                         }}
//                         onEnded={() => {
//                           if (index === currentSlide) setIsPlaying(false);
//                         }}
//                         controls={isPlaying && index === currentSlide}
//                       >
//                         <source src={item.video_file_path} type="video/mp4" />
//                       </video>

//                       {(!isPlaying || index !== currentSlide) && (
//                         <>
//                           <div className="home1-prowess-video-name">
//                             <span className="home1-prowess-video-name-title">
//                               {item.name}
//                             </span>
//                             <span className="home1-prowess-video-name-role">
//                               {item.position}
//                             </span>
//                             <div className="home1-prowess-video-name-line"></div>
//                           </div>

//                           <button
//                             type="button"
//                             className="home1-prowess-play-btn"
//                             aria-label="Play video"
//                             onClick={handlePlay}
//                           >
//                             <svg
//                               viewBox="0 0 24 24"
//                               className="home1-prowess-play-icon"
//                             >
//                               <path
//                                 d="M8 5v14l11-7z"
//                                 fill="#0a0a0a"
//                               />
//                             </svg>
//                           </button>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* ─── Dots (only if multiple) ─── */}
//       {!isSingle && (
//         <div className="home1-prowess-dots">
//           {bannerData.map((item, index) => (
//             <button
//               key={item.id || index}
//               className={`home1-prowess-dot${
//                 index === currentSlide ? " active" : ""
//               }`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}

//       {/* ─── Modal for btn_video ─── */}
//       {showModal && (
//         <div className="home1-prowess-modal-overlay" onClick={closeModal}>
//           <div
//             className="home1-prowess-modal"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="home1-prowess-modal-close"
//               onClick={closeModal}
//               aria-label="Close"
//             >
//               ✕
//             </button>
//             <video
//               ref={modalVideoRef}
//               className="home1-prowess-modal-video"
//               controls
//               autoPlay
//             >
//               <source src={modalVideoPath} type="video/mp4" />
//             </video>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }