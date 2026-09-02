// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Home3.css";

// const knowledgeSteps = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M9 4c-2.5 0-4.5 2-4.5 4.3 0 1 .3 1.9.9 2.6-.6.6-.9 1.4-.9 2.3 0 1.9 1.5 3.5 3.4 3.6.4 1.5 1.7 2.7 3.3 2.7s2.9-1.2 3.3-2.7c1.9-.1 3.4-1.7 3.4-3.6 0-.9-.3-1.7-.9-2.3.6-.7.9-1.6.9-2.6C18.4 6 16.4 4 13.9 4c-.9 0-1.8.3-2.4.8C10.9 4.3 10 4 9 4z"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//           strokeLinejoin="round"
//         />
//         <path d="M12 8v9" stroke="#f5b301" strokeWidth="1.3" />
//       </svg>
//     ),
//     title: "LEARN",
//     description: "Gather information",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M9 16.5h6M10 19h4"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//         <path
//           d="M12 4a5.5 5.5 0 0 0-3 10.1c.5.35.8.9.8 1.5v.4h4.4v-.4c0-.6.3-1.15.8-1.5A5.5 5.5 0 0 0 12 4z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "UNDERSTAND",
//     description: "Make sense of it",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M6 4.5h9l3 3v12H6v-15z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M9 10h6M9 13h6M9 16h4"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "REMEMBER",
//     description: "Store it in your mind",
//   },
// ];

// const performanceSteps = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="7.5" stroke="#0a0a0a" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="4" stroke="#0a0a0a" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="1" fill="#0a0a0a" />
//       </svg>
//     ),
//     title: "APPLY",
//     description: "Use it in real situations",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 6.5h16v9H9.5L6 19v-3.5H4v-9z"
//           stroke="#0a0a0a"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <circle cx="9" cy="11" r="0.9" fill="#0a0a0a" />
//         <circle cx="12" cy="11" r="0.9" fill="#0a0a0a" />
//         <circle cx="15" cy="11" r="0.9" fill="#0a0a0a" />
//       </svg>
//     ),
//     title: "COMMUNICATE",
//     description: "Express and influence",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M12 3 8 12h3l-1 9 6-11h-3l1-7z"
//           stroke="#0a0a0a"
//           strokeWidth="1.3"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "EXECUTE",
//     description: "Deliver results consistently",
//   },
// ];

// function YellowArrow() {
//   return (
//     <span className="home3-prowess-arrow home3-prowess-arrow-yellow">
//       <svg viewBox="0 0 60 24" fill="none" preserveAspectRatio="none">
//         <defs>
//           <linearGradient
//             id="yellowArrowFade"
//             x1="0%"
//             y1="0%"
//             x2="100%"
//             y2="0%"
//           >
//             <stop offset="0%" stopColor="#f5b301" stopOpacity="0" />
//             <stop offset="45%" stopColor="#f5b301" stopOpacity="0.9" />
//             <stop offset="100%" stopColor="#f5b301" stopOpacity="1" />
//           </linearGradient>
//         </defs>
//         <path
//           d="M0 8h34v-6l24 10-24 10v-6H0z"
//           fill="url(#yellowArrowFade)"
//         />
//       </svg>
//     </span>
//   );
// }

// function BlackArrow() {
//   return (
//     <span className="home3-prowess-arrow home3-prowess-arrow-black">
//       <svg viewBox="0 0 60 24" fill="none" preserveAspectRatio="none">
//         <path
//           d="M0 8h34v-6l24 10-24 10v-6H0z"
//           fill="#0a0a0a"
//         />
//       </svg>
//     </span>
//   );
// }

// /* ---------- Thin line arrows for use INSIDE the boxes (between steps) ---------- */
// function YellowArrowThin() {
//   return (
//     <span className="home3-prowess-arrow-thin">
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 12h15M13 6l6 6-6 6"
//           stroke="#f5b301"
//           strokeWidth="2.4"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//   );
// }

// function BlackArrowThin() {
//   return (
//     <span className="home3-prowess-arrow-thin">
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 12h15M13 6l6 6-6 6"
//           stroke="#0a0a0a"
//           strokeWidth="2.4"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     </span>
//   );
// }

// export default function Home3() {
//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false,
//       offset: 60,
//     });
//   }, []);

