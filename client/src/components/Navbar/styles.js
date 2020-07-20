import styled from 'styled-components';

const navHeight = "10vh";

export const Container = styled.div`
  display: flex;
  
  box-sizing: border-box;
  width: 100%;
  
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

    .nav-btn, .user-btn {
      cursor: pointer;
      outline: none;
    }

    .nav-btn:focus {
      color: var(--golden);
    }

    .user-btn {
      &:hover .circle, &:focus .circle {
        box-shadow: 0px 0px 0px 5px #ffffff28;
      }
  
      .circle { 
        display: inline-block;
        z-index: 2;
        background: orange; 
        width: 40px; 
        height: 40px; 
        border-radius: 50%;
      }
    }

    .dropdown {
      display: flex;

      visibility: hidden;

      position: absolute;
      top: ${navHeight};
      right: 0;

      background-color: black;
      margin-top: -.5em;
      margin-right: .5em;

      &.visible { visibility: visible; }

      a, button { z-index: 2; }

      &#user-dropdown {
        flex-direction: column;
        a, button {
          text-align: right; 
          padding: .5em 1.5em;
        }
      }
      
      &#nav-dropdown {
        flex-wrap: wrap;
        align-items: center;
        width: 80vw;
        a,  button {
          box-sizing: border-box;
          width: calc(100% / 3);
          text-align: center;
          margin: .5em auto;
          ion-icon { display: block; margin: 0 auto; font-size: 1.5em; }
          &:hover ion-icon, &:focus ion-icon { color: var(--golden); }
        }

      }
      
    }
    
  }

  @media screen and (min-width: 721px){
    .profile .dropdown#nav-dropdown { width: 300px; }
  }
`;
