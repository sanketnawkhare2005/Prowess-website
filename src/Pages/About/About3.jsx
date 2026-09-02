// import { useEffect, useRef } from "react";
// import "./About3.css";

// const gaps = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 5.5C6 4.3 9 4 12 5.2c3-1.2 6-.9 8 .3v13c-2-1.2-5-1.5-8-.3-3-1.2-6-.9-8 .3v-13z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path d="M12 5.2v13" stroke="#f5b301" strokeWidth="1.4" />
//       </svg>
//     ),
//     titleTop: "KNOWLEDGE",
//     titleBottom: "PERFORMANCE",
//     description:
//       "Students know the theory, but struggle to apply it under real pressure.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="4" stroke="#f5b301" strokeWidth="1.4" />
//         <path
//           d="M9 11.5 7.5 20l4.5-2 4.5 2-1.5-8.5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     titleTop: "DEGREES",
//     titleBottom: "READINESS",
//     description:
//       "A degree gets you in. Performance is what keeps you there.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M8 10c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 1.6-.8 2.6-1.6 3.4-.6.6-1 1-1 1.8v.8H10.6v-.8c0-.8-.4-1.2-1-1.8C8.8 12.6 8 11.6 8 10z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M10.5 18.5h3M11 20.5h2"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     titleTop: "CONFIDENCE",
//     titleBottom: "CAPABILITY",
//     description:
//       "Students want to perform, but lack the clarity, structure and feedback to grow.",
//   },
// ];

// export default function About3() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".observed-pro-heading-block, " +
//       ".observed-pro-card, " +
//       ".observed-pro-sign"
//     );

//     let hoverTimeout = null;

//     // Page load hote hi trigger karo (Scroll nahi chahiye)
//     const timer = setTimeout(() => {
//       targets.forEach((el) => el.classList.add("revealed"));

//       if (hoverTimeout) clearTimeout(hoverTimeout);
//       hoverTimeout = setTimeout(() => {
//         targets.forEach((el) => el.classList.add("hover-ready"));
//       }, 1500);
//     }, 100); // 100ms delay

//     return () => {
//       clearTimeout(timer);
//       if (hoverTimeout) clearTimeout(hoverTimeout);
//     };
//   }, []);

//   return (
//     <section className="observed-pro-section" ref={sectionRef}>
//       <div className="observed-pro-container">
//         <div className="observed-pro-heading-block">
//           <h2 className="observed-pro-title">
//             2. THE GAP
//             <br />
//             WE OBSERVED
//           </h2>
//           <span className="observed-pro-underline"></span>
//         </div>

//         <div className="observed-pro-row">
//           {gaps.map((gap, index) => (
//             <div className="observed-pro-card-wrap" key={index}>
//               <div className="observed-pro-card" style={{ "--d": index }}>
//                 <span className="observed-pro-icon-circle">{gap.icon}</span>

//                 <div className="observed-pro-card-text">
//                   <h3 className="observed-pro-card-title">
//                     {gap.titleTop}
//                     <br />
//                     <span className="observed-pro-sign-inline">&ne;</span>{" "}
//                     {gap.titleBottom}
//                   </h3>
//                   <p className="observed-pro-card-desc">{gap.description}</p>
//                 </div>
//               </div>

//               {index < gaps.length - 1 && (
//                 <span 
//                   className="observed-pro-sign" 
//                   aria-hidden="true"
//                   style={{ "--d": index }}
//                 >
//                   &ne;
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }















// Dyanamic Code
import { useEffect, useRef, useState } from "react";
import "./About3.css";

const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_we_observed";

