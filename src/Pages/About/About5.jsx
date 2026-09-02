// import { useEffect, useRef } from "react";
// import "./About5.css";

// const reasons = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
//         <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
//         <path d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
//       </svg>
//     ),
//     text: "To unlock real potential.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M9 4 4 20h4l1.5-5M15 4l5 16h-4l-1.5-5" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
//         <path d="M11 9v1.5M12.3 13v1.5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
//       </svg>
//     ),
//     text: "To prepare students for real world performance.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="1" fill="#f5b301" />
//       </svg>
//     ),
//     text: "To build confidence through competence.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path d="M12 3c2.5 1.6 4 4.4 4 8 0 2-1 3.8-2 5l-2 2-2-2c-1-1.2-2-3-2-5 0-3.6 1.5-6.4 4-8z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
//         <circle cx="12" cy="10" r="1.4" stroke="#f5b301" strokeWidth="1.2" />
//         <path d="M9 16.5 6.5 20M15 16.5 17.5 20" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
//       </svg>
//     ),
//     text: "To create future leaders, not just job seekers.",
//   },
// ];

// export default function About5() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".about-why1-heading-block, " +
//       ".about-why1-desc, " +
//       ".about-why1-item-wrap, " +
//       ".about-why1-card"
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
//     <section className="about-why1-section" ref={sectionRef}>
//       <div className="about-why1-photo-bg">
//         <img
//           src="/images/new2.avif"
//           alt=""
//           className="about-why1-photo-img"
//         />
//         <div className="about-why1-photo-overlay"></div>
//       </div>

//       <div className="about-why1-container">
//         <div className="about-why1-row">
//           {/* ---------- Heading ---------- */}
//           <div className="about-why1-heading-block">
//             <h2 className="about-why1-title">
//               4. WHY WE
//               <br />
//               BUILT PROWESS
//             </h2>
//             <span className="about-why1-underline"></span>
//           </div>

//           {/* ---------- Description ---------- */}
//           <p className="about-why1-desc">
//             We saw brilliant students being left behind not because they
//             weren&apos;t capable, but because no one taught them how to
//             perform.
//             <br />
//             <span className="about-why1-accent">So we built Prowess.</span>
//           </p>

//           {/* ---------- 4 icon items with short vertical line before each ---------- */}
//           {reasons.map((reason, index) => (
//             <div className="about-why1-item-wrap" key={index} style={{ "--d": index }}>
//               <span className="about-why1-divider"></span>
//               <div className="about-why1-item">
//                 <span className="about-why1-icon-circle">{reason.icon}</span>
//                 <p className="about-why1-item-desc">{reason.text}</p>
//               </div>
//             </div>
//           ))}

//           {/* ---------- Highlighted card (5th) ---------- */}
//           <div className="about-why1-card">
//             <span className="about-why1-card-icon">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M12 3v4M4.2 7.8l2.8 2.8M19.8 7.8 17 10.6M4 16h3M17 16h3M12 20v-4"
//                   stroke="#f5b301"
//                   strokeWidth="1.4"
//                   strokeLinecap="round"
//                 />
//                 <circle
//                   cx="12"
//                   cy="12"
//                   r="3"
//                   stroke="#f5b301"
//                   strokeWidth="1.4"
//                 />
//               </svg>
//             </span>
//             <p className="about-why1-card-text">
//               We exist for one reason:{" "}
//               <span className="about-why1-accent">
//                 To build performance that lasts.
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
















// Dyanamic Code
import { useEffect, useRef, useState } from "react";
import "./About5.css";

const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_built_prowess";

// API hamesha naya data pehle bhejta hai (id/created_at descending),
// lekin purana data hi pehle icon/card par dikhana hai (jaisa About2/About3 me kiya tha)
function sortOldestFirst(list) {
  return [...list].sort((a, b) => {
    const idA = Number(a.id) || 0;
    const idB = Number(b.id) || 0;
    return idA - idB;
  });
}

