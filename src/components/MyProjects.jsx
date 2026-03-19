import "./MyProjects.css";
import ProjectData from "./MyProjects.json";
function MyProjects({ theme, setTheme }) {
  return (
    <>
      <div className="projects">
        <h3 className={theme}>
          My <span>Projects</span>
        </h3>
        <p className="prgp">A showcase of my recent works</p>
        <div className="underline"></div>

        <div className="cards">
          {ProjectData.map((data, index) => {
            return (
              <div className="Card" key={index}>
                <img src={data.img} className={`card-Img ${theme}`} alt="" />
                <div>
                  <div className={`card-title ${theme}`}>{data.name}</div>
                  <div className={`card-body ${theme}`}>{data.description}</div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <button
                    className="btn"
                    style={{ backgroundColor: data.bgcolor, color: data.color }}
                  >
                    go to page
                  </button>
                  <a
                    href={data.githubLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github github"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyProjects;
