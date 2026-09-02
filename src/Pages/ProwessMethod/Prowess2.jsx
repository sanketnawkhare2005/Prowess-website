// import { useEffect, useRef } from "react";
// import "./Prowess2.css";

// const items = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7">
//         <path d="M12 6.5c-1.6-1-3.6-1.4-5.5-1.2A1 1 0 0 0 5.5 6.3v11.4c0 .6.5 1 1.1.9 1.8-.2 3.7.2 5.4 1.1M12 6.5c1.6-1 3.6-1.4 5.5-1.2.5.1.9.5.9 1v11.4c0 .6-.5 1-1.1.9-1.8-.2-3.7.2-5.4 1.1M12 6.5v13" />
//       </svg>
//     ),
//     title: "Information Overload",
//     desc: "Too much to learn, but little to apply.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7">
//         <circle cx="12" cy="9" r="6" />
//         <path d="M12 15v3M9.5 21h5" />
//         <path d="M10.3 8.2a1.8 1.8 0 1 1 2.6 1.6c-.7.4-.9.8-.9 1.5" />
//         <circle cx="12" cy="12.9" r="0.15" fill="#ffffff" />
//       </svg>
//     ),
//     title: "Passive Learning",
//     desc: "Students listen, but don't practice.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7">
//         <path d="M7 3.5h10a1 1 0 0 1 1 1V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V4.5a1 1 0 0 1 1-1Z" />
//         <path d="M9 8h6M9 11.5h6M9 15h3.5" />
//       </svg>
//     ),
//     title: "No Real Feedback",
//     desc: "Mistakes go unseen, learning stalls.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6">
//         <path d="M9 4.5a3 3 0 0 0-3 3v.3A3 3 0 0 0 4.5 10.5a3 3 0 0 0 1 5.6A3 3 0 0 0 8.5 20a3 3 0 0 0 .5-.05V4.5A3 3 0 0 0 9 4.5Z" />
//         <path d="M15 4.5a3 3 0 0 1 3 3v.3a3 3 0 0 1 1.5 2.7 3 3 0 0 1-1 5.6A3 3 0 0 1 15.5 20a3 3 0 0 1-.5-.05V4.5A3 3 0 0 1 15 4.5Z" />
//       </svg>
//     ),
//     title: "No Improvement Loop",
//     desc: "There is no system to get better.",
//   },
// ];

// export default function Prowess2() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".traditional-pro-heading-col, " +
//       ".traditional-pro-item-wrap, " +
//       ".traditional-pro-big-divider, " +
//       ".traditional-pro-result"
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
//             }, 1400);
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
//     <section className="traditional-pro-section" ref={sectionRef}>
//       <div className="traditional-pro-heading-col">
//         <h2 className="traditional-pro-heading">
//           Why Traditional
//           <br />
//           Learning Stops
//         </h2>
//         <span className="traditional-pro-heading-line"></span>
//       </div>

//       <div className="traditional-pro-items">
//         {items.map((item, i) => (
//           <div className="traditional-pro-item-wrap" key={item.title} style={{ "--d": i }}>
//             <div className="traditional-pro-item">
//               <div className="traditional-pro-icon-circle">{item.icon}</div>
//               <div className="traditional-pro-item-text">
//                 <h3 className="traditional-pro-item-title">{item.title}</h3>
//                 <p className="traditional-pro-item-desc">{item.desc}</p>
//               </div>
//             </div>
//             {i < items.length - 1 && (
//               <span className="traditional-pro-item-divider"></span>
//             )}
//           </div>
//         ))}
//       </div>

//       <span className="traditional-pro-big-divider"></span>

//       <div className="traditional-pro-result">
//         <h3 className="traditional-pro-result-title">Result?</h3>
//         <p className="traditional-pro-result-text">
//           Knowledge remains.
//           <br />
//           Performance is missing.
//         </p>
//       </div>
//     </section>
//   );
// }










import { useEffect, useRef, useState } from "react";
import "./Prowess2.css";

