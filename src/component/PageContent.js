import React, {Component} from "react";
import {connect} from "react-redux";
import {Content, Nav, NavItem, NavText, IconWrapper} from "../StyledComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/free-solid-svg-icons";
import {showModal, hideModal} from "../redux/actions";
import {getCat} from "../scripts/axios";

class PageContent extends Component {
  render() {
    const {recipes} = this.props;
    return (
      <Content>
        <Nav>
          {recipes.map(recipe => (
            <NavItemRecipe
              key={recipe.id}
              recipe={recipe}
              recipes={this.props.recipes}
              showModal={this.props.showModal}
              hideModal={this.props.hideModal}
            />
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

class NavItemRecipe extends Component {
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

  handleViewRecipe = async () => {
    const {recipe} = this.props;
    const url = `https://api.thecatapi.com/v1/images/search`;
    const cat = await getCat(url);
    this.props.showModal(
      {
        open: true,
        recipe,
        hideModal,
        cat
      },
      "RECIPE"
    );
  };
  render() {
    const {recipe} = this.props;
    return (
      <NavItem>
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
    );
  }
}
