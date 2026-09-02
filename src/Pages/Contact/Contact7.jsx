// // Dyanamic code
// import { useRef, useState, useEffect, useCallback } from "react";
// import "./Contact7.css";

// const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_exists_banner";
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

// export default function Contact7() {
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
//                 // preload="auto"
//                 preload="metadata"
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










// import { useRef, useState, useEffect, useCallback } from "react";
// import "./Contact7.css";

// /* ---------------------------------------------------------------
//    API ENDPOINT
//    --------------------------------------------------------------- */
// const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_exists_banner";
// const AUTO_SCROLL_MS = 6000;

// /* ---------------------------------------------------------------
//    Platform + Embed Helpers
//    --------------------------------------------------------------- */
// const detectPlatform = (url) => {
//   if (!url) return null;
//   if (url.match(/youtube\.com|youtu\.be/i)) return "youtube";
//   if (url.match(/facebook\.com|fb\.watch/i)) return "facebook";
//   if (url.match(/instagram\.com/i)) return "instagram";
//   return null;
// };

// const getYoutubeId = (url) => {
//   if (!url) return null;
//   const match = url.match(
//     /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/
//   );
//   return match ? match[1] : null;
// };

// const getYoutubeThumbnail = (url) => {
//   const id = getYoutubeId(url);
//   return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
// };

// const getInstagramEmbed = (url) => {
//   const match = url.match(/instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/i);
//   return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;
// };

// const getEmbedUrl = (url, platform, autoplay = true) => {
//   if (platform === "youtube") {
//     const id = getYoutubeId(url);
//     return id
//       ? `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&rel=0&playsinline=1`
//       : null;
//   }
//   if (platform === "facebook") {
//     return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
//       url
//     )}&show_text=false&autoplay=${autoplay ? "true" : "false"}`;
//   }
//   if (platform === "instagram") return getInstagramEmbed(url);
//   return null;
// };

// /* ---------------------------------------------------------------
//    Text Helpers
//    --------------------------------------------------------------- */
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

// /* ===============================================================
//    COMPONENT
//    =============================================================== */
// export default function Contact7() {
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
//         const sorted = [...list].sort(
//           (a, b) => (Number(a.id) || 0) - (Number(b.id) || 0)
//         );
//         setBanners(sorted);
//       })
//       .catch((err) => console.error("Contact7 banner API error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   // ---------- AUTO SCROLL ----------
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
//     setIsPlaying(true);
//   };

//   // ---------- DOT CLICK ----------
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//     startAutoScroll();
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

//   /* Video link platform detection for current slide */
//   const videoPlatform = detectPlatform(current.video_link);
//   const videoThumbnail =
//     videoPlatform === "youtube" ? getYoutubeThumbnail(current.video_link) : null;
//   const videoEmbedUrl = getEmbedUrl(current.video_link, videoPlatform, true);
//   const showEmbed = isPlaying && videoEmbedUrl;

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

//         {/* ---------- Right: video (embed via video_link) ---------- */}
//         <div className="about1-prow-right">
//           <div className="about1-prow-video-card">
//             <div className="about1-prow-video-frame">
//               {showEmbed ? (
//                 <iframe
//                   className="about1-prow-video-img"
//                   src={videoEmbedUrl}
//                   title="Banner Video"
//                   frameBorder="0"
//                   allow="autoplay; encrypted-media; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <>
//                   {videoPlatform === "youtube" && videoThumbnail ? (
//                     <img
//                       src={videoThumbnail}
//                       alt="Video Thumbnail"
//                       className="about1-prow-video-img"
//                     />
//                   ) : (
//                     <div className="about1-prow-video-img about1-prow-video-img--fallback" />
//                   )}

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















// // Video thumbnail add karne ke phele code
// import { useRef, useState, useEffect, useCallback } from "react";
// import "./Contact7.css";

// /* ---------------------------------------------------------------
//    API ENDPOINT
//    --------------------------------------------------------------- */
// const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_exists_banner";
// const AUTO_SCROLL_MS = 6000;

