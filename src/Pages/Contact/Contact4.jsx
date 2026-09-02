// import { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Contact4.css";

// const faqs = [
//   {
//     question: "WHO CAN JOIN PROWESS TRAINING PROGRAMS?",
//     answer:
//       "Students, working professionals, colleges and organizations.",
//   },
//   {
//     question: "DO YOU CONDUCT COLLEGE WORKSHOPS?",
//     answer:
//       "Yes, we conduct seminars, workshops and training programs for colleges.",
//   },
//   {
//     question: "DO YOU PROVIDE CORPORATE TRAINING?",
//     answer:
//       "Yes, we offer customized training programs for teams and organizations.",
//   },
//   {
//     question: "HOW CAN I REGISTER FOR A TRAINING PROGRAM?",
//     answer:
//       "You can connect with us through this form and our team will guide you further.",
//   },
//   {
//     question: "HOW CAN I TALK TO A PERFORMANCE COACH?",
//     answer:
//       "Fill the enquiry form above and our team will connect with you shortly.",
//   },
// ];

// export default function Contact4() {
//   const [openIndex, setOpenIndex] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 650,
//       once: false,
//       offset: 70,
//       easing: "ease-out-back",
//     });
//   }, []);

//   const toggleFaq = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   return (
//     <section className="asked-que-pr-section">
//       <div className="asked-que-pr-container">
//         <h2 className="asked-que-pr-heading" data-aos="flip-up">
//           FREQUENTLY ASKED{" "}
//           <span className="asked-que-pr-heading-accent">QUESTIONS</span>
//         </h2>
//         <span className="asked-que-pr-underline"></span>

//         <div className="asked-que-pr-row">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 className="asked-que-pr-item-wrap"
//                 key={index}
//                 data-aos={index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
//                 data-aos-delay={index * 100}
//               >
//                 {index > 0 && (
//                   <span className="asked-que-pr-divider"></span>
//                 )}

//                 <div className="asked-que-pr-item">
//                   <button
//                     type="button"
//                     className="asked-que-pr-question"
//                     onClick={() => toggleFaq(index)}
//                     aria-expanded={isOpen}
//                   >
//                     <span className="asked-que-pr-icon-circle">
//                       <svg viewBox="0 0 24 24" fill="none">
//                         <circle
//                           cx="12"
//                           cy="12"
//                           r="9"
//                           stroke="#f5b301"
//                           strokeWidth="1.4"
//                         />
//                         <path
//                           d="M9.5 9.3c.2-1.2 1.3-2 2.6-2 1.4 0 2.5.9 2.5 2.1 0 1-.6 1.5-1.4 2-.7.4-1.1.8-1.1 1.6"
//                           stroke="#f5b301"
//                           strokeWidth="1.4"
//                           strokeLinecap="round"
//                         />
//                         <circle cx="12" cy="16.3" r="0.9" fill="#f5b301" />
//                       </svg>
//                     </span>

//                     <span className="asked-que-pr-question-text">
//                       {faq.question}
//                     </span>

//                     <span
//                       className={`asked-que-pr-arrow ${
//                         isOpen ? "asked-que-pr-arrow-open" : ""
//                       }`}
//                     >
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           d="M6 9l6 6 6-6"
//                           stroke="#0a0a0a"
//                           strokeWidth="1.8"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </span>
//                   </button>

//                   <div
//                     className={`asked-que-pr-answer-wrap ${
//                       isOpen ? "asked-que-pr-answer-open" : ""
//                     }`}
//                   >
//                     <p className="asked-que-pr-answer">{faq.answer}</p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }












import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact4.css";

const API_URL =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_faq_public";

