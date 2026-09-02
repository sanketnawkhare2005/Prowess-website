// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './BeforeAfter.css';

// const beforeItems = [
//   'Stage fear',
//   'Low confidence in interviews',
//   'Poor communication in group discussions',
//   'Unable to present ideas clearly'
// ];

// const afterItems = [
//   'Confident public speaking',
//   'Structured interview responses',
//   'Better teamwork & leadership participation',
//   'Clear presentation & communication skills'
// ];

// const CrossIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//     <circle cx="8" cy="8" r="8" fill="#E53935" />
//     <path d="M5 5 L11 11 M11 5 L5 11" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//     <circle cx="8" cy="8" r="8" fill="#2E7D32" />
//     <path d="M4.5 8.2 L6.8 10.5 L11.5 5.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
//   </svg>
// );

// const BeforeAfter = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: false,
//       offset: 80,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   return (
//     <section className="elderberry-section">
//       <div className="elderberry-compare-wrap">
//         {/* Before — left se aayega */}
//         <div className="elderberry-card" data-aos="fade-right" data-aos-delay="0">
//           <div className="elderberry-badge elderberry-badge-before">BEFORE PROWESS</div>
//           <ul className="elderberry-list">
//             {beforeItems.map((item, i) => (
//               <li key={i} data-aos="fade-right" data-aos-delay={i * 80}>
//                 <CrossIcon />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* After — left se aayega thoda late */}
//         <div className="elderberry-card" data-aos="fade-right" data-aos-delay="150">
//           <div className="elderberry-badge elderberry-badge-after">AFTER PROWESS</div>
//           <ul className="elderberry-list">
//             {afterItems.map((item, i) => (
//               <li key={i} data-aos="fade-right" data-aos-delay={200 + i * 80}>
//                 <CheckIcon />
//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Circle — zoom in */}
//         <div className="elderberry-connector" data-aos="zoom-in" data-aos-delay="400">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//             <path d="M7 4 L14 12 L7 20" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M13 4 L20 12 L13 20" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </div>
//       </div>

//       {/* Quote — right se aayega */}
//       <div className="elderberry-quote-wrap" data-aos="fade-left" data-aos-delay="200">
//         <div className="elderberry-quote-bg" />
//         <div className="elderberry-quote-shine" />
//         <div className="elderberry-quote-content">
//           <p className="elderberry-quote-heading" data-aos="fade-left" data-aos-delay="400">
//             <span className="elderberry-quote-mark elderberry-quote-mark-open">&ldquo;</span>
//             WE DON&apos;T JUST TEACH,
//             <br />
//             WE TRANSFORM PERFORMANCE.
//             <span className="elderberry-quote-mark elderberry-quote-mark-close">&rdquo;</span>
//           </p>
//           <div className="elderberry-tagline-strip" data-aos="fade-left" data-aos-delay="600">
//             <p className="elderberry-tagline-text">
//               <span className="elderberry-tag-white">Grow.</span>{' '}
//               <span className="elderberry-tag-gold">Lead.</span>{' '}
//               <span className="elderberry-tag-white">Succeed.</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BeforeAfter;











import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BeforeAfter.css';

const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_before_after';

const CrossIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#E53935" />
    <path d="M5 5 L11 11 M11 5 L5 11" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="#2E7D32" />
    <path d="M4.5 8.2 L6.8 10.5 L11.5 5.5" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const BeforeAfter = () => {
  const [beforeItems, setBeforeItems] = useState([]);
  const [afterItems, setAfterItems] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 80,
      easing: 'ease-out-cubic'
    });
  }, []);

  useEffect(() => {
    const fetchBeforeAfter = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        if (json.success === '1' && Array.isArray(json.data)) {
          const sorted = [...json.data].sort(
            (a, b) => Number(a.display_order) - Number(b.display_order)
          );

          setBeforeItems(
            sorted.filter((item) => item.item_type === 'before')
          );
          setAfterItems(
            sorted.filter((item) => item.item_type === 'after')
          );
        }
      } catch (err) {
        console.error('BeforeAfter fetch error:', err);
      }
    };

    fetchBeforeAfter();
  }, []);

  return (
    <section className="elderberry-section">
      <div className="elderberry-compare-wrap">
        <div className="elderberry-card" data-aos="fade-right" data-aos-delay="0">
          <div className="elderberry-badge elderberry-badge-before">BEFORE PROWESS</div>
          <ul className="elderberry-list">
            {beforeItems.map((item, i) => (
              <li key={item.id} data-aos="fade-right" data-aos-delay={i * 80}>
                <CrossIcon />
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="elderberry-card" data-aos="fade-right" data-aos-delay="150">
          <div className="elderberry-badge elderberry-badge-after">AFTER PROWESS</div>
          <ul className="elderberry-list">
            {afterItems.map((item, i) => (
              <li key={item.id} data-aos="fade-right" data-aos-delay={200 + i * 80}>
                <CheckIcon />
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="elderberry-connector" data-aos="zoom-in" data-aos-delay="400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 4 L14 12 L7 20" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4 L20 12 L13 20" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="elderberry-quote-wrap" data-aos="fade-left" data-aos-delay="200">
        <div className="elderberry-quote-bg" />
        <div className="elderberry-quote-shine" />
        <div className="elderberry-quote-content">
          <p className="elderberry-quote-heading" data-aos="fade-left" data-aos-delay={400}>
            <span className="elderberry-quote-mark elderberry-quote-mark-open">{"\u201C"}</span>
            WE DON&apos;T JUST TEACH,
            <br />
            WE TRANSFORM PERFORMANCE.
            <span className="elderberry-quote-mark elderberry-quote-mark-close">{"\u201D"}</span>
          </p>
          <div className="elderberry-tagline-strip" data-aos="fade-left" data-aos-delay={600}>
            <p className="elderberry-tagline-text">
              <span className="elderberry-tag-white">Grow.</span>{' '}
              <span className="elderberry-tag-gold">Lead.</span>{' '}
              <span className="elderberry-tag-white">Succeed.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;