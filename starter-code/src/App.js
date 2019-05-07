import React, { Component } from 'react';
import './App.css';
import Table from './compo/Table';

class App extends Component {
  // constructor(){
  //   super();
  //   this.name;
  //   this.pictureUrl;
  //   this.popularity;
  // }   
  
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Ironhack Contacts</h1>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <Table />
        </table>
      </div>
    );
  }
}

export default App;
