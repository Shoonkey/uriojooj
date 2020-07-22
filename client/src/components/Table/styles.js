import styled from 'styled-components';

function setIconFormFromSortingState(sortingBy){
  if (sortingBy == null)
    return "opacity: 0;";
  if (sortingBy === "DESC")
    return "opacity: 1; color: white;";
  if (sortingBy === "ASC")
    return "opacity: 1; color: white; transform: rotate(180deg);";
}

export const TableContainer = styled.table`
  
  border-spacing: 0;
  border-collapse: separate;
  width: 100%;

  thead { background: black; }

  thead th, tbody tr td { padding: 8px 8px 8px 0; }
  
`;

export const HeaderContainer = styled.th`

  text-align: left;

  button {
    padding: 0;
    cursor: pointer;
    
    p { display: inline-block; }

    ion-icon {
      ${props => setIconFormFromSortingState(props.sortingBy)}
      outline: none;
      margin-left: 4px;
      vertical-align: middle;
      transition: opacity .4s, transform .4s;
    }

    &:hover ion-icon {
      opacity: 1;
    }

  }

`;