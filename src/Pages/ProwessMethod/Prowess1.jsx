// import { useRef, useState, useEffect } from "react";
// import "./Prowess1.css";

// export default function Prowess1() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // --- Animation Observer ---
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".prowhy1-eyebrow-row, .prowhy1-heading, .prowhy1-desc, .prowhy1-features, .prowhy1-video"
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

//   // --- Video Play ---
//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <section className="prowhy1-section" ref={sectionRef}>
//       {/* LEFT */}
//       <div className="prowhy1-left">
//         <div className="prowhy1-eyebrow-row">
//           <span className="prowhy1-eyebrow">The Prowess Method</span>
//           <span className="prowhy1-eyebrow-line"></span>
//         </div>

//         <h1 className="prowhy1-heading">
//           A Proven Method To
//           <br />
//           Develop <span>Real Performance.</span>
//         </h1>

//         <p className="prowhy1-desc">
//           At Prowess, we don&apos;t rely on theory alone.
//           <br />
//           We follow a real world method that turns knowledge into
//           performance, every single time.
//         </p>

//         <div className="prowhy1-features">
//           <div className="prowhy1-feature">
//             <div className="prowhy1-feature-icon">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//                 <circle cx="12" cy="12" r="9" />
//                 <circle cx="12" cy="12" r="5" />
//                 <circle cx="12" cy="12" r="1.3" fill="currentColor" />
//               </svg>
//             </div>
//             <div className="prowhy1-feature-text">
//               Built on
//               <br />
//               Practice
//             </div>
//           </div>

//           <span className="prowhy1-divider"></span>

//           <div className="prowhy1-feature">
//             <div className="prowhy1-feature-icon">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//                 <path d="M21 12c0 4.42-4.03 8-9 8-1.2 0-2.34-.2-3.38-.57L3 20l1.36-4.09A7.8 7.8 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z" />
//                 <circle cx="8.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//                 <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
//                 <circle cx="15.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//               </svg>
//             </div>
//             <div className="prowhy1-feature-text">
//               Driven by
//               <br />
//               Feedback
//             </div>
//           </div>

//           <span className="prowhy1-divider"></span>

//           <div className="prowhy1-feature">
//             <div className="prowhy1-feature-icon">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//                 <path d="M3 17l5-5 4 4 8-9" />
//                 <path d="M14 7h6v6" />
//               </svg>
//             </div>
//             <div className="prowhy1-feature-text">
//               Focused on
//               <br />
//               Improvement
//             </div>
//           </div>

//           <span className="prowhy1-divider"></span>

//           <div className="prowhy1-feature">
//             <div className="prowhy1-feature-icon">
//               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//                 <path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.6-6 3.6L7.5 13.6l-5-4.5 6.6-.6L12 2.5Z" />
//               </svg>
//             </div>
//             <div className="prowhy1-feature-text">
//               Applied in
//               <br />
//               Real Life
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT: VIDEO */}
//       <div className="prowhy1-right">
//         <div className="prowhy1-video">
//           {/* ⬇️ ORIGINAL VIDEO PREVIEW ⬇️ */}
//           <video
//             ref={videoRef}
//             src="/videos/backvideo.mp4"
//             className="prowhy1-video-bg"
//             preload="auto"
//             preload="metadata"
//             onPause={() => setIsPlaying(false)}
//             onEnded={() => setIsPlaying(false)}
//             controls={isPlaying}
//           />

//           {/* ⬇️ YE SIRF TAB DIKHEGA JAB VIDEO PLAY NA HO RAHI ⬇️ */}
//           {!isPlaying && (
//             <>
//               <div className="prowhy1-play-btn" onClick={handlePlay}>
//                 <svg viewBox="0 0 24 24" fill="#ffffff">
//                   <path d="M8 5v14l11-7L8 5Z" />
//                 </svg>
//               </div>

//               <div className="prowhy1-coach-info">
//                 <div className="prowhy1-coach-name">Gayatri Moghe</div>
//                 <div className="prowhy1-coach-role">Performance Coach</div>
//                 <div className="prowhy1-coach-line"></div>
//               </div>
//             </>
//           )}

//           {/* ❌ CUSTOM FAKE CONTROLS YAHAN SE HATA DIYA GAYA HAI ❌ */}
//         </div>
//       </div>
//     </section>
//   );
// }











// // Dyanamic Code
// import { useRef, useState, useEffect, Fragment } from "react";
// import "./Prowess1.css";

// /* ---------------------------------------------------------------
//    API ENDPOINT — Apni actual API URL yahan daalo
//    --------------------------------------------------------------- */
// const BANNER_API =
//   "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_method_banner";

// /* ---------------------------------------------------------------
//    STATIC ICONS — Hamesha same 4, kabhi change nahi honge
//    --------------------------------------------------------------- */
// const featureIcons = [
//   <svg key="i0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <circle cx="12" cy="12" r="9" />
//     <circle cx="12" cy="12" r="5" />
//     <circle cx="12" cy="12" r="1.3" fill="currentColor" />
//   </svg>,
//   <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M21 12c0 4.42-4.03 8-9 8-1.2 0-2.34-.2-3.38-.57L3 20l1.36-4.09A7.8 7.8 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z" />
//     <circle cx="8.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//     <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
//     <circle cx="15.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//   </svg>,
//   <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M3 17l5-5 4 4 8-9" />
//     <path d="M14 7h6v6" />
//   </svg>,
//   <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.6-6 3.6L7.5 13.6l-5-4.5 6.6-.6L12 2.5Z" />
//   </svg>,
// ];

// /* ---------------------------------------------------------------
//    DEFAULT BANNER — API load hone tak ya fail hone par dikhega
//    --------------------------------------------------------------- */
// const defaultBanner = {
//   sub_heading: "The Prowess Method",
//   main_heading: "A Proven Method To||Develop Real Performance.",
//   description:
//     "At Prowess, we don't rely on theory alone.\nWe follow a real world method that turns knowledge into performance, every single time.",
//   video_file_path: "/videos/backvideo.mp4",
//   image_path:
//     "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
//   heading:
//     "Built on,Practice,Driven by,Feedback,Focused on,Improvement,Applied in,Real Life",

