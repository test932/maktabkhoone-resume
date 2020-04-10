import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./AboutSection.css";
import DownIcon from "../components/DownIcon";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <div className="aboutTitle">
            <h3>{data.section[0].title}</h3>
          </div>
          <div className="paragraphs">
            {data.section[0].items.map((p) => {
              return (
                <div className="textContent">
                  <p>{p.content}</p>
                </div>
              );
            })}
          </div>
          <Link
            className="to_hand"
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <DownIcon icon={data.icon.down} />
          </Link>
        </Fullpage>
        <Element name="skill" className="element"></Element>
      </div>
    );
  }
}
export default AboutSection;
