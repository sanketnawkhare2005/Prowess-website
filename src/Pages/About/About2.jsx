// import { useEffect, useRef } from "react";
// import "./About2.css";

// const stats = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M12 3 2 8l10 5 8-4.2V15h1.5V8L12 3z" fill="#ffffff" />
//         <path d="M6 10.6V15c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5v-4.4" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     value: "85%",
//     accent: false,
//     description: "Students lack real world skills required by companies.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M4 21V8l6-4 6 4v13" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M16 21v-9l4 2v7" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M8 10h1M8 13h1M8 16h1M11 10h1M11 13h1M11 16h1" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
//       </svg>
//     ),
//     value: "67%",
//     accent: false,
//     description: "Employers struggle to find job-ready candidates.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="3.2" stroke="#ffffff" strokeWidth="1.4" />
//         <path d="M5.5 19c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
//       </svg>
//     ),
//     value: "92%",
//     accent: false,
//     description: "Students want better career preparation.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M4 17l5-5 4 4 7-8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M15 8h5v5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     value: "14%",
//     accent: true,
//     prefix: "Only",
//     description: "Feel truly confident about their performance in interviews.",
//   },
// ];

// export default function About2() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".reality-prow-heading-block, " +
//       ".reality-prow-card, " +
//       ".reality-prow-bottom-bar"
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
//             }, 1500);
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

//   return (
//     <section className="reality-prow-section" ref={sectionRef}>
//       <div className="reality-prow-grid">
//         {/* ---------- Row 1, Col 1: heading ---------- */}
//         <div className="reality-prow-heading-block">
//           <h2 className="reality-prow-title">
//             1. THE REALITY
//             <br />
//             WE SAW
//           </h2>
//           <span className="reality-prow-underline"></span>
//           <p className="reality-prow-text">
//             Students study hard. Institutions teach well. But once they enter
//             the real world...
//           </p>
//         </div>

//         {/* ---------- Row 1, Col 2: 4 stat cards in one row ---------- */}
//         <div className="reality-prow-right">
//           <div className="reality-prow-cards">
//             {stats.map((stat, index) => (
//               <div className="reality-prow-card" key={index} style={{ "--d": index }}>
//                 <div className="reality-prow-icon-circle">{stat.icon}</div>
//                 <div className="reality-prow-stat-text">
//                   <span className="reality-prow-percent" style={{ "--d": index }}>
//                     {stat.prefix && (
//                       <span className="reality-prow-percent-prefix">
//                         {stat.prefix}{" "}
//                       </span>
//                     )}
//                     <span
//                       className={
//                         stat.accent
//                           ? "reality-prow-percent-accent"
//                           : "reality-prow-percent-value"
//                       }
//                     >
//                       {stat.value}
//                     </span>
//                   </span>
//                   <p className="reality-prow-desc">{stat.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ---------- Row 2, Col 2: bottom bar ---------- */}
//           <div className="reality-prow-bottom-bar">
//             <div className="reality-prow-bottom-left">
//               <span className="reality-prow-warning-icon">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <path d="M12 3 2 20h20L12 3z" stroke="#f5b301" strokeWidth="1.6" strokeLinejoin="round" />
//                   <path d="M12 10v4" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" />
//                   <circle cx="12" cy="17" r="1" fill="#f5b301" />
//                 </svg>
//               </span>
//               <p className="reality-prow-bottom-text">
//                 The system teaches.
//                 <br />
//                 But it doesn&apos;t transform.
//               </p>
//             </div>

//             <span className="reality-prow-divider"></span>

//             <div className="reality-prow-bottom-right">
//               <p className="reality-prow-gap-text">
//                 THAT&apos;S THE GAP WE COULDN&apos;T IGNORE.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Row 2, Col 1: empty spacer ---------- */}
//         <div className="reality-prow-spacer"></div>
//       </div>
//     </section>
//   );
// }



















// Dyanamic code
// import { useEffect, useRef, useState } from "react";
// import "./About2.css";

// const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_reality_we_saw";
// const BOTTOM_BAR_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_system_teaches";

