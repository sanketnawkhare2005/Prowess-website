// import React, { useState, useRef } from 'react';
// import './ShareExperience.css';

// const programOptions = [
//   'Communication Mastery',
//   'Leadership Bootcamp',
//   'Interview Mastery',
//   'Public Speaking Pro',
//   'Personality Development',
//   'Group Discussion Mastery',
//   'Corporate Training',
//   'Other'
// ];

// const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2 MB
// const MAX_VIDEO_SIZE = 25 * 1024 * 1024; // 25 MB

// const ShareExperience = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     college: '',
//     degree: '',
//     yearSemester: '',
//     programAttended: '',
//     rating: 0,
//     feedbackMessage: '',
//     socialProfile: '',
//     videoLink: '',
//     consent: false
//   });

//   const [photoFile, setPhotoFile] = useState(null);
//   const [videoFile, setVideoFile] = useState(null);
//   const [photoError, setPhotoError] = useState('');
//   const [videoError, setVideoError] = useState('');
//   const [videoInputMode, setVideoInputMode] = useState('upload'); // 'upload' | 'link'
//   const [submitted, setSubmitted] = useState(false);
//   const [hoveredStar, setHoveredStar] = useState(0);
//   const fileInputRef = useRef(null);
//   const videoInputRef = useRef(null);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     setPhotoError('');
//     if (!file) return;
//     if (file.size > MAX_IMAGE_SIZE) {
//       setPhotoError('Image size must be less than 2 MB');
//       setPhotoFile(null);
//       return;
//     }
//     if (!file.type.startsWith('image/')) {
//       setPhotoError('Please upload a valid image file');
//       setPhotoFile(null);
//       return;
//     }
//     setPhotoFile(file);
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     setVideoError('');
//     if (!file) return;
//     if (file.size > MAX_VIDEO_SIZE) {
//       setVideoError('Video size must be less than 25 MB');
//       setVideoFile(null);
//       return;
//     }
//     if (!file.type.startsWith('video/')) {
//       setVideoError('Please upload a valid video file');
//       setVideoFile(null);
//       return;
//     }
//     setVideoFile(file);
//   };

//   const switchVideoMode = (mode) => {
//     setVideoInputMode(mode);
//     setVideoError('');
//     if (mode === 'upload') {
//       setFormData((prev) => ({ ...prev, videoLink: '' }));
//     } else {
//       setVideoFile(null);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.consent) return;
//     if (formData.rating === 0) return;

//     // Build FormData for API submission
//     const apiData = new FormData();
//     apiData.append('full_name', formData.fullName);
//     apiData.append('college', formData.college);
//     apiData.append('degree', formData.degree);
//     apiData.append('year_semester', formData.yearSemester);
//     apiData.append('program_attended', formData.programAttended);
//     apiData.append('rating', formData.rating);
//     apiData.append('feedback_message', formData.feedbackMessage);
//     apiData.append('social_profile', formData.socialProfile);
//     apiData.append('consent', formData.consent);
//     if (photoFile) apiData.append('photo', photoFile);
//     if (videoInputMode === 'upload' && videoFile) {
//       apiData.append('video', videoFile);
//     }
//     if (videoInputMode === 'link' && formData.videoLink) {
//       apiData.append('video_link', formData.videoLink);
//     }

//     try {
//       // const response = await fetch('/api/feedback', {
//       //   method: 'POST',
//       //   body: apiData
//       // });

//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       setSubmitted(true);
//     } catch (error) {
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   const isFormValid =
//     formData.fullName.trim() !== '' &&
//     formData.college.trim() !== '' &&
//     formData.degree.trim() !== '' &&
//     formData.programAttended !== '' &&
//     formData.rating > 0 &&
//     formData.feedbackMessage.trim() !== '' &&
//     formData.consent === true;

