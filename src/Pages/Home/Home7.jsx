// import { useEffect, useRef } from "react";
// import "./Home7.css";

// const coaches = [
//   {
//     name: "Saurabh Kene",
//     position: "Performance Coach",
//     image: "/images/male.avif",
//     linkedin: "https://linkedin.com/in/",
//   },
//   {
//     name: "Atharva Kopulwar",
//     position: "Performance Coach",
//     image: "/images/male.avif",
//     linkedin: "https://linkedin.com/in/",
//   },
//   {
//     name: "Gayatri Moghe",
//     position: "Performance Coach",
//     image: "/images/female.avif",
//     linkedin: "https://linkedin.com/in/",
//   },
//   {
//     name: "Sumedh Ramteke",
//     position: "Performance Coach",
//     image: "/images/male.avif",
//     linkedin: "https://linkedin.com/in/",
//   },
// ];

// export default function Home7() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".meet-prowess-heading, .meet-prowess-card"
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
//             }, 1200);
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
//     <section className="meet-prowess-section" ref={sectionRef}>
//       <div className="meet-prowess-container">
//         <div className="meet-prowess-heading">
//           <h2 className="meet-prowess-title">
//             MEET YOUR 
//             <br />
//             PERFORMANCE COACHES
//           </h2>
//           <span className="meet-prowess-underline"></span>
//         </div>

//         <div className="meet-prowess-grid">
//           {coaches.map((coach, index) => (
//             <div
//               className="meet-prowess-card"
//               key={index}
//               style={{ "--d": index }}
//             >
//               <div className="meet-prowess-image-wrap">
//                 <img
//                   src={coach.image}
//                   alt={coach.name}
//                   className="meet-prowess-image"
//                 />
//               </div>

//               <div className="meet-prowess-info">
//                 <h3 className="meet-prowess-name">{coach.name}</h3>
//                 <p className="meet-prowess-position">{coach.position}</p>
//               </div>

//               <a
//                 href={coach.linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="meet-prowess-linkedin"
//                 aria-label={`${coach.name} LinkedIn`}
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="meet-prowess-linkedin-icon"
//                   fill="currentColor"
//                 >
//                   <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
//                 </svg>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }















// import { useEffect, useRef, useState, useCallback } from "react";
// import "./Home7.css";

// // ---- API config ----
// const API_URL =
//   "https://workfit.co.in/provess/Prowess/index.php/API/list_performance_coaches";
// const IMG_BASE = "https://workfit.co.in/provess/Prowess/";

// // how many cards are visible per "page" at each breakpoint
// // (matches the existing grid breakpoints: desktop=4, tablet=2, mobile=1)
// function getCardsPerView(width) {
//   if (width <= 520) return 1;
//   if (width <= 1024) return 2;
//   return 4;
// }

// export default function Home7() {
//   const sectionRef = useRef(null);
//   const trackRef = useRef(null);
//   const autoScrollRef = useRef(null);

//   const [coaches, setCoaches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [cardsPerView, setCardsPerView] = useState(
//     typeof window !== "undefined" ? getCardsPerView(window.innerWidth) : 4
//   );
//   const [activePage, setActivePage] = useState(0);

//   // ---------------- Fetch data from API ----------------
//   useEffect(() => {
//     let ignore = false;

//     (async () => {
//       try {
//         const res = await fetch(API_URL);
//         const json = await res.json();

//         // API may return a single object in "data" or an array — handle both
//         let list = [];
//         if (Array.isArray(json?.data)) list = json.data;
//         else if (Array.isArray(json?.list)) list = json.list;
//         else if (json?.data) list = [json.data];

//         const mapped = list.map((item, idx) => ({
//           id: item.id ?? idx,
//           name: item.full_name || "",
//           position: item.position || "",
//           linkedin: item.linkdin_link || "#",
//           image: item.image_path
//             ? item.image_path
//             : item.image
//             ? `${IMG_BASE}${item.image}`
//             : "/images/male.avif",
//         }));

//         if (!ignore) {
//           setCoaches(mapped);
//           setLoading(false);
//         }
//       } catch (err) {
//         if (!ignore) {
//           setError(true);
//           setLoading(false);
//         }
//       }
//     })();

//     return () => {
//       ignore = true;
//     };
//   }, []);

//   // ---------------- Track viewport breakpoint ----------------
//   useEffect(() => {
//     const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   const isCarousel = coaches.length > cardsPerView;
//   const pageCount = isCarousel
//     ? Math.ceil(coaches.length / cardsPerView)
//     : 1;

//   // ---------------- Reveal-on-scroll animation (same as before) ----------------
//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".meet-prowess-heading, .meet-prowess-card"
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
//             }, 1200);
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
//   }, [coaches, cardsPerView]);

