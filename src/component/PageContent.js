import React, {Component} from "react";
import {connect} from "react-redux";
import {Content, Nav, NavItem, NavText, IconWrapper} from "../StyledComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGem} from "@fortawesome/free-solid-svg-icons";
import {showModal, hideModal} from "../redux/actions";
import {getCat} from "../scripts/axios";
import PropTypes from "prop-types";

class PageContent extends Component {
  render() {
    const {recipes, showModal, hideModal} = this.props;
    return (
      <Content>
        <Nav>
          {recipes.map(recipe => (
            <NavItemRecipe
              key={recipe.id}
              recipe={recipe}
              recipes={recipes}
              showModal={showModal}
              hideModal={hideModal}
            />
          ))}
        </Nav>
      </Content>
    );
  }
}

PageContent.propTypes = {
  recipes: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

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
    const {recipe, showModal} = this.props;
    const url = `https://api.thecatapi.com/v1/images/search`;
    const cat = await getCat(url);
    showModal(
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

NavItemRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};
