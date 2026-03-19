import "./Header.css";
function Header({ theme}) {
  const scrollToContact = () => {
    const contactSenction = document.getElementById("contact");
    if (contactSenction) {
      contactSenction.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="container">
        <div className="left-box">
          <div className="header-content-animation">
            <h5>Hello!</h5>
            <h3>I'm Hamed Rayan</h3>
            <p>
              I’m a Frontend Web Developer focused on building clean, efficient,
              and user-friendly websites.
            </p>
          </div>
          <div className={`btn2-box ${theme}`}>
            <button className="buttons">
              <i className="fa-solid fa-download"></i>Download cv
            </button>
            <button className="buttons" onClick={scrollToContact}>
              <i className="fa-solid fa-message"></i>
              Contact me
            </button>
          </div>
          <div className={`icons ${theme}`}>
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
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="right-box">
          <img
            src="images/hamed5.png"
            alt=""
            className="header-img-animation"
          />
        </div>
      </div>
      <div className="scroll-down"></div>
    </>
  );
}

export default Header;
