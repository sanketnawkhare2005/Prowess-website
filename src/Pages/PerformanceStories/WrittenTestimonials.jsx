// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import "./WrittenTestimonials.css";

// const testimonialData = [
//   {
//     id: 1,
//     name: 'Rohit Sharma',
//     degree: 'B.Tech Student',
//     college: 'YCCE, Nagpur',
//     rating: 5,
//     photo: 'https://picsum.photos/seed/rohit-prowess/200/200.jpg',
//     message:
//       'Prowess me sirf theory nahi thi. Har session ke baad performance challenge milta tha. Isse meri communication aur confidence dono improve hue.'
//   },
//   {
//     id: 2,
//     name: 'Sneha Patil',
//     degree: 'MBA Aspirant',
//     college: 'Nagpur',
//     rating: 5,
//     photo: 'https://picsum.photos/seed/sneha-prowess/200/200.jpg',
//     message:
//       'Mock interviews aur presentation activities ne mujhe real placement environment ke liye prepare kiya. Ab main khud ko pehle se bahut better express kar pati hoon.'
//   },
//   {
//     id: 3,
//     name: 'Aditya Verma',
//     degree: 'Final Year Student',
//     college: 'YCCE, Nagpur',
//     rating: 5,
//     photo: 'https://picsum.photos/seed/aditya-prowess/200/200.jpg',
//     message:
//       'Pehle public speaking avoid karta tha. Ab college presentations confidently handle karta hoon aur log feedback bhi dete hain.'
//   },
//   {
//     id: 4,
//     name: 'Neha Gawande',
//     degree: 'BBA Student',
//     college: 'Nagpur',
//     rating: 5,
//     photo: 'https://picsum.photos/seed/neha-prowess/200/200.jpg',
//     message:
//       'Leadership activities aur team challenges ne mujhe responsibility lena aur decisions confidently lena sikhaya.'
//   }
// ];

// const EmliNewStars = ({ rating }) => (
//   <div className="emliNew-stars">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <svg
//         key={i}
//         className="emliNew-star-icon"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill={i < rating ? '#D4AF37' : '#E5E5E5'}
//       >
//         <path d="M12 2 L14.9 8.6 L22 9.3 L16.7 14 L18.2 21 L12 17.3 L5.8 21 L7.3 14 L2 9.3 L9.1 8.6 Z" />
//       </svg>
//     ))}
//   </div>
// );

// const EmliNewCard = ({ t, index }) => (
//   <div
//     className="emliNew-card"
//     style={{ '--i': index }}
//   >
//     {/* Continuous shine sweep */}
//     <div className="emliNew-continuous-shine" />
//     <span className="emliNew-quote">&rdquo;</span>
//     <div className="emliNew-top">
//       <div className="emliNew-avatar">
//         <img src={t.photo} alt={t.name} />
//       </div>
//       <div className="emliNew-info">
//         <p className="emliNew-name">{t.name}</p>
//         <p className="emliNew-degree">{t.degree}</p>
//         <p className="emliNew-college">{t.college}</p>
//       </div>
//     </div>
//     <p className="emliNew-msg">{t.message}</p>
//     <EmliNewStars rating={t.rating} />
//   </div>
// );

// const WrittenTestimonials = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false,
//       offset: 60,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   return (
//     <section className="emliNew-wrap">
//       <div className="emliNew-title-row" data-aos="fade-up">
//         <span className="emliNew-title-line" />
//         <span className="emliNew-title-badge">WHAT OUR LEARNERS SAY</span>
//         <span className="emliNew-title-line" />
//       </div>

//       <div className="emliNew-grid">
//         {testimonialData.map((t, index) => (
//           <div
//             className="emliNew-cell"
//             data-aos="fade-up"
//             data-aos-delay={index * 130}
//             key={t.id}
//           >
//             <EmliNewCard t={t} index={index} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WrittenTestimonials;








// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import "./WrittenTestimonials.css";

// // const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_written_testimonials';
// // ✅ AB (Sahi) - status=approved add kiya
// const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_written_testimonials?status=approved';
// const AUTO_SCROLL_MS = 3500;
// const PAUSE_ON_CLICK_MS = 5000;

// const EmliNewStars = ({ rating }) => (
//   <div className="emliNew-stars">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <svg
//         key={i}
//         className="emliNew-star-icon"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill={i < rating ? '#D4AF37' : '#E5E5E5'}
//       >
//         <path d="M12 2 L14.9 8.6 L22 9.3 L16.7 14 L18.2 21 L12 17.3 L5.8 21 L7.3 14 L2 9.3 L9.1 8.6 Z" />
//       </svg>
//     ))}
//   </div>
// );

