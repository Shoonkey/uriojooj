import styled from 'styled-components';

import { Container as Input } from '../../components/Input/styles';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--dark-grey);
  color: var(--light-grey);
  
  .logo {
    font-family: Saira;
    font-size: 3em;
    text-align: right;
    margin-right: 2em;

    span {

      display: block;
      position: relative;

      &.highlighted {
        font-family: Righteous;
        font-size: 3em;
        color: var(--primary);
      }

      &:nth-child(2){ top: -0.85em; }
      &:nth-child(3){ top: -1.50em; }

    }
  }

  .form-container {
    display: flex;
    align-items: center;

    width: 60vh;
    height: 60vh;
    background: #222222;

    form, .no-type-defined { padding-left: 4em; }

    .no-type-defined button { display: block; }

    form {
      /* width: 100%; */
      padding-left: 4em;

      button { margin-top: 1em; }
      ${Input}, .btn-group, .extra { width: max(200px, 50%); }

      .btn-group {
        display: flex;
        .social { 
          display: inline-block; 
          margin-left: auto;
          button { margin-left: 4px; }
        }
      }

      ion-icon { 
        vertical-align: middle; 
        font-size: 1.4em;
      }

      .extra { text-align: center; }

    }

  }
`;
