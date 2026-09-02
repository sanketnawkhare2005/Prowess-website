// import { useEffect, useRef } from "react";
// import "./Home2.css";

// const items = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 6.5c2-1 5-1.3 8 0v12c-3-1.3-6-1-8 0v-12z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M20 6.5c-2-1-5-1.3-8 0v12c3-1.3 6-1 8 0v-12z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "LEARNING",
//     description: "Gain knowledge that builds your foundation.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect
//           x="3.5"
//           y="4.5"
//           width="17"
//           height="12"
//           rx="1.5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//         />
//         <path
//           d="M9 20h6M12 16.5V20"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//         <path
//           d="M7 12.5l3-3 2.5 2 3.5-4"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "PRESENTATION",
//     description: "Express your ideas with clarity and confidence.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect
//           x="3.5"
//           y="5.5"
//           width="17"
//           height="10"
//           rx="2"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//         />
//         <path
//           d="M8 19h8M12 15.5V19"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//         <circle cx="8.5" cy="10.5" r="0.9" fill="#f5b301" />
//         <circle cx="12" cy="10.5" r="0.9" fill="#f5b301" />
//         <circle cx="15.5" cy="10.5" r="0.9" fill="#f5b301" />
//       </svg>
//     ),
//     title: "INTERVIEW",
//     description: "Communicate your value and stand out.",
//   },
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
//     title: "TEAMWORK",
//     description: "Collaborate, listen and create real impact.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 17l5-5 4 4 7-8"
//           stroke="#f5b301"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M15 8h5v5"
//           stroke="#f5b301"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "PERFORMANCE",
//     description: "Deliver results that create value in the real world.",
//   },
// ];

// export default function Home2() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const headingRow = section.querySelector(".home2-prowess-heading-row");
//     const itemWraps = section.querySelectorAll(".home2-prowess-item-wrap");
//     if (!headingRow || itemWraps.length === 0) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Trigger reveal
//             headingRow.classList.add("revealed");
//             itemWraps.forEach((item) => item.classList.add("revealed"));

//             // After all stagger animations finish → enable hover
//             // Last item delay (0.48s) + duration (0.7s) + buffer
//             setTimeout(() => {
//               headingRow.classList.add("hover-ready");
//               itemWraps.forEach((item) => item.classList.add("hover-ready"));
//             }, 1300);

//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="home2-prowess-section" ref={sectionRef}>
//       <div className="home2-prowess-container">
//         <div className="home2-prowess-heading-row">
//           <span className="home2-prowess-heading-border"></span>
//           <h2 className="home2-prowess-heading">
//             WHEN KNOWLEDGE MEETS THE{" "}
//             <span className="home2-prowess-heading-accent">REAL WORLD</span>
//           </h2>
//           <span className="home2-prowess-heading-border"></span>
//         </div>

//         <div className="home2-prowess-row">
//           {items.map((item, index) => (
//             <div className="home2-prowess-item-wrap" key={index}>
//               {index > 0 && (
//                 <span className="home2-prowess-divider"></span>
//               )}
//               <div className="home2-prowess-item">
//                 <span className="home2-prowess-icon">{item.icon}</span>
//                 <div className="home2-prowess-item-text">
//                   <h3 className="home2-prowess-item-title">{item.title}</h3>
//                   <p className="home2-prowess-item-desc">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }













// Dynamic Code
import { useEffect, useRef, useState } from "react";
import "./Home2.css";

/* ───────── Static Icons (unchanged) ───────── */
const staticIcons = [
  /* LEARNING */
  <svg viewBox="0 0 24 24" fill="none" key="icon-learn">
    <path
      d="M4 6.5c2-1 5-1.3 8 0v12c-3-1.3-6-1-8 0v-12z"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M20 6.5c-2-1-5-1.3-8 0v12c3-1.3 6-1 8 0v-12z"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>,
  /* PRESENTATION */
  <svg viewBox="0 0 24 24" fill="none" key="icon-present">
    <rect
      x="3.5"
      y="4.5"
      width="17"
      height="12"
      rx="1.5"
      stroke="#f5b301"
      strokeWidth="1.4"
    />
    <path
      d="M9 20h6M12 16.5V20"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M7 12.5l3-3 2.5 2 3.5-4"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  /* INTERVIEW */
  <svg viewBox="0 0 24 24" fill="none" key="icon-interview">
    <rect
      x="3.5"
      y="5.5"
      width="17"
      height="10"
      rx="2"
      stroke="#f5b301"
      strokeWidth="1.4"
    />
    <path
      d="M8 19h8M12 15.5V19"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8.5" cy="10.5" r="0.9" fill="#f5b301" />
    <circle cx="12" cy="10.5" r="0.9" fill="#f5b301" />
    <circle cx="15.5" cy="10.5" r="0.9" fill="#f5b301" />
  </svg>,
  /* TEAMWORK */
  <svg viewBox="0 0 24 24" fill="none" key="icon-team">
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
  /* PERFORMANCE */
  <svg viewBox="0 0 24 24" fill="none" key="icon-perf">
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
];

export default function Home2() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

    /* ───────── Fetch API ───────── */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://workfit.co.in/provess/Prowess/index.php/API/list_home_knowledge_meets"
        );
        const json = await res.json();
        if (json.success === "1" && json.data) {
          let data = Array.isArray(json.data) ? json.data : [json.data];
          /* ⬇️ YE LINE ADD KARO — descending by ID ⬇️ */
          data.sort((a, b) => a.id - b.id);
          setItems(data);
        }
      } catch (err) {
        console.error("Knowledge meets API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* ───────── Intersection Observer ───────── */
  useEffect(() => {
    if (loading || items.length === 0) return;

    const section = sectionRef.current;
    if (!section) return;

    const headingRow = section.querySelector(".home2-prowess-heading-row");
    const itemWraps = section.querySelectorAll(".home2-prowess-item-wrap");
    if (!headingRow || itemWraps.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            headingRow.classList.add("revealed");
            itemWraps.forEach((item) => item.classList.add("revealed"));

            setTimeout(() => {
              headingRow.classList.add("hover-ready");
              itemWraps.forEach((item) => item.classList.add("hover-ready"));
            }, 1300);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [loading, items]);

  /* ───────── Loading / Empty ───────── */
  if (loading || items.length === 0) return null;

  /* ───────── Render ───────── */
  return (
    <section className="home2-prowess-section" ref={sectionRef}>
      <div className="home2-prowess-container">
        {/* ✅ STATIC HEADING — kabhi change nahi hoga */}
        <div className="home2-prowess-heading-row">
          <span className="home2-prowess-heading-border"></span>
          <h2 className="home2-prowess-heading">
            WHEN KNOWLEDGE MEETS THE{" "}
            <span className="home2-prowess-heading-accent">REAL WORLD</span>
          </h2>
          <span className="home2-prowess-heading-border"></span>
        </div>

        {/* ✅ DYNAMIC ITEMS — heading & description API se, icons static */}
        <div className="home2-prowess-row">
          {items.map((item, index) => (
            <div className="home2-prowess-item-wrap" key={item.id || index}>
              {index > 0 && (
                <span className="home2-prowess-divider"></span>
              )}
              <div className="home2-prowess-item">
                <span className="home2-prowess-icon">
                  {staticIcons[index % staticIcons.length]}
                </span>
                <div className="home2-prowess-item-text">
                  <h3 className="home2-prowess-item-title">
                    {item.heading}
                  </h3>
                  <p className="home2-prowess-item-desc">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}