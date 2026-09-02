// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Contact5.css";

// export default function Contact5() {
//   useEffect(() => {
//     AOS.init({
//       duration: 750,
//       once: false,
//       offset: 60,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <section className="contact5-prow-section">
//       <div className="contact5-prow-bg">
//         <img
//           src="/images/unlockbgworld.png"
//           alt=""
//           className="contact5-prow-bg-img"
//         />
//         <div className="contact5-prow-bg-overlay"></div>
//       </div>

//       <div className="contact5-prow-container">
//         <div className="contact5-prow-left">
//           <span
//             className="contact5-prow-icon-circle contact5-prow-icon-circle-hover"
//             data-aos="flip-down"
//           >
//             <svg viewBox="0 0 24 24" fill="none">
//               <circle cx="12" cy="12" r="8" stroke="#f5b301" strokeWidth="1.4" />
//               <circle cx="12" cy="12" r="4.5" stroke="#f5b301" strokeWidth="1.4" />
//               <circle cx="12" cy="12" r="1" fill="#f5b301" />
//             </svg>
//           </span>

//           <div
//             className="contact5-prow-text"
//             data-aos="zoom-out-up"
//             data-aos-delay="120"
//           >
//             <h2 className="contact5-prow-heading">
//               LET&apos;S BUILD{" "}
//               <span className="contact5-prow-heading-accent">
//                 REAL WORLD PERFORMANCE
//               </span>{" "}
//               TOGETHER.
//             </h2>
//             <p className="contact5-prow-desc">
//               Take the first step towards growth, leadership and success.
//             </p>
//           </div>
//         </div>

//         <button
//           type="button"
//           className="contact5-prow-btn contact5-prow-btn-hover"
//           data-aos="zoom-in-right"
//           data-aos-delay="250"
//         >
//           TALK TO A PERFORMANCE COACH
//           <span className="contact5-prow-btn-icon">
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













import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact5.css";
import TalkFormNewPopup from "../TalkFormNewPopup/TalkFormNewPopup";
import { useNavigate } from "react-router-dom";

export default function Contact5() {
  const navigate = useNavigate();

  const handleTalkToCoach = () => {
  navigate("/contact#contact1");
  };


  const [data, setData] = useState({
    heading: "LET'S BUILD REAL WORLD PERFORMANCE TOGETHER.",
    description: "Take the first step towards growth, leadership and success.",
    button: "TALK TO A PERFORMANCE COACH",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false,
      offset: 60,
      easing: "ease-out-cubic",
    });

    fetch(
      "https://workfit.co.in/provess/Prowess/index.php/API/list_performance_together"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "true" && res.data) {
          const item = Array.isArray(res.data) ? res.data[0] : res.data;
          if (item) {
            setData({
              heading: item.heading || data.heading,
              description: item.description || data.description,
              button: item.button || data.button,
            });
          }
        }
      })
      .catch(() => {});
  }, []);

  /* ---- Heading ko 3 parts me split: pehla white, beech yellow, last white ---- */
  const fullHeading = data.heading.trim();
  const firstSpace = fullHeading.indexOf(" ");
  const lastSpace = fullHeading.lastIndexOf(" ");

  let part1 = "";
  let part2 = "";
  let part3 = "";

  if (firstSpace !== -1 && lastSpace !== -1 && firstSpace < lastSpace) {
    part1 = fullHeading.substring(0, firstSpace);
    part2 = fullHeading.substring(firstSpace + 1, lastSpace);
    part3 = fullHeading.substring(lastSpace + 1);
  } else {
    /* Agar 1-2 words hain to poora yellow */
    part2 = fullHeading;
  }

    return (
    <>
    <section className="contact5-prow-section">
      <div className="contact5-prow-bg">
        <img
          src="/images/unlockbgworld.png"
          alt=""
          className="contact5-prow-bg-img"
        />
        <div className="contact5-prow-bg-overlay"></div>
      </div>

      <div className="contact5-prow-container">
        <div className="contact5-prow-left">
          <span
            className="contact5-prow-icon-circle contact5-prow-icon-circle-hover"
            data-aos="flip-down"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="8" stroke="#f5b301" strokeWidth="1.4" />
              <circle cx="12" cy="12" r="4.5" stroke="#f5b301" strokeWidth="1.4" />
              <circle cx="12" cy="12" r="1" fill="#f5b301" />
            </svg>
          </span>

          <div
            className="contact5-prow-text"
            data-aos="zoom-out-up"
            data-aos-delay="120"
          >
            <h2 className="contact5-prow-heading">
              {part1 && <>{part1} </>}
              <span className="contact5-prow-heading-accent">{part2}</span>
              {part3 && <> {part3}</>}
            </h2>
            <p className="contact5-prow-desc">{data.description}</p>
          </div>
        </div>

        
        <button
          type="button"
          className="contact5-prow-btn contact5-prow-btn-hover"
          data-aos="zoom-in-right"
          data-aos-delay="250"
          // onClick={() => setIsPopupOpen(true)}
           onClick={handleTalkToCoach}
        >
          {data.button}
          <span className="contact5-prow-btn-icon">
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