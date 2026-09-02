// import { useEffect, useRef } from "react";
// import "./About4.css";

// const steps = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="14" cy="5" r="1.8" stroke="#000" strokeWidth="1.4" />
//         <path d="M9 20l1.5-5.5L8 12l2-4.5 3 1 2.5 2.5-1 4 3 2.5" stroke="#000" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M10.5 14.5 7 16" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
//       </svg>
//     ),
//     title: "PRACTICE",
//     description: "Do it in real situations.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M4 6.5h16v9H9.5L6 19v-3.5H4v-9z" stroke="#000" strokeWidth="1.4" strokeLinejoin="round" />
//         <circle cx="9" cy="11" r="0.9" fill="#000" />
//         <circle cx="12" cy="11" r="0.9" fill="#000" />
//         <circle cx="15" cy="11" r="0.9" fill="#000" />
//       </svg>
//     ),
//     title: "FEEDBACK",
//     description: "Get honest feedback.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M9 16.5h6M10 19h4" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
//         <path d="M12 4a5.5 5.5 0 0 0-3 10.1c.5.35.8.9.8 1.5v.4h4.4v-.4c0-.6.3-1.15.8-1.5A5.5 5.5 0 0 0 12 4z" stroke="#000" strokeWidth="1.4" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "REFLECTION",
//     description: "Understand what worked and what didn't.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M4 17l5-5 4 4 7-8" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M15 8h5v5" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "IMPROVEMENT",
//     description: "Build, refine and get better.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="7.5" stroke="#000" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="4" stroke="#000" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="1" fill="#000" />
//       </svg>
//     ),
//     title: "REAL WORLD",
//     subtitle: "APPLICATION",
//     description: "Perform where it matters.",
//   },
// ];

// export default function About4() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".belief-prow-heading-block, " +
//       ".belief-prow-step, " +
//       ".belief-prow-arrow, " +
//       ".belief-prow-divider, " +
//       ".belief-prow-quote"
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
//     <section className="belief-prow-section" ref={sectionRef}>
//       <div className="belief-prow-container">
//         {/* ---------- Left: heading + description ---------- */}
//         <div className="belief-prow-heading-block">
//           <h2 className="belief-prow-title">3. OUR BELIEF</h2>
//           <span className="belief-prow-underline"></span>

//           <p className="belief-prow-bold-line">
//             Performance is not inherited.
//             <br />
//             It is <span className="belief-prow-accent">developed.</span>
//           </p>

//           <p className="belief-prow-desc">
//             It doesn&apos;t come from lectures or notes. It comes from doing,
//             failing, learning, getting feedback and improving again.
//           </p>
//         </div>

//         {/* ---------- Right: 5 step circles + divider + quote, one row ---------- */}
//         <div className="belief-prow-row">
//           {steps.map((step, index) => (
//             <div className="belief-prow-step-wrap" key={index}>
//               <div className="belief-prow-step" style={{ "--d": index }}>
//                 <div className="belief-prow-icon-circle">{step.icon}</div>
//                 <h3 className="belief-prow-step-title">
//                   {step.title}
//                   {step.subtitle && (
//                     <>
//                       <br />
//                       {step.subtitle}
//                     </>
//                   )}
//                 </h3>
//                 <p className="belief-prow-step-desc">{step.description}</p>
//               </div>

//               {index < steps.length - 1 && (
//                 <span className="belief-prow-arrow" aria-hidden="true" style={{ "--d": index }}>
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M5 12h13M13 6l6 6-6 6"
//                       stroke="#000"
//                       strokeWidth="1.8"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//               )}
//             </div>
//           ))}

//           <span className="belief-prow-divider"></span>

//           <div className="belief-prow-quote">
//             <span className="belief-prow-quote-icon">&#8220;</span>
//             <p className="belief-prow-quote-text">
//               Performance is a habit, not an event. At Prowess,{" "}
//               <span className="belief-prow-accent">we build that habit.</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }














// Dyanamic code
import { useEffect, useRef, useState } from "react";
import "./About4.css";

const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_our_belief";

// API hamesha naya data pehle bhejta hai (id/created_at descending),
// lekin purana data hi pehle step/icon par dikhana hai (jaisa About2/About3/About5 me kiya tha)
function sortOldestFirst(list) {
  return [...list].sort((a, b) => {
    const idA = Number(a.id) || 0;
    const idB = Number(b.id) || 0;
    return idA - idB;
  });
}

// "heading" / "quote" jaise fields ko 2 lines me todta hai —
// pehle newline se try karta hai, warna sentence (. ! ?) ke hisaab se
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

