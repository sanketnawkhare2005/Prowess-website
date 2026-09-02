// import { useEffect, useRef, useState } from "react";
// import "./Coaches3.css";

// const messages = [
//   {
//     eyebrow: "A MESSAGE FROM",
//     name: "ATHARVA KOPULWAR",
//     role: "Performance Coach",
//     heading: "Confidence. Clarity. Leadership.",
//     description:
//       "Performance is built when you step out, express, take action and lead with confidence. We are here to train you for that.",
//     videoSrc: "/videos/backvideo.mp4",
//   },
//   {
//     eyebrow: "A MESSAGE FROM",
//     name: "SUMEDH RAMTEKE",
//     role: "Performance Coach",
//     heading: "Discipline Today. Performance Forever.",
//     description:
//       "Real performance is built in the daily hours no one sees. It's not about motivation, it's about consistency. Keep practicing. Keep improving. That's how you win.",
//     videoSrc: "/videos/backvideo.mp4",
//   },
// ];

// const strengths = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
//         <path
//           d="M4 19c0-3 2.2-5 5-5s5 2 5 5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//         <path
//           d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "Communication Excellence",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 6.5h16v9H9.5L6 19v-3.5H4v-9z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <circle cx="9" cy="11" r="0.9" fill="#f5b301" />
//         <circle cx="12" cy="11" r="0.9" fill="#f5b301" />
//         <circle cx="15" cy="11" r="0.9" fill="#f5b301" />
//       </svg>
//     ),
//     title: "Presentation Mastery",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 21V8l6-4 6 4v13"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M16 21v-9l4 2v7"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "Leadership Presence",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect
//           x="4"
//           y="5"
//           width="16"
//           height="15"
//           rx="2"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//         />
//         <path
//           d="M4 9.5h16M8 3v3.5M16 3v3.5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "Daily Habits",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="1" fill="#f5b301" />
//       </svg>
//     ),
//     title: "Focused Practice",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M7 4h10v3.5a5 5 0 0 1-10 0V4z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M5 5H4a2 2 0 0 0 2 2M19 5h1a2 2 0 0 1-2 2"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//           strokeLinecap="round"
//         />
//         <path
//           d="M12 12.5v3.5M9.5 20h5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "Real Results",
//   },
// ];

// function VideoBlock({ videoSrc, name, role }) {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     if (videoRef.current) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   return (
//     <div
//       className="message-prow-video-card mp-animate"
//       data-mp="fade-left"
//       data-mp-delay="200"
//     >
//       <video
//         ref={videoRef}
//         className="message-prow-video"
//         preload="auto"
//         onPause={() => setIsPlaying(false)}
//         onEnded={() => setIsPlaying(false)}
//         controls={isPlaying}
//       >
//         <source src={videoSrc} type="video/mp4" />
//       </video>

//       {!isPlaying && (
//         <>
//           <div className="message-prow-video-name">
//             <span className="message-prow-video-name-title">{name}</span>
//             <span className="message-prow-video-name-role">{role}</span>
//           </div>

//           <button
//             type="button"
//             className="message-prow-play-btn"
//             aria-label="Play video"
//             onClick={handlePlay}
//           >
//             <svg viewBox="0 0 24 24" className="message-prow-play-icon">
//               <path d="M8 5v14l11-7z" fill="#0a0a0a" />
//             </svg>
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// export default function Coaches3() {
//   useEffect(() => {
//   const els = document.querySelectorAll(".mp-animate");
//   if (!els.length) return;

//   const timers = new Map();

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         const el = entry.target;
//         const key = el;

//         // Element viewport mein aaya → animate karo
//         if (entry.isIntersecting) {
//           const delay = parseInt(el.dataset.mpDelay || "0", 10);
//           const timer = setTimeout(() => {
//             el.classList.add("mp-visible");
//             timers.delete(key);
//           }, delay);
//           timers.set(key, timer);
//         }
//         // Element viewport se bahar gaya → reset karo
//         else {
//           const existing = timers.get(key);
//           if (existing) {
//             clearTimeout(existing);
//             timers.delete(key);
//           }
//           el.classList.remove("mp-visible");
//         }
//       });
//     },
//     { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
//   );

//   els.forEach((el) => observer.observe(el));

//   return () => {
//     observer.disconnect();
//     timers.forEach((timer) => clearTimeout(timer));
//     timers.clear();
//   };
// }, []);