// // ✅ Icons hamesha STATIC rahenge (API se image field use NAHI karna, jaisa bataya gaya)
// const statIcons = [
//   <svg viewBox="0 0 24 24" fill="none">
//     <path d="M12 3 2 8l10 5 8-4.2V15h1.5V8L12 3z" fill="#ffffff" />
//     <path d="M6 10.6V15c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5v-4.4" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>,
//   <svg viewBox="0 0 24 24" fill="none">
//     <path d="M4 21V8l6-4 6 4v13" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M16 21v-9l4 2v7" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M8 10h1M8 13h1M8 16h1M11 10h1M11 13h1M11 16h1" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
//   </svg>,
//   <svg viewBox="0 0 24 24" fill="none">
//     <circle cx="12" cy="8" r="3.2" stroke="#ffffff" strokeWidth="1.4" />
//     <path d="M5.5 19c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
//   </svg>,
//   <svg viewBox="0 0 24 24" fill="none">
//     <path d="M4 17l5-5 4 4 7-8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M15 8h5v5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>,
// ];

// // number field me kabhi "%" already ho sakta hai, kabhi na ho —
// // dono cases handle karke sirf digits nikalte hain, "%" hum khud static laga denge
// function cleanNumber(raw) {
//   return (raw || "").toString().replace(/%/g, "").trim();
// }

// // Coaches1 (banner) jaisa hi ordering logic —
// // API hamesha naya data pehle bhejta hai (id/created_at descending),
// // lekin humein PURANA data hi PEHLE icon par dikhana hai (oldest → first card).
// // Isliye id ke hisaab se ascending sort karte hain.
// function sortOldestFirst(list) {
//   return [...list].sort((a, b) => {
//     const idA = Number(a.id) || 0;
//     const idB = Number(b.id) || 0;
//     return idA - idB;
//   });
// }

// // Bottom bar ka "heading" text 2 lines me static tha ("The system teaches." <br> "But it doesn't transform.")
// // Ab dynamic hai to newline se split karte hain, warna sentence-wise (period ke baad) split kar lete hain.
// function splitTwoLines(text) {
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

// export default function About2() {
//   const sectionRef = useRef(null);
//   const [items, setItems] = useState([]);
//   const [bottomBar, setBottomBar] = useState({ heading: "", description: "" });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let statsLoaded = false;
//     let bottomLoaded = false;
//     const checkAllLoaded = () => {
//       if (statsLoaded && bottomLoaded) setLoading(false);
//     };

//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((res) => {
//         const list = Array.isArray(res?.data) ? res.data : [];
//         setItems(sortOldestFirst(list));
//       })
//       .catch((err) => console.error("About2 (Reality We Saw) API error:", err))
//       .finally(() => {
//         statsLoaded = true;
//         checkAllLoaded();
//       });

//     fetch(BOTTOM_BAR_API)
//       .then((res) => res.json())
//       .then((res) => {
//         const list = Array.isArray(res?.data) ? res.data : [];
//         const first = list[0] || {};
//         setBottomBar({
//           heading: first.heading || "",
//           description: first.description || "",
//         });
//       })
//       .catch((err) => console.error("About2 (System Teaches) API error:", err))
//       .finally(() => {
//         bottomLoaded = true;
//         checkAllLoaded();
//       });
//   }, []);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".reality-prow-heading-block, " +
//       ".reality-prow-card, " +
//       ".reality-prow-bottom-bar"
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
//             }, 1500);
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
//     // items load hone ke baad DOM update hota hai, isliye observer ko re-run karo
//   }, [items]);

//   if (loading) {
//     return <section className="reality-prow-section" ref={sectionRef}></section>;
//   }

//   // main_heading aur description sab items me repeat hote hain (jaise pichli APIs me),
//   // isliye pehle item se le lete hain
//   const sectionMainHeading = items[0]?.main_heading || "";
//   const sectionDescription = items[0]?.description || "";

//   // Bottom bar ka text ab dynamic hai (icon static hai, image field use nahi ki)
//   const { line1: bottomLine1, line2: bottomLine2 } = splitTwoLines(bottomBar.heading);

