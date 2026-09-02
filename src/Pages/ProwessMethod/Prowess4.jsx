// import { useEffect, useRef } from "react";
// import "./Prowess4.css";

// const capsules = [
//   {
//     title: "Real Situation",
//     desc: "Not classroom examples.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
//         <circle cx="12" cy="8" r="3.2" />
//         <path d="M5.5 19.5c1-3.3 3.7-5 6.5-5s5.5 1.7 6.5 5" />
//       </svg>
//     ),
//   },
//   {
//     title: "Real Practice",
//     desc: "Not theoretical tasks.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
//         <path d="M8 4.5h8v2.2H8z" />
//         <path d="M7 6h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
//         <path d="M9 12.5l1.8 1.8L15 10.5" />
//       </svg>
//     ),
//   },
//   {
//     title: "Real Feedback",
//     desc: "From coaches & peers.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
//         <circle cx="8.5" cy="8" r="2.4" />
//         <circle cx="16" cy="9" r="2" />
//         <path d="M3.8 19c.6-2.9 2.5-4.5 4.7-4.5s4.1 1.6 4.7 4.5" />
//         <path d="M14.3 19c.5-2.3 1.9-3.6 3.7-3.6s3.2 1.3 3.7 3.6" />
//       </svg>
//     ),
//   },
//   {
//     title: "Real Growth",
//     desc: "Visible improvement every time.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
//         <path d="M4 19h16" />
//         <path d="M6 17V13M10.5 17V9M15 17V11M19 17V6" />
//         <path d="M15.5 5.5 19.5 5.5 19.5 9.5" />
//         <path d="M6.5 15 10.5 10 15 13 19 6" />
//       </svg>
//     ),
//   },
// ];

// const whyItems = [
//   {
//     title: "Active Learning",
//     desc: "Not learn by doing, not just listening.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6">
//         <circle cx="12" cy="12" r="9" />
//         <circle cx="12" cy="12" r="5" />
//         <circle cx="12" cy="12" r="1.3" fill="#111111" />
//       </svg>
//     ),
//   },
//   {
//     title: "Accountability",
//     desc: "You stay focused with guidance.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5">
//         <path d="M9 4.5a3 3 0 0 0-3 3v.3A3 3 0 0 0 4.5 10.5a3 3 0 0 0 1 5.6A3 3 0 0 0 8.5 20a3 3 0 0 0 .5-.05V4.5A3 3 0 0 0 9 4.5Z" />
//         <path d="M15 4.5a3 3 0 0 1 3 3v.3a3 3 0 0 1 1.5 2.7 3 3 0 0 1-1 5.6A3 3 0 0 1 15.5 20a3 3 0 0 1-.5-.05V4.5A3 3 0 0 1 15 4.5Z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Measurable Growth",
//     desc: "You see progress in every cycle.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6">
//         <path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.6-6 3.6L7.5 13.6l-5-4.5 6.6-.6L12 2.5Z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Real World Ready",
//     desc: "You perform where it truly matters.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6">
//         <path d="M7 4.5h10v4a5 5 0 0 1-10 0v-4Z" />
//         <path d="M7 6H4.5a2 2 0 0 0 2 3.5M17 6h2.5a2 2 0 0 1-2 3.5" />
//         <path d="M12 13.5v3M9 20h6M9.5 16.5h5l.5 3.5H9l.5-3.5Z" />
//       </svg>
//     ),
//   },
// ];

// export default function Prowess4() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".prowessmethod4-heading-col, " +
//       ".prowessmethod4-capsule-wrap, " +
//       ".prowessmethod4-main-divider, " +
//       ".prowessmethod4-right-heading, " +
//       ".prowessmethod4-why-wrap"
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
//             // SCROLL RESET: Classes hatao taaki dobara replay ho
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
//     <section className="prowessmethod4-section" ref={sectionRef}>
//       {/* LEFT: Real World Learning Cycle */}
//       <div className="prowessmethod4-left">
//         <div className="prowessmethod4-heading-col">
//           <h2 className="prowessmethod4-heading">
//             The Real 
//             <br />
//             World
//             <br/>
//             Learning 
//             <br/>
//             Cycle
//           </h2>
//           <span className="prowessmethod4-heading-line"></span>
//         </div>