//   full_name: "Gayatri Moghe",
//   position: "Performance Coach",
// };

// /* ---------------------------------------------------------------
//    Helper — heading field ko individual features mein convert karo
//    Admin ne 4 alag headings daali hain (comma-separated):
//      "Built on Practice,Driven by Feedback,Focused on Improvement,Applied in Real Life"
//    Har ek heading = 1 feature = 1 icon
//    Har heading ko 2nd space pe split karke two-line banate hain:
//      "Built on Practice" → "Built on" (upar) + "Practice" (niche)
//    --------------------------------------------------------------- */
// const parseFeatures = (raw) => {
//   if (!raw) return [];

//   let items = [];

//   if (Array.isArray(raw)) {
//     items = raw.map((v) => String(v).trim()).filter(Boolean);
//   } else if (typeof raw === "string") {
//     const trimmed = raw.trim();
//     if (!trimmed) return [];

//     /* JSON array try karo */
//     if (trimmed.startsWith("[")) {
//       try {
//         const parsed = JSON.parse(trimmed);
//         if (Array.isArray(parsed)) {
//           items = parsed.map((v) => String(v).trim()).filter(Boolean);
//         }
//       } catch (e) {
//         /* fall through */
//       }
//     }

//     /* Comma-separated try karo */
//     if (items.length === 0 && trimmed.includes(",")) {
//       items = trimmed
//         .split(",")
//         .map((v) => v.trim())
//         .filter(Boolean);
//     }

//     /* Single value */
//     if (items.length === 0) {
//       items = [trimmed];
//     }
//   }

//   /* Har item ek full heading hai — 2nd space pe split for two-line display */
//   return items.map((item) => {
//     const words = item.split(" ");
//     if (words.length >= 3) {
//       /* 3+ words → first 2 upar, baaki niche */
//       return {
//         line1: words.slice(0, 2).join(" "),
//         line2: words.slice(2).join(" "),
//       };
//     } else if (words.length === 2) {
//       /* 2 words → ek upar, ek niche */
//       return {
//         line1: words[0],
//         line2: words[1],
//       };
//     } else {
//       /* 1 word → sirf upar */
//       return {
//         line1: item,
//         line2: "",
//       };
//     }
//   });
// };


// /* ---------------------------------------------------------------
//    Normalize — ek raw API record ko banner shape mein convert karo
//    --------------------------------------------------------------- */
// const normalizeBanner = (raw) => ({
//   sub_heading: (raw && raw.sub_heading) || defaultBanner.sub_heading,
//   main_heading: (raw && raw.main_heading) || defaultBanner.main_heading,
//   description: (raw && raw.description) || defaultBanner.description,
//   video_file_path:
//     (raw && raw.video_file_path) || defaultBanner.video_file_path,
//   image_path: (raw && raw.image_path) || defaultBanner.image_path,
//   heading: (raw && raw.heading) || defaultBanner.heading,

//   full_name: raw?.full_name || defaultBanner.full_name,
//   position: raw?.position || defaultBanner.position,
// });

// const AUTO_SCROLL_DELAY = 6000;

// /* ===============================================================
//    COMPONENT
//    =============================================================== */
// export default function Prowess1() {
//   const [banners, setBanners] = useState([defaultBanner]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const autoScrollRef = useRef(null);

//   const bannerData = banners[activeIndex] || defaultBanner;
//   const featureList = parseFeatures(bannerData.heading);
//   const hasMultiple = banners.length > 1;

//   /* main_heading ko "||" pe split — pehla part white, doosra yellow */
//   const headingParts = (bannerData.main_heading || "").split("||");

//   /* Description mein \n ya <br> ko line break mein badlo */
//   const descriptionLines = (bannerData.description || "")
//     .replace(/<br\s*\/?>/gi, "\n")
//     .split("\n");

//   /* --------------- IntersectionObserver animations --------------- */
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".prowhy1-eyebrow-row, .prowhy1-heading, .prowhy1-desc, .prowhy1-features, .prowhy1-video"
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
//   }, [activeIndex]);

//   /* --------------- Fetch banner list from API --------------- */
//   useEffect(() => {
//     let isMounted = true;

//     const fetchBanner = async () => {
//       try {
//         const res = await fetch(BANNER_API);
//         const json = await res.json();
//         if (!isMounted) return;

//         const raw = json && json.data;
//         const list = Array.isArray(raw) ? raw : raw ? [raw] : [];

//         if (list.length > 0) {
//           /*
//            * API order preserve karo — first record = oldest ID = pehle dikhao
//            * Agar API newest-first return karta hai to .reverse() laga lo:
//            *   const normalized = list.map(normalizeBanner).reverse();
//            */
//           const normalized = list.map(normalizeBanner);
//           setBanners(normalized);
//           setActiveIndex(0);
//         }
//       } catch (err) {
//         /* API fail — default static content rahega, UI intact */
//         console.error("Failed to load prowess method banner:", err);
//       }
//     };

//     fetchBanner();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   /* --------------- Auto-scroll (sirf >1 banner par) --------------- */
//   useEffect(() => {
//     if (!hasMultiple) return undefined;

//     autoScrollRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banners.length);
//     }, AUTO_SCROLL_DELAY);

//     return () => {
//       if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     };
//   }, [hasMultiple, banners.length]);

//   /* Banner change hone par video reset */
//   useEffect(() => {
//     setIsPlaying(false);
//     if (videoRef.current) {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, [activeIndex]);

//   /* Manual dot click ke baad auto-scroll restart */
//   const restartAutoScroll = () => {
//     if (!hasMultiple) return;
//     if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     autoScrollRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banners.length);
//     }, AUTO_SCROLL_DELAY);
//   };

//   const goToSlide = (idx) => {
//     setActiveIndex(idx);
//     restartAutoScroll();
//   };

