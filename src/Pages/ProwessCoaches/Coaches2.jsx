// import { useEffect, useRef } from "react";
// import "./Coaches2.css";

// const coaches = [
//   {
//     name: "SAURABH KENE",
//     position: "Performance Coach",
//     image: "/images/male.avif",
//     linkedin: "https://linkedin.com/in/",
//     description:
//       "Expert in Communication, Leadership and Personal Effectiveness.",
//   },
//   {
//     name: "ATHARVA KOPULWAR",
//     position: "Performance Coach",
//     image: "/images/male.avif",
//     linkedin: "https://linkedin.com/in/",
//     description:
//       "Helps students build confidence, presentation skills and leadership presence.",
//   },
//   {
//     name: "GAYATRI MOGHE",
//     position: "Performance Coach",
//     image: "/images/female.avif",
//     linkedin: "https://linkedin.com/in/",
//     description:
//       "Passionate about communication, creativity and building strong mindsets.",
//   },
//   {
//     name: "SUMEDH RAMTEKE",
//     position: "Performance Coach",
//     image: "/images/male.avif",
//     linkedin: "https://linkedin.com/in/",
//     description:
//       "Focuses on consistency, discipline and turning practice into real performance.",
//   },
// ];

// const alonePoints = [
//   "No Clear Direction",
//   "Trial and Error",
//   "Slow Progress",
//   "Lack of Feedback",
//   "Motivation Fades",
// ];

// const coachPoints = [
//   "Clear Roadmap",
//   "Proven Methods",
//   "Faster Improvement",
//   "Constructive Feedback",
//   "Consistent Motivation",
// ];

// export default function Coaches2() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".coach-grid-prow-heading, " +
//       ".coach-grid-prow-card, " +
//       ".coach-grid-prow-vs-box, " +
//       ".coach-grid-prow-quote, " +
//       ".coach-grid-prow-bottom-bar"
//     );

//     const vsItems = section.querySelectorAll(".coach-grid-prow-vs-item");

//     let hoverTimeout = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             targets.forEach((el) => el.classList.add("revealed"));
//             vsItems.forEach((el) => el.classList.add("revealed"));

//             if (hoverTimeout) clearTimeout(hoverTimeout);
//             hoverTimeout = setTimeout(() => {
//               targets.forEach((el) => el.classList.add("hover-ready"));
//               vsItems.forEach((el) => el.classList.add("hover-ready"));
//             }, 1500);
//           } else {
//             targets.forEach((el) => {
//               el.classList.remove("revealed", "hover-ready");
//             });
//             vsItems.forEach((el) => {
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
//     <section className="coach-grid-prow-section" ref={sectionRef}>
//       <div className="coach-grid-prow-container">
//         <h2 className="coach-grid-prow-heading">
//           MEET OUR{" "}
//           <span className="coach-grid-prow-heading-accent">
//             PERFORMANCE COACHES
//           </span>
//         </h2>
//         <span className="coach-grid-prow-underline"></span>

//         <div className="coach-grid-prow-row">
//           {/* ---------- 4 coach cards ---------- */}
//           <div className="coach-grid-prow-cards">
//             {coaches.map((coach, index) => (
//               <div className="coach-grid-prow-card" key={index} style={{ "--d": index }}>
//                 <div className="coach-grid-prow-image-wrap">
//                   <img
//                     src={coach.image}
//                     alt={coach.name}
//                     className="coach-grid-prow-image"
//                   />
//                   <a
//                     href={coach.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="coach-grid-prow-linkedin"
//                     aria-label={`${coach.name} LinkedIn`}
//                   >
//                     <svg viewBox="0 0 24 24" fill="#0a0a0a">
//                       <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
//                     </svg>
//                   </a>
//                 </div>

//                 <h3 className="coach-grid-prow-name">{coach.name}</h3>
//                 <p className="coach-grid-prow-position">{coach.position}</p>
//                 <span className="coach-grid-prow-card-divider"></span>
//                 <p className="coach-grid-prow-desc">{coach.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* ---------- Learning Alone vs Learning with a Prowess Coach ---------- */}
//           <div className="coach-grid-prow-vs-box">
//             <div className="coach-grid-prow-vs-header">
//               <span className="coach-grid-prow-vs-header-left">
//                 LEARNING ALONE
//               </span>
//               <span className="coach-grid-prow-vs-badge">VS</span>
//               <span className="coach-grid-prow-vs-header-right">
//                 LEARNING WITH A PROWESS COACH
//               </span>
//             </div>

