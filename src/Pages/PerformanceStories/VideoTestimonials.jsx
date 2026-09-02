// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './VideoTestimonials.css';

// const videoData = [
//   {
//     id: 1,
//     thumbnail: 'https://picsum.photos/seed/prowess-vid1/600/400.jpg',
//     quote: 'Pehle stage fear tha... ab log sunte hain kyunki confidence build ho gaya.',
//   },
//   {
//     id: 2,
//     thumbnail: 'https://picsum.photos/seed/prowess-vid2/600/400.jpg',
//     quote: 'Mock interviews ne mujhe real placement ke liye ready kar diya.',
//   },
//   {
//     id: 3,
//     thumbnail: 'https://picsum.photos/seed/prowess-vid3/600/400.jpg',
//     quote: 'Team lead karna, logon ko inspire karna aur result dena – yeh sab yahin seekha.',
//   }
// ];

// const VideoTestimonials = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false, // Har scroll par dikhega
//       offset: 50,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   return (
//     <section className="banana-section">
//       {/* Title Row AOS */}
//       <div className="banana-title-row" data-aos="fade-up">
//         <span className="banana-title-line" />
//         <span className="banana-title-badge">VIDEO TESTIMONIALS</span>
//         <span className="banana-title-line" />
//       </div>

//       <div className="banana-grid">
//         {videoData.map((video, index) => (
//           <div
//             className="banana-card"
//             data-aos="fade-up"
//             data-aos-delay={index * 150}
//             key={video.id}
//           >
//             <img
//               src={video.thumbnail}
//               alt={video.quote}
//               className="banana-thumbnail"
//               loading="lazy"
//             />
//             <div className="banana-overlay" />

//             <div className="banana-content">
//               <span className="banana-quote-mark">&ldquo;</span>
//               <p className="banana-quote-text">{video.quote}</p>

//               <div className="banana-watch-row">
//                 <button className="banana-play-btn" aria-label="Play video">
//                   <span className="banana-play-pulse" />
//                   {/* ViewBox fix kiya hai aur padding hata diya center ke liye */}
//                   <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
//                     <path d="M0 0L10 6L0 12V0Z" fill="#fff" />
//                   </svg>
//                 </button>
//                 <span className="banana-watch-text">Watch Story</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default VideoTestimonials;










// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './VideoTestimonials.css';

// // const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_video_testimonials';
// // ✅ AB (Sahi)
// const API_URL = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_video_testimonials';
// const AUTO_SCROLL_MS = 3500;
// const PAUSE_ON_CLICK_MS = 5000;

// const VideoTestimonials = () => {
//   const [videoData, setVideoData] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(3);
//   const timerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const isPaused = useRef(false);

  

//   /* Screen size ke hisaab se visible cards */
//   useEffect(() => {
//     const handleResize = () => {
//       setVisibleCards(window.innerWidth <= 768 ? 1 : 3);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false,
//       offset: 50,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   /* API Fetch */
//   // useEffect(() => {
//   //   const fetchVideos = async () => {
//   //     try {
//   //       const res = await fetch(API_URL);
//   //       const json = await res.json();

//   //       if (json.success === '1' && Array.isArray(json.data)) {
//   //         const mapped = json.data
//   //           .sort((a, b) => Number(a.display_order) - Number(b.display_order))
//   //           .map((item) => ({
//   //             id: item.id,
//   //             thumbnail: item.thumbnail_path,
//   //             quote: item.title
//   //           }));

//   //         setVideoData(mapped);
//   //       }
//   //     } catch (err) {
//   //       console.error('VideoTestimonials fetch error:', err);
//   //     }
//   //   };

//   //   fetchVideos();
//   // }, []);

// useEffect(() => {
//   const fetchVideos = async () => {
//     try {
//       const res = await fetch(API_URL, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: 'approved' })
//       });
//       const json = await res.json();

//       if (json.success === '1' && Array.isArray(json.data)) {
//         const mapped = json.data
//           .sort((a, b) => Number(a.display_order) - Number(b.display_order))
//           .map((item) => ({
//             id: item.id,
//             thumbnail: item.thumbnail_path,
//             quote: item.title
//           }));

//         setVideoData(mapped);
//       }
//     } catch (err) {
//       console.error('VideoTestimonials fetch error:', err);
//     }
//   };

//   fetchVideos();
// }, []);

//   const shouldScroll = videoData.length > visibleCards;
//   const maxIndex = Math.max(0, videoData.length - visibleCards);

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

//   /* Auto Scroll */
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

//   /* Touch Swipe — sirf start aur end, move hata diya */
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

