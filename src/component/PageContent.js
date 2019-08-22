import React, {Component} from "react";
import {connect} from "react-redux";
import {Content, Nav, NavItem, NavText, IconWrapper} from "../StyledComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/free-solid-svg-icons";
import {showModal, hideModal} from "../redux/actions";

class PageContent extends Component {
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

  handleViewRecipe = () => {
    this.props.showModal(
      {
        open: true,
        hideModal
      },
      "RECIPE"
    );
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
                onClick={this.handleViewRecipe}
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

export default connect(
  null,
  {showModal, hideModal}
)(PageContent);
