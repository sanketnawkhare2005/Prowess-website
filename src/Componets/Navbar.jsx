// import { useState } from "react";
// import "./Navbar.css";

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Why Prowess Exists", href: "/prowessexists" },
//   { label: "The Prowess Method", href: "/prowess" },
//   { label: "Performance Coaches", href: "/coaches" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState("Home");

//   return (
//     <header className="navbar">
//       <div className="navbar-logo">
//         {/* Replace with later */}
//         <img src="/images/ChatImage4.png" alt="Prowess"className="navbar-image-wh" /> 
//         {/* <div className="logo-text">
//           <span className="logo-pro">PRO</span>
//           <span className="logo-wess">WESS</span>
//         </div>
//         <div className="logo-tagline">Grow&nbsp;&nbsp;Lead&nbsp;&nbsp;Succeed</div> */}
//       </div>

//       <button
//         className="nav-toggle"
//         onClick={() => setMenuOpen((prev) => !prev)}
//         aria-label="Toggle navigation menu"
//       >
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </button>

//       <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
//         {navItems.map((item) => (
//           <li key={item.label}>
//             <a
//               href={item.href}
//               className={active === item.label ? "active" : ""}
//               onClick={() => {
//                 setActive(item.label);
//                 setMenuOpen(false);
//               }}
//             >
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ul>

//       <a href="#" className="btn-coach">
//         TALK TO A COACH
//       </a>
//     </header>
//   );
// }







import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import TalkFormNewPopup from "../Pages/TalkFormNewPopup/TalkFormNewPopup";



// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Why Prowess Exists", href: "/prowessexists" },
//   { label: "The Prowess Method", href: "/prowessmethods" },
//   { label: "Performance Coaches", href: "/prowesscoaches" },
//   { label: "Contact", href: "/contact" },
// ];

const navItems = [
  { label: "Home", to: "/" },
  { label: "Why Prowess Exists", to: "/prowessexists" },
  { label: "The Prowess Method", to: "/prowessmethods" },
  { label: "Performance Coaches", to: "/prowesscoaches" },
  { label: "Performance Stories", to: "/performstory" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTalkToCoach = () => {
  navigate("/contact#contact1");
};

  return (
    <header className="prowss-nav">
      <div className="prowss-nav-logo">
        <img
          src="/images/ChatImage1.png"
          alt="Prowess"
          className="prowss-nav-logo-img"
        />
      </div>

      <button
        className="prowss-nav-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        <span className="prowss-nav-bar"></span>
        <span className="prowss-nav-bar"></span>
        <span className="prowss-nav-bar"></span>
      </button>

      
    <ul className={`prowss-nav-links ${menuOpen ? "show" : ""}`}>
  {navItems.map((item) => (
    <li key={item.label}>
      <NavLink
        to={item.to}
        end={item.to === "/"}
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </NavLink>
    </li>
  ))}

  <li className="prowss-nav-cta-item prowss-nav-cta-mobile">
    {/* <button
      type="button"
      className="prowss-nav-cta"
      onClick={() => {
        setMenuOpen(false);
        setIsPopupOpen(true);
      }}
    >
      TALK TO A COACH
    </button> */}

    <button
  type="button"
  className="prowss-nav-cta"
  onClick={() => {
    setMenuOpen(false);
    handleTalkToCoach();
  }}
>
  TALK TO A COACH
</button>
  </li>
</ul>

    

{/* Sirf DESKTOP ke liye — ul ke bahar, header ka direct child */}
{/* <a href="#" className="prowss-nav-cta prowss-nav-cta-desktop">
  TALK TO A COACH
</a> */}

{/* <button type="button" className="prowss-nav-cta prowss-nav-cta-desktop" onClick={() => setIsPopupOpen(true)}>
  TALK TO A COACH
</button> */}

<button
  type="button"
  className="prowss-nav-cta prowss-nav-cta-desktop"
  onClick={handleTalkToCoach}
>
  TALK TO A COACH
</button>

<TalkFormNewPopup
      isOpen={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
    />
    </header>
  );
}