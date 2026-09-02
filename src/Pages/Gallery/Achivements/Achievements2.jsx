import React, { useState } from "react";
import "./Achievements2.css";



const defaultStats = [
  { id: 1, value: 86, suffix: "%", label: "Members who finish a program" },
  { id: 2, value: 25916, suffix: "+", label: "Case studies of success" },
  { id: 3, value: 6000, suffix: "+", label: "Coaches certified yearly" },
];

const defaultBadges = [
  {
    id: 1,
    title: "First Quest Completed",
    description: "Finished your very first guided program",
    icon: "🎯",
    unlocked: true,
  },
  {
    id: 2,
    title: "7-Day Streak",
    description: "Showed up every day for a full week",
    icon: "🔥",
    unlocked: true,
  },
  {
    id: 3,
    title: "Top 1% Learner",
    description: "Completed work in the top percentile of all members",
    icon: "⭐",
    unlocked: true,
  },
  {
    id: 4,
    title: "Community Voice",
    description: "Shared your story to inspire others",
    icon: "💬",
    unlocked: true,
  },
  {
    id: 5,
    title: "100-Day Transformer",
    description: "Logged in and practiced for 100 days straight",
    icon: "🏆",
    unlocked: false,
  },
  {
    id: 6,
    title: "Certified Coach",
    description: "Completed full certification track",
    icon: "🎓",
    unlocked: false,
  },
  {
    id: 7,
    title: "Mentor Status",
    description: "Helped 10+ members reach their goals",
    icon: "🤝",
    unlocked: false,
  },
  {
    id: 8,
    title: "Global Speaker",
    description: "Took the stage at a live event",
    icon: "🎤",
    unlocked: false,
  },
];

function StatRing({ stat }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(stat.value > 100 ? 100 : stat.value, 100);
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="achieve-new1-stat">
      <svg className="achieve-new1-stat-ring" viewBox="0 0 100 100">
        <circle
          className="achieve-new1-stat-ring-track"
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="7"
        />
        <circle
          className="achieve-new1-stat-ring-fill"
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="achieve-new1-stat-value">
        {stat.value.toLocaleString()}
        {stat.suffix}
      </div>
      <p className="achieve-new1-stat-label">{stat.label}</p>
    </div>
  );
}

export default function Achievements2({
  eyebrow = "TROPHY CASE",
  heading = "Milestones worth unlocking",
  description = "From your first quest to global stages — every badge here marks a real, earned step forward.",
  stats = defaultStats,
  badges = defaultBadges,
}) {
  const [activeBadge, setActiveBadge] = useState(null);
  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <section className="achieve-new1-section">
      <div className="achieve-new1-header">
        <p className="achieve-new1-eyebrow">{eyebrow}</p>
        <h2 className="achieve-new1-heading">{heading}</h2>
        <p className="achieve-new1-desc">{description}</p>
      </div>

      <div className="achieve-new1-stats">
        {stats.map((s) => (
          <StatRing stat={s} key={s.id} />
        ))}
      </div>

      <div className="achieve-new1-wall">
        <div className="achieve-new1-wall-header">
          <h3 className="achieve-new1-wall-title">Badge Wall</h3>
          <span className="achieve-new1-wall-progress">
            {unlockedCount} / {badges.length} unlocked
          </span>
        </div>

        <div className="achieve-new1-honeycomb">
          {badges.map((b) => (
            <button
              type="button"
              key={b.id}
              className={`achieve-new1-badge ${
                b.unlocked
                  ? "achieve-new1-badge--unlocked"
                  : "achieve-new1-badge--locked"
              } ${activeBadge === b.id ? "achieve-new1-badge--active" : ""}`}
              onClick={() =>
                setActiveBadge((prev) => (prev === b.id ? null : b.id))
              }
            >
              <span className="achieve-new1-badge-hex">
                <span className="achieve-new1-badge-icon">
                  {b.unlocked ? b.icon : "🔒"}
                </span>
              </span>

              <span
                className={`achieve-new1-badge-tooltip ${
                  activeBadge === b.id
                    ? "achieve-new1-badge-tooltip--open"
                    : ""
                }`}
              >
                <strong>{b.title}</strong>
                <span>{b.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