// const EmliNewCard = ({ t, index }) => (
//   <div
//     className="emliNew-card"
//     style={{ '--i': index }}
//   >
//     <div className="emliNew-continuous-shine" />
//     <span className="emliNew-quote">{"\u201D"}</span>
//     <div className="emliNew-top">
//       <div className="emliNew-avatar">
//         <img src={t.photo} alt={t.name} />
//       </div>
//       <div className="emliNew-info">
//         <p className="emliNew-name">{t.name}</p>
//         <p className="emliNew-degree">{t.degree}</p>
//         <p className="emliNew-college">{t.college}</p>
//       </div>
//     </div>
//     <p className="emliNew-msg">{t.message}</p>
//     <EmliNewStars rating={t.rating} />
//   </div>
// );

// const WrittenTestimonials = () => {
//   const [testimonialData, setTestimonialData] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(4);
//   const timerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const isPaused = useRef(false);

//   /* Screen size ke hisaab se visible cards */
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 560) {
//         setVisibleCards(1);
//       } else if (window.innerWidth <= 900) {
//         setVisibleCards(2);
//       } else {
//         setVisibleCards(4);
//       }
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false,
//       offset: 60,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   // useEffect(() => {
//   //   const fetchTestimonials = async () => {
//   //     try {
//   //       const res = await fetch(API_URL);
//   //       const json = await res.json();

//   //       if (json.success === '1' && Array.isArray(json.data)) {
//   //         const mapped = json.data
//   //           .sort((a, b) => Number(a.display_order) - Number(b.display_order))
//   //           .map((item) => ({
//   //             id: item.id,
//   //             name: item.full_name,
//   //             degree: item.degree,
//   //             college: item.college,
//   //             rating: Number(item.rating),
//   //             photo: item.photo_path,
//   //             message: item.feedback_message
//   //           }));

//   //         setTestimonialData(mapped);
//   //       }
//   //     } catch (err) {
//   //       console.error('WrittenTestimonials fetch error:', err);
//   //     }
//   //   };

//   //   fetchTestimonials();
//   // }, []);

// useEffect(() => {
//   const fetchTestimonials = async () => {
//     try {
//       const res = await fetch(API_URL); // API_URL me already ?status=approved hai
//       const json = await res.json();

//       if (json.success === '1' && Array.isArray(json.data)) {
//         const mapped = json.data
//           .sort((a, b) => Number(a.display_order) - Number(b.display_order))
//           .map((item) => ({
//             id: item.id,
//             name: item.full_name,
//             degree: item.degree,
//             college: item.college,
//             rating: Number(item.rating),
//             photo: item.photo_path,
//             message: item.feedback_message
//           }));

//         setTestimonialData(mapped);
//       }
//     } catch (err) {
//       console.error('WrittenTestimonials fetch error:', err);
//     }
//   };

//   fetchTestimonials();
// }, []);

//   const shouldScroll = testimonialData.length > visibleCards;
//   const maxIndex = Math.max(0, testimonialData.length - visibleCards);

//   /* Resize pe activeIndex reset */
//   useEffect(() => {
//     if (activeIndex > maxIndex) {
//       setActiveIndex(maxIndex);
//     }
//   }, [maxIndex, activeIndex]);

//   const goTo = (idx) => {
//     const clamped = Math.max(0, Math.min(idx, maxIndex));
//     setActiveIndex(clamped);
//   };

//   const startAutoScroll = useCallback(() => {
//     if (!shouldScroll) return;
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, AUTO_SCROLL_MS);
//   }, [shouldScroll, maxIndex]);

//   useEffect(() => {
//     startAutoScroll();
//     return () => clearInterval(timerRef.current);
//   }, [startAutoScroll]);

//   const handleDotClick = (idx) => {
//     goTo(idx);
//     clearInterval(timerRef.current);
//     setTimeout(startAutoScroll, PAUSE_ON_CLICK_MS);
//   };

//   /* Touch Swipe — sirf start aur end */
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//     isPaused.current = true;
//     clearInterval(timerRef.current);
//   };

//   const handleTouchEnd = (e) => {
//     if (!isPaused.current) return;
//     isPaused.current = false;
//     const diff = touchStartX.current - e.changedTouches[0].clientX;

//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         goTo(activeIndex + 1);
//       } else {
//         goTo(activeIndex - 1);
//       }
//     }
//     setTimeout(startAutoScroll, PAUSE_ON_CLICK_MS);
//   };

