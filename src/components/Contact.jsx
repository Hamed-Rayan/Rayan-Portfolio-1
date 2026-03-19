import emailjs from "emailjs-com";
import { useRef } from "react";
import "./Contact.css";
emailjs.init("MZMPE0LmpUi5ViuWT");
function Contact({ theme, setTheme }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_0lkecgj", "template_p3urdtn", form.current).then(
      (result) => {
        console.log(result.text);
        alert("message sent successfully");
      },
      (error) => {
        console.log(error.text);
        alert("failed to send message");
      },
    );
    e.target.reset();
  };

  return (
    <div className="contact ">
      <h2 className={`heading-two ${theme}`}>
        Get In <span>Touch</span>
      </h2>
      <div className="parent">
        <div className="l-div">
          <h3>Let's chat.</h3>
          <h3>Tell me about your project.</h3>
          <p>Let's create something together</p>
          <div className="mail-div">
            <div className="mail-icon">
              <i className="fa-solid fa-message"></i>
            </div>{" "}
            <h5>
              Mail me at
              <a href="hamedrayan7676@gmail.com">hamedrayan7676@gmail.com</a>
            </h5>
          </div>
        </div>
        <div className={`r-div ${theme}`}>
          <h2>Send me a message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user-name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user-email"
              placeholder="Your Email"
              required
            />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" placeholder="Your message" required />
            <button type="submit">send message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
