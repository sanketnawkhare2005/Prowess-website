// import { useEffect, useRef } from "react";
// import "./About6.css";

// const promises = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M4 17l5-5 4 4 7-8" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M15 8h5v5" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "REAL SKILLS",
//     description: "For real world challenges.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M12 3 4 6.5v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-5L12 3z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
//         <path d="m9 12 2 2 4-4.5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     title: "REAL CONFIDENCE",
//     description: "To face any situation.",
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
//     title: "REAL GUIDANCE",
//     description: "From coaches who have been there.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M12 3 8 12h3l-1 9 6-11h-3l1-7z" stroke="#f5b301" strokeWidth="1.3" strokeLinejoin="round" />
//         <path d="M5 15c-1 2-1 4 0 6M19 15c1 2 1 4 0 6" stroke="#f5b301" strokeWidth="1.3" strokeLinecap="round" />
//       </svg>
//     ),
//     title: "REAL RESULTS",
//     description: "That create real careers.",
//   },
// ];

// export default function About6() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".promises-pro-heading-block, " +
//       ".promises-pro-item-wrap, " +
//       ".promises-pro-card"
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
//     <section className="promises-pro-section" ref={sectionRef}>
//       <div className="promises-pro-container">
//         <div className="promises-pro-row">
//           {/* ---------- Heading + quote ---------- */}
//           <div className="promises-pro-heading-block">
//             <h2 className="promises-pro-title">5. OUR PROMISE</h2>

//             <div className="promises-pro-quote">
//               <span className="promises-pro-quote-icon">&#8220;</span>
//               <p className="promises-pro-quote-text">
//                 We don&apos;t prepare students for exams.
//                 <br />
//                 <span className="promises-pro-accent">
//                   We prepare them for performance.
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* ---------- 4 promise items with short vertical line ---------- */}
//           {promises.map((item, index) => (
//             <div className="promises-pro-item-wrap" key={index} style={{ "--d": index }}>
//               <span className="promises-pro-divider"></span>
//               <div className="promises-pro-item">
//                 <span className="promises-pro-icon">{item.icon}</span>
//                 <div className="promises-pro-item-text">
//                   <h3 className="promises-pro-item-title">{item.title}</h3>
//                   <p className="promises-pro-item-desc">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* ---------- Card: description top, button bottom-right ---------- */}
//           <div className="promises-pro-card">
//             <p className="promises-pro-card-text">
//               We exist to bridge the gap.
//               <br />
//               We exist to build performance.
//               <br />
//               <span className="promises-pro-accent">
//                 We exist for your success.
//               </span>
//             </p>

//             <div className="promises-pro-card-btn-row">
//               <button type="button" className="promises-pro-card-btn">
//                 EXPLORE THE PROWESS METHOD
//                 <svg viewBox="0 0 24 24" className="promises-pro-btn-icon">
//                   <path
//                     d="M5 12h13M13 6l6 6-6 6"
//                     stroke="#0a0a0a"
//                     strokeWidth="1.8"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















// Dyanamic code
import { useEffect, useRef, useState } from "react";
import "./About6.css";
import { Link } from "react-router-dom";

const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_our_promise";

// API hamesha naya data pehle bhejta hai (id/created_at descending),
// lekin purana data hi pehle item par dikhana hai (jaisa About2/About3/About4/About5 me kiya tha)
function sortOldestFirst(list) {
  return [...list].sort((a, b) => {
    const idA = Number(a.id) || 0;
    const idB = Number(b.id) || 0;
    return idA - idB;
  });
}

// Text ko multiple lines me todta hai (newline se, warna sentence se),
// AAKHRI line/sentence accent(yellow) hoga, baaki normal lines <br/> ke saath
// (jaise "We don't prepare students for exams." normal, "We prepare them for performance." accent)
function splitLastAccent(text) {
  const raw = text || "";
  let parts = raw.split(/\r?\n/).map((p) => p.trim()).filter(Boolean);

  if (parts.length < 2) {
    parts = raw.split(/(?<=[.!?])\s+/).map((p) => p.trim()).filter(Boolean);
  }

  if (parts.length === 0) return { normalLines: [], accentLine: "" };
  const accentLine = parts[parts.length - 1];
  const normalLines = parts.slice(0, -1);
  return { normalLines, accentLine };
}

// ✅ Icons hamesha STATIC rahenge, index ke hisaab se cycle honge
const promiseIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M4 17l5-5 4 4 7-8" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8h5v5" stroke="#f5b301" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 3 4 6.5v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10v-5L12 3z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="m9 12 2 2 4-4.5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
    <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 3 8 12h3l-1 9 6-11h-3l1-7z" stroke="#f5b301" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M5 15c-1 2-1 4 0 6M19 15c1 2 1 4 0 6" stroke="#f5b301" strokeWidth="1.3" strokeLinecap="round" />
  </svg>,
];

export default function About6() {
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
      .catch((err) => console.error("About6 (Our Promise) API error:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".promises-pro-heading-block, " +
      ".promises-pro-item-wrap, " +
      ".promises-pro-card"
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
    return <section className="promises-pro-section" ref={sectionRef}></section>;
  }

  // main_heading, description, card_description, button sab items me repeat hote hain
  // (jaise pichli APIs me), isliye pehle (sabse purane) item se le lete hain.
  // sub_heading/sub_description HAR item me ALAG ho sakte hain — wahi 4 promise-item
  // ka title + description hai.
  const first = items[0] || {};
  const mainHeading = first.main_heading || "";
  const buttonText = first.button || "";

  const { normalLines: quoteNormalLines, accentLine: quoteAccentLine } = splitLastAccent(first.description);
  const { normalLines: cardNormalLines, accentLine: cardAccentLine } = splitLastAccent(first.card_description);

  return (
    <section className="promises-pro-section" ref={sectionRef}>
      <div className="promises-pro-container">
        <div className="promises-pro-row">
          {/* ---------- Heading + quote ---------- */}
          <div className="promises-pro-heading-block">
            <h2 className="promises-pro-title">{mainHeading}</h2>

            <div className="promises-pro-quote">
              <span className="promises-pro-quote-icon">&#8220;</span>
              <p className="promises-pro-quote-text">
                {quoteNormalLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
                {quoteAccentLine && (
                  <span className="promises-pro-accent">{quoteAccentLine}</span>
                )}
              </p>
            </div>
          </div>

          {/* ---------- Promise items (dynamic count, icon static) ---------- */}
          {items.map((item, index) => (
            <div className="promises-pro-item-wrap" key={item.id ?? index} style={{ "--d": index }}>
              <span className="promises-pro-divider"></span>
              <div className="promises-pro-item">
                <span className="promises-pro-icon">
                  {promiseIcons[index % promiseIcons.length]}
                </span>
                <div className="promises-pro-item-text">
                  <h3 className="promises-pro-item-title">{item.sub_heading}</h3>
                  <p className="promises-pro-item-desc">{item.sub_description}</p>
                </div>
              </div>
            </div>
          ))}

          {/* ---------- Card: description top, button bottom-right ---------- */}
          <div className="promises-pro-card">
            <p className="promises-pro-card-text">
              {cardNormalLines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
              {cardAccentLine && (
                <span className="promises-pro-accent">{cardAccentLine}</span>
              )}
            </p>

            <div className="promises-pro-card-btn-row">
              <Link to="/prowessmethods" className="text-decoration-none">
              <button type="button" className="promises-pro-card-btn">
                {buttonText}
                <svg viewBox="0 0 24 24" className="promises-pro-btn-icon">
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="#0a0a0a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}