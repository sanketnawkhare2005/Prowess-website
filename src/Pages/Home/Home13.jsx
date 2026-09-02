import React, { useRef, useState, useEffect, useCallback } from "react";
import "./Home13.css";

const defaultStories = [
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    quote:
      "I learned how to shape my ideas into a real learning journey. I took my time with each lesson, implemented everything step by step, and built my courses alongside the program",
    description:
      "Before Course Pro, I had the vision for my animal-healing and communication courses, but…",
    name: "Indrani (Idee)",
    profession: "Animal Caregiver",
    location: "Dehra Dun, India",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
    quote:
      "The exercises in this quest have made me rediscover parts of me that I had suppressed",
    description:
      "I always believed that I live by certain values in my life that are shaped from my experiences, and…",
    name: "Shruti Shailajan",
    profession: "Business Consultant",
    location: "Bangalore, India",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&q=80",
    quote:
      "Just 15 days ago I went for quite a steeper trek and I did it without any shortness of breath or out of control heart rate",
    description:
      "I was diagnosed with tachycardia back in 2021 and it went on until 2022 mid. Since then I developed…",
    name: "Mishi Aggarwal",
    profession: "Energy Healer",
    location: "Delhi, India",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
    quote: "This program gave me the discipline I was missing for years",
    description:
      "I had tried so many things before this — courses, books, mentors — but nothing stuck until…",
    name: "Rohan Mehta",
    profession: "Software Engineer",
    location: "Pune, India",
  },
  {
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
    quote: "I finally feel in control of my own story",
    description:
      "Growing up I was always told to follow a set path. This was the first time I chose my own…",
    name: "Ananya Rao",
    profession: "Product Designer",
    location: "Hyderabad, India",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    quote: "The community kept me accountable when motivation ran out",
    description:
      "Some weeks were harder than others, but having people check in on my progress made all the…",
    name: "Karthik Iyer",
    profession: "Entrepreneur",
    location: "Chennai, India",
  },
];

export default function Home13({
  heading = "Stories from India",
  stories = defaultStories,
  browseLabel = "Browse 25,000+ stories",
  browseHref = "#",
  autoScrollInterval = 4000,
}) {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const pauseAutoScroll = useRef(false);
  const resumeTimeout = useRef(null);

  const scrollToIndex = useCallback((index) => {
    const track = trackRef.current;
    const card = cardRefs.current[index];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  // Track which card is most in view -> updates active dot
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      let closest = 0;
      let closestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - trackCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll: advance to next card every `autoScrollInterval` ms,
  // pausing while the user is interacting (drag/touch/hover).
  useEffect(() => {
    if (!autoScrollInterval) return;
    const id = setInterval(() => {
      if (pauseAutoScroll.current) return;
      const next = (activeIndex + 1) % stories.length;
      scrollToIndex(next);
    }, autoScrollInterval);
    return () => clearInterval(id);
  }, [activeIndex, stories.length, autoScrollInterval, scrollToIndex]);

  const pauseThenResume = () => {
    pauseAutoScroll.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      pauseAutoScroll.current = false;
    }, autoScrollInterval);
  };

  // --- Drag-to-scroll (mouse) ---
  const onMouseDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    track.classList.add("stories-india-dragging");
    dragStartX.current = e.pageX;
    dragScrollLeft.current = track.scrollLeft;
    pauseThenResume();
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    e.preventDefault();
    const dx = e.pageX - dragStartX.current;
    track.scrollLeft = dragScrollLeft.current - dx;
  };

  const endDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    trackRef.current?.classList.remove("stories-india-dragging");
  };

  return (
    <section
      className="stories-india-section"
      onMouseEnter={() => (pauseAutoScroll.current = true)}
      onMouseLeave={() => (pauseAutoScroll.current = false)}
    >
     

      <h2 className="stories-india-heading">{heading}</h2>

      <div
        className="stories-india-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={pauseThenResume}
      >
        {stories.map((story, i) => (
          <div
            className="stories-india-card"
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <img
              className="stories-india-card-img"
              src={story.image}
              alt={story.name}
              draggable={false}
              loading="lazy"
            />
            <div className="stories-india-card-body">
              <p className="stories-india-quote">&quot;{story.quote}&quot;</p>
              <p className="stories-india-desc">
                {story.description}{" "}
                <button
                  type="button"
                  className="stories-india-readmore"
                  onClick={() => story.onReadMore?.(story)}
                >
                  Read more
                </button>
              </p>
              <p className="stories-india-name">{story.name}</p>
              <p className="stories-india-profession">{story.profession}</p>
              <p className="stories-india-location">{story.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="stories-india-dots">
        {stories.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to story ${i + 1}`}
            className={`stories-india-dot ${
              i === activeIndex ? "is-active" : ""
            }`}
            onClick={() => {
              pauseThenResume();
              scrollToIndex(i);
            }}
          />
        ))}
      </div>

      <a className="stories-india-browse" href={browseHref}>
        {browseLabel}
      </a>
    </section>
  );
}