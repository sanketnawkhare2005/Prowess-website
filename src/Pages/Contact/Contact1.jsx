// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Contact1.css";

// const features = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
//         <path
//           d="M4 19c0-3 2.2-5 5-5s5 2 5 5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//         <path
//           d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "Performance Training",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M12 3 3 8l9 5 9-5-9-5z"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"
//           stroke="#f5b301"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     title: "Real World Learning",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
//         <circle cx="12" cy="12" r="1" fill="#f5b301" />
//       </svg>
//     ),
//     title: "Practical Skills",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M4 17l5-5 4 4 7-8"
//           stroke="#f5b301"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M15 8h5v5"
//           stroke="#f5b301"
//           strokeWidth="1.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "Measurable Results",
//   },
// ];

// const roles = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M12 4 3 8.5 12 13l9-4.5L12 4z"
//           stroke="#0a0a0a"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M6 11v4c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-4"
//           stroke="#0a0a0a"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     label: "Student",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M12 3 3 8h18L12 3z"
//           stroke="#0a0a0a"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//         <path
//           d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"
//           stroke="#0a0a0a"
//           strokeWidth="1.4"
//           strokeLinecap="round"
//         />
//       </svg>
//     ),
//     label: "College Representative",
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
//           stroke="#0a0a0a"
//           strokeWidth="1.4"
//         />
//         <path
//           d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
//           stroke="#0a0a0a"
//           strokeWidth="1.4"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     label: "Corporate Representative",
//   },
// ];

// export default function Contact1() {
//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false,
//       offset: 60,
//     });
//   }, []);

//   return (
//     <section className="contact-prowess-section">
//       <div className="contact-prowess-bg">
//         <img
//           src="/images/unlockbgheight1.png"
//           alt=""
//           className="contact-prowess-bg-img"
//         />
//         <div className="contact-prowess-bg-overlay"></div>
//       </div>

//       <div className="contact-prowess-container">
//         {/* ---------- Left: heading + description + features ---------- */}
//         <div className="contact-prowess-left" data-aos="fade-right">
//           <h1 className="contact-prowess-heading">
//             READY TO
//             <br />
//             <span className="contact-prowess-heading-accent">
//               GROW, LEAD &amp; SUCCEED?
//             </span>
//           </h1>
//           <span className="contact-prowess-underline"></span>

//           <p className="contact-prowess-desc">
//             Connect with our team to bring Prowess training to you and your
//             team.
//           </p>

//           <div className="contact-prowess-features">
//             {features.map((feature, index) => (
//               <div
//                 className="contact-prowess-feature-wrap"
//                 key={index}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 {index > 0 && (
//                   <span className="contact-prowess-feature-divider"></span>
//                 )}
//                 <div className="contact-prowess-feature">
//                   <span className="contact-prowess-feature-icon">
//                     {feature.icon}
//                   </span>
//                   <h3 className="contact-prowess-feature-title">
//                     {feature.title}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ---------- Right: form card ---------- */}
//         <div
//           className="contact-prowess-form-card"
//           data-aos="fade-left"
//           data-aos-delay="150"
//         >
//           <h2 className="contact-prowess-form-heading">
//             CONNECT WITH PROWESS
//           </h2>
//           <span className="contact-prowess-form-underline"></span>

//           <div className="contact-prowess-form-row">
//             <div
//               className="contact-prowess-form-left"
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               <div className="contact-prowess-input-wrap">
//                 <span className="contact-prowess-input-icon">
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <circle
//                       cx="12"
//                       cy="8"
//                       r="3.2"
//                       stroke="#8a8a8a"
//                       strokeWidth="1.4"
//                     />
//                     <path
//                       d="M5.5 19c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6"
//                       stroke="#8a8a8a"
//                       strokeWidth="1.4"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="contact-prowess-input"
//                 />
//               </div>

//               <div className="contact-prowess-input-wrap">
//                 <span className="contact-prowess-input-icon">
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M6.5 3.5c1 0 2.4 2 2.6 2.9.2.8-.7 1.4-1.1 2-.5.7 2.1 4.2 3.5 4.8.5.2 1.2-.7 1.9-1.1.9-.5 3 .9 3 1.9 0 1.4-1.6 3-3 3-3.6 0-9.9-6.3-9.9-9.9 0-1.4 1.6-3 3-3z"
//                       stroke="#8a8a8a"
//                       strokeWidth="1.3"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//                 <input
//                   type="tel"
//                   placeholder="Mobile Number"
//                   className="contact-prowess-input"
//                 />
//               </div>

