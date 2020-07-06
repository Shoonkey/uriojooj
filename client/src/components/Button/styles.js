import styled from 'styled-components';

const styles = {
  primary: {
    bgColor: "var(--primary)",
    color: "black"
  }
}

export const Container = styled.button`
  font-family: Saira;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => styles[props.theme].bgColor};
  color: ${props => styles[props.theme].color};
  padding: 4px 8px;
  border: none;

  &:hover {
    background-color: #F84C4C;
  }
`;
