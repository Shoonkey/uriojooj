import React from 'react';

import Header from './Header';

function getRowFromData(headers, info){
  return (
    <tr key={info.id}>
      {
        headers.map(header => {
          // which key corresponds to this header on the given object?
          // this is by default the lowercased header name but may be overriden by passing a `key`
          // key to the header
          const key = header.key || header.name.toLowerCase();
      
          return <td key={key}>{info[key]}</td>;
        })
      }
    </tr>
  )
}

export function generateHeaders(headers){
  return headers.map((header, idx) => (
    <Header
      key={"header-" + idx}
      name={header.name}
      sortable={header.sortable}
      keyCorrespondent={header.key}
    />
  ));
}

/**
 * Generate, for each object in `data`, a table row with data for every header defined in `headers`
 * Example: generateRows([{ name: 'Potato' }], [{ rice: "Foo", potato: "Bar" }]) would respond with
 * [
 *  <tr>
 *    <td>Bar</td>
 *  </tr>
 * ]
 * @param {Array<Object>} headers The array of objects, each representing configuration for a header
 * @param {Array<Object>} data The array containing the data that should be presented by the table
 */
export function generateRows(headers, data){
  return data.map(info => getRowFromData(headers, info));
}