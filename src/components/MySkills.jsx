import MySkillsData from "./MySkillData.json";
import "./MySkills.css";
function MySkills({ theme, setTheme }) {
  return (
    <>
      <div>
        <h2 className={`heading2 ${theme}`}>
          My <span>Skills</span>
        </h2>
        <p className="p">
          Technologies and tools that I work with to create amazing web
          experiences
        </p>

        <div className="skills-grid">
          {MySkillsData.map((skill, index) => {
            return (
              <div key={index} className="card">
                <div className="card-header">
                  <img src={skill.img} alt="" />
                  <h2 className="heading2-1">{skill.name}</h2>
                </div>
                <div
                  className="card-body"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p style={{ color: "#fff" }}>Proficiency</p>
                  <span style={{ color: "#fff" }}>{skill.percent}%</span>
                </div>

                <div className="bar-background">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${skill.percent}%`,
                      backgroundColor: skill.color,
                      height: "8px",
                    }}
                  ></div>
                </div>
                <hr />
                <div className="card-footer"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MySkills;