export default function Contact4() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  /* ---------- AOS ---------- */
  useEffect(() => {
    AOS.init({
      duration: 650,
      once: false,
      offset: 70,
      easing: "ease-out-back",
    });
  }, []);

  /* ---------- Fetch ---------- */
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to load FAQs");
        const json = await res.json();

        const list = Array.isArray(json)
          ? json
          : json?.data || json?.faqs || json?.result || [];

        setFaqs(
          list.filter((item) => item?.status?.toLowerCase() === "active")
        );
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  /* ---------- Toggle ---------- */
  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="asked-que-pr-section">
      <div className="asked-que-pr-container">
        {/* ---- STATIC HEADING ---- */}
        <h2 className="asked-que-pr-heading" data-aos="flip-up">
          FREQUENTLY ASKED{" "}
          <span className="asked-que-pr-heading-accent">QUESTIONS</span>
        </h2>
        <span className="asked-que-pr-underline"></span>

        {/* ---- ERROR ---- */}
        {!loading && error && (
          <p
            style={{
              color: "#666",
              fontSize: "13px",
              padding: "14px 0",
              margin: 0,
            }}
          >
            ⚠ {error}
          </p>
        )}

        {/* ---- LOADING ---- */}
        {loading && (
          <div className="asked-que-pr-row">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                className="asked-que-pr-item-wrap"
                key={`sk-${i}`}
                style={{ opacity: 0.3 }}
              >
                <div className="asked-que-pr-item">
                  <div
                    className="asked-que-pr-question"
                    style={{ cursor: "default" }}
                  >
                    <span className="asked-que-pr-icon-circle">
                      <svg viewBox="0 0 24 24" fill="none">
                        <circle
                          cx="12"
                          cy="12"
                          r="9"
                          stroke="#f5b301"
                          strokeWidth="1.4"
                        />
                        <path
                          d="M9.5 9.3c.2-1.2 1.3-2 2.6-2 1.4 0 2.5.9 2.5 2.1 0 1-.6 1.5-1.4 2-.7.4-1.1.8-1.1 1.6"
                          stroke="#f5b301"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                        />
                        <circle cx="12" cy="16.3" r="0.9" fill="#f5b301" />
                      </svg>
                    </span>
                    <span
                      style={{
                        flex: 1,
                        height: 10,
                        background: "#333",
                        borderRadius: 4,
                      }}
                    />
                    <span className="asked-que-pr-arrow">
                      <svg viewBox="0 0 24 24">
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="#0a0a0a"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ---- FAQ LIST ---- */}
        {!loading && !error && faqs.length === 0 && (
          <p
            style={{
              color: "#666",
              fontSize: "13px",
              padding: "14px 0",
              margin: 0,
            }}
          >
            No FAQs available right now.
          </p>
        )}

        {!loading && faqs.length > 0 && (
          <div className="asked-que-pr-row">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  className="asked-que-pr-item-wrap"
                  key={faq.question?.trim() || index}
                  data-aos={
                    index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"
                  }
                  data-aos-delay={index * 100}
                >
                  {index > 0 && (
                    <span className="asked-que-pr-divider"></span>
                  )}

                  <div className="asked-que-pr-item">
                    <button
                      type="button"
                      className="asked-que-pr-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      {/* STATIC ICON — question mark circle */}
                      <span className="asked-que-pr-icon-circle">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="#f5b301"
                            strokeWidth="1.4"
                          />
                          <path
                            d="M9.5 9.3c.2-1.2 1.3-2 2.6-2 1.4 0 2.5.9 2.5 2.1 0 1-.6 1.5-1.4 2-.7.4-1.1.8-1.1 1.6"
                            stroke="#f5b301"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                          <circle
                            cx="12"
                            cy="16.3"
                            r="0.9"
                            fill="#f5b301"
                          />
                        </svg>
                      </span>

                      <span className="asked-que-pr-question-text">
                        {faq.question}
                      </span>

                      {/* STATIC ICON — arrow */}
                      <span
                        className={`asked-que-pr-arrow ${
                          isOpen ? "asked-que-pr-arrow-open" : ""
                        }`}
                      >
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M6 9l6 6 6-6"
                            stroke="#0a0a0a"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      className={`asked-que-pr-answer-wrap ${
                        isOpen ? "asked-que-pr-answer-open" : ""
                      }`}
                    >
                      <p className="asked-que-pr-answer">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}