// "description" field 2 lines me todta hai — pehle newline try karta hai, warna sentence se.
// Doosri line poori accent(yellow) hogi (jaise "So we built Prowess." poora yellow tha)
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

// "sub_heading" field ko ":" se split karta hai —
// pehla hissa (colon samet) normal white, baaki accent(yellow)
// (jaise "We exist for one reason:" white, "To build performance that lasts." yellow)
function splitByColon(text) {
  const raw = text || "";
  const idx = raw.indexOf(":");
  if (idx === -1) return { before: raw, after: "" };
  return {
    before: raw.slice(0, idx + 1).trim(),
    after: raw.slice(idx + 1).trim(),
  };
}

// ✅ Icons hamesha STATIC rahenge (4 reason-icons + 5th card ka icon), cycle by index
const reasonIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
    <path d="M4 19c0-3 2.2-5 5-5s5 2 5 5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M9 4 4 20h4l1.5-5M15 4l5 16h-4l-1.5-5" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M11 9v1.5M12.3 13v1.5" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1" fill="#f5b301" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 3c2.5 1.6 4 4.4 4 8 0 2-1 3.8-2 5l-2 2-2-2c-1-1.2-2-3-2-5 0-3.6 1.5-6.4 4-8z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="1.4" stroke="#f5b301" strokeWidth="1.2" />
    <path d="M9 16.5 6.5 20M15 16.5 17.5 20" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
];

export default function About5() {
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
      .catch((err) => console.error("About5 (Why We Built Prowess) API error:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".about-why1-heading-block, " +
      ".about-why1-desc, " +
      ".about-why1-item-wrap, " +
      ".about-why1-card"
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
    return <section className="about-why1-section" ref={sectionRef}></section>;
  }

  // main_heading, description, sub_heading sab items me repeat hote hain (jaise pichli APIs me),
  // isliye pehle item se le lete hain. sub_description HAR item me ALAG hota hai —
  // wahi 4 reason-icons ke niche ka text hai.
  const first = items[0] || {};
  const mainHeading = first.main_heading || "";
  const { line1: descLine1, line2: descLine2 } = splitTwoLines(first.description);
  const { before: cardBefore, after: cardAfter } = splitByColon(first.sub_heading);

  return (
    <section className="about-why1-section" ref={sectionRef}>
      <div className="about-why1-photo-bg">
        <img
          src="/images/new2.avif"
          alt=""
          className="about-why1-photo-img"
        />
        <div className="about-why1-photo-overlay"></div>
      </div>

      <div className="about-why1-container">
        <div className="about-why1-row">
          {/* ---------- Heading ---------- */}
          <div className="about-why1-heading-block">
            <h2 className="about-why1-title">{mainHeading}</h2>
            <span className="about-why1-underline"></span>
          </div>

          {/* ---------- Description ---------- */}
          <p className="about-why1-desc">
            {descLine1}
            {descLine2 && (
              <>
                <br />
                <span className="about-why1-accent">{descLine2}</span>
              </>
            )}
          </p>

          {/* ---------- 4 icon items with short vertical line before each ---------- */}
          {items.map((item, index) => (
            <div className="about-why1-item-wrap" key={item.id ?? index} style={{ "--d": index }}>
              <span className="about-why1-divider"></span>
              <div className="about-why1-item">
                <span className="about-why1-icon-circle">
                  {reasonIcons[index % reasonIcons.length]}
                </span>
                <p className="about-why1-item-desc">{item.sub_description}</p>
              </div>
            </div>
          ))}

          {/* ---------- Highlighted card (5th) ---------- */}
          <div className="about-why1-card">
            <span className="about-why1-card-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3v4M4.2 7.8l2.8 2.8M19.8 7.8 17 10.6M4 16h3M17 16h3M12 20v-4"
                  stroke="#f5b301"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#f5b301"
                  strokeWidth="1.4"
                />
              </svg>
            </span>
            <p className="about-why1-card-text">
              {cardBefore}{" "}
              <span className="about-why1-accent">{cardAfter}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}