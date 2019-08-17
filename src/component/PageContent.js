import React, {Component} from "react";
import {Content, Nav, NavItem, NavText, IconWrapper} from "../StyledComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/free-solid-svg-icons";

export class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotate: false
    };
  }
  onMouseEnterOrLeave = () => {
    this.setState({
      rotate: !this.state.rotate
    });
  };
  render() {
    const recipes = require("../data/deserts.json");
    return (
      <Content>
        <Nav>
          {recipes.map(recipe => (
            <NavItem key={recipe.id}>
              {this.state.rotate ? (
                <IconWrapper>
                  <FontAwesomeIcon icon={faGem} size="xs" />
                </IconWrapper>
              ) : (
                <FontAwesomeIcon icon={faGem} size="xs" />
              )}{" "}
              <NavText
                onMouseEnter={this.onMouseEnterOrLeave}
                onMouseLeave={this.onMouseEnterOrLeave}
              >
                {recipe.title}
              </NavText>
            </NavItem>
          ))}
        </Nav>
      </Content>
    );
  }
}
