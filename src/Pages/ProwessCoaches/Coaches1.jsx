// import { useRef, useState, useEffect } from "react";
// import "./Coaches1.css";

// const features = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="1" fill="#f5b301" />
//       </svg>
//     ),
//     title: "Real World Experience",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
//         <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
//         <path d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
//       </svg>
//     ),
//     title: "Practical Mentorship",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M4 17l5-5 4 4 7-8" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M15 8h5v5" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Proven Impact",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M12 3l2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.4 9.3l6-.9L12 3z" stroke="#f5b301" strokeWidth="1.3" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "Student Centric",
//   },
// ];

// export default function Coaches1() {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//     useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".coach-prow-content, " +
//       ".coach-prow-video-card, " +
//       ".coach-prow-feature-wrap"
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
//     <section className="coach-prow-section" ref={sectionRef}>
//       <div className="coach-prow-container">
//         {/* ---------- Left: video player ---------- */}
//         <div className="coach-prow-video-card">
//           <div className="coach-prow-video-frame">
//             {/* HOME1 Jaisa Video Preview + Native Controls */}
//             <video
//               ref={videoRef}
//               src="/videos/backvideo.mp4"
//               className="coach-prow-video-img"
//               preload="auto"
//               onPause={() => setIsPlaying(false)}
//               onEnded={() => setIsPlaying(false)}
//               controls={isPlaying}
//             >
//             </video>

//             {/* Sirf Tab Play Hoga */}
//             {!isPlaying && (
//               <button
//                 type="button"
//                 className="coach-prow-play-btn"
//                 aria-label="Play video"
//                 onClick={handlePlay}
//               >
//                 <svg viewBox="0 0 24 24" className="coach-prow-play-icon">
//                   <path d="M8 5v14l11-7z" fill="#0a0a0a" />
//                 </svg>
//               </button>
//             )}
//           </div>

//           {/* ❌ CUSTOM FAKE CONTROLS HATA DIYE HAIN ❌ */}
//         </div>

//         {/* ---------- Right: eyebrow, heading, description, features ---------- */}
//         <div className="coach-prow-content">
//           <div className="coach-prow-eyebrow">
//             <span className="coach-prow-eyebrow-line"></span>
//             THE PEOPLE BEHIND YOUR TRANSFORMATION
//           </div>

//           <h1 className="coach-prow-heading">
//             Learn. Practice.
//             <br />
//             <span className="coach-prow-heading-accent">
//               Perform. Succeed.
//             </span>
//           </h1>

//           <p className="coach-prow-description">
//             Our Performance Coaches don&apos;t just teach, they train,
//             challenge and guide you with real world experience.
//           </p>

//           <div className="coach-prow-features">
//             {features.map((feature, index) => (
//               <div className="coach-prow-feature-wrap" key={index} style={{ "--d": index }}>
//                 {index > 0 && (
//                   <span className="coach-prow-feature-divider"></span>
//                 )}
//                 <div className="coach-prow-feature">
//                   <span className="coach-prow-feature-icon">
//                     {feature.icon}
//                   </span>
//                   <h3 className="coach-prow-feature-title">
//                     {feature.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// Dyanamic Code
// Dyanamic Code
import { useRef, useState, useEffect } from "react";
import "./Coaches1.css";

/* ---------------------------------------------------------------
   API ENDPOINT
   --------------------------------------------------------------- */
const BANNER_API =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_performance_coaches_banner";

/* ---------------------------------------------------------------
   STATIC ICONS (cycled by index — same pattern as Contact1)
   --------------------------------------------------------------- */
const featureIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1" fill="#f5b301" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
    <path
      d="M4 19c0-3 2.2-5 5-5s5 2 5 5"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M4 17l5-5 4 4 7-8"
      stroke="#f5b301"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8h5v5"
      stroke="#f5b301"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3l2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.4 9.3l6-.9L12 3z"
      stroke="#f5b301"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>,
];

/* ---------------------------------------------------------------
   FALLBACK default banner — shown until API responds (or if it fails)
   --------------------------------------------------------------- */
const defaultBanner = {
  sub_heading: "THE PEOPLE BEHIND YOUR TRANSFORMATION",
  main_heading: "Learn. Practice.||Perform. Succeed.",
  description:
    "Our Performance Coaches don't just teach, they train, challenge and guide you with real world experience.",
  video_file_path: "/videos/backvideo.mp4",
  image_path:
    "https://images.unsplash.com/photo-1521737226708-a1ae6f60bb5c?q=80&w=1200&auto=format&fit=crop",
  heading:
    "Real World Experience,Practical Mentorship,Proven Impact,Student Centric",
};

/* ---------------------------------------------------------------
   Helper — same logic as Contact1's parseSubHeadings
   Turns heading field (array / JSON string / comma-separated) into
   a flat list of individual feature title strings.
   --------------------------------------------------------------- */
const parseHeadings = (raw) => {
  if (!raw) return [];

  if (Array.isArray(raw)) {
    return raw.map((v) => String(v).trim()).filter(Boolean);
  }

  if (typeof raw !== "string") return [];

  const trimmed = raw.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith("[")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((v) => String(v).trim()).filter(Boolean);
      }
    } catch (e) {
      /* fall through */
    }
  }

  if (trimmed.includes(",")) {
    return trimmed
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  }

  return [trimmed];
};

/* ---------------------------------------------------------------
   Build features list (icon + title) for ONE banner record
   --------------------------------------------------------------- */