//   return (
//     <section className="reality-prow-section" ref={sectionRef}>
//       <div className="reality-prow-grid">
//         {/* ---------- Row 1, Col 1: heading ---------- */}
//         <div className="reality-prow-heading-block">
//           <h2 className="reality-prow-title">{sectionMainHeading}</h2>
//           <span className="reality-prow-underline"></span>
//           <p className="reality-prow-text">{sectionDescription}</p>
//         </div>

//         {/* ---------- Row 1, Col 2: stat cards in one row ---------- */}
//         <div className="reality-prow-right">
//           <div className="reality-prow-cards">
//             {items.map((item, index) => {
//               const isAccent = index === items.length - 1; // aakhri card hamesha highlight/yellow
//               const numberValue = cleanNumber(item.number);

//               return (
//                 <div className="reality-prow-card" key={item.id ?? index} style={{ "--d": index }}>
//                   <div className="reality-prow-icon-circle">
//                     {statIcons[index % statIcons.length]}
//                   </div>
//                   <div className="reality-prow-stat-text">
//                     <span className="reality-prow-percent" style={{ "--d": index }}>
//                       {isAccent && (
//                         <span className="reality-prow-percent-prefix">Only </span>
//                       )}
//                       <span
//                         className={
//                           isAccent
//                             ? "reality-prow-percent-accent"
//                             : "reality-prow-percent-value"
//                         }
//                       >
//                         {numberValue}%
//                       </span>
//                     </span>
//                     <p className="reality-prow-desc">{item.sub_description}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* ---------- Row 2, Col 2: bottom bar (dynamic — list_system_teaches API, icon static) ---------- */}
//           <div className="reality-prow-bottom-bar">
//             <div className="reality-prow-bottom-left">
//               <span className="reality-prow-warning-icon">
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <path d="M12 3 2 20h20L12 3z" stroke="#f5b301" strokeWidth="1.6" strokeLinejoin="round" />
//                   <path d="M12 10v4" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" />
//                   <circle cx="12" cy="17" r="1" fill="#f5b301" />
//                 </svg>
//               </span>
//               <p className="reality-prow-bottom-text">
//                 {bottomLine1}
//                 {bottomLine2 && (
//                   <>
//                     <br />
//                     {bottomLine2}
//                   </>
//                 )}
//               </p>
//             </div>

//             <span className="reality-prow-divider"></span>

//             <div className="reality-prow-bottom-right">
//               <p className="reality-prow-gap-text">{bottomBar.description}</p>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Row 2, Col 1: empty spacer ---------- */}
//         <div className="reality-prow-spacer"></div>
//       </div>
//     </section>
//   );
// }













// Dyanamic code
import { useEffect, useRef, useState } from "react";
import "./About2.css";

const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_reality_we_saw";
const BOTTOM_BAR_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_system_teaches";

// how long cached API responses stay fresh before we silently refetch them
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// ✅ Icons hamesha STATIC rahenge (API se image field use NAHI karna, jaisa bataya gaya)
const statIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 3 2 8l10 5 8-4.2V15h1.5V8L12 3z" fill="#ffffff" />
    <path d="M6 10.6V15c0 1.9 2.7 3.5 6 3.5s6-1.6 6-3.5v-4.4" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 21V8l6-4 6 4v13" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 21v-9l4 2v7" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10h1M8 13h1M8 16h1M11 10h1M11 13h1M11 16h1" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.2" stroke="#ffffff" strokeWidth="1.4" />
    <path d="M5.5 19c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 17l5-5 4 4 7-8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8h5v5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

// number field me kabhi "%" already ho sakta hai, kabhi na ho —
// dono cases handle karke sirf digits nikalte hain, "%" hum khud static laga denge
function cleanNumber(raw) {
  return (raw || "").toString().replace(/%/g, "").trim();
}

// Coaches1 (banner) jaisa hi ordering logic —
// API hamesha naya data pehle bhejta hai (id/created_at descending),
// lekin humein PURANA data hi PEHLE icon par dikhana hai (oldest → first card).
// Isliye id ke hisaab se ascending sort karte hain.
function sortOldestFirst(list) {
  return [...list].sort((a, b) => {
    const idA = Number(a.id) || 0;
    const idB = Number(b.id) || 0;
    return idA - idB;
  });
}