//   /* --------------- Video play --------------- */
//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <section
//       className="prowhy1-section"
//       ref={sectionRef}
//       style={{ "--prowhy1-bg-image": `url(${bannerData.image_path})` }}
//     >
//       {/* ===== LEFT ===== */}
//       <div className="prowhy1-left">
//         <div className="prowhy1-eyebrow-row">
//           <span className="prowhy1-eyebrow">{bannerData.sub_heading}</span>
//           <span className="prowhy1-eyebrow-line"></span>
//         </div>

//         <h1 className="prowhy1-heading">
//           {headingParts[0]}
//           {headingParts[1] && (
//             <>
//               <br />
//               <span>{headingParts[1]}</span>
//             </>
//           )}
//         </h1>

//         <p className="prowhy1-desc">
//           {descriptionLines.map((line, i) => (
//             <Fragment key={i}>
//               {i > 0 && <br />}
//               {line}
//             </Fragment>
//           ))}
//         </p>

//         <div className="prowhy1-features">
//   {featureList.map((feature, index) => (
//     <Fragment key={index}>
//       {index > 0 && <span className="prowhy1-divider"></span>}
//       <div className="prowhy1-feature">
//         <div className="prowhy1-feature-icon">
//           {featureIcons[index % featureIcons.length]}
//         </div>
//         <div className="prowhy1-feature-text">
//           {feature.line1}
//           {feature.line2 && <br />}
//           {feature.line2}
//         </div>
//       </div>
//     </Fragment>
//   ))}
// </div>
//       </div>

//       {/* ===== RIGHT: VIDEO ===== */}
//       <div className="prowhy1-right">
//         <div className="prowhy1-video">
//           <video
//             ref={videoRef}
//             src={bannerData.video_file_path}
//             className="prowhy1-video-bg"
//             // preload="auto"
//             preload="metadata"
//             onPause={() => setIsPlaying(false)}
//             onEnded={() => setIsPlaying(false)}
//             controls={isPlaying}
//           />

//           {!isPlaying && (
//             <>
//               <div className="prowhy1-play-btn" onClick={handlePlay}>
//                 <svg viewBox="0 0 24 24" fill="#000">
//                   <path d="M8 5v14l11-7L8 5Z" />
//                 </svg>
//               </div>

//               <div className="prowhy1-coach-info">
//                 {/* <div className="prowhy1-coach-name">Gayatri Moghe</div> */}
//                 {/* <div className="prowhy1-coach-role">Performance Coach</div> */}
//                 <div className="prowhy1-coach-name">
//                 {bannerData.full_name}
//                 </div>

//                 <div className="prowhy1-coach-role">
//                 {bannerData.position}
//                 </div>
//                 <div className="prowhy1-coach-line"></div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ----- Dots — bottom center, sirf multiple banners par ----- */}
//       {hasMultiple && (
//         <div
//           className="prowhy1-dots"
//           role="tablist"
//           aria-label="Banner navigation"
//         >
//           {banners.map((_, idx) => (
//             <button
//               key={idx}
//               type="button"
//               role="tab"
//               aria-selected={idx === activeIndex}
//               aria-label={`Go to banner ${idx + 1}`}
//               className={
//                 "prowhy1-dot" +
//                 (idx === activeIndex ? " prowhy1-dot-active" : "")
//               }
//               onClick={() => goToSlide(idx)}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }














// import { useRef, useState, useEffect, Fragment } from "react";
// import "./Prowess1.css";

// /* ---------------------------------------------------------------
//    API ENDPOINT
//    --------------------------------------------------------------- */
// const BANNER_API =
//   "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_method_banner";

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
//    STATIC ICONS
//    --------------------------------------------------------------- */
// const featureIcons = [
//   <svg key="i0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <circle cx="12" cy="12" r="9" />
//     <circle cx="12" cy="12" r="5" />
//     <circle cx="12" cy="12" r="1.3" fill="currentColor" />
//   </svg>,
//   <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M21 12c0 4.42-4.03 8-9 8-1.2 0-2.34-.2-3.38-.57L3 20l1.36-4.09A7.8 7.8 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z" />
//     <circle cx="8.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//     <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
//     <circle cx="15.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//   </svg>,
//   <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M3 17l5-5 4 4 8-9" />
//     <path d="M14 7h6v6" />
//   </svg>,
//   <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.6-6 3.6L7.5 13.6l-5-4.5 6.6-.6L12 2.5Z" />
//   </svg>,
// ];

// /* ---------------------------------------------------------------
//    DEFAULT BANNER
//    --------------------------------------------------------------- */
// const defaultBanner = {
//   sub_heading: "The Prowess Method",
//   main_heading: "A Proven Method To||Develop Real Performance.",
//   description:
//     "At Prowess, we don't rely on theory alone.\nWe follow a real world method that turns knowledge into performance, every single time.",
//   video_link: "https://www.youtube.com/watch?v=D0UnqGm_miA",
//   image_path:
//     "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
//   heading:
//     "Built on,Practice,Driven by,Feedback,Focused on,Improvement,Applied in,Real Life",
//   full_name: "Gayatri Moghe",
//   position: "Performance Coach",
// };

// /* ---------------------------------------------------------------
//    Helper — heading field ko individual features mein convert karo
//    --------------------------------------------------------------- */
// const parseFeatures = (raw) => {
//   if (!raw) return [];

//   let items = [];

//   if (Array.isArray(raw)) {
//     items = raw.map((v) => String(v).trim()).filter(Boolean);
//   } else if (typeof raw === "string") {
//     const trimmed = raw.trim();
//     if (!trimmed) return [];

//     if (trimmed.startsWith("[")) {
//       try {
//         const parsed = JSON.parse(trimmed);
//         if (Array.isArray(parsed)) {
//           items = parsed.map((v) => String(v).trim()).filter(Boolean);
//         }
//       } catch (e) {
//         /* fall through */
//       }
//     }

//     if (items.length === 0 && trimmed.includes(",")) {
//       items = trimmed
//         .split(",")
//         .map((v) => v.trim())
//         .filter(Boolean);
//     }