const buildFeatures = (banner) => {
  const titles = parseHeadings(banner && banner.heading);
  return titles.map((title, idx) => ({
    icon: featureIcons[idx % featureIcons.length],
    title,
  }));
};

/* ---------------------------------------------------------------
   Normalize one raw API record into our banner shape,
   falling back to defaults for any missing field
   --------------------------------------------------------------- */
const normalizeBanner = (raw) => ({
  sub_heading: (raw && raw.sub_heading) || defaultBanner.sub_heading,
  main_heading: (raw && raw.main_heading) || defaultBanner.main_heading,
  description: (raw && raw.description) || defaultBanner.description,
  video_file_path:
    (raw && raw.video_file_path) || defaultBanner.video_file_path,
  image_path: (raw && raw.image_path) || defaultBanner.image_path,
  heading: (raw && raw.heading) || defaultBanner.heading,
});

/* Auto-scroll interval (ms) */
const AUTO_SCROLL_DELAY = 6000;

/* ===============================================================
   COMPONENT
   =============================================================== */
export default function Coaches1() {
  /* banners = full list from API (or single default banner) */
  const [banners, setBanners] = useState([defaultBanner]);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const bannerData = banners[activeIndex] || defaultBanner;
  const featuresList = buildFeatures(bannerData);
  const hasMultiple = banners.length > 1;

  /* --------------- IntersectionObserver animations --------------- */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".coach-prow-content, " +
        ".coach-prow-video-card, " +
        ".coach-prow-feature-wrap"
    );

    let hoverTimeout = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.forEach((el) => el.classList.add("revealed"));

            if (hoverTimeout) clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
              targets.forEach((el) => el.classList.add("hover-ready"));
            }, 1200);
          } else {
            targets.forEach((el) => {
              el.classList.remove("revealed", "hover-ready");
            });
            if (hoverTimeout) clearTimeout(hoverTimeout);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
    // re-run reveal-cycle when banner content changes so text animates in again
  }, [activeIndex]);

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

  // Oldest ID first
  const sortedList = [...list].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

  const normalized = sortedList.map(normalizeBanner);

  setBanners(normalized);
  setActiveIndex(0);
}
      } catch (err) {
        /* API failed — keep default static content, UI stays intact */
        console.error("Failed to load coaches banner:", err);
      }
    };

    fetchBanner();
    return () => {
      isMounted = false;
    };
  }, []);

  /* --------------- Auto-scroll (only when >1 banner) --------------- */
  useEffect(() => {
    if (!hasMultiple) return undefined;

    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [hasMultiple, banners.length]);

  /* Reset video play state whenever active banner changes */
  useEffect(() => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [activeIndex]);

  /* Restart auto-scroll timer (so manual dot click doesn't fight the interval) */
  const restartAutoScroll = () => {
    if (!hasMultiple) return;
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, AUTO_SCROLL_DELAY);
  };

  const goToSlide = (idx) => {
    setActiveIndex(idx);
    restartAutoScroll();
  };

  /* Split main_heading on "||" for accent colour (same as Contact1) */
  const headingParts = (bannerData.main_heading || "").split("||");

  /* --------------- Video play handler --------------- */
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      className="coach-prow-section"
      ref={sectionRef}
      style={{ "--coach-bg-image": `url(${bannerData.image_path})` }}
    >
      <div className="coach-prow-container">
        {/* ---------- Left: video player ---------- */}
        <div className="coach-prow-video-card">
          <div className="coach-prow-video-frame">
            <video
              ref={videoRef}
              src={bannerData.video_file_path}
              className="coach-prow-video-img"
              preload="auto"
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              controls={isPlaying}
            ></video>

            {!isPlaying && (
              <button
                type="button"
                className="coach-prow-play-btn"
                aria-label="Play video"
                onClick={handlePlay}
              >
                <svg viewBox="0 0 24 24" className="coach-prow-play-icon">
                  <path d="M8 5v14l11-7z" fill="#0a0a0a" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ---------- Right: eyebrow, heading, description, features ---------- */}
        <div className="coach-prow-content">
          <div className="coach-prow-eyebrow">
            <span className="coach-prow-eyebrow-line"></span>
            {bannerData.sub_heading}
          </div>

          <h1 className="coach-prow-heading">
            {headingParts[0]}
            {headingParts[1] && (
              <>
                <br />
                <span className="coach-prow-heading-accent">
                  {headingParts[1]}
                </span>
              </>
            )}
          </h1>

          <p className="coach-prow-description">{bannerData.description}</p>

          <div className="coach-prow-features">
            {featuresList.map((feature, index) => (
              <div
                className="coach-prow-feature-wrap"
                key={index}
                style={{ "--d": index }}
              >
                {index > 0 && (
                  <span className="coach-prow-feature-divider"></span>
                )}
                <div className="coach-prow-feature">
                  <span className="coach-prow-feature-icon">
                    {feature.icon}
                  </span>
                  <h3 className="coach-prow-feature-title">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Dots navigation (only if more than 1 banner) — bottom center ---------- */}
      {hasMultiple && (
        <div className="coach-prow-dots" role="tablist" aria-label="Banner navigation">
          {banners.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              aria-label={`Go to banner ${idx + 1}`}
              className={
                "coach-prow-dot" +
                (idx === activeIndex ? " coach-prow-dot-active" : "")
              }
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}
    </section>
  );
}