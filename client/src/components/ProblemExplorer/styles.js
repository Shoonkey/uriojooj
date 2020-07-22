import styled from 'styled-components';

export const Container = styled.div`

  flex-grow: 1;

  &.loading { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
  }

  table.problem-container {

    thead { background: black; }
    
    th, th button { 
      text-align: left; 
      color: gray; 
      font-weight: 300; 
    }

    tbody { background: #2b2b2b; }

    .title { 
      flex-grow: 1; 
      text-align: initial; 
    }

    /* Center ID column content */
    th:first-child, td:first-child { text-align: center; }

  }

  .problem {
    /* justify-content: space-around; */
    /* align-items: center; */

    /* background: black; */

    /* &:not(:first-child){ margin-top: 4px; } */

    

  }

  @media screen and (min-width: 721px){
    main {
      margin-left: 4em;
      margin-right: 4em;
    }
  }
`;
