
// import { useState, useEffect, useRef } from "react";
// import "./Home9.css";

// const faqs = [
//   {
//     question: "Is Prowess right for me?",
//     answer:
//       "If you want to move beyond just gaining knowledge and actually build real world skills like communication, teamwork and execution, Prowess is designed for you.",
//   },
//   {
//     question: "How is Prowess different from other programs?",
//     answer:
//       "Prowess focuses on practice, feedback and continuous improvement instead of only lectures, so you apply what you learn in real situations.",
//   },
//   {
//     question: "Who are Performance Coaches?",
//     answer:
//       "Performance Coaches are trained mentors who guide you through real world activities, give precise feedback and help you build lasting habits.",
//   },
//   {
//     question: "How does the program work?",
//     answer:
//       "The program follows a simple cycle: challenge, execute, reflect, get feedback, improve and repeat, until performance becomes consistent.",
//   },
//   {
//     question: "How do I start?",
//     answer:
//       "Simply fill the form above or talk to a Performance Coach, and we will guide you through the next steps to get started.",
//   },
// ];

// export default function Home9() {
//   const [openIndex, setOpenIndex] = useState(null);

//   // ⬇️ NEW: reveal/hover state ab React state mein hai (DOM classList mein nahi)
//   const [revealed, setRevealed] = useState(false);
//   const [hoverReady, setHoverReady] = useState(false);

//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     let hoverTimeout = null;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setRevealed(true);

//             if (hoverTimeout) clearTimeout(hoverTimeout);
//             hoverTimeout = setTimeout(() => {
//               setHoverReady(true);
//             }, 1200);
//           } else {
//             setRevealed(false);
//             setHoverReady(false);
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

//   const toggleFaq = (index) => {
//     setOpenIndex((prev) => (prev === index ? null : index));
//   };

//   // helper: className string ab state se banega, har render pe stable rahega
//   const itemClass = (isOpen) =>
//     [
//       "faq-prow-item",
//       isOpen ? "faq-prow-item-open" : "",
//       revealed ? "revealed" : "",
//       hoverReady ? "hover-ready" : "",
//     ]
//       .filter(Boolean)
//       .join(" ");

//   const headingClass = [
//     "faq-prow-heading",
//     revealed ? "revealed" : "",
//     hoverReady ? "hover-ready" : "",
//   ]
//     .filter(Boolean)
//     .join(" ");

//   return (
//     <section className="faq-prow-section" ref={sectionRef}>
//       <div className="faq-prow-container">
//         <h2 className={headingClass}>FAQ</h2>

//         <div className="faq-prow-row">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;
//             return (
//               <div
//                 className={itemClass(isOpen)}
//                 key={index}
//                 style={{ "--d": index }}
//               >
//                 <button
//                   type="button"
//                   className="faq-prow-question"
//                   onClick={() => toggleFaq(index)}
//                   aria-expanded={isOpen}
//                 >
//                   <span className="faq-prow-question-text">
//                     {faq.question}
//                   </span>
//                   <span className="faq-prow-icon">
//                     <span className="faq-prow-icon-line faq-prow-icon-h"></span>
//                     <span className="faq-prow-icon-line faq-prow-icon-v"></span>
//                   </span>
//                 </button>

//                 <div className="faq-prow-answer-wrap">
//                   <p className="faq-prow-answer">{faq.answer}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }












import { useState, useEffect, useRef } from "react";
import "./Contact6.css";

const API_URL =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_faq_public";

export default function Contact6() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [hoverReady, setHoverReady] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const sectionRef = useRef(null);

  // ─── Fetch FAQs from API ───
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("API response error");
        const json = await res.json();

        // API response structure handle — array ho ya object ke andar array
        const list = Array.isArray(json) ? json : json?.data || json?.faqs || json?.result || [];

        // sirf active FAQs filter karo
        const activeFaqs = list.filter(
          (item) =>
            item.status?.toLowerCase() === "active" || item.status === 1 || item.status === "1"
        );

        setFaqs(activeFaqs);
      } catch (err) {
        console.error("FAQ fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  // ─── IntersectionObserver for reveal + hover-ready ───
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let hoverTimeout = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (hoverTimeout) clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
              setHoverReady(true);
            }, 1200);
          } else {
            setRevealed(false);
            setHoverReady(false);
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

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const itemClass = (isOpen) =>
    [
      "faq-prow-item",
      isOpen ? "faq-prow-item-open" : "",
      revealed ? "revealed" : "",
      hoverReady ? "hover-ready" : "",
    ]
      .filter(Boolean)
      .join(" ");

  const headingClass = [
    "faq-prow-heading",
    revealed ? "revealed" : "",
    hoverReady ? "hover-ready" : "",
  ]
    .filter(Boolean)
    .join(" ");

  // ─── Loading state ───
  if (loading) {
    return (
      <section className="faq-prow-section" ref={sectionRef}>
        <div className="faq-prow-container">
          <h2 className="faq-prow-heading revealed hover-ready">FAQ</h2>
          <div className="faq-prow-row">
            {[...Array(5)].map((_, i) => (
              <div
                className="faq-prow-item revealed hover-ready"
                key={i}
                style={{ "--d": i }}
              >
                <div className="faq-prow-question faq-prow-skeleton-btn">
                  <span
                    className="faq-prow-skeleton-line"
                    style={{ width: "75%", height: "12px" }}
                  ></span>
                  <span
                    className="faq-prow-skeleton-circle"
                    style={{ width: "16px", height: "16px" }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ─── Error state ───
  if (error) {
    return (
      <section className="faq-prow-section" ref={sectionRef}>
        <div className="faq-prow-container">
          <h2 className="faq-prow-heading revealed hover-ready">FAQ</h2>
          <div className="faq-prow-row">
            <p className="faq-prow-error">Unable to load FAQs. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  // ─── No FAQs found ───
  if (faqs.length === 0) {
    return (
      <section className="faq-prow-section" ref={sectionRef}>
        <div className="faq-prow-container">
          <h2 className="faq-prow-heading revealed hover-ready">FAQ</h2>
          <div className="faq-prow-row">
            <p className="faq-prow-error">No FAQs available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="faq-prow-section" ref={sectionRef}>
      <div className="faq-prow-container">
        <h2 className={headingClass}>FAQ</h2>

        <div className="faq-prow-row">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={itemClass(isOpen)}
                key={index}
                style={{ "--d": index }}
              >
                <button
                  type="button"
                  className="faq-prow-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-prow-question-text">
                    {faq.question}
                  </span>
                  <span className="faq-prow-icon">
                    <span className="faq-prow-icon-line faq-prow-icon-h"></span>
                    <span className="faq-prow-icon-line faq-prow-icon-v"></span>
                  </span>
                </button>

                <div className="faq-prow-answer-wrap">
                  <p className="faq-prow-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}