//   return (
//     <section className="home3-prowess-section">
//       <div className="home3-prowess-container">
//         <div className="home3-prowess-row">
//           {/* ---------- Left: heading + description ---------- */}
//           <div
//             className="home3-prowess-heading-block"
//             data-aos="fade-right"
//           >
//             <h2 className="home3-prowess-title">
//               KNOWLEDGE
//               <br />
//               ISN&apos;T ENOUGH
//             </h2>
//             <span className="home3-prowess-underline"></span>
//             <p className="home3-prowess-desc">
//               Knowing is not the same as doing. Performance is a separate
//               capability.
//             </p>
//           </div>

//           {/* ---------- Knowledge box ---------- */}
//           <div
//             className="home3-prowess-box home3-prowess-box-knowledge"
//             data-aos="fade-up"
//           >
//             <h3 className="home3-prowess-box-heading">
//               KNOWLEDGE (INFORMATION)
//             </h3>

//             <div className="home3-prowess-steps-row">
//               {knowledgeSteps.map((step, index) => (
//                 <div className="home3-prowess-step-wrap" key={index}>
//                   {index > 0 && <YellowArrowThin />}
//                   <div className="home3-prowess-step">
//                     <span className="home3-prowess-step-icon">
//                       {step.icon}
//                     </span>
//                     <h4 className="home3-prowess-step-title">
//                       {step.title}
//                     </h4>
//                     <p className="home3-prowess-step-desc">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ---------- Yellow arrow connecting to gap circle ---------- */}
//           <span
//             className="home3-prowess-arrow-big"
//             data-aos="fade-in"
//             data-aos-delay="150"
//           >
//             <YellowArrow />
//           </span>

//           {/* ---------- The Performance Gap circle ---------- */}
//           <div
//             className="home3-prowess-gap-circle"
//             data-aos="zoom-in"
//             data-aos-delay="250"
//           >
//             <span className="home3-prowess-gap-text">
//               THE
//               <br />
//               PERFORMANCE
//               <br />
//               GAP
//             </span>
//           </div>

//           {/* ---------- Yellow arrow connecting to performance box ---------- */}
//           <span
//             className="home3-prowess-arrow-big"
//             data-aos="fade-in"
//             data-aos-delay="350"
//           >
//             <YellowArrow />
//           </span>

//           {/* ---------- Performance box ---------- */}
//           <div
//             className="home3-prowess-box home3-prowess-box-performance"
//             data-aos="fade-up"
//             data-aos-delay="150"
//           >
//             <h3 className="home3-prowess-box-heading">
//               PERFORMANCE (APPLICATION)
//             </h3>

//             <div className="home3-prowess-steps-row">
//               {performanceSteps.map((step, index) => (
//                 <div className="home3-prowess-step-wrap" key={index}>
//                   {index > 0 && <BlackArrowThin />}
//                   <div className="home3-prowess-step">
//                     <span className="home3-prowess-step-icon">
//                       {step.icon}
//                     </span>
//                     <h4 className="home3-prowess-step-title">
//                       {step.title}
//                     </h4>
//                     <p className="home3-prowess-step-desc">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }













// Dynamic Code creative and animation dalne ke phele wala code hi hai sirf isme aniamtion crative ke liye cs change kiye the 
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home3.css";

/* ══════════════════════════════════════════════════════════════
   STATIC ICONS — same as before, kabhi change nahi hoga
   ══════════════════════════════════════════════════════════════ */
const knowledgeIcons = [
  /* LEARN */
  <svg viewBox="0 0 24 24" fill="none" key="k0">
    <path
      d="M9 4c-2.5 0-4.5 2-4.5 4.3 0 1 .3 1.9.9 2.6-.6.6-.9 1.4-.9 2.3 0 1.9 1.5 3.5 3.4 3.6.4 1.5 1.7 2.7 3.3 2.7s2.9-1.2 3.3-2.7c1.9-.1 3.4-1.7 3.4-3.6 0-.9-.3-1.7-.9-2.3.6-.7.9-1.6.9-2.6C18.4 6 16.4 4 13.9 4c-.9 0-1.8.3-2.4.8C10.9 4.3 10 4 9 4z"
      stroke="#f5b301"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path d="M12 8v9" stroke="#f5b301" strokeWidth="1.3" />
  </svg>,
  /* UNDERSTAND */
  <svg viewBox="0 0 24 24" fill="none" key="k1">
    <path
      d="M9 16.5h6M10 19h4"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M12 4a5.5 5.5 0 0 0-3 10.1c.5.35.8.9.8 1.5v.4h4.4v-.4c0-.6.3-1.15.8-1.5A5.5 5.5 0 0 0 12 4z"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>,
  /* REMEMBER */
  <svg viewBox="0 0 24 24" fill="none" key="k2">
    <path
      d="M6 4.5h9l3 3v12H6v-15z"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M9 10h6M9 13h6M9 16h4"
      stroke="#f5b301"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>,
];

