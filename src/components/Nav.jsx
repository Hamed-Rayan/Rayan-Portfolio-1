import "./Nav.css";
import moon from "../../src/assets/moon.png";
import sun from "../../src/assets/sun.png";
import lightMenu from "../../public/images/lightMenu.png";
import darkMenu from "../../public/images/darkMenu.png";
import { useState } from "react";
function Nav({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggle_mode() {
    theme == "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <>
      <div className="nav">
        <div className={`nav-box ${theme}`}>
          <span>Portfolio</span>

          <ul className={`navlink ${isMenuOpen ? "active" : ""} ${theme}`}>
            <li
              className="links"
              onClick={() => {
                document
                  .getElementById("header")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </li>
            <li
              className="links"
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </li>
            <li
              className="links"
              onClick={() => {
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </li>
            <li
              className="links"
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </li>
            <li
              className="links"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </li>
          </ul>

          <img
            onClick={() => toggle_mode()}
            src={theme == "light" ? sun : moon}
            alt=""
            className="lightDarkIcons"
          />
          <a
            href="https://wa.me/93771865332?text=Hi Rayan"
            target="_blank"
            rel="noopener noreferrer"
            className="hire-btn"
          >
            Hire me
          </a>
          <img
            src={theme == "light" ? lightMenu : darkMenu}
            className="menu-icon"
            alt=""
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </>
  );
}

export default Nav;
