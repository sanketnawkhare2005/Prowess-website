import { Link } from "react-router-dom";
import "./Footer.css";

// const quickLinks = [
//   { label: "Home", href: "#" },
//   { label: "Why Prowess Exists", href: "" },
//   { label: "The Prowess Method", href: "#" },
//   { label: "Performance Coaches", href: "#" },
//   { label: "Contact", href: "#" },
// ];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Why Prowess Exists", to: "/prowessexists" },
  { label: "The Prowess Method", to: "/prowessmethods" },
  { label: "Performance Coaches", to: "/prowesscoaches" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-col brand">
          {/* Replace with later */}
          <img src="/images/ChatImage1.png" alt="Prowess" className="profoot-logo-img"/>
          {/* <div className="logo-text">
            <span className="logo-pro">PRO</span>
            <span className="logo-wess">WESS</span>
          </div>
          <div className="footer-logo-tagline">Grow&nbsp;&nbsp;Lead&nbsp;&nbsp;Succeed</div> */}
          <p className="footer-desc">
            Prowess develops real world performance through practice,
            feedback and continuous improvement.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <div className="footer-heading">Quick Links</div>
          {/* <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul> */}
          <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="footer-col">
          <div className="footer-heading">Connect With Us</div>
          <div className="social-icons">
            {/* <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a> */}
            <a
  href="https://www.instagram.com/prowess.co.in/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <i className="fa-brands fa-instagram"></i>
</a>
            {/* <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a> */}
            
            {/* <a href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </a> */}
            <a
  href="https://www.youtube.com/@prowess110"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="YouTube"
>
  <i className="fa-brands fa-youtube"></i>
</a>
            {/* <a href="#" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a> */}
            <a
  href="mailto:connect@prowess.training"
  aria-label="Email"
>
  <i className="fa-solid fa-envelope"></i>
</a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="footer-col">
          <div className="footer-heading">Contact Us</div>
          <ul className="contact-list">
            <li>
              <i className="fa-solid fa-phone"></i> +91 86000 54060
            </li>

            <li>
              <i className="fa-solid fa-phone"></i> +91 93094 07950
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i> connect@prowess.training
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i> Plot no 2, Patil Layout, Indraprastha Nagar, Swavalambi Nagar, Nagpur, Maharashtra 440025
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2025 Prowess. All rights reserved.</div>
        <div className="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}