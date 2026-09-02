// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./Contact3.css";

// const contacts = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M6.5 3.5c1 0 2.4 2 2.6 2.9.2.8-.7 1.4-1.1 2-.5.7 2.1 4.2 3.5 4.8.5.2 1.2-.7 1.9-1.1.9-.5 3 .9 3 1.9 0 1.4-1.6 3-3 3-3.6 0-9.9-6.3-9.9-9.9 0-1.4 1.6-3 3-3z"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "PHONE",
//     lines: ["+91 86000 54060", "+91 93094 07950"],
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <rect
//           x="3.5"
//           y="5.5"
//           width="17"
//           height="13"
//           rx="1.5"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//         />
//         <path
//           d="m4 6.5 8 6.5 8-6.5"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "EMAIL",
//     lines: ["hello@prowesss.com"],
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <path
//           d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//           strokeLinejoin="round"
//         />
//         <circle cx="12" cy="9.5" r="2.3" stroke="#f5b301" strokeWidth="1.3" />
//       </svg>
//     ),
//     title: "ADDRESS",
//     lines: ["43, Shankar Nagar, Civil Lines,", "Nagpur, Maharashtra 440001"],
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="8" stroke="#f5b301" strokeWidth="1.3" />
//         <path
//           d="M12 7.5V12l3 2"
//           stroke="#f5b301"
//           strokeWidth="1.3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>
//     ),
//     title: "HOURS",
//     lines: ["Mon - Sat", "10:00 AM - 7:00 PM"],
//   },
// ];

// export default function Contact3() {
//   useEffect(() => {
//     AOS.init({
//       duration: 750,
//       once: false,
//       offset: 70,
//       easing: "ease-in-out-sine",
//     });
//   }, []);

//   return (
//     <section className="gettouch-prow-section">
//       <div className="gettouch-prow-row">
//         {/* ---------- Left: Get In Touch card ---------- */}
//         <div className="gettouch-prow-left-card" data-aos="slide-right">
//           <h2 className="gettouch-prow-heading">
//             GET IN <span className="gettouch-prow-heading-accent">TOUCH</span>
//           </h2>
//           <span className="gettouch-prow-underline"></span>

//           <div className="gettouch-prow-items-row">
//             {contacts.map((item, index) => (
//               <div
//                 className="gettouch-prow-item-wrap"
//                 key={index}
//                 data-aos="slide-up"
//                 data-aos-delay={index * 100}
//               >
//                 {index > 0 && (
//                   <span className="gettouch-prow-item-divider"></span>
//                 )}
//                 <div className="gettouch-prow-item gettouch-prow-item-hover">
//                   <span className="gettouch-prow-icon-circle">
//                     {item.icon}
//                   </span>
//                   <div className="gettouch-prow-item-text">
//                     <h3 className="gettouch-prow-item-title">
//                       {item.title}
//                     </h3>
//                     {item.lines.map((line, i) => (
//                       <p className="gettouch-prow-item-line" key={i}>
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ---------- Right: Map card with overlay info box ---------- */}
//         <div
//           className="gettouch-prow-map-card gettouch-prow-map-card-hover"
//           data-aos="slide-left"
//         >
//           <iframe
//             src="https://www.google.com/maps?q=21.1422003,79.053038&z=17&output=embed"
//             className="gettouch-prow-map-img"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>

//           <div
//             className="gettouch-prow-map-overlay"
//             data-aos="zoom-in"
//             data-aos-delay="300"
//           >
//             <span className="gettouch-prow-map-icon">
//               <svg viewBox="0 0 24 24" fill="none">
//                 <path
//                   d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"
//                   stroke="#f5b301"
//                   strokeWidth="1.4"
//                   strokeLinejoin="round"
//                 />
//                 <circle
//                   cx="12"
//                   cy="9.5"
//                   r="2.3"
//                   stroke="#f5b301"
//                   strokeWidth="1.4"
//                 />
//               </svg>
//             </span>

//             <h3 className="gettouch-prow-map-title">
//               PROWESS PERFORMANCE HUB
//             </h3>
//             <p className="gettouch-prow-map-desc">
//               43, Shankar Nagar,
//               <br />
//               Civil Lines, Nagpur,
//               <br />
//               Maharashtra 440001
//             </p>

//             <button type="button" className="gettouch-prow-map-btn">
//               VIEW ON MAP
//               <svg viewBox="0 0 24 24" className="gettouch-prow-map-btn-icon">
//                 <path
//                   d="M7 17 17 7M9 7h8v8"
//                   stroke="#0a0a0a"
//                   strokeWidth="1.8"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }













// Dyanamic Code
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact3.css";