//   return (
//     <section className="emliNew-wrap">
//       <div className="emliNew-title-row" data-aos="fade-up">
//         <span className="emliNew-title-line" />
//         <span className="emliNew-title-badge">WHAT OUR LEARNERS SAY</span>
//         <span className="emliNew-title-line" />
//       </div>

//       {shouldScroll ? (
//         <div
//           className="emliNew-carousel"
//           data-aos="fade-up"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className="emliNew-carousel-track"
//             style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
//           >
//             {testimonialData.map((t, index) => (
//               <div className="emliNew-carousel-slide" key={t.id}>
//                 <EmliNewCard t={t} index={index} />
//               </div>
//             ))}
//           </div>
//           <div className="emliNew-dots">
//             {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//               <button
//                 key={i}
//                 className={`emliNew-dot ${i === activeIndex ? 'emliNew-dot-active' : ''}`}
//                 onClick={() => handleDotClick(i)}
//               />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="emliNew-grid">
//           {testimonialData.map((t, index) => (
//             <div
//               className="emliNew-cell"
//               data-aos="fade-up"
//               data-aos-delay={index * 130}
//               key={t.id}
//             >
//               <EmliNewCard t={t} index={index} />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default WrittenTestimonials;












// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import "./WrittenTestimonials.css";

// // ❌ Query param kaam nahi karta is API me
// // const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_written_testimonials?status=approved';

// // ✅ Simple URL - frontend pe filter karenge
// const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_written_testimonials';
// const AUTO_SCROLL_MS = 3500;
// const PAUSE_ON_CLICK_MS = 5000;

// const EmliNewStars = ({ rating }) => (
//   <div className="emliNew-stars">
//     {Array.from({ length: 5 }).map((_, i) => (
//       <svg
//         key={i}
//         className="emliNew-star-icon"
//         width="16"
//         height="16"
//         viewBox="0 0 24 24"
//         fill={i < rating ? '#D4AF37' : '#E5E5E5'}
//       >
//         <path d="M12 2 L14.9 8.6 L22 9.3 L16.7 14 L18.2 21 L12 17.3 L5.8 21 L7.3 14 L2 9.3 L9.1 8.6 Z" />
//       </svg>
//     ))}
//   </div>
// );

// const EmliNewCard = ({ t, index }) => (
//   <div
//     className="emliNew-card"
//     style={{ '--i': index }}
//   >
//     <div className="emliNew-continuous-shine" />
//     <span className="emliNew-quote">{"\u201D"}</span>
//     <div className="emliNew-top">
//       <div className="emliNew-avatar">
//         <img src={t.photo} alt={t.name} />
//       </div>
//       <div className="emliNew-info">
//         <p className="emliNew-name">{t.name}</p>
//         <p className="emliNew-degree">{t.degree}</p>
//         <p className="emliNew-college">{t.college}</p>
//       </div>
//     </div>
//     <p className="emliNew-msg">{t.message}</p>
//     <EmliNewStars rating={t.rating} />
//   </div>
// );

// const WrittenTestimonials = () => {
//   const [testimonialData, setTestimonialData] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(4);
//   const timerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const isPaused = useRef(false);