//   /* Card Render */
//   const renderCard = (video) => (
//     <div className="banana-card">
//       <img
//         src={video.thumbnail}
//         alt={video.quote}
//         className="banana-thumbnail"
//         loading="lazy"
//       />
//       <div className="banana-overlay" />
//       <div className="banana-content">
//         <span className="banana-quote-mark">{"\u201C"}</span>
//         <p className="banana-quote-text">{video.quote}</p>
//         <div className="banana-watch-row">
//           <button className="banana-play-btn" aria-label="Play video">
//             <span className="banana-play-pulse" />
//             <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
//               <path d="M0 0L10 6L0 12V0Z" fill="#fff" />
//             </svg>
//           </button>
//           <span className="banana-watch-text">Watch Story</span>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="banana-section">
//       <div className="banana-title-row" data-aos="fade-up">
//         <span className="banana-title-line" />
//         <span className="banana-title-badge">VIDEO TESTIMONIALS</span>
//         <span className="banana-title-line" />
//       </div>

//       {shouldScroll ? (
//         <div
//           className="banana-carousel"
//           data-aos="fade-up"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className="banana-carousel-track"
//             style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
//           >
//             {videoData.map((video) => (
//               <div className="banana-carousel-slide" key={video.id}>
//                 {renderCard(video)}
//               </div>
//             ))}
//           </div>
//           <div className="banana-dots">
//             {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//               <button
//                 key={i}
//                 className={`banana-dot ${i === activeIndex ? 'banana-dot-active' : ''}`}
//                 onClick={() => handleDotClick(i)}
//               />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="banana-grid">
//           {videoData.map((video, index) => (
//             <div
//               data-aos="fade-up"
//               data-aos-delay={index * 150}
//               key={video.id}
//             >
//               {renderCard(video)}
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default VideoTestimonials;










// without popup video open code
// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import './VideoTestimonials.css';

// // ✅ 2 APIs - Video table + Feedback submissions table
// const VIDEO_API = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_video_testimonials';
// const FEEDBACK_API = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_feedback_submissions';

// const AUTO_SCROLL_MS = 3500;
// const PAUSE_ON_CLICK_MS = 5000;

// const VideoTestimonials = () => {
//   const [videoData, setVideoData] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [visibleCards, setVisibleCards] = useState(3);
//   const timerRef = useRef(null);
//   const touchStartX = useRef(0);
//   const isPaused = useRef(false);

//   /* Screen size ke hisaab se visible cards */
//   useEffect(() => {
//     const handleResize = () => {
//       setVisibleCards(window.innerWidth <= 768 ? 1 : 3);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     AOS.init({
//       duration: 700,
//       once: false,
//       // once: true,
//       offset: 50,
//       easing: 'ease-out-cubic'
//     });
//   }, []);

//   // ✅✅✅ DONO APIs SE DATA FETCH KARKE MERGE KAR RAHE
//   useEffect(() => {
//     const fetchAllVideos = async () => {
//       try {
//         // Dono APIs parallel me call karo
//         const [res1, res2] = await Promise.all([
//           fetch(VIDEO_API, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ status: 'approved' })
//           }),
//           fetch(FEEDBACK_API)
//         ]);

//         const json1 = await res1.json();
//         const json2 = await res2.json();

//         let fromVideoTable = [];
//         let fromFeedbackForm = [];

//         // ✅ Video Testimonials Table se approved data
//         if (json1.success === '1' && Array.isArray(json1.data)) {
//           fromVideoTable = json1.data.map((item) => ({
//             id: `v-${item.id}`,
//             thumbnail: item.thumbnail_path,
//             quote: item.title,
//             videoFile: item.video_file_path || '',
//             videoLink: item.video_link || '',
//             displayOrder: Number(item.display_order) || 999,
//             createdAt: item.created_at || ''
//           }));
//         }

//         // ✅ Feedback Submissions Table se approved data JISME VIDEO HAI
//         if (json2.success === '1' && Array.isArray(json2.data)) {
//           fromFeedbackForm = json2.data
//             .filter((item) => item.status === 'approved' && (item.video_file_path || item.video_link))
//             .map((item) => ({
//               id: `f-${item.id}`,
//               thumbnail: item.photo_path || '', // Photo ko thumbnail use karo
//               quote: item.feedback_message, // Feedback ko quote me dikhao
//               videoFile: item.video_file_path || '',
//               videoLink: item.video_link || '',
//               displayOrder: 999, // Form submissions ko last me rakho
//               createdAt: item.created_at || ''
//             }));
//         }

