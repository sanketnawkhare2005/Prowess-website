// import { useEffect, useRef, useState } from "react";
// import "./Coaches4.css";

// export default function Coaches4() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       },
//       {
//         threshold: 0.25,
//       }
//     );

//     observer.observe(section);

//     return () => {
//       observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`unlock-pro-section ${isVisible ? "unlock-pro-visible" : ""}`}
//     >
//       <div className="unlock-pro-bg">
//         <img
//           src="/images/unlockbg.png"
//           alt=""
//           className="unlock-pro-bg-img"
//         />
//         <div className="unlock-pro-bg-overlay"></div>
//       </div>

//       <div className="unlock-pro-container">
//         <div className="unlock-pro-text">
//           <h2 className="unlock-pro-heading">
//             READY TO{" "}
//             <span className="unlock-pro-heading-accent">
//               UNLOCK YOUR POTENTIAL?
//             </span>
//           </h2>
//           <p className="unlock-pro-desc">
//             Learn. Practice. Perform. Succeed.
//             <br />
//             We are here to guide you on your journey.
//           </p>
//         </div>

//         <button type="button" className="unlock-pro-btn">
//           TALK TO A PERFORMANCE COACH
//           <span className="unlock-pro-btn-icon">
//             <svg viewBox="0 0 24 24">
//               <path
//                 d="M5 12h13M13 6l6 6-6 6"
//                 stroke="#f5b301"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// }





// Dyanamic Code
import { useEffect, useRef, useState } from "react";
import "./Coaches4.css";
import TalkFormNewPopup from "../TalkFormNewPopup/TalkFormNewPopup";

const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/list_your_potential";

// Heading ke pehle 2 words WHITE honge, baaki words YELLOW(accent) honge
// (jaise pehle "READY TO" white tha aur "UNLOCK YOUR POTENTIAL?" yellow tha)
const WHITE_WORD_COUNT = 2;

function splitHeading(fullHeading) {
  const words = (fullHeading || "").trim().split(/\s+/).filter(Boolean);
  const whitePart = words.slice(0, WHITE_WORD_COUNT).join(" ");
  const yellowPart = words.slice(WHITE_WORD_COUNT).join(" ");
  return { whitePart, yellowPart };
}

export default function Coaches4() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Dynamic content (background image, gradient, layout sab static hi rahenge)
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ---------- FETCH API ----------
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        const item = Array.isArray(res?.data) ? res.data[0] : res?.data;
        if (item) {
          setHeading(item.heading || "");
          setDescription(item.description || "");
          setButtonText(item.button || "");
        }
      })
      .catch((err) => console.error("Unlock Potential API error:", err))
      .finally(() => setLoading(false));
  }, []);

  // ---------- SCROLL REVEAL (same as before) ----------
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [loading]);

  if (loading) {
    return <section className="unlock-pro-section" ref={sectionRef}></section>;
  }

  const { whitePart, yellowPart } = splitHeading(heading);

  return (
    <>
    <section
      ref={sectionRef}
      className={`unlock-pro-section ${isVisible ? "unlock-pro-visible" : ""}`}
    >
      <div className="unlock-pro-bg">
        <img
          src="/images/unlockbg.png"
          alt=""
          className="unlock-pro-bg-img"
        />
        <div className="unlock-pro-bg-overlay"></div>
      </div>

      <div className="unlock-pro-container">
        <div className="unlock-pro-text">
          {/* Poora heading ab API se dynamic hai — pehle 2 words WHITE, baaki words YELLOW(accent) */}
          <h2 className="unlock-pro-heading">
            {whitePart}{" "}
            <span className="unlock-pro-heading-accent">{yellowPart}</span>
          </h2>
          <p className="unlock-pro-desc">{description}</p>
        </div>

        <button type="button" className="unlock-pro-btn"
          onClick={() => setIsPopupOpen(true)}
        >
          {buttonText}
          <span className="unlock-pro-btn-icon">
            <svg viewBox="0 0 24 24">
              <path
                d="M5 12h13M13 6l6 6-6 6"
                stroke="#f5b301"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
        <TalkFormNewPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
    </>
  );
}