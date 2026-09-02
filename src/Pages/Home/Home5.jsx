// import { useEffect, useRef } from "react";
// import "./Home5.css";

// const galleryImages = [
//   "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop",
// ];

// const beforeItems = [
//   { icon: "fa-brain", label: "Knows" },
//   { icon: "fa-clock", label: "Waits" },
//   { icon: "fa-circle-question", label: "Hesitates" },
//   { icon: "fa-book", label: "Learns" },
// ];

// const afterItems = [
//   { icon: "fa-bullseye", label: "Applies" },
//   { icon: "fa-bolt", label: "Acts" },
//   { icon: "fa-comment-dots", label: "Communicates" },
//   { icon: "fa-chart-line", label: "Performs" },
//   { icon: "fa-user-check", label: "Takes Ownership" },
// ];

// export default function Home5() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".perform-pro__intro, .perform-pro__gallery-item"
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
//     <section className="perform-pro" ref={sectionRef}>
//       <div className="perform-pro__container">
//         <div className="perform-pro__top">
//           <div className="perform-pro__intro">
//             <h2 className="perform-pro__heading">
//               PERFORMANCE
//               <br />
//               IN ACTION
//             </h2>
//             <span className="perform-pro__rule"></span>
//             <p className="perform-pro__desc">
//               Real activities.
//               <br />
//               Real practice.
//               <br />
//               Real transformation.
//             </p>
//           </div>

//           <div className="perform-pro__gallery">
//             {galleryImages.map((src, index) => (
//               <div
//                 className="perform-pro__gallery-item"
//                 key={index}
//                 style={{ "--d": index }}
//               >
//                 <img src={src} alt={`Performance activity ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* <div className="perform-pro__shift">
//         <div className="perform-pro__shift-container">
//           <div className="perform-pro__shift-label">
//             <i className="fa-solid fa-arrow-right-arrow-left"></i>
//             <span>
//               PERFORMANCE
//               <br />
//               SHIFT
//             </span>
//           </div>

//           <div className="perform-pro__shift-block">
//             <span className="perform-pro__shift-tag">BEFORE PROWESS</span>
//             <div className="perform-pro__shift-items">
//               {beforeItems.map((item) => (
//                 <div className="perform-pro__shift-item" key={item.label}>
//                   <i className={`fa-solid ${item.icon}`}></i>
//                   <span>{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <span className="perform-pro__shift-arrow">
//             <i className="fa-solid fa-angles-right"></i>
//           </span>

//           <div className="perform-pro__shift-block">
//             <span className="perform-pro__shift-tag perform-pro__shift-tag--after">
//               AFTER PROWESS
//             </span>
//             <div className="perform-pro__shift-items">
//               {afterItems.map((item) => (
//                 <div
//                   className="perform-pro__shift-item perform-pro__shift-item--after"
//                   key={item.label}
//                 >
//                   <i className={`fa-solid ${item.icon}`}></i>
//                   <span>{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </section>
//   );
// }























import { useEffect, useRef, useState } from "react";
import "./Home5.css";

export default function Home5() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  /* ── Fetch Images API ── */
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          "https://workfit.co.in/provess/Prowess/index.php/API/list_performnce_action"
        );
        const json = await res.json();
        if (json.success === "1" && json.data) {
          let data = Array.isArray(json.data) ? json.data : [json.data];
          /* Ascending: admin ne jo pehle dala wo first par */
          data.sort((a, b) => Number(a.id) - Number(b.id));
          setImages(data.map((d) => d.image_path));
        }
      } catch (err) {
        console.error("Performance action API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  /* ── Intersection Observer (animations) ── */
  useEffect(() => {
    if (loading || images.length === 0) return;

    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".perform-pro__intro, .perform-pro__gallery-item"
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
  }, [loading, images]);

  /* ── Loading / Empty guard ── */
  if (loading || images.length === 0) return null;

  return (
    <section className="perform-pro" ref={sectionRef}>
      <div className="perform-pro__container">
        <div className="perform-pro__top">
          {/* ✅ STATIC — heading & description */}
          <div className="perform-pro__intro">
            <h2 className="perform-pro__heading">
              PERFORMANCE
              <br />
              IN ACTION
            </h2>
            <span className="perform-pro__rule"></span>
            <p className="perform-pro__desc">
              Real activities.
              <br />
              Real practice.
              <br />
              Real transformation.
            </p>
          </div>

          {/* ✅ DYNAMIC — images from API */}
          <div className="perform-pro__gallery">
            {images.map((src, index) => (
              <div
                className="perform-pro__gallery-item"
                key={index}
                style={{ "--d": index }}
              >
                <img src={src} alt={`Performance activity ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="perform-pro__shift">
        <div className="perform-pro__shift-container">
          <div className="perform-pro__shift-label">
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
            <span>
              PERFORMANCE
              <br />
              SHIFT
            </span>
          </div>

          <div className="perform-pro__shift-block">
            <span className="perform-pro__shift-tag">BEFORE PROWESS</span>
            <div className="perform-pro__shift-items">
              {beforeItems.map((item) => (
                <div className="perform-pro__shift-item" key={item.label}>
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="perform-pro__shift-arrow">
            <i className="fa-solid fa-angles-right"></i>
          </span>

          <div className="perform-pro__shift-block">
            <span className="perform-pro__shift-tag perform-pro__shift-tag--after">
              AFTER PROWESS
            </span>
            <div className="perform-pro__shift-items">
              {afterItems.map((item) => (
                <div
                  className="perform-pro__shift-item perform-pro__shift-item--after"
                  key={item.label}
                >
                  <i className={`fa-solid ${item.icon}`}></i>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}