const performanceIcons = [
  /* APPLY */
  <svg viewBox="0 0 24 24" fill="none" key="p0">
    <circle cx="12" cy="12" r="7.5" stroke="#0a0a0a" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="#0a0a0a" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1" fill="#0a0a0a" />
  </svg>,
  /* COMMUNICATE */
  <svg viewBox="0 0 24 24" fill="none" key="p1">
    <path
      d="M4 6.5h16v9H9.5L6 19v-3.5H4v-9z"
      stroke="#0a0a0a"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="11" r="0.9" fill="#0a0a0a" />
    <circle cx="12" cy="11" r="0.9" fill="#0a0a0a" />
    <circle cx="15" cy="11" r="0.9" fill="#0a0a0a" />
  </svg>,
  /* EXECUTE */
  <svg viewBox="0 0 24 24" fill="none" key="p2">
    <path
      d="M12 3 8 12h3l-1 9 6-11h-3l1-7z"
      stroke="#0a0a0a"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>,
];

/* ══════════════════════════════════════════════════════════════
   ARROW COMPONENTS — same as before
   ══════════════════════════════════════════════════════════════ */
function YellowArrow() {
  return (
    <span className="home3-prowess-arrow home3-prowess-arrow-yellow">
      <svg viewBox="0 0 60 24" fill="none" preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="yellowArrowFade"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#f5b301" stopOpacity="0" />
            <stop offset="45%" stopColor="#f5b301" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f5b301" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M0 8h34v-6l24 10-24 10v-6H0z"
          fill="url(#yellowArrowFade)"
        />
      </svg>
    </span>
  );
}

function BlackArrow() {
  return (
    <span className="home3-prowess-arrow home3-prowess-arrow-black">
      <svg viewBox="0 0 60 24" fill="none" preserveAspectRatio="none">
        <path d="M0 8h34v-6l24 10-24 10v-6H0z" fill="#0a0a0a" />
      </svg>
    </span>
  );
}

