import React, { Component } from 'react';
import './App.css';
import Table from './compo/Table';
import contacts from './contacts.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contactsList: contacts.slice(0,5)
    }
  }   
  
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Ironhack Contacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsList.map((e,idx) => {
              return <Table contact={e} key={idx}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
