import React from "react";

import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";
import "./App.css";
import TopMenu from "./sections/TopMenu";
import TopButton from "./sections/TopButton";

function App() {
  return (

    <div className="App">
    <Snowfall style={{position: "fixed"}}/>
    <TopMenu />
    <TitlesAndIcons />
    <AboutSection />
    <SkillSection />
    <TopButton />

  </div>
  )
}
export default App;
