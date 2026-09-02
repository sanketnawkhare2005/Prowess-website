// import React, { useEffect, useRef, useState } from 'react';
// import './ImpactStatistics.css';

// const statsData = [
//   {
//     id: 1,
//     value: '30,000+',
//     label: 'Students Trained',
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
//         <circle cx="8" cy="8" r="3" fill="#D4AF37" />
//         <circle cx="16" cy="8" r="3" fill="#D4AF37" />
//         <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" fill="none" />
//         <path d="M12 20c0-3.3 2.7-6 6-6s4 2.2 4 5.5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" fill="none" />
//       </svg>
//     )
//   },
//   {
//     id: 2,
//     value: '12+',
//     label: 'Years of Training Experience',
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
//         <path d="M12 3 L22 8 L12 13 L2 8 Z" fill="#D4AF37" />
//         <path d="M6 10.5 V16 C6 17.5 8.7 19 12 19 C15.3 19 18 17.5 18 16 V10.5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
//         <line x1="22" y1="8" x2="22" y2="15" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     )
//   },
//   {
//     id: 3,
//     value: '500+',
//     label: 'Workshops & Sessions',
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
//         <rect x="2" y="3" width="14" height="10" rx="1" stroke="#D4AF37" strokeWidth="1.6" fill="none" />
//         <line x1="9" y1="13" x2="9" y2="16" stroke="#D4AF37" strokeWidth="1.6" />
//         <line x1="5" y1="19" x2="13" y2="19" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" />
//         <circle cx="19" cy="9" r="3" fill="#D4AF37" />
//         <path d="M15 19c0-2.4 1.8-4.3 4-4.3s4 1.9 4 4.3" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" fill="none" />
//       </svg>
//     )
//   },
//   {
//     id: 4,
//     value: '4.8/5',
//     label: 'Average Participant Feedback',
//     icon: (
//       <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
//         <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1.6" fill="none" />
//         <path d="M12 6.5 L13.6 10 L17.3 10.4 L14.6 12.9 L15.4 16.6 L12 14.7 L8.6 16.6 L9.4 12.9 L6.7 10.4 L10.4 10 Z" fill="#D4AF37" />
//       </svg>
//     )
//   }
// ];

// // value string ko parse karke { prefix, target, decimals, suffix } nikaalta hai
// const parseValue = (raw) => {
//   const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
//   if (!match) return { prefix: '', target: 0, decimals: 0, suffix: raw };
//   const [, prefix, numStr, suffix] = match;
//   const cleanNum = numStr.replace(/,/g, '');
//   const decimals = cleanNum.includes('.') ? cleanNum.split('.')[1].length : 0;
//   return { prefix, target: parseFloat(cleanNum), decimals, suffix, hasComma: numStr.includes(',') };
// };

// const formatNumber = (num, decimals, hasComma) => {
//   const fixed = num.toFixed(decimals);
//   if (!hasComma) return fixed;
//   const [intPart, decPart] = fixed.split('.');
//   const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   return decPart ? `${withCommas}.${decPart}` : withCommas;
// };

// // Har stat ke liye count-up animate karta hai — animate true->false->true hone pe restart bhi karta hai
// const CountUpValue = ({ value, animate, duration = 1500 }) => {
//   const { prefix, target, decimals, suffix, hasComma } = parseValue(value);
//   const [display, setDisplay] = useState(formatNumber(0, decimals, hasComma));
//   const rafRef = useRef(null);

//   useEffect(() => {
//     if (!animate) {
//       // Bahar jaate hi wapas 0 pe reset, taaki agli baar fir se count-up ho
//       setDisplay(formatNumber(0, decimals, hasComma));
//       return;
//     }

//     let startTime = null;
//     const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

//     const step = (timestamp) => {
//       if (startTime === null) startTime = timestamp;
//       const progress = Math.min((timestamp - startTime) / duration, 1);
//       const eased = easeOutQuart(progress);
//       const current = target * eased;
//       setDisplay(formatNumber(current, decimals, hasComma));
//       if (progress < 1) {
//         rafRef.current = requestAnimationFrame(step);
//       }
//     };

//     rafRef.current = requestAnimationFrame(step);
//     return () => rafRef.current && cancelAnimationFrame(rafRef.current);
//   }, [animate, target, decimals, hasComma, duration]);

//   return <>{prefix}{display}{suffix}</>;
// };

