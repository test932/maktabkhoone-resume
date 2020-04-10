import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "../sections/TitlesAndIcons.js";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class TopMenu extends Component {

  constructor() {
    super();
    this.changeColor = this.changeColor.bind(this);
    this.iterator=data.initTheme;
    document.body.style = data.theme[0].back;
  }
 

  changeColor = () => {

    if(this.iterator < 4){
      this.iterator++;
    }else{
      this.iterator = 0
    }
    document.body.style = data.theme[this.iterator].back;
  };

  render() {
    return (
      <nav class="navTop">
        <div class="menu">
          <div
            class="menu_item inline left_menu to_hand"
            onClick={this.changeColor}
          >
            {data.menu.menu_item_change_color}
          </div>
          <div class="menu_item inline to_hand">
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
              {data.menu.menu_item_About}
            </Link>
          </div>
          <div class="menu_item inline to_hand">
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
              {data.menu.menu_item_Portfolio}
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default TopMenu;