// Bottom bar ka "heading" text 2 lines me static tha ("The system teaches." <br> "But it doesn't transform.")
// Ab dynamic hai to newline se split karte hain, warna sentence-wise (period ke baad) split kar lete hain.
function splitTwoLines(text) {
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

/* ══════════════════════════════════════════════════════════════
   PERFORMANCE HELPERS — sessionStorage cache (instant repeat loads)
   + fetch with a hard timeout so a hung request can never block
   the section forever.
   ══════════════════════════════════════════════════════════════ */
function readCache(key, ttlMs) {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > ttlMs) return null;
    return data;
  } catch (e) {
    return null;
  }
}

function writeCache(key, data) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
  } catch (e) {
    /* storage full / disabled — silently skip caching */
  }
}

async function fetchJSON(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

/* ══════════════════════════════════════════════════════════════
   COUNT-UP HOOK — animates a number from 0 → target once "play"
   turns true (and resets to 0 when it turns false again, so it
   replays every time the section re-enters view).
   ══════════════════════════════════════════════════════════════ */
function useCountUp(target, play, duration = 1100, delay = 0) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);

    if (!play) {
      setValue(0);
      return;
    }

    const timeoutId = setTimeout(() => {
      let start = null;
      const step = (ts) => {
        if (start === null) start = ts;
        const progress = Math.min(1, (ts - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setValue(Math.round(eased * target));
        if (progress < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafRef.current);
    };
  }, [play, target, duration, delay]);

  return value;
}

/* ══════════════════════════════════════════════════════════════
   STAT CARD — icon with a radial progress ring (fills to match
   the percentage) plus the count-up number.
   ══════════════════════════════════════════════════════════════ */
const RING_R = 28;
const RING_C = 2 * Math.PI * RING_R;

function StatCard({ item, index, isAccent, icon, animate }) {
  const numberValue = cleanNumber(item.number);
  const percentNum = Math.max(0, Math.min(100, Number(numberValue) || 0));
  const ringOffset = RING_C * (1 - percentNum / 100);
  const displayValue = useCountUp(percentNum, animate, 1100, index * 120 + 350);

  return (
    <div className="reality-prow-card" style={{ "--d": index }}>
      <div className="reality-prow-icon-circle-wrap">
        <svg className="reality-prow-progress-ring" viewBox="0 0 64 64">
          <circle className="ring-track" cx="32" cy="32" r={RING_R} />
          <circle
            className="ring-progress"
            cx="32"
            cy="32"
            r={RING_R}
            style={{
              strokeDasharray: `${RING_C}px`,
              "--ring-offset": `${ringOffset}px`,
              "--d": index,
            }}
          />
        </svg>
        <div className="reality-prow-icon-circle">{icon}</div>
      </div>

      <div className="reality-prow-stat-text">
        <span className="reality-prow-percent" style={{ "--d": index }}>
          {isAccent && (
            <span className="reality-prow-percent-prefix">Only </span>
          )}
          <span
            className={
              isAccent
                ? "reality-prow-percent-accent"
                : "reality-prow-percent-value"
            }
          >
            {displayValue}%
          </span>
        </span>
        <p className="reality-prow-desc">{item.sub_description}</p>
      </div>
    </div>
  );
}

export default function About2() {
  const sectionRef = useRef(null);
  const [items, setItems] = useState([]);
  const [bottomBar, setBottomBar] = useState({ heading: "", description: "" });
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  /* ── Fetch APIs: instant paint from cache, then revalidate in the
     background so the section never sits blank waiting on the network ── */
  useEffect(() => {
    let cancelled = false;

    const cachedStats = readCache(API_URL, CACHE_TTL_MS);
    const cachedBottom = readCache(BOTTOM_BAR_API, CACHE_TTL_MS);

    if (cachedStats) {
      const list = Array.isArray(cachedStats?.data) ? cachedStats.data : [];
      setItems(sortOldestFirst(list));
    }
    if (cachedBottom) {
      const list = Array.isArray(cachedBottom?.data) ? cachedBottom.data : [];
      const first = list[0] || {};
      setBottomBar({
        heading: first.heading || "",
        description: first.description || "",
      });
    }
    if (cachedStats && cachedBottom) setLoading(false);

    Promise.allSettled([fetchJSON(API_URL), fetchJSON(BOTTOM_BAR_API)]).then(
      ([statsRes, bottomRes]) => {
        if (cancelled) return;

        if (statsRes.status === "fulfilled") {
          const list = Array.isArray(statsRes.value?.data)
            ? statsRes.value.data
            : [];
          setItems(sortOldestFirst(list));
          writeCache(API_URL, statsRes.value);
        } else {
          console.error("About2 (Reality We Saw) API error:", statsRes.reason);
        }

        if (bottomRes.status === "fulfilled") {
          const list = Array.isArray(bottomRes.value?.data)
            ? bottomRes.value.data
            : [];
          const first = list[0] || {};
          setBottomBar({
            heading: first.heading || "",
            description: first.description || "",
          });
          writeCache(BOTTOM_BAR_API, bottomRes.value);
        } else {
          console.error("About2 (System Teaches) API error:", bottomRes.reason);
        }

        setLoading(false);
      }
    );

    return () => {
      cancelled = true;
    };
  }, []);

  /* ── Intersection Observer ── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".reality-prow-heading-block, " +
      ".reality-prow-card, " +
      ".reality-prow-bottom-bar"
    );

    let hoverTimeout = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.forEach((el) => el.classList.add("revealed"));
            setAnimate(true);

            if (hoverTimeout) clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
              targets.forEach((el) => el.classList.add("hover-ready"));
            }, 1500);
          } else {
            targets.forEach((el) => {
              el.classList.remove("revealed", "hover-ready");
            });
            setAnimate(false);
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
    // items load hone ke baad DOM update hota hai, isliye observer ko re-run karo
  }, [items]);

  if (loading) {
    return <section className="reality-prow-section" ref={sectionRef}></section>;
  }

  // main_heading aur description sab items me repeat hote hain (jaise pichli APIs me),
  // isliye pehle item se le lete hain
  const sectionMainHeading = items[0]?.main_heading || "";
  const sectionDescription = items[0]?.description || "";

  // Bottom bar ka text ab dynamic hai (icon static hai, image field use nahi ki)
  const { line1: bottomLine1, line2: bottomLine2 } = splitTwoLines(bottomBar.heading);

  return (
    <section className="reality-prow-section" ref={sectionRef}>
      <div className="reality-prow-grid">
        {/* ---------- Row 1, Col 1: heading ---------- */}
        <div className="reality-prow-heading-block">
          <h2 className="reality-prow-title">{sectionMainHeading}</h2>
          <span className="reality-prow-underline"></span>
          <p className="reality-prow-text">{sectionDescription}</p>
        </div>

        {/* ---------- Row 1, Col 2: stat cards in one row ---------- */}
        <div className="reality-prow-right">
          <div className="reality-prow-cards">
            {items.map((item, index) => {
              const isAccent = index === items.length - 1; // aakhri card hamesha highlight/yellow
              return (
                <StatCard
                  key={item.id ?? index}
                  item={item}
                  index={index}
                  isAccent={isAccent}
                  icon={statIcons[index % statIcons.length]}
                  animate={animate}
                />
              );
            })}
          </div>

          {/* ---------- Row 2, Col 2: bottom bar (dynamic — list_system_teaches API, icon static) ---------- */}
          <div className="reality-prow-bottom-bar">
            <div className="reality-prow-bottom-left">
              <span className="reality-prow-warning-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 3 2 20h20L12 3z" stroke="#f5b301" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M12 10v4" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1" fill="#f5b301" />
                </svg>
              </span>
              <p className="reality-prow-bottom-text">
                {bottomLine1}
                {bottomLine2 && (
                  <>
                    <br />
                    {bottomLine2}
                  </>
                )}
              </p>
            </div>

            <span className="reality-prow-divider"></span>

            <div className="reality-prow-bottom-right">
              <p className="reality-prow-gap-text">{bottomBar.description}</p>
            </div>
          </div>
        </div>

        {/* ---------- Row 2, Col 1: empty spacer ---------- */}
        <div className="reality-prow-spacer"></div>
      </div>
    </section>
  );
}