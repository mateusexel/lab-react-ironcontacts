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
    this.clickToAdd = this.clickToAdd.bind(this);
  }
  
  clickToAdd(){
    const selected = this.state.contactsList;
    const randomContact = Math.floor(Math.random()*contacts.length)
    if(selected.includes(contacts[randomContact])){
      this.clickToAdd()
    }
    else {
      selected.push(contacts[randomContact]);
      this.setState({
        contactsList: selected
      })      
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Ironhack Contacts</h1>
        <button onClick={this.clickToAdd}>Add Random Contacts</button>
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