//         <div className="prowessmethod4-capsule-row">
//           {capsules.map((c, i) => (
//             <div className="prowessmethod4-capsule-wrap" key={c.title} style={{ "--d": i }}>
//               <div className="prowessmethod4-capsule">
//                 <div className="prowessmethod4-capsule-icon">{c.icon}</div>
//                 <div className="prowessmethod4-capsule-text">
//                   <h3 className="prowessmethod4-capsule-title">{c.title}</h3>
//                   <p className="prowessmethod4-capsule-desc">{c.desc}</p>
//                 </div>
//               </div>
//               {i < capsules.length - 1 && (
//                 <svg
//                   className="prowessmethod4-capsule-arrow"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#111111"
//                   strokeWidth="2.2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M9 6l6 6-6 6" />
//                 </svg>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <span className="prowessmethod4-main-divider"></span>

//       {/* RIGHT: Why This Method Works */}
//       <div className="prowessmethod4-right">
//         <h2 className="prowessmethod4-right-heading">Why This Method Works</h2>

//         <div className="prowessmethod4-why-row">
//           {whyItems.map((item, i) => (
//             <div className="prowessmethod4-why-wrap" key={item.title} style={{ "--d": i }}>
//               <div className="prowessmethod4-why-item">
//                 <div className="prowessmethod4-why-icon">{item.icon}</div>
//                 <div className="prowessmethod4-why-text">
//                   <h3 className="prowessmethod4-why-title">{item.title}</h3>
//                   <p className="prowessmethod4-why-desc">{item.desc}</p>
//                 </div>
//               </div>
//               {i < whyItems.length - 1 && (
//                 <span className="prowessmethod4-why-divider"></span>
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
import "./Prowess4.css";

// ✅ Icons hamesha STATIC rahenge (API se nahi aayenge)
// Left side (capsules) ke static icons
const capsuleIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
    <circle cx="12" cy="8" r="3.2" />
    <path d="M5.5 19.5c1-3.3 3.7-5 6.5-5s5.5 1.7 6.5 5" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
    <path d="M8 4.5h8v2.2H8z" />
    <path d="M7 6h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
    <path d="M9 12.5l1.8 1.8L15 10.5" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
    <circle cx="8.5" cy="8" r="2.4" />
    <circle cx="16" cy="9" r="2" />
    <path d="M3.8 19c.6-2.9 2.5-4.5 4.7-4.5s4.1 1.6 4.7 4.5" />
    <path d="M14.3 19c.5-2.3 1.9-3.6 3.7-3.6s3.2 1.3 3.7 3.6" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.7">
    <path d="M4 19h16" />
    <path d="M6 17V13M10.5 17V9M15 17V11M19 17V6" />
    <path d="M15.5 5.5 19.5 5.5 19.5 9.5" />
    <path d="M6.5 15 10.5 10 15 13 19 6" />
  </svg>,
];

// Right side (why-items) ke static icons
const whyIcons = [
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.3" fill="#111111" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.5">
    <path d="M9 4.5a3 3 0 0 0-3 3v.3A3 3 0 0 0 4.5 10.5a3 3 0 0 0 1 5.6A3 3 0 0 0 8.5 20a3 3 0 0 0 .5-.05V4.5A3 3 0 0 0 9 4.5Z" />
    <path d="M15 4.5a3 3 0 0 1 3 3v.3a3 3 0 0 1 1.5 2.7 3 3 0 0 1-1 5.6A3 3 0 0 1 15.5 20a3 3 0 0 1-.5-.05V4.5A3 3 0 0 1 15 4.5Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6">
    <path d="M12 2.5l2.9 6 6.6.6-5 4.5 1.5 6.5-6-3.6-6 3.6L7.5 13.6l-5-4.5 6.6-.6L12 2.5Z" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="1.6">
    <path d="M7 4.5h10v4a5 5 0 0 1-10 0v-4Z" />
    <path d="M7 6H4.5a2 2 0 0 0 2 3.5M17 6h2.5a2 2 0 0 1-2 3.5" />
    <path d="M12 13.5v3M9 20h6M9.5 16.5h5l.5 3.5H9l.5-3.5Z" />
  </svg>,
];

const LEFT_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_learning_cycle_left";
const RIGHT_API = "https://workfit.co.in/provess/Prowess/index.php/API/list_method_works_cycle";