//     if (items.length === 0) {
//       items = [trimmed];
//     }
//   }

//   return items.map((item) => {
//     const words = item.split(" ");
//     if (words.length >= 3) {
//       return {
//         line1: words.slice(0, 2).join(" "),
//         line2: words.slice(2).join(" "),
//       };
//     } else if (words.length === 2) {
//       return {
//         line1: words[0],
//         line2: words[1],
//       };
//     } else {
//       return {
//         line1: item,
//         line2: "",
//       };
//     }
//   });
// };

// /* ---------------------------------------------------------------
//    Normalize
//    --------------------------------------------------------------- */
// const normalizeBanner = (raw) => ({
//   sub_heading: (raw && raw.sub_heading) || defaultBanner.sub_heading,
//   main_heading: (raw && raw.main_heading) || defaultBanner.main_heading,
//   description: (raw && raw.description) || defaultBanner.description,
//   video_link: (raw && raw.video_link) || defaultBanner.video_link,
//   image_path: (raw && raw.image_path) || defaultBanner.image_path,
//   heading: (raw && raw.heading) || defaultBanner.heading,
//   full_name: raw?.full_name || defaultBanner.full_name,
//   position: raw?.position || defaultBanner.position,
// });

// const AUTO_SCROLL_DELAY = 6000;

// /* ===============================================================
//    COMPONENT
//    =============================================================== */
// export default function Prowess1() {
//   const [banners, setBanners] = useState([defaultBanner]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const sectionRef = useRef(null);
//   const autoScrollRef = useRef(null);

//   const bannerData = banners[activeIndex] || defaultBanner;
//   const featureList = parseFeatures(bannerData.heading);
//   const hasMultiple = banners.length > 1;

//   /* main_heading ko "||" pe split */
//   const headingParts = (bannerData.main_heading || "").split("||");

//   /* Description line breaks */
//   const descriptionLines = (bannerData.description || "")
//     .replace(/<br\s*\/?>/gi, "\n")
//     .split("\n");

//   /* Video link platform detection for current slide */
//   const videoPlatform = detectPlatform(bannerData.video_link);
//   const videoThumbnail =
//     videoPlatform === "youtube" ? getYoutubeThumbnail(bannerData.video_link) : null;
//   const videoEmbedUrl = getEmbedUrl(bannerData.video_link, videoPlatform, true);
//   const showEmbed = isPlaying && videoEmbedUrl;

//   /* --------------- IntersectionObserver animations --------------- */
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".prowhy1-eyebrow-row, .prowhy1-heading, .prowhy1-desc, .prowhy1-features, .prowhy1-video"
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
//   }, [activeIndex]);

//   /* --------------- Fetch banner list from API --------------- */
//   useEffect(() => {
//     let isMounted = true;

//     const fetchBanner = async () => {
//       try {
//         const res = await fetch(BANNER_API);
//         const json = await res.json();
//         if (!isMounted) return;

//         const raw = json && json.data;
//         const list = Array.isArray(raw) ? raw : raw ? [raw] : [];

//         if (list.length > 0) {
//           const normalized = list.map(normalizeBanner);
//           setBanners(normalized);
//           setActiveIndex(0);
//         }
//       } catch (err) {
//         console.error("Failed to load prowess method banner:", err);
//       }
//     };

//     fetchBanner();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   /* --------------- Auto-scroll --------------- */
//   useEffect(() => {
//     if (!hasMultiple) return undefined;

//     autoScrollRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banners.length);
//     }, AUTO_SCROLL_DELAY);

//     return () => {
//       if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     };
//   }, [hasMultiple, banners.length]);

//   /* Banner change hone par video reset */
//   useEffect(() => {
//     setIsPlaying(false);
//   }, [activeIndex]);

//   const restartAutoScroll = () => {
//     if (!hasMultiple) return;
//     if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     autoScrollRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banners.length);
//     }, AUTO_SCROLL_DELAY);
//   };

//   const goToSlide = (idx) => {
//     setActiveIndex(idx);
//     restartAutoScroll();
//   };

//   /* --------------- Video play (inline embed) --------------- */
//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   return (
//     <section
//       className="prowhy1-section"
//       ref={sectionRef}
//       style={{ "--prowhy1-bg-image": `url(${bannerData.image_path})` }}
//     >
//       {/* ===== LEFT ===== */}
//       <div className="prowhy1-left">
//         <div className="prowhy1-eyebrow-row">
//           <span className="prowhy1-eyebrow">{bannerData.sub_heading}</span>
//           <span className="prowhy1-eyebrow-line"></span>
//         </div>

//         <h1 className="prowhy1-heading">
//           {headingParts[0]}
//           {headingParts[1] && (
//             <>
//               <br />
//               <span>{headingParts[1]}</span>
//             </>
//           )}
//         </h1>

//         <p className="prowhy1-desc">
//           {descriptionLines.map((line, i) => (
//             <Fragment key={i}>
//               {i > 0 && <br />}
//               {line}
//             </Fragment>
//           ))}
//         </p>

//         <div className="prowhy1-features">
//           {featureList.map((feature, index) => (
//             <Fragment key={index}>
//               {index > 0 && <span className="prowhy1-divider"></span>}
//               <div className="prowhy1-feature">
//                 <div className="prowhy1-feature-icon">
//                   {featureIcons[index % featureIcons.length]}
//                 </div>
//                 <div className="prowhy1-feature-text">
//                   {feature.line1}
//                   {feature.line2 && <br />}
//                   {feature.line2}
//                 </div>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//       </div>

//       {/* ===== RIGHT: VIDEO (embed via video_link) ===== */}
//       <div className="prowhy1-right">
//         <div className="prowhy1-video">
//           {showEmbed ? (
//             <iframe
//               className="prowhy1-video-iframe"
//               src={videoEmbedUrl}
//               title="Banner Video"
//               frameBorder="0"
//               allow="autoplay; encrypted-media; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           ) : (
//             <>
//               {videoPlatform === "youtube" && videoThumbnail ? (
//                 <img
//                   src={videoThumbnail}
//                   alt="Video Thumbnail"
//                   className="prowhy1-video-thumb"
//                 />
//               ) : (
//                 <div className="prowhy1-video-thumb prowhy1-video-thumb--fallback" />
//               )}