//               <div className="contact-prowess-input-wrap">
//                 <span className="contact-prowess-input-icon">
//                   <svg viewBox="0 0 24 24" fill="none">
//                     <rect
//                       x="3.5"
//                       y="5.5"
//                       width="17"
//                       height="13"
//                       rx="1.5"
//                       stroke="#8a8a8a"
//                       strokeWidth="1.3"
//                     />
//                     <path
//                       d="m4 6.5 8 6.5 8-6.5"
//                       stroke="#8a8a8a"
//                       strokeWidth="1.3"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </span>
//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="contact-prowess-input"
//                 />
//               </div>
//             </div>

//             <div
//               className="contact-prowess-form-right"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <span className="contact-prowess-role-label">I am a:</span>

//               <div className="contact-prowess-role-list">
//                 {roles.map((role, index) => (
//                   <label className="contact-prowess-role-item" key={index}>
//                     <input
//                       type="radio"
//                       name="contact-prowess-role"
//                       className="contact-prowess-role-radio"
//                     />
//                     <span className="contact-prowess-role-icon">
//                       {role.icon}
//                     </span>
//                     <span className="contact-prowess-role-text">
//                       {role.label}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div
//             className="contact-prowess-textarea-wrap"
//             data-aos="fade-up"
//             data-aos-delay="350"
//           >
//             <span className="contact-prowess-input-icon contact-prowess-textarea-icon">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <rect
//                   x="3.5"
//                   y="5.5"
//                   width="17"
//                   height="12"
//                   rx="1.5"
//                   stroke="#8a8a8a"
//                   strokeWidth="1.3"
//                 />
//                 <path
//                   d="M6 20h5"
//                   stroke="#8a8a8a"
//                   strokeWidth="1.3"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </span>
//             <textarea
//               placeholder="Message&#10;Tell us how we can help you..."
//               className="contact-prowess-textarea"
//               rows={3}
//             ></textarea>
//           </div>

//           <button
//             type="button"
//             className="contact-prowess-submit-btn"
//             data-aos="zoom-in"
//             data-aos-delay="400"
//           >
//             SEND ENQUIRY
//             <span className="contact-prowess-btn-icon">
//               <svg viewBox="0 0 24 24">
//                 <path
//                   d="M5 12h13M13 6l6 6-6 6"
//                   stroke="#f5b301"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }













// Dynamic code
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact1.css";

/* ---------------------------------------------------------------
   API ENDPOINTS
   --------------------------------------------------------------- */
const CONTACT_DETAIL_API =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_contact_detail";
const CONNECT_WITH_PROWESS_API =
  "https://workfit.co.in/provess/Prowess/index.php/API/add_connect_with_prowess";

/* ---------------------------------------------------------------
   STATIC ICONS (used for the feature row, cycled by index so
   however many sub_heading items the admin panel sends, each
   one still gets an icon in the same visual style as before)
   --------------------------------------------------------------- */
const featureIcons = [
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="9" cy="8" r="2.6" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="16" cy="9" r="2" stroke="#f5b301" strokeWidth="1.4" />
    <path
      d="M4 19c0-3 2.2-5 5-5s5 2 5 5"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M14.5 14.3c2.2.3 3.5 2 3.5 4.7"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3 3 8l9 5 9-5-9-5z"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"
      stroke="#f5b301"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="7.5" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="4" stroke="#f5b301" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="1" fill="#f5b301" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M4 17l5-5 4 4 7-8"
      stroke="#f5b301"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8h5v5"
      stroke="#f5b301"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
];

/* Fallback (original static) features — shown until API responds,
   or if API fails, so the UI never breaks / shifts. */
const defaultFeatures = [
  { icon: featureIcons[0], title: "Performance Training" },
  { icon: featureIcons[1], title: "Real World Learning" },
  { icon: featureIcons[2], title: "Practical Skills" },
  { icon: featureIcons[3], title: "Measurable Results" },
];

const defaultContactData = {
  // Admin panel enters ONE "main_heading" string. Use "||" inside it to
  // mark where the white first line ends and the yellow accent line
  // begins, e.g. "READY TO||GROW, LEAD & SUCCEED?"
  // If no "||" is present, the whole heading renders as one white line.
  main_heading: "READY TO||GROW, LEAD & SUCCEED?",
  description:
    "Connect with our team to bring Prowess training to you and your team.",
  image_path: "/images/unlockbgheight1.png",
};

/* ---------------------------------------------------------------
   Admin panel can add MULTIPLE sub_heading values inside a single
   contact_detail record (shown as chips in the table, e.g.
   ["hello1","ho"]). This helper safely turns that field — whether
   it's already an array, a JSON string like '["h1","h2"]', or a
   plain comma-separated string — into a clean flat list of
   individual strings, so each one gets its own icon + title card.
   --------------------------------------------------------------- */