// ✅ Icons hamesha STATIC rahenge (API se image field use NAHI karna, jaisa bataya gaya)
const gapIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M4 5.5C6 4.3 9 4 12 5.2c3-1.2 6-.9 8 .3v13c-2-1.2-5-1.5-8-.3-3-1.2-6-.9-8 .3v-13z"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M12 5.2v13" stroke="#f5b301" strokeWidth="1.4" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="#f5b301" strokeWidth="1.4" />
    <path
      d="M9 11.5 7.5 20l4.5-2 4.5 2-1.5-8.5"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M8 10c0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 1.6-.8 2.6-1.6 3.4-.6.6-1 1-1 1.8v.8H10.6v-.8c0-.8-.4-1.2-1-1.8C8.8 12.6 8 11.6 8 10z"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 18.5h3M11 20.5h2"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>,
];

// API hamesha naya data pehle bhejta hai (id/created_at descending),
// lekin purana data hi pehle card/icon par dikhana hai (jaisa About2 me kiya tha)
function sortOldestFirst(list) {
  return [...list].sort((a, b) => {
    const idA = Number(a.id) || 0;
    const idB = Number(b.id) || 0;
    return idA - idB;
  });
}

// "heading" field me dono words ek hi string me aate hain (jaise "KNOWLEDGE/PERFORMANCE"
// ya "KNOWLEDGE PERFORMANCE"). "≠" sign hamesha STATIC hi rehta hai, API se nahi aata.
function splitHeadingWords(text) {
  const raw = (text || "").trim();
  if (raw.includes("/")) {
    const [top, bottom] = raw.split("/");
    return { top: (top || "").trim(), bottom: (bottom || "").trim() };
  }
  const spaceIndex = raw.indexOf(" ");
  if (spaceIndex === -1) {
    return { top: raw, bottom: "" };
  }
  return {
    top: raw.slice(0, spaceIndex).trim(),
    bottom: raw.slice(spaceIndex + 1).trim(),
  };
}

export default function About3() {
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
      .catch((err) => console.error("About3 (We Observed) API error:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".observed-pro-heading-block, " +
      ".observed-pro-card, " +
      ".observed-pro-sign"
    );

    let hoverTimeout = null;

    // Page load hote hi trigger karo (Scroll nahi chahiye)
    const timer = setTimeout(() => {
      targets.forEach((el) => el.classList.add("revealed"));

      if (hoverTimeout) clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        targets.forEach((el) => el.classList.add("hover-ready"));
      }, 1500);
    }, 100); // 100ms delay

    return () => {
      clearTimeout(timer);
      if (hoverTimeout) clearTimeout(hoverTimeout);
    };
    // items load hone ke baad DOM update hota hai, isliye observer/timer ko re-run karo
  }, [items]);

  if (loading) {
    return <section className="observed-pro-section" ref={sectionRef}></section>;
  }

  // main_heading sab items me repeat hota hai (jaise pichli APIs me), pehle item se le lete hain
  const mainHeading = items[0]?.main_heading || "";

  return (
    <section className="observed-pro-section" ref={sectionRef}>
      <div className="observed-pro-container">
        <div className="observed-pro-heading-block">
          <h2 className="observed-pro-title">{mainHeading}</h2>
          <span className="observed-pro-underline"></span>
        </div>

        <div className="observed-pro-row">
          {items.map((item, index) => {
            const { top, bottom } = splitHeadingWords(item.heading);

            return (
              <div className="observed-pro-card-wrap" key={item.id ?? index}>
                <div className="observed-pro-card" style={{ "--d": index }}>
                  <span className="observed-pro-icon-circle">
                    {gapIcons[index % gapIcons.length]}
                  </span>

                  <div className="observed-pro-card-text">
                    <h3 className="observed-pro-card-title">
                      {top}
                      <br />
                      <span className="observed-pro-sign-inline">&ne;</span>{" "}
                      {bottom}
                    </h3>
                    <p className="observed-pro-card-desc">{item.description}</p>
                  </div>
                </div>

                {index < items.length - 1 && (
                  <span
                    className="observed-pro-sign"
                    aria-hidden="true"
                    style={{ "--d": index }}
                  >
                    &ne;
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