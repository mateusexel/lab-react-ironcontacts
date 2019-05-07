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
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
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

  sortByName(){
    const selected = this.state.contactsList.slice();
    selected.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      // a deve ser igual a b
      return 0;
    });
    this.setState({
      contactsList: selected
    })
  }

  sortByPopularity(){
    const selected = this.state.contactsList.slice();
    selected.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      // a deve ser igual a b
      return 0;
    });
    this.setState({
      contactsList: selected
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Ironhack Contacts</h1>
        <button onClick={this.clickToAdd}>Add Random Contacts</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
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
