// import { useEffect, useRef } from "react";
// import "./Prowess3.css";

// const steps = [
//   {
//     number: 1,
//     color: "#f5a623",
//     title: "Challenge",
//     desc: "We start with real world challenges that push your thinking.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.6">
//         <path d="M3 19h18" />
//         <path d="M4.5 19 10 9l2.2 3.6L15 8l4.5 11" />
//         <path d="M13.2 11.4 15 8l1.2 2.1" />
//         <path d="M15 5.5 20 5.5" />
//         <path d="M15 5.5v3" />
//       </svg>
//     ),
//   },
//   {
//     number: 2,
//     color: "#3ba55d",
//     title: "Execute",
//     desc: "You take action, apply your knowledge and do the work.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#3ba55d" strokeWidth="1.6">
//         <circle cx="14" cy="5" r="1.8" />
//         <path d="M9 21l2-6 2.2 1.6L15 21" />
//         <path d="M6 14l2.5-2.8 2-1.6 2.3 2 3-1" />
//         <path d="M8.5 11.2 6.5 9" />
//       </svg>
//     ),
//   },
//   {
//     number: 3,
//     color: "#3a7bd5",
//     title: "Reflect",
//     desc: "You pause and reflect on your experience and results.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#3a7bd5" strokeWidth="1.6">
//         <path d="M9 18.5V17a5 5 0 1 1 6 0v1.5" />
//         <path d="M9.5 21h5" />
//         <path d="M12 3v1.2M4.5 6.2l1 1M19.5 6.2l-1 1M3.5 12h1.3M19.2 12h1.3" />
//       </svg>
//     ),
//   },
//   {
//     number: 4,
//     color: "#8b5cf6",
//     title: "Feedback",
//     desc: "You get specific, honest feedback that helps you grow.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.6">
//         <path d="M4 5.5h16v10H10.5L6 19v-3.5H4Z" />
//         <circle cx="9" cy="10.5" r="0.9" fill="#8b5cf6" stroke="none" />
//         <circle cx="12" cy="10.5" r="0.9" fill="#8b5cf6" stroke="none" />
//         <circle cx="15" cy="10.5" r="0.9" fill="#8b5cf6" stroke="none" />
//       </svg>
//     ),
//   },
//   {
//     number: 5,
//     color: "#e8622c",
//     title: "Improve",
//     desc: "You refine your skills, correct mistakes and get better.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#e8622c" strokeWidth="1.6">
//         <path d="M4 19h16" />
//         <rect x="6" y="13" width="2.6" height="6" fill="#e8622c" stroke="none" />
//         <rect x="10.7" y="10" width="2.6" height="9" fill="#e8622c" stroke="none" />
//         <rect x="15.4" y="7" width="2.6" height="12" fill="#e8622c" stroke="none" />
//         <path d="M14 4.5 19 4.5 19 9.5" />
//         <path d="M19 4.5 12.5 11" />
//       </svg>
//     ),
//   },
//   {
//     number: 6,
//     color: "#1fb5a3",
//     title: "Repeat",
//     desc: "You repeat the cycle and level up continuously.",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="#1fb5a3" strokeWidth="1.7">
//         <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
//         <path d="M20 4v4h-4" />
//         <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
//         <path d="M4 20v-4h4" />
//       </svg>
//     ),
//   },
// ];

// export default function Prowess3() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//   const el = sectionRef.current;
//   if (!el) return;

//   const items = el.querySelectorAll(".steps-prow-block, .steps-prow-card");

//   items.forEach((item, i) => {
//     item.style.setProperty("--reveal-delay", `${i * 0.12}s`);
//   });

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("steps-prow-visible");
//         } else {
//           // ✅ view se bahar jaate hi class hata do,
//           // taaki wapas scroll karne par dobara animate ho
//           entry.target.classList.remove("steps-prow-visible");
//         }
//       });
//     },
//     { threshold: 0.2 }
//   );

//   items.forEach((item) => observer.observe(item));

//   return () => observer.disconnect();
// }, []);

//   return (
//     <section className="steps-prow-section" ref={sectionRef}>
//       <div className="steps-prow-heading-row">
//         <span className="steps-prow-heading-line"></span>
//         <h2 className="steps-prow-heading">The 6-Step Prowess Method</h2>
//         <span className="steps-prow-heading-line"></span>
//       </div>

