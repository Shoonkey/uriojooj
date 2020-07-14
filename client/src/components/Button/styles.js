import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  primary: {
    bgColor: "var(--primary)",
    color: "black"
  }
}

const rules = props => `
  font-family: Saira;
  font-weight: bold;
  cursor: pointer;
  background-color: ${styles[props.theme].bgColor};
  color: ${styles[props.theme].color};
  padding: 4px 8px;
  border: none;

  &:hover {
    background-color: #F84C4C;
  }
`;

export const ButtonContainer = styled.button(rules);
export const LinkContainer = styled(Link)(rules);
