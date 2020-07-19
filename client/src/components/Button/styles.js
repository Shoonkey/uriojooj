import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  primary: {
    bgColor: "var(--primary)",
    color: "black",
    hover: {
      bgColor: "#F84C4C",
      color: "black"
    }
  },
  discreet: {
    bgColor: "transparent",
    color: "var(--light-grey)",
    hover: {
      bgColor: "transparent",
      color: "grey"
    }
  }
}

const rules = props => `
  font-family: Saira;
  font-weight: bold;
  font-size: 1em;
  cursor: pointer;
  background-color: ${styles[props.theme].bgColor};
  color: ${styles[props.theme].color};
  padding: 4px 8px;
  border: none;

  &:hover {
    background-color: ${styles[props.theme].hover.bgColor};
    color: ${styles[props.theme].hover.color};
  }
`;

export const ButtonContainer = styled.button(rules);
export const LinkContainer = styled(Link)(rules);
