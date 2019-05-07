import React from 'react';
import contacts from '../contacts.json';
import './table.css';

const Table = () => {
  const arr = []
  for(let i = 0; i < 5; i += 1){
   arr.push(<tr>
          <th><img className="img"  src={contacts[i].pictureUrl} alt="img"></img></th>
          <th>{contacts[i].name}</th>
          <th>{contacts[i].popularity}</th>
         </tr>)
  }
  return arr
}
export default Table;