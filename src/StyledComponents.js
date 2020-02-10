import styled, {keyframes} from "styled-components";
import background from "./assest/background.jpg";

const fontColor = "#174931";
const recipeTextColor = "#4e2068";
const backgroundColor = "#b9ceda";
const modalIconColor = "#b03248";
export const Header = styled.section`
  height: 4rem;
  width: 100%;
  background: ${backgroundColor};
  flex: 0 1 auto;
  :hover {
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.div`
  font-family: Chilanka;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 0;
  color: ${fontColor};
  opacity: 0.7;
`;

export const Content = styled.section`
  top: 4rem;
  bottom: 0;
  width 100%;
  height: calc(100vh - 4rem); 
  background-image:url(${background}); 
  background-image-width: 2000px;
  background-size: cover;
  flex: 1 1 auto;
  display: flex;
  height: 100%; 
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Nav = styled.section`
  margin: auto;
  padding: 10px;
  width 25rem;
  height: 100%;
  background: transparent;
`;

export const NavItem = styled.div`
  color: ${fontColor};
  font-family: Chilanka, Long Cang;
  margin: 1rem;
`;

export const NavText = styled.h3`
  display: inline-block;
  margin: 0;
  opacity: 0.7;
  :after {
    display: block;
    content: "";
    border-bottom: solid 1px ${fontColor};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  :hover {
    cursor: pointer;
    :after {
      transform: scaleX(1);
    }
  }
`;

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const IconWrapper = styled.span`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`;

export const RecipeModal = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const RecipeHeader = styled.div`
  width: 100%;
  font-family: Chilanka, Long Cang;
  font-size: 2rem;
  text-align: center;
  padding-top: 1rem;
  position: sticky;
  top: 0;
  z-index:1
  color: ${recipeTextColor};
  background: #fff;
  box-shadow: 0px 1px 3px 1.5px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  bottom: 1rem;
  width: 5rem;
  height: 2.5rem;
  position: relative;
  left: 50%;
  margin-left: -2.5rem;
  color: ${modalIconColor};
  background-color: #fff;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 3px;
  :hover {
    cursor: pointer;
    border-color: ${modalIconColor};
  }
`;

export const Ingredient = styled.span`
  text-decoration: none;
  color: ${recipeTextColor};
  font-family: Chilanka, Long Cang;
  display: inline-block;
  :hover {
    color: #3a6820;
    cursor: pointer;
  }
`;

export const RecipeContent = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const LinkIconWrpper = styled.a`
  color: rgb(0, 0, 0, 0.4);
  text-align: center;
  display: block;
  cursor: pointer;
  :hover {
    color: ${modalIconColor};
  }
`;

export const PicWrapper = styled.div`
  margin: auto;
  position: relative;
  top: 2rem;
  opacity: 0.8;
  border-radius: 1rem;
  width: 270px;
  height: 162px;
  overflow: hidden;
`;

export const CatIcon = styled.span`
  display: block;
  color: ${modalIconColor};
  text-align: center;
  position: relative;
  margin: 2rem;
  opacity: 0.8;
`;

export const CheckMarkIconWrapper = styled.span`
  color: #247e6f;
`;

export const IngredientItemWrapper = styled.div`
  text-align: center;
`;
