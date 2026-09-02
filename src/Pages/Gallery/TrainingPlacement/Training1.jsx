import React, { useState, useMemo } from "react";
import "./Training1.css";



const defaultPhotos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80",
    category: "Workshops",
    location: "Mumbai, India",
    date: "Mar 2026",
    tall: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&q=80",
    category: "Group Coaching",
    location: "Bangalore, India",
    date: "Feb 2026",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=700&q=80",
    category: "Live Events",
    location: "Delhi, India",
    date: "Jan 2026",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
    category: "Workshops",
    location: "Pune, India",
    date: "Dec 2025",
    tall: true,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80",
    category: "Mentorship",
    location: "Hyderabad, India",
    date: "Nov 2025",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=80",
    category: "Live Events",
    location: "Chennai, India",
    date: "Nov 2025",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&q=80",
    category: "Group Coaching",
    location: "Goa, India",
    date: "Oct 2025",
    tall: true,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
    category: "Workshops",
    location: "Jaipur, India",
    date: "Sep 2025",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?w=700&q=80",
    category: "Mentorship",
    location: "Mumbai, India",
    date: "Aug 2025",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80",
    category: "Live Events",
    location: "Bangalore, India",
    date: "Jul 2025",
    tall: true,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    category: "Group Coaching",
    location: "Pune, India",
    date: "Jun 2025",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1531547336975-2f7a05f51d80?w=700&q=80",
    category: "Workshops",
    location: "Delhi, India",
    date: "May 2025",
  },
];

const filters = ["All", "Workshops", "Group Coaching", "Live Events", "Mentorship"];

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function Training1({
  eyebrow = "FRAME BY FRAME",
  heading = (
    <>
      Training photos
      <br />
      from the field
    </>
  ),
  description = "Every session, every city, every breakthrough — captured as it happened. Browse moments from our training rooms around the world.",
  photos = defaultPhotos,
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return photos;
    return photos.filter((p) => p.category === activeFilter);
  }, [photos, activeFilter]);

  return (
    <section className="traing-place-new-section">
      <div className="traing-place-new-header">
        <p className="traing-place-new-eyebrow">{eyebrow}</p>
        <h2 className="traing-place-new-heading">{heading}</h2>
        <p className="traing-place-new-desc">{description}</p>

        <div className="traing-place-new-filters" role="tablist" aria-label="Filter by category">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={activeFilter === f}
              className={`traing-place-new-filter ${
                activeFilter === f ? "traing-place-new-filter--active" : ""
              }`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="traing-place-new-grid">
        {filtered.map((photo, i) => (
          <figure
            key={photo.id}
            className={`traing-place-new-frame ${
              photo.tall ? "traing-place-new-frame--tall" : ""
            }`}
          >
            <span className="traing-place-new-frame-number">
              FR.{pad(i + 1)}
            </span>
            <img
              src={photo.src}
              alt={`${photo.category} training session in ${photo.location}`}
              loading="lazy"
            />
            <figcaption className="traing-place-new-frame-info">
              <span className="traing-place-new-frame-location">
                {photo.location}
              </span>
              <span className="traing-place-new-frame-date">{photo.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="traing-place-new-empty">
          No photos in this category yet — check back soon.
        </p>
      )}
    </section>
  );
}