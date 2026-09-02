
// // Dyanamic Code
// import { useRef, useState, useEffect, Fragment } from "react";
// import "./Prowess6.css";

// /* ---------------------------------------------------------------
//    API ENDPOINT — Apni actual API URL yahan daalo
//    --------------------------------------------------------------- */
// const BANNER_API =
//   "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_method_banner2";

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

//     full_name: "Gayatri Moghe",
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
// export default function Prowess6() {
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
//             preload="auto"
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