import React, {Component} from "react";
import {RecipeModal, CloseButton} from "../../StyledComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

export class Recipe extends Component {
  handleClick = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <RecipeModal>
        <CloseButton>
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="2x"
            onClick={this.handleClick}
          />
        </CloseButton>
      </RecipeModal>
    );
  }
}
