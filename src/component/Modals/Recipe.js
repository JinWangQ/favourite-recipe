import React, {Component} from "react";
import {
  RecipeModal,
  CloseButton,
  Ingredient,
  RecipeHeader,
  RecipeContent
} from "../../StyledComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIceCream} from "@fortawesome/free-solid-svg-icons";

export class Recipe extends Component {
  handleClick = () => {
    this.props.closeModal();
  };
  render() {
    const {recipe} = this.props;
    return (
      <RecipeModal>
        <RecipeHeader>{recipe.title}</RecipeHeader>
        <RecipeContent>
          {recipe.recipe.map(ingredient => (
            <Ingredient key={ingredient}>{ingredient}</Ingredient>
          ))}
        </RecipeContent>
        <CloseButton onClick={this.handleClick}>
          <FontAwesomeIcon icon={faIceCream} size="2x" />
        </CloseButton>
      </RecipeModal>
    );
  }
}
