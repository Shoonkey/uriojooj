import styled from 'styled-components';

import { Container as CircularProgress } from '../../components/CircularProgress/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-family: Saira;

  color: var(--light-grey);

  min-height: 100vh;

  background: var(--dark-grey);

  .content { 
    background: #222222; 
    flex-grow: 1;
    margin: 2em 1em;
    padding: 1em 3em;

    .title { 
      text-align: center;
      font-size: 2em; 
      font-weight: bold; 
    }

    .dashboard-data {
      display: flex;

      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      margin-top: 5em;

      .general-info {
        display: inline-block;
        margin: 0 2em;
        text-align: center;
        .label { 
          padding-top: 1rem;
          font-size: 1.6em; 
          font-weight: lighter; 
        }
  
        .info { 
          font-family: "Lilita One"; 
          font-size: 2em; 
          color: var(--golden);
        }
      }

      .info-container {
        display: inherit;
        flex-wrap: wrap;
        justify-content: center;
      }

      .circular-progress-container {
        ${CircularProgress} { margin: 0 auto; }
        .label { text-align: center; }
      }
    }

  }

  @media screen and (min-width: 421px){
    .content .title { font-size: 3em; }
  }

  @media screen and (min-width: 721px){
    .content {
      margin-left: 4em;
      margin-right: 4em;

      .title { text-align: initial; }
    }
  }

`;
