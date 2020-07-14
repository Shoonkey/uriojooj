import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1em;

  background: #222222; 
  height: 10vh;

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

    &:hover ion-icon { 
      cursor: pointer; 
      color: grey; 
    }
  }
`;