//             <div className="coach-grid-prow-vs-body">
//               <ul className="coach-grid-prow-vs-list">
//                 {alonePoints.map((point, index) => (
//                   <li className="coach-grid-prow-vs-item" key={index} style={{ "--d": index }}>
//                     <span className="coach-grid-prow-cross-icon">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           d="M7 7l10 10M17 7 7 17"
//                           stroke="#ffffff"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                         />
//                       </svg>
//                     </span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>

//               <div className="coach-grid-prow-vs-center">
//                 <div className="coach-grid-prow-vs-dotted">
//                   <div className="coach-grid-prow-vs-circle">
//                     <span className="coach-grid-prow-vs-circle-half"></span>
//                     <span className="coach-grid-prow-vs-text">VS</span>
//                   </div>
//                 </div>
//               </div>

//               <ul className="coach-grid-prow-vs-list coach-grid-prow-vs-list-right">
//                 {coachPoints.map((point, index) => (
//                   <li className="coach-grid-prow-vs-item" key={index} style={{ "--d": index }}>
//                     <span className="coach-grid-prow-check-icon">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           d="M5 12.5 9.5 17 19 7"
//                           stroke="#0a0a0a"
//                           strokeWidth="2.2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="coach-grid-prow-quote">
//               <span className="coach-grid-prow-quote-icon">&#8220;</span>
//               <p className="coach-grid-prow-quote-text">
//                 A coach doesn&apos;t do the work for you.
//                 <br />
//                 A coach helps you become the{" "}
//                 <span className="coach-grid-prow-heading-accent">
//                   best version of yourself.
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Bottom bar: icon + description ---------- */}
//         <div className="coach-grid-prow-bottom-bar">
//           <span className="coach-grid-prow-bottom-icon">
//             <svg viewBox="0 0 24 24" fill="none">
//               <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
//               <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
//               <path
//                 d="M4 19c0-3 2.2-5 5-5s5 2 5 5"
//                 stroke="#f5b301"
//                 strokeWidth="1.4"
//                 strokeLinecap="round"
//               />
//               <path
//                 d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7"
//                 stroke="#f5b301"
//                 strokeWidth="1.4"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </span>
//           <p className="coach-grid-prow-bottom-text">
//             Different strengths. One mission. To help you{" "}
//             <span className="coach-grid-prow-heading-accent">
//               Grow, Lead
//             </span>{" "}
//             &amp; <span className="coach-grid-prow-heading-accent">Succeed</span>.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }













// Dyanamic Code loading issue tha and aniamtion lagane creative karne ke phele ka code
// import { useEffect, useRef, useState } from "react";
// import "./Coaches2.css";

// const COACHES_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_performance_coaches";
// const LEARNING_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_learning_alone";

// // API hamesha naya data pehle bhejta hai, lekin purana data hi pehle card par dikhana hai
// function sortOldestFirst(list) {
//   return [...list].sort((a, b) => {
//     const idA = Number(a.id) || 0;
//     const idB = Number(b.id) || 0;
//     return idA - idB;
//   });
// }

// // "heading" field JSON-stringified array hota hai (jaise '["check one","check two"]'),
// // jaisa admin panel ke add-form me JSON.stringify(headings) se bheja jata hai
// function parseHeadingList(raw) {
//   if (!raw) return [];
//   try {
//     const parsed = JSON.parse(raw);
//     if (Array.isArray(parsed)) {
//       return parsed.map((v) => String(v).trim()).filter(Boolean);
//     }
//   } catch (e) {
//     /* fall through */
//   }
//   return [];
// }

// // Quote ("description" field, learning_type = "learning alone" wale record se):
// // pehli line WHITE, baaki YELLOW(accent) — jaise pehle
// // "A coach doesn't do the work for you." white tha aur
// // "A coach helps you become the best version of yourself." accent tha
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