//   return (
//     <section className="message-prow-section">
//       <div className="message-prow-row">
//         {messages.map((msg, index) => (
//           <div
//             className="message-prow-block mp-animate"
//             key={index}
//             data-mp="fade-up"
//             data-mp-delay={index === 0 ? "0" : "150"}
//           >
//             <div className="message-prow-text">
//               <span
//                 className="message-prow-eyebrow mp-animate"
//                 data-mp="fade-down"
//                 data-mp-delay={index === 0 ? "100" : "250"}
//               >
//                 {msg.eyebrow}
//               </span>
//               <h3
//                 className="message-prow-name mp-animate"
//                 data-mp="fade-up"
//                 data-mp-delay={index === 0 ? "150" : "300"}
//               >
//                 {msg.name}
//               </h3>
//               <h2
//                 className="message-prow-heading mp-animate"
//                 data-mp="fade-up"
//                 data-mp-delay={index === 0 ? "200" : "350"}
//               >
//                 {msg.heading}
//               </h2>
//               <span
//                 className="message-prow-border mp-animate"
//                 data-mp="scale-x"
//                 data-mp-delay={index === 0 ? "300" : "450"}
//               ></span>
//               <p
//                 className="message-prow-desc mp-animate"
//                 data-mp="fade-up"
//                 data-mp-delay={index === 0 ? "350" : "500"}
//               >
//                 {msg.description}
//               </p>
//             </div>

//             <VideoBlock
//               videoSrc={msg.videoSrc}
//               name={msg.name}
//               role={msg.role}
//             />
//           </div>
//         ))}
//       </div>

//       {/* ---------- Bottom white strengths bar ---------- */}
//       <div
//         className="message-prow-strengths-bar mp-animate"
//         data-mp="fade-up"
//         data-mp-delay="400"
//       >
//         <div className="message-prow-strengths-row">
//           {strengths.map((item, index) => (
//             <div
//               className="message-prow-strength-wrap mp-animate"
//               key={index}
//               data-mp="fade-up"
//               data-mp-delay={500 + index * 80}
//             >
//               {index > 0 && (
//                 <span className="message-prow-strength-divider"></span>
//               )}
//               <div className="message-prow-strength">
//                 <span className="message-prow-strength-icon">{item.icon}</span>
//                 <h3 className="message-prow-strength-title">{item.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














// Dyanamic Code
import { useEffect, useRef, useState } from "react";
import "./Coaches3.css";

const MESSAGE_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_message_from";
const BOTTOM_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_message_from_bottom_detail";

const GROUP_SIZE = 2; // ek time par 2 hi blocks dikhenge (jaisa design me hai)
const AUTO_SCROLL_MS = 6000;

// ✅ Icons hamesha STATIC rahenge (bottom white bar), sirf heading text API se dynamic aayega
const strengthIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
    <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 6.5h16v9H9.5L6 19v-3.5H4v-9z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="9" cy="11" r="0.9" fill="#f5b301" />
    <circle cx="12" cy="11" r="0.9" fill="#f5b301" />
    <circle cx="15" cy="11" r="0.9" fill="#f5b301" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 21V8l6-4 6 4v13" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 21v-9l4 2v7" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="4" y="5" width="16" height="15" rx="2" stroke="#f5b301" strokeWidth="1.4" />
    <path d="M4 9.5h16M8 3v3.5M16 3v3.5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1" fill="#f5b301" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M7 4h10v3.5a5 5 0 0 1-10 0V4z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M5 5H4a2 2 0 0 0 2 2M19 5h1a2 2 0 0 1-2 2" stroke="#f5b301" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M12 12.5v3.5M9.5 20h5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
];

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

