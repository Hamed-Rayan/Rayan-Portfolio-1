import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  useEffect(() => {
    localStorage.setItem("current_theme", theme);
  }, [theme]);
  return (
    <div className={`body ${theme}`}>
      <section id="nav">
        <Nav theme={theme} setTheme={setTheme} />
      </section>
      <Home theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