//       <div className="steps-prow-row">
//         {steps.map((step, i) => (
//           <div className="steps-prow-block" key={step.number}>
//             <div className="steps-prow-item">
//               <div className="steps-prow-circle-wrap">
//                 <span className="steps-prow-number">{step.number}</span>
//                 <div
//                   className="steps-prow-circle"
//                   style={{ "--step-color": step.color }}
//                 >
//                   {step.icon}
//                 </div>
//               </div>
//               <h3
//                 className="steps-prow-title"
//                 style={{ color: step.color }}
//               >
//                 {step.title}
//               </h3>
//               <p className="steps-prow-desc">{step.desc}</p>
//             </div>

//             {i < steps.length - 1 && (
//               <div className="steps-prow-connector">
//                 <span className="steps-prow-connector-line"></span>
//                 <svg
//                   className="steps-prow-arrow"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="#f5a623"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M9 6l6 6-6 6" />
//                 </svg>
//               </div>
//             )}
//           </div>
//         ))}

//         <div className="steps-prow-connector steps-prow-connector-final">
//           <span className="steps-prow-connector-line"></span>
//           <svg
//             className="steps-prow-arrow"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="#f5a623"
//             strokeWidth="2.2"
//           >
//             <path d="M9 6l6 6-6 6" />
//           </svg>
//         </div>

//         <div className="steps-prow-card">
//           <div className="steps-prow-card-icon">
//             <svg viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.8">
//               <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
//               <path d="M20 4v4h-4" />
//               <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
//               <path d="M4 20v-4h4" />
//             </svg>
//           </div>
//           <p className="steps-prow-card-text">
//             This cycle creates
//             <br />
//             <span>PERFORMANCE</span>
//             <br />
//             that lasts.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }












import { useEffect, useRef, useState } from "react";
import "./Prowess3.css";

// ✅ Number, color, icon — sab STATIC hai. API se inka koi lena dena nahi.
// Order fixed hai: index 0 = 1st step, index 1 = 2nd step, ...
const staticSteps = [
  {
    number: 1,
    color: "#f5a623",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.6">
        <path d="M3 19h18" />
        <path d="M4.5 19 10 9l2.2 3.6L15 8l4.5 11" />
        <path d="M13.2 11.4 15 8l1.2 2.1" />
        <path d="M15 5.5 20 5.5" />
        <path d="M15 5.5v3" />
      </svg>
    ),
  },
  {
    number: 2,
    color: "#3ba55d",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3ba55d" strokeWidth="1.6">
        <circle cx="14" cy="5" r="1.8" />
        <path d="M9 21l2-6 2.2 1.6L15 21" />
        <path d="M6 14l2.5-2.8 2-1.6 2.3 2 3-1" />
        <path d="M8.5 11.2 6.5 9" />
      </svg>
    ),
  },
  {
    number: 3,
    color: "#3a7bd5",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3a7bd5" strokeWidth="1.6">
        <path d="M9 18.5V17a5 5 0 1 1 6 0v1.5" />
        <path d="M9.5 21h5" />
        <path d="M12 3v1.2M4.5 6.2l1 1M19.5 6.2l-1 1M3.5 12h1.3M19.2 12h1.3" />
      </svg>
    ),
  },
  {
    number: 4,
    color: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.6">
        <path d="M4 5.5h16v10H10.5L6 19v-3.5H4Z" />
        <circle cx="9" cy="10.5" r="0.9" fill="#8b5cf6" stroke="none" />
        <circle cx="12" cy="10.5" r="0.9" fill="#8b5cf6" stroke="none" />
        <circle cx="15" cy="10.5" r="0.9" fill="#8b5cf6" stroke="none" />
      </svg>
    ),
  },
  {
    number: 5,
    color: "#e8622c",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#e8622c" strokeWidth="1.6">
        <path d="M4 19h16" />
        <rect x="6" y="13" width="2.6" height="6" fill="#e8622c" stroke="none" />
        <rect x="10.7" y="10" width="2.6" height="9" fill="#e8622c" stroke="none" />
        <rect x="15.4" y="7" width="2.6" height="12" fill="#e8622c" stroke="none" />
        <path d="M14 4.5 19 4.5 19 9.5" />
        <path d="M19 4.5 12.5 11" />
      </svg>
    ),
  },
  {
    number: 6,
    color: "#1fb5a3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1fb5a3" strokeWidth="1.7">
        <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
        <path d="M20 4v4h-4" />
        <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
        <path d="M4 20v-4h4" />
      </svg>
    ),
  },
];

