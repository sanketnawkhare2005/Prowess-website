// import { useEffect, useRef } from "react";
// import "./Home4.css";

// const methodSteps = [
//   {
//     icon: "fa-flag",
//     title: "CHALLENGE",
//     desc: "Understand the real world situation",
//   },
//   {
//     icon: "fa-chart-line",
//     title: "EXECUTE",
//     desc: "Take action with clarity and structure",
//   },
//   {
//     icon: "fa-magnifying-glass",
//     title: "REFLECT",
//     desc: "Analyse your experience honestly",
//   },
//   {
//     icon: "fa-comment-dots",
//     title: "FEEDBACK",
//     desc: "Get precise feedback that matters",
//   },
//   {
//     icon: "fa-arrow-up",
//     title: "IMPROVE",
//     desc: "Refine skills and adjust mindset",
//   },
//   {
//     icon: "fa-rotate",
//     title: "REPEAT",
//     desc: "Make it a habit, not an event",
//   },
//   {
//     icon: "fa-bullseye",
//     title: "PERFORMANCE",
//     desc: "Deliver results consistently in any situation",
//     highlight: true,
//   },
// ];

// export default function Home4() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".method-pro__intro, .method-pro__item, .method-pro__arrow"
//     );

//     let hoverTimeout = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Phase 1: trigger reveal
//             targets.forEach((el) => el.classList.add("revealed"));

//             // Phase 2: lock values + enable hover
//             if (hoverTimeout) clearTimeout(hoverTimeout);
//             hoverTimeout = setTimeout(() => {
//               targets.forEach((el) => el.classList.add("hover-ready"));
//             }, 1500);
//           } else {
//             // Phase 3: RESET — remove classes so animation replays on next scroll
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
//     <section className="method-pro" ref={sectionRef}>
//       <div className="method-pro__container">
//         <div className="method-pro__intro">
//           <h2 className="method-pro__heading">THE PROWESS METHOD</h2>
//           <p className="method-pro__desc">
//             A simple cycle that creates real world performance.
//           </p>
//         </div>

//         <div className="method-pro__flow">
//           {methodSteps.map((step, index) => (
//             <div className="method-pro__item-wrap" key={step.title}>
//               <div
//                 className="method-pro__item"
//                 style={{ "--d": index }}
//               >
//                 <div
//                   className={`method-pro__icon ${
//                     step.highlight ? "method-pro__icon--highlight" : ""
//                   }`}
//                 >
//                   <i className={`fa-solid ${step.icon}`}></i>
//                 </div>
//                 <h3
//                   className={`method-pro__title ${
//                     step.highlight ? "method-pro__title--highlight" : ""
//                   }`}
//                 >
//                   {step.title}
//                 </h3>
//                 <p className="method-pro__step-desc">{step.desc}</p>
//               </div>

//               {index < methodSteps.length - 1 && (
//                 <span
//                   className="method-pro__arrow"
//                   style={{ "--d": index }}
//                 >
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }















// Dynamic code old dyna,ic creative animation  new lagane ke phele wala code 
// import { useEffect, useRef, useState } from "react";
// import "./Home4.css";

// /* ══════════════════════════════════════════════════════════════
//    STATIC ICONS — same order, kabhi change nahi hoga
//    ══════════════════════════════════════════════════════════════ */
// const staticIcons = [
//   "fa-flag",            // 1st icon
//   "fa-chart-line",      // 2nd icon
//   "fa-magnifying-glass",// 3rd icon
//   "fa-comment-dots",    // 4th icon
//   "fa-arrow-up",        // 5th icon
//   "fa-rotate",          // 6th icon
//   "fa-bullseye",        // 7th icon (last = highlight)
// ];

// /* ══════════════════════════════════════════════════════════════
//    MAIN COMPONENT
//    ══════════════════════════════════════════════════════════════ */
// export default function Home4() {
//   const [detail, setDetail] = useState({ heading: "", description: "" });
//   const [steps, setSteps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const sectionRef = useRef(null);

//   /* ── Fetch APIs ── */
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         /* ───── 1. DETAIL API (left heading block) ───── */
//         try {
//           const detailRes = await fetch(
//             "https://workfit.co.in/provess/Prowess/index.php/API/list_method_details"
//           );
//           const detailJson = await detailRes.json();
//           if (detailJson.success === "1" && detailJson.data) {
//             const d = Array.isArray(detailJson.data)
//               ? detailJson.data[0]
//               : detailJson.data;
//             if (d.main_heading) {
//               setDetail({
//                 heading: d.main_heading,
//                 description: d.main_description || "",
//               });
//             }
//           }
//         } catch (e) {
//           /* detail fail → steps anyway dikhenge */
//         }

//         /* ───── 2. STEPS API ───── */
//         const stepsRes = await fetch(
//           "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_method"
//         );
//         const stepsJson = await stepsRes.json();

//         if (stepsJson.success === "1" && stepsJson.data) {
//           let data = Array.isArray(stepsJson.data)
//             ? stepsJson.data
//             : [stepsJson.data];

//           /* Ascending: admin ne jo pehle dala wo first icon par */
//           data.sort((a, b) => Number(a.id) - Number(b.id));

//           setSteps(data);
//         }
//       } catch (err) {
//         console.error("Home4 API error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   /* ── Intersection Observer (animations) ── */
//   useEffect(() => {
//     if (loading || steps.length === 0) return;