function VideoBlock({ videoSrc, name, role, onPlayingChange }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      if (onPlayingChange) onPlayingChange(true);
    }
  };

  const handleStop = () => {
    setIsPlaying(false);
    if (onPlayingChange) onPlayingChange(false);
  };

  return (
    <div
      className="message-prow-video-card mp-animate"
      data-mp="fade-left"
      data-mp-delay="200"
    >
      <video
        ref={videoRef}
        className="message-prow-video"
        preload="auto"
        onPause={handleStop}
        onEnded={handleStop}
        controls={isPlaying}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {!isPlaying && (
        <>
          <div className="message-prow-video-name">
            <span className="message-prow-video-name-title">{name}</span>
            <span className="message-prow-video-name-role">{role}</span>
          </div>

          <button
            type="button"
            className="message-prow-play-btn"
            aria-label="Play video"
            onClick={handlePlay}
          >
            <svg viewBox="0 0 24 24" className="message-prow-play-icon">
              <path d="M8 5v14l11-7z" fill="#0a0a0a" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default function Coaches3() {
  const [messages, setMessages] = useState([]);
  const [strengths, setStrengths] = useState([]);
  const [loading, setLoading] = useState(true);

  const [groupIndex, setGroupIndex] = useState(0);
  const [anyPlaying, setAnyPlaying] = useState(false);

  // ---------- FETCH: messages (top blocks) ----------
  useEffect(() => {
    fetch(MESSAGE_API)
      .then((res) => res.json())
      .then((res) => {
  const list = Array.isArray(res?.data) ? res.data : [];

  // Oldest data first
  const sortedList = [...list].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

  setMessages(sortedList);
})
      .catch((err) => console.error("Coaches3 message API error:", err));
  }, []);

  // ---------- FETCH: bottom strengths bar ----------
  useEffect(() => {
    fetch(BOTTOM_API)
      .then((res) => res.json())
      .then((res) => {
  const list = Array.isArray(res?.data) ? res.data : [];

  // Oldest data first
  const sortedList = [...list].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

  const mapped = sortedList.map((item, i) => ({
    title: item.heading || "",
    icon: strengthIcons[i % strengthIcons.length],
  }));

  setStrengths(mapped);
})
      .catch((err) => console.error("Coaches3 bottom API error:", err))
      .finally(() => setLoading(false));
  }, []);

  const groups = chunkArray(messages, GROUP_SIZE);
  const showDots = groups.length > 1;

  // ---------- AUTO SCROLL (only if more than 1 group, i.e. more than 2 messages) ----------
  useEffect(() => {
    if (!showDots) return undefined;
    if (anyPlaying) return undefined; // video chal raha ho to switch mat karo

    const timer = setInterval(() => {
      setGroupIndex((prev) => (prev + 1) % groups.length);
    }, AUTO_SCROLL_MS);

    return () => clearInterval(timer);
  }, [showDots, groups.length, anyPlaying]);

  // ---------- SCROLL REVEAL (same as before) ----------
  useEffect(() => {
    const els = document.querySelectorAll(".mp-animate");
    if (!els.length) return;

    const timers = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const key = el;

          if (entry.isIntersecting) {
            const delay = parseInt(el.dataset.mpDelay || "0", 10);
            const timer = setTimeout(() => {
              el.classList.add("mp-visible");
              timers.delete(key);
            }, delay);
            timers.set(key, timer);
          } else {
            const existing = timers.get(key);
            if (existing) {
              clearTimeout(existing);
              timers.delete(key);
            }
            el.classList.remove("mp-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
    // groupIndex/loading badalne par naye elements ko bhi observe karna hai
  }, [groupIndex, loading, messages, strengths]);

  if (loading) {
    return <section className="message-prow-section"></section>;
  }

  const currentGroup = groups[groupIndex] || [];

  return (
    <section className="message-prow-section">
      {/* <div className="message-prow-row">
        {currentGroup.map((msg, index) => (
          <div
            className="message-prow-block mp-animate"
            key={msg.id ?? index}
            data-mp="fade-up"
            data-mp-delay={index === 0 ? "0" : "150"}
          >
            <div className="message-prow-text">
              <span
                className="message-prow-eyebrow mp-animate"
                data-mp="fade-down"
                data-mp-delay={index === 0 ? "100" : "250"}
              >
                {msg.sub_heading}
              </span>
              <h3
                className="message-prow-name mp-animate"
                data-mp="fade-up"
                data-mp-delay={index === 0 ? "150" : "300"}
              >
                {msg.full_name}
              </h3>
              <h2
                className="message-prow-heading mp-animate"
                data-mp="fade-up"
                data-mp-delay={index === 0 ? "200" : "350"}
              >
                {msg.heading}
              </h2>
              <span
                className="message-prow-border mp-animate"
                data-mp="scale-x"
                data-mp-delay={index === 0 ? "300" : "450"}
              ></span>
              <p
                className="message-prow-desc mp-animate"
                data-mp="fade-up"
                data-mp-delay={index === 0 ? "350" : "500"}
              >
                {msg.description}
              </p>
            </div>

            <VideoBlock
              videoSrc={msg.video_file_path}
              name={msg.full_name}
              role={msg.position}
              onPlayingChange={setAnyPlaying}
            />
          </div>
        ))}
      </div> */}

      {/* ---------- Dots (sirf tab dikhenge jab 2 se zyada messages ho) ---------- */}
      {/* {showDots && (
        <div className="message-prow-dots">
          {groups.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              className={`message-prow-dot ${i === groupIndex ? "active" : ""}`}
              onClick={() => setGroupIndex(i)}
            />
          ))}
        </div>
      )} */}

      {/* ---------- Bottom white strengths bar ---------- */}
      <div
        className="message-prow-strengths-bar mp-animate"
        data-mp="fade-up"
        data-mp-delay="400"
      >
        <div className="message-prow-strengths-row">
          {strengths.map((item, index) => (
            <div
              className="message-prow-strength-wrap mp-animate"
              key={index}
              data-mp="fade-up"
              data-mp-delay={500 + index * 80}
            >
              {index > 0 && (
                <span className="message-prow-strength-divider"></span>
              )}
              <div className="message-prow-strength">
                <span className="message-prow-strength-icon">{item.icon}</span>
                <h3 className="message-prow-strength-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}