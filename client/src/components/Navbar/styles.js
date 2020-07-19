import styled from 'styled-components';

const navHeight = "10vh";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 0 1em;

  background: #222222; 
  height: ${navHeight};

  a { text-decoration: none; }

  .logo {
    display: block;
    font-family: Righteous;
    font-size: 3em;
    color: var(--primary);
    transition: transform .4s;
    &:hover {
      transform: translateX(8px);
    }
  }

  .profile {
    display: flex;
    align-items: center;

    cursor: pointer;

    .circle { 
      display: inline-block;
      margin-right: 1em;
      background: orange; 
      width: 40px; 
      height: 40px; 
      border-radius: 50%;
    }

    .dropdown {
      display: flex;
      flex-direction: column;

      position: absolute;
      top: ${navHeight};
      right: 0;

      background-color: black;
      margin-top: -.5em;
      margin-right: .5em;

      a, button { 
        text-align: right; 
        padding: .5em 1.5em;
      }
      
    }

    .dropdown-btn:hover { 
      cursor: pointer;
    }
  }
`;
