import React, { useState } from "react";
import "./Login.css";

const methods = [
  { id: "google", label: "Continue with Google" },
  { id: "email", label: "Continue with Email" },
  { id: "otp", label: "Continue with Mobile OTP" },
];

const perks = [
  { icon: "⚡", title: "Easy Registration", text: "Sign up in under a minute" },
  { icon: "🔑", title: "Quick Login", text: "One tap, you're in" },
  { icon: "🛡️", title: "Secure Access", text: "Encrypted, always" },
  { icon: "💜", title: "User Friendly", text: "Built around real users" },
];

export default function Login({ brand = "PROWESS" }) {
  const [active, setActive] = useState("email");

  return (
    <section className="login-showcase-section">
      <div className="login-showcase-card">
        {/* Left: value props panel */}
        <div className="login-showcase-side">
          <div className="login-showcase-side-top">
            <span className="login-showcase-logo">P</span>
            <span className="login-showcase-brand">{brand}</span>
          </div>

          <h2 className="login-showcase-tagline">
            One account.
            <br />
            Every way in.
          </h2>
          <p className="login-showcase-subtext">
            Sign up however feels easiest — Google, email, or your phone.
            Same secure account either way.
          </p>

          <div className="login-showcase-perks">
            {perks.map((p) => (
              <div className="login-showcase-perk" key={p.title}>
                <span className="login-showcase-perk-icon">{p.icon}</span>
                <div>
                  <p className="login-showcase-perk-title">{p.title}</p>
                  <p className="login-showcase-perk-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form panel */}
        <div className="login-showcase-form">
          <p className="login-showcase-form-eyebrow">Get started</p>
          <h3 className="login-showcase-form-title">Create your account</h3>

          {/* Method switch — pill segmented control */}
          <div className="login-showcase-switch" role="tablist">
            {methods.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={active === m.id}
                className={`login-showcase-switch-btn ${
                  active === m.id ? "login-showcase-switch-btn--active" : ""
                }`}
                onClick={() => setActive(m.id)}
              >
                {m.id === "google" && "Google"}
                {m.id === "email" && "Email"}
                {m.id === "otp" && "Mobile"}
              </button>
            ))}
          </div>

          {/* Google */}
          {active === "google" && (
            <div className="login-showcase-panel">
              <button type="button" className="login-showcase-google-btn">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Sign up with Google
              </button>
              <p className="login-showcase-note">
                One click, no password to remember.
              </p>
            </div>
          )}

          {/* Email */}
          {active === "email" && (
            <form
              className="login-showcase-panel"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="login-showcase-label">Full name</label>
              <input
                type="text"
                className="login-showcase-input"
                placeholder="Jane Doe"
              />
              <label className="login-showcase-label">Email address</label>
              <input
                type="email"
                className="login-showcase-input"
                placeholder="you@example.com"
              />
              <label className="login-showcase-label">Password</label>
              <input
                type="password"
                className="login-showcase-input"
                placeholder="Create a password"
              />
              <button type="submit" className="login-showcase-submit">
                Create account
              </button>
            </form>
          )}

          {/* Mobile OTP */}
          {active === "otp" && (
            <div className="login-showcase-panel">
              <label className="login-showcase-label">Mobile number</label>
              <div className="login-showcase-phone-row">
                <span className="login-showcase-phone-code">+91</span>
                <input
                  type="tel"
                  className="login-showcase-input login-showcase-input--phone"
                  placeholder="98765 43210"
                />
              </div>
              <button type="button" className="login-showcase-submit">
                Send OTP
              </button>
              <p className="login-showcase-note">
                We'll text you a one-time code to confirm it's you.
              </p>
            </div>
          )}

          <p className="login-showcase-footer">
            Already have an account?{" "}
            <a href="#" className="login-showcase-link">
              Log in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}