//               <div className="prowhy1-play-btn" onClick={handlePlay}>
//                 <svg viewBox="0 0 24 24" fill="#000">
//                   <path d="M8 5v14l11-7L8 5Z" />
//                 </svg>
//               </div>

//               <div className="prowhy1-coach-info">
//                 <div className="prowhy1-coach-name">{bannerData.full_name}</div>
//                 <div className="prowhy1-coach-role">{bannerData.position}</div>
//                 <div className="prowhy1-coach-line"></div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* ----- Dots ----- */}
//       {hasMultiple && (
//         <div
//           className="prowhy1-dots"
//           role="tablist"
//           aria-label="Banner navigation"
//         >
//           {banners.map((_, idx) => (
//             <button
//               key={idx}
//               type="button"
//               role="tab"
//               aria-selected={idx === activeIndex}
//               aria-label={`Go to banner ${idx + 1}`}
//               className={
//                 "prowhy1-dot" +
//                 (idx === activeIndex ? " prowhy1-dot-active" : "")
//               }
//               onClick={() => goToSlide(idx)}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }














// // Video Thumbnail Add akene ke phele wala code
// import { useRef, useState, useEffect, useCallback, Fragment } from "react";
// import "./Prowess1.css";

// /* ---------------------------------------------------------------
//    API ENDPOINT
//    --------------------------------------------------------------- */
// const BANNER_API =
//   "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_method_banner";

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
//    STATIC ICONS
//    --------------------------------------------------------------- */
// const featureIcons = [
//   <svg key="i0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <circle cx="12" cy="12" r="9" />
//     <circle cx="12" cy="12" r="5" />
//     <circle cx="12" cy="12" r="1.3" fill="currentColor" />
//   </svg>,
//   <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M21 12c0 4.42-4.03 8-9 8-1.2 0-2.34-.2-3.38-.57L3 20l1.36-4.09A7.8 7.8 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z" />
//     <circle cx="8.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//     <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
//     <circle cx="15.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
//   </svg>,
//   <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M3 17l5-5 4 4 8-9" />
//     <path d="M14 7h6v6" />
//   </svg>,
//   <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
//     <path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.6-6 3.6L7.5 13.6l-5-4.5 6.6-.6L12 2.5Z" />
//   </svg>,
// ];

// /* ---------------------------------------------------------------
//    DEFAULT BANNER
//    --------------------------------------------------------------- */
// const defaultBanner = {
//   sub_heading: "The Prowess Method",
//   main_heading: "A Proven Method To||Develop Real Performance.",
//   description:
//     "At Prowess, we don't rely on theory alone.\nWe follow a real world method that turns knowledge into performance, every single time.",
//   video_link: "https://www.youtube.com/watch?v=D0UnqGm_miA",
//   image_path:
//     "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
//   heading:
//     "Built on,Practice,Driven by,Feedback,Focused on,Improvement,Applied in,Real Life",
//   full_name: "Gayatri Moghe",
//   position: "Performance Coach",
// };

// /* ---------------------------------------------------------------
//    Helper — heading field ko individual features mein convert karo
//    --------------------------------------------------------------- */
// const parseFeatures = (raw) => {
//   if (!raw) return [];

//   let items = [];

//   if (Array.isArray(raw)) {
//     items = raw.map((v) => String(v).trim()).filter(Boolean);
//   } else if (typeof raw === "string") {
//     const trimmed = raw.trim();
//     if (!trimmed) return [];

//     if (trimmed.startsWith("[")) {
//       try {
//         const parsed = JSON.parse(trimmed);
//         if (Array.isArray(parsed)) {
//           items = parsed.map((v) => String(v).trim()).filter(Boolean);
//         }
//       } catch (e) {
//         /* fall through */
//       }
//     }

//     if (items.length === 0 && trimmed.includes(",")) {
//       items = trimmed
//         .split(",")
//         .map((v) => v.trim())
//         .filter(Boolean);
//     }

//     if (items.length === 0) {
//       items = [trimmed];
//     }
//   }

//   return items.map((item) => {
//     const words = item.split(" ");
//     if (words.length >= 3) {
//       return {
//         line1: words.slice(0, 2).join(" "),
//         line2: words.slice(2).join(" "),
//       };
//     } else if (words.length === 2) {
//       return {
//         line1: words[0],
//         line2: words[1],
//       };
//     } else {
//       return {
//         line1: item,
//         line2: "",
//       };
//     }
//   });
// };

// /* ---------------------------------------------------------------
//    Normalize
//    --------------------------------------------------------------- */
// const normalizeBanner = (raw) => ({
//   sub_heading: (raw && raw.sub_heading) || defaultBanner.sub_heading,
//   main_heading: (raw && raw.main_heading) || defaultBanner.main_heading,
//   description: (raw && raw.description) || defaultBanner.description,
//   video_link: (raw && raw.video_link) || defaultBanner.video_link,
//   image_path: (raw && raw.image_path) || defaultBanner.image_path,
//   heading: (raw && raw.heading) || defaultBanner.heading,
//   full_name: raw?.full_name || defaultBanner.full_name,
//   position: raw?.position || defaultBanner.position,
// });

// const AUTO_SCROLL_DELAY = 6000;

// /* ===============================================================
//    COMPONENT
//    =============================================================== */
// export default function Prowess1() {
//   const [banners, setBanners] = useState([defaultBanner]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const [isPlaying, setIsPlaying] = useState(false); // hover-triggered video play

//   // Reveal animation state — poora React state se control hota hai,
//   // DOM classList.add() nahi use karte, isliye hover se hone waale
//   // re-render se ye kabhi overwrite/wipe nahi hoga (scroll-pe-hi-wapas-aana wala bug fix).
//   const [revealed, setRevealed] = useState(false);
//   const [hoverReady, setHoverReady] = useState(false);