// ✅ Fallback text — jab tak API load ho raha hai ya fail ho jaye,
// UI same hi dikhega, layout kabhi nahi tootega.
const fallbackData = [
  { heading: "Challenge", description: "We start with real world challenges that push your thinking." },
  { heading: "Execute", description: "You take action, apply your knowledge and do the work." },
  { heading: "Reflect", description: "You pause and reflect on your experience and results." },
  { heading: "Feedback", description: "You get specific, honest feedback that helps you grow." },
  { heading: "Improve", description: "You refine your skills, correct mistakes and get better." },
  { heading: "Repeat", description: "You repeat the cycle and level up continuously." },
];

const API_URL =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_step_prowess_method";

export default function Prowess3() {
  const sectionRef = useRef(null);
  const [stepData, setStepData] = useState(fallbackData);

  // ✅ API se sirf heading/description laake update karna hai.
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();

        // ✅ Response ka "data" ya to ek object ho sakta hai
        // ya array — dono handle kar rahe hain.
        let list = json.data ?? json.list ?? json.result ?? json;
        if (!Array.isArray(list)) list = [list];

        if (!list.length || !list[0]) return;

        // ✅ id ke hisaab se ascending order me sort (1,2,3,...)
        const sortedList = [...list].sort((a, b) => {
          const aId = Number(a?.id ?? 0);
          const bId = Number(b?.id ?? 0);
          return aId - bId;
        });

        // ✅ Sirf heading/description map karo, number/color/icon touch nahi karenge
        const merged = staticSteps.map((_, i) => {
          const apiItem = sortedList[i] || {};
          const heading = apiItem.heading ?? fallbackData[i]?.heading ?? "";
          const description =
            apiItem.description ?? fallbackData[i]?.description ?? "";
          return { heading, description };
        });

        if (isMounted) setStepData(merged);
      } catch (err) {
        // API fail hone par bhi UI same rahega (fallback text ke saath)
        console.error("Failed to load step prowess method data:", err);
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const itemsEls = el.querySelectorAll(".steps-prow-block, .steps-prow-card");

    itemsEls.forEach((item, i) => {
      item.style.setProperty("--reveal-delay", `${i * 0.12}s`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("steps-prow-visible");
          } else {
            // ✅ view se bahar jaate hi class hata do,
            // taaki wapas scroll karne par dobara animate ho
            entry.target.classList.remove("steps-prow-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsEls.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [stepData]);

  return (
    <section className="steps-prow-section" ref={sectionRef}>
      {/* ✅ Section heading STATIC — koi change nahi */}
      <div className="steps-prow-heading-row">
        <span className="steps-prow-heading-line"></span>
        <h2 className="steps-prow-heading">The 6-Step Prowess Method</h2>
        <span className="steps-prow-heading-line"></span>
      </div>

      <div className="steps-prow-row">
        {staticSteps.map((step, i) => {
          const data = stepData[i] || fallbackData[i] || {};
          return (
            <div className="steps-prow-block" key={step.number}>
              <div className="steps-prow-item">
                <div className="steps-prow-circle-wrap">
                  <span className="steps-prow-number">{step.number}</span>
                  <div
                    className="steps-prow-circle"
                    style={{ "--step-color": step.color }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3
                  className="steps-prow-title"
                  style={{ color: step.color }}
                >
                  {data.heading}
                </h3>
                <p className="steps-prow-desc">{data.description}</p>
              </div>

              {i < staticSteps.length - 1 && (
                <div className="steps-prow-connector">
                  <span className="steps-prow-connector-line"></span>
                  <svg
                    className="steps-prow-arrow"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#f5a623"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}

        <div className="steps-prow-connector steps-prow-connector-final">
          <span className="steps-prow-connector-line"></span>
          <svg
            className="steps-prow-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f5a623"
            strokeWidth="2.2"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>

        {/* ✅ Final card STATIC — koi change nahi */}
        <div className="steps-prow-card">
          <div className="steps-prow-card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#f5a623" strokeWidth="1.8">
              <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8" />
              <path d="M20 4v4h-4" />
              <path d="M20 12a8 8 0 0 1-13.7 5.7L4 16" />
              <path d="M4 20v-4h4" />
            </svg>
          </div>
          <p className="steps-prow-card-text">
            This cycle creates
            <br />
            <span>PERFORMANCE</span>
            <br />
            that lasts.
          </p>
        </div>
      </div>
    </section>
  );
}