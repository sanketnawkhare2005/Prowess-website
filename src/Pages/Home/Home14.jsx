import React, { useState } from "react";
import "./Home14.css";

const defaultFaqs = [
  {
    question: "What does Mindvalley do?",
    answer:
      "Mindvalley creates transformational learning programs and a personal growth platform that helps people improve their mind, body, relationships, and career through expert-led quests and courses.",
  },
  {
    question: "How much does the Mindvalley app cost?",
    answer:
      "Mindvalley offers a free tier with limited access, while the full membership unlocks all quests, courses, and features for a monthly or annual subscription fee.",
  },
  {
    question: "How much does Mindvalley cost?",
    answer:
      "Pricing varies by plan and any ongoing offers. Check the current pricing page on mindvalley.com for the most up-to-date membership rates.",
  },
  {
    question: "What does Mindvalley Membership get you?",
    answer:
      "Membership gives you unlimited access to all Mindvalley quests, masterclasses, community events, and new programs as they launch.",
  },
  {
    question: "Which Mindvalley program is best?",
    answer:
      "The best program depends on your goals — whether that's mindset, career, relationships, or health. Mindvalley's quiz can help match you with the right starting program.",
  },
  {
    question: "Who is CEO of Mindvalley?",
    answer:
      "Vishen Lakhiani is the founder and CEO of Mindvalley.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="faq-pro-item">
      <button
        type="button"
        className="faq-pro-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq-pro-icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
        <span className="faq-pro-question-text">{item.question}</span>
      </button>
      <div
        className="faq-pro-answer-wrap"
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <p className="faq-pro-answer">{item.answer}</p>
      </div>
    </div>
  );
}

export default function Home14({
  heading = (
    <>
      Frequently asked
      <br />
      questions
    </>
  ),
  description = (
    <>
      Browse answers to the frequently asked questions. Need more help?
      Reach out to us at our Support Centre{" "}
      <a href="https://support.mindvalley.com">
        https://support.mindvalley.com
      </a>{" "}
      and we&apos;ll get back to you ASAP.
    </>
  ),
  faqs = defaultFaqs,
  defaultOpenIndex = null,
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const handleToggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="faq-pro-section">
    
      <div className="faq-pro-grid">
        <div className="faq-pro-left">
          <h2 className="faq-pro-heading">{heading}</h2>
          <p className="faq-pro-desc">{description}</p>
        </div>

        <div className="faq-pro-right">
          {faqs.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}