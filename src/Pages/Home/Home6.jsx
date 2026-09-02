// import { useEffect, useRef } from "react";
// import "./Home6.css";

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

// function ItemRow({ items, variant }) {
//   return (
//     <div className="shift-home6__items">
//       {items.map((item, index) => (
//         <div className="shift-home6__item-wrap" key={item.label} style={{ "--d": index }}>
//           <div
//             className={`shift-home6__item ${
//               variant === "after" ? "shift-home6__item--after" : ""
//             }`}
//           >
//             <i className={`fa-solid ${item.icon}`}></i>
//             <span>{item.label}</span>
//           </div>
//           {index < items.length - 1 && (
//             <span className="shift-home6__divider-line" style={{ "--d": index }}></span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function Home6() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const targets = section.querySelectorAll(
//       ".shift-home6__label, " +
//       ".shift-home6__line, " +
//       ".shift-home6__tag, " +
//       ".shift-home6__item-wrap, " +
//       ".shift-home6__divider-line, " +
//       ".shift-home6__arrow"
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
//     <section className="shift-home6" ref={sectionRef}>
//       <div className="shift-home6__container">
//         <div className="shift-home6__label">
//           <span>
//             PERFORMANCE
//             <br />
//             SHIFT
//           </span>
//         </div>

//         <div className="shift-home6__block">
//           <div className="shift-home6__divider">
//             <span className="shift-home6__line"></span>
//             <span className="shift-home6__tag">BEFORE PROWESS</span>
//             <span className="shift-home6__line"></span>
//           </div>
//           <ItemRow items={beforeItems} variant="before" />
//         </div>

//         <span className="shift-home6__arrow">
//           <i className="fa-solid fa-angles-right"></i>
//         </span>

//         <div className="shift-home6__block">
//           <div className="shift-home6__divider">
//             <span className="shift-home6__line"></span>
//             <span className="shift-home6__tag shift-home6__tag--after">
//               AFTER PROWESS
//             </span>
//             <span className="shift-home6__line"></span>
//           </div>
//           <ItemRow items={afterItems} variant="after" />
//         </div>
//       </div>
//     </section>
//   );
// }












import { useEffect, useRef, useState } from "react";
import "./Home6.css";

/* ══════════════════════════════════════════════════════════════
   STATIC ICONS — same as before, kabhi change nahi hoga
   ══════════════════════════════════════════════════════════════ */
const beforeIcons = [
  "fa-brain",
  "fa-clock",
  "fa-circle-question",
  "fa-book",
  "fa-circle-info",
  "fa-eye",
];

const afterIcons = [
  "fa-bullseye",
  "fa-bolt",
  "fa-comment-dots",
  "fa-chart-line",
  "fa-user-check",
  "fa-trophy",
];

function ItemRow({ items, variant, icons }) {
  return (
    <div className="shift-home6__items">
      {items.map((item, index) => (
        <div
          className="shift-home6__item-wrap"
          key={item.id || index}
          style={{ "--d": index }}
        >
          <div
            className={`shift-home6__item ${
              variant === "after" ? "shift-home6__item--after" : ""
            }`}
          >
            <i className={`fa-solid ${icons[index % icons.length]}`}></i>
            <span>{item.sub_heading}</span>
          </div>
          {index < items.length - 1 && (
            <span
              className="shift-home6__divider-line"
              style={{ "--d": index }}
            ></span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home6() {
  const [beforeItems, setBeforeItems] = useState([]);
  const [afterItems, setAfterItems] = useState([]);
  const [beforeTag, setBeforeTag] = useState("BEFORE PROWESS");
  const [afterTag, setAfterTag] = useState("AFTER PROWESS");
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  /* ── Fetch API ── */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://workfit.co.in/provess/Prowess/index.php/API/list_perofrmance_shift"
        );
        const json = await res.json();
        if (json.success === "1" && json.data) {
          let data = Array.isArray(json.data) ? json.data : [json.data];

          /* Ascending: admin ne jo pehle dala wo first icon par */
          data.sort((a, b) => Number(a.id) - Number(b.id));

          /* perofrmance_type ke hisab se split */
          const before = data.filter((d) =>
            d.perofrmance_type?.toLowerCase().includes("before")
          );
          const after = data.filter((d) =>
            d.perofrmance_type?.toLowerCase().includes("after")
          );

          setBeforeItems(before);
          setAfterItems(after);

          /* Tags: API se uppercase me banaye (static jaisa dikhega) */
          if (before.length > 0)
            setBeforeTag(before[0].perofrmance_type.toUpperCase());
          if (after.length > 0)
            setAfterTag(after[0].perofrmance_type.toUpperCase());
        }
      } catch (err) {
        console.error("Home6 API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  /* ── Intersection Observer ── */
  useEffect(() => {
    if (loading || beforeItems.length === 0 || afterItems.length === 0)
      return;

    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll(
      ".shift-home6__label, " +
        ".shift-home6__line, " +
        ".shift-home6__tag, " +
        ".shift-home6__item-wrap, " +
        ".shift-home6__divider-line, " +
        ".shift-home6__arrow"
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
  }, [loading, beforeItems, afterItems]);

  /* ── Loading / Empty guard ── */
  if (loading || beforeItems.length === 0 || afterItems.length === 0)
    return null;

  return (
    <section className="shift-home6" ref={sectionRef}>
      <div className="shift-home6__container">
        {/* ✅ STATIC HEADING */}
        <div className="shift-home6__label">
          <span>
            PERFORMANCE
            <br />
            SHIFT
          </span>
        </div>

        {/* ✅ DYNAMIC BEFORE BLOCK */}
        <div className="shift-home6__block">
          <div className="shift-home6__divider">
            <span className="shift-home6__line"></span>
            <span className="shift-home6__tag">{beforeTag}</span>
            <span className="shift-home6__line"></span>
          </div>
          <ItemRow
            items={beforeItems}
            variant="before"
            icons={beforeIcons}
          />
        </div>

        <span className="shift-home6__arrow">
          <i className="fa-solid fa-angles-right"></i>
        </span>

        {/* ✅ DYNAMIC AFTER BLOCK */}
        <div className="shift-home6__block">
          <div className="shift-home6__divider">
            <span className="shift-home6__line"></span>
            <span className="shift-home6__tag shift-home6__tag--after">
              {afterTag}
            </span>
            <span className="shift-home6__line"></span>
          </div>
          <ItemRow
            items={afterItems}
            variant="after"
            icons={afterIcons}
          />
        </div>
      </div>
    </section>
  );
}