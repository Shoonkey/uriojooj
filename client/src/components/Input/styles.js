import styled from 'styled-components';
  
const marginTop = "1.3em";

export const Container = styled.div`
  position: relative;
  
  &.input-active label {
    transform: translate(-10%, calc(-${marginTop} - 8px)) scale(.8);
  }

  label {
    position: absolute;
    top: calc(${marginTop} + 4px);
    left: 0;

    padding: 4px 0 4px 4px;
    font-size: .8em;

    transition: transform .2s;
    pointer-events: none;
  }

  input {
    box-sizing: border-box;
    background: #121212;
    font-family: Saira;
    color: var(--light-grey);
    border: solid 1px var(--light-grey);
    margin-top: ${marginTop};
    padding: 4px;
    width: 100%;
  }
`;