//         // ✅ DONO KO MERGE KARO
//         const merged = [...fromVideoTable, ...fromFeedbackForm]
//           .sort((a, b) => {
//             if (a.displayOrder !== b.displayOrder) {
//               return a.displayOrder - b.displayOrder;
//             }
//             return b.createdAt.localeCompare(a.createdAt);
//           });

//         setVideoData(merged);
//       } catch (err) {
//         console.error('VideoTestimonials fetch error:', err);
//       }
//     };

//     fetchAllVideos();
//   }, []);

//   const shouldScroll = videoData.length > visibleCards;
//   const maxIndex = Math.max(0, videoData.length - visibleCards);

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

//   /* Auto Scroll */
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

//   /* Card Render */
//   const renderCard = (video) => (
//     <div className="banana-card">
//       <img
//         src={video.thumbnail || "https://placehold.co/400x250/1a1a2e/D4AF37?text=Prowess"}
//         alt={video.quote}
//         className="banana-thumbnail"
//         loading="lazy"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = "https://placehold.co/400x250/1a1a2e/D4AF37?text=Prowess";
//         }}
//       />
//       <div className="banana-overlay" />
//       <div className="banana-content">
//         <span className="banana-quote-mark">{"\u201C"}</span>
//         <p className="banana-quote-text">
//           {video.quote && video.quote.length > 80
//             ? video.quote.substring(0, 80) + '...'
//             : video.quote
//           }
//         </p>
//         <div className="banana-watch-row">
//           <button
//             className="banana-play-btn"
//             aria-label="Play video"
//             onClick={() => {
//               // Video file ya link kholega
//               if (video.videoLink) {
//                 window.open(video.videoLink, '_blank');
//               }
//             }}
//           >
//             <span className="banana-play-pulse" />
//             <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
//               <path d="M0 0L10 6L0 12V0Z" fill="#fff" />
//             </svg>
//           </button>
//           <span className="banana-watch-text">Watch Story</span>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <section className="banana-section">
//       <div className="banana-title-row" data-aos="fade-up">
//         <span className="banana-title-line" />
//         <span className="banana-title-badge">VIDEO TESTIMONIALS</span>
//         <span className="banana-title-line" />
//       </div>

//       {shouldScroll ? (
//         <div
//           className="banana-carousel"
//           // data-aos="fade-up"
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//         >
//           <div
//             className="banana-carousel-track"
//             style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
//           >
//             {videoData.map((video) => (
//               <div className="banana-carousel-slide" key={video.id}>
//                 {renderCard(video)}
//               </div>
//             ))}
//           </div>
//           <div className="banana-dots">
//             {Array.from({ length: maxIndex + 1 }).map((_, i) => (
//               <button
//                 key={i}
//                 className={`banana-dot ${i === activeIndex ? 'banana-dot-active' : ''}`}
//                 onClick={() => handleDotClick(i)}
//               />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="banana-grid">
//           {videoData.map((video, index) => (
//             <div
//               // data-aos="fade-up"
//               // data-aos-delay={index * 150}
//               key={video.id}
//             >
//               {renderCard(video)}
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default VideoTestimonials;










import React, { useEffect, useState, useRef, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './VideoTestimonials.css';

// ✅ 2 APIs
const VIDEO_API = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_video_testimonials';
const FEEDBACK_API = 'https://workfit.co.in/provess/Prowess/index.php/API/list_prowess_feedback_submissions';

const AUTO_SCROLL_MS = 3500;
const PAUSE_ON_CLICK_MS = 5000;

// ✅ YouTube link se embed URL banane ka helper
const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
  }
  return null;
};

