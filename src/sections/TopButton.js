import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./TitlesAndIcons.js";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";


class TopButton extends Component {
  constructor() {
    super();
    this.state = {
        is_visible: false
      };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }


  render() {
    const { is_visible } = this.state;
    return (
      <nav class="navBotoom ">
        <div class="menu">
          <div class="menu_item inline to_hand">
          <Link
            className="to_hand"
            activeClass="active"
            to="title"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            {is_visible && <div>TOP</div>}
          </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default TopButton;