//   /* Screen size ke hisaab se visible cards */
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 560) {
//         setVisibleCards(1);
//       } else if (window.innerWidth <= 900) {
//         setVisibleCards(2);
//       } else {
//         setVisibleCards(4);
//       }
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false,
//       offset: 60,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   // ✅✅✅ FIXED - Frontend pe filter kar rahe hain
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const res = await fetch(API_URL);
//         const json = await res.json();

//         if (json.success === '1' && Array.isArray(json.data)) {
//           const mapped = json.data
//             // ✅✅✅ YAHAN FILTER KAR RAHE - SIRF APPROVED DIKHEGA
//             .filter((item) => item.status === 'approved')
//             .sort((a, b) => Number(a.display_order) - Number(b.display_order))
//             .map((item) => ({
//               id: item.id,
//               name: item.full_name,
//               degree: item.degree,
//               college: item.college,
//               rating: Number(item.rating),
//               photo: item.photo_path,
//               message: item.feedback_message
//             }));

//           setTestimonialData(mapped);
//         }
//       } catch (err) {
//         console.error('WrittenTestimonials fetch error:', err);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   const shouldScroll = testimonialData.length > visibleCards;
//   const maxIndex = Math.max(0, testimonialData.length - visibleCards);

//   /* Resize pe activeIndex reset */
//   useEffect(() => {
//     if (activeIndex > maxIndex) {
//       setActiveIndex(maxIndex);
//     }
//   }, [maxIndex, activeIndex]);

//   const goTo = (idx) => {
//     const clamped = Math.max(0, Math.min(idx, maxIndex));
//     setActiveIndex(clamped);
//   };

//   const startAutoScroll = useCallback(() => {
//     if (!shouldScroll) return;
//     clearInterval(timerRef.current);
//     timerRef.current = setInterval(() => {
//       setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, AUTO_SCROLL_MS);
//   }, [shouldScroll, maxIndex]);

//   useEffect(() => {
//     startAutoScroll();
//     return () => clearInterval(timerRef.current);
//   }, [startAutoScroll]);

//   const handleDotClick = (idx) => {
//     goTo(idx);
//     clearInterval(timerRef.current);
//     setTimeout(startAutoScroll, PAUSE_ON_CLICK_MS);
//   };

//   /* Touch Swipe */
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//     isPaused.current = true;
//     clearInterval(timerRef.current);
//   };

//   const handleTouchEnd = (e) => {
//     if (!isPaused.current) return;
//     isPaused.current = false;
//     const diff = touchStartX.current - e.changedTouches[0].clientX;

//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         goTo(activeIndex + 1);
//       } else {
//         goTo(activeIndex - 1);
//       }
//     }
//     setTimeout(startAutoScroll, PAUSE_ON_CLICK_MS);
//   };

//   return (
//     <section className="emliNew-wrap">
//       <div className="emliNew-title-row" data-aos="fade-up">
//         <span className="emliNew-title-line" />
//         <span className="emliNew-title-badge">WHAT OUR LEARNERS SAY</span>
//         <span className="emliNew-title-line" />
//       </div>

//       {shouldScroll ? (
//         <div
//           className="emliNew-carousel"
//           data-aos="fade-up"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className="emliNew-carousel-track"
//             style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
//           >
//             {testimonialData.map((t, index) => (
//               <div className="emliNew-carousel-slide" key={t.id}>
//                 <EmliNewCard t={t} index={index} />
//               </div>
//             ))}
//           </div>
//           <div className="emliNew-dots">
//             {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//               <button
//                 key={i}
//                 className={`emliNew-dot ${i === activeIndex ? 'emliNew-dot-active' : ''}`}
//                 onClick={() => handleDotClick(i)}
//               />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="emliNew-grid">
//           {testimonialData.map((t, index) => (
//             <div
//               className="emliNew-cell"
//               data-aos="fade-up"
//               data-aos-delay={index * 130}
//               key={t.id}
//             >
//               <EmliNewCard t={t} index={index} />
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default WrittenTestimonials;









import React, { useEffect, useState, useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./WrittenTestimonials.css";

// ✅ 2 APIs
const WRITTEN_API = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_written_testimonials';
const FEEDBACK_API = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_feedback_submissions';

const AUTO_SCROLL_MS = 3500;
const PAUSE_ON_CLICK_MS = 5000;

const EmliNewStars = ({ rating }) => (
  <div className="emliNew-stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className="emliNew-star-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? '#D4AF37' : '#E5E5E5'}
      >
        <path d="M12 2 L14.9 8.6 L22 9.3 L16.7 14 L18.2 21 L12 17.3 L5.8 21 L7.3 14 L2 9.3 L9.1 8.6 Z" />
      </svg>
    ))}
  </div>
);

const EmliNewCard = ({ t, index }) => (
  <div
    className="emliNew-card"
    style={{ '--i': index }}
  >
    <div className="emliNew-continuous-shine" />
    <span className="emliNew-quote">{"\u201D"}</span>
    <div className="emliNew-top">
      <div className="emliNew-avatar">
        <img
          src={t.photo}
          alt={t.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/60x60/1a1a2e/D4AF37?text=" + (t.name ? t.name.charAt(0).toUpperCase() : '?');
          }}
        />
      </div>
      <div className="emliNew-info">
        <p className="emliNew-name">{t.name}</p>
        <p className="emliNew-degree">{t.degree}</p>
        <p className="emliNew-college">{t.college}</p>
      </div>
    </div>
    <p className="emliNew-msg">{t.message}</p>
    <EmliNewStars rating={t.rating} />
  </div>
);

const WrittenTestimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const isPaused = useRef(false);

  /* Screen size ke hisaab se visible cards */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setVisibleCards(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ AOS init - but we won't use it on dynamic cards
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 60,
      easing: 'ease-out-cubic'
    });
  }, []);

  // ✅✅✅ ROBUST FETCH
  useEffect(() => {
    const fetchAllTestimonials = async () => {
      let fromWrittenTable = [];
      let fromFeedbackForm = [];

      // ✅ API 1: Written Testimonials Table
      try {
        const res1 = await fetch(WRITTEN_API);
        const json1 = await res1.json();

        if (json1.success === '1' && Array.isArray(json1.data)) {
          fromWrittenTable = json1.data
            .filter((item) => item.status === 'approved')
            .map((item) => ({
              id: `w-${item.id}`,
              name: item.full_name || 'Anonymous',
              degree: item.degree || '',
              college: item.college || '',
              rating: Number(item.rating) || 5,
              photo: item.photo_path || '',
              message: item.feedback_message || '',
              displayOrder: Number(item.display_order) || 999,
              createdAt: item.created_at || ''
            }));
        }
      } catch (err1) {
        console.error('Written API error:', err1);
      }

      // ✅ API 2: Feedback Submissions Table
      try {
        const res2 = await fetch(FEEDBACK_API);
        const json2 = await res2.json();

        if (json2.success === '1' && Array.isArray(json2.data)) {
          fromFeedbackForm = json2.data
            .filter((item) => item.status === 'approved')
            .map((item) => ({
              id: `f-${item.id}`,
              name: item.full_name || 'Anonymous',
              degree: item.degree || '',
              college: item.college || '',
              rating: Number(item.rating) || 5,
              photo: item.photo_path || '',
              message: item.feedback_message || '',
              displayOrder: 999,
              createdAt: item.created_at || ''
            }));
        }
      } catch (err2) {
        console.error('Feedback API error:', err2);
      }

      // ✅ MERGE BOTH
      const merged = [...fromWrittenTable, ...fromFeedbackForm]
        .sort((a, b) => {
          if (a.displayOrder !== b.displayOrder) {
            return a.displayOrder - b.displayOrder;
          }
          return b.createdAt.localeCompare(a.createdAt);
        });

      setTestimonialData(merged);
      
      // ✅ AOS refresh after data loads
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    };

    fetchAllTestimonials();
  }, []);

  const shouldScroll = testimonialData.length > visibleCards;
  const maxIndex = Math.max(0, testimonialData.length - visibleCards);

  /* Resize pe activeIndex reset */
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [maxIndex, activeIndex]);

  const goTo = (idx) => {
    const clamped = Math.max(0, Math.min(idx, maxIndex));
    setActiveIndex(clamped);
  };

  const startAutoScroll = useCallback(() => {
    if (!shouldScroll) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_SCROLL_MS);
  }, [shouldScroll, maxIndex]);

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(timerRef.current);
  }, [startAutoScroll]);

  const handleDotClick = (idx) => {
    goTo(idx);
    clearInterval(timerRef.current);
    setTimeout(startAutoScroll, PAUSE_ON_CLICK_MS);
  };

  /* Touch Swipe */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isPaused.current = true;
    clearInterval(timerRef.current);
  };

  const handleTouchEnd = (e) => {
    if (!isPaused.current) return;
    isPaused.current = false;
    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goTo(activeIndex + 1);
      } else {
        goTo(activeIndex - 1);
      }
    }
    setTimeout(startAutoScroll, PAUSE_ON_CLICK_MS);
  };

  return (
    <section className="emliNew-wrap">
      {/* ✅ AOS only on title - NOT on dynamic cards */}
      <div className="emliNew-title-row" data-aos="fade-up">
        <span className="emliNew-title-line" />
        <span className="emliNew-title-badge">WHAT OUR LEARNERS SAY</span>
        <span className="emliNew-title-line" />
      </div>

      {testimonialData.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p>No testimonials yet. Be the first to share your experience!</p>
        </div>
      ) : shouldScroll ? (
        <div
          className="emliNew-carousel"
          // ❌ data-aos HATA DIYA - yahi problem tha!
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="emliNew-carousel-track"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
          >
            {testimonialData.map((t, index) => (
              <div className="emliNew-carousel-slide" key={t.id}>
                {/* ❌ data-aos HATA DIYA */}
                <EmliNewCard t={t} index={index} />
              </div>
            ))}
          </div>
          <div className="emliNew-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`emliNew-dot ${i === activeIndex ? 'emliNew-dot-active' : ''}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="emliNew-grid">
          {testimonialData.map((t, index) => (
            <div
              className="emliNew-cell"
              // ❌ data-aos HATA DIYA - yahi problem tha!
              // ❌ data-aos-delay HATA DIYA
              key={t.id}
            >
              <EmliNewCard t={t} index={index} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WrittenTestimonials;