import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import SkillCard from "../components/SkillCard";

class SkillSection extends Component {
  render() {
    return (
      <Fullpage className="third">
        <div className="column">
          <h3>{data.section[1].title}</h3>
          <div className="card-wrapper">
            {data.section[1].items.map((eachSkill) => {
              return <SkillCard skill={eachSkill} />;
            })}
          </div>
        </div>
      </Fullpage>
    );
  }
}
export default SkillSection;