export default function Prowess4() {
  const sectionRef = useRef(null);

  // LEFT side dynamic state (main heading ab static hai, neeche JSX me hardcoded)
  const [capsules, setCapsules] = useState([]);

  // RIGHT side dynamic state (main heading ab static hai, neeche JSX me hardcoded)
  const [whyItems, setWhyItems] = useState([]);

  const [loading, setLoading] = useState(true);

  // ---------- FETCH LEFT API ----------
  useEffect(() => {
    fetch(LEFT_API)
      .then((res) => res.json())
      .then((res) => {
  const list = res?.data || [];

  // Oldest ID first
  const sortedList = [...list].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

  if (sortedList.length > 0) {
    const mapped = sortedList.map((item, i) => ({
      title: item.heading || "",
      desc: item.description || "",
      icon: capsuleIcons[i % capsuleIcons.length],
    }));

    setCapsules(mapped);
  }
})
      .catch((err) => console.error("Left API error:", err));
  }, []);

  // ---------- FETCH RIGHT API ----------
  useEffect(() => {
    fetch(RIGHT_API)
      .then((res) => res.json())
      .then((res) => {
  const list = res?.data || [];

  // Oldest ID first
  const sortedList = [...list].sort(
    (a, b) => Number(a.id) - Number(b.id)
  );

  if (sortedList.length > 0) {
    const mapped = sortedList.map((item, i) => ({
      title: item.heading || "",
      desc: item.description || "",
      icon: whyIcons[i % whyIcons.length],
    }));

    setWhyItems(mapped);
  }

  setLoading(false);
})
      .catch((err) => {
        console.error("Right API error:", err);
        setLoading(false);
      });
  }, []);

  // ---------- SCROLL ANIMATION (same as before) ----------
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".prowessmethod4-heading-col, " +
      ".prowessmethod4-capsule-wrap, " +
      ".prowessmethod4-main-divider, " +
      ".prowessmethod4-right-heading, " +
      ".prowessmethod4-why-wrap"
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
    // capsules/whyItems change hone ke baad DOM update hota hai, isliye
    // inko dependency me rakha taaki observer naye elements ko bhi track kare
  }, [capsules, whyItems]);

  if (loading) {
    return <section className="prowessmethod4-section">Loading...</section>;
  }

  return (
    <section className="prowessmethod4-section" ref={sectionRef}>
      {/* LEFT: Real World Learning Cycle */}
      <div className="prowessmethod4-left">
        <div className="prowessmethod4-heading-col">
          <h2 className="prowessmethod4-heading">
            The Real
            <br />
            World
            <br />
            Learning
            <br />
            Cycle
          </h2>
          <span className="prowessmethod4-heading-line"></span>
        </div>

        <div className="prowessmethod4-capsule-row">
          {capsules.map((c, i) => (
            <div className="prowessmethod4-capsule-wrap" key={i} style={{ "--d": i }}>
              <div className="prowessmethod4-capsule">
                <div className="prowessmethod4-capsule-icon">{c.icon}</div>
                <div className="prowessmethod4-capsule-text">
                  <h3 className="prowessmethod4-capsule-title">{c.title}</h3>
                  <p className="prowessmethod4-capsule-desc">{c.desc}</p>
                </div>
              </div>
              {i < capsules.length - 1 && (
                <svg
                  className="prowessmethod4-capsule-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <span className="prowessmethod4-main-divider"></span>

      {/* RIGHT: Why This Method Works */}
      <div className="prowessmethod4-right">
        <h2 className="prowessmethod4-right-heading">Why This Method Works</h2>

        <div className="prowessmethod4-why-row">
          {whyItems.map((item, i) => (
            <div className="prowessmethod4-why-wrap" key={i} style={{ "--d": i }}>
              <div className="prowessmethod4-why-item">
                <div className="prowessmethod4-why-icon">{item.icon}</div>
                <div className="prowessmethod4-why-text">
                  <h3 className="prowessmethod4-why-title">{item.title}</h3>
                  <p className="prowessmethod4-why-desc">{item.desc}</p>
                </div>
              </div>
              {i < whyItems.length - 1 && (
                <span className="prowessmethod4-why-divider"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}