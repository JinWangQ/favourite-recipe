import styled, {keyframes} from "styled-components";

export const Header = styled.section`
  height: 4rem;
  width: 100%;
  background: #fedfe1;
  flex: 0 1 auto;
`;

export const HeaderTitle = styled.div`
  font-family: Kalam;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 0;
  color: #db4d6d;
  opacity: 0.7;
`;

export const Content = styled.section`
    top: 4rem;
    bottom: 0;
    width 100%;
    height: calc(100vh - 4rem); 
    background: #FEDFE1;;
    flex: 1 1 auto;
    display: flex;
`;

export const Nav = styled.section`
margin: auto;
padding: 10px;
  
    width 25rem;
    height: 100%;
    background: #FEDFE1;
    
`;

export const NavItem = styled.div`
  color: #d05a6e;
  font-family: Kalam, Zhi Mang Xing;
  margin: 1rem;
`;

export const NavText = styled.h3`
  display: inline-block;
  margin: 0;
  opacity: 0.7;
  :after {
    display: block;
    content: "";
    border-bottom: solid 1px #d05a6e;
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
`;

export const RecipeHeader = styled.div`
  width: 100%;

  font-family: Kalam, Zhi Mang Xing;
  text-align: center;
  top: 1rem;
  position: relative;
  color: rgb(0, 0, 0, 0.4);
`;

export const CloseButton = styled.button`
bottom: 1rem;
width: 5rem;
height: 2.5rem;
position: absolute;
left: 50%;
margin-left: -2.5rem;
  color: rgb(204, 204, 204);

  border: 1px solid  rgb(204, 204, 204);
  border-radius: 3px
  opacity: 0.5;
  :hover {
    cursor: pointer;
    color: #d05a6e;
    border-color: #d05a6e;
  }
`;

export const Ingredient = styled.span`
  text-align: center;
  text-decoration: none;
  color: rgb(0, 0, 0, 0.4);
  font-family: Kalam, Zhi Mang Xing;
  display: block;
  :hover {
    color: #d05a6e;
  }
`;

export const RecipeContent = styled.div`
  position: relative;
  margin-top: 3rem;
`;

export const LinkIconWrpper = styled.a`
  color: rgb(0, 0, 0, 0.4);
  text-align: center;
  display: block;
  :hover {
    color: #d05a6e;
    curser: pointer;
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
  color: #d05a6e;
  text-align: center;
  position: relative;
  margin: 2rem;
  opacity: 0.8;
`;
