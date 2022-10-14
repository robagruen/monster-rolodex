import { Component } from 'react';

import CardList from './components/CardList/CardList.component'
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => 
        this.setState(
          () => {
            return { 
              monsters: users,
            }
          }
      ));
  }

  onSearchChange = (e) => {
    const inputValue = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchQuery: inputValue }
    });


  }

  render() {
    const { monsters, searchQuery } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery);
    });

    return (
      <div className="App">
        <SearchBox onSearchChangeHandler={ onSearchChange } placeholderText="Search by name" />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