//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".method-pro__intro, .method-pro__item, .method-pro__arrow"
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
//   }, [loading, steps]);

//   /* ── Loading / Empty guard ── */
//   if (loading || steps.length === 0) return null;

//   return (
//     <section className="method-pro" ref={sectionRef}>
//       <div className="method-pro__container">
//         {/* ───── Left: heading + description (from detail API) ───── */}
//         <div className="method-pro__intro">
//           <h2 className="method-pro__heading">{detail.heading}</h2>
//           <p className="method-pro__desc">{detail.description}</p>
//         </div>

//         {/* ───── Flow: steps with static icons ───── */}
//         <div className="method-pro__flow">
//           {steps.map((step, index) => {
//             const isLast = index === steps.length - 1;
//             return (
//               <div className="method-pro__item-wrap" key={step.id || index}>
//                 <div
//                   className="method-pro__item"
//                   style={{ "--d": index }}
//                 >
//                   <div
//                     className={`method-pro__icon${
//                       isLast ? " method-pro__icon--highlight" : ""
//                     }`}
//                   >
//                     <i
//                       className={`fa-solid ${
//                         staticIcons[index % staticIcons.length]
//                       }`}
//                     ></i>
//                   </div>
//                   <h3
//                     className={`method-pro__title${
//                       isLast ? " method-pro__title--highlight" : ""
//                     }`}
//                   >
//                     {step.sub_heading}
//                   </h3>
//                   <p className="method-pro__step-desc">
//                     {step.sub_description}
//                   </p>
//                 </div>

//                 {index < steps.length - 1 && (
//                   <span
//                     className="method-pro__arrow"
//                     style={{ "--d": index }}
//                   >
//                     <i className="fa-solid fa-arrow-right"></i>
//                   </span>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }











// Dyanamic Code 24/07/2026 client ne creative or animation lagane bolne ke bad wala code
// Dynamic code
import { useEffect, useRef, useState } from "react";
import "./Home4.css";

/* ══════════════════════════════════════════════════════════════
   STATIC ICONS — same order, kabhi change nahi hoga
   ══════════════════════════════════════════════════════════════ */
const staticIcons = [
  "fa-flag",             // 1st icon
  "fa-chart-line",       // 2nd icon
  "fa-magnifying-glass", // 3rd icon
  "fa-comment-dots",     // 4th icon
  "fa-arrow-up",         // 5th icon
  "fa-rotate",           // 6th icon
  "fa-bullseye",         // 7th icon (last = highlight)
];

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function Home4() {
  const [detail, setDetail] = useState({ heading: "", description: "" });
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  /* ── Fetch APIs ── */
  useEffect(() => {
    const fetchData = async () => {
      try {
        /* ───── 1. DETAIL API (left heading block) ───── */
        try {
          const detailRes = await fetch(
            "https://workfit.co.in/provess/Prowess/index.php/API/list_method_details"
          );
          const detailJson = await detailRes.json();
          if (detailJson.success === "1" && detailJson.data) {
            const d = Array.isArray(detailJson.data)
              ? detailJson.data[0]
              : detailJson.data;
            if (d.main_heading) {
              setDetail({
                heading: d.main_heading,
                description: d.main_description || "",
              });
            }
          }
        } catch (e) {
          /* detail fail → steps anyway dikhenge */
        }

        /* ───── 2. STEPS API ───── */
        const stepsRes = await fetch(
          "https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_method"
        );
        const stepsJson = await stepsRes.json();

        if (stepsJson.success === "1" && stepsJson.data) {
          let data = Array.isArray(stepsJson.data)
            ? stepsJson.data
            : [stepsJson.data];

          /* Ascending: admin ne jo pehle dala wo first icon par */
          data.sort((a, b) => Number(a.id) - Number(b.id));

          setSteps(data);
        }
      } catch (err) {
        console.error("Home4 API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* ── Intersection Observer (animations) ── */
  useEffect(() => {
    if (loading || steps.length === 0) return;

    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".method-pro__intro, .method-pro__item, .method-pro__arrow"
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
  }, [loading, steps]);

  /* ── Loading / Empty guard ── */
  if (loading || steps.length === 0) return null;

  return (
    <section className="method-pro" ref={sectionRef}>
      <div className="method-pro__container">
        {/* ───── Left: heading + description (from detail API) ───── */}
        <div className="method-pro__intro">
          <h2 className="method-pro__heading">{detail.heading}</h2>
          <p className="method-pro__desc">{detail.description}</p>
        </div>

        {/* ───── Flow: steps with static icons ───── */}
        <div className="method-pro__flow">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const numberLabel = String(index + 1).padStart(2, "0");

            return (
              <div className="method-pro__item-wrap" key={step.id || index}>
                <div className="method-pro__item" style={{ "--d": index }}>
                  <span className="method-pro__num">{numberLabel}</span>

                  <div className="method-pro__icon-wrap">
                    <div
                      className={`method-pro__icon${
                        isLast ? " method-pro__icon--highlight" : ""
                      }`}
                    >
                      <i
                        className={`fa-solid ${
                          staticIcons[index % staticIcons.length]
                        }`}
                      ></i>
                    </div>
                  </div>

                  <h3
                    className={`method-pro__title${
                      isLast ? " method-pro__title--highlight" : ""
                    }`}
                  >
                    {step.sub_heading}
                  </h3>
                  <p className="method-pro__step-desc">
                    {step.sub_description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <span className="method-pro__arrow" style={{ "--d": index }}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}