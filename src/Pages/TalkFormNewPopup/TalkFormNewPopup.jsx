// import { useEffect, useRef, useCallback } from "react";
// import "./TalkFormNewPopup.css";


// /* ─────────────────────────────────────────────
//    Popup Form Component
//    ───────────────────────────────────────────── */
// export default function TalkFormNewPopup({ isOpen, onClose }) {
//   const overlayRef = useRef(null);
//   const cardRef = useRef(null);

//   // ---- Staggered reveal on open ----
//   useEffect(() => {
//     if (!isOpen) return;
//     const card = cardRef.current;
//     if (!card) return;

//     const targets = card.querySelectorAll(
//       ".talk-form-new-field, .talk-form-new-submit-wrap"
//     );

//     // Reset
//     targets.forEach((el) => el.classList.remove("revealed", "hover-ready"));

//     // Trigger reveal
//     requestAnimationFrame(() => {
//       targets.forEach((el) => el.classList.add("revealed"));
//     });

//     // Enable hover after animations finish
//     const hoverTimer = setTimeout(() => {
//       targets.forEach((el) => el.classList.add("hover-ready"));
//     }, 1100);

//     return () => clearTimeout(hoverTimer);
//   }, [isOpen]);

//   // ---- Body scroll lock ----
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("talk-form-new-body-lock");
//     } else {
//       document.body.classList.remove("talk-form-new-body-lock");
//     }
//     return () => document.body.classList.remove("talk-form-new-body-lock");
//   }, [isOpen]);

//   // ---- Close on overlay click ----
//   const handleOverlayClick = useCallback(
//     (e) => {
//       if (e.target === overlayRef.current) onClose();
//     },
//     [onClose]
//   );

//   // ---- Close on Escape ----
//   useEffect(() => {
//     if (!isOpen) return;
//     const handleKey = (e) => {
//       if (e.key === "Escape") onClose();
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [isOpen, onClose]);

//   // ---- Submit ----
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const data = new FormData(form);
//     const payload = Object.fromEntries(data.entries());
//     console.log("Form submitted:", payload);
//     // yahan API call ya WhatsApp redirect daal sakte ho
//     // example: window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(...)}`)
//     form.reset();
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="talk-form-new-overlay open"
//       ref={overlayRef}
//       onClick={handleOverlayClick}
//       role="dialog"
//       aria-modal="true"
//       aria-label="Talk to Coach Form"
//     >
//       <div className="talk-form-new-card" ref={cardRef}>
//         {/* ---- Close Button (Circle) ---- */}
//         <button
//           type="button"
//           className="talk-form-new-close"
//           onClick={onClose}
//           aria-label="Close form"
//         >
//           ✕
//         </button>

//         {/* ---- Heading ---- */}
//         <h2 className="talk-form-new-heading">
//           Talk to a Coach
//         </h2>
//         <p className="talk-form-new-subheading">
//           Fill in your details and we'll get back to you soon.
//         </p>

//         {/* ---- Form ---- */}
//         <form className="talk-form-new-form" onSubmit={handleSubmit}>
//           <div className="talk-form-new-field" style={{ "--d": 0 }}>
//             <label className="talk-form-new-label">Your Name*</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="talk-form-new-input"
//               required
//             />
//           </div>

//           <div className="talk-form-new-field" style={{ "--d": 1 }}>
//             <label className="talk-form-new-label">Mobile Number*</label>
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Enter your number"
//               className="talk-form-new-input"
//               required
//             />
//           </div>

//           <div className="talk-form-new-field" style={{ "--d": 2 }}>
//             <label className="talk-form-new-label">College / University*</label>
//             <input
//               type="text"
//               name="college"
//               placeholder="Enter your college"
//               className="talk-form-new-input"
//               required
//             />
//           </div>

//           <div className="talk-form-new-field" style={{ "--d": 3 }}>
//             <label className="talk-form-new-label">Year*</label>
//             <select
//               name="year"
//               className="talk-form-new-select"
//               required
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select your year
//               </option>
//               <option value="1st Year">1st Year</option>
//               <option value="2nd Year">2nd Year</option>
//               <option value="3rd Year">3rd Year</option>
//               <option value="4th Year">4th Year</option>
//             </select>
//           </div>

//           <div className="talk-form-new-field" style={{ "--d": 4 }}>
//             <label className="talk-form-new-label">
//               How can we help you?
//             </label>
//             <select
//               name="help"
//               className="talk-form-new-select"
//               required
//               defaultValue=""
//             >
//               <option value="" disabled>
//                 Select your goal
//               </option>
//               <option value="Presentation Skills">
//                 Presentation Skills
//               </option>
//               <option value="Interview Preparation">
//                 Interview Preparation
//               </option>
//               <option value="Teamwork">Teamwork</option>
//               <option value="Overall Performance">
//                 Overall Performance
//               </option>
//             </select>
//           </div>

//           <div className="talk-form-new-submit-wrap">
//             <button type="submit" className="talk-form-new-submit">
//               Submit
//             </button>
//             <p className="talk-form-new-note">
//               We respect your privacy. No spam, ever.
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    Usage Example — kisi bhi component mein:
//    ───────────────────────────────────────────── */
// /*
// import { useState } from "react";
// import TalkFormNewPopup from "./TalkFormNewPopup";