//   // ---------------- Carousel controls ----------------
//   const scrollToPage = useCallback((page) => {
//     const track = trackRef.current;
//     if (!track) return;
//     const width = track.clientWidth;
//     track.scrollTo({ left: page * width, behavior: "smooth" });
//   }, []);

//   // keep active dot in sync when user drags/swipes manually
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track || !isCarousel) return;

//     const onScroll = () => {
//       const width = track.clientWidth;
//       const page = Math.round(track.scrollLeft / width);
//       setActivePage(page);
//     };
//     track.addEventListener("scroll", onScroll, { passive: true });
//     return () => track.removeEventListener("scroll", onScroll);
//   }, [isCarousel, cardsPerView, coaches.length]);

//   // auto-scroll every 4s (pauses once user touches/drags)
//   useEffect(() => {
//     if (!isCarousel) return;
//     autoScrollRef.current = setInterval(() => {
//       setActivePage((prev) => {
//         const next = (prev + 1) % pageCount;
//         scrollToPage(next);
//         return next;
//       });
//     }, 4000);
//     return () => clearInterval(autoScrollRef.current);
//   }, [isCarousel, pageCount, scrollToPage]);

//   const pauseAutoScroll = () => {
//     if (autoScrollRef.current) clearInterval(autoScrollRef.current);
//   };

//   return (
//     <section className="meet-prowess-section" ref={sectionRef}>
//       <div className="meet-prowess-container">
//         {/* Heading stays static */}
//         <div className="meet-prowess-heading">
//           <h2 className="meet-prowess-title">
//             MEET YOUR
//             <br />
//             PERFORMANCE COACHES
//           </h2>
//           <span className="meet-prowess-underline"></span>
//         </div>

//         <div className="meet-prowess-carousel-wrap">
//           <div
//             className={`meet-prowess-grid${
//               isCarousel ? " carousel-mode" : ""
//             }`}
//             ref={trackRef}
//             onPointerDown={pauseAutoScroll}
//             onTouchStart={pauseAutoScroll}
//           >
//             {loading && (
//               <p className="meet-prowess-status">Loading coaches...</p>
//             )}

//             {!loading && error && (
//               <p className="meet-prowess-status">
//                 Unable to load coaches right now.
//               </p>
//             )}

//             {!loading &&
//               !error &&
//               coaches.map((coach, index) => (
//                 <div
//                   className="meet-prowess-card"
//                   key={coach.id}
//                   style={
//                     isCarousel
//                       ? {
//                           "--d": index % cardsPerView,
//                           flex: `0 0 calc((100% - ${
//                             (cardsPerView - 1) * 20
//                           }px) / ${cardsPerView})`,
//                         }
//                       : { "--d": index }
//                   }
//                 >
//                   <div className="meet-prowess-image-wrap">
//                     <img
//                       src={coach.image}
//                       alt={coach.name}
//                       className="meet-prowess-image"
//                     />
//                   </div>

//                   <div className="meet-prowess-info">
//                     <h3 className="meet-prowess-name">{coach.name}</h3>
//                     <p className="meet-prowess-position">{coach.position}</p>
//                   </div>

//                   <a
//                     href={coach.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="meet-prowess-linkedin"
//                     aria-label={`${coach.name} LinkedIn`}
//                   >
//                     <svg
//                       viewBox="0 0 24 24"
//                       className="meet-prowess-linkedin-icon"
//                       fill="currentColor"
//                     >
//                       <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
//                     </svg>
//                   </a>
//                 </div>
//               ))}
//           </div>

//           {/* Dots only show when in carousel mode (data > visible slots) */}
//           {isCarousel && (
//             <div className="meet-prowess-dots">
//               {Array.from({ length: pageCount }).map((_, i) => (
//                 <button
//                   key={i}
//                   type="button"
//                   aria-label={`Go to slide ${i + 1}`}
//                   className={`meet-prowess-dot${
//                     i === activePage ? " active" : ""
//                   }`}
//                   onClick={() => {
//                     pauseAutoScroll();
//                     scrollToPage(i);
//                   }}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }











import { useEffect, useRef, useState, useCallback } from "react";
import "./Home7.css";

// ---- API config ----
const API_URL =
  "https://workfit.co.in/provess/Prowess/index.php/API/list_performance_coaches";
const IMG_BASE = "https://workfit.co.in/provess/Prowess/";

// how many cards are visible per "page" at each breakpoint
// (matches the existing grid breakpoints: desktop=4, tablet=2, mobile=1)
function getCardsPerView(width) {
  if (width <= 520) return 1;
  if (width <= 1024) return 2;
  return 4;
}

