import "./AboutMe.css";
function AboutMe({ theme}) {
  return (
    <>
      <div className={`container2 ${theme}`}>
        <h2 className="autscale">About Me</h2>
        <div className={`left-div ${theme}`}>
          <img src="images/hamed5.png" alt="" className="myImages" />
        </div>
        <div className={`right-div ${theme}`}>
          <p className="info autscale">
            I'm a Passionate Front-End Web Developer with a
            strong focus on creating clean, responsive, and user-friendly
            websites. I enjoy turning ideas into interactive web experiences
            using HTML, CSS, JavaScript, and React. I’m constantly learning new
            technologies to improve my skills and deliver high-quality projects.
            My goal is to build websites that are not only functional but also
            visually engaging.
          </p>
          <div className={`ps  ${theme}`}>
            <p>
              <span>5+</span>Education
            </p>
            <p>
              <span>2+</span>years Experience
            </p>
            <p>
              <span>10+</span>Projects Completed
            </p>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
