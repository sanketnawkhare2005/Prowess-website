import React, { useState } from "react";
import "./Event1.css";



const defaultEvents = [
  {
    id: 1,
    month: "MAR",
    day: "14",
    year: "2026",
    title: "Mindset Summit Mumbai",
    venue: "Jio World Convention Centre, Mumbai",
    attendees: "1,200+ attendees",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
    tag: "Conference",
  },
  {
    id: 2,
    month: "FEB",
    day: "02",
    year: "2026",
    title: "Leadership Live Bangalore",
    venue: "The Lalit Ashok, Bangalore",
    attendees: "850+ attendees",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=700&q=80",
    tag: "Workshop",
  },
  {
    id: 3,
    month: "DEC",
    day: "18",
    year: "2025",
    title: "Year-End Transformation Gala",
    venue: "Taj Palace, New Delhi",
    attendees: "2,000+ attendees",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=80",
    tag: "Gala Night",
  },
  {
    id: 4,
    month: "NOV",
    day: "09",
    year: "2025",
    title: "Founders & Coaches Meetup",
    venue: "World Trade Centre, Pune",
    attendees: "400+ attendees",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80",
    tag: "Meetup",
  },
  {
    id: 5,
    month: "SEP",
    day: "27",
    year: "2025",
    title: "Wellness & Wholeness Retreat",
    venue: "Goa Marriott Resort",
    attendees: "300+ attendees",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80",
    tag: "Retreat",
  },
  {
    id: 6,
    month: "AUG",
    day: "11",
    year: "2025",
    title: "Speaker Bootcamp Live",
    venue: "Hyderabad International Convention Centre",
    attendees: "650+ attendees",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80",
    tag: "Bootcamp",
  },
];

export default function Event1({
  eyebrow = "EVENT ARCHIVE",
  heading = (
    <>
      Every event,
      <br />
      stamped and stored
    </>
  ),
  description = "A running record of our flagship gatherings — conferences, retreats, and live trainings — one ticket stub at a time.",
  events = defaultEvents,
}) {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="event-gallery-new-section">
      <div className="event-gallery-new-header">
        <p className="event-gallery-new-eyebrow">{eyebrow}</p>
        <h2 className="event-gallery-new-heading">{heading}</h2>
        <p className="event-gallery-new-desc">{description}</p>
      </div>

      <div className="event-gallery-new-timeline">
        <span className="event-gallery-new-line" aria-hidden="true" />

        {events.map((ev) => (
          <div className="event-gallery-new-row" key={ev.id}>
            <span className="event-gallery-new-dot" aria-hidden="true" />

            <button
              type="button"
              className={`event-gallery-new-ticket ${
                expandedId === ev.id ? "event-gallery-new-ticket--open" : ""
              }`}
              onClick={() =>
                setExpandedId((prev) => (prev === ev.id ? null : ev.id))
              }
            >
              <div className="event-gallery-new-stub">
                <span className="event-gallery-new-stub-month">
                  {ev.month}
                </span>
                <span className="event-gallery-new-stub-day">{ev.day}</span>
                <span className="event-gallery-new-stub-year">
                  {ev.year}
                </span>
              </div>

              <div className="event-gallery-new-perf" aria-hidden="true" />

              <div className="event-gallery-new-body">
                <div className="event-gallery-new-photo">
                  <img src={ev.img} alt={ev.title} loading="lazy" />
                  <span className="event-gallery-new-tag">{ev.tag}</span>
                </div>
                <div className="event-gallery-new-info">
                  <p className="event-gallery-new-title">{ev.title}</p>
                  <p className="event-gallery-new-venue">{ev.venue}</p>
                  <p className="event-gallery-new-attendees">
                    {ev.attendees}
                  </p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}