const VideoTestimonials = () => {
  const [videoData, setVideoData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [previewVideo, setPreviewVideo] = useState(null);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const isPaused = useRef(false);

  /* Screen size */
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth <= 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }, []);

  /* Fetch + Merge */
  useEffect(() => {
    const fetchAllVideos = async () => {
      let fromVideoTable = [];
      let fromFeedbackForm = [];

      try {
        const res1 = await fetch(VIDEO_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'approved' })
        });
        const json1 = await res1.json();

        if (json1.success === '1' && Array.isArray(json1.data)) {
          fromVideoTable = json1.data.map((item) => ({
            id: `v-${item.id}`,
            thumbnail: item.thumbnail_path,
            quote: item.title,
            videoFile: item.video_file_path || '',
            videoLink: item.video_link || '',
            displayOrder: Number(item.display_order) || 999,
            createdAt: item.created_at || ''
          }));
        }
      } catch (err1) {
        console.error('Video API error:', err1);
      }

      try {
        const res2 = await fetch(FEEDBACK_API);
        const json2 = await res2.json();

        if (json2.success === '1' && Array.isArray(json2.data)) {
          fromFeedbackForm = json2.data
            .filter((item) => item.status === 'approved' && (item.video_file_path || item.video_link))
            .map((item) => ({
              id: `f-${item.id}`,
              thumbnail: item.photo_path || '',
              quote: item.feedback_message,
              videoFile: item.video_file_path || '',
              videoLink: item.video_link || '',
              displayOrder: 999,
              createdAt: item.created_at || ''
            }));
        }
      } catch (err2) {
        console.error('Feedback API error:', err2);
      }

      const merged = [...fromVideoTable, ...fromFeedbackForm]
        .sort((a, b) => {
          if (a.displayOrder !== b.displayOrder) return a.displayOrder - b.displayOrder;
          return b.createdAt.localeCompare(a.createdAt);
        });

      setVideoData(merged);
    };

    fetchAllVideos();
  }, []);

  // ✅ Card click handler — popup open karega
  const handleCardClick = (video) => {
    // Pehle local file check karo
    if (video.videoFile) {
      setPreviewVideo({ type: 'file', src: video.videoFile });
      return;
    }
    // Phir YouTube link check karo
    if (video.videoLink) {
      const ytEmbed = getYouTubeEmbedUrl(video.videoLink);
      if (ytEmbed) {
        setPreviewVideo({ type: 'youtube', src: ytEmbed });
        return;
      }
      // YouTube nahi hai toh new tab me kholo (Drive etc.)
      window.open(video.videoLink, '_blank');
    }
  };

  // ✅ Popup close
  const closeModal = () => {
    setPreviewVideo(null);
  };

  // ✅ Escape key se close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    if (previewVideo) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [previewVideo]);

  const shouldScroll = videoData.length > visibleCards;
  const maxIndex = Math.max(0, videoData.length - visibleCards);

  useEffect(() => {
    if (activeIndex > maxIndex) setActiveIndex(maxIndex);
  }, [maxIndex, activeIndex]);

  const goTo = (idx) => {
    setActiveIndex(Math.max(0, Math.min(idx, maxIndex)));
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
      goTo(diff > 0 ? activeIndex + 1 : activeIndex - 1);
    }
    setTimeout(startAutoScroll, PAUSE_ON_CLICK_MS);
  };

  /* Card */
  const renderCard = (video) => (
    <div className="banana-card" onClick={() => handleCardClick(video)}>
      <img
        src={video.thumbnail || "https://placehold.co/400x250/1a1a2e/D4AF37?text=Prowess"}
        alt={video.quote}
        className="banana-thumbnail"
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/400x250/1a1a2e/D4AF37?text=Prowess";
        }}
      />
      <div className="banana-overlay" />
      <div className="banana-content">
        <span className="banana-quote-mark">{"\u201C"}</span>
        <p className="banana-quote-text">
          {video.quote && video.quote.length > 80
            ? video.quote.substring(0, 80) + '...'
            : video.quote
          }
        </p>
        <div className="banana-watch-row">
          <button
            className="banana-play-btn"
            aria-label="Play video"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick(video);
            }}
          >
            <span className="banana-play-pulse" />
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
              <path d="M0 0L10 6L0 12V0Z" fill="#fff" />
            </svg>
          </button>
          <span className="banana-watch-text">Watch Story</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="banana-section">
      <div className="banana-title-row" data-aos="fade-up">
        <span className="banana-title-line" />
        <span className="banana-title-badge">VIDEO TESTIMONIALS</span>
        <span className="banana-title-line" />
      </div>

      {videoData.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p>No video testimonials yet.</p>
        </div>
      ) : shouldScroll ? (
        <div
          className="banana-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="banana-carousel-track"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
          >
            {videoData.map((video) => (
              <div className="banana-carousel-slide" key={video.id}>
                {renderCard(video)}
              </div>
            ))}
          </div>
          <div className="banana-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`banana-dot ${i === activeIndex ? 'banana-dot-active' : ''}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="banana-grid">
          {videoData.map((video) => (
            <div key={video.id}>
              {renderCard(video)}
            </div>
          ))}
        </div>
      )}

      {/* ✅✅✅ VIDEO POPUP MODAL */}
      {previewVideo && (
        <div className="banana-modal-backdrop" onClick={closeModal}>
          <div
            className="banana-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="banana-modal-close" onClick={closeModal}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {previewVideo.type === 'file' && (
              <video
                className="banana-modal-video"
                src={previewVideo.src}
                controls
                autoPlay
                playsInline
              />
            )}

            {previewVideo.type === 'youtube' && (
              <iframe
                className="banana-modal-iframe"
                src={previewVideo.src}
                title="Video Testimonial"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;