const parseSubHeadings = (raw) => {
  if (!raw) return [];

  if (Array.isArray(raw)) {
    return raw.map((v) => String(v).trim()).filter(Boolean);
  }

  if (typeof raw !== "string") return [];

  const trimmed = raw.trim();
  if (!trimmed) return [];

  if (trimmed.startsWith("[")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        return parsed.map((v) => String(v).trim()).filter(Boolean);
      }
    } catch (e) {
      // Not valid JSON — fall through and treat as plain text below
    }
  }

  if (trimmed.includes(",")) {
    return trimmed
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
  }

  return [trimmed];
};

const roles = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4 3 8.5 12 13l9-4.5L12 4z"
          stroke="#0a0a0a"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M6 11v4c0 1.5 2.7 2.7 6 2.7s6-1.2 6-2.7v-4"
          stroke="#0a0a0a"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Student",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3 3 8h18L12 3z"
          stroke="#0a0a0a"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18"
          stroke="#0a0a0a"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "College Representative",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect
          x="4"
          y="8"
          width="16"
          height="11"
          rx="1.5"
          stroke="#0a0a0a"
          strokeWidth="1.4"
        />
        <path
          d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
          stroke="#0a0a0a"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Corporate Representative",
  },
];

export default function Contact1() {
  const [contactData, setContactData] = useState(defaultContactData);
  const [featuresList, setFeaturesList] = useState(defaultFeatures);

  const [formData, setFormData] = useState({
    full_name: "",
    mobile_number: "",
    email_address: "",
    user_type: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null); // { type: 'success'|'error', text }

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 60,
    });
  }, []);

  /* ---------------- Toast auto-dismiss ---------------- */
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(timer);
  }, [toast]);

  /* ---------------- Fetch left-side content ---------------- */
  useEffect(() => {
    let isMounted = true;

    const fetchContactDetail = async () => {
      try {
        const res = await fetch(CONTACT_DETAIL_API);
        const json = await res.json();
        if (!isMounted) return;

        const raw = json && json.data;
        const list = Array.isArray(raw) ? raw : raw ? [raw] : [];

        if (list.length > 0) {
          const first = list[0] || {};
          setContactData({
            main_heading: first.main_heading || defaultContactData.main_heading,
            description: first.description || defaultContactData.description,
            image_path: first.image_path || defaultContactData.image_path,
          });

          const allSubHeadings = list.flatMap((item) =>
            parseSubHeadings(item && item.sub_heading)
          );

          const dynamicFeatures = allSubHeadings.map((title, idx) => ({
            icon: featureIcons[idx % featureIcons.length],
            title,
          }));

          if (dynamicFeatures.length > 0) {
            setFeaturesList(dynamicFeatures);
          }
        }
      } catch (err) {
        // API failed — keep default static content, UI stays intact
        console.error("Failed to load contact detail:", err);
      }
    };

    fetchContactDetail();
    return () => {
      isMounted = false;
    };
  }, []);

  const headingParts = (contactData.main_heading || "").split("||");

  /* ---------------- Form handlers ---------------- */
  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleRoleChange = (label) => () => {
    setFormData((prev) => ({ ...prev, user_type: label }));
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    setToast(null);

    try {
      const res = await fetch(CONNECT_WITH_PROWESS_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.full_name,
          mobile_number: formData.mobile_number,
          email_address: formData.email_address,
          user_type: formData.user_type,
          message: formData.message,
        }),
      });
      const json = await res.json();

      if (json && (json.status === "true" || json.success === "1")) {
        setToast({
          type: "success",
          text: json.message || "Enquiry sent successfully.",
        });
        setFormData({
          full_name: "",
          mobile_number: "",
          email_address: "",
          user_type: "",
          message: "",
        });
      } else {
        setToast({
          type: "error",
          text: (json && json.message) || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setToast({
        type: "error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-prowess-section" id="contact1">
      <div className="contact-prowess-bg">
        <img
          src={contactData.image_path}
          alt=""
          className="contact-prowess-bg-img"
        />
        <div className="contact-prowess-bg-overlay"></div>
      </div>

      <div className="contact-prowess-container">
        {/* ---------- Left: heading + description + features ---------- */}
        <div className="contact-prowess-left" data-aos="fade-right">
          <h1 className="contact-prowess-heading">
            {headingParts[0]}
            {headingParts[1] && (
              <>
                <br />
                <span className="contact-prowess-heading-accent">
                  {headingParts[1]}
                </span>
              </>
            )}
          </h1>
          <span className="contact-prowess-underline"></span>

          <p className="contact-prowess-desc">{contactData.description}</p>

          <div className="contact-prowess-features">
            {featuresList.map((feature, index) => (
              <div
                className="contact-prowess-feature-wrap"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {index > 0 && (
                  <span className="contact-prowess-feature-divider"></span>
                )}
                <div className="contact-prowess-feature">
                  <span className="contact-prowess-feature-icon">
                    {feature.icon}
                  </span>
                  <h3 className="contact-prowess-feature-title">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right: form card ---------- */}
        <div
          className="contact-prowess-form-card"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <h2 className="contact-prowess-form-heading">
            Talk to performance coach
          </h2>
          <span className="contact-prowess-form-underline"></span>

          <div className="contact-prowess-form-row">
            <div
              className="contact-prowess-form-left"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="contact-prowess-input-wrap">
                <span className="contact-prowess-input-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="8"
                      r="3.2"
                      stroke="#8a8a8a"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M5.5 19c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6"
                      stroke="#8a8a8a"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="contact-prowess-input"
                  value={formData.full_name}
                  onChange={handleInputChange("full_name")}
                />
              </div>

              <div className="contact-prowess-input-wrap">
                <span className="contact-prowess-input-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6.5 3.5c1 0 2.4 2 2.6 2.9.2.8-.7 1.4-1.1 2-.5.7 2.1 4.2 3.5 4.8.5.2 1.2-.7 1.9-1.1.9-.5 3 .9 3 1.9 0 1.4-1.6 3-3 3-3.6 0-9.9-6.3-9.9-9.9 0-1.4 1.6-3 3-3z"
                      stroke="#8a8a8a"
                      strokeWidth="1.3"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="contact-prowess-input"
                  value={formData.mobile_number}
                  onChange={handleInputChange("mobile_number")}
                />
              </div>

              <div className="contact-prowess-input-wrap">
                <span className="contact-prowess-input-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3.5"
                      y="5.5"
                      width="17"
                      height="13"
                      rx="1.5"
                      stroke="#8a8a8a"
                      strokeWidth="1.3"
                    />
                    <path
                      d="m4 6.5 8 6.5 8-6.5"
                      stroke="#8a8a8a"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="contact-prowess-input"
                  value={formData.email_address}
                  onChange={handleInputChange("email_address")}
                />
              </div>
            </div>

            <div
              className="contact-prowess-form-right"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="contact-prowess-role-label">I am a:</span>

              <div className="contact-prowess-role-list">
                {roles.map((role, index) => (
                  <label className="contact-prowess-role-item" key={index}>
                    <input
                      type="radio"
                      name="contact-prowess-role"
                      className="contact-prowess-role-radio"
                      checked={formData.user_type === role.label}
                      onChange={handleRoleChange(role.label)}
                    />
                    <span className="contact-prowess-role-icon">
                      {role.icon}
                    </span>
                    <span className="contact-prowess-role-text">
                      {role.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div
            className="contact-prowess-textarea-wrap"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <span className="contact-prowess-input-icon contact-prowess-textarea-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <rect
                  x="3.5"
                  y="5.5"
                  width="17"
                  height="12"
                  rx="1.5"
                  stroke="#8a8a8a"
                  strokeWidth="1.3"
                />
                <path
                  d="M6 20h5"
                  stroke="#8a8a8a"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <textarea
              placeholder="Message&#10;Tell us how we can help you..."
              className="contact-prowess-textarea"
              rows={3}
              value={formData.message}
              onChange={handleInputChange("message")}
            ></textarea>
          </div>

          <button
            type="button"
            className="contact-prowess-submit-btn"
            data-aos="zoom-in"
            data-aos-delay="400"
            onClick={handleSubmit}
            disabled={submitting}
          >
            {submitting ? "SENDING..." : "SEND ENQUIRY"}
            <span className="contact-prowess-btn-icon">
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
      </div>

      {/* ---------- Toast notification ---------- */}
      {toast && (
        <div
          className={
            toast.type === "success"
              ? "contact-prowess-toast contact-prowess-toast-success"
              : "contact-prowess-toast contact-prowess-toast-error"
          }
          role="alert"
        >
          <span className="contact-prowess-toast-icon">
            {toast.type === "success" ? (
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#f5b301" />
                <path
                  d="M7.5 12.5l3 3 6-6.5"
                  stroke="#0a0a0a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#ff5b5b" />
                <path
                  d="M12 7v6"
                  stroke="#0a0a0a"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16.3" r="1.1" fill="#0a0a0a" />
              </svg>
            )}
          </span>

          <div className="contact-prowess-toast-text">
            <span className="contact-prowess-toast-title">
              {toast.type === "success" ? "Enquiry Sent" : "Enquiry Failed"}
            </span>
            <span className="contact-prowess-toast-desc">{toast.text}</span>
          </div>

          <button
            type="button"
            className="contact-prowess-toast-close"
            onClick={() => setToast(null)}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <span
            className={
              toast.type === "success"
                ? "contact-prowess-toast-bar contact-prowess-toast-bar-success"
                : "contact-prowess-toast-bar contact-prowess-toast-bar-error"
            }
          ></span>
        </div>
      )}
    </section>
  );
}