// export default function Coaches2() {
//   const sectionRef = useRef(null);

//   const [coaches, setCoaches] = useState([]);
//   const [alonePoints, setAlonePoints] = useState([]);
//   const [coachPoints, setCoachPoints] = useState([]);
//   const [quoteText, setQuoteText] = useState("");
//   const [loading, setLoading] = useState(true);

//   // ---------- FETCH: coach cards ----------
//   useEffect(() => {
//     fetch(COACHES_API)
//       .then((res) => res.json())
//       .then((res) => {
//         const list = Array.isArray(res?.data) ? res.data : [];
//         setCoaches(sortOldestFirst(list));
//       })
//       .catch((err) => console.error("Coaches2 (performance coaches) API error:", err));
//   }, []);

//   // ---------- FETCH: learning alone vs with-coach lists ----------
//   useEffect(() => {
//     fetch(LEARNING_API)
//       .then((res) => res.json())
//       .then((res) => {
//         const list = Array.isArray(res?.data) ? res.data : [];

//         // API newest-first bhejta hai, isliye har learning_type ka PEHLA (yani sabse naya) record use karo
//         let aloneRecord = null;
//         let coachRecord = null;

//         list.forEach((item) => {
//           const type = (item.learning_type || "").trim().toLowerCase();
//           if (type === "learning alone" && !aloneRecord) {
//             aloneRecord = item;
//           } else if (type === "learning with coach" && !coachRecord) {
//             coachRecord = item;
//           }
//         });

//         setAlonePoints(parseHeadingList(aloneRecord?.heading));
//         setCoachPoints(parseHeadingList(coachRecord?.heading));
//         setQuoteText(aloneRecord?.description || "");
//       })
//       .catch((err) => console.error("Coaches2 (learning alone) API error:", err))
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".coach-grid-prow-heading, " +
//       ".coach-grid-prow-card, " +
//       ".coach-grid-prow-vs-box, " +
//       ".coach-grid-prow-quote, " +
//       ".coach-grid-prow-bottom-bar"
//     );

//     const vsItems = section.querySelectorAll(".coach-grid-prow-vs-item");

//     let hoverTimeout = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             targets.forEach((el) => el.classList.add("revealed"));
//             vsItems.forEach((el) => el.classList.add("revealed"));

//             if (hoverTimeout) clearTimeout(hoverTimeout);
//             hoverTimeout = setTimeout(() => {
//               targets.forEach((el) => el.classList.add("hover-ready"));
//               vsItems.forEach((el) => el.classList.add("hover-ready"));
//             }, 1500);
//           } else {
//             targets.forEach((el) => {
//               el.classList.remove("revealed", "hover-ready");
//             });
//             vsItems.forEach((el) => {
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
//     // data load hone ke baad DOM update hota hai, isliye observer ko re-run karo
//   }, [coaches, alonePoints, coachPoints, quoteText]);

//   if (loading) {
//     return <section className="coach-grid-prow-section" ref={sectionRef}></section>;
//   }

//   const { line1: quoteLine1, line2: quoteLine2 } = splitQuote(quoteText);

//   return (
//     // <section className="coach-grid-prow-section" ref={sectionRef}>
//     <section id="coaches2-section" className="coach-grid-prow-section" ref={sectionRef}>
//       <div className="coach-grid-prow-container">
//         {/* ---------- Heading: 100% STATIC, jaisa bataya gaya ---------- */}
//         <h2 className="coach-grid-prow-heading">
//           MEET OUR{" "}
//           <span className="coach-grid-prow-heading-accent">
//             PERFORMANCE COACHES
//           </span>
//         </h2>
//         <span className="coach-grid-prow-underline"></span>

//         <div className="coach-grid-prow-row">
//           {/* ---------- Coach cards (dynamic) ---------- */}
//           <div className="coach-grid-prow-cards">
//             {coaches.map((coach, index) => (
//               <div className="coach-grid-prow-card" key={coach.id ?? index} style={{ "--d": index }}>
//                 <div className="coach-grid-prow-image-wrap">
//                   <img
//                     src={coach.image_path}
//                     alt={coach.full_name}
//                     className="coach-grid-prow-image"
//                   />
//                   <a
//                     href={coach.linkdin_link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="coach-grid-prow-linkedin"
//                     aria-label={`${coach.full_name} LinkedIn`}
//                   >
//                     <svg viewBox="0 0 24 24" fill="#0a0a0a">
//                       <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
//                     </svg>
//                   </a>
//                 </div>

