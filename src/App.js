import { Component, useState, useEffect } from 'react';

import CardList from './components/CardList/CardList.component'
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('render')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox onSearchChangeHandler={ onSearchChange } placeholderText="Search by name" />
      <CardList monsters={ filteredMonsters } />
    </div>
  );
}

export default App;