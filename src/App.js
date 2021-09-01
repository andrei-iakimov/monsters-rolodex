import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box-component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };

    //this.handleChange =this.handleChange.bind(this);
    //instead we can use lexical scoping handleChange = (e) =>{}
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  handleChange = (e) =>{
    this.setState({searchField: e.target.value});
  }


  //do not put setState inside render methods
  render(){
    //const monster = this.state.monsters;
    //a quicker way
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    );
  }
}

export default App;
