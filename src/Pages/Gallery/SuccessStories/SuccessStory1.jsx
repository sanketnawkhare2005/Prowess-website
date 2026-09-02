import React, { useState, useEffect, useRef } from "react";
import "./SuccessStory1.css";

const defaultStories = [
  {
    id: 1,
    name: "Indrani (Idee)",
    role: "Animal Caregiver, Dehra Dun",
    quote:
      "I learned how to shape my ideas into a real learning journey, step by step.",
    stat: "+6",
    statLabel: "Courses launched",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&q=80",
  },
  {
    id: 2,
    name: "Shruti Shailajan",
    role: "Business Consultant, Bangalore",
    quote:
      "The exercises made me rediscover parts of myself I had suppressed for years.",
    stat: "90",
    statLabel: "Days to clarity",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=80",
  },
  {
    id: 3,
    name: "Mishi Aggarwal",
    role: "Energy Healer, Delhi",
    quote:
      "I went for a steeper trek without any shortness of breath or out-of-control heart rate.",
    stat: "0",
    statLabel: "Symptoms left",
    img: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=700&q=80",
  },
  {
    id: 4,
    name: "Rohan Mehta",
    role: "Software Engineer, Pune",
    quote: "This program gave me the discipline I was missing for years.",
    stat: "3x",
    statLabel: "Productivity",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
  },
  {
    id: 5,
    name: "Ananya Rao",
    role: "Product Designer, Hyderabad",
    quote: "I finally feel in control of my own story, on my own terms.",
    stat: "47%",
    statLabel: "Confidence rise",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=700&q=80",
  },
];

export default function SuccessStory1({
  eyebrow = "REAL RESULTS",
  heading = "Proof, not promises",
  description = "Every number below started as someone's first, uncertain step. Here's what 90 days of showing up looks like.",
  stories = defaultStories,
  autoRotateMs = 6000,
}) {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const timerRef = useRef(null);
  const featured = stories[featuredIndex] || stories[0];

  useEffect(() => {
    if (!autoRotateMs) return;
    timerRef.current = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % stories.length);
    }, autoRotateMs);
    return () => clearInterval(timerRef.current);
  }, [stories.length, autoRotateMs]);

  const selectFeatured = (i) => {
    setFeaturedIndex(i);
    clearInterval(timerRef.current);
    if (autoRotateMs) {
      timerRef.current = setInterval(() => {
        setFeaturedIndex((prev) => (prev + 1) % stories.length);
      }, autoRotateMs);
    }
  };

  return (
    <section className="succ-story1-section">
      <div className="succ-story1-header">
        <p className="succ-story1-eyebrow">{eyebrow}</p>
        <h2 className="succ-story1-heading">{heading}</h2>
        <p className="succ-story1-desc">{description}</p>
      </div>

      {/* Featured editorial spotlight */}
      <div className="succ-story1-feature">
        <div className="succ-story1-feature-text">
          <span className="succ-story1-feature-mark" aria-hidden="true">
            &ldquo;
          </span>
          <p className="succ-story1-feature-quote">{featured.quote}</p>
          <div className="succ-story1-feature-byline">
            <p className="succ-story1-feature-name">{featured.name}</p>
            <p className="succ-story1-feature-role">{featured.role}</p>
          </div>

          <div className="succ-story1-feature-dots">
            {stories.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Show story from ${s.name}`}
                className={`succ-story1-feature-dot ${
                  i === featuredIndex ? "succ-story1-feature-dot--active" : ""
                }`}
                onClick={() => selectFeatured(i)}
              />
            ))}
          </div>
        </div>

        <div className="succ-story1-feature-photo">
          <img src={featured.img} alt={featured.name} />
          <div className="succ-story1-feature-stat">
            <span className="succ-story1-feature-stat-num">
              {featured.stat}
            </span>
            <span className="succ-story1-feature-stat-label">
              {featured.statLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Compact proof-point cards */}
      <div className="succ-story1-grid">
        {stories.map((s, i) => (
          <button
            type="button"
            key={s.id}
            className={`succ-story1-card ${
              i === featuredIndex ? "succ-story1-card--active" : ""
            }`}
            onClick={() => selectFeatured(i)}
          >
            <div className="succ-story1-card-photo">
              <img src={s.img} alt={s.name} loading="lazy" />
            </div>
            <div className="succ-story1-card-body">
              <span className="succ-story1-card-stat">{s.stat}</span>
              <span className="succ-story1-card-stat-label">
                {s.statLabel}
              </span>
              <p className="succ-story1-card-name">{s.name}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}