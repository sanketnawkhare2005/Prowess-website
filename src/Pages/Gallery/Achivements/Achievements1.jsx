import React, { useState } from "react";
import "./Achievements1.css";

const defaultCertificates = [
  {
    id: 1,
    title: "Founding Member",
    issued: "Issued Jan 2025",
    note: "Among the first 500 to join the platform",
    seal: "🏅",
  },
  {
    id: 2,
    title: "Quest Completion",
    issued: "Issued Mar 2025",
    note: "Finished 6 Phase Meditation in full",
    seal: "🎖️",
  },
  {
    id: 3,
    title: "Consistency Award",
    issued: "Issued Jun 2025",
    note: "100 consecutive days of practice",
    seal: "🏆",
  },
  {
    id: 4,
    title: "Community Leader",
    issued: "Issued Sep 2025",
    note: "Top contributor across discussion forums",
    seal: "🎗️",
  },
];

const defaultLadder = [
  { id: 1, label: "Joined the platform", reached: true },
  { id: 2, label: "Completed first quest", reached: true },
  { id: 3, label: "30-day streak achieved", reached: true },
  { id: 4, label: "Certified as a coach", reached: false },
  { id: 5, label: "Spoke at a live event", reached: false },
  { id: 6, label: "Mentored 10+ members", reached: false },
];

export default function Achievements1({
  eyebrow = "HALL OF RECOGNITION",
  heading = "Awards, certified and framed",
  description = "Each plaque here represents a milestone formally recognized — not just tracked, but earned and certified.",
  certificates = defaultCertificates,
  ladder = defaultLadder,
}) {
  const [flippedId, setFlippedId] = useState(null);
  const reachedCount = ladder.filter((l) => l.reached).length;
  const progressPct = Math.round((reachedCount / ladder.length) * 100);

  return (
    <section className="newfullachive-section">
      <div className="newfullachive-header">
        <p className="newfullachive-eyebrow">{eyebrow}</p>
        <h2 className="newfullachive-heading">{heading}</h2>
        <p className="newfullachive-desc">{description}</p>
      </div>

      {/* Certificate / plaque wall */}
      <div className="newfullachive-wall">
        {certificates.map((c) => (
          <button
            type="button"
            key={c.id}
            className={`newfullachive-cert ${
              flippedId === c.id ? "newfullachive-cert--flipped" : ""
            }`}
            onClick={() =>
              setFlippedId((prev) => (prev === c.id ? null : c.id))
            }
          >
            <div className="newfullachive-cert-inner">
              {/* Front face */}
              <div className="newfullachive-cert-face newfullachive-cert-face--front">
                <span className="newfullachive-cert-corner" aria-hidden="true" />
                <span className="newfullachive-cert-corner newfullachive-cert-corner--br" aria-hidden="true" />
                <span className="newfullachive-cert-seal">{c.seal}</span>
                <p className="newfullachive-cert-title">{c.title}</p>
                <span className="newfullachive-cert-rule" aria-hidden="true" />
                <p className="newfullachive-cert-issued">{c.issued}</p>
              </div>

              {/* Back face */}
              <div className="newfullachive-cert-face newfullachive-cert-face--back">
                <p className="newfullachive-cert-note">{c.note}</p>
                <span className="newfullachive-cert-flip-hint">
                  Tap to flip back
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Milestone ladder */}
      <div className="newfullachive-ladder-wrap">
        <div className="newfullachive-ladder-header">
          <h3 className="newfullachive-ladder-title">Milestone Path</h3>
          <span className="newfullachive-ladder-progress">
            {progressPct}% complete
          </span>
        </div>

        <div className="newfullachive-ladder">
          <span className="newfullachive-ladder-track" aria-hidden="true">
            <span
              className="newfullachive-ladder-track-fill"
              style={{ height: `${progressPct}%` }}
            />
          </span>

          {ladder.map((step, i) => (
            <div
              className={`newfullachive-step ${
                step.reached ? "newfullachive-step--reached" : ""
              }`}
              key={step.id}
              style={{ "--newfullachive-i": i }}
            >
              <span className="newfullachive-step-node">
                {step.reached ? "✓" : i + 1}
              </span>
              <span className="newfullachive-step-label">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}