//   const sectionRef = useRef(null);
//   const autoScrollRef = useRef(null);
//   const hoverEnterTimeout = useRef(null);
//   const hoverLeaveTimeout = useRef(null);
//   const hoverReadyTimeout = useRef(null);

//   const bannerData = banners[activeIndex] || defaultBanner;
//   const featureList = parseFeatures(bannerData.heading);
//   const hasMultiple = banners.length > 1;

//   /* main_heading ko "||" pe split */
//   const headingParts = (bannerData.main_heading || "").split("||");

//   /* Description line breaks */
//   const descriptionLines = (bannerData.description || "")
//     .replace(/<br\s*\/?>/gi, "\n")
//     .split("\n");

//   /* Video link platform detection for current slide */
//   const videoPlatform = detectPlatform(bannerData.video_link);
//   const videoThumbnail =
//     videoPlatform === "youtube" ? getYoutubeThumbnail(bannerData.video_link) : null;
//   const videoEmbedUrl = getEmbedUrl(bannerData.video_link, videoPlatform, true);
//   const showEmbed = isPlaying && videoEmbedUrl;

//   /* --------------- IntersectionObserver animations (React-state driven) --------------- */
//   useEffect(() => {
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
//   }, []);

//   /* --------------- Fetch banner list from API --------------- */
//   useEffect(() => {
//     let isMounted = true;

//     const fetchBanner = async () => {
//       try {
//         const res = await fetch(BANNER_API);
//         const json = await res.json();
//         if (!isMounted) return;

//         const raw = json && json.data;
//         const list = Array.isArray(raw) ? raw : raw ? [raw] : [];

//         if (list.length > 0) {
//           const normalized = list.map(normalizeBanner);
//           setBanners(normalized);
//           setActiveIndex(0);
//         }
//       } catch (err) {
//         console.error("Failed to load prowess method banner:", err);
//       }
//     };

//     fetchBanner();
//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   /* --------------- Auto-scroll --------------- */
//   const startAutoScroll = useCallback(() => {
//     if (banners.length <= 1) return;
//     if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     autoScrollRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banners.length);
//     }, AUTO_SCROLL_DELAY);
//   }, [banners.length]);

//   const stopAutoScroll = () => {
//     if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//   };

//   useEffect(() => {
//     startAutoScroll();
//     return () => {
//       if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//     };
//   }, [startAutoScroll]);

//   /* Banner change hone par video + hover timers reset */
//   useEffect(() => {
//     setIsPlaying(false);
//     clearTimeout(hoverEnterTimeout.current);
//     clearTimeout(hoverLeaveTimeout.current);
//   }, [activeIndex]);

//   /* Cleanup on unmount */
//   useEffect(() => {
//     return () => {
//       clearTimeout(hoverEnterTimeout.current);
//       clearTimeout(hoverLeaveTimeout.current);
//       clearTimeout(hoverReadyTimeout.current);
//     };
//   }, []);

//   const goToSlide = (idx) => {
//     setActiveIndex(idx);
//     startAutoScroll();
//   };

//   /* --------------- Hover-to-play handlers (debounced) --------------- */
//   const handleVideoMouseEnter = () => {
//     if (!videoEmbedUrl) return;
//     clearTimeout(hoverLeaveTimeout.current);
//     hoverEnterTimeout.current = setTimeout(() => {
//       setIsPlaying(true);
//       stopAutoScroll(); // slide na badle jab tak user video dekh raha hai
//     }, 120);
//   };

//   const handleVideoMouseLeave = () => {
//     clearTimeout(hoverEnterTimeout.current);
//     hoverLeaveTimeout.current = setTimeout(() => {
//       setIsPlaying(false);
//       startAutoScroll(); // wapas auto-scroll chalu, jaise pehle tha
//     }, 100);
//   };

//   const revealClass = (base) =>
//     `${base}${revealed ? " revealed" : ""}${hoverReady ? " hover-ready" : ""}`;

//   const videoClass = `${revealClass("prowhy1-video")}${isPlaying ? " is-playing" : ""}`;

//   return (
//     <section
//       className="prowhy1-section"
//       ref={sectionRef}
//       style={{ "--prowhy1-bg-image": `url(${bannerData.image_path})` }}
//     >
//       {/* ===== LEFT ===== */}
//       <div className="prowhy1-left">
//         <div className={revealClass("prowhy1-eyebrow-row")}>
//           <span className="prowhy1-eyebrow">{bannerData.sub_heading}</span>
//           <span className="prowhy1-eyebrow-line"></span>
//         </div>

//         <h1 className={revealClass("prowhy1-heading")}>
//           {headingParts[0]}
//           {headingParts[1] && (
//             <>
//               <br />
//               <span>{headingParts[1]}</span>
//             </>
//           )}
//         </h1>

//         <p className={revealClass("prowhy1-desc")}>
//           {descriptionLines.map((line, i) => (
//             <Fragment key={i}>
//               {i > 0 && <br />}
//               {line}
//             </Fragment>
//           ))}
//         </p>

//         <div className={revealClass("prowhy1-features")}>
//           {featureList.map((feature, index) => (
//             <Fragment key={index}>
//               {index > 0 && <span className="prowhy1-divider"></span>}
//               <div className="prowhy1-feature">
//                 <div className="prowhy1-feature-icon">
//                   {featureIcons[index % featureIcons.length]}
//                 </div>
//                 <div className="prowhy1-feature-text">
//                   {feature.line1}
//                   {feature.line2 && <br />}
//                   {feature.line2}
//                 </div>
//               </div>
//             </Fragment>
//           ))}
//         </div>
//       </div>

//       {/* ===== RIGHT: VIDEO (hover to play) ===== */}
//       <div className="prowhy1-right">
//         <div
//           className={videoClass}
//           onMouseEnter={handleVideoMouseEnter}
//           onMouseLeave={handleVideoMouseLeave}
//         >
//           {/* Thumbnail: hamesha DOM me rehta hai, sirf CSS opacity se crossfade hota hai */}
//           {videoPlatform === "youtube" && videoThumbnail ? (
//             <img
//               src={videoThumbnail}
//               alt="Video Thumbnail"
//               className="prowhy1-video-thumb"
//             />
//           ) : (
//             <div className="prowhy1-video-thumb prowhy1-video-thumb--fallback" />
//           )}

