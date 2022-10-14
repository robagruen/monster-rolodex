import { useState, useEffect } from 'react';

import CardList from './components/CardList/CardList.component'
import SearchBox from './components/SearchBox/SearchBox.component';

import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('Monsters Rolodex');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

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

  const onSetTitleChange = (event) => {
    const titleString = event.target.value;

    if (titleString.length > 0) {
      setTitle(titleString);
    } else {
      setTitle('Monsters Rolodex');
    }
  }

  return (
    <div className="App">
      <h1>{ title }</h1>
      <SearchBox onSearchChangeHandler={ onSearchChange } placeholderText="Search by name" />
      <SearchBox onSearchChangeHandler={ onSetTitleChange } placeholderText="Set page title" />
      <CardList monsters={ filteredMonsters } />
    </div>
  );
}

export default App;