// /* ---------------------------------------------------------------
//    Platform + Embed Helpers
//    --------------------------------------------------------------- */
// const detectPlatform = (url) => {
//   if (!url) return null;
//   if (url.match(/youtube\.com|youtu\.be/i)) return "youtube";
//   if (url.match(/facebook\.com|fb\.watch/i)) return "facebook";
//   if (url.match(/instagram\.com/i)) return "instagram";
//   return null;
// };

// const getYoutubeId = (url) => {
//   if (!url) return null;
//   const match = url.match(
//     /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/
//   );
//   return match ? match[1] : null;
// };

// const getYoutubeThumbnail = (url) => {
//   const id = getYoutubeId(url);
//   return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
// };

// const getInstagramEmbed = (url) => {
//   const match = url.match(/instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/i);
//   return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;
// };

// /* mute=1 zaroori hai taaki hover-triggered autoplay browsers block na karein */
// const getEmbedUrl = (url, platform, autoplay = true) => {
//   if (platform === "youtube") {
//     const id = getYoutubeId(url);
//     return id
//       ? `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&mute=1&rel=0&playsinline=1`
//       : null;
//   }
//   if (platform === "facebook") {
//     return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
//       url
//     )}&show_text=false&autoplay=${autoplay ? "true" : "false"}&mute=1`;
//   }
//   if (platform === "instagram") return getInstagramEmbed(url);
//   return null;
// };

// /* ---------------------------------------------------------------
//    Text Helpers
//    --------------------------------------------------------------- */
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

// /* ===============================================================
//    COMPONENT
//    =============================================================== */
// export default function Contact7() {
//   const sectionRef = useRef(null);
//   const autoScrollRef = useRef(null);
//   const hoverEnterTimeout = useRef(null);
//   const hoverLeaveTimeout = useRef(null);
//   const hoverReadyTimeout = useRef(null);

//   const [isPlaying, setIsPlaying] = useState(false); // hover-triggered video play

//   // Reveal animation state — poora React state se control hota hai,
//   // DOM classList.add() nahi use karte, isliye hover se hone waale
//   // re-render se ye kabhi overwrite/wipe nahi hoga.
//   const [revealed, setRevealed] = useState(false);
//   const [hoverReady, setHoverReady] = useState(false);

//   const [banners, setBanners] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);

//   // ---------- FETCH API ----------
//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((res) => {
//         const list = Array.isArray(res?.data) ? res.data : [];
//         const sorted = [...list].sort(
//           (a, b) => (Number(a.id) || 0) - (Number(b.id) || 0)
//         );
//         setBanners(sorted);
//       })
//       .catch((err) => console.error("Contact7 banner API error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   // ---------- AUTO SCROLL ----------
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

//   // Banner change → video + hover timers reset
//   useEffect(() => {
//     setIsPlaying(false);
//     clearTimeout(hoverEnterTimeout.current);
//     clearTimeout(hoverLeaveTimeout.current);
//   }, [currentIndex]);

//   // ---------- SCROLL REVEAL (React-state driven, DOM classList nahi) ----------
//   useEffect(() => {
//     if (loading) return;
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setRevealed(true);
//             clearTimeout(hoverReadyTimeout.current);
//             hoverReadyTimeout.current = setTimeout(() => {
//               setHoverReady(true);
//             }, 1200);
//           } else {
//             setRevealed(false);
//             setHoverReady(false);
//             clearTimeout(hoverReadyTimeout.current);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(section);
//     return () => {
//       observer.disconnect();
//       clearTimeout(hoverReadyTimeout.current);
//     };
//   }, [loading]);

//   /* Cleanup timers on unmount */
//   useEffect(() => {
//     return () => {
//       clearTimeout(hoverEnterTimeout.current);
//       clearTimeout(hoverLeaveTimeout.current);
//       clearTimeout(hoverReadyTimeout.current);
//     };
//   }, []);

//   /* ---------- Hover-to-play handlers (debounced) ---------- */
//   const handleVideoMouseEnter = (embedUrl) => {
//     if (!embedUrl) return;
//     clearTimeout(hoverLeaveTimeout.current);
//     hoverEnterTimeout.current = setTimeout(() => {
//       setIsPlaying(true); // useEffect [isPlaying] auto-scroll khud pause kar dega
//     }, 120);
//   };

