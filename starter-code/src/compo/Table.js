import React from 'react';
import './table.css';

const Table = (props) => {
  return (
      <tr>
        <th><img className="img"  src={props.contact.pictureUrl} alt="img"></img></th>
        <th>{props.contact.name}</th>
        <th>{props.contact.popularity}</th>
      </tr>
  )
}
export default Table;