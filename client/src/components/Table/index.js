import React from 'react';

import { generateHeaders, generateRows } from './util';
import { TableContainer } from './styles';

function Table({ headers, data, ...props }) {
  
  return (
    <TableContainer {...props}>
      <thead>
        <tr>{generateHeaders(headers)}</tr>
      </thead>
      <tbody>
        {generateRows(headers, data)}
      </tbody>
    </TableContainer>
  );
}

export default Table;