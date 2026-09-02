import React, { useState } from "react";
import "./Videos1.css";


const defaultVideos = [
  {
    id: 1,
    title: "Inside the 6 Phase Meditation",
    description:
      "Vishen Lakhiani walks through the science and structure behind one of the most practiced meditations in the world.",
    duration: "12:45",
    category: "Meditation",
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80",
  },
  {
    id: 2,
    title: "Live from Mindset Summit Mumbai",
    description:
      "Highlights from the main stage — keynotes, breakthroughs, and the energy of 1,200 attendees in one room.",
    duration: "08:32",
    category: "Event Highlights",
    thumb: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80",
  },
  {
    id: 3,
    title: "Coach Spotlight: Lisa Nichols",
    description:
      "How Lisa built a global speaking career from scratch — and what she teaches new coaches every cohort.",
    duration: "15:10",
    category: "Coach Stories",
    thumb: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80",
  },
  {
    id: 4,
    title: "Behind the Scenes: Goa Retreat",
    description:
      "A quiet morning, an ocean view, and 300 people resetting their nervous systems together.",
    duration: "06:58",
    category: "Behind the Scenes",
    thumb: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
  },
  {
    id: 5,
    title: "5 Rules for Life with Maye Musk",
    description:
      "A masterclass excerpt on resilience, reinvention, and building a life on your own terms.",
    duration: "10:21",
    category: "Masterclass",
    thumb: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80",
  },
  {
    id: 6,
    title: "Student Wins: 90-Day Transformations",
    description:
      "Real members share what changed — in their bodies, their businesses, and their relationships.",
    duration: "09:47",
    category: "Success Stories",
    thumb: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80",
  },
];

export default function Videos1({
  eyebrow = "WATCH & LEARN",
  heading = "Videos worth pausing for",
  description = "Keynotes, coach stories, and behind-the-scenes moments from across our programs and live events.",
  videos = defaultVideos,
}) {
  const [activeId, setActiveId] = useState(videos[0]?.id);
  const active = videos.find((v) => v.id === activeId) || videos[0];

  return (
    <section className="vid-new1-section">
      <div className="vid-new1-header">
        <p className="vid-new1-eyebrow">{eyebrow}</p>
        <h2 className="vid-new1-heading">{heading}</h2>
        <p className="vid-new1-desc">{description}</p>
      </div>

      {/* Spotlight / featured player */}
      <div className="vid-new1-stage">
        <img
          className="vid-new1-stage-bg"
          src={active.thumb}
          alt=""
          aria-hidden="true"
        />
        <div className="vid-new1-stage-vignette" />

        <button
          type="button"
          className="vid-new1-stage-play"
          aria-label={`Play ${active.title}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <div className="vid-new1-stage-info">
          <span className="vid-new1-stage-category">{active.category}</span>
          <h3 className="vid-new1-stage-title">{active.title}</h3>
          <p className="vid-new1-stage-desc">{active.description}</p>
          <span className="vid-new1-stage-duration">{active.duration}</span>
        </div>
      </div>

      {/* Reel strip */}
      <div className="vid-new1-reel">
        {videos.map((v) => (
          <button
            key={v.id}
            type="button"
            className={`vid-new1-card ${
              v.id === activeId ? "vid-new1-card--active" : ""
            }`}
            onClick={() => setActiveId(v.id)}
          >
            <div className="vid-new1-card-thumb">
              <img src={v.thumb} alt={v.title} loading="lazy" />
              <span className="vid-new1-card-duration">{v.duration}</span>
              <span className="vid-new1-card-play" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
            <p className="vid-new1-card-title">{v.title}</p>
            <span className="vid-new1-card-category">{v.category}</span>
          </button>
        ))}
      </div>
    </section>
  );
}