// ✅ Icons are STATIC — inhe API se koi lena dena nahi.
// Order fixed hai: index 0 = 1st box ka icon, index 1 = 2nd box ka icon, ...
const staticIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7">
      <path d="M12 6.5c-1.6-1-3.6-1.4-5.5-1.2A1 1 0 0 0 5.5 6.3v11.4c0 .6.5 1 1.1.9 1.8-.2 3.7.2 5.4 1.1M12 6.5c1.6-1 3.6-1.4 5.5-1.2.5.1.9.5.9 1v11.4c0 .6-.5 1-1.1.9-1.8-.2-3.7.2-5.4 1.1M12 6.5v13" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7">
      <circle cx="12" cy="9" r="6" />
      <path d="M12 15v3M9.5 21h5" />
      <path d="M10.3 8.2a1.8 1.8 0 1 1 2.6 1.6c-.7.4-.9.8-.9 1.5" />
      <circle cx="12" cy="12.9" r="0.15" fill="#ffffff" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.7">
      <path d="M7 3.5h10a1 1 0 0 1 1 1V19a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 19V4.5a1 1 0 0 1 1-1Z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6">
      <path d="M9 4.5a3 3 0 0 0-3 3v.3A3 3 0 0 0 4.5 10.5a3 3 0 0 0 1 5.6A3 3 0 0 0 8.5 20a3 3 0 0 0 .5-.05V4.5A3 3 0 0 0 9 4.5Z" />
      <path d="M15 4.5a3 3 0 0 1 3 3v.3a3 3 0 0 1 1.5 2.7 3 3 0 0 1-1 5.6A3 3 0 0 1 15.5 20a3 3 0 0 1-.5-.05V4.5A3 3 0 0 1 15 4.5Z" />
    </svg>
  ),
];

// ✅ Fallback text — jab tak API load ho raha hai ya fail ho jaye,
// UI same hi dikhega, layout kabhi nahi tootega.
const fallbackItems = [
  { heading: "Information Overload", description: "Too much to learn, but little to apply." },
  { heading: "Passive Learning", description: "Students listen, but don't practice." },
  { heading: "No Real Feedback", description: "Mistakes go unseen, learning stalls." },
  { heading: "No Improvement Loop", description: "There is no system to get better." },
];

const API_URL =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_traditional_learning";

export default function Prowess2() {
  const sectionRef = useRef(null);
  const [items, setItems] = useState(fallbackItems);

  // ✅ API se data laake sirf heading/description update karna hai.
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();

        // API response ka shape alag ho sakta hai, isliye common
        // possibilities handle kar rahe hain: array directly, ya
        // { data: [...] }, ya { list: [...] }, ya { result: [...] }
        const list = Array.isArray(json)
          ? json
          : json.data || json.list || json.result || [];

        if (!Array.isArray(list) || list.length === 0) return;

        const sortedList = [...list].sort((a, b) => Number(a.id) - Number(b.id));

        // ✅ Sirf heading/description map karo, icons touch nahi karenge
        const merged = staticIcons.map((_, i) => {
          const apiItem = sortedList[i] || {};

          // const apiItem = list[i] || {};
          const heading =
            apiItem.heading ?? apiItem.title ?? fallbackItems[i]?.heading ?? "";
          const description =
            apiItem.description ??
            apiItem.desc ??
            fallbackItems[i]?.description ??
            "";
          return { heading, description };
        });

        if (isMounted) setItems(merged);
      } catch (err) {
        // API fail hone par bhi UI same rahega (fallback text ke saath)
        console.error("Failed to load traditional learning data:", err);
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".traditional-pro-heading-col, " +
      ".traditional-pro-item-wrap, " +
      ".traditional-pro-big-divider, " +
      ".traditional-pro-result"
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
            }, 1400);
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
  }, [items]);

  return (
    <section className="traditional-pro-section" ref={sectionRef}>
      {/* ✅ Heading STATIC — koi change nahi */}
      <div className="traditional-pro-heading-col">
        <h2 className="traditional-pro-heading">
          Why traditional 
          <br />
          learning fails
        </h2>
        <span className="traditional-pro-heading-line"></span>
      </div>

      <div className="traditional-pro-items">
        {staticIcons.map((icon, i) => {
          const data = items[i] || fallbackItems[i] || {};
          return (
            <div className="traditional-pro-item-wrap" key={i} style={{ "--d": i }}>
              <div className="traditional-pro-item">
                <div className="traditional-pro-icon-circle">{icon}</div>
                <div className="traditional-pro-item-text">
                  <h3 className="traditional-pro-item-title">{data.heading}</h3>
                  <p className="traditional-pro-item-desc">{data.description}</p>
                </div>
              </div>
              {i < staticIcons.length - 1 && (
                <span className="traditional-pro-item-divider"></span>
              )}
            </div>
          );
        })}
      </div>

      <span className="traditional-pro-big-divider"></span>

      {/* ✅ Result box STATIC — koi change nahi */}
      <div className="traditional-pro-result">
        <h3 className="traditional-pro-result-title">Result?</h3>
        <p className="traditional-pro-result-text">
          Knowledge remains.
          <br />
          Performance is missing.
        </p>
      </div>
    </section>
  );
}