//           {/* Iframe: hover par mount hota hai, CSS delayed-transition se smoothly fade-in */}
//           {showEmbed && (
//             <iframe
//               className="prowhy1-video-iframe"
//               src={videoEmbedUrl}
//               title="Banner Video"
//               frameBorder="0"
//               allow="autoplay; encrypted-media; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           )}

//           {/* Sirf visual indicator — click se kuch nahi hota, hover pe khud gayab ho jaata hai */}
//           {videoEmbedUrl && (
//             <div className="prowhy1-play-btn" aria-hidden="true">
//               <svg viewBox="0 0 24 24" fill="#000">
//                 <path d="M8 5v14l11-7L8 5Z" />
//               </svg>
//             </div>
//           )}

//           <div className="prowhy1-coach-info">
//             <div className="prowhy1-coach-name">{bannerData.full_name}</div>
//             <div className="prowhy1-coach-role">{bannerData.position}</div>
//             <div className="prowhy1-coach-line"></div>
//           </div>
//         </div>
//       </div>

//       {/* ----- Dots ----- */}
//       {hasMultiple && (
//         <div
//           className="prowhy1-dots"
//           role="tablist"
//           aria-label="Banner navigation"
//         >
//           {banners.map((_, idx) => (
//             <button
//               key={idx}
//               type="button"
//               role="tab"
//               aria-selected={idx === activeIndex}
//               aria-label={`Go to banner ${idx + 1}`}
//               className={
//                 "prowhy1-dot" +
//                 (idx === activeIndex ? " prowhy1-dot-active" : "")
//               }
//               onClick={() => goToSlide(idx)}
//             />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }














import { useRef, useState, useEffect, useCallback, Fragment } from "react";
import "./Prowess1.css";

/* ---------------------------------------------------------------
   API ENDPOINT
   --------------------------------------------------------------- */
const BANNER_API =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_method_banner";
const IMAGE_BASE_URL = "https://workfit.co.in/provess/Prowess/";

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
   STATIC ICONS
   --------------------------------------------------------------- */
const featureIcons = [
  <svg key="i0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.3" fill="currentColor" />
  </svg>,
  <svg key="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M21 12c0 4.42-4.03 8-9 8-1.2 0-2.34-.2-3.38-.57L3 20l1.36-4.09A7.8 7.8 0 0 1 3 12c0-4.42 4.03-8 9-8s9 3.58 9 8Z" />
    <circle cx="8.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="12" r="0.9" fill="currentColor" stroke="none" />
  </svg>,
  <svg key="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 17l5-5 4 4 8-9" />
    <path d="M14 7h6v6" />
  </svg>,
  <svg key="i3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.6-6 3.6L7.5 13.6l-5-4.5 6.6-.6L12 2.5Z" />
  </svg>,
];

/* ---------------------------------------------------------------
   DEFAULT BANNER
   --------------------------------------------------------------- */
const defaultBanner = {
  sub_heading: "The Prowess Method",
  main_heading: "A Proven Method To||Develop Real Performance.",
  description:
    "At Prowess, we don't rely on theory alone.\nWe follow a real world method that turns knowledge into performance, every single time.",
  video_link: "https://www.youtube.com/watch?v=D0UnqGm_miA",
  image_path:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  heading:
    "Built on,Practice,Driven by,Feedback,Focused on,Improvement,Applied in,Real Life",
  full_name: "Gayatri Moghe",
  position: "Performance Coach",
  img_tumbnail: "",
};

/* ---------------------------------------------------------------
   Helper — heading field ko individual features mein convert karo
   --------------------------------------------------------------- */
const parseFeatures = (raw) => {
  if (!raw) return [];

  let items = [];

  if (Array.isArray(raw)) {
    items = raw.map((v) => String(v).trim()).filter(Boolean);
  } else if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return [];

    if (trimmed.startsWith("[")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          items = parsed.map((v) => String(v).trim()).filter(Boolean);
        }
      } catch (e) {
        /* fall through */
      }
    }

    if (items.length === 0 && trimmed.includes(",")) {
      items = trimmed
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
    }

    if (items.length === 0) {
      items = [trimmed];
    }
  }

  return items.map((item) => {
    const words = item.split(" ");
    if (words.length >= 3) {
      return {
        line1: words.slice(0, 2).join(" "),
        line2: words.slice(2).join(" "),
      };
    } else if (words.length === 2) {
      return {
        line1: words[0],
        line2: words[1],
      };
    } else {
      return {
        line1: item,
        line2: "",
      };
    }
  });
};

/* ---------------------------------------------------------------
   Normalize
   --------------------------------------------------------------- */
const normalizeBanner = (raw) => ({
  sub_heading: (raw && raw.sub_heading) || defaultBanner.sub_heading,
  main_heading: (raw && raw.main_heading) || defaultBanner.main_heading,
  description: (raw && raw.description) || defaultBanner.description,
  video_link: (raw && raw.video_link) || defaultBanner.video_link,
  image_path: (raw && raw.image_path) || defaultBanner.image_path,
  heading: (raw && raw.heading) || defaultBanner.heading,
  full_name: raw?.full_name || defaultBanner.full_name,
  position: raw?.position || defaultBanner.position,
  img_tumbnail: raw?.img_tumbnail || "",
});

const AUTO_SCROLL_DELAY = 6000;

/* ===============================================================
   COMPONENT
   =============================================================== */
