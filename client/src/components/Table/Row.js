import React from 'react';

function Row({ headers, info }) {
  return (
    <tr>
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

export default Row;