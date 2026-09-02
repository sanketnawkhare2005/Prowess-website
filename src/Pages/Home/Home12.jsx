import React from "react";
import "./Home12.css";

const defaultCards = [
  {
    heading: "Mindvalley Academy",
    description: (
      <>
        When regular education can&apos;t cope with hot, fast growing skills
        — Mindvalley is here to put you in the top 0.1% within 4 to 6 months.
      </>
    ),
    ctaLabel: "Learn more",
    ctaHref: "https://www.mindvalley.com/academy",
    image: {
      type: "split",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80",
      labels: [
        // "Social Media Mastery",
        // "AI Mastery",
        // "Entrepreneurship Mastery",
        // "Manifesting Mastery",
      ],
    },
  },
  {
    heading: "Become a Mindvalley Certified Coach",
    description: (
      <>
        Elevate your career with Mindvalley Certified Coach: meaningful
        work, lucrative opportunities, and flexible freedom. 6,000 new
        coaches trained annually.
      </>
    ),
    ctaLabel: "Become a coach",
    ctaHref:
      "https://www.mindvalley.com/certs?itm_source=mv.com&itm_campaign=evergreen&otag=mv.com_hp",
    image: {
      type: "single",
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    },
  },
  {
    heading: "Explore Mindvalley events",
    description: (
      <>
        Embark on enchantment at Mindvalley&apos;s award-winning events,
        where connections, transformations, and wonders converge.
      </>
    ),
    ctaLabel: "Learn more",
    ctaHref:
      "https://www.mindvalley.com/events?itm_source=mv.com&itm_campaign=evergreen&otag=mv.com_hp",
    image: {
      type: "single",
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    },
  },
];

function CardImage({ image }) {
  if (image.type === "split") {
    return (
      <div className="prog-home12-image prog-home12-image--split">
        <img src={image.src} alt="" loading="lazy" />
        <div className="prog-home12-split-overlay">
          {image.labels.map((label, i) => {
            const words = label.split(" ");
            const last = words.pop();
            return (
              <div className="prog-home12-split-cell" key={i}>
                <span className="prog-home12-split-label">
                  {words.join(" ")}
                  {words.length ? <br /> : null}
                  {last}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="prog-home12-image">
      <img src={image.src} alt="" loading="lazy" />
    </div>
  );
}

function ProgramCard({ heading, description, ctaLabel, ctaHref, image }) {
  return (
    <div className="prog-home12-card">
      <div className="prog-home12-card-top">
        <h3 className="prog-home12-card-heading">{heading}</h3>
        <p className="prog-home12-card-desc">{description}</p>
        <a className="prog-home12-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
      <CardImage image={image} />
    </div>
  );
}

export default function Home12({
  title = (
    <>
      Advanced programs
      <br />
      by Mindvalley
    </>
  ),
  subtitle = "Embark on a profound exploration of self with our advanced programs and empowering experiences",
  cards = defaultCards,
}) {
  return (
    <section className="prog-home12-section">
      

      <div className="prog-home12-header">
        <h2 className="prog-home12-title">{title}</h2>
        <p className="prog-home12-subtitle">{subtitle}</p>
      </div>

      <div className="prog-home12-grid">
        {cards.map((card, i) => (
          <ProgramCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}