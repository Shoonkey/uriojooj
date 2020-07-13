import styled from 'styled-components';

import { Container as Input } from '../../components/Input/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: var(--dark-grey);
  color: var(--light-grey);

  .logo {
    font-family: Saira;
    font-size: 3em;
    text-align: right;

    span {
      
      position: relative;

      &:not(.highlighted){
        top: -0.85em;
        padding: 0 4px;
      }

      &.highlighted {
        display: block;
        font-family: Righteous;
        font-size: 3em;
        color: var(--primary);
      }

      

    }
  }

  .form-container {
    display: flex;
    align-items: center;

    width: min(400px, 90%);

    background: #222222;

    form, .no-type-defined { margin: 3em auto; }

    .no-type-defined button { display: block; }

    form {

      button { margin-top: 1em; }
      &, ${Input}, .btn-group, .extra { width: max(200px, 50%); }

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

  @media screen and (min-width: 721px){
    flex-direction: row;
    padding: 0 1em;

    .logo { 
      margin-right: 2em; 
      span { 
        display: block; 

        /* compensation for the "jooj" so that it aligns properly when stacked */
        /* would be necessary if there were more lines, because of the way font is rendered */ 
        &:nth-child(3){ top: -1.50em; }
      }

    }

    .form-container {

      width: 60vh;
      height: 60vh;

      form, .no-type-defined { 
        width: 100%;
        padding: 3em;
        margin-left: 1rem;
      }

    }
    
  }
`;
