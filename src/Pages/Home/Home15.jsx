import React, { useState } from "react";
import "./Home15.css";

export default function Home15({
  heading = (
    <>
      Become 1% Better
      <br />
      Every Day
    </>
  ),
  subheading = "Upgrade Your Mind. Elevate Your Life. Shape the Future.",
  description = "Welcome to Mindvalley Daily. We'll send you the latest breakthroughs in personal growth, performance, and transformation—straight to your inbox",
  image = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  name = "VISHEN",
  title = "Founder and CEO of Mindvalley",
  placeholder = "Your email address",
  buttonLabel = "Subscribe",
  disclaimer = "Your data is safe with us. Unsubscribe anytime.",
  onSubscribe,
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe?.(email);
  };

  return (
    <section className="every-day-section">
      <style>{`
        .every-day-section {
          --every-day-ink: #0f1222;
          --every-day-muted: #4b5563;
          --every-day-accent: #7c2ee0;
          --every-day-accent-dark: #6a1fc7;
          width: 100%;
          background: linear-gradient(
            165deg,
            #fbe6e6 0%,
            #fdf7f3 28%,
            #ffffff 50%,
            #f1faf2 72%,
            #e3f6e6 100%
          );
          padding: 64px 24px;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, sans-serif;
        }

        .every-day-grid {
          max-width: 980px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 220px 1fr;
          align-items: center;
          gap: 48px;
        }

        .every-day-photo {
          position: relative;
          width: 100%;
          aspect-ratio: 220 / 330;
          border-radius: 10px;
          overflow: hidden;
          background: #1a1a1a;
        }

        .every-day-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .every-day-photo-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.35) 35%,
            rgba(0, 0, 0, 0) 65%
          );
        }

        .every-day-photo-caption {
          position: absolute;
          left: 16px;
          bottom: 16px;
          right: 16px;
        }

        .every-day-name {
          color: #fff;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 0.02em;
          line-height: 1;
          margin: 0 0 4px;
          font-style: italic;
        }

        .every-day-title {
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.01em;
          margin: 0;
        }

        .every-day-content {
          min-width: 0;
        }

        .every-day-heading {
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          color: var(--every-day-ink);
          line-height: 1.15;
          letter-spacing: -0.01em;
          margin: 0 0 14px;
        }

        .every-day-subheading {
          font-size: 16px;
          font-weight: 700;
          color: var(--every-day-ink);
          margin: 0 0 14px;
        }

        .every-day-desc {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--every-day-muted);
          margin: 0 0 22px;
          max-width: 480px;
        }

        .every-day-form {
          display: flex;
          gap: 12px;
          margin-bottom: 10px;
        }

        .every-day-input {
          flex: 1 1 260px;
          max-width: 280px;
          padding: 13px 18px;
          font-size: 14.5px;
          border: 1px solid #d8d8dc;
          border-radius: 999px;
          background: #fff;
          color: var(--every-day-ink);
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .every-day-input::placeholder {
          color: #9ca3af;
        }

        .every-day-input:focus {
          border-color: var(--every-day-accent);
          box-shadow: 0 0 0 3px rgba(124, 46, 224, 0.15);
        }

        .every-day-submit {
          flex: 0 0 auto;
          padding: 13px 30px;
          font-size: 14.5px;
          font-weight: 700;
          color: #fff;
          background: var(--every-day-accent);
          border: none;
          border-radius: 999px;
          cursor: pointer;
          font-family: inherit;
          transition: background 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
        }

        .every-day-submit:hover {
          background: var(--every-day-accent-dark);
          transform: translateY(-1px);
        }

        .every-day-submit:focus-visible {
          outline: 3px solid rgba(124, 46, 224, 0.3);
          outline-offset: 2px;
        }

        .every-day-disclaimer {
          font-size: 11.5px;
          color: var(--every-day-muted);
          margin: 0;
        }

        @media (max-width: 760px) {
          .every-day-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            justify-items: center;
            text-align: center;
          }
          .every-day-photo {
            max-width: 220px;
          }
          .every-day-desc {
            max-width: 100%;
          }
          .every-day-form {
            justify-content: center;
            flex-wrap: wrap;
          }
          .every-day-input {
            max-width: 100%;
            flex: 1 1 100%;
          }
          .every-day-submit {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 420px) {
          .every-day-section {
            padding: 44px 18px;
          }
          .every-day-heading {
            font-size: 28px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .every-day-submit, .every-day-input {
            transition: none !important;
          }
        }
      `}</style>

      <div className="every-day-grid">
        <div className="every-day-photo">
          <img src={image} alt={name} />
          <div className="every-day-photo-overlay" />
          <div className="every-day-photo-caption">
            <p className="every-day-name">{name}</p>
            <p className="every-day-title">{title}</p>
          </div>
        </div>

        <div className="every-day-content">
          <h2 className="every-day-heading">{heading}</h2>
          <p className="every-day-subheading">{subheading}</p>
          <p className="every-day-desc">{description}</p>

          <form className="every-day-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              className="every-day-input"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="every-day-submit">
              {buttonLabel}
            </button>
          </form>

          <p className="every-day-disclaimer">{disclaimer}</p>
        </div>
      </div>
    </section>
  );
}