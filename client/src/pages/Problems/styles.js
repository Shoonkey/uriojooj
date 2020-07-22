import styled from 'styled-components';

import Page from '../../components/Page';

export const Container = styled(Page)`
  flex-direction: column;

  main {
    display: flex;
    flex-direction: column; 
    background: #222222; 
    flex-grow: 1;
    margin: 2em 1em;
    padding: 1em 2em;
    font-family: Saira;

    > .title { 
      font-size: 2em; 
      font-weight: bold; 
      margin-bottom: 1em;
    }

    .problem-explorer {
      flex-grow: 1;
    }

  }
`;
