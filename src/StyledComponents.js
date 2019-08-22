import styled, {keyframes} from "styled-components";

export const Header = styled.section`
  height: 4rem;
  width: 100%;
  background: #fedfe1;
  flex: 0 1 auto;
`;

export const HeaderTitle = styled.div`
  font-family: cursive;
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
width: 50%;
padding: 10px;
  
    width 20rem;
    height: 100%;
    background: #FEDFE1;
    
`;

export const NavItem = styled.div`
  color: #d05a6e;
  font-family: cursive;
  margin: 1rem;
`;

export const NavText = styled.h5`
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

export const CloseButton = styled.span`
  color: #d05a6e;
  float: right;
  margin-right: 1rem;
  margin-top: 1rem;
  opacity: 0.5;
`;