//                 <h3 className="coach-grid-prow-name">{coach.full_name}</h3>
//                 <p className="coach-grid-prow-position">{coach.position}</p>
//                 <span className="coach-grid-prow-card-divider"></span>
//                 <p className="coach-grid-prow-desc">{coach.description}</p>
//               </div>
//             ))}
//           </div>

//           {/* ---------- Learning Alone vs Learning with a Prowess Coach ---------- */}
//           <div className="coach-grid-prow-vs-box">
//             {/* Header text: 100% STATIC, jaisa bataya gaya */}
//             <div className="coach-grid-prow-vs-header">
//               <span className="coach-grid-prow-vs-header-left">
//                 LEARNING ALONE
//               </span>
//               <span className="coach-grid-prow-vs-badge">VS</span>
//               <span className="coach-grid-prow-vs-header-right">
//                 LEARNING WITH A PROWESS COACH
//               </span>
//             </div>

//             <div className="coach-grid-prow-vs-body">
//               <ul className="coach-grid-prow-vs-list">
//                 {alonePoints.map((point, index) => (
//                   <li className="coach-grid-prow-vs-item" key={index} style={{ "--d": index }}>
//                     <span className="coach-grid-prow-cross-icon">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           d="M7 7l10 10M17 7 7 17"
//                           stroke="#ffffff"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                         />
//                       </svg>
//                     </span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>

//               <div className="coach-grid-prow-vs-center">
//                 <div className="coach-grid-prow-vs-dotted">
//                   <div className="coach-grid-prow-vs-circle">
//                     <span className="coach-grid-prow-vs-circle-half"></span>
//                     <span className="coach-grid-prow-vs-text">VS</span>
//                   </div>
//                 </div>
//               </div>

//               <ul className="coach-grid-prow-vs-list coach-grid-prow-vs-list-right">
//                 {coachPoints.map((point, index) => (
//                   <li className="coach-grid-prow-vs-item" key={index} style={{ "--d": index }}>
//                     <span className="coach-grid-prow-check-icon">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           d="M5 12.5 9.5 17 19 7"
//                           stroke="#0a0a0a"
//                           strokeWidth="2.2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Quote: ab dynamic hai (learning_type="learning alone" record ka description) */}
//             <div className="coach-grid-prow-quote">
//               <span className="coach-grid-prow-quote-icon">&#8220;</span>
//               <p className="coach-grid-prow-quote-text">
//                 {quoteLine1}
//                 {quoteLine2 && (
//                   <>
//                     <br />
//                     <span className="coach-grid-prow-heading-accent">
//                       {quoteLine2}
//                     </span>
//                   </>
//                 )}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Bottom bar: 100% STATIC (not part of this request) ---------- */}
//         <div className="coach-grid-prow-bottom-bar">
//           <span className="coach-grid-prow-bottom-icon">
//             <svg viewBox="0 0 24 24" fill="none">
//               <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
//               <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
//               <path
//                 d="M4 19c0-3 2.2-5 5-5s5 2 5 5"
//                 stroke="#f5b301"
//                 strokeWidth="1.4"
//                 strokeLinecap="round"
//               />
//               <path
//                 d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7"
//                 stroke="#f5b301"
//                 strokeWidth="1.4"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </span>
//           <p className="coach-grid-prow-bottom-text">
//             Different strengths. One mission. To help you{" "}
//             <span className="coach-grid-prow-heading-accent">
//               Grow, Lead
//             </span>{" "}
//             &amp; <span className="coach-grid-prow-heading-accent">Succeed</span>.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }














// Dyanamic Code hai Loading Issue solve and animation creative add karne ke bad wala code
// Dyanamic Code
import { useEffect, useRef, useState } from "react";
import "./Coaches2.css";

const COACHES_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_performance_coaches";
const LEARNING_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_learning_alone";

