// import { useEffect, useRef } from "react";
// import "./Prowess5.css";

// export default function Prowess5() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".train-prowess-quote-mark, " +
//       ".train-prowess-quote, " +
//       ".train-prowess-divider, " +
//       ".train-prowess-info, " +
//       ".train-prowess-cta"
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
//     <section className="train-prowess-section" ref={sectionRef}>
//       <div className="train-prowess-image">
//         <img
//           src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=600&q=80"
//           alt=""
//         />
//         <span className="train-prowess-image-fade"></span>
//       </div>

//       <div className="train-prowess-content">
//         <span className="train-prowess-quote-mark" style={{ "--d": 0 }}>&#8220;</span>

//         <p className="train-prowess-quote" style={{ "--d": 1 }}>
//           We don&apos;t just train you.
//           <br />
//           <span>We build your performance step by step.</span>
//         </p>

//         <span className="train-prowess-divider" style={{ "--d": 2 }}></span>

//         <div className="train-prowess-info" style={{ "--d": 3 }}>
//           <div className="train-prowess-info-icon">
//             <svg viewBox="0 0 36 30" fill="none" stroke="#ffffff" strokeWidth="1.5">
//               <path d="M14 25.5c0-4.5 1.8-6.8 4-6.8s4 2.3 4 6.8" />
//               <circle cx="18" cy="12.5" r="3.6" />
//               <path d="M4 25.5c0-3.8 1.4-5.8 3.3-5.8" />
//               <circle cx="7.8" cy="14" r="2.8" />
//               <path d="M32 25.5c0-3.8-1.4-5.8-3.3-5.8" />
//               <circle cx="28.2" cy="14" r="2.8" />
//               <path d="M18 3.2 19 5.6 21.5 5.9 19.6 7.6 20.1 10 18 8.7 15.9 10 16.4 7.6 14.5 5.9 17 5.6 18 3.2Z" />
//             </svg>
//           </div>
//           <p className="train-prowess-info-text">
//             This is not a course.
//             <br />
//             This is a performance system.
//           </p>
//         </div>

//         <div className="train-prowess-cta" style={{ "--d": 4 }}>
//           <button className="train-prowess-btn">
//             MEET YOUR PERFORMANCE COACHES
//             <span className="train-prowess-btn-circle">
//               <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
//                 <path d="M5 12h14M13 6l6 6-6 6" />
//               </svg>
//             </span>
//           </button>
//           <p className="train-prowess-btn-sub">Guidance that drives your growth.</p>
//         </div>
//       </div>
//     </section>
//   );
// }














// dynamic code
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Prowess5.css";

const API_URL =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_train_steps";

// ✅ Fallback text — jab tak API load ho raha hai ya fail ho jaye,
// UI same hi dikhega, layout kabhi nahi tootega.
const fallbackData = {
  main_heading: "We don't just train you.\nWe build your performance step by step.",
  description: "This is not a course.\nThis is a performance system.",
  sub_heading: "Guidance that drives your growth.",
  button: "MEET YOUR PERFORMANCE COACHES",
};

// ✅ Ek hi field (main_heading) ko 2 lines mein todne ke liye helper:
// - Agar text mein "\n" (naya line) hai, usi se split karo.
// - Warna pehle sentence (. ! ?) ke baad se split karo.
// - Kuch bhi match na ho to poora text pehli line (white) mein rahega.
function splitIntoTwoLines(text) {
  if (!text) return { line1: "", line2: "" };

  if (text.includes("\n")) {
    const idx = text.indexOf("\n");
    return {
      line1: text.slice(0, idx).trim(),
      line2: text.slice(idx + 1).trim(),
    };
  }

  const match = text.match(/^(.*?[.!?])\s+(.*)$/);
  if (match) {
    return { line1: match[1].trim(), line2: match[2].trim() };
  }

  return { line1: text.trim(), line2: "" };
}

export default function Prowess5() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [content, setContent] = useState(fallbackData);

  // ✅ API se main_heading, sub_heading, description, button fetch karo
  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();

        // ✅ "data" ek object ho sakta hai ya array ka pehla item
        const raw = Array.isArray(json.data) ? json.data[0] : json.data;
        if (!raw) return;

        const merged = {
          main_heading: raw.main_heading ?? fallbackData.main_heading,
          description: raw.description ?? fallbackData.description,
          sub_heading: raw.sub_heading ?? fallbackData.sub_heading,
          button: raw.button ?? fallbackData.button,
        };

        if (isMounted) setContent(merged);
      } catch (err) {
        // API fail hone par bhi UI same rahega (fallback text ke saath)
        console.error("Failed to load train steps data:", err);
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
      ".train-prowess-quote-mark, " +
      ".train-prowess-quote, " +
      ".train-prowess-divider, " +
      ".train-prowess-info, " +
      ".train-prowess-cta"
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
  }, [content]);

  // ✅ main_heading ko white (line1) + yellow (line2) mein split karo
  const { line1: headingLine1, line2: headingLine2 } = splitIntoTwoLines(
    content.main_heading
  );

  // ✅ description ko bhi 2 lines mein split karo (dono normal color)
  const { line1: descLine1, line2: descLine2 } = splitIntoTwoLines(
    content.description
  );

  return (
    <section className="train-prowess-section" ref={sectionRef}>
      <div className="train-prowess-image">
        <img
          src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=600&q=80"
          alt=""
        />
        <span className="train-prowess-image-fade"></span>
      </div>

      <div className="train-prowess-content">
        <span className="train-prowess-quote-mark" style={{ "--d": 0 }}>&#8220;</span>

        {/* ✅ Dynamic: main_heading — pehli line white, dusri line yellow */}
        <p className="train-prowess-quote" style={{ "--d": 1 }}>
          {headingLine1}
          {headingLine2 && (
            <>
              <br />
              <span>{headingLine2}</span>
            </>
          )}
        </p>

        <span className="train-prowess-divider" style={{ "--d": 2 }}></span>

        <div className="train-prowess-info" style={{ "--d": 3 }}>
          <div className="train-prowess-info-icon">
            <svg viewBox="0 0 36 30" fill="none" stroke="#ffffff" strokeWidth="1.5">
              <path d="M14 25.5c0-4.5 1.8-6.8 4-6.8s4 2.3 4 6.8" />
              <circle cx="18" cy="12.5" r="3.6" />
              <path d="M4 25.5c0-3.8 1.4-5.8 3.3-5.8" />
              <circle cx="7.8" cy="14" r="2.8" />
              <path d="M32 25.5c0-3.8-1.4-5.8-3.3-5.8" />
              <circle cx="28.2" cy="14" r="2.8" />
              <path d="M18 3.2 19 5.6 21.5 5.9 19.6 7.6 20.1 10 18 8.7 15.9 10 16.4 7.6 14.5 5.9 17 5.6 18 3.2Z" />
            </svg>
          </div>
          {/* ✅ Dynamic: description — 2 lines */}
          <p className="train-prowess-info-text">
            {descLine1}
            {descLine2 && (
              <>
                <br />
                {descLine2}
              </>
            )}
          </p>
        </div>

        <div className="train-prowess-cta" style={{ "--d": 4 }}>
          {/* ✅ Dynamic: button text */}
          <Link to="/prowesscoaches" className="text-decoration-none">
          <button className="train-prowess-btn">
            {content.button}
            <span className="train-prowess-btn-circle">
              <svg viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </button>
          </Link>
          {/* ✅ Dynamic: sub_heading */}
          <p className="train-prowess-btn-sub">{content.sub_heading}</p>
        </div>
      </div>
    </section>
  );
}