// function AnyComponent() {
//   const [formOpen, setFormOpen] = useState(false);

//   return (
//     <>
//       <button onClick={() => setFormOpen(true)}>
//         Talk to Coach
//       </button>

//       <TalkFormNewPopup
//         isOpen={formOpen}
//         onClose={() => setFormOpen(false)}
//       />
//     </>
//   );
// }
// */















import { useEffect, useRef, useCallback, useState } from "react";
import "./TalkFormNewPopup.css";

const API_URL = "https://workfit.co.in/provess/Prowess/index.php/API/add_ready_to_build";

/* ─────────────────────────────────────────────
   Popup Form Component
   ───────────────────────────────────────────── */
export default function TalkFormNewPopup({
  isOpen,
  onClose,
  heading = "Talk to a Coach",
  description = "Fill in your details and we'll get back to you soon."
}) {
  const overlayRef = useRef(null);
  const cardRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiMessage, setApiMessage] = useState(""); // "success" | "error" | ""

  // ---- Staggered reveal on open ----
  useEffect(() => {
    if (!isOpen) return;
    setApiMessage(""); // reset message on open
    const card = cardRef.current;
    if (!card) return;

    const targets = card.querySelectorAll(
      ".talk-form-new-field, .talk-form-new-submit-wrap"
    );

    targets.forEach((el) => el.classList.remove("revealed", "hover-ready"));

    requestAnimationFrame(() => {
      targets.forEach((el) => el.classList.add("revealed"));
    });

    const hoverTimer = setTimeout(() => {
      targets.forEach((el) => el.classList.add("hover-ready"));
    }, 1100);

    return () => clearTimeout(hoverTimer);
  }, [isOpen]);

  // ---- Body scroll lock ----
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("talk-form-new-body-lock");
    } else {
      document.body.classList.remove("talk-form-new-body-lock");
    }
    return () => document.body.classList.remove("talk-form-new-body-lock");
  }, [isOpen]);

  // ---- Close on overlay click ----
  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === overlayRef.current) onClose();
    },
    [onClose]
  );

  // ---- Close on Escape ----
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // ---- Submit with API ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setApiMessage("");

    const form = e.target;
    const formData = new FormData(form);

    // Exact payload — button hataya
    const payload = {
      heading: heading,
      description: description,
      full_name: formData.get("full_name"),
      contact: formData.get("contact"),
      college_name: formData.get("college_name"),
      year: formData.get("year"),
      how_we_can_help: formData.get("how_we_can_help"),
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success === "1" || result.status === "true") {
        setApiMessage("success");
        form.reset();
        // 1.5 sec baad auto close
        setTimeout(() => {
          onClose();
          setApiMessage("");
        }, 1500);
      } else {
        setApiMessage("error");
      }
    } catch (err) {
      console.error("API Error:", err);
      setApiMessage("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="talk-form-new-overlay open"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Talk to Coach Form"
    >
      <div className="talk-form-new-card" ref={cardRef}>
        {/* ---- Close Button (Circle) ---- */}
        <button
          type="button"
          className="talk-form-new-close"
          onClick={onClose}
          aria-label="Close form"
        >
          ✕
        </button>

        {/* ---- Heading (Dynamic via props) ---- */}
        <h2 className="talk-form-new-heading">{heading}</h2>
        <p className="talk-form-new-subheading">{description}</p>

        {/* ---- Form ---- */}
        <form className="talk-form-new-form" onSubmit={handleSubmit}>
          <div className="talk-form-new-field" style={{ "--d": 0 }}>
            <label className="talk-form-new-label">Your Name*</label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your name"
              className="talk-form-new-input"
              required
            />
          </div>

          <div className="talk-form-new-field" style={{ "--d": 1 }}>
            <label className="talk-form-new-label">Mobile Number*</label>
            <input
              type="tel"
              name="contact"
              placeholder="Enter your number"
              className="talk-form-new-input"
              required
            />
          </div>

          <div className="talk-form-new-field" style={{ "--d": 2 }}>
            <label className="talk-form-new-label">College / University*</label>
            <input
              type="text"
              name="college_name"
              placeholder="Enter your college"
              className="talk-form-new-input"
              required
            />
          </div>

          <div className="talk-form-new-field" style={{ "--d": 3 }}>
            <label className="talk-form-new-label">Year*</label>
            <select
              name="year"
              className="talk-form-new-select"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select your year
              </option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div className="talk-form-new-field" style={{ "--d": 4 }}>
            <label className="talk-form-new-label">
              How can we help you?
            </label>
            <select
              name="how_we_can_help"
              className="talk-form-new-select"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select your goal
              </option>
              <option value="Presentation Skills">Presentation Skills</option>
              <option value="Interview Preparation">Interview Preparation</option>
              <option value="Teamwork">Teamwork</option>
              <option value="Overall Performance">Overall Performance</option>
            </select>
          </div>

          <div className="talk-form-new-submit-wrap">
            <button
              type="submit"
              className="talk-form-new-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
            <p className="talk-form-new-note">
              We respect your privacy. No spam, ever.
            </p>
          </div>

          {/* ---- API Message ---- */}
          {apiMessage === "success" && (
            <p className="talk-form-new-api-msg success">
              ✓ Data added successfully!
            </p>
          )}
          {apiMessage === "error" && (
            <p className="talk-form-new-api-msg error">
              ✕ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}