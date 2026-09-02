// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Contact2.css";

// const reasons = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M12 4 3 8.5 12 13l9-4.5L12 4z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M6 11v4c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-4"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "STUDENT PERFORMANCE PROGRAMS",
//     description:
//       "Build confidence, communication and execution skills through experiential training.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M12 3 3 8h18L12 3z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "COLLEGE TRAINING PROGRAMS",
//     description:
//       "Seminars, workshops and development programs for students and faculty.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect
//           x="4"
//           y="8"
//           width="16"
//           height="11"
//           rx="1.5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//         />
//         <path
//           d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "CORPORATE LEARNING SOLUTIONS",
//     description:
//       "Enhance team performance with customized training in leadership, communication and more.",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="8" r="3.2" stroke="#f5b301" strokeWidth="1.4" />
//         <path
//           d="M9 11.5 7.5 20l4.5-2 4.5 2-1.5-8.5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "PERFORMANCE COACHING PROGRAMS",
//     description:
//       "Structured coaching to develop habits, skills and high performance mindset.",
//   },
// ];

// export default function Contact2() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false,
//       offset: 80,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <section className="connect-peop-prow-section">
//       <div className="connect-peop-prow-container">
//         <h2 className="connect-peop-prow-heading" data-aos="zoom-in-up">
//           WHY PEOPLE CONNECT WITH PROWESS
//         </h2>
//         <span className="connect-peop-prow-underline"></span>

//         <div className="connect-peop-prow-row">
//           {reasons.map((reason, index) => (
//             <div
//               className="connect-peop-prow-card"
//               key={index}
//               data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
//               data-aos-delay={index * 120}
//             >
//               <span className="connect-peop-prow-icon-circle">
//                 {reason.icon}
//               </span>

//               <div className="connect-peop-prow-card-text">
//                 <h3 className="connect-peop-prow-card-title">
//                   {reason.title}
//                 </h3>
//                 <span className="connect-peop-prow-card-border"></span>
//                 <p className="connect-peop-prow-card-desc">
//                   {reason.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









// Dyanamic Code
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact2.css";

/* ---------- Static Icons (kabhi change nahi honge) ---------- */
const staticIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 4 3 8.5 12 13l9-4.5L12 4z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M6 11v4c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-4" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 3 3 8h18L12 3z" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
    <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" stroke="#f5b301" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="4" y="8" width="16" height="11" rx="1.5" stroke="#f5b301" strokeWidth="1.4" />
    <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="3.2" stroke="#f5b301" strokeWidth="1.4" />
    <path d="M9 11.5 7.5 20l4.5-2 4.5 2-1.5-8.5" stroke="#f5b301" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>,
];

/* ---------- Fallback data ---------- */
const fallbackData = [
  {
    title: "STUDENT PERFORMANCE PROGRAMS",
    description: "Build confidence, communication and execution skills through experiential training.",
  },
  {
    title: "COLLEGE TRAINING PROGRAMS",
    description: "Seminars, workshops and development programs for students and faculty.",
  },
  {
    title: "CORPORATE LEARNING SOLUTIONS",
    description: "Enhance team performance with customized training in leadership, communication and more.",
  },
  {
    title: "PERFORMANCE COACHING PROGRAMS",
    description: "Structured coaching to develop habits, skills and high performance mindset.",
  },
];

export default function Contact2() {
  const [reasons, setReasons] = useState(fallbackData);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 80,
      easing: "ease-out-cubic",
    });

    fetch("https://workfit.co.in/provess/Prowess/index.php/API/list_why_people_connect")
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "true" && res.data) {
          // Array ya single object — dono handle
          const items = Array.isArray(res.data) ? res.data : [res.data];

          // id ke basis pe ascending sort → pehle add = pehla card
          const sorted = items
            .slice()
            .sort((a, b) => (a.id || 0) - (b.id || 0))
            .slice(0, 4);

          const mapped = sorted.map((item) => ({
            title: item.heading || "",
            description: item.description || "",
          }));

          if (mapped.length > 0 && mapped[0].title) {
            setReasons(mapped);
          }
        }
      })
      .catch(() => {
        // API fail → fallback
      });
  }, []);

  return (
    <section className="connect-peop-prow-section">
      <div className="connect-peop-prow-container">
        <h2 className="connect-peop-prow-heading" data-aos="zoom-in-up">
          WHY PEOPLE CONNECT WITH PROWESS
        </h2>
        <span className="connect-peop-prow-underline"></span>

        <div className="connect-peop-prow-row">
          {reasons.map((reason, index) => (
            <div
              className="connect-peop-prow-card"
              key={index}
              data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-delay={index * 120}
            >
              <span className="connect-peop-prow-icon-circle">
                {staticIcons[index] || staticIcons[0]}
              </span>

              <div className="connect-peop-prow-card-text">
                <h3 className="connect-peop-prow-card-title">{reason.title}</h3>
                <span className="connect-peop-prow-card-border"></span>
                <p className="connect-peop-prow-card-desc">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}