function YellowArrowThin() {
  return (
    <span className="home3-prowess-arrow-thin">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12h15M13 6l6 6-6 6"
          stroke="#f5b301"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function BlackArrowThin() {
  return (
    <span className="home3-prowess-arrow-thin">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 12h15M13 6l6 6-6 6"
          stroke="#0a0a0a"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function Home3() {
  const [detail, setDetail] = useState({ heading: "", description: "" });
  const [knowledgeItems, setKnowledgeItems] = useState([]);
  const [performanceItems, setPerformanceItems] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ── AOS Init ── */
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 60,
    });
  }, []);

  /* ── Fetch Data ── */
  useEffect(() => {
    const fetchData = async () => {
      try {
        /* ───── 1. DETAIL API (left heading block) ───── */
        /* ⬇️ APNI DETAIL API KA URL YAHAN DAALO ⬇️ */
        try {
          const detailRes = await fetch(
            "https://workfit.co.in/provess/Prowess/index.php/API/list_knowledge_enough_deatils"
          );
           const detailJson = await detailRes.json();
          if (detailJson.success === "1" && detailJson.data) {
            /* ⬇️ YE LINE FIX HAI — data[0] kyo ki array me aata hai ⬇️ */
            const d = Array.isArray(detailJson.data)
              ? detailJson.data[0]
              : detailJson.data;
            if (d.heading) {
              setDetail({ heading: d.heading, description: d.description || "" });
            }
          }
        } catch (e) {
          /* detail fail hone par steps anyway dikhenge */
        }

        /* ───── 2. STEPS API ───── */
        const stepsRes = await fetch(
          "https://workfit.co.in/provess/Prowess/index.php/API/list_knowledge_enough"
        );
        const stepsJson = await stepsRes.json();

        if (stepsJson.success === "1" && stepsJson.data) {
          let data = Array.isArray(stepsJson.data)
            ? stepsJson.data
            : [stepsJson.data];

          /* Ascending: admin ne jo pehle dala wo first icon par */
          data.sort((a, b) => a.id - b.id);

          /* knowledge_type ke hisab se split */
          setKnowledgeItems(
            data.filter((d) =>
              d.knowledge_type?.toLowerCase().includes("knowledge")
            )
          );
          setPerformanceItems(
            data.filter((d) =>
              d.knowledge_type?.toLowerCase().includes("performance")
            )
          );
        }
      } catch (err) {
        console.error("Home3 API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* ── Loading / Empty guard ── */
  if (loading || knowledgeItems.length === 0 || performanceItems.length === 0)
    return null;

  /* ── Box headings: knowledge_type se (uppercase) ── */
  const knowledgeBoxHeading =
    knowledgeItems[0]?.knowledge_type?.toUpperCase() || "";
  const performanceBoxHeading =
    performanceItems[0]?.knowledge_type?.toUpperCase() || "";

  /* ── Heading split: first word line 1, baaki line 2 (static jaisa layout) ── */
  const headingWords = detail.heading ? detail.heading.split(" ") : [];
  const headingLine1 = headingWords[0] || "";
  const headingLine2 = headingWords.slice(1).join(" ");

  return (
    <section className="home3-prowess-section">
      <div className="home3-prowess-container">
        <div className="home3-prowess-row">
          {/* ───── Left: heading + description ───── */}
          <div
            className="home3-prowess-heading-block"
            data-aos="fade-right"
          >
            <h2 className="home3-prowess-title">
              {headingLine1}
              {headingLine2 && (
                <>
                  <br />
                  {headingLine2}
                </>
              )}
            </h2>
            <span className="home3-prowess-underline"></span>
            <p className="home3-prowess-desc">{detail.description}</p>
          </div>

          {/* ───── Knowledge box ───── */}
          <div
            className="home3-prowess-box home3-prowess-box-knowledge"
            data-aos="fade-up"
          >
            <h3 className="home3-prowess-box-heading">
              {knowledgeBoxHeading}
            </h3>

            <div className="home3-prowess-steps-row">
              {knowledgeItems.map((step, index) => (
                <div
                  className="home3-prowess-step-wrap"
                  key={step.id || index}
                >
                  {index > 0 && <YellowArrowThin />}
                  <div className="home3-prowess-step">
                    <span className="home3-prowess-step-icon">
                      {knowledgeIcons[index % knowledgeIcons.length]}
                    </span>
                    <h4 className="home3-prowess-step-title">
                      {step.heading}
                    </h4>
                    <p className="home3-prowess-step-desc">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ───── Yellow arrow ───── */}
          <span
            className="home3-prowess-arrow-big"
            data-aos="fade-in"
            data-aos-delay="150"
          >
            <YellowArrow />
          </span>

          {/* ───── The Performance Gap circle — STATIC ───── */}
          <div
            className="home3-prowess-gap-circle"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <span className="home3-prowess-gap-text">
              THE
              <br />
              PERFORMANCE
              <br />
              GAP
            </span>
          </div>

          {/* ───── Yellow arrow ───── */}
          <span
            className="home3-prowess-arrow-big"
            data-aos="fade-in"
            data-aos-delay="350"
          >
            <YellowArrow />
          </span>

          {/* ───── Performance box ───── */}
          <div
            className="home3-prowess-box home3-prowess-box-performance"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3 className="home3-prowess-box-heading">
              {performanceBoxHeading}
            </h3>

            <div className="home3-prowess-steps-row">
              {performanceItems.map((step, index) => (
                <div
                  className="home3-prowess-step-wrap"
                  key={step.id || index}
                >
                  {index > 0 && <BlackArrowThin />}
                  <div className="home3-prowess-step">
                    <span className="home3-prowess-step-icon">
                      {performanceIcons[index % performanceIcons.length]}
                    </span>
                    <h4 className="home3-prowess-step-title">
                      {step.heading}
                    </h4>
                    <p className="home3-prowess-step-desc">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}