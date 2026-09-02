import { useEffect, useRef, useState } from "react";
import "./Home8.css";
import TalkFormNewPopup from "../TalkFormNewPopup/TalkFormNewPopup";


export default function Home8() {
  const sectionRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".build-real-intro, .build-real-field, .build-real-cta"
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
  }, []);

  return (
    <>
    <section className="build-real-section" ref={sectionRef}>
      <div className="build-real-container">
        {/* ---------- Left: icon + heading + description ---------- */}
        <div className="build-real-intro">
          <div className="build-real-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 11.5c0 4.14-4.03 7.5-9 7.5-1.06 0-2.08-.15-3.02-.43L3 20l1.2-3.6C3.44 15.16 3 13.86 3 12.5 3 8.36 7.03 5 12 5s9 3.36 9 6.5z"
                stroke="#F5B301"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.2" cy="11.5" r="1" fill="#F5B301" />
              <circle cx="12" cy="11.5" r="1" fill="#F5B301" />
              <circle cx="15.8" cy="11.5" r="1" fill="#F5B301" />
            </svg>
          </div>

          <div className="build-real-text">
            <h2 className="build-real-title">
              READY TO BUILD
              <br />
              REAL WORLD PERFORMANCE?
            </h2>

            <p className="build-real-subtext">
              Talk to a Performance Coach today.
            </p>
          </div>
        </div>

        {/* ---------- Form fields ---------- */}
        <form className="build-real-form" onSubmit={(e) => e.preventDefault()}>
          <div className="build-real-field" style={{ "--d": 0 }}>
            <label className="build-real-label">Your Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="build-real-input"
              required
            />
          </div>

          <div className="build-real-field" style={{ "--d": 1 }}>
            <label className="build-real-label">Mobile Number*</label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="build-real-input"
              required
            />
          </div>

          <div className="build-real-field" style={{ "--d": 2 }}>
            <label className="build-real-label">College / University*</label>
            <input
              type="text"
              placeholder="Enter your college"
              className="build-real-input"
              required
            />
          </div>

          <div className="build-real-field" style={{ "--d": 3 }}>
            <label className="build-real-label">Year*</label>
            <select className="build-real-select" required defaultValue="">
              <option value="" disabled>
                Select your year
              </option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>

          <div className="build-real-field" style={{ "--d": 4 }}>
            <label className="build-real-label">How can we help you?</label>
            <select className="build-real-select" required defaultValue="">
              <option value="" disabled>
                Select your goal
              </option>
              <option value="presentation">Presentation Skills</option>
              <option value="interview">Interview Preparation</option>
              <option value="teamwork">Teamwork</option>
              <option value="performance">Overall Performance</option>
            </select>
          </div>

          <div className="build-real-cta">
            {/* <button type="submit" className="build-real-button">
              TALK TO A COACH
            </button> */}
            <button type="button" className="build-real-button" onClick={() => setIsPopupOpen(true)}>
  TALK TO A COACH
</button>
            <p className="build-real-cta-note">
              We will get back to you soon.
            </p>
          </div>
        </form>
      </div>
    </section>


    <TalkFormNewPopup
      isOpen={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
    />
    </>
  );
}