//   if (submitted) {
//     return (
//       <section className="fig-section">
//         <div className="fig-success-box">
//           <div className="fig-success-icon">
//             <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
//               <circle cx="24" cy="24" r="24" fill="#D4AF37" />
//               <path
//                 d="M16 24L21 29L32 18"
//                 stroke="#FFFFFF"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <h3 className="fig-success-heading">Thank You!</h3>
//           <p className="fig-success-text">
//             Thank you for sharing your experience with Prowess. Your feedback
//             has been submitted successfully and is under review.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="fig-section">
//       {/* Title row — matches the line-badge-line pattern used elsewhere */}
//       <div className="fig-title-row">
//         <span className="fig-title-line" />
//         <span className="fig-title-badge">SHARE YOUR EXPERIENCE</span>
//         <span className="fig-title-line" />
//       </div>

//       <p className="fig-description">
//         Your feedback helps us improve and inspires future learners to grow,
//         lead, and succeed.
//       </p>

//       <form className="fig-form" onSubmit={handleSubmit} noValidate>
//   <div className="fig-form-inner">

//     {/* GROUP 1 — Personal Info */}
//     <div className="fig-group">
//       <div className="fig-group-header">
//         <span className="fig-group-num">1</span>
//         <h4 className="fig-group-title">Personal Information</h4>
//       </div>

//       <div className="fig-row">
//         <div className="fig-field">
//           <label className="fig-label">Full Name <span className="fig-required">*</span></label>
//           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
//             className="fig-input" placeholder="Enter your full name" required />
//         </div>
//         <div className="fig-field">
//           <label className="fig-label">College / University <span className="fig-required">*</span></label>
//           <input type="text" name="college" value={formData.college} onChange={handleChange}
//             className="fig-input" placeholder="e.g. YCCE, Nagpur" required />
//         </div>
//       </div>

//       <div className="fig-row">
//         <div className="fig-field">
//           <label className="fig-label">Degree / Course <span className="fig-required">*</span></label>
//           <input type="text" name="degree" value={formData.degree} onChange={handleChange}
//             className="fig-input" placeholder="e.g. B.Tech – Computer Science" required />
//         </div>
//         <div className="fig-field">
//           <label className="fig-label">Year / Semester</label>
//           <input type="text" name="yearSemester" value={formData.yearSemester} onChange={handleChange}
//             className="fig-input" placeholder="e.g. 3rd Year / 6th Semester" />
//         </div>
//       </div>
//     </div>

//     {/* GROUP 2 — Program & Rating */}
//     <div className="fig-group">
//       <div className="fig-group-header">
//         <span className="fig-group-num">2</span>
//         <h4 className="fig-group-title">Program & Rating</h4>
//       </div>

//       <div className="fig-row">
//         <div className="fig-field">
//           <label className="fig-label">Program Attended <span className="fig-required">*</span></label>
//           <select name="programAttended" value={formData.programAttended} onChange={handleChange}
//             className="fig-select" required>
//             <option value="">Select Program</option>
//             {programOptions.map((prog) => (
//               <option key={prog} value={prog}>{prog}</option>
//             ))}
//           </select>
//         </div>
//         <div className="fig-field">
//           <label className="fig-label">LinkedIn / Instagram Profile</label>
//           <input type="url" name="socialProfile" value={formData.socialProfile} onChange={handleChange}
//             className="fig-input" placeholder="https://linkedin.com/in/yourprofile" />
//         </div>
//       </div>

//       <div className="fig-field fig-field-full">
//         <label className="fig-label">Your Rating <span className="fig-required">*</span></label>
//         <div className="fig-star-row">
//           <div className="fig-stars-interactive">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <button type="button" key={star} className="fig-star-btn"
//                 onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
//                 onMouseEnter={() => setHoveredStar(star)}
//                 onMouseLeave={() => setHoveredStar(0)}>
//                 <svg width="30" height="30" viewBox="0 0 16 16"
//                   fill={star <= (hoveredStar || formData.rating) ? '#D4AF37' : '#E8E4D8'}>
//                   <path d="M8 0L10.2 5.3L16 6.1L11.8 10.1L12.9 16L8 13.2L3.1 16L4.2 10.1L0 6.1L5.8 5.3L8 0Z" />
//                 </svg>
//               </button>
//             ))}
//           </div>
//           {formData.rating > 0 && <span className="fig-rating-text">{formData.rating}/5</span>}
//         </div>
//       </div>
//     </div>