// const ImpactStatistics = () => {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const node = sectionRef.current;
//     if (!node) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Har baar entry/exit pe true/false set hoga — isliye repeat effect milega
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`grape-strip ${isVisible ? 'grape-visible' : ''}`}
//     >
//       {statsData.map((stat, index) => (
//         <React.Fragment key={stat.id}>
//           <div
//             className="grape-item"
//             style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
//           >
//             <span className="grape-icon">{stat.icon}</span>
//             <div className="grape-text">
//               <p className="grape-value">
//                 <CountUpValue value={stat.value} animate={isVisible} />
//               </p>
//               <p className="grape-label">{stat.label}</p>
//             </div>
//           </div>
//           {index < statsData.length - 1 && <span className="grape-divider" />}
//         </React.Fragment>
//       ))}
//     </section>
//   );
// };

// export default ImpactStatistics;












import React, { useEffect, useRef, useState } from 'react';
import './ImpactStatistics.css';

const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_impact_statistics';

// Icons static — order fixed
const staticIcons = [
  <svg key="icon0" width="30" height="30" viewBox="0 0 24 24" fill="none">
    <circle cx="8" cy="8" r="3" fill="#D4AF37" />
    <circle cx="16" cy="8" r="3" fill="#D4AF37" />
    <path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M12 20c0-3.3 2.7-6 6-6s4 2.2 4 5.5" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" fill="none" />
  </svg>,
  <svg key="icon1" width="30" height="30" viewBox="0 0 24 24" fill="none">
    <path d="M12 3 L22 8 L12 13 L2 8 Z" fill="#D4AF37" />
    <path d="M6 10.5 V16 C6 17.5 8.7 19 12 19 C15.3 19 18 17.5 18 16 V10.5" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
    <line x1="22" y1="8" x2="22" y2="15" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  <svg key="icon2" width="30" height="30" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="14" height="10" rx="1" stroke="#D4AF37" strokeWidth="1.6" fill="none" />
    <line x1="9" y1="13" x2="9" y2="16" stroke="#D4AF37" strokeWidth="1.6" />
    <line x1="5" y1="19" x2="13" y2="19" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="19" cy="9" r="3" fill="#D4AF37" />
    <path d="M15 19c0-2.4 1.8-4.3 4-4.3s4 1.9 4 4.3" stroke="#D4AF37" strokeWidth="1.6" strokeLinecap="round" fill="none" />
  </svg>,
  <svg key="icon3" width="30" height="30" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#D4AF37" strokeWidth="1.6" fill="none" />
    <path d="M12 6.5 L13.6 10 L17.3 10.4 L14.6 12.9 L15.4 16.6 L12 14.7 L8.6 16.6 L9.4 12.9 L6.7 10.4 L10.4 10 Z" fill="#D4AF37" />
  </svg>
];

const parseValue = (raw) => {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: '', target: 0, decimals: 0, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  const cleanNum = numStr.replace(/,/g, '');
  const decimals = cleanNum.includes('.') ? cleanNum.split('.')[1].length : 0;
  return { prefix, target: parseFloat(cleanNum), decimals, suffix, hasComma: numStr.includes(',') };
};

const formatNumber = (num, decimals, hasComma) => {
  const fixed = num.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split('.');
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart ? `${withCommas}.${decPart}` : withCommas;
};

const CountUpValue = ({ value, animate, duration = 1500 }) => {
  const { prefix, target, decimals, suffix, hasComma } = parseValue(value);
  const [display, setDisplay] = useState(formatNumber(0, decimals, hasComma));
  const rafRef = useRef(null);

  useEffect(() => {
    if (!animate) {
      setDisplay(formatNumber(0, decimals, hasComma));
      return;
    }

    let startTime = null;
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutQuart(progress);
      const current = target * eased;
      setDisplay(formatNumber(current, decimals, hasComma));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [animate, target, decimals, hasComma, duration]);

  return <>{prefix}{display}{suffix}</>;
};

const ImpactStatistics = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsData, setStatsData] = useState([]);

  // Fetch API data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        if (json.success === '1' && Array.isArray(json.data)) {
          const sorted = [...json.data].sort(
            (a, b) => Number(a.display_order) - Number(b.display_order)
          );
          setStatsData(sorted);
        }
      } catch (err) {
        console.error('ImpactStatistics fetch error:', err);
      }
    };

    fetchStats();
  }, []);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`grape-strip ${isVisible ? 'grape-visible' : ''}`}
    >
      {statsData.map((stat, index) => (
        <React.Fragment key={stat.id}>
          <div
            className="grape-item"
            style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
          >
            <span className="grape-icon">
              {staticIcons[index] || staticIcons[0]}
            </span>
            <div className="grape-text">
              <p className="grape-value">
                <CountUpValue value={stat.metric_value} animate={isVisible} />
              </p>
              <p className="grape-label">{stat.metric_label}</p>
            </div>
          </div>
          {index < statsData.length - 1 && <span className="grape-divider" />}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ImpactStatistics;