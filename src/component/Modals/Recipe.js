import React, {Component} from "react";
import {
  RecipeModal,
  CloseButton,
  Ingredient,
  RecipeHeader,
  RecipeContent,
  LinkIconWrpper
} from "../../StyledComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIceCream} from "@fortawesome/free-solid-svg-icons";
import {faYoutube, faWeibo} from "@fortawesome/free-brands-svg-icons";

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
          {recipe.ingredients.map(ingredient => (
            <Ingredient key={ingredient}>{ingredient}</Ingredient>
          ))}
          {recipe.recipe &&
            recipe.recipe.length &&
            recipe.recipe.map(source => (
              <Source
                source={Object.keys(source)[0]}
                link={Object.values(source)[0]}
                key={Object.keys(source)[0]}
              />
            ))}
        </RecipeContent>
        <CloseButton onClick={this.handleClick}>
          <FontAwesomeIcon icon={faIceCream} size="2x" />
        </CloseButton>
      </RecipeModal>
    );
  }
}

class Source extends Component {
  getIcon = () => {
    switch (this.props.source) {
      case "youtube":
        return faYoutube;
      case "weibo":
        return faWeibo;
      default:
        throw new Error(`Unsupport source type: ${this.props.source}`);
    }
  };

  render() {
    return (
      <LinkIconWrpper href={this.props.link} target="_blank">
        <FontAwesomeIcon icon={this.getIcon()} size="1x" />
      </LinkIconWrpper>
    );
  }
}
