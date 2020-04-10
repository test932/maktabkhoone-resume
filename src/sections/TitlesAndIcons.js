import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class TitlesAndIcons extends Component {
  constructor() {
    super();
    this.state = {
      color: "white",
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white",
    });
  };

  render() {
    return (
      <div>
        <Element name="title" className="element"></Element>
        <Fullpage className="first">
          <h1
            className="title"
            style={{ color: this.state.color }}
            onMouseOver={this.changeColor}
            onMouseLeave={() => this.changeColor()}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key) => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
          <Link
            className="to_hand"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <div className="downBottom">
              <DownIcon icon={data.icon.down} />
            </div>
          </Link>
        </Fullpage>
        <Element name="about" className="element"></Element>
      </div>
    );
  }
}
export default TitlesAndIcons;
