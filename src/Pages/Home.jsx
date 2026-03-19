import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import MyProjects from "../components/MyProjects";
import MySkills from "../components/MySkills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home({ theme, setTheme }) {
  return (
    <>
      <section id="header">
        <Header theme={theme} setTheme={setTheme} />
      </section>
      <section id="about">
        <AboutMe theme={theme} setTheme={setTheme} />
      </section>
      <section id="skills">
        <MySkills theme={theme} setTheme={setTheme} />
      </section>
      <section id="projects">
        <MyProjects theme={theme} setTheme={setTheme} />
      </section>
      <section id="contact">
        <Contact theme={theme} setTheme={setTheme} />
      </section>
      <section id="footer">
        <Footer theme={theme} setTheme={setTheme} />
      </section>
    </>
  );
}

export default Home;