//   const handleVideoMouseLeave = () => {
//     clearTimeout(hoverEnterTimeout.current);
//     hoverLeaveTimeout.current = setTimeout(() => {
//       setIsPlaying(false); // useEffect [isPlaying] auto-scroll khud resume kar dega
//     }, 100);
//   };

//   // ---------- DOT CLICK ----------
//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//     startAutoScroll();
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

//   /* Video link platform detection for current slide */
//   const videoPlatform = detectPlatform(current.video_link);
//   const videoThumbnail =
//     videoPlatform === "youtube" ? getYoutubeThumbnail(current.video_link) : null;
//   const videoEmbedUrl = getEmbedUrl(current.video_link, videoPlatform, true);
//   const showEmbed = isPlaying && videoEmbedUrl;

//   const revealClass = (base) =>
//     `${base}${revealed ? " revealed" : ""}${hoverReady ? " hover-ready" : ""}`;

//   const videoCardClass = `${revealClass("about1-prow-video-card")}${
//     showEmbed ? " is-playing" : ""
//   }`;

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
//             <div className={revealClass("about1-prow-eyebrow")}>
//               {current.sub_heading}
//               <span className="about1-prow-eyebrow-line"></span>
//             </div>

//             <h1 className={revealClass("about1-prow-heading")}>
//               {whitePart}{" "}
//               {yellowPart && (
//                 <span className="about1-prow-heading-accent">{yellowPart}</span>
//               )}
//             </h1>

//             <p className={revealClass("about1-prow-description")}>
//               {current.description}
//             </p>

//             <div className={revealClass("about1-prow-quote")}>
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

//         {/* ---------- Right: video (hover to play) ---------- */}
//         <div className="about1-prow-right">
//           <div className={videoCardClass}>
//             <div
//               className="about1-prow-video-frame"
//               onMouseEnter={() => handleVideoMouseEnter(videoEmbedUrl)}
//               onMouseLeave={handleVideoMouseLeave}
//             >
//               {/* Thumbnail: hamesha DOM me rehta hai, sirf CSS opacity se crossfade hota hai */}
//               {videoPlatform === "youtube" && videoThumbnail ? (
//                 <img
//                   src={videoThumbnail}
//                   alt="Video Thumbnail"
//                   className="about1-prow-video-thumb"
//                 />
//               ) : (
//                 <div className="about1-prow-video-thumb about1-prow-video-thumb--fallback" />
//               )}

//               {/* Iframe: hover par mount hota hai, CSS delayed-transition se smoothly fade-in */}
//               {showEmbed && (
//                 <iframe
//                   className="about1-prow-video-iframe"
//                   src={videoEmbedUrl}
//                   title="Banner Video"
//                   frameBorder="0"
//                   allow="autoplay; encrypted-media; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               )}

//               <div className="about1-prow-video-name">
//                 <span className="about1-prow-video-name-title">
//                   {current.full_name}
//                 </span>
//                 <span className="about1-prow-video-name-role">
//                   {current.position}
//                 </span>
//                 <span className="about1-prow-video-name-underline"></span>
//               </div>

//               {/* Sirf visual indicator — click se kuch nahi hota, hover pe khud gayab ho jaata hai */}
//               {videoEmbedUrl && (
//                 <div className="about1-prow-play-btn" aria-hidden="true">
//                   <svg viewBox="0 0 24 24" className="about1-prow-play-icon">
//                     <path d="M8 5v14l11-7z" fill="#0a0a0a" />
//                   </svg>
//                 </div>
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















import { useRef, useState, useEffect, useCallback } from "react";
import "./Contact7.css";

/* ---------------------------------------------------------------
   API ENDPOINT
   --------------------------------------------------------------- */
const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_exists_banner";
const IMAGE_BASE_URL = "https://workfit.co.in/provess/Prowess/";
const AUTO_SCROLL_MS = 6000;

/* ---------------------------------------------------------------
   Platform + Embed Helpers
   --------------------------------------------------------------- */
const detectPlatform = (url) => {
  if (!url) return null;
  if (url.match(/youtube\.com|youtu\.be/i)) return "youtube";
  if (url.match(/facebook\.com|fb\.watch/i)) return "facebook";
  if (url.match(/instagram\.com/i)) return "instagram";
  return null;
};

