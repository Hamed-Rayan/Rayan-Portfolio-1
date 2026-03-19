import React from "react";
import "./Footer.css";

function Footer({ theme, setTheme }) {
  return (
    <div className="footer">
      <div className={`footer-div1 ${theme}`}>
        <h5>
          <div>c</div>2026 portfolio. All rights reserved
        </h5>
        <div className={`social-links ${theme}`}>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/93764156778?text=Hi Rayan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a
            href="https://t.me/Hamed_Rayan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <div>
        <ul className={`footer-ul ${theme}`}>
          <li>
            <a href="#nav" className="">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