//     {/* GROUP 3 — Feedback */}
//     <div className="fig-group">
//       <div className="fig-group-header">
//         <span className="fig-group-num">3</span>
//         <h4 className="fig-group-title">Your Feedback</h4>
//       </div>

//       <div className="fig-field fig-field-full">
//         <label className="fig-label">Feedback Message <span className="fig-required">*</span></label>
//         <textarea name="feedbackMessage" value={formData.feedbackMessage} onChange={handleChange}
//           className="fig-textarea" placeholder="Share your experience in detail — what changed for you after Prowess?"
//           rows={5} required />
//       </div>
//     </div>

//     {/* GROUP 4 — Media */}
//     <div className="fig-group">
//       <div className="fig-group-header">
//         <span className="fig-group-num">4</span>
//         <h4 className="fig-group-title">Photo & Video <span className="fig-group-optional">(Optional)</span></h4>
//       </div>

//       <div className="fig-row">
//         <div className="fig-field">
//           <label className="fig-label">Upload Photo</label>
//           <div className="fig-file-wrapper">
//             <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="fig-file-input" />
//             <button type="button" className="fig-file-btn" onClick={() => fileInputRef.current?.click()}>
//               <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                 <path d="M9 1V11M9 11L5 7M9 11L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                 <path d="M2 12V14C2 15.1046 2.89543 16 4 16H14C15.1046 16 16 15.1046 16 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//               </svg>
//               {photoFile ? photoFile.name : 'Choose Image'}
//             </button>
//           </div>
//           {photoError && <p className="fig-error">{photoError}</p>}
//           <p className="fig-hint">Max 2 MB — JPG, PNG</p>
//         </div>

//         <div className="fig-field">
//           <label className="fig-label">Video Testimonial</label>
//           <div className="fig-video-toggle">
//             <button type="button" className={`fig-toggle-btn ${videoInputMode === 'upload' ? 'fig-toggle-active' : ''}`}
//               onClick={() => switchVideoMode('upload')}>Upload File</button>
//             <button type="button" className={`fig-toggle-btn ${videoInputMode === 'link' ? 'fig-toggle-active' : ''}`}
//               onClick={() => switchVideoMode('link')}>Paste Link</button>
//           </div>

//           {videoInputMode === 'upload' ? (
//             <>
//               <div className="fig-file-wrapper">
//                 <input ref={videoInputRef} type="file" accept="video/*" onChange={handleVideoChange} className="fig-file-input" />
//                 <button type="button" className="fig-file-btn" onClick={() => videoInputRef.current?.click()}>
//                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M9 1V11M9 11L5 7M9 11L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                     <path d="M2 12V14C2 15.1046 2.89543 16 4 16H14C15.1046 16 16 15.1046 16 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//                   </svg>
//                   {videoFile ? videoFile.name : 'Choose Video'}
//                 </button>
//               </div>
//               {videoError && <p className="fig-error">{videoError}</p>}
//               <p className="fig-hint">Optional — Max 25 MB, MP4/MOV</p>
//             </>
//           ) : (
//             <>
//               <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange}
//                 className="fig-input" placeholder="https://youtube.com/watch?v=..." />
//               <p className="fig-hint">Optional — YouTube, Drive, or any video URL</p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>

//     {/* Consent */}
//     <div className="fig-consent-wrapper">
//       <label className="fig-consent-label">
//         <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="fig-checkbox" />
//         <span className="fig-consent-text">
//           I agree that Prowess may use my submitted feedback, name, college, degree, and uploaded media for display on its website, social media, and promotional materials.
//         </span>
//       </label>
//     </div>

//     <button type="submit" className={`fig-submit-btn ${!isFormValid ? 'fig-submit-disabled' : ''}`} disabled={!isFormValid}>
//       Submit Your Experience
//       <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//         <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     </button>
//   </div>
// </form>
//     </section>
//   );
// };

// export default ShareExperience;





