/* ---------- Static Icons (kabhi change nahi honge) ---------- */
const staticIcons = [
  /* Phone */
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M6.5 3.5c1 0 2.4 2 2.6 2.9.2.8-.7 1.4-1.1 2-.5.7 2.1 4.2 3.5 4.8.5.2 1.2-.7 1.9-1.1.9-.5 3 .9 3 1.9 0 1.4-1.6 3-3 3-3.6 0-9.9-6.3-9.9-9.9 0-1.4 1.6-3 3-3z" stroke="#f5b301" strokeWidth="1.3" strokeLinejoin="round" />
  </svg>,
  /* Email */
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="#f5b301" strokeWidth="1.3" />
    <path d="m4 6.5 8 6.5 8-6.5" stroke="#f5b301" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  /* Address */
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" stroke="#f5b301" strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.3" stroke="#f5b301" strokeWidth="1.3" />
  </svg>,
  /* Hours */
  <svg viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8" stroke="#f5b301" strokeWidth="1.3" />
    <path d="M12 7.5V12l3 2" stroke="#f5b301" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

/* ---------- Fallback data (API fail par ye dikhega) ---------- */
const fallbackData = [
  {
    title: "PHONE",
    description: "+91 86000 54060<br>+91 93094 07950",
  },
  {
    title: "EMAIL",
    description: "hello@prowesss.com",
  },
  {
    title: "ADDRESS",
    description: "43, Shankar Nagar, Civil Lines,<br>Nagpur, Maharashtra 440001",
  },
  {
    title: "HOURS",
    description: "Mon - Sat<br>10:00 AM - 7:00 PM",
  },
];

export default function Contact3() {
  const [contacts, setContacts] = useState(fallbackData);

  useEffect(() => {
    AOS.init({
      duration: 750,
      once: false,
      offset: 70,
      easing: "ease-in-out-sine",
    });

    fetch(
      "https://workfit.co.in/provess/Prowess/index.php/API/list_get_in_touch"
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "true" && res.data) {
          /* Array ya single object — dono handle */
          const items = Array.isArray(res.data) ? res.data : [res.data];

          /* id ke basis pe ascending sort → pehle add = pehla card */
          const sorted = items
            .slice()
            .sort((a, b) => (a.id || 0) - (b.id || 0))
            .slice(0, 4);

          const mapped = sorted.map((item) => ({
            title: item.heading || "",
            description: item.description || "",
          }));

          if (mapped.length > 0 && mapped[0].title) {
            setContacts(mapped);
          }
        }
      })
      .catch(() => {
        /* API fail → fallback data hi rehta hai */
      });
  }, []);

  return (
    <section className="gettouch-prow-section">
      <div className="gettouch-prow-row">
        {/* ---------- Left: Get In Touch card ---------- */}
        <div className="gettouch-prow-left-card" data-aos="slide-right">
          {/* Static heading — kabhi change nahi hoga */}
          <h2 className="gettouch-prow-heading">
            GET IN <span className="gettouch-prow-heading-accent">TOUCH</span>
          </h2>
          <span className="gettouch-prow-underline"></span>

          <div className="gettouch-prow-items-row">
            {contacts.map((item, index) => (
              <div
                className="gettouch-prow-item-wrap"
                key={index}
                data-aos="slide-up"
                data-aos-delay={index * 100}
              >
                {index > 0 && (
                  <span className="gettouch-prow-item-divider"></span>
                )}
                <div className="gettouch-prow-item gettouch-prow-item-hover">
                  {/* Static icon */}
                  <span className="gettouch-prow-icon-circle">
                    {staticIcons[index] || staticIcons[0]}
                  </span>

                  <div className="gettouch-prow-item-text">
                    {/* heading from API */}
                    <h3 className="gettouch-prow-item-title">
                      {item.title}
                    </h3>

                    {/* description from CK Editor — dangerouslySetInnerHTML */}
                    <div
                      className="gettouch-prow-item-line"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Right: Map card — bilkul same, no change ---------- */}
        <div
          className="gettouch-prow-map-card gettouch-prow-map-card-hover"
          data-aos="slide-left"
        >
          {/* <iframe
            src="https://www.google.com/maps?q=21.1422003,79.053038&z=17&output=embed"
            className="gettouch-prow-map-img"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}

           <iframe
            src="https://www.google.com/maps?q=21.1058191,79.0414536&z=17&output=embed"
            className="gettouch-prow-map-img"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div
            className="gettouch-prow-map-overlay"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <span className="gettouch-prow-map-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"
                  stroke="#f5b301"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="9.5"
                  r="2.3"
                  stroke="#f5b301"
                  strokeWidth="1.4"
                />
              </svg>
            </span>

            <h3 className="gettouch-prow-map-title">
              PROWESS PERFORMANCE HUB
            </h3>
            <p className="gettouch-prow-map-desc">
              Plot no 2, Patil Layout, 
              <br />
              Indraprastha Nagar, Swavalambi Nagar, Nagpur, Maharashtra 440025
              <br />
              
            </p>


            {/* <button type="button" className="gettouch-prow-map-btn">
              VIEW ON MAP
              <svg viewBox="0 0 24 24" className="gettouch-prow-map-btn-icon">
                <path
                  d="M7 17 17 7M9 7h8v8"
                  stroke="#0a0a0a"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button> */}

            <button 
  type="button" 
  className="gettouch-prow-map-btn"
  onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=21.1058191,79.0414536", "_blank")}
>
  VIEW ON MAP
  <svg viewBox="0 0 24 24" className="gettouch-prow-map-btn-icon">
    <path
      d="M7 17 17 7M9 7h8v8"
      stroke="#0a0a0a"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>
          </div>
        </div>
      </div>
    </section>
  );
}