const getYoutubeId = (url) => {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
};

const getInstagramEmbed = (url) => {
  const match = url.match(/instagram\.com\/(p|reel|tv)\/([A-Za-z0-9_-]+)/i);
  return match ? `https://www.instagram.com/${match[1]}/${match[2]}/embed` : null;
};

/* mute=1 zaroori hai taaki hover-triggered autoplay browsers block na karein */
const getEmbedUrl = (url, platform, autoplay = true) => {
  if (platform === "youtube") {
    const id = getYoutubeId(url);
    return id
      ? `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&mute=1&rel=0&playsinline=1`
      : null;
  }
  if (platform === "facebook") {
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      url
    )}&show_text=false&autoplay=${autoplay ? "true" : "false"}&mute=1`;
  }
  if (platform === "instagram") return getInstagramEmbed(url);
  return null;
};

/* ---------------------------------------------------------------
   Text Helpers
   --------------------------------------------------------------- */
function splitMainHeading(text) {
  const words = (text || "").trim().split(/\s+/).filter(Boolean);
  if (words.length <= 1) return { whitePart: text || "", yellowPart: "" };
  return {
    whitePart: words.slice(0, -1).join(" "),
    yellowPart: words[words.length - 1],
  };
}

function splitQuote(text) {
  const raw = text || "";
  let parts = raw.split(/\r?\n/).map((p) => p.trim()).filter(Boolean);
  if (parts.length < 2) {
    parts = raw.split(/(?<=[.!?])\s+/).map((p) => p.trim()).filter(Boolean);
  }
  if (parts.length >= 2) {
    return { line1: parts[0], line2: parts.slice(1).join(" ") };
  }
  return { line1: raw, line2: "" };
}

/* ===============================================================
   COMPONENT
   =============================================================== */
export default function Contact7() {
  const sectionRef = useRef(null);
  const autoScrollRef = useRef(null);
  const hoverEnterTimeout = useRef(null);
  const hoverLeaveTimeout = useRef(null);
  const hoverReadyTimeout = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const [revealed, setRevealed] = useState(false);
  const [hoverReady, setHoverReady] = useState(false);

  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // ---------- FETCH API ----------
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        const list = Array.isArray(res?.data) ? res.data : [];
        const sorted = [...list].sort(
          (a, b) => (Number(a.id) || 0) - (Number(b.id) || 0)
        );
        setBanners(sorted);
      })
      .catch((err) => console.error("Contact7 banner API error:", err))
      .finally(() => setLoading(false));
  }, []);

  // ---------- AUTO SCROLL ----------
  const startAutoScroll = useCallback(() => {
    if (banners.length <= 1) return;
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_SCROLL_MS);
  }, [banners.length]);

  useEffect(() => {
    if (isPlaying) {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      return undefined;
    }
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isPlaying, startAutoScroll]);

  // Banner change → video + hover timers reset
  useEffect(() => {
    setIsPlaying(false);
    clearTimeout(hoverEnterTimeout.current);
    clearTimeout(hoverLeaveTimeout.current);
  }, [currentIndex]);

  // ---------- SCROLL REVEAL ----------
  useEffect(() => {
    if (loading) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            clearTimeout(hoverReadyTimeout.current);
            hoverReadyTimeout.current = setTimeout(() => {
              setHoverReady(true);
            }, 1200);
          } else {
            setRevealed(false);
            setHoverReady(false);
            clearTimeout(hoverReadyTimeout.current);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      clearTimeout(hoverReadyTimeout.current);
    };
  }, [loading]);

  /* Cleanup timers on unmount */
  useEffect(() => {
    return () => {
      clearTimeout(hoverEnterTimeout.current);
      clearTimeout(hoverLeaveTimeout.current);
      clearTimeout(hoverReadyTimeout.current);
    };
  }, []);

  /* ---------- Hover-to-play handlers ---------- */
  const handleVideoMouseEnter = (embedUrl) => {
    if (!embedUrl) return;
    clearTimeout(hoverLeaveTimeout.current);
    hoverEnterTimeout.current = setTimeout(() => {
      setIsPlaying(true);
    }, 120);
  };

  const handleVideoMouseLeave = () => {
    clearTimeout(hoverEnterTimeout.current);
    hoverLeaveTimeout.current = setTimeout(() => {
      setIsPlaying(false);
    }, 100);
  };

  // ---------- DOT CLICK ----------
  const goToSlide = (index) => {
    setCurrentIndex(index);
    startAutoScroll();
  };

  if (loading) {
    return <section className="about1-prow-section" ref={sectionRef}></section>;
  }

  const current = banners[currentIndex];
  if (!current) {
    return <section className="about1-prow-section" ref={sectionRef}></section>;
  }

  const { whitePart, yellowPart } = splitMainHeading(current.main_heading);
  const { line1, line2 } = splitQuote(current.heading);

  const videoPlatform = detectPlatform(current.video_link);

  /* ✅ CHANGE 2: img_tumbnail se thumbnail */
  const videoThumbnail = current.img_tumbnail
    ? IMAGE_BASE_URL + current.img_tumbnail
    : null;

  const videoEmbedUrl = getEmbedUrl(current.video_link, videoPlatform, true);
  const showEmbed = isPlaying && videoEmbedUrl;

  const revealClass = (base) =>
    `${base}${revealed ? " revealed" : ""}${hoverReady ? " hover-ready" : ""}`;

  const videoCardClass = `${revealClass("about1-prow-video-card")}${
    showEmbed ? " is-playing" : ""
  }`;

  return (
    <section
      className="about1-prow-section"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${current.image_path})`,
      }}
    >
      <div className="about1-prow-section-overlay"></div>

      <div className="about1-prow-container">
        {/* ---------- Left ---------- */}
        <div className="about1-prow-left">
          <div className="about1-prow-content">
            <div className={revealClass("about1-prow-eyebrow")}>
              {current.sub_heading}
              <span className="about1-prow-eyebrow-line"></span>
            </div>

            <h1 className={revealClass("about1-prow-heading")}>
              {whitePart}{" "}
              {yellowPart && (
                <span className="about1-prow-heading-accent">{yellowPart}</span>
              )}
            </h1>

            <p className={revealClass("about1-prow-description")}>
              {current.description}
            </p>

            <div className={revealClass("about1-prow-quote")}>
              <span className="about1-prow-quote-icon">&#8220;</span>
              <div className="about1-prow-quote-text">
                <span className="about1-prow-quote-line">{line1}</span>
                {line2 && (
                  <span className="about1-prow-quote-line about1-prow-quote-accent">
                    {line2}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Right: video (hover to play) ---------- */}
        <div className="about1-prow-right">
          <div className={videoCardClass}>
            <div
              className="about1-prow-video-frame"
              onMouseEnter={() => handleVideoMouseEnter(videoEmbedUrl)}
              onMouseLeave={handleVideoMouseLeave}
            >
              {/* ✅ CHANGE 3: platform check hataya, sirf thumbnail check + onError */}
              {videoThumbnail ? (
                <img
                  src={videoThumbnail}
                  alt="Video Thumbnail"
                  className="about1-prow-video-thumb"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
              ) : (
                <div className="about1-prow-video-thumb about1-prow-video-thumb--fallback" />
              )}

              {showEmbed && (
                <iframe
                  className="about1-prow-video-iframe"
                  src={videoEmbedUrl}
                  title="Banner Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}

              <div className="about1-prow-video-name">
                <span className="about1-prow-video-name-title">
                  {current.full_name}
                </span>
                <span className="about1-prow-video-name-role">
                  {current.position}
                </span>
                <span className="about1-prow-video-name-underline"></span>
              </div>

              {videoEmbedUrl && (
                <div className="about1-prow-play-btn" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="about1-prow-play-icon">
                    <path d="M8 5v14l11-7z" fill="#0a0a0a" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- DOTS ---------- */}
      {banners.length > 1 && (
        <div className="about1-prow-dots">
          {banners.map((item, index) => (
            <button
              key={item.id || index}
              type="button"
              className={`about1-prow-dot${index === currentIndex ? " active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}