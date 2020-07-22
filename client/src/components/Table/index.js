import React from 'react';

import Header from './Header';
import Row from './Row';
import { TableContainer } from './styles';

function Table({ headers, data, ...props }) {
  return (
    <TableContainer {...props}>
      <thead>
        <tr>
          {
            headers.map((header, idx) => (
              <Header
                key={"header-" + idx}
                name={header.name}
                sortable={header.sortable}
                keyCorrespondent={header.key}
              />
            ))
          }
        </tr>
      </thead>
      <tbody>
        {data.map(obj => <Row key={obj.id} headers={headers} info={obj} />)}
      </tbody>
    </TableContainer>
  );
}

export default Table;