import React, { useState, useRef } from 'react';
import './ShareExperience.css';

const programOptions = [
  'Communication Mastery',
  'Leadership Bootcamp',
  'Interview Mastery',
  'Public Speaking Pro',
  'Personality Development',
  'Group Discussion Mastery',
  'Corporate Training',
  'Sales Training',
  'Other'
];

const MAX_IMAGE_SIZE = 2 * 1024 * 1024;
const MAX_VIDEO_SIZE = 25 * 1024 * 1024;
const API_BASE = 'https://workfit.co.in/provess/Prowess/index.php/API';

const ShareExperience = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    college: '',
    degree: '',
    yearSemester: '',
    programAttended: '',
    rating: 0,
    feedbackMessage: '',
    socialProfile: '',
    videoLink: '',
    consent: false
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [photoError, setPhotoError] = useState('');
  const [videoError, setVideoError] = useState('');
  const [videoInputMode, setVideoInputMode] = useState('upload');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhotoError('');
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) {
      setPhotoError('Image size must be less than 2 MB');
      setPhotoFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    if (!file.type.startsWith('image/')) {
      setPhotoError('Please upload a valid image file');
      setPhotoFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    setPhotoFile(file);
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideoError('');
    if (!file) return;
    if (file.size > MAX_VIDEO_SIZE) {
      setVideoError('Video size must be less than 25 MB');
      setVideoFile(null);
      if (videoInputRef.current) videoInputRef.current.value = '';
      return;
    }
    if (!file.type.startsWith('video/')) {
      setVideoError('Please upload a valid video file');
      setVideoFile(null);
      if (videoInputRef.current) videoInputRef.current.value = '';
      return;
    }
    setVideoFile(file);
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeVideo = () => {
    setVideoFile(null);
    setVideoError('');
    if (videoInputRef.current) videoInputRef.current.value = '';
  };

  const switchVideoMode = (mode) => {
    setVideoInputMode(mode);
    setVideoError('');
    if (mode === 'upload') {
      setFormData((prev) => ({ ...prev, videoLink: '' }));
    } else {
      setVideoFile(null);
      if (videoInputRef.current) videoInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!formData.consent || formData.rating === 0) return;

    setSubmitting(true);

    const apiData = new FormData();
    apiData.append('full_name', formData.fullName.trim());
    apiData.append('college', formData.college.trim());
    apiData.append('degree', formData.degree.trim());
    apiData.append('year_semester', formData.yearSemester.trim());
    apiData.append('program_attended', formData.programAttended);
    apiData.append('rating', String(formData.rating));
    apiData.append('feedback_message', formData.feedbackMessage.trim());
    apiData.append('social_profile', formData.socialProfile.trim());
    apiData.append('consent', '1');

    if (photoFile) apiData.append('photo', photoFile);
    if (videoInputMode === 'upload' && videoFile) {
      apiData.append('video_file', videoFile);
    }
    if (videoInputMode === 'link' && formData.videoLink.trim()) {
      apiData.append('video_link', formData.videoLink.trim());
    }

    try {
      const response = await fetch(`${API_BASE}/add_prowess_feedback_submissions`, {
        method: 'POST',
        body: apiData
      });

      const result = await response.json();

      if (result.status === 'true' && result.success === '1') {
        // Check if video was supposed to upload but didn't save
        if (videoInputMode === 'upload' && videoFile && !result.data?.video_file) {
          console.warn('Video file was selected but not saved on server. Check PHP upload_max_filesize.');
        }
        setSubmitted(true);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.college.trim() !== '' &&
    formData.degree.trim() !== '' &&
    formData.programAttended !== '' &&
    formData.rating > 0 &&
    formData.feedbackMessage.trim() !== '' &&
    formData.consent === true;

  if (submitted) {
    return (
      <section className="fig-section">
        <div className="fig-success-box">
          <div className="fig-success-icon">
            <svg width="52" height="52" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#D4AF37" />
              <path d="M16 24L21 29L32 18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="fig-success-heading">Thank You!</h3>
          <p className="fig-success-text">
            Your feedback has been submitted successfully and is under review.
            Once approved by our team, it will be featured on our website and social media.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="fig-section">
      <div className="fig-title-row">
        <span className="fig-title-line" />
        <span className="fig-title-badge">SHARE YOUR EXPERIENCE</span>
        <span className="fig-title-line" />
      </div>

      <p className="fig-description">
        Your feedback helps us improve and inspires future learners to grow, lead, and succeed.
      </p>

      <form className="fig-form" onSubmit={handleSubmit} noValidate>
        <div className="fig-form-inner">

          {/* GROUP 1 — Personal Info */}
          <div className="fig-group">
            <div className="fig-group-header">
              <span className="fig-group-num">1</span>
              <h4 className="fig-group-title">Personal Information</h4>
            </div>
            <div className="fig-row">
              <div className="fig-field">
                <label className="fig-label">Full Name <span className="fig-required">*</span></label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                  className="fig-input" placeholder="Enter your full name" required />
              </div>
              <div className="fig-field">
                <label className="fig-label">College / University <span className="fig-required">*</span></label>
                <input type="text" name="college" value={formData.college} onChange={handleChange}
                  className="fig-input" placeholder="e.g. YCCE, Nagpur" required />
              </div>
            </div>
            <div className="fig-row">
              <div className="fig-field">
                <label className="fig-label">Degree / Course <span className="fig-required">*</span></label>
                <input type="text" name="degree" value={formData.degree} onChange={handleChange}
                  className="fig-input" placeholder="e.g. B.Tech – Computer Science" required />
              </div>
              <div className="fig-field">
                <label className="fig-label">Year / Semester</label>
                <input type="text" name="yearSemester" value={formData.yearSemester} onChange={handleChange}
                  className="fig-input" placeholder="e.g. 3rd Year / 6th Semester" />
              </div>
            </div>
          </div>

          {/* GROUP 2 — Program & Rating */}
          <div className="fig-group">
            <div className="fig-group-header">
              <span className="fig-group-num">2</span>
              <h4 className="fig-group-title">Program & Rating</h4>
            </div>
            <div className="fig-row">
              <div className="fig-field">
                <label className="fig-label">Program Attended <span className="fig-required">*</span></label>
                <select name="programAttended" value={formData.programAttended} onChange={handleChange}
                  className="fig-select" required>
                  <option value="">Select Program</option>
                  {programOptions.map((prog) => (
                    <option key={prog} value={prog}>{prog}</option>
                  ))}
                </select>
              </div>
              <div className="fig-field">
                <label className="fig-label">LinkedIn / Instagram Profile</label>
                <input type="url" name="socialProfile" value={formData.socialProfile} onChange={handleChange}
                  className="fig-input" placeholder="https://linkedin.com/in/yourprofile" />
              </div>
            </div>
            <div className="fig-field fig-field-full">
              <label className="fig-label">Your Rating <span className="fig-required">*</span></label>
              <div className="fig-star-row">
                <div className="fig-stars-interactive">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button type="button" key={star} className="fig-star-btn"
                      onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}>
                      <svg width="30" height="30" viewBox="0 0 16 16"
                        fill={star <= (hoveredStar || formData.rating) ? '#D4AF37' : '#d1cfca'}>
                        <path d="M8 0L10.2 5.3L16 6.1L11.8 10.1L12.9 16L8 13.2L3.1 16L4.2 10.1L0 6.1L5.8 5.3L8 0Z" />
                      </svg>
                    </button>
                  ))}
                </div>
                {formData.rating > 0 && <span className="fig-rating-text">{formData.rating}/5</span>}
              </div>
            </div>
          </div>

          {/* GROUP 3 — Feedback */}
          <div className="fig-group">
            <div className="fig-group-header">
              <span className="fig-group-num">3</span>
              <h4 className="fig-group-title">Your Feedback</h4>
            </div>
            <div className="fig-field fig-field-full">
              <label className="fig-label">Feedback Message <span className="fig-required">*</span></label>
              <textarea name="feedbackMessage" value={formData.feedbackMessage} onChange={handleChange}
                className="fig-textarea" placeholder="Share your experience in detail — what changed for you after Prowess?"
                rows={5} required />
            </div>
          </div>

          {/* GROUP 4 — Media */}
          <div className="fig-group">
            <div className="fig-group-header">
              <span className="fig-group-num">4</span>
              <h4 className="fig-group-title">Photo & Video <span className="fig-group-optional">(Optional)</span></h4>
            </div>
            <div className="fig-row">
              {/* Photo */}
              <div className="fig-field">
                <label className="fig-label">Upload Photo</label>
                {photoFile ? (
                  <div className="fig-file-selected">
                    <span className="fig-file-name">{photoFile.name}</span>
                    <button type="button" className="fig-file-remove" onClick={removePhoto}>✕</button>
                  </div>
                ) : (
                  <div className="fig-file-wrapper">
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="fig-file-input" />
                    <button type="button" className="fig-file-btn" onClick={() => fileInputRef.current?.click()}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 1V11M9 11L5 7M9 11L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12V14C2 15.1046 2.89543 16 4 16H14C15.1046 16 16 15.1046 16 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      Choose Image
                    </button>
                  </div>
                )}
                {photoError && <p className="fig-error">{photoError}</p>}
                <p className="fig-hint">Max 2 MB — JPG, PNG</p>
              </div>

              {/* Video */}
              <div className="fig-field">
                <label className="fig-label">Video Testimonial</label>
                <div className="fig-video-toggle">
                  <button type="button" className={`fig-toggle-btn ${videoInputMode === 'upload' ? 'fig-toggle-active' : ''}`}
                    onClick={() => switchVideoMode('upload')}>Upload File</button>
                  <button type="button" className={`fig-toggle-btn ${videoInputMode === 'link' ? 'fig-toggle-active' : ''}`}
                    onClick={() => switchVideoMode('link')}>Paste Link</button>
                </div>

                {videoInputMode === 'upload' ? (
                  <>
                    {videoFile ? (
                      <div className="fig-file-selected">
                        <span className="fig-file-name">{videoFile.name}</span>
                        <button type="button" className="fig-file-remove" onClick={removeVideo}>✕</button>
                      </div>
                    ) : (
                      <div className="fig-file-wrapper">
                        <input ref={videoInputRef} type="file" accept="video/*" onChange={handleVideoChange} className="fig-file-input" />
                        <button type="button" className="fig-file-btn" onClick={() => videoInputRef.current?.click()}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 1V11M9 11L5 7M9 11L13 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 12V14C2 15.1046 2.89543 16 4 16H14C15.1046 16 16 15.1046 16 14V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                          Choose Video
                        </button>
                      </div>
                    )}
                    {videoError && <p className="fig-error">{videoError}</p>}
                    <p className="fig-hint">Max 25 MB — MP4, MOV</p>
                  </>
                ) : (
                  <>
                    <input type="url" name="videoLink" value={formData.videoLink} onChange={handleChange}
                      className="fig-input" placeholder="https://youtube.com/watch?v=..." />
                    <p className="fig-hint">YouTube, Drive, or any video URL</p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Submit Error */}
          {submitError && (
            <div className="fig-submit-error">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8" stroke="#c0392b" strokeWidth="1.5" />
                <path d="M6 6L12 12M12 6L6 12" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {submitError}
            </div>
          )}

          {/* Consent */}
          <div className="fig-consent-wrapper">
            <label className="fig-consent-label">
              <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="fig-checkbox" />
              <span className="fig-consent-text">
                I agree that Prowess may use my submitted feedback, name, college, degree, and uploaded media for display on its website, social media, and promotional materials.
              </span>
            </label>
          </div>

          <button type="submit" className={`fig-submit-btn ${!isFormValid || submitting ? 'fig-submit-disabled' : ''}`}
            disabled={!isFormValid || submitting}>
            {submitting ? (
              <>
                <span className="fig-spinner" />
                Submitting...
              </>
            ) : (
              <>
                Submit Your Experience
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H14M14 8L9 3M14 8L9 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ShareExperience;