// Line ke andar sirf AAKHRI word accent(yellow) hoga, baaki normal(black)
// (jaise "It is developed." me sirf "developed." yellow tha)
function splitLastWord(text) {
  const words = (text || "").trim().split(/\s+/).filter(Boolean);
  if (words.length <= 1) return { normal: "", accent: text || "" };
  return {
    normal: words.slice(0, -1).join(" "),
    accent: words[words.length - 1],
  };
}

// ✅ Icons hamesha STATIC rahenge, index ke hisaab se cycle honge
// (Practice, Feedback, Reflection, Improvement, Real World — usi order me)
const stepIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="14" cy="5" r="1.8" stroke="#000" strokeWidth="1.4" />
    <path d="M9 20l1.5-5.5L8 12l2-4.5 3 1 2.5 2.5-1 4 3 2.5" stroke="#000" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.5 14.5 7 16" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 6.5h16v9H9.5L6 19v-3.5H4v-9z" stroke="#000" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="9" cy="11" r="0.9" fill="#000" />
    <circle cx="12" cy="11" r="0.9" fill="#000" />
    <circle cx="15" cy="11" r="0.9" fill="#000" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M9 16.5h6M10 19h4" stroke="#000" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 4a5.5 5.5 0 0 0-3 10.1c.5.35.8.9.8 1.5v.4h4.4v-.4c0-.6.3-1.15.8-1.5A5.5 5.5 0 0 0 12 4z" stroke="#000" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 17l5-5 4 4 7-8" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8h5v5" stroke="#000" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="7.5" stroke="#000" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="#000" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1" fill="#000" />
  </svg>,
];

export default function About4() {
  const sectionRef = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        const list = Array.isArray(res?.data) ? res.data : [];
        setItems(sortOldestFirst(list));
      })
      .catch((err) => console.error("About4 (Our Belief) API error:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".belief-prow-heading-block, " +
      ".belief-prow-step, " +
      ".belief-prow-arrow, " +
      ".belief-prow-divider, " +
      ".belief-prow-quote"
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
            }, 1500);
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
    // items load hone ke baad DOM update hota hai, isliye observer ko re-run karo
  }, [items]);

  if (loading) {
    return <section className="belief-prow-section" ref={sectionRef}></section>;
  }

  // main_heading, heading, description, quote sab items me repeat hote hain (jaise pichli APIs me),
  // isliye pehle (sabse purane) item se le lete hain. sub_heading/sub_description HAR item me
  // ALAG hote hain — wahi har icon ke niche wala title + description hai.
  const first = items[0] || {};
  const mainHeading = first.main_heading || "";
  const description = first.description || "";

  // "heading": line1 normal, line2 ke andar aakhri word accent (jaise "It is developed.")
  const { line1: headingLine1, line2: headingLine2 } = splitTwoLines(first.heading);
  const { normal: headingLine2Normal, accent: headingLine2Accent } = splitLastWord(headingLine2);

  // "quote": line1 normal, line2 poora accent (jaise "we build that habit.")
  const { line1: quoteLine1, line2: quoteLine2 } = splitTwoLines(first.quote);

  return (
    <section className="belief-prow-section" ref={sectionRef}>
      <div className="belief-prow-container">
        {/* ---------- Left: heading + description ---------- */}
        <div className="belief-prow-heading-block">
          <h2 className="belief-prow-title">{mainHeading}</h2>
          <span className="belief-prow-underline"></span>

          <p className="belief-prow-bold-line">
            {headingLine1}
            {headingLine2 && (
              <>
                <br />
                {headingLine2Normal}{" "}
                <span className="belief-prow-accent">{headingLine2Accent}</span>
              </>
            )}
          </p>

          <p className="belief-prow-desc">{description}</p>
        </div>

        {/* ---------- Right: step circles + divider + quote, one row ---------- */}
        <div className="belief-prow-row">
          {items.map((item, index) => (
            <div className="belief-prow-step-wrap" key={item.id ?? index}>
              <div className="belief-prow-step" style={{ "--d": index }}>
                <div className="belief-prow-icon-circle">
                  {stepIcons[index % stepIcons.length]}
                </div>
                <h3 className="belief-prow-step-title">{item.sub_heading}</h3>
                <p className="belief-prow-step-desc">{item.sub_description}</p>
              </div>

              {index < items.length - 1 && (
                <span className="belief-prow-arrow" aria-hidden="true" style={{ "--d": index }}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h13M13 6l6 6-6 6"
                      stroke="#000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}

          <span className="belief-prow-divider"></span>

          <div className="belief-prow-quote">
            <span className="belief-prow-quote-icon">&#8220;</span>
            <p className="belief-prow-quote-text">
              {quoteLine1}
              {quoteLine2 && (
                <>
                  {" "}
                  <span className="belief-prow-accent">{quoteLine2}</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}