export default function Prowess1() {
  const [banners, setBanners] = useState([defaultBanner]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [revealed, setRevealed] = useState(false);
  const [hoverReady, setHoverReady] = useState(false);

  const sectionRef = useRef(null);
  const autoScrollRef = useRef(null);
  const hoverEnterTimeout = useRef(null);
  const hoverLeaveTimeout = useRef(null);
  const hoverReadyTimeout = useRef(null);

  const bannerData = banners[activeIndex] || defaultBanner;
  const featureList = parseFeatures(bannerData.heading);
  const hasMultiple = banners.length > 1;

  /* main_heading ko "||" pe split */
  const headingParts = (bannerData.main_heading || "").split("||");

  /* Description line breaks */
  const descriptionLines = (bannerData.description || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .split("\n");

  /* Video link platform detection for current slide */
  const videoPlatform = detectPlatform(bannerData.video_link);

  /* ✅ CHANGE 3: img_tumbnail se thumbnail */
  const videoThumbnail = bannerData.img_tumbnail
    ? IMAGE_BASE_URL + bannerData.img_tumbnail
    : null;

  const videoEmbedUrl = getEmbedUrl(bannerData.video_link, videoPlatform, true);
  const showEmbed = isPlaying && videoEmbedUrl;

  /* --------------- IntersectionObserver animations --------------- */
  useEffect(() => {
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
  }, []);

  /* --------------- Fetch banner list from API --------------- */
  useEffect(() => {
    let isMounted = true;

    const fetchBanner = async () => {
      try {
        const res = await fetch(BANNER_API);
        const json = await res.json();
        if (!isMounted) return;

        const raw = json && json.data;
        const list = Array.isArray(raw) ? raw : raw ? [raw] : [];

        if (list.length > 0) {
          const normalized = list.map(normalizeBanner);
          setBanners(normalized);
          setActiveIndex(0);
        }
      } catch (err) {
        console.error("Failed to load prowess method banner:", err);
      }
    };

    fetchBanner();
    return () => {
      isMounted = false;
    };
  }, []);

  /* --------------- Auto-scroll --------------- */
  const startAutoScroll = useCallback(() => {
    if (banners.length <= 1) return;
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_SCROLL_DELAY);
  }, [banners.length]);

  const stopAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [startAutoScroll]);

  /* Banner change hone par video + hover timers reset */
  useEffect(() => {
    setIsPlaying(false);
    clearTimeout(hoverEnterTimeout.current);
    clearTimeout(hoverLeaveTimeout.current);
  }, [activeIndex]);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => {
      clearTimeout(hoverEnterTimeout.current);
      clearTimeout(hoverLeaveTimeout.current);
      clearTimeout(hoverReadyTimeout.current);
    };
  }, []);

  const goToSlide = (idx) => {
    setActiveIndex(idx);
    startAutoScroll();
  };

  /* --------------- Hover-to-play handlers --------------- */
  const handleVideoMouseEnter = () => {
    if (!videoEmbedUrl) return;
    clearTimeout(hoverLeaveTimeout.current);
    hoverEnterTimeout.current = setTimeout(() => {
      setIsPlaying(true);
      stopAutoScroll();
    }, 120);
  };

  const handleVideoMouseLeave = () => {
    clearTimeout(hoverEnterTimeout.current);
    hoverLeaveTimeout.current = setTimeout(() => {
      setIsPlaying(false);
      startAutoScroll();
    }, 100);
  };

  const revealClass = (base) =>
    `${base}${revealed ? " revealed" : ""}${hoverReady ? " hover-ready" : ""}`;

  const videoClass = `${revealClass("prowhy1-video")}${isPlaying ? " is-playing" : ""}`;

  return (
    <section
      className="prowhy1-section"
      ref={sectionRef}
      style={{ "--prowhy1-bg-image": `url(${bannerData.image_path})` }}
    >
      {/* ===== LEFT ===== */}
      <div className="prowhy1-left">
        <div className={revealClass("prowhy1-eyebrow-row")}>
          <span className="prowhy1-eyebrow">{bannerData.sub_heading}</span>
          <span className="prowhy1-eyebrow-line"></span>
        </div>

        <h1 className={revealClass("prowhy1-heading")}>
          {headingParts[0]}
          {headingParts[1] && (
            <>
              <br />
              <span>{headingParts[1]}</span>
            </>
          )}
        </h1>

        <p className={revealClass("prowhy1-desc")}>
          {descriptionLines.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>

        <div className={revealClass("prowhy1-features")}>
          {featureList.map((feature, index) => (
            <Fragment key={index}>
              {index > 0 && <span className="prowhy1-divider"></span>}
              <div className="prowhy1-feature">
                <div className="prowhy1-feature-icon">
                  {featureIcons[index % featureIcons.length]}
                </div>
                <div className="prowhy1-feature-text">
                  {feature.line1}
                  {feature.line2 && <br />}
                  {feature.line2}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* ===== RIGHT: VIDEO (hover to play) ===== */}
      <div className="prowhy1-right">
        <div
          className={videoClass}
          onMouseEnter={handleVideoMouseEnter}
          onMouseLeave={handleVideoMouseLeave}
        >
          {/* ✅ CHANGE 4: platform check hataya, sirf thumbnail check + onError */}
          {videoThumbnail ? (
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className="prowhy1-video-thumb"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="prowhy1-video-thumb prowhy1-video-thumb--fallback" />
          )}

          {showEmbed && (
            <iframe
              className="prowhy1-video-iframe"
              src={videoEmbedUrl}
              title="Banner Video"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

          {videoEmbedUrl && (
            <div className="prowhy1-play-btn" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="#000">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
            </div>
          )}

          <div className="prowhy1-coach-info">
            <div className="prowhy1-coach-name">{bannerData.full_name}</div>
            <div className="prowhy1-coach-role">{bannerData.position}</div>
            <div className="prowhy1-coach-line"></div>
          </div>
        </div>
      </div>

      {/* ----- Dots ----- */}
      {hasMultiple && (
        <div
          className="prowhy1-dots"
          role="tablist"
          aria-label="Banner navigation"
        >
          {banners.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Go to banner ${idx + 1}`}
              className={
                "prowhy1-dot" +
                (idx === activeIndex ? " prowhy1-dot-active" : "")
              }
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}
    </section>
  );
}