export default function Home7() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const autoScrollRef = useRef(null);

  const [coaches, setCoaches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(
    typeof window !== "undefined" ? getCardsPerView(window.innerWidth) : 4
  );
  const [activePage, setActivePage] = useState(0);

  // ---------------- Fetch data from API ----------------
  useEffect(() => {
    let ignore = false;

    (async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        // API may return a single object in "data" or an array — handle both
        let list = [];
        if (Array.isArray(json?.data)) list = json.data;
        else if (Array.isArray(json?.list)) list = json.list;
        else if (json?.data) list = [json.data];

        // Sort by id ascending so the first-added record (lowest id)
        // always shows up as the first card, regardless of API order
        list = [...list].sort((a, b) => (Number(a.id) || 0) - (Number(b.id) || 0));

        const mapped = list.map((item, idx) => ({
          id: item.id ?? idx,
          name: item.full_name || "",
          position: item.position || "",
          linkedin: item.linkdin_link || "#",
          image: item.image_path
            ? item.image_path
            : item.image
            ? `${IMG_BASE}${item.image}`
            : "/images/male.avif",
        }));

        if (!ignore) {
          setCoaches(mapped);
          setLoading(false);
        }
      } catch (err) {
        if (!ignore) {
          setError(true);
          setLoading(false);
        }
      }
    })();

    return () => {
      ignore = true;
    };
  }, []);

  // ---------------- Track viewport breakpoint ----------------
  useEffect(() => {
    const onResize = () => setCardsPerView(getCardsPerView(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isCarousel = coaches.length > cardsPerView;
  const pageCount = isCarousel
    ? Math.ceil(coaches.length / cardsPerView)
    : 1;

  // ---------------- Reveal-on-scroll animation (same as before) ----------------
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".meet-prowess-heading, .meet-prowess-card"
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
            }, 1200);
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
  }, [coaches, cardsPerView]);

  // ---------------- Carousel controls ----------------
  const scrollToPage = useCallback((page) => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.clientWidth;
    track.scrollTo({ left: page * width, behavior: "smooth" });
  }, []);

  // keep active dot in sync when user drags/swipes manually
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !isCarousel) return;

    const onScroll = () => {
      const width = track.clientWidth;
      const page = Math.round(track.scrollLeft / width);
      setActivePage(page);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [isCarousel, cardsPerView, coaches.length]);

  // auto-scroll every 4s (pauses once user touches/drags)
  useEffect(() => {
    if (!isCarousel) return;
    autoScrollRef.current = setInterval(() => {
      setActivePage((prev) => {
        const next = (prev + 1) % pageCount;
        scrollToPage(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(autoScrollRef.current);
  }, [isCarousel, pageCount, scrollToPage]);

  const pauseAutoScroll = () => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  };

  return (
    <section className="meet-prowess-section" ref={sectionRef}>
      <div className="meet-prowess-container">
        {/* Heading stays static */}
        <div className="meet-prowess-heading">
          <h2 className="meet-prowess-title">
            MEET YOUR
            <br />
            PERFORMANCE COACHES
          </h2>
          <span className="meet-prowess-underline"></span>
        </div>

        <div className="meet-prowess-carousel-wrap">
          <div
            className={`meet-prowess-grid${
              isCarousel ? " carousel-mode" : ""
            }`}
            ref={trackRef}
            onPointerDown={pauseAutoScroll}
            onTouchStart={pauseAutoScroll}
          >
            {loading && (
              <p className="meet-prowess-status">Loading coaches...</p>
            )}

            {!loading && error && (
              <p className="meet-prowess-status">
                Unable to load coaches right now.
              </p>
            )}

            {!loading &&
              !error &&
              coaches.map((coach, index) => (
                <div
                  className="meet-prowess-card"
                  key={coach.id}
                  style={
                    isCarousel
                      ? {
                          "--d": index % cardsPerView,
                          flex: `0 0 calc((100% - ${
                            (cardsPerView - 1) * 20
                          }px) / ${cardsPerView})`,
                        }
                      : { "--d": index }
                  }
                >
                  <div className="meet-prowess-image-wrap">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="meet-prowess-image"
                    />
                  </div>

                  <div className="meet-prowess-info">
                    <h3 className="meet-prowess-name">{coach.name}</h3>
                    <p className="meet-prowess-position">{coach.position}</p>
                  </div>

                  <a
                    href={coach.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meet-prowess-linkedin"
                    aria-label={`${coach.name} LinkedIn`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="meet-prowess-linkedin-icon"
                      fill="currentColor"
                    >
                      <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                    </svg>
                  </a>
                </div>
              ))}
          </div>

          {/* Dots only show when in carousel mode (data > visible slots) */}
          {isCarousel && (
            <div className="meet-prowess-dots">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  className={`meet-prowess-dot${
                    i === activePage ? " active" : ""
                  }`}
                  onClick={() => {
                    pauseAutoScroll();
                    scrollToPage(i);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}