// API hamesha naya data pehle bhejta hai, lekin purana data hi pehle card par dikhana hai
function sortOldestFirst(list) {
  return [...list].sort((a, b) => {
    const idA = Number(a.id) || 0;
    const idB = Number(b.id) || 0;
    return idA - idB;
  });
}

// "heading" field JSON-stringified array hota hai (jaise '["check one","check two"]'),
// jaisa admin panel ke add-form me JSON.stringify(headings) se bheja jata hai
function parseHeadingList(raw) {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.map((v) => String(v).trim()).filter(Boolean);
    }
  } catch (e) {
    /* fall through */
  }
  return [];
}

// Quote ("description" field, learning_type = "learning alone" wale record se):
// pehli line WHITE, baaki YELLOW(accent) — jaise pehle
// "A coach doesn't do the work for you." white tha aur
// "A coach helps you become the best version of yourself." accent tha
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

export default function Coaches2() {
  const sectionRef = useRef(null);

  const [coaches, setCoaches] = useState([]);
  const [alonePoints, setAlonePoints] = useState([]);
  const [coachPoints, setCoachPoints] = useState([]);
  const [quoteText, setQuoteText] = useState("");
  const [loading, setLoading] = useState(true);

  // ---------- FETCH: both APIs together, so loading reflects BOTH
  // (pehle alag-alag effects the, isliye kabhi ek jaldi aa jaata tha
  // aur doosra slow hone par section adhoora/blank dikhta tha) ----------
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    Promise.all([
      fetch(COACHES_API).then((res) => res.json()),
      fetch(LEARNING_API).then((res) => res.json()),
    ])
      .then(([coachesRes, learningRes]) => {
        if (!isMounted) return;

        const coachesList = Array.isArray(coachesRes?.data) ? coachesRes.data : [];
        setCoaches(sortOldestFirst(coachesList));

        const learningList = Array.isArray(learningRes?.data) ? learningRes.data : [];

        // API newest-first bhejta hai, isliye har learning_type ka PEHLA
        // (yani sabse naya) record use karo
        let aloneRecord = null;
        let coachRecord = null;

        learningList.forEach((item) => {
          const type = (item.learning_type || "").trim().toLowerCase();
          if (type === "learning alone" && !aloneRecord) {
            aloneRecord = item;
          } else if (type === "learning with coach" && !coachRecord) {
            coachRecord = item;
          }
        });

        setAlonePoints(parseHeadingList(aloneRecord?.heading));
        setCoachPoints(parseHeadingList(coachRecord?.heading));
        setQuoteText(aloneRecord?.description || "");
      })
      .catch((err) => console.error("Coaches2 API error:", err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".coach-grid-prow-heading, " +
      ".coach-grid-prow-card, " +
      ".coach-grid-prow-vs-box, " +
      ".coach-grid-prow-quote, " +
      ".coach-grid-prow-bottom-bar"
    );

    const vsItems = section.querySelectorAll(".coach-grid-prow-vs-item");

    let hoverTimeout = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            targets.forEach((el) => el.classList.add("revealed"));
            vsItems.forEach((el) => el.classList.add("revealed"));

            if (hoverTimeout) clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
              targets.forEach((el) => el.classList.add("hover-ready"));
              vsItems.forEach((el) => el.classList.add("hover-ready"));
            }, 1500);
          } else {
            targets.forEach((el) => {
              el.classList.remove("revealed", "hover-ready");
            });
            vsItems.forEach((el) => {
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
    // data load hone ke baad DOM update hota hai, isliye observer ko re-run karo
  }, [coaches, alonePoints, coachPoints, quoteText]);

  if (loading) {
    return (
      <section id="coaches2-section" className="coach-grid-prow-section" ref={sectionRef}>
        <div className="coach-grid-prow-container">
          <div className="coach-grid-prow-loading">
            <span className="coach-grid-prow-spinner"></span>
            <p className="coach-grid-prow-loading-text">Loading coaches…</p>
          </div>
        </div>
      </section>
    );
  }

  const { line1: quoteLine1, line2: quoteLine2 } = splitQuote(quoteText);

  return (
    // <section className="coach-grid-prow-section" ref={sectionRef}>
    <section id="coaches2-section" className="coach-grid-prow-section" ref={sectionRef}>
      <div className="coach-grid-prow-container">
        {/* ---------- Heading: 100% STATIC, jaisa bataya gaya ---------- */}
        <h2 className="coach-grid-prow-heading">
          MEET OUR{" "}
          <span className="coach-grid-prow-heading-accent">
            PERFORMANCE COACHES
          </span>
        </h2>
        <span className="coach-grid-prow-underline"></span>

        <div className="coach-grid-prow-row">
          {/* ---------- Coach cards (dynamic) ---------- */}
          <div className="coach-grid-prow-cards">
            {coaches.map((coach, index) => (
              <div className="coach-grid-prow-card" key={coach.id ?? index} style={{ "--d": index }}>
                <div className="coach-grid-prow-image-wrap">
                  <img
                    src={coach.image_path}
                    alt={coach.full_name}
                    className="coach-grid-prow-image"
                  />
                  <a
                    href={coach.linkdin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="coach-grid-prow-linkedin"
                    aria-label={`${coach.full_name} LinkedIn`}
                  >
                    <svg viewBox="0 0 24 24" fill="#0a0a0a">
                      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                  </a>
                </div>

                <h3 className="coach-grid-prow-name">{coach.full_name}</h3>
                <p className="coach-grid-prow-position">{coach.position}</p>
                <span className="coach-grid-prow-card-divider"></span>
                <p className="coach-grid-prow-desc">{coach.description}</p>
              </div>
            ))}
          </div>

          {/* ---------- Learning Alone vs Learning with a Prowess Coach ---------- */}
          <div className="coach-grid-prow-vs-box">
            {/* Header text: 100% STATIC, jaisa bataya gaya */}
            <div className="coach-grid-prow-vs-header">
              <span className="coach-grid-prow-vs-header-left">
                LEARNING ALONE
              </span>
              <span className="coach-grid-prow-vs-badge">VS</span>
              <span className="coach-grid-prow-vs-header-right">
                LEARNING WITH A PROWESS COACH
              </span>
            </div>

            <div className="coach-grid-prow-vs-body">
              <ul className="coach-grid-prow-vs-list">
                {alonePoints.map((point, index) => (
                  <li className="coach-grid-prow-vs-item" key={index} style={{ "--d": index }}>
                    <span className="coach-grid-prow-cross-icon">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M7 7l10 10M17 7 7 17"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="coach-grid-prow-vs-center">
                <div className="coach-grid-prow-vs-dotted">
                  <div className="coach-grid-prow-vs-circle">
                    <span className="coach-grid-prow-vs-circle-half"></span>
                    <span className="coach-grid-prow-vs-text">VS</span>
                  </div>
                </div>
              </div>

              <ul className="coach-grid-prow-vs-list coach-grid-prow-vs-list-right">
                {coachPoints.map((point, index) => (
                  <li className="coach-grid-prow-vs-item" key={index} style={{ "--d": index }}>
                    <span className="coach-grid-prow-check-icon">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M5 12.5 9.5 17 19 7"
                          stroke="#0a0a0a"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote: ab dynamic hai (learning_type="learning alone" record ka description) */}
            <div className="coach-grid-prow-quote">
              <span className="coach-grid-prow-quote-icon">&#8220;</span>
              <p className="coach-grid-prow-quote-text">
                {quoteLine1}
                {quoteLine2 && (
                  <>
                    <br />
                    <span className="coach-grid-prow-heading-accent">
                      {quoteLine2}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* ---------- Bottom bar: 100% STATIC (not part of this request) ---------- */}
        <div className="coach-grid-prow-bottom-bar">
          <span className="coach-grid-prow-bottom-icon">
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
            </svg>
          </span>
          <p className="coach-grid-prow-bottom-text">
            Different strengths. One mission. To help you{" "}
            <span className="coach-grid-prow-heading-accent">
              Grow, Lead
            </span>{" "}
            &amp; <span className="coach-grid-prow-heading-accent">Succeed</span>.
          </p>
        </div>
      </div>
    </section>
  );
}